import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  desc?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  desc,
  light = false,
}) => {
  return (
    <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${
            light ? 'text-[#F5B041]' : 'text-[#CC2E35]'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-extrabold sm:text-4xl ${
          light ? 'text-white' : 'text-[#163E2D]'
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-3 text-sm leading-relaxed sm:text-base ${
            light ? 'text-white/95 font-medium drop-shadow-xs' : 'text-[#2D4739] font-medium'
          }`}
        >
          {desc}
        </p>
      )}
    </ScrollReveal>
  );
};
