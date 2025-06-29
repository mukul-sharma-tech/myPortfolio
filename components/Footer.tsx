"use client";

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Back to Top Button */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="lg"
            className="glass border-primary/50 hover:bg-primary/10 group"
          >
            <ArrowUp className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold gradient-text mb-2">
              Mukul Sharma
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Full Stack Developer & AI/ML Enthusiast
            </p>
            <p className="text-xs text-muted-foreground">
              Building the future with code and intelligence
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {[
                { icon: Github, href: 'https://github.com/mukul-sharma-tech', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/mukul-sharma-830a152b2', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:mukulsharmamait@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass border border-white/10 hover:border-primary/50 transition-colors group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <social.icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Available for freelance projects and collaborations
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mukul Sharma. All rights reserved.
            </p>
            
            <motion.p 
              className="text-sm text-muted-foreground flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              Made with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> by Mukul Sharma
            </motion.p>
            
            <p className="text-xs text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs text-primary/50 cursor-default">
            ✨ Thanks for scrolling!
          </div>
        </motion.div>
      </div>
    </footer>
  );
}