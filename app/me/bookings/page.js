// app/bookings/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft} from "lucide-react";

export default function Bookings() {
    const trips = [
        {
            id: 'TR-7842',
            date: '13 Apr 2026',
            time: '14:30',
            pickup: 'Sandton City',
            dropoff: 'OR Tambo Airport',
            fare: 450
        },
        {
            id: 'TR-7841',
            date: '13 Apr 2026',
            time: '13:15',
            pickup: 'Rosebank Mall',
            dropoff: 'Melrose Arch',
            fare: 180
        },
        {
            id: 'TR-7840',
            date: '13 Apr 2026',
            time: '11:45',
            pickup: 'Pretoria CBD',
            dropoff: 'Menlyn Mall',
            fare: 320
        },
        {
            id: 'TR-7839',
            date: '12 Apr 2026',
            time: '18:20',
            pickup: 'Fourways',
            dropoff: 'Montecasino',
            fare: 150
        },
        {
            id: 'TR-7838',
            date: '12 Apr 2026',
            time: '16:45',
            pickup: 'JHB CBD',
            dropoff: 'Soweto',
            fare: 280
        },
        {
            id: 'TR-7837',
            date: '12 Apr 2026',
            time: '09:30',
            pickup: 'Midrand',
            dropoff: 'Centurion',
            fare: 195
        },
        {
            id: 'TR-7836',
            date: '11 Apr 2026',
            time: '20:15',
            pickup: 'Hatfield',
            dropoff: 'Lynnwood',
            fare: 120
        },
        {
            id: 'TR-7835',
            date: '11 Apr 2026',
            time: '17:00',
            pickup: 'Bedford',
            dropoff: 'Eastgate',
            fare: 85
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-white selection:text-neutral-950">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/me/dashboard" className="p-2 hover:bg-neutral-900 rounded-lg transition-colors">
                            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6"/>
                        </Link>
                        <Image src='/dc-logo.svg' width={100} height={100} className='h-8 sm:h-10 w-auto'
                               alt='dc-logo'/>
                    </div>
                </div>
            </nav>

            <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter uppercase mb-3">
                            Your<br/>Trips
                        </h1>
                        <p className="text-base sm:text-lg text-neutral-400">
                            All your completed bookings.
                        </p>
                    </div>

                    {/* Trips List */}
                    <div className="space-y-3">
                        {trips.map((trip) => (
                            <div
                                key={trip.id}
                                className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 sm:p-5 hover:border-neutral-700 transition-colors"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs font-mono text-neutral-500 mb-2">
                                            {trip.id}
                                        </div>

                                        <div className="space-y-1 mb-2">
                                            <div className="text-sm sm:text-base truncate">
                                                {trip.pickup}
                                            </div>
                                            <div className="text-sm sm:text-base text-neutral-400 truncate">
                                                {trip.dropoff}
                                            </div>
                                        </div>

                                        <div className="text-xs text-neutral-500 uppercase tracking-wider">
                                            {trip.date} • {trip.time}
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <div className="text-xl sm:text-2xl font-black">R{trip.fare}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-8 text-center">
                        <button
                            className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-950 font-black uppercase tracking-wide hover:bg-neutral-200 transition-colors rounded-sm">
                            Load More
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}