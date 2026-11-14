import React, { useState } from 'react';
import { MessageCircle, Check, PackageCheck, UtensilsCrossed } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import {
  NASI_KOTAK_LIST,
  OUTLET_INFO,
} from '../data/restaurantData';

type NaskotVariant = 'kumplit' | 'kenyang';

const VARIANT_OPTIONS: {
  id: NaskotVariant;
  name: string;
  tag: string;
  summary: string;
  items: string[];
}[] = [
  {
    id: 'kumplit',
    name: 'Paket Kumplit',
    tag: 'Isian Standar Favorit',
    summary: 'Perpaduan lauk penyetan favorit dengan jukut goreng renyah.',
    items: [
      'Nasi Putih',
      'Lauk Utama',
      'Terong Goreng',
      'Tahu Goreng',
      'Jukut Goreng',
      '2 Pilihan Sambal',
    ],
  },
  {
    id: 'kenyang',
    name: 'Paket Kenyang',
    tag: 'Ekstra Capcay & Soun',
    summary: 'Porsi lebih lengkap dengan tambahan capcay, soun, dan lalapan segar.',
    items: [
      'Nasi Putih',
      'Lauk Utama',
      'Capcay',
      'Soun',
      'Terong Goreng',
      'Tahu Goreng',
      'Lalapan',
      '2 Sambal',
    ],
  },
];

export const NasiKotakSection: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<NaskotVariant>('kumplit');

  const getCustomCateringWhatsAppUrl = () => {
    const variantLabel = selectedVariant === 'kumplit' ? 'Paket Kumplit' : 'Paket Kenyang';
    const text = `Halo Penyetan 234 Bandung, saya ingin menanyakan informasi layanan Nasi Kotak (${variantLabel}) untuk keperluan acara. Boleh minta info lebih lanjut?`;
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

        {/* 2 Varian Isian Nasi Kotak Selector */}
        <ScrollReveal direction="up" delay={0.05} className="mb-9">
          <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center sm:text-left">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#f5b041]">
              Tersedia 2 Varian Isian Nasi Kotak (Pilih untuk melihat detail tiap menu):
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {VARIANT_OPTIONS.map((variant) => {
              const isActive = selectedVariant === variant.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`text-left rounded-3xl p-5 sm:p-6 transition-all duration-300 border bg-white cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'ring-4 ring-[#f5b041] border-[#f5b041] shadow-2xl scale-[1.01]'
                      : 'border-white/40 opacity-90 hover:opacity-100 hover:border-[#f5b041]/70 shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                            isActive
                              ? 'bg-[#cc2e35] text-white'
                              : 'bg-[#eef4f1] text-[#163e2d]'
                          }`}
                        >
                          {variant.id === 'kumplit' ? (
                            <PackageCheck className="h-5 w-5" />
                          ) : (
                            <UtensilsCrossed className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-extrabold text-[#163e2d] leading-tight">
                            {variant.name}
                          </h3>
                          <p className="text-[11px] font-bold text-[#cc2e35]">
                            {variant.tag}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide ${
                          isActive
                            ? 'bg-[#163e2d] text-[#f5b041]'
                            : 'bg-[#eef4f1] text-[#2a6b50] border border-[#cbe0d5]'
                        }`}
                      >
                        {isActive ? 'Sedang Ditampilkan' : 'Lihat Isian'}
                      </span>
                    </div>

                    <p className="text-xs text-[#334155] font-medium mb-3">
                      {variant.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-[#e2ece7]">
                    {variant.items.map((item) => (
                      <span
                        key={item}
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                          isActive
                            ? 'bg-[#eef4f1] text-[#163e2d] border border-[#cbe0d5]'
                            : 'bg-[#f7f9f8] text-[#334155] border border-[#d2ded7]'
                        }`}
                      >
                        <Check className="h-3 w-3 text-[#2a6b50] shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* 6 Packages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NASI_KOTAK_LIST.map((pkg, idx) => {
            const activeItems =
              selectedVariant === 'kumplit' ? pkg.isi : pkg.isiKenyang;
            const activeBadge =
              selectedVariant === 'kumplit' ? 'Paket Kumplit' : 'Paket Kenyang';

            return (
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
                  <span
                    className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-extrabold shadow-md border ${
                      selectedVariant === 'kumplit'
                        ? 'bg-[#163e2d] text-[#f5b041] border-[#f5b041]/30'
                        : 'bg-[#cc2e35] text-white border-white/25'
                    }`}
                  >
                    {activeBadge}
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
                      Isi {activeBadge}:
                    </p>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-[#1e293b] font-medium">
                      {activeItems.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <Check className="h-3.5 w-3.5 text-[#2a6b50] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
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
