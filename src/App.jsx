import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Footer from './components/Footer';

function EthosSection() {
  return (
    <section className="py-24 border-t border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">The WatchX Ethos</h2>
        <p className="mt-4 text-white/70 leading-relaxed">
          We pursue quiet excellence. Every WatchX piece strips away the unnecessary,
          honoring classic silhouettes while embracing modern materials and precision engineering.
          Minimal doesn’t mean less — it means only what matters remains.
        </p>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <EthosSection />
      <Collections />
    </>
  );
}

function CollectionsPage() {
  return (
    <>
      <section className="pt-24 pb-6 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">Our Collections</h1>
          <p className="text-white/60 mt-2 max-w-2xl">
            Explore minimal, retro, and futuristic expressions — unified by precision and restraint.
          </p>
        </div>
      </section>
      <Collections />
    </>
  );
}

function AboutPage() {
  return (
    <section className="pt-24 pb-24 bg-black">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">About WatchX</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium">Design First</h3>
            <p className="text-white/70 mt-2 text-sm">Every surface has intent. We remove noise to reveal balance, legibility, and calm.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium">Retro Roots</h3>
            <p className="text-white/70 mt-2 text-sm">We honor classic proportions and tactile feedback, refined for modern wear.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium">Future Ready</h3>
            <p className="text-white/70 mt-2 text-sm">Advanced materials, precise tolerances, and enduring performance.</p>
          </div>
        </div>
        <EthosSection />
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="pt-24 pb-24 bg-black">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">Contact & Waitlist</h1>
        <p className="text-white/70 mt-2">Have a question or want early access? Send a note and we’ll get back to you.</p>
        <form className="mt-8 grid grid-cols-1 gap-4">
          <input type="text" required placeholder="Full name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30" />
          <input type="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30" />
          <textarea rows="4" placeholder="Message (optional)" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30" />
          <button type="submit" className="mt-2 rounded-full bg-white text-black px-6 py-3 font-medium hover:opacity-90 active:opacity-80 transition">Send</button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="collections" element={<CollectionsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
