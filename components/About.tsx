"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Star, Trophy, Target } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { label: 'CGPA', value: '9.2+', icon: Star },
    { label: 'Branch Rank', value: '14th', icon: Trophy },
    { label: 'LeetCode', value: '436+', icon: Target },
    { label: 'CodeChef', value: '3⭐', icon: Star },
    { label: 'Codeforces', value: '1081 Rating', icon: Star },

  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about building the future with code and artificial intelligence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-br from-primary to-secondary shadow-xl">
                  <Image
                    src="/WhatsApp Image 2024-10-06 at 19.04.08_227c3c31.jpg"
                    alt="Mukul Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Mukul Sharma</h3>
              <p className="text-muted-foreground">Full Stack Developer, Research, Web3 and AI ML Enthusiast</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6 text-center glow hover:glow-secondary transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-lg">B.Tech Computer Science and Technology</h4>
                  <p className="text-primary">Maharaja Agrasen Institute Of Technology, Delhi</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      2023 - 2027
                    </span>
                    <span className="flex items-center">
                      <Star className="mr-1 h-4 w-4" />
                      9.284 CGPA
                    </span>
                  </div>
                </div>

                <div className="border-l-2 border-secondary/30 pl-4">
                  <h4 className="font-semibold">Class 12th - CBSE</h4>
                  <p className="text-secondary">Joseph & Mary Public School, Delhi</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                    <span>92.6% - 7th Rank in School (2022)</span>
                  </div>
                </div>

                <div className="border-l-2 border-accent/30 pl-4">
                  <h4 className="font-semibold">Class 10th - CBSE</h4>
                  <p className="text-accent">Joseph & Mary Public School, Delhi</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                    <span>85.6% (2020)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="mr-3 h-6 w-6 text-secondary" />
                Goals & Passion
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  High-achieving penultimate-year Computer Science undergraduate (9.2+ CGPA). I&apos;m passionate about building secure, innovative technology solutions by applying my expertise in distributed systems, AI/ML, and full-stack development.
                </p>
                <p>
                  I am leveraging my experience building scalable, low-latency microservices for the national Aadhaar portal during my internship at UIDAI. My project work includes developing platforms like Agento, AgenticIQ, AI-Hire, Switch, Sanskritam, Chakra, Circular Chain and EduniteX from scratch.
                </p>
                <p>
                  Alongside my academics, I am an active open-source contributor (GSSOC 25, SSOC 25) and serve as the Web3 Mentor for GDG MAIT.
                </p>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <MapPin className="mr-3 h-6 w-6 text-accent" />
                Current Focus
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Serving as Web3 Mentor at Google Developer Group MAIT</p>
                {/* <p>• Preparing for the GATE 2026 examination</p> */}
                <p>• Actively solving DSA and CP problems (LeetCode, CodeChef, CodeForces)</p>
                <p>• Building and contributing to open-source projects</p>
                <p>• Researching about different topics and ideas.</p>
              </div>
            </div>         
          </motion.div>
        </div>
      </div>
    </section>
  );
}