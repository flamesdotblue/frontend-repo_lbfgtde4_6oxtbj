import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

export default function Navbar() {
  const linkBase = 'text-white/80 hover:text-white transition-colors';
  const active = 'text-white';
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-white" />
          <span className="text-white font-semibold tracking-widest uppercase">WatchX</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li>
            <NavLink to="/collections" className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}>
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}>
              Ethos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}>
              Contact
            </NavLink>
          </li>
        </ul>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90 active:opacity-80 transition"
        >
          <Star className="h-4 w-4" />
          Preorder
        </Link>
      </nav>
    </header>
  );
}
