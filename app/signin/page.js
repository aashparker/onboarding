"use client"

import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {useState} from 'react';

export default function SignIn() {
    const [step, setStep] = useState(1); // 1 = phone, 2 = otp
    const [phone, setPhone] = useState('');

    const handleContinue = (e) => {
        e.preventDefault();
        if (phone.length >= 10) {
            setStep(2);
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();
        // Verify OTP logic here
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-white selection:text-neutral-950">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                    <Image src='/dc-logo.svg' width={100} height={100} className='h-10 sm:h-12 md:h-16 w-auto'
                           alt='dc-logo'/>
                    <Link href="/"
                          className="text-sm flex items-center gap-2 font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-wider">
                        <ArrowLeft className='h-4 w-4'/> Back
                    </Link>
                </div>
            </nav>

            {/* Sign In Section */}
            <section
                className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 min-h-screen flex items-center justify-center">
                <div className="max-w-md mx-auto w-full">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4">
                            Sign In
                        </h1>
                        <p className="text-neutral-400">
                            {step === 1 ? 'Enter your mobile number to continue' : 'Enter the code we sent you'}
                        </p>
                    </div>

                    {step === 1 ? (
                        <form onSubmit={handleContinue} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Mobile
                                    Number</label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-12 pr-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg placeholder:text-neutral-500"
                                        placeholder="082 123 4567"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-neutral-950 py-4 text-lg font-black uppercase tracking-wide hover:bg-neutral-200 transition-all rounded-xl"
                            >
                                Continue
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerify} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Enter
                                    OTP</label>
                                <input
                                    type="text"
                                    maxLength={6}
                                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-2xl font-black text-center tracking-[0.5em] placeholder:text-neutral-500 placeholder:tracking-normal"
                                    placeholder="000000"
                                />
                                <p className="text-neutral-500 text-sm text-center">
                                    Code sent to {phone}
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-neutral-950 py-4 text-lg font-black uppercase tracking-wide hover:bg-neutral-200 transition-all rounded-xl"
                            >
                                Verify
                            </button>

                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="w-full text-neutral-400 text-sm font-bold uppercase tracking-wide hover:text-white transition-colors"
                            >
                                Change Number
                            </button>
                        </form>
                    )}

                    <div className="mt-12 text-center">
                        <p className="text-neutral-500 text-sm">
                            New driver?{' '}
                            <Link href="/apply" className="text-white font-bold underline hover:no-underline">
                                Apply here
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            {/*<footer className="bg-neutral-950 border-t border-neutral-800 py-8 px-4 sm:px-6">*/}
            {/*    <div className="max-w-7xl mx-auto text-center text-neutral-600 text-xs sm:text-sm">*/}
            {/*        © 2026 Drivers Cartel. All rights reserved.*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </div>
    );
}
