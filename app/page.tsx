"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import GitHubStats from '@/components/GitHubStats';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollProgress from '@/components/ScrollProgress';
import CornerFire from '@/components/CornerFire';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">

      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Hero />
        <About />
        <GitHubStats />
        <Experience />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
}