import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft, Check, X, Car, User, FileText, Shield} from 'lucide-react';

export default function Requirements() {
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

            {/* Hero Section */}
            <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-6">
                            Driver<br/>Requirements
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed">
                            Make sure you meet all the requirements before applying. It only takes 5 minutes to check.
                        </p>
                    </div>
                </div>
            </section>

            {/* Requirements Grid */}
            <section className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                        {/* Driver Requirements */}
                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <User className="w-6 h-6 text-neutral-950"/>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">Driver</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    {label: 'Age 21 or older', required: true},
                                    {label: 'Valid driver\'s license', required: true},
                                    {label: '1+ years driving experience', required: true},
                                    {label: 'Clean criminal record', required: true},
                                    {label: 'Clean driving record', required: true},
                                    {label: 'South African citizen or valid work permit', required: true}
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div
                                            className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${item.required ? 'bg-white text-neutral-950' : 'bg-neutral-800 text-neutral-500'}`}>
                                            {item.required ? <Check className="w-4 h-4"/> : <X className="w-4 h-4"/>}
                                        </div>
                                        <span
                                            className={item.required ? 'text-white' : 'text-neutral-500 line-through'}>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vehicle Requirements */}
                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <Car className="w-6 h-6 text-neutral-950"/>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">Vehicle</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    {label: '2008 or newer', required: true},
                                    {label: '4 doors minimum', required: true},
                                    {label: '5-8 seats', required: true},
                                    {label: 'Good condition, no damage', required: true},
                                    {label: 'Valid registration', required: true},
                                    {label: 'Comprehensive insurance', required: true}
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div
                                            className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${item.required ? 'bg-white text-neutral-950' : 'bg-neutral-800 text-neutral-500'}`}>
                                            {item.required ? <Check className="w-4 h-4"/> : <X className="w-4 h-4"/>}
                                        </div>
                                        <span
                                            className={item.required ? 'text-white' : 'text-neutral-500 line-through'}>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Documents */}
                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-neutral-950"/>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">Documents</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    {label: 'Driver\'s license (front & back)', required: true},
                                    {label: 'ID document or passport', required: true},
                                    {label: 'Vehicle registration papers', required: true},
                                    {label: 'Insurance certificate', required: true},
                                    {label: 'Proof of address', required: true},
                                    {label: 'Professional driving permit (PDP)', required: true}
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div
                                            className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${item.required ? 'bg-white text-neutral-950' : 'bg-neutral-800 text-neutral-500'}`}>
                                            {item.required ? <Check className="w-4 h-4"/> : <X className="w-4 h-4"/>}
                                        </div>
                                        <span
                                            className={item.required ? 'text-white font-medium' : 'text-neutral-500'}>{item.label}</span>
                                        {!item.required &&
                                            <span className="text-xs text-neutral-600 ml-auto">Optional</span>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Screening */}
                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-neutral-950"/>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">Screening</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    {label: 'Background check', required: true},
                                    {label: 'Driving record check', required: true},
                                    {label: 'Vehicle inspection', required: true},
                                    {label: 'In-person interview', required: true},
                                    {label: 'Online training course', required: true}
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div
                                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-white text-neutral-950">
                                            <Check className="w-4 h-4"/>
                                        </div>
                                        <span className="text-white">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Reference */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white text-neutral-950">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 sm:mb-16 text-center">
                        Quick Reference
                    </h2>
                    <div className="bg-neutral-100 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            <div className="text-center">
                                <div className="text-4xl sm:text-5xl font-black mb-2">21+</div>
                                <div className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider">Minimum
                                    Age
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl sm:text-5xl font-black mb-2">2008</div>
                                <div className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider">Oldest
                                    Vehicle
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl sm:text-5xl font-black mb-2">4</div>
                                <div className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider">Min
                                    Doors
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl sm:text-5xl font-black mb-2">R250</div>
                                <div
                                    className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider">Registration
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-neutral-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 sm:mb-6">
                        Meet the Requirements?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
                        Apply now and start earning in as little as 24 hours.
                    </p>
                    <Link href="/apply"
                          className="inline-block bg-white text-neutral-950 px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-black uppercase tracking-wide hover:bg-neutral-200 transition-all hover:scale-105 rounded-sm">
                        Apply Now — R250
                    </Link>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="bg-neutral-950 border-t border-neutral-800 py-8 sm:py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Image src='/dc-logo.svg' width={80} height={80} className='h-8 sm:h-10 w-auto' alt='dc-logo'/>
                    <p className="text-neutral-600 text-xs sm:text-sm">
                        © 2026 Drivers Cartel. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
