import Image from 'next/image';
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-white selection:text-neutral-950">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                    <Image src='/dc-logo.svg' width={100} height={100} className='h-10 sm:h-12 md:h-16 w-auto'
                           alt='dc-logo'/>
                    <Link href='/signin'
                        className="bg-white text-neutral-950 px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors rounded-sm">
                        Sign In
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 sm:pt-32 md:pt-40 lg:pt-50 pb-16 sm:pb-20 md:pb-30 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                            Drive.<br/>
                            Earn.<br/>
                            Live Free.
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-md mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                            Join the platform that puts drivers first. Set your own schedule,
                            earn competitive rates, and get paid weekly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <Link href='/apply'
                                  className="bg-white text-neutral-950 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-black uppercase tracking-wide hover:bg-neutral-200 transition-all hover:scale-105 rounded-sm text-center">
                                Apply Now
                            </Link>
                            <Link href='/learn'
                                className="border-2 border-neutral-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold uppercase tracking-wide hover:border-white hover:bg-white hover:text-neutral-950 transition-all rounded-sm">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Custom Geometric Vehicle SVG */}
                    <div className="relative mt-8 lg:mt-0">
                        <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto lg:max-w-none" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#262626" strokeWidth="1"/>
                                </pattern>
                            </defs>
                            <rect width="400" height="300" fill="url(#grid)"/>
                            <path d="M 60 180 L 340 180 L 340 140 L 300 100 L 140 100 L 100 140 L 60 140 Z"
                                  fill="white"/>
                            <path d="M 110 140 L 145 110 L 200 110 L 200 140 Z" fill="#171717"/>
                            <path d="M 210 140 L 210 110 L 290 110 L 325 140 Z" fill="#171717"/>
                            <circle cx="110" cy="180" r="35" fill="#171717" stroke="white" strokeWidth="4"/>
                            <circle cx="110" cy="180" r="15" fill="white"/>
                            <circle cx="290" cy="180" r="35" fill="#171717" stroke="white" strokeWidth="4"/>
                            <circle cx="290" cy="180" r="15" fill="white"/>
                            <rect x="330" y="145" width="15" height="20" rx="3" fill="#fbbf24"/>
                            <rect x="55" y="145" width="10" height="20" rx="2" fill="#dc2626"/>
                            <line x1="205" y1="140" x2="205" y2="180" stroke="#171717" strokeWidth="2"/>
                            <rect x="215" y="150" width="8" height="3" rx="1" fill="#171717"/>
                            <rect x="0" y="220" width="400" height="4" fill="#404040"/>
                            <rect x="50" y="220" width="60" height="4" fill="white" opacity="0.5"/>
                            <rect x="170" y="220" width="60" height="4" fill="white" opacity="0.5"/>
                            <rect x="290" y="220" width="60" height="4" fill="white" opacity="0.5"/>
                            <line x1="20" y1="120" x2="50" y2="120" stroke="white" strokeWidth="3" opacity="0.3"/>
                            <line x1="10" y1="140" x2="40" y2="140" stroke="white" strokeWidth="2" opacity="0.2"/>
                            <line x1="350" y1="130" x2="380" y2="130" stroke="white" strokeWidth="2" opacity="0.3"/>
                        </svg>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="border-y border-neutral-200 bg-white">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                    {[
                        {value: '200+', label: 'Active Drivers'},
                        {value: 'R80', label: 'Avg. Hourly'},
                        {value: '2000+', label: 'Trips Weekly'},
                        {value: '24/7', label: 'Support'}
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-neutral-950">{stat.value}</div>
                            <div
                                className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-10 sm:mb-16 text-center">
                        Get Started in<br className="hidden sm:block"/> 3 Steps
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {[
                            {
                                step: 1,
                                title: 'Apply Online',
                                desc: 'Fill out our quick application. Takes less than 5 minutes. No credit check required.'
                            },
                            {
                                step: 2,
                                title: 'Upload Docs',
                                desc: 'Driver\'s license, insurance, and vehicle registration. Our team reviews within 24 hours.'
                            },
                            {
                                step: 3,
                                title: 'Start Driving',
                                desc: 'Get the app, go online, and start accepting rides. Get paid weekly via direct deposit.'
                            }
                        ].map((item) => (
                            <div key={item.step}
                                 className="group p-6 sm:p-8 border border-neutral-800 rounded-xl sm:rounded-2xl hover:border-white hover:bg-neutral-900 transition-all">
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-neutral-950 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black uppercase mb-2 sm:mb-4">{item.title}</h3>
                                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-neutral-900">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 sm:mb-8">
                            Driver<br/>Requirements
                        </h2>
                        <div className="space-y-4 sm:space-y-6">
                            {[
                                {
                                    title: 'Age & Experience',
                                    desc: 'Must be 21+ with at least 1 year of driving experience (3 years if under 25)'
                                },
                                {
                                    title: 'Valid Documents',
                                    desc: 'Current driver\'s license, registration, and insurance in your name'
                                },
                                {
                                    title: 'Vehicle Standards',
                                    desc: '4-door vehicle, 2008 or newer, in good condition with no cosmetic damage'
                                },
                                {
                                    title: 'Background Check',
                                    desc: 'Clean driving record and pass criminal background screening'
                                }
                            ].map((req) => (
                                <div key={req.title} className="flex items-start gap-3 sm:gap-4">
                                    <div
                                        className="w-6 h-6 sm:w-8 sm:h-8 bg-white text-neutral-950 rounded-full flex items-center justify-center font-black text-xs sm:text-sm shrink-0 mt-0.5 sm:mt-1">✓
                                    </div>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold mb-1">{req.title}</h4>
                                        <p className="text-sm sm:text-base text-neutral-400">{req.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="bg-neutral-950 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-800 mt-6 lg:mt-0">
                        <div className="space-y-3 sm:space-y-4">
                            {[
                                {label: 'Vehicle Year', value: '2008 or newer'},
                                {label: 'Doors Required', value: '4 doors minimum'},
                                {label: 'Seats Required', value: '5-8 seats'},
                                {label: 'Insurance', value: 'Required'},
                                {label: 'Inspection', value: '19-point check'}
                            ].map((item, i, arr) => (
                                <div key={item.label}
                                     className={`flex justify-between items-center py-3 sm:py-4 ${i !== arr.length - 1 ? 'border-b border-neutral-800' : ''}`}>
                                    <span className="text-sm sm:text-base text-neutral-400">{item.label}</span>
                                    <span className="text-sm sm:text-base font-bold">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white text-neutral-950">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter mb-4 sm:mb-8">
                        Ready to Hit<br/>the Road?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
                        Join 200+ drivers already earning on our platform.
                        One-time registration fee of R250.
                    </p>
                    <Link href="/apply"
                          className="inline-block bg-neutral-950 text-white px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-black uppercase tracking-wide hover:bg-neutral-800 transition-all hover:scale-105 rounded-sm">
                        Apply Now — R250
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-neutral-950 border-t border-neutral-800 py-12 sm:py-16 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/">
                            <Image src='/dc-logo.svg' width={100} height={100} className='h-10 sm:h-12 md:h-16 w-auto'
                                   alt='dc-logo'/>
                        </Link>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">Drive</h4>
                        <ul className="space-y-2 text-neutral-500 text-xs sm:text-sm">
                            <li>
                                <Link href="/requirements"
                                      className="hover:text-white transition-colors">Requirements</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">Support</h4>
                        <ul className="space-y-2 text-neutral-500 text-xs sm:text-sm">
                            <li>
                                <Link href="/safety" className="hover:text-white transition-colors">Safety</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">Legal</h4>
                        <ul className="space-y-2 text-neutral-500 text-xs sm:text-sm">
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">Terms of
                                    Service</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">Privacy
                                    Policy</Link>
                            </li>
                            <li>
                                <Link href="/background" className="hover:text-white transition-colors">Background
                                    Checks</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-800 text-center text-neutral-600 text-xs sm:text-sm">
                    © 2026 Drivers Cartel. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
