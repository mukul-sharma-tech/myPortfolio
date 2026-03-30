"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, User, Briefcase, Code, Trophy, FolderOpen, Mail } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Achievements', href: '#achievements', icon: Trophy },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
  { name: 'Contact', href: '#contact', icon: Mail },
];

// ── Mini fire canvas on the hamburger ──────────────────────────
function FireButton({ onClick }: { onClick: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width  = 44;
    const H = canvas.height = 44;
    const cx = W / 2, cy = H / 2;

    interface P { x:number; y:number; vx:number; vy:number; life:number; max:number; size:number; hue:number; }
    const pts: P[] = [];

    const spawn = () => {
      const angle = Math.random() * Math.PI * 2;
      const r     = Math.random() * 6;
      pts.push({
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(Math.random() * 1.0 + 0.4),
        life: 0,
        max: Math.random() * 22 + 14,
        size: Math.random() * 2.5 + 1,
        hue: Math.random() * 55,
      });
    };

    let rot = 0;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      rot += 0.03;

      // spawn 2 embers per frame
      spawn(); spawn();

      for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy; p.vy -= 0.025; p.life++;
        if (p.life >= p.max) { pts.splice(i, 1); continue; }
        const t = p.life / p.max;
        const a = (1 - t) * 0.9;
        const s = p.size * (1 - t * 0.5);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, s * 2.5);
        g.addColorStop(0,   `hsla(${60 - p.hue * 0.4},100%,95%,${a})`);
        g.addColorStop(0.4, `hsla(${35 - p.hue},100%,65%,${a * 0.8})`);
        g.addColorStop(1,   `hsla(0,100%,30%,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, s * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      // Glow halo
      const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18);
      halo.addColorStop(0,  'rgba(255,140,20,0.18)');
      halo.addColorStop(0.5,'rgba(255,60,0,0.08)');
      halo.addColorStop(1,  'rgba(200,20,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.fillStyle = halo;
      ctx.fill();

      // Rotating star icon
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.shadowBlur   = 12;
      ctx.shadowColor  = 'rgba(255,160,20,0.9)';

      // Draw 3 lines (hamburger) with fire tint
      const lines = [-5, 0, 5];
      lines.forEach((dy, i) => {
        const w = i === 1 ? 8 : 12;
        const grad = ctx.createLinearGradient(-w, dy, w, dy);
        grad.addColorStop(0,   'rgba(255,220,80,0.9)');
        grad.addColorStop(0.5, 'rgba(255,140,20,1)');
        grad.addColorStop(1,   'rgba(255,60,0,0.9)');
        ctx.beginPath();
        ctx.moveTo(-w, dy);
        ctx.lineTo(w, dy);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 1.8;
        ctx.lineCap     = 'round';
        ctx.stroke();
      });

      ctx.restore();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <button
      onClick={onClick}
      aria-label="Open menu"
      style={{ position: 'relative', width: 44, height: 44, background: 'transparent', border: 'none', padding: 0, cursor: 'none' }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: 44, height: 44 }} />
    </button>
  );
}

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    navigation.forEach(item => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <>
      {/* ── Top bar (logo + hamburger) ─────────────────────── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-14"
        style={{
          background: 'rgba(5,5,8,0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Logo */}
        <motion.a href="#home" className="relative group" whileHover={{ scale: 1.05 }}>
          <span className="mono text-base font-bold tracking-widest gradient-text">MS</span>
          <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-sky-400/60 to-violet-400/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.a>

        {/* Active section label — center */}
        <span className="mono text-xs tracking-widest text-slate-500 uppercase hidden sm:block">
          {navigation.find(n => n.href.slice(1) === activeSection)?.name ?? ''}
        </span>

        {/* Fire hamburger */}
        <FireButton onClick={() => setSidebarOpen(true)} />
      </motion.header>

      {/* ── Backdrop ───────────────────────────────────────── */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Sidebar panel ──────────────────────────────────── */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            key="sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="fixed top-0 right-0 bottom-0 z-[60] w-72 flex flex-col"
            style={{
              background: 'rgba(8,8,14,0.97)',
              backdropFilter: 'blur(24px)',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Smoke orb inside sidebar */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(80,140,220,0.08) 0%, transparent 70%)',
                filter: 'blur(40px)',
                transform: 'translate(30%, -30%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(120,80,200,0.07) 0%, transparent 70%)',
                filter: 'blur(30px)',
                transform: 'translate(-30%, 30%)',
              }}
            />

            {/* Header */}
            <div className="flex items-center justify-between px-6 h-14 border-b border-white/5 flex-shrink-0">
              <span className="mono text-base font-bold tracking-widest gradient-text">MS</span>
              <button
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-sky-400 hover:bg-white/5 transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-8 space-y-1 overflow-y-auto">
              {navigation.map((item, i) => {
                const Icon = item.icon;
                const active = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                    className="group relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200"
                    style={{
                      background: active ? 'rgba(125,211,252,0.06)' : 'transparent',
                      color: active ? 'rgba(125,211,252,0.95)' : 'rgba(148,163,184,0.65)',
                    }}
                  >
                    {/* Active left bar */}
                    {active && (
                      <motion.div
                        layoutId="sidebar-indicator"
                        className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
                        style={{ background: 'linear-gradient(180deg, #7dd3fc, #a78bfa)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Icon box */}
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 transition-all duration-200"
                      style={{
                        background: active ? 'rgba(125,211,252,0.1)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${active ? 'rgba(125,211,252,0.2)' : 'rgba(255,255,255,0.06)'}`,
                      }}
                    >
                      <Icon size={14} />
                    </div>

                    <span className="text-sm font-medium tracking-wide">{item.name}</span>

                    {/* Hover arrow */}
                    <span className="ml-auto text-xs opacity-0 group-hover:opacity-40 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200">
                      →
                    </span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="px-6 py-6 border-t border-white/5 flex-shrink-0">
              <p className="mono text-xs text-slate-600 tracking-widest">
                mukul.sharma · 2025
              </p>
              <div className="mt-2 h-px w-full"
                style={{ background: 'linear-gradient(90deg, rgba(125,211,252,0.2), rgba(167,139,250,0.2), transparent)' }} />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
