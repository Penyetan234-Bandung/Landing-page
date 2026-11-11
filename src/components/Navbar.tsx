import React, { useState, useEffect } from 'react';
import { LOVABLE_IMAGES, getWhatsAppLink } from '../data/restaurantData';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Daftar Menu', href: '#daftar-menu' },
    { label: 'Ulasan', href: '#menu' },
    { label: 'Nasi Kotak', href: '#nasi-kotak' },
    { label: 'Promo', href: '#promo' },
    { label: 'Lokasi', href: '#lokasi' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const isSolid = isScrolled || isMobileMenuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#163e2d]/95 backdrop-blur-md shadow-md border-b border-[#24543f] transition-all duration-300">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3"
      >
        {/* Brand Lockup */}
        <a href="#home" className="flex min-w-0 items-center gap-2.5 select-none group">
          <img
            src={LOVABLE_IMAGES.logo}
            alt="Logo Penyetan 234 Bandung"
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-full object-contain bg-white p-0.5 shadow-sm ring-2 ring-[#f5b041]/60"
          />
          <span className="truncate font-display text-base font-extrabold leading-tight sm:text-lg text-white">
            Penyetan 234
            <span className="block text-[0.65rem] font-sans font-bold uppercase tracking-widest text-[#f5b041]">
              Bandung
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041] rounded px-1 ${
                  link.href === '#daftar-menu'
                    ? 'text-[#f5b041] font-bold hover:text-white'
                    : 'text-white/90 hover:text-[#f5b041]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Menu Button */}
          <a
            href="#daftar-menu"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#f5b041] px-4 py-2 text-center text-xs font-black text-[#163e2d] shadow-sm transition-transform hover:scale-105 active:scale-95 hover:bg-[#fabc59]"
          >
            <span>Lihat Menu</span>
          </a>

          {/* Primary CTA button */}
          <a
            href="#kontak"
            className="hidden sm:inline-flex items-center rounded-full bg-[#cc2e35] px-5 py-2 text-center text-xs font-bold text-white shadow-sm transition-transform hover:scale-105 active:scale-95 hover:bg-[#b5262c]"
          >
            Hubungi Kami
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors lg:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#24543f] bg-[#163e2d] px-5 py-4 shadow-2xl">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1.5 text-base font-semibold text-white hover:text-[#f5b041] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#daftar-menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full rounded-full bg-[#f5b041] py-2.5 text-center text-sm font-black text-[#163e2d] shadow-md hover:bg-[#fabc59]"
            >
              Lihat Daftar Menu
            </a>
            <a
              href="#kontak"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full rounded-full bg-[#cc2e35] py-2.5 text-center text-sm font-bold text-white shadow-md hover:bg-[#b5262c]"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
