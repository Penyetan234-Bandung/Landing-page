import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Star, MapPin, ShieldCheck } from 'lucide-react';
import { LOVABLE_IMAGES } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-28 pb-16 text-white bg-[#163e2d]"
    >
      {/* Background outlet image with dark emerald overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${LOVABLE_IMAGES.outlet})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#163e2d]/92 via-[#163e2d]/88 to-[#163e2d]" />

      {/* Subtle traditional motif pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Logo circular badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-white p-2 shadow-2xl ring-4 ring-[#f5b041]/60"
        >
          <img
            src={LOVABLE_IMAGES.logo}
            alt="Logo Resmi Penyetan 234 Bandung"
            className="h-full w-full rounded-full object-contain"
          />
        </motion.div>

        {/* Eyebrow badge: Halal Lagi Thayyib */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#0e2c1f]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#f5b041] border border-[#f5b041]/40 mb-5 shadow-md"
        >
          <ShieldCheck className="h-4 w-4 text-[#f5b041]" />
          <span>Halal Lagi Thayyib</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-white drop-shadow-md text-balance"
        >
          Penyetan 234 Bandung
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-emerald-50 leading-relaxed text-balance font-medium drop-shadow-sm"
        >
          Nikmati berbagai pilihan penyetan dengan cita rasa khas Nusantara, halal, lezat, dan dibuat dari bahan berkualitas tinggi.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#daftar-menu"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#f5b041] px-7 py-3.5 text-sm sm:text-base font-bold text-[#163e2d] shadow-lg shadow-black/25 transition-all hover:scale-105 active:scale-95 hover:bg-[#fabc59]"
          >
            <Utensils className="h-4 w-4" />
            <span>Lihat Menu</span>
          </a>

          <a
            href="#lokasi"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#cc2e35] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-black/25 transition-all hover:scale-105 active:scale-95 hover:bg-[#b5262c]"
          >
            <MapPin className="h-4 w-4" />
            <span>Lokasi Outlet</span>
          </a>
        </motion.div>

        {/* Bottom Feature Pill: Free Refill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mx-auto mt-10 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#0e2c1f]/90 backdrop-blur-md px-5 py-2.5 text-xs sm:text-sm font-semibold text-white border border-white/20 shadow-lg"
        >
          <span className="inline-block rounded-full bg-[#2a6b50] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
            Konsep Prasmanan
          </span>
          <span className="text-[#f5b041] font-bold">Free Refill</span>
          <span className="text-white/40">·</span>
          <span>Nasi, Sambal & Lalapan Sepuasnya</span>
        </motion.div>
      </div>
    </section>
  );
};
