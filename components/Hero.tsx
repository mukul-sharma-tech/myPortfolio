"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg pt-20">
      {/* Lightning Beam Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 lighthouse-beam opacity-30" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          {/* Profile Image with 3D Effects */}
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8 float"
            whileHover={{ scale: 1.1, rotateY: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-br from-primary to-secondary shadow-2xl shadow-primary/50">
              <Image
                src="/WhatsApp Image 2024-10-06 at 19.04.08_227c3c31.jpg"
                alt="Mukul Sharma"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* 3D Glow Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-primary/30 animate-pulse" />
            <div className="absolute -inset-8 rounded-full border border-secondary/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Mukul Sharma
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Full Stack Developer | Generative AI
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            2023-2027 | Building smarter web with code + intelligence
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button
              size="lg"
              className="glass-card glow hover:glow-secondary group"
              onClick={() => window.open('https://drive.google.com/drive/folders/1926GbTRYaKf08Hbd6aXOZyq0KKL5Vtwd?usp=sharing', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>

            <Button
              size="lg"
              className="glass-card glow hover:glow-secondary group"
              onClick={() => window.open('https://docs.google.com/document/d/1q3BDhfpA0R3JtldkcVQkorIyfqeGp36pLAaI1J_u7KY/edit?usp=sharing', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View Projects
            </Button>

              <Button
              size="lg"
              className="glass-card glow hover:glow-secondary group"
              onClick={() => window.open('https://drive.google.com/drive/folders/1Mrcdgg6DzJM6zLXdB8dByvjNBckhsLOE?usp=sharing', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Research Writings
            </Button>



            <Button
              size="lg"
              variant="outline"
              className="glass-card border-primary/50 hover:bg-primary/10 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {[
              { icon: FaGithub, href: 'https://github.com/mukul-sharma-tech', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/mukul-sharma-830a152b2', label: 'LinkedIn' },
              { icon: SiLeetcode, href: 'https://leetcode.com/u/mukul1010/', label: 'LeetCode' },
              { icon: ExternalLink, href: 'https://www.codechef.com/users/mukul1010', label: 'CodeChef' },
              { icon: SiCodeforces, href: 'https://codeforces.com/profile/muku0784', label: 'Codeforces' },
              { icon: FaInstagram, href: 'https://www.instagram.com/mukul_sharma_1010/', label: 'Instagram' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card glow hover:glow-accent transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
}