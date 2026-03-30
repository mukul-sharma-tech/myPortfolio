"use client";

import { useEffect, useRef } from 'react';

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
  cornerX: number;
  cornerY: number;
}

const CORNERS = [
  { x: 0,    y: 0,    dirX:  1, dirY:  1 }, // top-left
  { x: 1,    y: 0,    dirX: -1, dirY:  1 }, // top-right
  { x: 0,    y: 1,    dirX:  1, dirY: -1 }, // bottom-left
  { x: 1,    y: 1,    dirX: -1, dirY: -1 }, // bottom-right
];

export default function CornerFire() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    const embers: Ember[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const spawn = (corner: typeof CORNERS[0]) => {
      const cx = corner.x * canvas.width;
      const cy = corner.y * canvas.height;
      const spread = 60;
      embers.push({
        x: cx + (Math.random() - 0.5) * spread,
        y: cy + (Math.random() - 0.5) * spread,
        vx: corner.dirX * (Math.random() * 0.8 + 0.2) + (Math.random() - 0.5) * 0.6,
        vy: corner.dirY * -(Math.random() * 1.2 + 0.4),
        life: 0,
        maxLife: Math.random() * 60 + 40,
        size: Math.random() * 4 + 1.5,
        hue: Math.random() * 55,
        cornerX: cx,
        cornerY: cy,
      });
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn embers from each corner
      CORNERS.forEach(c => {
        if (Math.random() < 0.55) spawn(c);
      });

      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.x  += e.vx;
        e.y  += e.vy;
        e.vy -= 0.03;
        e.vx *= 0.98;
        e.life++;

        if (e.life >= e.maxLife) { embers.splice(i, 1); continue; }

        const t     = e.life / e.maxLife;
        const alpha = (1 - t) * 0.85;
        const r     = e.size * (1 - t * 0.5);

        const g = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, r * 2.5);
        g.addColorStop(0,   `hsla(${60 - e.hue * 0.4}, 100%, 95%, ${alpha})`);
        g.addColorStop(0.3, `hsla(${40 - e.hue},       100%, 65%, ${alpha * 0.8})`);
        g.addColorStop(0.7, `hsla(${10},               100%, 45%, ${alpha * 0.5})`);
        g.addColorStop(1,   `hsla(0, 100%, 25%, 0)`);

        ctx.beginPath();
        ctx.arc(e.x, e.y, r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      // Corner glow pools
      CORNERS.forEach(c => {
        const cx = c.x * canvas.width;
        const cy = c.y * canvas.height;
        const pool = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120);
        pool.addColorStop(0,   'rgba(255, 120, 10, 0.10)');
        pool.addColorStop(0.4, 'rgba(255,  60,  0, 0.05)');
        pool.addColorStop(1,   'rgba(200,  20,  0, 0)');
        ctx.beginPath();
        ctx.arc(cx, cy, 120, 0, Math.PI * 2);
        ctx.fillStyle = pool;
        ctx.fill();
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
