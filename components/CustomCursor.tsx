"use client";

import { useEffect, useRef } from 'react';

interface FireParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number; // 0-60 for fire colors
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    let mx = -200, my = -200;
    let hovering = false;
    let clicking = false;
    const particles: FireParticle[] = [];
    let rafId: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onDown = () => { clicking = true; };
    const onUp   = () => { clicking = false; };

    const addHover = () => {
      document.querySelectorAll('a,button,[role="button"],input,textarea,label,select')
        .forEach(el => {
          el.addEventListener('mouseenter', () => { hovering = true; });
          el.addEventListener('mouseleave', () => { hovering = false; });
        });
    };
    addHover();

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    const spawnParticles = (count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.3;
        particles.push({
          x: mx + (Math.random() - 0.5) * 4,
          y: my + (Math.random() - 0.5) * 4,
          vx: Math.cos(angle) * speed * 0.4,
          vy: Math.sin(angle) * speed - speed * 1.2, // bias upward
          life: 0,
          maxLife: Math.random() * 30 + 20,
          size: Math.random() * 3 + 1,
          hue: Math.random() * 50, // 0=red, 50=yellow
        });
      }
    };

    // Draw a 5-point star
    const drawStar = (x: number, y: number, r: number, innerR: number, points: number) => {
      ctx.beginPath();
      for (let i = 0; i < points * 2; i++) {
        const angle = (i * Math.PI) / points - Math.PI / 2;
        const radius = i % 2 === 0 ? r : innerR;
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    let rotation = 0;

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotation += hovering ? 0.08 : clicking ? 0.2 : 0.04;

      // Spawn fire particles
      const spawnCount = clicking ? 6 : hovering ? 4 : 2;
      spawnParticles(spawnCount);

      // Update + draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.04; // rise
        p.vx *= 0.97;
        p.life++;

        if (p.life >= p.maxLife) { particles.splice(i, 1); continue; }

        const t = p.life / p.maxLife; // 0→1
        const alpha = (1 - t) * 0.9;
        const currentSize = p.size * (1 - t * 0.6);

        // Fire gradient: white core → yellow → orange → red → transparent
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize * 2);
        grad.addColorStop(0,   `hsla(${60 - p.hue * 0.3}, 100%, 95%, ${alpha})`);
        grad.addColorStop(0.3, `hsla(${40 - p.hue}, 100%, 70%, ${alpha * 0.8})`);
        grad.addColorStop(0.7, `hsla(${10 - p.hue * 0.2}, 100%, 50%, ${alpha * 0.5})`);
        grad.addColorStop(1,   `hsla(0, 100%, 30%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Outer glow halo
      const haloR = clicking ? 28 : hovering ? 22 : 16;
      const halo = ctx.createRadialGradient(mx, my, 0, mx, my, haloR * 2.5);
      halo.addColorStop(0,   'rgba(255, 200, 50, 0.18)');
      halo.addColorStop(0.4, 'rgba(255, 100, 10, 0.10)');
      halo.addColorStop(1,   'rgba(255, 50,  0,  0)');
      ctx.beginPath();
      ctx.arc(mx, my, haloR * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = halo;
      ctx.fill();

      // Star body
      const starR = clicking ? 10 : hovering ? 9 : 7;
      ctx.save();
      ctx.translate(mx, my);
      ctx.rotate(rotation);

      // Star glow
      ctx.shadowBlur = clicking ? 30 : hovering ? 24 : 18;
      ctx.shadowColor = 'rgba(255, 160, 20, 0.9)';

      // Outer star fill — fire gradient
      const starGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, starR);
      starGrad.addColorStop(0,   'rgba(255, 255, 200, 1)');
      starGrad.addColorStop(0.3, 'rgba(255, 220, 60, 1)');
      starGrad.addColorStop(0.7, 'rgba(255, 100, 10, 1)');
      starGrad.addColorStop(1,   'rgba(200, 30, 0, 0.8)');

      drawStar(0, 0, starR, starR * 0.42, 5);
      ctx.fillStyle = starGrad;
      ctx.fill();

      // White hot core
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(255,255,255,0.9)';
      drawStar(0, 0, starR * 0.45, starR * 0.18, 5);
      ctx.fillStyle = 'rgba(255, 255, 240, 0.95)';
      ctx.fill();

      ctx.restore();

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
