"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Medal, Award, Star, Users, Code, Target, Zap } from 'lucide-react';

const achievements = [
  {
    title: 'LeetCode 435+ Problems',
    category: 'Programming',
    icon: Code, // Assumed icon
    color: 'primary',
    description: 'Solved 382+ problems on LeetCode (mukul1010).',
    date: 'Ongoing',
    level: 'Global'
  },
  {
    title: 'CodeChef 3 Star',
    category: 'Programming',
    icon: Star, // Assumed icon
    color: 'secondary',
    description: 'Achieved 3 Star (1600+ rating) on CodeChef (mukul1010).',
    date: 'Ongoing',
    level: 'Global'
  },
  {
    title: 'CodeForces 1081 Rating',
    category: 'Programming',
    icon: Trophy, // Assumed icon
    color: 'accent',
    description: 'Pupil rating (1081) on CodeForces (muku0784).',
    date: 'Ongoing',
    level: 'Global'
  },
  {
    title: 'Web3 Mentor, GDG MAIT',
    category: 'Activity',
    icon: Users, // Assumed icon
    color: 'primary',
    description: 'Mentoring students in Web3 technologies for Google Developer Group MAIT.',
    date: '2025',
    level: 'College'
  },
    {
    title: 'Memory Over Models Hackathon Winner',
    category: 'Competition',
    icon: Award, // Assumed icon
    color: 'secondary',
    description: 'Under Top 20 Winners.',
    date: '2025',
    level: 'National' // Assumed level
  },

  {
    title: 'Webvision Winner 2025',
    category: 'Competition',
    icon: Award, // Assumed icon
    color: 'secondary',
    description: 'Secured first place in the Webvision 2025 competition.',
    date: '2025',
    level: 'Inter-College' // Assumed level
  },
  {
    title: 'Smart India Hackathon 2025',
    category: 'Hackathon',
    icon: Code,
    color: 'accent',
    description: 'Currently participating in the final rounds of Smart India Hackathon 2025.',
    date: '2025',
    level: 'National'
  },
  {
    title: 'Top 8 - CodeSynthesis 2025',
    category: 'Competition',
    icon: Trophy,
    color: 'primary',
    description: 'Ranked in the Top 8 teams at CodeSynthesis 2025.',
    date: '2025',
    level: 'National' // Assumed level
  },
  {
    title: 'Finalist - DevExpo NSUT 2025',
    category: 'Hackathon',
    icon: Zap, // Assumed icon
    color: 'secondary',
    description: 'Reached the finals of the DevExpo Hackathon at NSUT 2025.',
    date: '2025',
    level: 'Inter-College' // Assumed level
  },
  {
    title: 'Finalist - Hackground India 2025',
    category: 'Hackathon',
    icon: Target, // Assumed icon
    color: 'accent',
    description: 'Qualified as a finalist in the Hackground India 2025 hackathon.',
    date: '2025',
    level: 'National'
  },
  {
    title: 'CodeClash 2025 Semi-Finalist',
    category: 'Competition',
    icon: Trophy,
    color: 'primary',
    description: 'Reached semi-finals in the prestigious CodeClash 2025 competitive programming contest.',
    date: '2025',
    level: 'National' // Assumed level
  },
  {
    title: 'SSOC 2025 Contributor',
    category: 'Open Source',
    icon: Code,
    color: 'secondary',
    description: 'Contributed to open-source projects during Social Summer of Code 2025.',
    date: '2025',
    level: 'Global'
  },
  {
    title: 'GSSOC 2025 Contributor',
    category: 'Open Source',
    icon: Code,
    color: 'accent',
    description: 'Contributed to open-source projects during GirlScript Summer of Code 2025.',
    date: '2025',
    level: 'Global'
  },
  {
    title: 'Branch Rank 14th (4th Semester)',
    category: 'Academic',
    icon: Medal,
    color: 'primary',
    description: 'Achieved 14th rank in Computer Science branch with 9.284 CGPA till 4th semester.', // CGPA updated to match resume
    date: '2025',
    level: 'College'
  },
  {
    title: 'Class 12th - 7th Rank',
    category: 'Academic',
    icon: Star,
    color: 'secondary',
    description: 'Secured 7th rank in school with 92.6% marks in CBSE Class 12th examination.',
    date: '2022',
    level: 'School'
  }
];

const certifications = [
  'Cybersecurity Essentials - CISCO',
  'Python for Data Science',
  'Containers Kubernetes OpenShift V2',
  'Career Essentials in Generative AI - Microsoft & LinkedIn',
  'Containers & Kubernetes Essentials - IBM',
  'AWS Knowledge: Cloud Essentials'
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