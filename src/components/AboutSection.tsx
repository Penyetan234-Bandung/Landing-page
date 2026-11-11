import React from 'react';
import { ShieldCheck, Sparkles, Flame, HeartHandshake } from 'lucide-react';
import { LOVABLE_IMAGES } from '../data/restaurantData';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  const values = [
    {
      title: 'Halal',
      desc: 'Mengutamakan makanan yang halal dan thayyib.',
      icon: ShieldCheck,
      color: 'text-[#163e2d]',
      bg: 'bg-emerald-100',
    },
    {
      title: 'Berkualitas',
      desc: 'Menggunakan bahan berkualitas dan diolah dengan baik.',
      icon: Sparkles,
      color: 'text-amber-800',
      bg: 'bg-amber-100',
    },
    {
      title: 'Lezat',
      desc: 'Cita rasa penyetan yang khas dan menggugah selera.',
      icon: Flame,
      color: 'text-[#b31d23]',
      bg: 'bg-red-100',
    },
    {
      title: 'Ramah',
      desc: 'Pelayanan yang ramah dan nyaman untuk pelanggan.',
      icon: HeartHandshake,
      color: 'text-[#163e2d]',
      bg: 'bg-emerald-100',
    },
  ];

  return (
    <section id="tentang" className="section-pad bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-14">
          {/* Left Column: Resto image */}
          <ScrollReveal direction="right" className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-[var(--shadow-lift)] border border-[#d2ded7] bg-neutral-100">
              <img
                src={LOVABLE_IMAGES.resto}
                alt="Suasana Outlet Penyetan 234 Bandung"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Right Column: Story & 4 Cards */}
          <div>
            <ScrollReveal direction="up">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#cc2e35]">
                Tentang Kami
              </p>
              <h2 className="font-display text-3xl font-extrabold text-[#163e2d] sm:text-4xl">
                Penyetan 234 Bandung
              </h2>
              <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[#2D4739] font-medium">
                <p>
                  Penyetan 234 Bandung hadir untuk menyajikan hidangan penyetan khas Indonesia yang halal, lezat, dan dibuat dari bahan berkualitas.
                </p>
                <p>
                  Dengan cita rasa yang nikmat dan pilihan menu yang beragam, kami ingin menjadi tempat makan yang nyaman untuk keluarga, teman, maupun untuk menikmati makanan sehari-hari.
                </p>
              </div>
            </ScrollReveal>

            {/* 4 Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <ScrollReveal
                    key={val.title}
                    direction="up"
                    delay={0.1 * (idx + 1)}
                    className="surface-card p-4 rounded-2xl flex items-start gap-3.5 hover:shadow-md transition-shadow bg-white border border-[#d2ded7]"
                  >
                    <div className={`shrink-0 rounded-xl p-2.5 ${val.bg} ${val.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-[#163e2d]">
                        {val.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#475569] leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
