"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Database, Globe, Brain, Wrench, Cpu, 
  FileCode, Terminal, Layers, GitBranch, 
  Smartphone, Cloud, Settings, Zap,
  Bot, MessageSquare, Sparkles
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'primary',
    skills: [
      { name: 'C', icon: FileCode },
      { name: 'C++', icon: FileCode },
      { name: 'JavaScript', icon: FileCode },
      { name: 'TypeScript', icon: FileCode },
      { name: 'Python', icon: FileCode },
      { name: 'Java', icon: FileCode },
    ]
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: 'secondary',
    skills: [
      { name: 'React', icon: Layers },
      { name: 'Next.js', icon: Layers },
      { name: 'Node.js', icon: Terminal },
      { name: 'Express.js', icon: Terminal },
      { name: 'HTML/CSS', icon: FileCode },
      { name: 'Tailwind CSS', icon: Layers },
      { name: 'Bootstrap', icon: Layers },
      { name: 'REST APIs', icon: Cloud },
      { name: 'Flask API', icon: Terminal },
    ]
  },
  {
    title: 'Database & Tools',
    icon: Database,
    color: 'accent',
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'Firebase', icon: Database },
      { name: 'Supabase', icon: Database },
      { name: 'Git/GitHub', icon: GitBranch },
      { name: 'VSCode', icon: Settings },
      { name: 'Postman', icon: Settings },
      { name: 'Jupyter', icon: Settings },
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'primary',
    skills: [
      { name: 'TensorFlow', icon: Brain },
      { name: 'OpenCV', icon: Brain },
      { name: 'NLP', icon: MessageSquare },
      { name: 'Data Science', icon: Brain },
      { name: 'Pandas', icon: Brain },
      { name: 'Scikit-learn', icon: Brain },
    ]
  },
  {
    title: 'Core Concepts',
    icon: Cpu,
    color: 'secondary',
    skills: [
      { name: 'Data Structures', icon: Cpu },
      { name: 'Algorithms', icon: Cpu },
      { name: 'OOP', icon: Cpu },
      { name: 'DBMS', icon: Database },
      { name: 'System Design', icon: Cpu },
      { name: 'Problem Solving', icon: Zap },
    ]
  },
  {
    title: 'AI Tools',
    icon: Bot,
    color: 'accent',
    skills: [
      { name: 'ChatGPT', icon: Bot },
      { name: 'Claude', icon: Bot },
      { name: 'Gemini', icon: Bot },
      { name: 'DeepSeek', icon: Bot },
      { name: 'Perplexity', icon: Bot },
      { name: 'Generative AI', icon: Sparkles },
    ]
  }
];

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return { 
          border: 'border-primary/30', 
          bg: 'bg-primary/5', 
          text: 'text-primary',
          glow: 'glow hover:glow',
          iconBg: 'bg-primary/10'
        };
      case 'secondary':
        return { 
          border: 'border-secondary/30', 
          bg: 'bg-secondary/5', 
          text: 'text-secondary',
          glow: 'glow-secondary hover:glow-secondary',
          iconBg: 'bg-secondary/10'
        };
      case 'accent':
        return { 
          border: 'border-accent/30', 
          bg: 'bg-accent/5', 
          text: 'text-accent',
          glow: 'glow-accent hover:glow-accent',
          iconBg: 'bg-accent/10'
        };
      default:
        return { 
          border: 'border-primary/30', 
          bg: 'bg-primary/5', 
          text: 'text-primary',
          glow: 'glow',
          iconBg: 'bg-primary/10'
        };
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My technical expertise across various domains of software development and AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className={`glass-card p-6 ${colors.border} ${colors.bg} ${colors.glow} skill-card`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${colors.iconBg} ${colors.border} mr-4`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        className={`flex flex-col items-center p-3 rounded-lg ${colors.iconBg} border ${colors.border} hover:scale-105 transition-all duration-300 group cursor-pointer`}
                        whileHover={{ y: -2 }}
                      >
                        <SkillIcon className={`h-6 w-6 ${colors.text} mb-2 group-hover:scale-110 transition-transform`} />
                        <span className="text-xs font-medium text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Languages Mastered', value: '6+', icon: Code },
            { label: 'Frameworks Used', value: '10+', icon: Layers },
            { label: 'Projects Built', value: '20+', icon: Globe },
            { label: 'Technologies', value: '25+', icon: Zap },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center glow">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-2">
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