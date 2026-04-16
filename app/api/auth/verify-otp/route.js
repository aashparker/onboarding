import {NextResponse} from 'next/server';
import {verifyOtpController} from '@/app/api/controllers/authController';

export async function POST(req) {
    try {
        const {phone, otp} = await req.json();

        const result = await verifyOtpController(phone, otp);

        return NextResponse.json(result);
    } catch (err) {
        return NextResponse.json(
            {error: err.message},
            {status: 400}
        );
    }
}