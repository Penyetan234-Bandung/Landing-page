import React from 'react';
import { MapPin, Clock, Navigation, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { OUTLET_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="lokasi" className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Lokasi Restoran"
          title="Kunjungi Penyetan 234 Bandung"
          desc="Temukan outlet kami yang nyaman di pusat kota Bandung dengan fasilitas lengkap dan tempat santap bersih."
        />

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Left: Google Maps Embed (7 cols) */}
          <ScrollReveal
            direction="right"
            className="lg:col-span-7 h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-[var(--shadow-card)] border border-[#e3ebe6] bg-neutral-100"
          >
            <iframe
              title="Peta Lokasi Penyetan 234 Bandung"
              src={OUTLET_INFO.mapsEmbed}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ScrollReveal>

          {/* Right: Outlet Info Card (5 cols) */}
          <ScrollReveal
            direction="left"
            delay={0.15}
            className="lg:col-span-5 surface-card bg-white rounded-3xl p-6 sm:p-8 border border-[#d2ded7] flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="inline-block rounded-full bg-[#eef4f1] border border-[#cbe0d5] px-3.5 py-1 text-xs font-bold text-[#163e2d] mb-4 shadow-xs">
                Outlet Resmi
              </div>

              <h3 className="font-display text-2xl font-extrabold text-[#163e2d] mb-6">
                {OUTLET_INFO.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4f1] text-[#2a6b50] border border-[#cbe0d5]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#2a6b50]">
                      Alamat
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-[#163e2d] leading-relaxed">
                      {OUTLET_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4f1] text-[#2a6b50] border border-[#cbe0d5]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#2a6b50]">
                      Jam Buka
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-[#163e2d]">
                      {OUTLET_INFO.hours}
                    </p>
                    <p className="text-xs text-[#334155] font-medium">Buka Setiap Hari (Senin - Minggu)</p>
                  </div>
                </div>
              </div>

              {/* Facilities pills */}
              <div className="mt-6 pt-5 border-t border-[#d2ded7]">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#163e2d] mb-2.5">
                  Fasilitas Outlet
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-bold text-[#163e2d]">
                  {['Free Refill Nasi & Sambal', 'Dine In & Take Away', 'Parkir Kendaraan', 'Tempat Nyaman', 'Musholla', '100% Halal'].map((fac) => (
                    <span
                      key={fac}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#f7f9f8] px-3 py-1 border border-[#d2ded7] text-[11px] shadow-xs"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#2a6b50]" />
                      <span>{fac}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4">
              <a
                href={OUTLET_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2a6b50] py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:scale-105 active:scale-95 hover:bg-[#1f543e]"
              >
                <Navigation className="h-4 w-4" />
                <span>Buka Petunjuk Arah Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
