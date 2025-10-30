import React from 'react';

const collections = [
  {
    key: 'minimal',
    title: 'Minimal',
    description: 'Pure forms, monochrome palettes, and absolute clarity. Designed to disappear — until you need it.',
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop',
    accent: 'from-zinc-200/20 to-white/10',
  },
  {
    key: 'retro',
    title: 'Retro',
    description: 'Warm tones and analog charm reimagined with modern precision. Nostalgia without compromise.',
    image:
      'https://images.unsplash.com/photo-1548171916-c0dea0431e5c?q=80&w=1600&auto=format&fit=crop',
    accent: 'from-amber-200/20 to-orange-100/10',
  },
  {
    key: 'futuristic',
    title: 'Futuristic',
    description: 'Geometric lines, luminous details, and materials built for tomorrow. Time, accelerated.',
    image:
      'https://images.unsplash.com/photo-1608256246200-c8a9f0a2c62d?q=80&w=1600&auto=format&fit=crop',
    accent: 'from-cyan-200/20 to-indigo-200/10',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Collections</h2>
            <p className="text-white/60 mt-2 max-w-2xl">
              Three distinct moods. One philosophy: precision, restraint, and timeless presence.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-full border border-white/20 text-white px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            Book a viewing
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((c) => (
            <article
              key={c.key}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-0"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.accent}`} />
              <img
                src={c.image}
                alt={`${c.title} collection watch`}
                className="h-64 w-full object-cover opacity-90 transition duration-300 group-hover:scale-105"
              />
              <div className="relative p-6">
                <h3 className="text-white text-xl font-medium">{c.title}</h3>
                <p className="text-white/70 mt-2 text-sm leading-relaxed">{c.description}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  Discover
                  <span aria-hidden>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
