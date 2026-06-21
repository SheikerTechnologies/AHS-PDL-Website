/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Award, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProjectBookingFormProps {
  projectTitle: string;
  agentName: string;
  selectedUnitName: string;
  scheme: string;
  onInquire: (title: string) => void;
  onBackToGrid: () => void;
  bookingRef: number;
}

export default function ProjectBookingForm({
  projectTitle,
  agentName,
  selectedUnitName,
  scheme,
  onInquire,
  onBackToGrid,
  bookingRef,
}: ProjectBookingFormProps) {
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  return (
    <section id="booking-section" className="bg-navy text-text-on-accent border border-border-main rounded-[32px] p-6 md:p-10 text-left flex flex-col lg:flex-row gap-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-stone-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left panel - Awards and Accreditations */}
      <div className="lg:w-5/12 flex flex-col gap-6 select-none">
        <span className="text-xs font-black text-[#dfad42] uppercase tracking-widest pl-0.5">SECTION 04</span>

        <div className="flex items-center gap-2">
          <Award className="w-10 h-10 text-[#dfad42] animate-bounce" />
          <h2 className="text-2xl md:text-3xl font-black text-white font-sans uppercase tracking-tight leading-tight">
            Ready to Find Your Award Lifestyle?
          </h2>
        </div>

        <p className="text-xs md:text-sm text-text-muted leading-relaxed font-normal">
          AHS Properties & Development Ltd. is the proud recipient of the <strong className="text-white font-semibold">Bangladesh Real Estate Excellence Award</strong> for uncompromised engineering quality and flawless service. Initiate your direct, confidential consultation with {agentName} directly inside our secure ecosystem today.
        </p>

        <div className="h-[1px] bg-white/10" />

        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold text-[#dfad42] tracking-widest uppercase">TRUST ACCREDITATIONS</span>
          <div className="flex flex-col gap-2">
            {[
              { title: 'RAJUK & Cantonment Approved', desc: 'Accredited premium residential and commercial developments.' },
              { title: 'Best Luxury Developer Winner 2026', desc: 'Recognized for superior quality standards.' },
              { title: '100% Secure Project Delivery Assurance', desc: 'Guaranteed compliance with national building safety acts.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2.5 items-start">
                <div className="w-4 h-4 rounded-full bg-[#dfad42]/10 border border-[#dfad42]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#dfad42]">
                  <span className="text-[8px] font-black">★</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-extrabold text-white uppercase tracking-wider">{item.title}</h4>                    <p className="text-[10px] text-text-muted mt-0.2 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - Booking Form */}
      <div className="lg:w-7/12 bg-surface-alt text-text-main rounded-2xl p-6 md:p-8 border border-border-main/5 shadow-2xl flex flex-col gap-5">
        {!bookingSubmitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!bookingName || !bookingEmail || !bookingPhone) {
                alert('Please supply all credentials before reserving your consultant calendar seat.');
                return;
              }
              setBookingSubmitted(true);
              onInquire(`${projectTitle} (VIP Pre-Reservation by ${bookingName})`);
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <span className="text-[10px] font-extrabold text-[#c5a257] uppercase tracking-widest block mb-0.5">ESTATE DESK APPOINTMENT CALENDAR</span>
              <h3 className="text-lg font-black text-text-main font-sans tracking-tight">Reserve Private Consultation Room</h3>
              <p className="text-xs text-text-secondary mt-0.5 leading-normal font-normal">
                Secure your digital reservation callback. Your private agent will trigger EDB verification and send floorplans directly.
              </p>
            </div>

            <div className="h-[1px] bg-border-light my-1" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-wider">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Admiral Alexander Sterling"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  className="w-full bg-surface-muted border border-border-main focus:border-gold-dark rounded-xl px-4 py-2.5 text-xs text-text-main font-semibold focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-wider">Secure Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +44 7911 123456"
                  value={bookingPhone}
                  onChange={(e) => setBookingPhone(e.target.value)}
                  className="w-full bg-surface-muted border border-border-main focus:border-gold-dark rounded-xl px-4 py-2.5 text-xs text-text-main font-semibold focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-[10px] font-black text-text-secondary uppercase tracking-wider">Encrypted Email Address</label>
              <input
                type="email"
                required
                placeholder="e.g. alexander@sterlingholdings.com"
                value={bookingEmail}
                onChange={(e) => setBookingEmail(e.target.value)}
                className="w-full bg-surface-muted border border-border-main focus:border-gold-dark rounded-xl px-4 py-2.5 text-xs text-text-main font-semibold focus:outline-none transition-colors"
              />
            </div>

            <div className="bg-amber-50/70 border border-amber-200/50 p-3 rounded-xl text-left flex gap-2 w-full mt-1.5">
              <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 text-amber-700">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <p className="text-[10px] text-text-secondary leading-normal font-normal">
                By submitting guidance, AHS Properties registers a formal <strong className="text-stone-900">Priority Investment Option Letter</strong> with the construction development firm on your selected unit <strong>&ldquo;{selectedUnitName}&rdquo;</strong>. Re-routing or canceling this Priority Option entails zero charges.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e2a4a] hover:bg-[#151c33] text-white text-xs font-black uppercase tracking-widest py-3.5 rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 shadow-md mt-2"
            >
              <span>Submit Pre-Reservation & Request Call</span>
              <ChevronRight className="w-4 h-4 text-[#dfad42]" />
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-6 gap-5 animate-in fade-in zoom-in-95 duration-400">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-sm border-2 border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Appointment Confirmed</span>
              <h3 className="text-xl font-bold text-text-main font-sans tracking-tight">Escrow Reserved & Saved</h3>
              <p className="text-xs text-text-secondary leading-relaxed font-normal max-w-md">
                Thank you, <strong className="text-stone-900">{bookingName}</strong>. Your priority reservation for <strong className="text-stone-950">&ldquo;{selectedUnitName}&rdquo;</strong> has been successfully broadcast to <strong className="text-stone-955">{agentName}</strong>.
              </p>
            </div>

            <div className="bg-surface-muted border border-border-main/80 rounded-xl p-4 w-full max-w-sm text-left flex flex-col gap-2 font-mono text-[11px] text-text-secondary">
              <div className="flex justify-between border-b pb-1">
                <span className="text-text-muted">BOOKING REF ID:</span>
                <span className="font-extrabold text-text-main uppercase">AHS-{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">CLIENT EMAIL:</span>
                <span className="font-semibold text-text-main">{bookingEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">MOBILE LINE:</span>
                <span className="font-semibold text-text-main">{bookingPhone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">PRODUCT SCHEME:</span>
                <span className="font-semibold text-text-main">{scheme}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">RAJUK STATUS:</span>
                <span className="text-emerald-700 font-extrabold uppercase">AUTO-QUEUED</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-xs mt-1">
              <button
                onClick={() => {
                  setBookingSubmitted(false);
                  setBookingName('');
                  setBookingEmail('');
                  setBookingPhone('');
                }}
                className="w-full bg-accent text-text-on-accent py-2.5 rounded-full text-xs font-bold hover:bg-accent-hover transition-all cursor-pointer"
              >
                Register New Booking Seat
              </button>
              <button
                onClick={onBackToGrid}
                className="w-full bg-surface-muted hover:bg-surface-muted/80 text-text-secondary py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer"
              >
                Return to Catalog Grid
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
