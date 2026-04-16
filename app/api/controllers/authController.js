import {supabaseAdmin} from '@/lib/supabaseAdmin';

// 📲 SEND OTP
export async function sendOtpController(phone) {
    if (!phone) {
        throw new Error('Phone is required');
    }

    const normalized = String(phone).replace(/\s/g, '');

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 mins

    const {error} = await supabaseAdmin.from('otps').insert({
        phone: normalized,
        otp,
        expires_at: expiresAt,
    });

    if (error) {
        console.error(error);
        throw new Error('Failed to send OTP');
    }

    console.log('OTP (dev only):', otp);

    return {success: true};
}

// 🔐 VERIFY OTP
export async function verifyOtpController(phone, otp) {
    if (!phone || !otp) {
        throw new Error('Phone and OTP required');
    }

    const normalized = String(phone).replace(/\s/g, '');

    // 1. Get latest OTP
    const {data: record, error} = await supabaseAdmin
        .from('otps')
        .select('*')
        .eq('phone', normalized)
        .order('created_at', {ascending: false})
        .limit(1)
        .single();

    if (error || !record) {
        throw new Error('No OTP found');
    }

    // 2. Expiry check
    if (Date.now() > record.expires_at) {
        await supabaseAdmin.from('otps').delete().eq('id', record.id);
        throw new Error('OTP expired');
    }

    // 3. Match
    if (record.otp !== String(otp)) {
        throw new Error('Invalid OTP');
    }

    // 4. Delete OTP
    await supabaseAdmin.from('otps').delete().eq('id', record.id);

    // 5. Find driver
    const {data: driver, error: driverError} = await supabaseAdmin
        .from('drivers')
        .select('*')
        .eq('phone', normalized)
        .single();

    if (driverError || !driver) {
        throw new Error('No account found. Apply first.');
    }

    // ✅ OPTION 1 AUTH (simple)
    const token = driver.id;

    return {
        success: true,
        token,
        driver: {
            id: driver.id,
            firstName: driver.first_name,
            lastName: driver.last_name,
            phone: driver.phone,
        },
    };
}