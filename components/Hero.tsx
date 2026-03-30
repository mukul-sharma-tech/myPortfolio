"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import FireRing from '@/components/FireRing';
import Image from 'next/image';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const socials = [
  { icon: FaGithub, href: 'https://github.com/mukul-sharma-tech', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/mukul-sharma-830a152b2', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/mukul1010/', label: 'LeetCode' },
  { icon: ExternalLink, href: 'https://www.codechef.com/users/mukul1010', label: 'CodeChef' },
  { icon: SiCodeforces, href: 'https://codeforces.com/profile/muku0784', label: 'Codeforces' },
  { icon: FaInstagram, href: 'https://www.instagram.com/mukul_sharma_1010/', label: 'Instagram' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg pt-20 overflow-hidden">

      {/* Deep background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(80,140,220,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left — Text */}
          <div className="flex-1 text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-tag mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60 inline-block" />
              available for opportunities
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="gradient-text">Mukul</span>
              <br />
              <span className="text-white/90">Sharma</span>
            </motion.h1>

            <motion.div
              className="mono text-sm text-sky-400/50 tracking-widest mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {'{ full_stack_dev + generative_ai }'}
            </motion.div>

            <motion.p
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Building intelligent systems at the intersection of web and AI.
              CS @ MAIT Delhi · 2023–2027
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-xl px-6 py-3 text-sm font-medium"
                style={{
                  background: 'rgba(125,211,252,0.08)',
                  border: '1px solid rgba(125,211,252,0.2)',
                  color: 'rgba(125,211,252,0.9)',
                }}
                onClick={() => window.open('https://drive.google.com/drive/folders/1926GbTRYaKf08Hbd6aXOZyq0KKL5Vtwd?usp=sharing', '_blank')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-violet-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>

              <Button
                size="lg"
                className="group relative overflow-hidden rounded-xl px-6 py-3 text-sm font-medium"
                style={{
                  background: 'rgba(167,139,250,0.08)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  color: 'rgba(167,139,250,0.9)',
                }}
                onClick={() => window.open('https://drive.google.com/drive/folders/1iI-G2Q1cjqKT-TfmOSpYf6qeJVX9n75R', '_blank')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-400/10 to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ExternalLink className="mr-2 h-4 w-4" />
                Projects
              </Button>

              <Button
                size="lg"
                className="group relative overflow-hidden rounded-xl px-6 py-3 text-sm font-medium"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(148,163,184,0.8)',
                }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: 'rgba(148,163,184,0.6)',
                  }}
                  whileHover={{ y: -3, color: 'rgba(125,211,252,0.9)' } as any}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.07 }}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile image */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Outer smoke rings */}
            <div className="absolute -inset-16 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(80,140,220,0.4) 0%, transparent 70%)', filter: 'blur(30px)' }} />
            <div className="absolute -inset-8 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, rgba(120,80,200,0.5) 0%, transparent 70%)', filter: 'blur(20px)' }} />

            {/* Rotating border rings */}
            <motion.div
              className="absolute -inset-6 rounded-full"
              style={{ border: '1px solid rgba(125,211,252,0.15)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-10 rounded-full"
              style={{ border: '1px dashed rgba(167,139,250,0.1)' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            {/* Image */}
            <motion.div
              className="relative w-56 h-56 rounded-full overflow-hidden float"
              style={{
                border: '1px solid rgba(125,211,252,0.2)',
                boxShadow: '0 0 60px rgba(80,140,220,0.2), 0 0 120px rgba(80,140,220,0.08)',
              }}
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FireRing size={224} intensity={1.2} />
              <Image
                src="/WhatsApp Image 2024-10-06 at 19.04.08_227c3c31.jpg"
                alt="Mukul Sharma"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay tint */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(80,140,220,0.1) 0%, transparent 60%)' }} />
            </motion.div>

            {/* Floating stat chips */}
            {[
              { label: '668+ problems', sub: 'solved', x: '-80px', y: '20px' },
              { label: '20+ projects', sub: 'shipped', x: '60px', y: '-30px' },
            ].map((chip, i) => (
              <motion.div
                key={i}
                className="absolute glass-card px-3 py-2 text-center"
                style={{ left: chip.x, top: chip.y, minWidth: '110px' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-sm font-semibold text-sky-300">{chip.label}</div>
                <div className="mono text-xs text-slate-500">{chip.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-sky-400 transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="mono text-xs tracking-widest">scroll</span>
        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}
