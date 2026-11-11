import React from 'react';
import { MessageCircle, Check } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import {
  NASI_KOTAK_LIST,
  OUTLET_INFO,
} from '../data/restaurantData';

export const NasiKotakSection: React.FC = () => {
  const getCustomCateringWhatsAppUrl = () => {
    const text = `Halo Penyetan 234 Bandung, saya ingin menanyakan informasi layanan Nasi Kotak untuk keperluan acara. Boleh minta info lebih lanjut?`;
    return `https://wa.me/${OUTLET_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="nasi-kotak" className="section-pad bg-gradient-to-b from-[#143a2a] via-[#163e2d] to-[#123325] text-white relative overflow-hidden border-t border-[#1f563f]">
      {/* Subtle traditional texture pattern */}
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
          eyebrow="Layanan Katering"
          title="Nasi Kotak untuk Berbagai Kebutuhan"
          desc="Butuh konsumsi untuk kantor, rapat, acara keluarga, pengajian, kampus, atau berbagai kegiatan lainnya? Penyetan 234 Bandung siap menyediakan Nasi Kotak lezat dan praktis."
        />

        {/* 6 Packages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NASI_KOTAK_LIST.map((pkg, idx) => (
            <ScrollReveal
              key={pkg.name}
              direction="up"
              delay={0.06 * (idx + 1)}
              className="surface-card bg-white flex flex-col overflow-hidden rounded-3xl border border-[#d2ded7] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg"
            >
              {/* Photo */}
              <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 rounded-full bg-[#163e2d] px-3 py-1 text-[11px] font-extrabold text-[#f5b041] shadow-md border border-[#f5b041]/30">
                  Paket Lengkap
                </span>
              </div>

              {/* Package Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-[#163e2d]">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-xs text-[#334155] font-medium">
                  {pkg.desc}
                </p>

                {/* Dual Pricing Pill Box: Goreng & Bakar */}
                <div className="mt-4 grid grid-cols-2 gap-2 rounded-2xl bg-[#f7f9f8] p-2.5 border border-[#d2ded7]">
                  <div className="text-center">
                    <p className="text-[11px] font-bold text-[#475569]">Goreng</p>
                    <p className="font-display font-black text-[#163e2d] text-base">
                      {pkg.goreng}
                    </p>
                  </div>
                  <div className="text-center border-l border-[#d2ded7]">
                    <p className="text-[11px] font-bold text-[#475569]">Bakar</p>
                    <p className="font-display font-black text-[#cc2e35] text-base">
                      {pkg.bakar}
                    </p>
                  </div>
                </div>

                {/* Isi Paket */}
                <div className="mt-4 flex-1">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#163e2d] mb-2">
                    Isi Paket:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#1e293b] font-medium">
                    {pkg.isi.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[#2a6b50] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Custom Order / Inquiry Callout Card */}
        <ScrollReveal
          direction="up"
          delay={0.3}
          className="mt-10 rounded-3xl bg-white p-7 shadow-2xl border border-white/20 text-center md:flex md:items-center md:justify-between md:text-left"
        >
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-[#eef4f1] border border-[#cbe0d5] px-3 py-1 text-xs font-bold text-[#163e2d] mb-2 shadow-xs">
              Layanan Pesanan Khusus
            </span>
            <h3 className="font-display text-xl font-extrabold text-[#163e2d]">
              Butuh Jumlah Banyak atau Custom Menu?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
              Hubungi kami untuk penawaran khusus acara kantor, arisan, syukuran, maupun pertemuan komunitas. Kami siap melayani pengiriman tepat waktu di seluruh area Bandung.
            </p>
          </div>

          <a
            href={getCustomCateringWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-5 md:mt-0 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#2a6b50] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-105 active:scale-95 hover:bg-[#1f543e]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Tanya Info Nasi Kotak</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
