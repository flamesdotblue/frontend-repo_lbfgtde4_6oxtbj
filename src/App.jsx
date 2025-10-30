import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <section id="ethos" className="py-24 border-t border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">The WatchX Ethos</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              We pursue quiet excellence. Every WatchX piece strips away the unnecessary,
              honoring classic silhouettes while embracing modern materials and precision engineering.
              Minimal doesn’t mean less — it means only what matters remains.
            </p>
          </div>
        </section>
        <Collections />
      </main>
      <Footer />
    </div>
  );
}
