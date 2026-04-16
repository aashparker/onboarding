"use client";

import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {useState} from 'react';
import {useRouter} from 'next/navigation';

export default function SignIn() {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();

    // SEND OTP
    const handleContinue = async (e) => {
        e.preventDefault();

        if (phone.length < 10) return;

        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/send-otp', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({phone}),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to send OTP');
            }

            setStep(2);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // VERIFY OTP
    const handleVerify = async (e) => {
        e.preventDefault();

        if (otp.length !== 6) return;

        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/verify-otp', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({phone, otp}),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Verification failed');
            }

            // STORE TOKEN (driver.id or session token)
            localStorage.setItem('dc_token', data.token);

            // REDIRECT
            router.push('/me/dashboard');

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-white selection:text-neutral-950">

            {/* NAV */}
            <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                    <Image
                        src='/dc-logo.svg'
                        width={100}
                        height={100}
                        loading="eager"
                        className='h-10 sm:h-12 md:h-16 w-auto'
                        alt='dc-logo'
                    />
                    <Link
                        href="/"
                        className="text-sm flex items-center gap-2 font-medium text-neutral-400 hover:text-white uppercase"
                    >
                        <ArrowLeft className='h-4 w-4'/> Back
                    </Link>
                </div>
            </nav>

            {/* CONTENT */}
            <section className="pt-32 pb-16 px-4 min-h-screen flex items-center justify-center">
                <div className="max-w-md mx-auto w-full">

                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-black uppercase mb-4">
                            Sign In
                        </h1>
                        <p className="text-neutral-400">
                            {step === 1
                                ? 'Enter your mobile number to continue'
                                : 'Enter the code we sent you'}
                        </p>
                    </div>

                    {error && (
                        <div
                            className="mb-6 p-4 bg-red-900/20 border border-red-800 rounded-xl text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    {step === 1 ? (
                        <form onSubmit={handleContinue} className="space-y-6">
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-4 text-white"
                                placeholder="082 123 4567"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black py-4 font-bold rounded-xl disabled:opacity-50"
                            >
                                {loading ? 'Sending...' : 'Continue'}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerify} className="space-y-6">
                            <input
                                type="text"
                                maxLength={6}
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-4 text-white text-2xl text-center tracking-[0.5em]"
                                placeholder="000000"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black py-4 font-bold rounded-xl disabled:opacity-50"
                            >
                                {loading ? 'Verifying...' : 'Verify'}
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setStep(1);
                                    setOtp('');
                                    setError('');
                                }}
                                className="w-full text-neutral-400 text-sm"
                            >
                                Change Number
                            </button>
                        </form>
                    )}

                    <div className="mt-10 text-center">
                        <p className="text-neutral-500 text-sm">
                            New driver?{' '}
                            <Link href="/apply" className="text-white underline">
                                Apply here
                            </Link>
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}