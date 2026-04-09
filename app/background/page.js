import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';

export default function BackgroundChecks() {
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
                            Background<br/>Checks
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-invert prose-neutral max-w-none">
                        <div className="space-y-12">

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">1.
                                    Overview</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    All drivers must pass a comprehensive background check before being approved on the
                                    Drivers Cartel platform. This process typically takes 24-48 hours and is repeated
                                    annually.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">2.
                                    Criminal History Check</h2>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    We conduct a national criminal record check including:
                                </p>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li>National criminal database search</li>
                                    <li>Sex offender registry check</li>
                                    <li>Wanted persons database</li>
                                    <li>Terrorism watch lists</li>
                                    <li>County-level court records where available</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">3.
                                    Driving Record Check</h2>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    We verify your driving history through official transport department records:
                                </p>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li>License validity and classification</li>
                                    <li>Traffic violations (speeding, reckless driving, etc.)</li>
                                    <li>DUI/DWI convictions</li>
                                    <li>At-fault accidents</li>
                                    <li>License suspensions or revocations</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">4.
                                    Document Verification</h2>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    We verify the authenticity of all submitted documents:
                                </p>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li><strong className="text-white">Driver's license:</strong> Validity, photo match,
                                        and security features
                                    </li>
                                    <li><strong className="text-white">Vehicle registration:</strong> Ownership and
                                        expiry dates
                                    </li>
                                    <li><strong className="text-white">Insurance:</strong> Coverage details and validity
                                    </li>
                                    <li><strong className="text-white">Identity documents:</strong> ID or passport
                                        verification
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">5.
                                    Disqualifying Offenses</h2>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    The following will result in automatic rejection of your application:
                                </p>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li>Any felony conviction in the past 7 years</li>
                                    <li>DUI/DWI conviction in the past 7 years</li>
                                    <li>Sexual offense or violent crime conviction (lifetime disqualification)</li>
                                    <li>Drug trafficking or distribution conviction</li>
                                    <li>Theft, fraud, or property crime conviction in the past 7 years</li>
                                    <li>Currently suspended or revoked driver's license</li>
                                    <li>More than 3 moving violations in the past 3 years</li>
                                    <li>At-fault accident resulting in serious injury or death</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">6.
                                    Processing Time</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    Most background checks are completed within 24-48 hours. Complex cases or those
                                    requiring manual review may take up to 5 business days. You will receive an email
                                    notification once your check is complete.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">7. Your
                                    Rights</h2>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    Under the Fair Credit Reporting Act and applicable privacy laws, you have the right
                                    to:
                                </p>
                                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                                    <li>Be informed if information in your background check is used against you</li>
                                    <li>Know what is in your background check file</li>
                                    <li>Dispute incomplete or inaccurate information</li>
                                    <li>Obtain a free copy of your background check report</li>
                                    <li>Seek damages from violators of the FCRA</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">8.
                                    Annual Rechecks</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    All drivers undergo annual background check renewals. You may be required to provide
                                    updated documentation or consent for re-screening. Failure to complete annual
                                    rechecks will result in account suspension.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">9.
                                    Contact</h2>
                                <p className="text-neutral-400 leading-relaxed">
                                    For questions about background checks or to dispute findings, contact our Trust &
                                    Safety team at <a href="mailto:safety@driverscartel.co.za"
                                                      className="text-white underline hover:no-underline">safety@driverscartel.co.za</a>.
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
