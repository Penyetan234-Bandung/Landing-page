import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, ThumbsUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { OUTLET_INFO, GOOGLE_REVIEWS } from '../data/restaurantData';

export const MenuSection: React.FC = () => {

  return (
    <section id="menu" className="section-pad bg-[#f7f9f8]">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Ulasan Pelanggan"
          title="Ulasan Terbaik di Google Maps"
          desc="Kepuasan pelanggan adalah amanah bagi kami. Simak pengalaman autentik para penikmat kuliner di Penyetan 234 Bandung."
        />

        {/* Google Maps Rating Summary Card (Target element matching selector) */}
        <ScrollReveal direction="up" className="mb-10">
          <div className="surface-card bg-white rounded-3xl p-6 sm:p-8 border border-[#d2ded7] shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full lg:w-auto text-center sm:text-left">
              {/* Google G Logo & Rating Emblem */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md border border-[#d2ded7] p-3">
                  <svg className="h-full w-full" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wider">
                  Google Maps
                </span>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <span className="font-display text-4xl sm:text-5xl font-black text-[#163e2d]">
                    {OUTLET_INFO.rating.toFixed(1)}
                  </span>
                  <div>
                    {/* 4.7 Real Star Representation */}
                    <div className="flex items-center gap-1 text-[#f5b041]">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-[#f5b041]" />
                      ))}
                      {/* Fractional 5th Star for 4.7 */}
                      <div className="relative h-5 w-5">
                        <Star className="h-5 w-5 text-[#d2ded7] fill-transparent" />
                        <div className="absolute inset-0 overflow-hidden w-[70%]">
                          <Star className="h-5 w-5 fill-[#f5b041] text-[#f5b041]" />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-[#475569] mt-0.5">
                      Nilai <span className="text-[#163e2d] font-black">{OUTLET_INFO.rating} dari 5.0</span> (Real di Google Maps)
                    </p>
                  </div>
                </div>

                <p className="mt-2 text-xs text-[#24352b] font-medium max-w-md">
                  Penyetan 234 Bandung dinilai tinggi oleh para penikmat kuliner di Jl. K.H. Ahmad Dahlan karena rasa bumbu meresap, 8 pilihan sambal khas, dan fasilitas free refill nasi sepuasnya.
                </p>

                <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-[#163e2d] border border-emerald-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#2a6b50]" />
                    Data Real Google Maps
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-900 border border-amber-200">
                    <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
                    Penyetan Favorit Lengkong
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Action to Google Maps */}
            <div className="w-full lg:w-auto flex items-center justify-center pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#d2ded7] lg:pl-6 shrink-0">
              <a
                href={OUTLET_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#2a6b50] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:scale-105 active:scale-95 hover:bg-[#1f543e]"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>



        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GOOGLE_REVIEWS.map((rev, idx) => (
            <ScrollReveal
              key={rev.id}
              direction="up"
              delay={0.06 * (idx % 6)}
              className="surface-card bg-white flex flex-col justify-between overflow-hidden rounded-3xl p-6 border border-[#d2ded7] shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Header: Avatar, Name, Rating & Time */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white font-black text-sm shadow-xs ${rev.avatarBg}`}
                    >
                      {rev.avatarText}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-display text-sm font-bold text-[#163e2d]">
                          {rev.author}
                        </h3>
                        {rev.verifiedLocalGuide && (
                          <span
                            title="Local Guide Google"
                            className="inline-block rounded bg-amber-100 px-1.5 py-0.2 text-[9px] font-black text-amber-800 uppercase"
                          >
                            Local Guide
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] font-medium text-[#475569]">
                        {rev.relativeTime}
                      </p>
                    </div>
                  </div>

                  {/* Google Icon Badge */}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 p-1 text-slate-500" title="Ulasan Google Maps">
                    <svg className="h-full w-full" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </span>
                </div>

                {/* Star Rating Stars */}
                <div className="flex items-center gap-1 mb-3 text-[#f5b041]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#f5b041]" />
                  ))}
                  <span className="ml-1 text-xs font-extrabold text-[#163e2d]">
                    5.0 / 5.0
                  </span>
                </div>

                {/* Highlight Badge */}
                {rev.highlightBadge && (
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-[#eef4f1] border border-[#cbe0d5] px-2.5 py-0.5 text-[11px] font-bold text-[#163e2d]">
                      {rev.highlightBadge}
                    </span>
                  </div>
                )}

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#24352b] font-medium leading-relaxed italic relative">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Footer: Menu Favorit */}
              {rev.favoriteDish && (
                <div className="mt-5 pt-3.5 border-t border-[#d2ded7] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[#475569]">
                    <ThumbsUp className="h-3.5 w-3.5 text-[#2a6b50]" />
                    <span className="text-[11px] font-semibold">Menu Favorit:</span>
                  </div>
                  <span className="font-bold text-[#163e2d] text-[11px] text-right truncate max-w-[160px]">
                    {rev.favoriteDish}
                  </span>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Social Proof Banner */}
        <ScrollReveal
          direction="up"
          delay={0.2}
          className="mt-10 rounded-3xl bg-gradient-to-r from-[#163e2d] to-[#2a6b50] p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f5b041] text-[#163e2d] shadow-md font-bold">
              <MessageSquareQuote className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold">
                Sudah Pernah Mampir ke Penyetan 234 Bandung?
              </h4>
              <p className="text-xs text-white/95 font-medium mt-0.5">
                Bagikan pengalaman santap Anda dan bantu pelanggan lain menemukan kuliner terbaik di Lengkong.
              </p>
            </div>
          </div>

          <a
            href={OUTLET_INFO.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#f5b041] px-6 py-3 text-xs sm:text-sm font-bold text-[#163e2d] shadow-md transition-all hover:scale-105 active:scale-95 hover:bg-[#fabc59]"
          >
            <span>Tulis Ulasan di Google</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

