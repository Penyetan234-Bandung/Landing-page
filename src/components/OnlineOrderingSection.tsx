import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { DELIVERY_PLATFORMS } from '../data/restaurantData';

export const OnlineOrderingSection: React.FC = () => {
  return (
    <section id="online-ordering" className="section-pad bg-[#eef4f1]/50">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Pesan Online"
          title="Tersedia di Layanan Pesan Antar"
          desc="Sedang sibuk atau ingin makan di rumah? Pesan menu favorit Penyetan 234 Bandung melalui platform pesan antar terpercaya."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {DELIVERY_PLATFORMS.map((p, idx) => (
            <ScrollReveal
              key={p.name}
              direction="up"
              delay={0.1 * (idx + 1)}
              className="surface-card bg-white flex flex-col items-center justify-between rounded-3xl p-7 text-center border border-[#d2ded7] shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col items-center w-full">
                {/* Official Brand Logo Box (SVG) */}
                <div className="mb-4 flex h-20 w-28 sm:w-32 items-center justify-center rounded-2xl bg-white p-2.5 shadow-sm border border-[#d2ded7]">
                  <img
                    src={p.logo}
                    alt={`Logo Resmi ${p.name}`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="font-display text-xl font-black text-[#163e2d]">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs text-[#334155] font-medium">
                  {p.tagline || 'Pesan praktis langsung ke tempat Anda.'}
                </p>
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:scale-105 active:scale-95"
                style={{ backgroundColor: p.color }}
              >
                <span>Pesan di {p.name}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
