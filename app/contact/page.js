import Image from 'next/image';
import Link from 'next/link';
import {Mail, Phone, ArrowLeft, Clock, MapPin} from 'lucide-react';

export default function Contact() {
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
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-6">
                            Contact Us
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed">
                            We're here to help. Reach out anytime and we'll get back to you within 24 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
                        <a href="tel:0800123456"
                           className="group bg-white text-neutral-950 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:bg-neutral-200 transition-all text-center">
                            <Phone className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4"/>
                            <div className="text-2xl sm:text-3xl font-black mb-2">0800 123 456</div>
                            <div className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider">24/7 Support
                            </div>
                        </a>

                        <a href="mailto:support@driverscartel.co.za"
                           className="group bg-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:border-white transition-all text-center">
                            <Mail className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4"/>
                            <div
                                className="text-lg sm:text-xl md:text-2xl font-black mb-2 break-all">support@driverscartel.co.za
                            </div>
                            <div className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider">Email Us</div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Office Hours & Location */}
            <section className="py-16 sm:py-20 md:py-12 px-4 sm:px-6 bg-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="w-6 h-6 sm:w-8 sm:h-8"/>
                                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">Support
                                    Hours</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                                    <span className="text-neutral-400">Phone Support</span>
                                    <span className="font-bold text-white">24 / 7</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                                    <span className="text-neutral-400">Email Response</span>
                                    <span className="font-bold text-white">Within 24h</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-neutral-400">Office Hours</span>
                                    <span className="font-bold text-white">Mon-Fri 9-5</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <MapPin className="w-6 h-6 sm:w-8 sm:h-8"/>
                                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">Head
                                    Office</h3>
                            </div>
                            <div className="space-y-2 text-neutral-400">
                                <p className="font-bold text-white text-lg">Drivers Cartel HQ</p>
                                <p>123 Main Road</p>
                                <p>Cape Town, 8001</p>
                                <p>South Africa</p>
                            </div>
                        </div>
                    </div>
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
