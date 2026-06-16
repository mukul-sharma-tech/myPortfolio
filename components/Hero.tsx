"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

        {/* Left Action Column (Approx 45%) */}
        <div className="w-full lg:w-[45%] space-y-10 z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="hero-headline text-4xl md:text-6xl lg:text-7xl">
              architecting<br />
              scalable<br />
              systems.
            </h1>

            <p className="context-paragraph mx-auto lg:mx-0">
              Hi, I'm Mukul Sharma. A Full Stack Developer & AI Engineer passionate about building secure, high-performance infrastructure and stunning digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-4"
          >
            <Link href="#projects">
              <button className="pill-action px-10 py-5 text-lg shadow-xl shadow-black/10">
                EXPLORE WORK
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Illustration Column (Approx 55%) */}
        <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end z-10 pt-16 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{
              opacity: { duration: 1, delay: 0.3 },
              scale: { duration: 1, delay: 0.3 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
            className="relative w-full max-w-[420px] aspect-square"
          >
            {/* Animated Glow Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E6C5B3] via-[#3F8B8B] to-white rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '4s' }} />

            {/* Rotating Dashed Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute -inset-8 rounded-full border-2 border-dashed border-white/20"
            />

            {/* Solid Ring */}
            <div className="absolute -inset-3 rounded-full border border-white/10" />

            {/* The Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-black/40 z-20">
              <Image
                src="/mukul.jpg"
                alt="Mukul Sharma"
                fill
                className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                priority
              />

              {/* Subtle inner overlay for blending */}
              <div className="absolute inset-0 bg-[#3F8B8B]/10 mix-blend-overlay hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Floating Glassmorphism Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 lg:-left-12 glass-card border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-3 z-30 shadow-2xl backdrop-blur-md bg-[#3F8B8B]/80"
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white">Available for Work</span>
            </motion.div>

            {/* Floating Glassmorphism Badge 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 2, ease: "easeInOut" }}
              className="absolute top-12 -right-4 lg:-right-8 glass-card border border-white/20 p-4 rounded-2xl z-30 shadow-2xl backdrop-blur-md bg-white/10"
            >
              <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
