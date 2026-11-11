import React from 'react';
import { MessageCircle, Gift, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { OUTLET_INFO } from '../data/restaurantData';

export const PromoSection: React.FC = () => {
  const getMainPromoWhatsAppUrl = () => {
    const text = `Halo Penyetan 234 Bandung, saya ingin memesan paket Nasi Kotak dengan promo: *Beli 25 Box Gratis 1 Box atau Voucher 25K*. Boleh minta info lebih lanjut?`;
    return `https://wa.me/${OUTLET_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="promo" className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Penawaran Spesial"
          title="Promo Penyetan 234 Bandung"
          desc="Nikmati promo istimewa katering dan santap lezat. Dapatkan bonus langsung untuk setiap pesanan Anda."
        />

        {/* Featured Main Promo Banner: 25 Box Kelipatan Bonus 1 Box / Voucher 25K */}
        <ScrollReveal direction="up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#163e2d] via-[#1f563f] to-[#2a6b50] p-7 sm:p-9 text-white shadow-xl border border-[#2a6b50]/40">
            {/* Background sparkle accents */}
            <div className="absolute -right-10 -bottom-10 h-52 w-52 rounded-full bg-[#f5b041]/10 blur-2xl pointer-events-none" />
            <div className="absolute -left-10 -top-10 h-52 w-52 rounded-full bg-[#cc2e35]/15 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                {/* Promo Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#f5b041] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#163e2d] shadow-sm mb-4">
                  <Sparkles className="h-4 w-4" />
                  <span>Promo Spesial Saat Ini</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  Beli 25 Box, Dapat Bonus 1 Box <br className="hidden sm:inline" />
                  <span className="text-[#f5b041]">atau Voucher Rp 25.000</span>
                </h3>

                <p className="mt-3 text-sm sm:text-base text-white/95 font-medium leading-relaxed max-w-2xl">
                  Setiap pembelian <strong className="text-white font-bold">25 box Nasi Kotak dan berlaku kelipatannya</strong> (50, 75, 100 box, dst.), Anda berhak memilih bonus: <strong className="text-[#f5b041] font-bold">Gratis 1 Box Nasi Kotak</strong> atau <strong className="text-[#f5b041] font-bold">Voucher Rp25.000</strong>.
                </p>

                {/* Key Benefits */}
                <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 border border-white/20">
                    <CheckCircle2 className="h-4 w-4 text-[#f5b041]" />
                    <span>Berlaku Kelipatan</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 border border-white/20">
                    <CheckCircle2 className="h-4 w-4 text-[#f5b041]" />
                    <span>Bebas Pilih Bonus</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 border border-white/20">
                    <CheckCircle2 className="h-4 w-4 text-[#f5b041]" />
                    <span>Semua Varian Nasi Kotak</span>
                  </span>
                </div>
              </div>

              {/* Call to action card */}
              <div className="w-full lg:w-auto shrink-0 flex flex-col items-center sm:items-stretch bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5b041] text-[#163e2d] shadow-md font-bold">
                  <Gift className="h-7 w-7" />
                </div>
                <p className="text-xs uppercase tracking-widest text-[#f5b041] font-black">
                  Klaim Promo Sekarang
                </p>
                <p className="font-display text-lg font-bold text-white mt-1">
                  Pemesanan Bisa Dadakan
                </p>
                <p className="text-xs text-white/90 mt-1 mb-4">
                  Langsung diproses & siap antar se-Bandung Raya
                </p>

                <a
                  href={getMainPromoWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#cc2e35] px-7 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 hover:bg-[#b5262c]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Klaim Promo 25 Box via WA</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
