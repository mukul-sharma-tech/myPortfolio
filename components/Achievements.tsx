"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Medal, Award, Star, Users, Code, Target, Zap } from 'lucide-react';

const achievements = [
  {
    title: 'LeetCode & CodeForces 720+ Problems',
    category: 'Programming',
    icon: Code,
    color: 'primary',
    description: 'Solved 720+ problems across LeetCode and CodeForces platforms.',
    date: 'Ongoing',
    level: 'Global'
  },
  {
    title: 'CodeChef 3 Star',
    category: 'Programming',
    icon: Star,
    color: 'secondary',
    description: 'Achieved 3 Star on CodeChef.',
    date: 'Ongoing',
    level: 'Global'
  },
  {
    title: 'TCS CodeVita - Global Rank 1629',
    category: 'Competition',
    icon: Trophy,
    color: 'accent',
    description: 'Secured Global Rank 1629 in TCS CodeVita.',
    date: '2025',
    level: 'Global'
  },
  {
    title: 'McKinsey Forward\'25',
    category: 'Competition',
    icon: Award,
    color: 'primary',
    description: 'Selected for McKinsey Forward 2025 program.',
    date: '2025',
    level: 'Global'
  },
  {
    title: 'Winner - Webvision & Innovative Project',
    category: 'Competition',
    icon: Trophy,
    color: 'secondary',
    description: 'Winner at Webvision 2025 and Innovative Project Competition.',
    date: '2025',
    level: 'National'
  },
  {
    title: 'Semi Finalist - Top Hackathons',
    category: 'Hackathon',
    icon: Trophy,
    color: 'accent',
    description: 'Semi Finalist in ET GenAI 2026, Google GenAI Exchange 2025, and CodeClash 2025.',
    date: '2025-2026',
    level: 'National'
  },
  {
    title: 'Smart India Hackathon 2025',
    category: 'Hackathon',
    icon: Code,
    color: 'primary',
    description: 'Advanced to Round 2 of Smart India Hackathon 2025.',
    date: '2025',
    level: 'National'
  },
  {
    title: 'Finalist - Major Hackathons',
    category: 'Hackathon',
    icon: Zap,
    color: 'secondary',
    description: 'Finalist (Top 8 CodeSynthesis), Memory Over Models, DevExpo NSUT, Hack Energy 2.0, Hackground India, Hack@BVP 7.0.',
    date: '2025',
    level: 'National'
  },
  {
    title: 'Web3 Mentor, GDG',
    category: 'Leadership',
    icon: Users,
    color: 'primary',
    description: 'Mentored junior developers in blockchain fundamentals as a Web3 Mentor at Google Developer Group.',
    date: '2025',
    level: 'Community'
  },
  {
    title: 'AiiDA for GSOC Proposal',
    category: 'Open Source',
    icon: Code,
    color: 'accent',
    description: 'Contributed to AiiDA for Google Summer of Code (GSOC) Proposal.',
    date: '2025',
    level: 'Global'
  },
  {
    title: 'SSOC & GSSOC 2025 Contributor',
    category: 'Open Source',
    icon: Code,
    color: 'secondary',
    description: 'Contributed to open-source projects during Social and GirlScript Summer of Code 2025.',
    date: '2025',
    level: 'Global'
  },
  {
    title: 'Intel Unnati Training 2025',
    category: 'Training',
    icon: Medal,
    color: 'primary',
    description: 'Selected for Intel Unnati Industrial Training 2025.',
    date: '2025',
    level: 'National'
  }
];

const certifications = [
  'Samsung Innovation Campus AI Certification',
  'Cybersecurity Essentials - CISCO',
  'Generative AI - Microsoft & LinkedIn',
  'Python for Data Science - IBM',
];

export default function Achievements() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/30 bg-primary/5 glow';
      case 'secondary':
        return 'border-secondary/30 bg-secondary/5 glow-secondary';
      case 'accent':
        return 'border-accent/30 bg-accent/5 glow-accent';
      default:
        return 'border-primary/30 bg-primary/5';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-secondary';
      case 'accent':
        return 'text-accent';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition and accomplishments in competitive programming, hackathons, and professional development
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card p-6 ${getColorClasses(achievement.color)} hover:scale-105 transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-white/5 border border-white/10`}>
                    <Icon className={`h-6 w-6 ${getIconColor(achievement.color)}`} />
                  </div>
                  <div className="text-right">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-muted-foreground">
                      {achievement.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  {achievement.title}
                </h3>

                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-medium px-2 py-1 rounded-md bg-white/10 ${getIconColor(achievement.color)}`}>
                    {achievement.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {achievement.date}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card p-8 glow"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="mr-3 h-6 w-6 text-accent" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                <span className="text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Competitions', value: '10+', icon: Trophy },
            { label: 'Certifications', value: '6+', icon: Award },
            { label: 'Rankings', value: '5+', icon: Medal },
            { label: 'Years Active', value: '2+', icon: Star },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center glow">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}