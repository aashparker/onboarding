import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';

export default function Privacy() {
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
                            Privacy<br/>Policy
                        </h1>
                    </div>
                </div>
            </section>

            {/* Privacy Content */}
            <section className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-invert prose-neutral max-w-none">
                        <div className="space-y-12">

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">1.
                                    Information We Collect</h2>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    We collect information necessary to provide our services and ensure safety on the
                                    platform.
                                </p>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li><strong className="text-white">Personal Information:</strong> Name, email, phone
                                        number, ID number, date of birth, profile photo, driver's license, vehicle
                                        registration, insurance documents, and proof of address.
                                    </li>
                                    <li><strong className="text-white">Usage Information:</strong> GPS location during
                                        trips, trip history and routes, device information, IP address, app usage
                                        statistics, and communication records.
                                    </li>
                                    <li><strong className="text-white">Payment Information:</strong> Bank account
                                        details for payouts, transaction history, and billing address.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">2. How
                                    We Use Your Information</h2>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li><strong className="text-white">Provide services:</strong> Connect drivers with
                                        passengers, process payments, and maintain trip records.
                                    </li>
                                    <li><strong className="text-white">Ensure safety:</strong> Verify identity, conduct
                                        background checks, and monitor trips.
                                    </li>
                                    <li><strong className="text-white">Improve platform:</strong> Analyze usage patterns
                                        to enhance user experience.
                                    </li>
                                    <li><strong className="text-white">Communicate:</strong> Send trip updates,
                                        promotional offers, and important notices.
                                    </li>
                                    <li><strong className="text-white">Legal compliance:</strong> Meet regulatory
                                        requirements and respond to legal requests.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">3.
                                    Information Sharing</h2>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    We do not sell your personal information. We only share data in these limited
                                    circumstances:
                                </p>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li><strong className="text-white">Between users:</strong> Driver and passenger see
                                        each other's name, photo, and location during trips.
                                    </li>
                                    <li><strong className="text-white">Service providers:</strong> Trusted partners who
                                        help us operate the platform (payment processors, cloud storage).
                                    </li>
                                    <li><strong className="text-white">Legal authorities:</strong> When required by law
                                        or to protect safety.
                                    </li>
                                    <li><strong className="text-white">Insurance partners:</strong> To facilitate claims
                                        and coverage verification.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">4. Data
                                    Security</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    We implement industry-standard security measures including encryption, access
                                    controls, and regular security audits. All data is stored in secure, ISO-certified
                                    data centers. Despite our efforts, no system is 100% secure, and we cannot guarantee
                                    absolute security.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">5. Your
                                    Rights</h2>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    You have control over your personal information:
                                </p>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li><strong className="text-white">Access:</strong> Request a copy of your personal
                                        data.
                                    </li>
                                    <li><strong className="text-white">Correction:</strong> Update inaccurate or
                                        incomplete information.
                                    </li>
                                    <li><strong className="text-white">Deletion:</strong> Request deletion of your
                                        account and data.
                                    </li>
                                    <li><strong className="text-white">Opt-out:</strong> Unsubscribe from marketing
                                        communications.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">6. Data
                                    Retention</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    We retain your information as long as your account is active or as needed to provide
                                    services. Trip records are kept for 7 years for legal and insurance purposes. After
                                    account deletion, some data may be retained in anonymized form for analytics.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">7.
                                    Cookies & Tracking</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    We use cookies and similar technologies to improve your experience, remember
                                    preferences, and analyze usage. You can control cookies through your browser
                                    settings. Disabling cookies may affect platform functionality.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">8.
                                    Children's Privacy</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    Our platform is not intended for users under 18. We do not knowingly collect
                                    information from children. If you believe a child has provided us with personal
                                    information, please contact us immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">9.
                                    Changes to This Policy</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    We may update this Privacy Policy periodically. We will notify you of significant
                                    changes via email or through the platform. Your continued use after changes
                                    indicates acceptance of the updated policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">10.
                                    Contact Us</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    For privacy-related questions or to exercise your rights, please contact our Data
                                    Protection Officer at <a href="mailto:privacy@driverscartel.co.za"
                                                             className="text-white underline hover:no-underline">privacy@driverscartel.co.za</a>.
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
