import React from 'react';
import { Utensils, Flame, Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';

export const ConceptPrasmanan: React.FC = () => {
  const cards = [
    {
      title: 'Free Refill',
      subtitle: 'Nasi, Sambal & Lalapan',
      desc: 'Bebas ambil dan tambah sepuasnya tanpa biaya ekstra.',
      icon: Utensils,
    },
    {
      title: 'Pilihan Nasi & Sambal',
      subtitle: 'Banyak Variasi Rasa',
      desc: 'Tersedia 3 pilihan nasi hangat dan aneka sambal ulek khas.',
      icon: Flame,
    },
    {
      title: 'Sepuasnya',
      subtitle: 'Makan Kenyang & Puas',
      desc: 'Porsi sesuai selera untuk pengalaman makan terbaik bersama keluarga.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="section-pad bg-gradient-to-b from-[#143a2a] via-[#163e2d] to-[#123325] text-white relative overflow-hidden border-t border-[#1f563f]">
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
          eyebrow="Konsep Restoran"
          title="Makan Puas, Pilih Sesuka Hati"
          desc="Penyetan 234 Bandung mengusung konsep self-service / prasmanan. Pelanggan dapat mengambil nasi, sambal, dan lalapan sepuasnya sesuai kebutuhan."
        />

        {/* 3 High-Contrast Feature Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <ScrollReveal
                key={c.title}
                direction="up"
                delay={0.15 * (idx + 1)}
                className="rounded-3xl border border-[#d2ded7] bg-white p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#f5b041]/50 shadow-xl flex flex-col items-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#cc2e35] to-[#a81c22] text-white shadow-lg font-bold ring-4 ring-red-100 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-black text-[#163e2d]">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm font-black text-[#cc2e35]">
                  {c.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#334155] font-medium">
                  {c.desc}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
