"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = ['initializing', 'loading assets', 'rendering', 'ready'];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 3 + 1;
        if (next >= 100) { clearInterval(interval); return 100; }
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPhase(Math.min(3, Math.floor(progress / 25)));
  }, [progress]);

  return (
    <div className="loading-screen">
      {/* Ambient smoke */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 300 + i * 100,
              height: 300 + i * 100,
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
              background: `radial-gradient(circle, rgba(${i % 2 === 0 ? '80,140,220' : '100,70,180'},0.08), transparent 70%)`,
              filter: 'blur(40px)',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center space-y-10 z-10">
        {/* Logo */}
        <div className="relative">
          <motion.div
            className="loading-text text-5xl tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            MS
          </motion.div>
          {/* Rotating ring */}
          <motion.div
            className="absolute -inset-6 rounded-full border border-sky-400/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -inset-10 rounded-full border border-violet-400/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          />
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-2xl" />
        </div>

        {/* Progress bar */}
        <div className="w-56 space-y-3">
          <div className="h-px bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #7dd3fc, #a78bfa)',
                boxShadow: '0 0 8px rgba(125,211,252,0.6)',
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="mono text-xs text-white/20 tracking-widest uppercase">
              {phases[phase]}
            </span>
            <span className="mono text-xs text-sky-400/60">
              {Math.floor(progress)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
