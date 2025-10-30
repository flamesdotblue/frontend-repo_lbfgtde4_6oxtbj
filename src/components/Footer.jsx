import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-medium">WatchX</h4>
            <p className="text-white/60 mt-2 text-sm">
              Precision-crafted watches for minimal, retro, and futuristic tastes.
            </p>
          </div>
          <div>
            <h5 className="text-white/80 text-sm">Visit</h5>
            <p className="text-white/60 mt-2 text-sm">123 Meridian Ave, Suite X<br/>Geneva, Switzerland</p>
          </div>
          <div>
            <h5 className="text-white/80 text-sm">Contact</h5>
            <p className="text-white/60 mt-2 text-sm">hello@watchx.co<br/>+41 22 555 0101</p>
            <a
              href="#"
              className="inline-block mt-4 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Join the waitlist
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} WatchX. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
