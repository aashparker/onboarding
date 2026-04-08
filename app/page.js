import Image from 'next/image';
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-white selection:text-neutral-950">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Image src='/dc-logo.svg' width={100} height={100} className='h-16 w-auto' alt='dc-logo'/>
                    <button
                        className="bg-white text-neutral-950 px-6 py-2 text-sm font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors">
                        Sign In
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-50 pb-30 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                            Drive.<br/>
                            Earn.<br/>
                            Live Free.
                        </h1>
                        <p className="text-xl text-neutral-400 max-w-md leading-relaxed">
                            Join the platform that puts drivers first. Set your own schedule,
                            earn competitive rates, and get paid weekly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href='/me/apply'
                                  className="bg-white text-neutral-950 px-8 py-4 text-lg font-black uppercase tracking-wide hover:bg-neutral-200 transition-all hover:scale-105">
                                Apply Now
                            </Link>
                            <button
                                className="border-2 border-neutral-700 text-white px-8 py-4 text-lg font-bold uppercase tracking-wide hover:border-white hover:bg-white hover:text-neutral-950 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Custom Geometric Vehicle SVG */}
                    <div className="relative hidden lg:block">
                        <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none"
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

                        <div
                            className="absolute -bottom-4 -left-4 bg-white text-neutral-950 px-6 py-4 rounded-xl shadow-2xl">
                            <div className="text-3xl font-black">R1,247</div>
                            <div className="text-xs uppercase tracking-wider font-medium">Avg. Weekly</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="border-y border-neutral-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        {value: '200+', label: 'Active Drivers'},
                        {value: 'R80', label: 'Avg. Hourly'},
                        {value: '2000+', label: 'Trips Weekly'},
                        {value: '24/7', label: 'Support'}
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-4xl md:text-5xl font-black mb-2 text-neutral-950">{stat.value}</div>
                            <div className="text-sm text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center">
                        Get Started in<br/>3 Steps
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
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
                                 className="group p-8 border border-neutral-800 rounded-2xl hover:border-white hover:bg-neutral-900 transition-all">
                                <div
                                    className="w-16 h-16 bg-white text-neutral-950 rounded-full flex items-center justify-center text-2xl font-black mb-6 group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-4">{item.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-24 px-6 bg-neutral-900">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                            Driver<br/>Requirements
                        </h2>
                        <div className="space-y-6">
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
                                <div key={req.title} className="flex items-start gap-4">
                                    <div
                                        className="w-8 h-8 bg-white text-neutral-950 rounded-full flex items-center justify-center font-black text-sm shrink-0 mt-1">✓
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">{req.title}</h4>
                                        <p className="text-neutral-400">{req.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-neutral-950 p-8 rounded-3xl border border-neutral-800">
                        <div className="space-y-4">
                            {[
                                {label: 'Vehicle Year', value: '2008 or newer'},
                                {label: 'Doors Required', value: '4 doors minimum'},
                                {label: 'Seats Required', value: '5-8 seats'},
                                {label: 'Insurance', value: 'Required'},
                                {label: 'Inspection', value: '19-point check'}
                            ].map((item, i, arr) => (
                                <div key={item.label}
                                     className={`flex justify-between items-center py-4 ${i !== arr.length - 1 ? 'border-b border-neutral-800' : ''}`}>
                                    <span className="text-neutral-400">{item.label}</span>
                                    <span className="font-bold">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-white text-neutral-950">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
                        Ready to Hit<br/>the Road?
                    </h2>
                    <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
                        Join 3,000+ drivers already earning on our platform.
                        One-time registration fee of R250.
                    </p>
                    <Link href="/me/apply"
                          className="bg-neutral-950 text-white px-10 py-5 text-lg font-black uppercase tracking-wide hover:bg-neutral-800 transition-all hover:scale-105">
                        Apply Now — R250
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-neutral-950 border-t border-neutral-800 py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                    <div>
                        <Image src='/dc-logo.svg' width={100} height={100} className='h-16 w-auto' alt='dc-logo'/>
                    </div>
                    {[
                        {title: 'Drive', links: ['Requirements']},
                        {title: 'Support', links: ['Safety', 'Contact Us']},
                        {
                            title: 'Legal',
                            links: ['Terms of Service', 'Privacy Policy', 'Background Checks']
                        }
                    ].map((col) => (
                        <div key={col.title}>
                            <h4 className="font-bold uppercase tracking-wider text-sm mb-4">{col.title}</h4>
                            <ul className="space-y-2 text-neutral-500 text-sm">
                                {col.links.map((link) => (
                                    <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div
                    className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-600 text-sm">
                    © 2026 Drivers Cartel. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
