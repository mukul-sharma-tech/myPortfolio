"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Medal, Award, Star, Users, Code, Target, Zap } from 'lucide-react';

const achievements = [
  {
    title: 'CodeClash 2025 Semi-Finalists',
    category: 'Competition',
    icon: Trophy,
    color: 'primary',
    description: 'Reached semi-finals in the prestigious CodeClash 2025 competitive programming contest.',
    date: '2025',
    level: 'National'
  },
  {
    title: 'SIH 2024 - Round 1 Cleared',
    category: 'Hackathon',
    icon: Code,
    color: 'secondary',
    description: 'Successfully cleared the first round of Smart India Hackathon 2024, competing with thousands of teams.',
    date: '2024',
    level: 'National'
  },
  {
    title: 'Codegenis Ideathon 2025 - Round 2',
    category: 'Innovation',
    icon: Target,
    color: 'accent',
    description: 'Advanced to the second round of Codegenis Ideathon 2025 with innovative project idea.',
    date: '2025',
    level: 'Inter-College'
  },
  {
    title: 'Branch Rank 8th (4th Semester)',
    category: 'Academic',
    icon: Medal,
    color: 'primary',
    description: 'Achieved 8th rank in Computer Science branch with 9.355 CGPA till 4th semester.',
    date: '2024',
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
  },
  {
    title: 'Top 5 - TechSquid Competition',
    category: 'Competition',
    icon: Zap,
    color: 'accent',
    description: 'Finished in top 5 positions in the TechSquid technical competition.',
    date: '2024',
    level: 'Regional'
  },
  {
    title: 'Top 8 - Be SDE Ready 1.0',
    category: 'Competition',
    icon: Code,
    color: 'primary',
    description: 'Secured top 8 position in the Be SDE Ready 1.0 software development competition.',
    date: '2024',
    level: 'National'
  },
  {
    title: 'Build with India Hackathon',
    category: 'Hackathon',
    icon: Users,
    color: 'secondary',
    description: 'Ranked under top 5000 participants in the Build with India Hackathon.',
    date: '2024',
    level: 'National'
  },
  {
    title: 'GDG on Campus Solution Challenge',
    category: 'Challenge',
    icon: Award,
    color: 'accent',
    description: 'Participated in Google Developer Groups on Campus Solution Challenge.',
    date: '2024',
    level: 'Global'
  },
  {
    title: 'BuildWars - Top 88 Teams',
    category: 'Competition',
    icon: Trophy,
    color: 'primary',
    description: 'Team ranked among top 88 teams in the BuildWars development competition.',
    date: '2024',
    level: 'National'
  },
  {
    title: 'DSA Xtreme Battle',
    category: 'Programming',
    icon: Code,
    color: 'secondary',
    description: 'Excelled in the DSA Xtreme Battle competitive programming contest.',
    date: '2024',
    level: 'Inter-College'
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