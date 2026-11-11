import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { OUTLET_INFO } from '../data/restaurantData';

export const SocialSection: React.FC = () => {
  return (
    <section id="sosial-media" className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Media Sosial"
          title="Ikuti Penyetan 234 Bandung"
          desc="Dapatkan informasi promo terbaru, menu baru, dan keseruan aktivitas restoran kami melalui media sosial resmi."
        />

        <div className="mx-auto max-w-3xl grid gap-6 sm:grid-cols-2">
          {/* Instagram Card */}
          <ScrollReveal
            direction="up"
            delay={0.1}
            className="surface-card bg-white flex flex-col justify-between rounded-3xl p-7 border border-[#d2ded7] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center"
          >
            <div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white shadow-md">
                <Instagram className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#163e2d]">
                Instagram
              </h3>
              <p className="mt-1 font-bold text-[#cc2e35]">
                {OUTLET_INFO.socialHandle}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#334155] font-medium">
                Foto sajian lezat, update promo mingguan, serta cerita pelanggan kami.
              </p>
            </div>

            <div className="mt-6 pt-4">
              <a
                href={OUTLET_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#dd2a7b] to-[#8134af] py-2.5 text-xs font-bold text-white shadow-xs transition-transform hover:scale-105 active:scale-95"
              >
                <span>Buka Instagram</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </ScrollReveal>

          {/* TikTok Card */}
          <ScrollReveal
            direction="up"
            delay={0.2}
            className="surface-card bg-white flex flex-col justify-between rounded-3xl p-7 border border-[#d2ded7] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center"
          >
            <div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white shadow-md">
                <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.87-4.49V8.65a8.28 8.28 0 0 0 5.21 1.84V7.07a4.83 4.83 0 0 1-1.31-.38z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-[#163e2d]">
                TikTok
              </h3>
              <p className="mt-1 font-bold text-[#163e2d]">
                {OUTLET_INFO.socialHandle}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#334155] font-medium">
                Video proses masak, rekomendasi sambal ulek, dan keseruan makan puas.
              </p>
            </div>

            <div className="mt-6 pt-4">
              <a
                href={OUTLET_INFO.tiktok}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black py-2.5 text-xs font-bold text-white shadow-xs transition-transform hover:scale-105 active:scale-95"
              >
                <span>Buka TikTok</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
