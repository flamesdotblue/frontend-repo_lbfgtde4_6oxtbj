import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Timepieces for Minimal, Retro, Futuristic Souls
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            WatchX crafts precision watches blending essential design, retro charm,
            and forward-looking tech — a quiet statement for every era.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collections" className="rounded-full bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition">
              Explore Collections
            </a>
            <a href="#ethos" className="rounded-full border border-white/20 text-white px-6 py-3 font-medium hover:bg-white/10 transition">
              Our Ethos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
