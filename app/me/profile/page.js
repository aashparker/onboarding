// app/profile/page.tsx
"use client"

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft, Camera, Check, ChevronRight, Edit3, FileText, LogOut, Save, Upload, User, X} from "lucide-react";

export default function Profile() {
    const [activeTab, setActiveTab] = useState('personal');
    const [isEditing, setIsEditing] = useState(false);
    const [showSaveSuccess, setShowSaveSuccess] = useState(false);

    // Form states
    const [personalData, setPersonalData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '082 123 4567',
        idNumber: '9001015009087',
        address: '123 Main Street, Sandton, Johannesburg'
    });

    const [vehicleData, setVehicleData] = useState({
        make: 'Toyota',
        model: 'Corolla',
        year: '2020',
        color: 'White',
        seats: '5',
        licensePlate: 'CA 123-456',
        vin: 'JTDBU4EE3B9123456'
    });

    const handleSave = () => {
        setIsEditing(false);
        setShowSaveSuccess(true);
        setTimeout(() => setShowSaveSuccess(false), 3000);
    };

    const tabs = [
        {id: 'personal', label: 'Personal', icon: User},
        {id: 'vehicle', label: 'Vehicle', icon: FileText},
        {id: 'documents', label: 'Documents', icon: Upload},
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
                    <div className="flex items-center gap-3">
                        {showSaveSuccess && (
                            <div
                                className="hidden sm:flex items-center gap-2 text-emerald-400 text-sm font-bold uppercase tracking-wider animate-in fade-in slide-in-from-right-4 duration-300">
                                <Check className="w-4 h-4"/>
                                Saved
                            </div>
                        )}
                        <button
                            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                            className={`flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-sm transition-all ${
                                isEditing
                                    ? 'bg-white text-neutral-950 hover:bg-neutral-200'
                                    : 'bg-neutral-800 text-white hover:bg-neutral-700'
                            }`}
                        >
                            {isEditing ? (
                                <><Save className="w-4 h-4"/> Save</>
                            ) : (
                                <><Edit3 className="w-4 h-4"/> Edit</>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter uppercase mb-3">
                            Your<br/>Profile
                        </h1>
                        <p className="text-base sm:text-lg text-neutral-400 max-w-xl">
                            Manage your personal information, vehicle details, and documents.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Profile Card */}
                            <div
                                className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-6 text-center">
                                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                                    <div
                                        className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-black">
                                        JD
                                    </div>
                                    {isEditing && (
                                        <button
                                            className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-white text-neutral-950 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors shadow-lg">
                                            <Camera className="w-4 h-4 sm:w-5 sm:h-5"/>
                                        </button>
                                    )}
                                </div>
                                <div
                                    className="font-bold text-lg sm:text-xl mb-1">{personalData.firstName} {personalData.lastName}</div>
                                <div
                                    className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider mb-4">Driver
                                    ID: DC-7842
                                </div>
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                                    Active
                                </div>
                            </div>

                            {/* Navigation */}
                            <div
                                className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl overflow-hidden">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center justify-between p-4 sm:p-5 text-left transition-all border-b border-neutral-800 last:border-0 ${
                                            activeTab === tab.id
                                                ? 'bg-white text-neutral-950'
                                                : 'hover:bg-neutral-800 text-neutral-400 hover:text-white'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <tab.icon className="w-5 h-5"/>
                                            <span
                                                className="font-bold uppercase tracking-wider text-sm">{tab.label}</span>
                                        </div>
                                        <ChevronRight
                                            className={`w-4 h-4 transition-transform ${activeTab === tab.id ? 'rotate-90' : ''}`}/>
                                    </button>
                                ))}
                            </div>

                            {/* Logout */}
                            <button
                                className="w-full flex items-center justify-center gap-2 p-4 border border-red-900/30 text-red-400 rounded-xl sm:rounded-2xl hover:bg-red-900/10 transition-all font-bold uppercase tracking-wider text-sm">
                                <LogOut className="w-4 h-4"/>
                                Sign Out
                            </button>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Personal Tab */}
                            {activeTab === 'personal' && (
                                <div
                                    className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 animate-in fade-in duration-300">
                                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-1">Personal
                                                Details</h2>
                                            <p className="text-sm text-neutral-500">Update your basic information</p>
                                        </div>
                                        {isEditing && (
                                            <div
                                                className="text-xs text-neutral-500 uppercase tracking-wider bg-neutral-950 px-3 py-2 rounded-lg">
                                                Editing
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">First
                                                Name</label>
                                            <input
                                                type="text"
                                                value={personalData.firstName}
                                                onChange={(e) => setPersonalData({
                                                    ...personalData,
                                                    firstName: e.target.value
                                                })}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neutral-600"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Last
                                                Name</label>
                                            <input
                                                type="text"
                                                value={personalData.lastName}
                                                onChange={(e) => setPersonalData({
                                                    ...personalData,
                                                    lastName: e.target.value
                                                })}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neutral-600"
                                            />
                                        </div>
                                        <div className="space-y-2 sm:col-span-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Email
                                                Address</label>
                                            <input
                                                type="email"
                                                value={personalData.email}
                                                onChange={(e) => setPersonalData({
                                                    ...personalData,
                                                    email: e.target.value
                                                })}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neutral-600"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Phone
                                                Number</label>
                                            <input
                                                type="tel"
                                                value={personalData.phone}
                                                onChange={(e) => setPersonalData({
                                                    ...personalData,
                                                    phone: e.target.value
                                                })}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neutral-600"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">ID
                                                Number</label>
                                            <input
                                                type="text"
                                                value={personalData.idNumber}
                                                onChange={(e) => setPersonalData({
                                                    ...personalData,
                                                    idNumber: e.target.value
                                                })}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neutral-600"
                                            />
                                        </div>
                                        <div className="space-y-2 sm:col-span-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Home
                                                Address</label>
                                            <textarea
                                                value={personalData.address}
                                                onChange={(e) => setPersonalData({
                                                    ...personalData,
                                                    address: e.target.value
                                                })}
                                                disabled={!isEditing}
                                                rows={3}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neutral-600 resize-none"
                                            />
                                        </div>
                                    </div>

                                    {isEditing && (
                                        <div className="flex gap-3 mt-8 pt-6 border-t border-neutral-800">
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="flex-1 bg-neutral-800 text-white py-4 text-base font-bold uppercase tracking-wide hover:bg-neutral-700 transition-all rounded-xl"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={handleSave}
                                                className="flex-[2] bg-white text-neutral-950 py-4 text-base font-black uppercase tracking-wide hover:bg-neutral-200 transition-all rounded-xl"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Vehicle Tab */}
                            {activeTab === 'vehicle' && (
                                <div
                                    className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 animate-in fade-in duration-300">
                                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-1">Vehicle
                                                Details</h2>
                                            <p className="text-sm text-neutral-500">Update your vehicle information</p>
                                        </div>
                                        {isEditing && (
                                            <div
                                                className="text-xs text-neutral-500 uppercase tracking-wider bg-neutral-950 px-3 py-2 rounded-lg">
                                                Editing
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Make</label>
                                            <input
                                                type="text"
                                                value={vehicleData.make}
                                                onChange={(e) => setVehicleData({...vehicleData, make: e.target.value})}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Model</label>
                                            <input
                                                type="text"
                                                value={vehicleData.model}
                                                onChange={(e) => setVehicleData({
                                                    ...vehicleData,
                                                    model: e.target.value
                                                })}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Year</label>
                                            <select
                                                value={vehicleData.year}
                                                onChange={(e) => setVehicleData({...vehicleData, year: e.target.value})}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer"
                                            >
                                                {[...Array(18)].map((_, i) => (
                                                    <option key={i} value={2025 - i}
                                                            className="bg-neutral-900">{2025 - i}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Color</label>
                                            <input
                                                type="text"
                                                value={vehicleData.color}
                                                onChange={(e) => setVehicleData({
                                                    ...vehicleData,
                                                    color: e.target.value
                                                })}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Seating
                                                Capacity</label>
                                            <select
                                                value={vehicleData.seats}
                                                onChange={(e) => setVehicleData({
                                                    ...vehicleData,
                                                    seats: e.target.value
                                                })}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer"
                                            >
                                                <option value="5">5 Seats</option>
                                                <option value="7">7 Seats</option>
                                                <option value="8">8 Seats</option>
                                                <option value="14">14 Seats</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">License
                                                Plate</label>
                                            <input
                                                type="text"
                                                value={vehicleData.licensePlate}
                                                onChange={(e) => setVehicleData({
                                                    ...vehicleData,
                                                    licensePlate: e.target.value.toUpperCase()
                                                })}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                        </div>
                                        <div className="space-y-2 sm:col-span-2">
                                            <label
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">VIN
                                                Number</label>
                                            <input
                                                type="text"
                                                value={vehicleData.vin}
                                                onChange={(e) => setVehicleData({
                                                    ...vehicleData,
                                                    vin: e.target.value.toUpperCase()
                                                })}
                                                disabled={!isEditing}
                                                className="w-full bg-neutral-950 border-2 border-neutral-800 rounded-xl px-4 py-4 text-white focus:border-white focus:outline-none transition-colors text-lg font-medium uppercase disabled:opacity-50 disabled:cursor-not-allowed tracking-wider"
                                            />
                                        </div>
                                    </div>

                                    {/* Vehicle Status */}
                                    <div
                                        className="mt-8 p-4 sm:p-6 bg-neutral-950 rounded-xl border border-neutral-800">
                                        <div className="flex items-center justify-between mb-4">
                                            <span
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500">Vehicle Status</span>
                                            <span
                                                className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full">Approved</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span className="text-neutral-500 block mb-1">Last Inspection</span>
                                                <span className="font-medium">12 Jan 2026</span>
                                            </div>
                                            <div>
                                                <span className="text-neutral-500 block mb-1">Next Due</span>
                                                <span className="font-medium">12 Jul 2026</span>
                                            </div>
                                        </div>
                                    </div>

                                    {isEditing && (
                                        <div className="flex gap-3 mt-8 pt-6 border-t border-neutral-800">
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="flex-1 bg-neutral-800 text-white py-4 text-base font-bold uppercase tracking-wide hover:bg-neutral-700 transition-all rounded-xl"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={handleSave}
                                                className="flex-[2] bg-white text-neutral-950 py-4 text-base font-black uppercase tracking-wide hover:bg-neutral-200 transition-all rounded-xl"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Documents Tab */}
                            {activeTab === 'documents' && (
                                <div
                                    className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 animate-in fade-in duration-300">
                                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-1">Documents</h2>
                                            <p className="text-sm text-neutral-500">Manage your uploaded documents</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            {
                                                name: 'Driver\'s License',
                                                status: 'verified',
                                                date: 'Verified on 15 Jan 2026',
                                                expiry: 'Expires 20 Dec 2028'
                                            },
                                            {
                                                name: 'Vehicle Registration',
                                                status: 'verified',
                                                date: 'Verified on 15 Jan 2026',
                                                expiry: 'Expires 15 Jan 2027'
                                            },
                                            {
                                                name: 'Insurance Document',
                                                status: 'verified',
                                                date: 'Verified on 15 Jan 2026',
                                                expiry: 'Expires 15 Jan 2027'
                                            },
                                            {
                                                name: 'ID Document',
                                                status: 'verified',
                                                date: 'Verified on 15 Jan 2026',
                                                expiry: 'No expiry'
                                            },
                                            {
                                                name: 'Professional Driving Permit',
                                                status: 'pending',
                                                date: 'Uploaded on 10 Apr 2026',
                                                expiry: 'Under review'
                                            },
                                        ].map((doc, idx) => (
                                            <div key={idx}
                                                 className="group bg-neutral-950 border border-neutral-800 rounded-xl p-4 sm:p-6 hover:border-neutral-700 transition-all">
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex items-start gap-4">
                                                        <div
                                                            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                                                doc.status === 'verified' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                                                            }`}>
                                                            {doc.status === 'verified' ? (
                                                                <Check className="w-6 h-6 sm:w-7 sm:h-7"/>
                                                            ) : (
                                                                <div
                                                                    className="w-6 h-6 sm:w-7 sm:h-7 border-2 border-current border-t-transparent rounded-full animate-spin"/>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <div
                                                                className="font-bold text-lg sm:text-xl mb-1">{doc.name}</div>
                                                            <div
                                                                className="text-xs sm:text-sm text-neutral-500 mb-1">{doc.date}</div>
                                                            <div
                                                                className={`text-xs font-bold uppercase tracking-wider ${
                                                                    doc.status === 'verified' ? 'text-emerald-400' : 'text-amber-400'
                                                                }`}>
                                                                {doc.status === 'verified' ? '✓ Verified' : '⏳ Pending Review'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-xs text-neutral-500 mb-1">Valid until</div>
                                                        <div className="text-sm font-medium">{doc.expiry}</div>
                                                        {isEditing && (
                                                            <button
                                                                className="mt-3 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors flex items-center gap-1 ml-auto">
                                                                <Upload className="w-3 h-3"/>
                                                                Replace
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {isEditing && (
                                        <div
                                            className="mt-6 p-4 border-2 border-dashed border-neutral-700 rounded-xl hover:border-white hover:bg-neutral-800/50 transition-all cursor-pointer group">
                                            <div
                                                className="flex flex-col items-center gap-3 text-neutral-500 group-hover:text-white transition-colors">
                                                <div
                                                    className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-neutral-950 transition-all">
                                                    <Upload className="w-5 h-5"/>
                                                </div>
                                                <div className="text-center">
                                                    <div
                                                        className="font-bold uppercase tracking-wider text-sm mb-1">Upload
                                                        New Document
                                                    </div>
                                                    <div className="text-xs">PDF, JPG or PNG (max 5MB)</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}