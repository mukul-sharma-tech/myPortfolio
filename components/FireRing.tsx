"use client";

import { useEffect, useRef } from 'react';

interface Props {
  size?: number;   // diameter of the ring in px
  intensity?: number; // 1 = normal, 2 = intense
}

interface Ember {
  angle: number;
  radius: number;
  vAngle: number;
  vRadius: number;
  vy: number;
  x: number;
  y: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

export default function FireRing({ size = 220, intensity = 1 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = size + 80;
    const H = size + 80;
    canvas.width  = W;
    canvas.height = H;
    const cx = W / 2;
    const cy = H / 2;
    const ringR = size / 2;

    const embers: Ember[] = [];
    let rafId: number;

    const spawn = () => {
      const angle = Math.random() * Math.PI * 2;
      const spread = 6;
      const r = ringR + (Math.random() - 0.5) * spread;
      embers.push({
        angle,
        radius: r,
        vAngle: (Math.random() - 0.5) * 0.015,
        vRadius: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 1.0 + 0.4) * intensity,
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r,
        life: 0,
        maxLife: Math.random() * 35 + 20,
        size: Math.random() * 3 + 1.2,
        hue: Math.random() * 55,
      });
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      // Spawn embers around the ring
      const count = Math.floor(3 * intensity);
      for (let i = 0; i < count; i++) spawn();

      // Glowing ring base
      const ringGrad = ctx.createRadialGradient(cx, cy, ringR - 8, cx, cy, ringR + 8);
      ringGrad.addColorStop(0,   'rgba(255,100,10,0)');
      ringGrad.addColorStop(0.4, 'rgba(255,140,20,0.18)');
      ringGrad.addColorStop(0.6, 'rgba(255,80,0,0.22)');
      ringGrad.addColorStop(1,   'rgba(200,20,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = ringGrad;
      ctx.lineWidth = 16;
      ctx.stroke();

      // Bright inner ring line
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,200,60,0.35)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 12;
      ctx.shadowColor = 'rgba(255,160,20,0.8)';
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Embers
      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.angle  += e.vAngle;
        e.radius += e.vRadius;
        e.x = cx + Math.cos(e.angle) * e.radius;
        e.y = cy + Math.sin(e.angle) * e.radius + (e.vy * e.life * 0.5);
        e.life++;

        if (e.life >= e.maxLife) { embers.splice(i, 1); continue; }

        const t = e.life / e.maxLife;
        const a = (1 - t) * 0.9;
        const s = e.size * (1 - t * 0.5);

        const g = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, s * 2.5);
        g.addColorStop(0,   `hsla(${60 - e.hue * 0.3}, 100%, 95%, ${a})`);
        g.addColorStop(0.35,`hsla(${38 - e.hue},       100%, 65%, ${a * 0.8})`);
        g.addColorStop(0.7, `hsla(10,                  100%, 45%, ${a * 0.5})`);
        g.addColorStop(1,   'hsla(0,100%,25%,0)');

        ctx.beginPath();
        ctx.arc(e.x, e.y, s * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [size, intensity]);

  const pad = 40;
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top:  -pad,
        left: -pad,
        width:  size + pad * 2,
        height: size + pad * 2,
        pointerEvents: 'none',
        zIndex: 10,
      }}
    />
  );
}
