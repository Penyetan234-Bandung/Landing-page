import React from 'react';
import { MessageCircle, Clock, PhoneCall, Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { OUTLET_INFO, getWhatsAppLink } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="kontak" className="section-pad bg-gradient-to-b from-[#143a2a] via-[#163e2d] to-[#123325] text-white relative overflow-hidden border-t border-[#1f563f]">
      {/* Pattern backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <SectionHeading
          light
          eyebrow="Hubungi Kami"
          title="Kontak & Pemesanan"
          desc="Punya pertanyaan atau ingin reservasi dan pemesanan? Tim Penyetan 234 Bandung siap membantu Anda dengan senang hati."
        />

        <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
          {/* Card 1: WhatsApp */}
          <ScrollReveal
            direction="up"
            delay={0.1}
            className="rounded-3xl border border-[#d2ded7] bg-white p-7 sm:p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#cc2e35] to-[#a81c22] text-white shadow-lg ring-4 ring-red-100">
                <PhoneCall className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-[#163e2d]">
                WhatsApp Pemesanan
              </h3>
              <p className="mt-2 text-2xl font-black text-[#cc2e35] tracking-wide font-display">
                {OUTLET_INFO.whatsappDisplay}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                Respon cepat untuk pesan meja, info menu, dan pemesanan Nasi Kotak rombongan.
              </p>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#cc2e35] py-3.5 text-sm font-bold text-white shadow-md transition-all hover:scale-105 active:scale-95 hover:bg-[#b5262c]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat WhatsApp Sekarang</span>
            </a>
          </ScrollReveal>

          {/* Card 2: Jam Operasional */}
          <ScrollReveal
            direction="up"
            delay={0.2}
            className="rounded-3xl border border-[#d2ded7] bg-white p-7 sm:p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5b041] to-[#e09825] text-[#163e2d] shadow-lg ring-4 ring-amber-100">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-[#163e2d]">
                Jam Operasional
              </h3>
              <p className="mt-2 text-2xl font-black text-[#163e2d] tracking-wide font-display">
                {OUTLET_INFO.hours}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                Buka setiap hari mulai pagi hingga malam. Siap menyajikan santap lezat kapan saja.
              </p>
            </div>
            <div className="mt-6 rounded-full bg-[#eef4f1] py-3 text-xs font-bold text-[#163e2d] border border-[#cbe0d5] flex items-center justify-center gap-2 shadow-xs">
              <Sparkles className="h-4 w-4 text-[#f5b041]" />
              <span>Buka Senin s/d Minggu Tanpa Libur</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
