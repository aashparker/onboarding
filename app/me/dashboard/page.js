import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-white selection:text-neutral-950">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                    <Link href="/">
                        <Image src='/dc-logo.svg' width={100} height={100} className='h-10 sm:h-12 md:h-16 w-auto'
                               alt='dc-logo'/>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div
                            className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Online
                        </div>
                        <Link href='/me/profile'
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-neutral-950 rounded-full flex items-center justify-center font-black text-sm">
                            JD
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter uppercase mb-3">
                            Driver<br/>Dashboard
                        </h1>
                        <p className="text-base sm:text-lg text-neutral-400 max-w-xl">
                            Track your earnings, manage trips, and view your performance metrics.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
                        {[
                            {label: 'Total Earnings', value: 'R12,450', change: '+R1,200', trend: 'up'},
                            {label: 'Trips This Week', value: '48', change: '+12', trend: 'up'},
                            {label: 'Hours Online', value: '32', change: '+4', trend: 'up'},
                            {label: 'Rating', value: '4.9', change: '+0.1', trend: 'up'},
                        ].map((stat) => (
                            <div key={stat.label}
                                 className="bg-neutral-900 border border-neutral-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:border-neutral-700 transition-colors">
                                <div
                                    className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider mb-2">{stat.label}</div>
                                <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-emerald-400 font-medium">{stat.change} this
                                    week
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Main Content - Trips */}
                        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                            {/* Today's Summary */}
                            <div
                                className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">Today's
                                        Trips</h2>
                                    <Link href="/me/bookings"
                                          className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors">
                                        View All →
                                    </Link>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        {
                                            id: 'TR-7842',
                                            pickup: 'Sandton City',
                                            dropoff: 'OR Tambo Airport',
                                            fare: 'R450',
                                            time: '2:30 PM',
                                            status: 'completed'
                                        },
                                        {
                                            id: 'TR-7841',
                                            pickup: 'Rosebank Mall',
                                            dropoff: 'Melrose Arch',
                                            fare: 'R180',
                                            time: '1:15 PM',
                                            status: 'completed'
                                        },
                                        {
                                            id: 'TR-7840',
                                            pickup: 'Pretoria CBD',
                                            dropoff: 'Menlyn Mall',
                                            fare: 'R320',
                                            time: '11:45 AM',
                                            status: 'completed'
                                        },
                                        {
                                            id: 'TR-7839',
                                            pickup: 'Fourways',
                                            dropoff: 'Montecasino',
                                            fare: 'R150',
                                            time: '10:20 AM',
                                            status: 'completed'
                                        },
                                    ].map((trip) => (
                                        <div key={trip.id}
                                             className="flex items-center justify-between p-3 sm:p-4 bg-neutral-950 border border-neutral-800 rounded-lg sm:rounded-xl hover:border-neutral-700 transition-colors group">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span
                                                        className="text-xs font-mono text-neutral-500">{trip.id}</span>
                                                    <span
                                                        className="text-[10px] sm:text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-400 uppercase tracking-wider font-bold rounded-sm">
                                                        Done
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm sm:text-base truncate">
                                                    <span className="text-neutral-400 truncate">{trip.pickup}</span>
                                                    <span className="text-neutral-600">→</span>
                                                    <span className="truncate">{trip.dropoff}</span>
                                                </div>
                                            </div>
                                            <div className="text-right ml-4">
                                                <div className="text-lg sm:text-xl font-black">{trip.fare}</div>
                                                <div className="text-xs text-neutral-500">{trip.time}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Earnings Chart Placeholder */}
                            <div
                                className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-6">Weekly
                                    Earnings</h2>
                                <div className="h-48 sm:h-64 flex items-end justify-between gap-2 sm:gap-3">
                                    {[
                                        {day: 'Mon', amount: 850},
                                        {day: 'Tue', amount: 620},
                                        {day: 'Wed', amount: 980},
                                        {day: 'Thu', amount: 740},
                                        {day: 'Fri', amount: 1200},
                                        {day: 'Sat', amount: 1450},
                                        {day: 'Sun', amount: 1100},
                                    ].map((day) => (
                                        <div key={day.day} className="flex-1 flex flex-col items-center gap-2 group">
                                            <div
                                                className="w-full bg-neutral-800 rounded-t-sm relative overflow-hidden group-hover:bg-neutral-700 transition-colors">
                                                <div
                                                    className="absolute bottom-0 left-0 right-0 bg-white transition-all duration-300 group-hover:bg-neutral-200"
                                                    style={{height: `${(day.amount / 1500) * 100}%`}}
                                                ></div>
                                                <div className="h-32 sm:h-40"></div>
                                            </div>
                                            <span
                                                className="text-xs uppercase tracking-wider text-neutral-500 font-bold">{day.day}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-4 sm:space-y-6">
                            {/* Go Online Button */}
                            <button
                                className="w-full bg-white text-neutral-950 py-4 sm:py-6 text-lg sm:text-xl font-black uppercase tracking-wide hover:bg-neutral-200 transition-all hover:scale-[1.02] rounded-sm">
                                Go Online
                            </button>

                            {/* Quick Stats */}
                            <div
                                className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter mb-4">This
                                    Week</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                                        <span className="text-sm text-neutral-400">Online Hours</span>
                                        <span className="font-bold">32 hrs</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                                        <span className="text-sm text-neutral-400">Trips Completed</span>
                                        <span className="font-bold">48</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                                        <span className="text-sm text-neutral-400">Acceptance Rate</span>
                                        <span className="font-bold text-emerald-400">94%</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-sm text-neutral-400">Cancellation Rate</span>
                                        <span className="font-bold text-emerald-400">2%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle Status */}
                            <div
                                className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter mb-4">Vehicle</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24"
                                                 stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-bold">Toyota Corolla</div>
                                            <div className="text-xs text-neutral-500 uppercase tracking-wider">2020 •
                                                White
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-3 border-t border-neutral-800">
                                        <div className="flex items-center justify-between text-sm mb-2">
                                            <span className="text-neutral-400">Inspection Due</span>
                                            <span className="text-emerald-400 font-bold">45 days</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-neutral-400">Insurance</span>
                                            <span className="text-emerald-400 font-bold">Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}