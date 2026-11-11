import React, { useState } from 'react';
import { Utensils, ZoomIn, ZoomOut, RotateCcw, Download, ExternalLink, X, Eye, Smartphone, Move } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { OUTLET_INFO } from '../data/restaurantData';

export const OfficialMenuDisplaySection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const menuImgPath = '/assets/aistudio/Menu_Display_kasir_4746f300.png';

  const handleOpenModal = () => {
    // Di layar smartphone, default buka sedikit lebih besar agar tulisan harga & nama makanan langsung terbaca
    if (window.innerWidth < 640) {
      setZoomLevel(1.5);
    } else {
      setZoomLevel(1);
    }
    setIsModalOpen(true);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <section id="daftar-menu" className="section-pad bg-white border-t border-[#d2ded7]">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Buku Menu Resmi"
          title="Daftar Menu Penyetan 234 Bandung"
          desc="Lihat display menu kasir resmi lengkap dengan varian makanan, aneka sate, pilihan nasi khas, serta minuman segar. Ketuk gambar untuk memperbesar di layar ponsel Anda."
        />

        {/* Display Banner Card */}
        <ScrollReveal direction="up" className="relative mx-auto max-w-5xl">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-[#d2ded7] bg-neutral-900 shadow-2xl transition-all duration-300 hover:border-[#2a6b50]/60 hover:shadow-2xl">
            {/* Clickable Image Container */}
            <div
              className="relative cursor-pointer overflow-hidden bg-neutral-950"
              onClick={handleOpenModal}
            >
              <img
                src={menuImgPath}
                alt="Daftar Menu Kasir Penyetan 234 Bandung"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />

              {/* Mobile quick-tap indicator pill (selalu terlihat di ponsel) */}
              <div className="absolute bottom-3 right-3 sm:hidden z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#163e2d]/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-white shadow-lg border border-white/20">
                  <Smartphone className="h-3.5 w-3.5 text-[#f5b041]" />
                  <span>Ketuk untuk Zoom</span>
                </span>
              </div>

              {/* Desktop Hover overlay hint */}
              <div className="hidden sm:flex absolute inset-0 items-center justify-center bg-black/40 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f5b041] px-5 py-2.5 text-xs sm:text-sm font-black text-[#163e2d] shadow-xl">
                  <ZoomIn className="h-4 w-4" />
                  <span>Klik untuk Memperbesar Menu</span>
                </span>
              </div>
            </div>

            {/* Bottom Bar Info & Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#163e2d] p-4 sm:px-6 sm:py-4 text-white border-t border-white/10">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5b041] text-[#163e2d]">
                  <Utensils className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-white">
                    Display Menu Kasir Resmi Outlet Bandung
                  </h4>
                  <p className="text-[11px] text-emerald-200">
                    *Harga resmi dapat berubah sewaktu-waktu & belum termasuk pajak.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleOpenModal}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-full bg-white/15 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/25 transition-colors cursor-pointer border border-white/20"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Buka & Zoom Layar</span>
                </button>

                <a
                  href={menuImgPath}
                  target="_blank"
                  rel="noreferrer"
                  download="Menu_Penyetan_234_Bandung.png"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-full bg-[#f5b041] px-4 py-2.5 text-xs font-black text-[#163e2d] hover:bg-[#fabc59] transition-all shadow-sm"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Unduh Menu</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Notice Pill */}
          <div className="mt-4 text-center">
            <span className="inline-block text-xs font-semibold text-[#475569]">
              💡 Ingin pesan langsung? Hubungi kasir kami melalui WhatsApp di{' '}
              <a
                href={`https://wa.me/${OUTLET_INFO.whatsapp}?text=${encodeURIComponent(
                  'Halo Penyetan 234 Bandung, saya ingin memesan makanan dari daftar menu.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#2a6b50] hover:underline"
              >
                {OUTLET_INFO.whatsappDisplay}
              </a>
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox / Zoom Modal dengan Mobile Controls & Pan Scroll */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative h-[95vh] sm:h-auto max-h-[95vh] max-w-6xl w-full overflow-hidden rounded-2xl bg-black border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-[#163e2d] px-4 py-3 text-white border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <Utensils className="h-4 w-4 text-[#f5b041] shrink-0" />
                <span className="font-display text-xs sm:text-sm font-bold truncate">
                  Daftar Menu Kasir - Penyetan 234
                </span>
              </div>

              {/* Zoom Tools for Smartphone & Desktop */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/15">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    className="p-1 sm:p-1.5 rounded text-white/90 hover:text-white hover:bg-white/20"
                    title="Perkecil (-)"
                  >
                    <ZoomOut className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                  <span className="px-1.5 text-[10px] sm:text-xs font-mono font-bold">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    className="p-1 sm:p-1.5 rounded text-white/90 hover:text-white hover:bg-white/20"
                    title="Perbesar (+)"
                  >
                    <ZoomIn className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="p-1 sm:p-1.5 rounded text-white/90 hover:text-white hover:bg-white/20 border-l border-white/15 ml-0.5"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>

                <a
                  href={menuImgPath}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  title="Buka Gambar di Tab Baru"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Tutup"
                  className="p-1.5 rounded-lg text-white hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mobile swipe/scroll gesture tip */}
            <div className="bg-[#113827] px-4 py-1.5 text-center text-[11px] font-semibold text-emerald-200 border-b border-white/10 flex items-center justify-center gap-1.5 shrink-0">
              <Move className="h-3.5 w-3.5 text-[#f5b041]" />
              <span>Geser untuk melihat menu makanan, sate, nasi, dan minuman secara detail</span>
            </div>

            {/* Scrollable Image viewport with interactive zoom scale */}
            <div className="overflow-auto flex-1 p-2 bg-neutral-950 flex items-center justify-center touch-pan-x touch-pan-y">
              <div
                className="transition-transform duration-200 ease-out flex items-center justify-center"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                }}
              >
                <img
                  src={menuImgPath}
                  alt="Daftar Menu Kasir Penyetan 234 Bandung Full"
                  className="max-w-none w-[900px] sm:w-[1100px] h-auto object-contain rounded-lg shadow-2xl select-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

