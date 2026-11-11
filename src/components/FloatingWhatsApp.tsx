import React from 'react';
import { MessageCircle } from 'lucide-react';
import { OUTLET_INFO } from '../data/restaurantData';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const greeting = encodeURIComponent(
      'Halo Penyetan 234 Bandung, saya ingin menanyakan informasi seputar restoran.'
    );
    window.open(`https://wa.me/${OUTLET_INFO.whatsapp}?text=${greeting}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      <button
        onClick={handleClick}
        aria-label="Chat WhatsApp Penyetan 234 Bandung"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-xl shadow-[#25D366]/30 hover:bg-[#20BD5A] transition-all duration-300 hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-pointer"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>
        <span className="font-display tracking-tight pr-0.5">Chat Kami</span>
      </button>
    </div>
  );
};
