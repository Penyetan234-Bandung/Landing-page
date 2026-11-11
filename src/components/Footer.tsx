import React from 'react';
import { LOVABLE_IMAGES, OUTLET_INFO, getWhatsAppLink } from '../data/restaurantData';
import { MapPin, Clock, Phone, Instagram, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Daftar Menu', href: '#daftar-menu' },
    { label: 'Ulasan Google', href: '#menu' },
    { label: 'Nasi Kotak', href: '#nasi-kotak' },
    { label: 'Promo', href: '#promo' },
    { label: 'Pesan Online', href: '#online-ordering' },
    { label: 'Lokasi Outlet', href: '#lokasi' },
    { label: 'Kontak', href: '#kontak' },
    { label: 'Media Sosial', href: '#sosial-media' },
  ];

  return (
    <footer className="bg-[#163e2d] text-white pt-16 pb-8 border-t border-[#2a6b50]/30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={LOVABLE_IMAGES.logo}
                alt="Logo Penyetan 234 Bandung"
                className="h-12 w-12 rounded-full object-contain bg-white p-1"
              />
              <div>
                <span className="font-display text-lg font-extrabold block leading-tight">
                  Penyetan 234 Bandung
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#f5b041]">
                  Halal Lagi Thayyib
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-white/90 max-w-sm pt-2 font-medium">
              Pusat kuliner penyetan khas Indonesia di Bandung dengan fasilitas Free Refill Nasi, Sambal, dan Lalapan sepuasnya. Sajian higienis, halal, dan terpercaya untuk seluruh keluarga.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={OUTLET_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Penyetan 234 Bandung"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-[#dd2a7b] transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href={OUTLET_INFO.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok Penyetan 234 Bandung"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-black transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.87-4.49V8.65a8.28 8.28 0 0 0 5.21 1.84V7.07a4.83 4.83 0 0 1-1.31-.38z" />
                </svg>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Penyetan 234 Bandung"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-[#25D366] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigasi (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-black uppercase tracking-wider text-[#f5b041]">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/85 hover:text-[#f5b041] transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Outlet Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-sm font-black uppercase tracking-wider text-[#f5b041]">
              Kontak & Lokasi
            </h4>
            <div className="space-y-3 text-xs text-white/90 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#f5b041] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{OUTLET_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-[#f5b041] shrink-0" />
                <span>{OUTLET_INFO.hours} (Setiap Hari)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#f5b041] shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-white hover:text-[#f5b041] transition-colors"
                >
                  {OUTLET_INFO.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <p>© {currentYear} Penyetan 234 Bandung. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f5b041]" />
            <span className="text-white font-bold">Halal Lagi Thayyib</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
