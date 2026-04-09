import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';

export default function Terms() {
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
                            Terms of<br/>Service
                        </h1>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-invert prose-neutral max-w-none">
                        <div className="space-y-12">

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">1.
                                    Introduction</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    Welcome to Drivers Cartel. These Terms of Service govern your use of our platform,
                                    website, and services. By accessing or using Drivers Cartel, you agree to be bound
                                    by these terms. If you disagree with any part of these terms, you may not access the
                                    service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">2.
                                    Definitions</h2>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li><strong className="text-white">Platform</strong> refers to the Drivers Cartel
                                        website, mobile applications, and related services.
                                    </li>
                                    <li><strong className="text-white">Driver</strong> refers to any individual
                                        registered to provide transportation services through the Platform.
                                    </li>
                                    <li><strong className="text-white">Passenger</strong> refers to any individual who
                                        books transportation services through the Platform.
                                    </li>
                                    <li><strong className="text-white">Trip</strong> refers to a transportation service
                                        booked and completed through the Platform.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">3.
                                    Driver Requirements</h2>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    To register as a Driver, you must:
                                </p>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li>Be at least 21 years of age</li>
                                    <li>Hold a valid South African driver's license</li>
                                    <li>Have a minimum of 1 year driving experience</li>
                                    <li>Own or have access to a qualifying vehicle (2008 or newer, 4+ doors, 5-8
                                        seats)
                                    </li>
                                    <li>Pass a background check and driving record review</li>
                                    <li>Maintain valid vehicle registration and comprehensive insurance</li>
                                    <li>Pay the one-time registration fee of R250</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">4.
                                    Payments & Fees</h2>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    Drivers receive payment for completed trips based on the fare calculated by the
                                    Platform. Key payment terms:
                                </p>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li>Weekly payouts via direct deposit</li>
                                    <li>Drivers keep 100% of tips</li>
                                    <li>Platform commission is deducted from each trip fare</li>
                                    <li>Registration fee of R250 is non-refundable</li>
                                    <li>Instant cash-out options available for a small fee</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">5. Code
                                    of Conduct</h2>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    All users of the Platform must adhere to the following standards:
                                </p>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li>Treat all users with respect and professionalism</li>
                                    <li>Do not discriminate based on race, gender, religion, or disability</li>
                                    <li>Maintain a clean and safe vehicle</li>
                                    <li>Follow all traffic laws and regulations</li>
                                    <li>Do not use the Platform while under the influence of drugs or alcohol</li>
                                    <li>Do not share personal information obtained through the Platform</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">6.
                                    Safety & Security</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    Safety is our priority. Drivers must complete all required safety training, maintain
                                    valid documentation, and immediately report any incidents or accidents. The Platform
                                    includes GPS tracking for all trips, and Drivers have access to 24/7 emergency
                                    support.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">7.
                                    Termination</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    Drivers Cartel reserves the right to suspend or terminate any account for violations
                                    of these terms, safety concerns, or fraudulent activity. Drivers may also deactivate
                                    their account at any time by contacting support.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">8.
                                    Limitation of Liability</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    Drivers Cartel acts as a technology platform connecting Drivers and Passengers. We
                                    are not responsible for the actions of users on the Platform. Drivers are
                                    independent contractors, not employees of Drivers Cartel.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">9.
                                    Changes to Terms</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    We may update these Terms of Service from time to time. We will notify users of any
                                    material changes via email or through the Platform. Continued use of the Platform
                                    after changes constitutes acceptance of the new terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">10.
                                    Contact</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    For questions about these Terms of Service, please contact us at <a
                                    href="mailto:legal@driverscartel.co.za"
                                    className="text-white underline hover:no-underline">legal@driverscartel.co.za</a>.
                                </p>
                            </section>

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
