import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft, Shield, Phone, MapPin, Users, AlertTriangle, CheckCircle} from 'lucide-react';

export default function Safety() {
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
                        <div
                            className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-neutral-950"/>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-6">
                            Your Safety<br/>Comes First
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed">
                            We've built every feature with your security in mind. From 24/7 support to real-time
                            tracking, we've got you covered.
                        </p>
                    </div>
                </div>
            </section>

            {/* Safety Features */}
            <section className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            {
                                icon: <Phone className="w-6 h-6"/>,
                                title: '24/7 Emergency Line',
                                desc: 'Direct access to our emergency response team anytime, anywhere.'
                            },
                            {
                                icon: <MapPin className="w-6 h-6"/>,
                                title: 'GPS Tracking',
                                desc: 'Every trip is tracked in real-time for your security and peace of mind.'
                            },
                            {
                                icon: <Users className="w-6 h-6"/>,
                                title: 'Verified Passengers',
                                desc: 'All passengers are verified with ID and phone number before booking.'
                            },
                            {
                                icon: <CheckCircle className="w-6 h-6"/>,
                                title: 'Driver Verification',
                                desc: 'Thorough background checks and document verification for all drivers.'
                            },
                            {
                                icon: <AlertTriangle className="w-6 h-6"/>,
                                title: 'Incident Reporting',
                                desc: 'Quick and easy reporting with immediate follow-up from our team.'
                            },
                            {
                                icon: <Shield className="w-6 h-6"/>,
                                title: 'Insurance Coverage',
                                desc: 'Comprehensive insurance coverage for every trip you take.'
                            }
                        ].map((feature, i) => (
                            <div key={i}
                                 className="group bg-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:border-white transition-all">
                                <div
                                    className="w-12 h-12 bg-white text-neutral-950 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-black uppercase mb-2 sm:mb-3">{feature.title}</h3>
                                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white text-neutral-950">
                <div className="max-w-4xl mx-auto text-center">
                    <AlertTriangle className="w-12 h-12 mx-auto mb-6"/>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 sm:mb-6">
                        Emergency?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
                        If you're in immediate danger, call our emergency line or contact local authorities.
                    </p>
                    <a href="tel:0800999999"
                       className="inline-block bg-neutral-950 text-white px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-black uppercase tracking-wide hover:bg-neutral-800 transition-all hover:scale-105 rounded-sm">
                        Call Emergency Line — 0800 999 999
                    </a>
                </div>
            </section>

            {/* Safety Tips */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 sm:mb-16 text-center">
                        Safety Tips
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                        {[
                            'Always verify the passenger before starting the trip',
                            'Share your live location with trusted contacts',
                            'Keep your phone charged and accessible',
                            'Trust your instincts — cancel if something feels off',
                            'Park in well-lit, safe areas when waiting',
                            'Report any suspicious behavior immediately'
                        ].map((tip, i) => (
                            <div key={i}
                                 className="flex items-start gap-3 sm:gap-4 bg-neutral-950 border border-neutral-800 p-4 sm:p-6 rounded-xl">
                                <div
                                    className="w-6 h-6 sm:w-8 sm:h-8 bg-white text-neutral-950 rounded-full flex items-center justify-center font-black text-xs sm:text-sm shrink-0">
                                    {i + 1}
                                </div>
                                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">{tip}</p>
                            </div>
                        ))}
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
