import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft, Wallet, Calendar, Headphones, TrendingUp, Shield, Car} from 'lucide-react';

export default function LearnMore() {
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
                            Why Drive<br/>With Us
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed">
                            Join South Africa's fastest growing driver network. Here's what sets us apart.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            {
                                icon: <Wallet className="w-6 h-6"/>,
                                title: 'Competitive Earnings',
                                desc: 'Earn R80+ per hour with transparent pricing. Keep 100% of your tips and get paid weekly via direct deposit.'
                            },
                            {
                                icon: <Calendar className="w-6 h-6"/>,
                                title: 'Flexible Schedule',
                                desc: 'Drive when you want. No minimum hours, no shifts. You are your own boss.'
                            },
                            {
                                icon: <Headphones className="w-6 h-6"/>,
                                title: '24/7 Support',
                                desc: 'Our dedicated support team is always available to help you with any issues or questions.'
                            },
                            {
                                icon: <TrendingUp className="w-6 h-6"/>,
                                title: 'Growth Opportunities',
                                desc: 'Earn bonuses for high ratings, referrals, and peak hours. The more you drive, the more you earn.'
                            },
                            {
                                icon: <Shield className="w-6 h-6"/>,
                                title: 'Safety First',
                                desc: 'Every trip is tracked, every passenger is verified. Drive with peace of mind.'
                            },
                            {
                                icon: <Car className="w-6 h-6"/>,
                                title: 'Vehicle Options',
                                desc: 'From sedans to SUVs to minivans, we accept a wide range of qualifying vehicles.'
                            }
                        ].map((benefit, i) => (
                            <div key={i}
                                 className="group bg-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:border-white transition-all">
                                <div
                                    className="w-12 h-12 bg-white text-neutral-950 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-black uppercase mb-2 sm:mb-3">{benefit.title}</h3>
                                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Simple */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white text-neutral-950">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 sm:mb-8">
                        How It Works
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
                        {[
                            {step: '1', title: 'Apply', desc: 'Complete our 5-minute online application'},
                            {step: '2', title: 'Get Approved', desc: 'Pass background check and upload documents'},
                            {step: '3', title: 'Start Earning', desc: 'Get the app, go online, and drive'}
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div
                                    className="w-16 h-16 bg-neutral-950 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black uppercase mb-2">{item.title}</h3>
                                <p className="text-neutral-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-10 sm:mb-16 text-center">
                        Common Questions
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'How much can I earn?',
                                a: 'Drivers earn R80+ per hour on average. Earnings vary based on time, location, and demand. Top drivers earn over R15,000 per week.'
                            },
                            {
                                q: 'What are the requirements?',
                                a: 'You need to be 21+, have a valid license, 1+ years driving experience, and a qualifying vehicle (2008+, 4+ doors, 5-8 seats).'
                            },
                            {
                                q: 'When do I get paid?',
                                a: 'Weekly direct deposit every Tuesday. You can also cash out instantly up to 5 times per day for a small fee.'
                            },
                            {
                                q: 'Is there a sign-up bonus?',
                                a: 'New drivers who complete 100 trips in their first 30 days receive a R500 bonus.'
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                                <h3 className="text-lg font-black uppercase mb-2">{faq.q}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-neutral-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 sm:mb-6">
                        Ready to Start?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
                        Join 3,000+ drivers earning on their own terms. One-time registration fee of R250.
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
