/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ConceptPrasmanan } from './components/ConceptPrasmanan';
import { OfficialMenuDisplaySection } from './components/OfficialMenuDisplaySection';
import { MenuSection } from './components/MenuSection';
import { NasiKotakSection } from './components/NasiKotakSection';
import { PromoSection } from './components/PromoSection';
import { OnlineOrderingSection } from './components/OnlineOrderingSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[#1c3528] flex flex-col antialiased selection:bg-[#2a6b50] selection:text-white">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* Main Informational Landing Page Content */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Tentang Kami */}
        <AboutSection />

        {/* 4. Konsep Restoran (Free Refill) */}
        <ConceptPrasmanan />

        {/* 5. Daftar Menu Resmi Outlet (Gambar Display Kasir) */}
        <OfficialMenuDisplaySection />

        {/* 6. Ulasan Google Maps */}
        <MenuSection />

        {/* 6. Nasi Kotak Catering */}
        <NasiKotakSection />

        {/* 7. Promo & Penawaran Spesial */}
        <PromoSection />

        {/* 8. Online Ordering (GrabFood, GoFood, ShopeeFood) */}
        <OnlineOrderingSection />

        {/* 9. Lokasi Outlet Bandung & Google Maps */}
        <LocationSection />

        {/* 10. Kontak & Jam Buka */}
        <ContactSection />

        {/* 11. Media Sosial */}
        <SocialSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
