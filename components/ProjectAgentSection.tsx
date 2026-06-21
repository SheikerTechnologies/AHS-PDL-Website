/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

interface ProjectAgentSectionProps {
  agentName: string;
  agentTel: string;
  agentEmail: string;
  agentPhoto: string;
}

export default function ProjectAgentSection({
  agentName,
  agentTel,
  agentEmail,
  agentPhoto,
}: ProjectAgentSectionProps) {
  return (
    <section className="bg-surface-alt border border-border-main/80 rounded-[32px] p-6 md:p-10 text-left flex flex-col gap-6">
      <div className="flex flex-col gap-2 max-w-3xl">
        <span className="text-xs font-black text-[#c5a257] uppercase tracking-widest pl-0.5">SECTION 03</span>
        <h2 className="text-2xl md:text-3xl font-black text-text-main tracking-tight font-sans uppercase">
          Meet Our Expert Agent
        </h2>
        <p className="text-sm text-text-secondary font-medium font-sans">
          Connect directly with our elite registered broker who possesses direct exclusive relationships with premier real estate developers in Bangladesh.
        </p>
      </div>

      <div className="bg-surface-muted rounded-2xl p-6 md:p-8 border border-border-light flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-surface-alt border-4 border-surface-alt shadow-md shrink-0">
          <Image
            src={agentPhoto}
            alt={agentName}
            fill
            className="object-cover"
            sizes="128px"
            loading="lazy"
          />
          <span className="absolute bottom-1 right-2 inline-flex items-center justify-center p-1.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" title="Online" />
        </div>

        <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
          <div>
            <span className="text-[9px] font-extrabold uppercase text-[#c5a257] tracking-widest px-2.5 py-1 bg-[#c5a257]/10 rounded-full inline-block">
              TERRITORY LEAD SPECIALIST
            </span>
            <h3 className="text-2xl font-black text-text-main font-sans mt-2">{agentName}</h3>
            <p className="text-xs text-text-secondary font-medium font-sans">AHS Properties & Development Ltd. — Certified Investment Advisory Expert</p>
          </div>            <p className="text-xs text-text-secondary leading-relaxed font-normal max-w-3xl">
            With over a decade of experience escorting high-net-worth families to pristine residential properties, {agentName} provides uncompromised fiduciary representation. Fully accredited to coordinate directly across regulatory authorities and prime general contractors to ensure secure, seamless property transactions and transfers.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start pt-2 border-t border-border-main/50 mt-1">
            <a
              href={`tel:${agentTel}`}
              className="bg-surface-alt hover:bg-surface-muted text-text-main px-5 py-2.5 rounded-xl border border-border-main text-xs font-bold transition-all inline-flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#c5a257]" /> {agentTel}
            </a>
            <a
              href={`mailto:${agentEmail}`}
              className="bg-accent hover:bg-accent-hover text-text-on-accent px-5 py-2.5 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-[#dfad42]" /> {agentEmail}
            </a>
            <button
              onClick={() => alert(`Direct Secure Broker Link: Your secure consultation token has been generated. ${agentName} is reachable on VIP Channels.`)}
              className="bg-[#c5a257] hover:bg-[#b08e48] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Request VIP Video-Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
