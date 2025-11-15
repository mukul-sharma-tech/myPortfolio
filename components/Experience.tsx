"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: 'Web3 Mentor',
    company: 'Google Developer Group MAIT',
    location: 'Delhi, India',
    period: 'September 2025 - Present',
    type: 'Current',
    description: 'Mentoring Peers on Web3 Technology',
    technologies: ['Web3', 'Solidity', 'Smart Contract', 'Rust'],
    color: 'primary'
  },
   {
    title: 'SDE Intern',
    company: 'UIDAI',
    location: 'Delhi, India',
    period: 'July 2025 - September 2025',
    type: 'Completed',
    description: 'Contributing to the UIDAI Aadhaar Portal by building secure full-stack features for enrolment, updates, and authentication, improving APIs, UI, and database integration to enhance user experience and ensure government compliance.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express.js','Typescript','API Testing','Devops'],
    color: 'primary'
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Desire4Travels',
    location: 'Remote',
    period: 'May 2025 - June 2025',
    type: 'Completed',
    description: 'Contributing to the development of the company\'s travel and tour website and building a separate website for travel agents and booking platforms.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express.js'],
    link: 'https://desire4travels.com/',
    color: 'primary'
  },
  {
    title: 'AI-Powered Learning Assistant Developer',
    company: 'Intel Unnati Industrial Training 2025',
    location: 'Delhi',
    period: 'Jan 2025 - Present',
    type: 'Training',
    description: 'Currently developing an AI-Powered Interactive Learning Assistant for Classrooms as part of Intel Unnati Industrial Training Program.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'NLP', 'AI/ML'],
    color: 'secondary'
  },
];

export default function Experience() {
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

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through internships, training programs, and professional development
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Better Centered */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-0.5" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot - Better Positioned */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-2 z-10 timeline-item ${getColorClasses(exp.color)}`} />

                {/* Content Card - Better Spacing */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  <motion.div
                    className={`glass-card p-4 ${getColorClasses(exp.color)} hover:scale-105 transition-all duration-300`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-base font-semibold text-primary mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Current' ? 'bg-green-500/20 text-green-400' :
                        exp.type === 'Training' ? 'bg-blue-500/20 text-blue-400' :
                        exp.type === 'Project' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs rounded-md bg-white/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 hover:bg-primary/10 text-xs"
                        onClick={() => window.open(exp.link, '_blank')}
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        View Project
                      </Button>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}