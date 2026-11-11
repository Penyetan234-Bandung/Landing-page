import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  theme = 'light',
  showTagline = true,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const isDark = theme === 'dark';

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Brand Emblem */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#2A6B50] to-[#1E4D3A] shadow-md shadow-[#2A6B50]/20 p-1.5 shrink-0 transition-transform duration-200 hover:scale-105`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Traditional Stone Cobek (Mortar) Base */}
          <path
            d="M15 62C15 78 30 86 50 86C70 86 85 78 85 62C85 58 78 54 50 54C22 54 15 58 15 62Z"
            fill="#F59E0B"
            fillOpacity="0.3"
          />
          <ellipse cx="50" cy="62" rx="36" ry="14" fill="#E2E8F0" />
          <ellipse cx="50" cy="60" rx="31" ry="10" fill="#CC2E35" />

          {/* Sambal Chili Specks */}
          <circle cx="43" cy="60" r="2.5" fill="#FEF08A" />
          <circle cx="56" cy="59" r="2.2" fill="#FEF08A" />
          <circle cx="50" cy="62" r="2.8" fill="#FBBF24" />
          <circle cx="37" cy="59" r="1.8" fill="#FFFFFF" />
          <circle cx="62" cy="61" r="1.8" fill="#FFFFFF" />

          {/* Wooden Ulekan Pestle */}
          <path
            d="M32 20C32 16 38 14 42 16L60 48C62 52 58 56 54 54L34 26C32 24 32 22 32 20Z"
            fill="#FEF3C7"
            stroke="#1E4D3A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Fresh Kemangi Leaf Motif */}
          <path
            d="M65 32C72 32 76 39 74 46C67 46 62 40 65 32Z"
            fill="#4ADE80"
          />
          <path
            d="M66 43C64 36 67 34 71 35"
            stroke="#1E4D3A"
            strokeWidth="1.2"
          />
        </svg>

        {/* Small Red Halal indicator badge dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#CC2E35] text-[8px] font-bold text-white ring-2 ring-white">
          ★
        </span>
      </div>

      {/* Typography Block */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`${titleSizes[size]} font-display font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-[#1E293B]'
            }`}
          >
            PENYETAN <span className="text-[#CC2E35]">234</span>
          </span>
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'text-emerald-300' : 'text-[#2A6B50]'
            }`}
          >
            BANDUNG
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[11px] font-medium tracking-tight mt-0.5 ${
              isDark ? 'text-neutral-300' : 'text-neutral-500'
            }`}
          >
            Halal Lagi Thayyib · Lengkong
          </span>
        )}
      </div>
    </div>
  );
};
