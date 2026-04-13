"use client"

import {useState} from 'react';
import {CheckIcon, Upload} from "lucide-react";

export default function Apply() {
    const [step, setStep] = useState(1);

    const steps = [
        {num: 1, title: 'Personal'},
        {num: 2, title: 'Vehicle'},
        {num: 3, title: 'Documents'},
        {num: 4, title: 'Payment'}
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-white selection:text-neutral-950">
            <div className="min-h-screen flex flex-col lg:flex-row lg:pt-0">
                {/* Left Side - Progress & Info */}
                <div
                    className="lg:w-2/5 bg-neutral-900 p-8 lg:p-12 flex flex-col justify-between border-r border-neutral-800">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
                            Become a<br/>Driver
                        </h1>

                        {/* Progress Steps */}
                        <div className="space-y-4 mt-12">
                            {steps.map((s) => (
                                <div
                                    key={s.num}
                                    className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                                        step === s.num ? 'bg-white text-neutral-950' :
                                            step > s.num ? 'bg-neutral-800 text-white' : 'text-neutral-500'
                                    }`}
                                >
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-black ${
                                            step === s.num ? 'bg-neutral-950 text-white' :
                                                step > s.num ? 'bg-white text-neutral-950' : 'bg-neutral-800'
                                        }`}>
                                        {step > s.num ? <CheckIcon className='h-4 w-auto'/> : s.num}
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider opacity-60">Step {s.num}</div>
                                        <div className="font-bold uppercase">{s.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side - Form - WHITE BACKGROUND */}
                <div className="lg:w-3/5 bg-white p-8 lg:p-12 flex flex-col text-neutral-950">
                    <div className="max-w-xl mx-auto w-full flex-1 flex flex-col justify-center">

                        {/* Step 1: Personal */}
                        {step === 1 && (
                            <div className="space-y-6 animate-in fade-in duration-500">
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 text-neutral-950">Personal
                                        Details</h2>
                                    <p className="text-neutral-500">Tell us about yourself</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">First
                                                Name</label>
                                            <input type="text"
                                                   className="w-full bg-neutral-100 border-2 border-neutral-200 rounded-xl px-4 py-4 text-neutral-950 focus:border-neutral-950 focus:outline-none transition-colors text-lg font-medium placeholder:text-neutral-400"
                                                   placeholder="John"/>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Last
                                                Name</label>
                                            <input type="text"
                                                   className="w-full bg-neutral-100 border-2 border-neutral-200 rounded-xl px-4 py-4 text-neutral-950 focus:border-neutral-950 focus:outline-none transition-colors text-lg font-medium placeholder:text-neutral-400"
                                                   placeholder="Doe"/>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Email
                                            Address</label>
                                        <input type="email"
                                               className="w-full bg-neutral-100 border-2 border-neutral-200 rounded-xl px-4 py-4 text-neutral-950 focus:border-neutral-950 focus:outline-none transition-colors text-lg font-medium placeholder:text-neutral-400"
                                               placeholder="john@example.com"/>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Phone
                                            Number</label>
                                        <input type="tel"
                                               className="w-full bg-neutral-100 border-2 border-neutral-200 rounded-xl px-4 py-4 text-neutral-950 focus:border-neutral-950 focus:outline-none transition-colors text-lg font-medium placeholder:text-neutral-400"
                                               placeholder="082 123 4567"/>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full bg-neutral-950 text-white py-5 text-lg font-black uppercase tracking-wide hover:bg-neutral-800 transition-all rounded-xl mt-8"
                                >
                                    Continue
                                </button>
                            </div>
                        )}

                        {/* Step 2: Vehicle */}
                        {step === 2 && (
                            <div className="space-y-6 animate-in fade-in duration-500">
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 text-neutral-950">Vehicle
                                        Details</h2>
                                    <p className="text-neutral-500">Tell us about your ride</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Vehicle
                                            Make & Model</label>
                                        <input type="text"
                                               className="w-full bg-neutral-100 border-2 border-neutral-200 rounded-xl px-4 py-4 text-neutral-950 focus:border-neutral-950 focus:outline-none transition-colors text-lg font-medium placeholder:text-neutral-400"
                                               placeholder="Toyota Quantum"/>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Year</label>
                                            <select
                                                className="w-full bg-neutral-100 border-2 border-neutral-200 rounded-xl px-4 py-4 text-neutral-950 focus:border-neutral-950 focus:outline-none transition-colors text-lg appearance-none cursor-pointer font-medium">
                                                <option value="">Select Year</option>
                                                {[...Array(18)].map((_, i) => (
                                                    <option key={i} value={2025 - i}>{2025 - i}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Seats</label>
                                            <select
                                                className="w-full bg-neutral-100 border-2 border-neutral-200 rounded-xl px-4 py-4 text-neutral-950 focus:border-neutral-950 focus:outline-none transition-colors text-lg appearance-none cursor-pointer font-medium">
                                                <option value="">Select</option>
                                                <option value="5">5 Seats</option>
                                                <option value="7">7 Seats</option>
                                                <option value="8">8 Seats</option>
                                                <option value="14">14 Seats</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">License
                                            Plate</label>
                                        <input type="text"
                                               className="w-full bg-neutral-100 border-2 border-neutral-200 rounded-xl px-4 py-4 text-neutral-950 focus:border-neutral-950 focus:outline-none transition-colors text-lg font-medium uppercase placeholder:text-neutral-400"
                                               placeholder="CA 123-456"/>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-8">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="flex-1 bg-neutral-200 text-neutral-950 py-5 text-lg font-bold uppercase tracking-wide hover:bg-neutral-300 transition-all rounded-xl"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={() => setStep(3)}
                                        className="flex-[2] bg-neutral-950 text-white py-5 text-lg font-black uppercase tracking-wide hover:bg-neutral-800 transition-all rounded-xl"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Documents */}
                        {step === 3 && (
                            <div className="space-y-6 animate-in fade-in duration-500">
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 text-neutral-950">Upload
                                        Documents</h2>
                                    <p className="text-neutral-500">Clear photos or scans accepted</p>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        {label: 'Driver\'s License'},
                                        {label: 'Vehicle Registration'},
                                        {label: 'Insurance Document'},
                                        {label: 'ID / Passport'}
                                    ].map((doc) => (
                                        <div key={doc.label}
                                             className="group bg-neutral-100 border-2 border-neutral-200 border-dashed rounded-xl p-6 hover:border-neutral-950 hover:bg-neutral-200 transition-all cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-neutral-950 shadow-sm group-hover:bg-neutral-950 group-hover:text-white transition-all">
                                                    <Upload className="w-6 h-6"/>
                                                </div>
                                                <div className="flex-1">
                                                    <div
                                                        className="font-bold text-lg text-neutral-950">{doc.label}</div>
                                                    <div className="text-sm text-neutral-500">PDF, JPG or PNG (max
                                                        5MB)
                                                    </div>
                                                </div>
                                                <div
                                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-950 shadow-sm group-hover:bg-neutral-950 group-hover:text-white transition-all">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor"
                                                         viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2} d="M12 4v16m8-8H4"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-8">
                                    <button
                                        onClick={() => setStep(2)}
                                        className="flex-1 bg-neutral-200 text-neutral-950 py-5 text-lg font-bold uppercase tracking-wide hover:bg-neutral-300 transition-all rounded-xl"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={() => setStep(4)}
                                        className="flex-[2] bg-neutral-950 text-white py-5 text-lg font-black uppercase tracking-wide hover:bg-neutral-800 transition-all rounded-xl"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Payment */}
                        {step === 4 && (
                            <div className="space-y-6 animate-in fade-in duration-500">
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 text-neutral-950">Complete
                                        Registration</h2>
                                    <p className="text-neutral-500">One-time fee to get started</p>
                                </div>

                                <div className="bg-neutral-950 text-white rounded-2xl p-8">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <div
                                                className="text-sm uppercase tracking-wider text-neutral-400 font-bold">Registration
                                                Fee
                                            </div>
                                            <div className="text-xs text-neutral-500 mt-1">Non-refundable • Lifetime
                                                access
                                            </div>
                                        </div>
                                        <div className="text-6xl font-black">R250</div>
                                    </div>

                                    <div className="space-y-4">
                                        <div
                                            className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Select
                                            Payment Method
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            {['Card', 'EFT', 'Cash'].map((method) => (
                                                <button
                                                    key={method}
                                                    type="button"
                                                    className="bg-neutral-900 border-2 border-neutral-800 rounded-xl py-4 font-bold uppercase text-sm text-white hover:border-white hover:bg-white hover:text-neutral-950 transition-all"
                                                >
                                                    {method}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <label className="flex items-start gap-3 cursor-pointer bg-neutral-100 p-4 rounded-xl">
                                    <input type="checkbox"
                                           className="w-5 h-5 rounded border-neutral-300 bg-white text-neutral-950 mt-1 accent-neutral-950"/>
                                    <span className="text-neutral-600 text-sm leading-relaxed">
                                        I agree to the <a href="#" className="text-neutral-950 font-bold underline">Terms of Service</a> and <a
                                        href="#" className="text-neutral-950 font-bold underline">Privacy Policy</a>. I confirm all information provided is accurate.
                                    </span>
                                </label>

                                <div className="flex gap-4 mt-8">
                                    <button
                                        onClick={() => setStep(3)}
                                        className="flex-1 bg-neutral-200 text-neutral-950 py-5 text-lg font-bold uppercase tracking-wide hover:bg-neutral-300 transition-all rounded-xl"
                                    >
                                        Back
                                    </button>
                                    <button
                                        className="flex-2 bg-neutral-950 text-white py-5 text-lg font-black uppercase tracking-wide hover:bg-neutral-800 transition-all rounded-xl"
                                    >
                                        Pay R250 & Apply
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="mt-12 pt-8 border-t border-neutral-200 text-center">
                        <p className="text-neutral-500 text-sm">
                            © 2026 Drivers Cartel. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
