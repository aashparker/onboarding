import {NextResponse} from 'next/server';
import {sendOtpController} from '@/app/api/controllers/authController';

export async function POST(req) {
    try {
        const {phone} = await req.json();

        const result = await sendOtpController(phone);

        return NextResponse.json(result);
    } catch (err) {
        return NextResponse.json(
            {error: err.message},
            {status: 400}
        );
    }
}