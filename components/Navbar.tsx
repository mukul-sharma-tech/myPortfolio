"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 md:py-6 bg-[#3F8B8B]/90 backdrop-blur-md border-b border-white/10 md:bg-transparent md:border-transparent md:backdrop-blur-none transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Left: Brand Block */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          {/* Geometric Hexagon-Cluster Logo */}
          <div className="relative w-7 h-7 md:w-8 md:h-8 text-white group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2L22 7.5V16.5L12 22L2 16.5V7.5L12 2ZM12 4.3L4 8.7V15.3L12 19.7L20 15.3V8.7L12 4.3Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tight text-white uppercase">Mukul Sharma</span>
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#about" className="text-white/70 hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors">ABOUT</Link>
          <Link href="#skills" className="text-white/70 hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors">SKILLS</Link>
          <Link href="#experience" className="text-white/70 hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors">EXPERIENCE</Link>
          <Link href="#projects" className="text-white/70 hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors">PROJECTS</Link>
        </div>

        {/* Right: Desktop Search & Contact */}
        <div className="hidden md:flex items-center gap-8">
          <button className="text-white hover:text-primaryAccent transition-colors">
            <Search className="w-5 h-5" />
          </button>
          
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-full bg-white text-charcoal px-8 py-3 font-bold text-sm hover:shadow-lg transition-all hover:-translate-y-0.5">
            HIRE ME
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#3F8B8B] border-b border-white/10 shadow-2xl flex flex-col items-center py-8 space-y-6 md:hidden"
          >
            <Link onClick={() => setIsMobileMenuOpen(false)} href="#about" className="text-white hover:text-primary uppercase tracking-widest text-sm font-semibold transition-colors">ABOUT</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="#skills" className="text-white hover:text-primary uppercase tracking-widest text-sm font-semibold transition-colors">SKILLS</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="#experience" className="text-white hover:text-primary uppercase tracking-widest text-sm font-semibold transition-colors">EXPERIENCE</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="#projects" className="text-white hover:text-primary uppercase tracking-widest text-sm font-semibold transition-colors">PROJECTS</Link>
            
            <div className="pt-4 w-full px-8 flex flex-col gap-4">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="w-full rounded-full bg-white text-charcoal px-8 py-3 font-bold text-sm hover:shadow-lg transition-all"
              >
                HIRE ME
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
