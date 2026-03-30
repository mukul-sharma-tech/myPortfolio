"use client";

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  life: number;
  maxLife: number;
  type: 'dust' | 'smoke' | 'star';
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const particles: Particle[] = [];

    const spawn = (): Particle => {
      const type = Math.random() < 0.6 ? 'dust' : Math.random() < 0.7 ? 'smoke' : 'star';
      return {
        x: Math.random() * canvas.width,
        y: type === 'smoke' ? canvas.height + 20 : Math.random() * canvas.height,
        size: type === 'smoke' ? Math.random() * 60 + 20 : type === 'star' ? Math.random() * 1.5 + 0.5 : Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * (type === 'smoke' ? 0.3 : 0.15),
        speedY: type === 'smoke' ? -(Math.random() * 0.4 + 0.1) : (Math.random() - 0.5) * 0.1,
        opacity: type === 'smoke' ? 0 : Math.random() * 0.4 + 0.1,
        life: 0,
        maxLife: type === 'smoke' ? Math.random() * 400 + 200 : Math.random() * 600 + 300,
        type,
      };
    };

    for (let i = 0; i < 120; i++) particles.push(spawn());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new smoke occasionally
      if (Math.random() < 0.08) particles.push(spawn());

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        if (p.life > p.maxLife) {
          particles.splice(i, 1);
          particles.push(spawn());
          continue;
        }

        const progress = p.life / p.maxLife;

        if (p.type === 'smoke') {
          // Smoke: fade in, drift, fade out
          const alpha = progress < 0.2
            ? (progress / 0.2) * 0.06
            : progress > 0.7
            ? ((1 - progress) / 0.3) * 0.06
            : 0.06;
          const currentSize = p.size * (1 + progress * 1.5);
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize);
          grad.addColorStop(0, `rgba(100, 160, 220, ${alpha})`);
          grad.addColorStop(0.5, `rgba(80, 100, 180, ${alpha * 0.5})`);
          grad.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        } else if (p.type === 'star') {
          // Stars: subtle twinkle
          const twinkle = 0.5 + 0.5 * Math.sin(p.life * 0.05);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 220, 255, ${p.opacity * twinkle})`;
          ctx.fill();
        } else {
          // Dust: tiny drifting motes
          const alpha = progress < 0.1
            ? progress / 0.1 * p.opacity
            : progress > 0.9
            ? (1 - progress) / 0.1 * p.opacity
            : p.opacity;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(140, 180, 220, ${alpha * 0.5})`;
          ctx.fill();

          // Faint connections between nearby dust
          for (let j = i - 1; j >= 0 && j > i - 10; j--) {
            const o = particles[j];
            if (o.type !== 'dust') continue;
            const dx = p.x - o.x;
            const dy = p.y - o.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(o.x, o.y);
              ctx.strokeStyle = `rgba(100, 160, 220, ${0.04 * (1 - dist / 80)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}
