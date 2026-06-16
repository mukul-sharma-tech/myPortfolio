'use client';

import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Github,
  Mail,
  Filter,
  Brain,
  Globe,
  Smartphone,
  Code,
  Zap,
  Shield,
} from 'lucide-react';
import { projects } from './data/projects';
import type { Project } from './data/projects'; // Importing your Project type

const categories = ['All', 'Security', 'AI/ML', 'Web', 'Core CS', 'Web3'];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo<Project[]>(() => {
    const list =
      selectedCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === selectedCategory);
    return [...list].sort((a, b) => a.priority - b.priority);
  }, [selectedCategory]);

  const featuredProjects = useMemo<Project[]>(() => {
    return [...projects.filter((p) => p.featured)].sort((a, b) => a.priority - b.priority);
  }, []);

  const regularProjects = useMemo<Project[]>(() => {
    return [...projects.filter((p) => !p.featured)].sort((a, b) => a.priority - b.priority);
  }, []);

  const getComplexityColor = (complexity: Project['complexity']) => {
    switch (complexity) {
      case 'High':
        return 'text-red-400 bg-red-400/10';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'Low':
        return 'text-green-400 bg-green-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'text-green-400 bg-green-400/10';
      case 'In Development':
        return 'text-blue-400 bg-blue-400/10';
      case 'Planning':
        return 'text-purple-400 bg-purple-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const ProjectCard = ({
    project,
    index,
    featured = false,
  }: {
    project: Project;
    index: number;
    featured?: boolean;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass-card p-6 group hover:scale-105 transition-all duration-300 ${
        featured ? 'glow border-2 border-primary/30' : 'glow hover:glow-secondary'
      } h-full flex flex-col cursor-pointer`}
      onClick={() => setSelectedProject(project)}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video flex items-center justify-center bg-black">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full rounded-lg group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="text-4xl font-bold opacity-20">
            {project.category === 'AI/ML' ? (
              <Brain />
            ) : project.category === 'Security' ? (
              <Shield />
            ) : project.category === 'Web' ? (
              <Globe />
            ) : project.category === 'Web3' ? (
              <Zap />
            ) : project.category === 'Core CS' ? (
              <Code />
            ) : (
              <Code />
            )}
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-3">
          <Button
            size="sm"
            onClick={(e) => { e.stopPropagation(); window.open(project.liveUrl, '_blank'); }}
            className="glass-card text-xs w-32"
            disabled={project.liveUrl === '#'}
          >
            <ExternalLink className="h-3 w-3 mr-2" />
            Live Demo
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl, '_blank'); }}
            className="glass-card border-white/20 text-xs w-32"
            disabled={project.githubUrl === '#'}
          >
            <Github className="h-3 w-3 mr-2" />
            Source Code
          </Button>
          <Button
            size="sm"
            onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
            className="bg-primary text-charcoal hover:bg-primary/90 text-xs font-bold w-32"
          >
            View Details
          </Button>
        </div>
      </div>

      <div className="space-y-3 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <h3
            className={`font-bold leading-tight ${featured ? 'text-lg' : 'text-base'} line-clamp-2`}
          >
            {project.title}
          </h3>
          <div className="flex flex-col space-y-1 ml-2">
            <span
              className={`text-xs px-2 py-1 rounded-full ${getComplexityColor(
                project.complexity
              )}`}
            >
              {project.complexity}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}
            >
              {project.status}
            </span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-md bg-white/10 text-primary border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-muted-foreground border border-white/10">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my latest work in AI/ML, full-stack development, and innovative solutions
          </p>
          <div className="flex justify-center space-x-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-primary text-black'
                    : 'border-primary/50 hover:bg-primary/10'
                }
              >
                <Filter className="h-4 w-4 mr-2" /> {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">⭐ Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} featured />
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedCategory === 'All' ? regularProjects : filteredProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Projects', value: '17+', icon: Code },
            { label: 'AI Projects', value: '8+', icon: Brain },
            { label: 'Web Apps', value: '9+', icon: Globe },
            { label: 'Technologies', value: '20+', icon: Zap },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center glow">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open('https://github.com/mukul-sharma-tech', '_blank')}
              className="glass-card glow"
            >
              <Github className="mr-2 h-5 w-5" /> View All on GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="glass-card border-primary/50 hover:bg-primary/10"
            >
              <Mail className="mr-2 h-5 w-5" /> Let&apos;s Collaborate
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            {/* Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#3F8B8B] text-white border border-white/20 rounded-2xl shadow-2xl overflow-hidden glass-card z-10 max-h-[90vh] flex flex-col"
            >
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                    <div className="flex items-center space-x-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${getComplexityColor(selectedProject.complexity)}`}>
                        {selectedProject.complexity}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm text-primary mb-3 font-semibold uppercase tracking-wider">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-md bg-white/10 text-white border border-white/20 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description Pointers */}
                <div className="mb-8">
                  <h4 className="text-sm text-primary mb-3 font-semibold uppercase tracking-wider">Project Overview</h4>
                  <div className="space-y-4 text-white/90 text-lg font-light leading-relaxed">
                    {selectedProject.longDescription.split('\n').map((point, i) => (
                      <div key={i} className="flex items-start">
                        <span className="mr-3 text-primary mt-1 text-xl">•</span>
                        <span>{point.replace(/^•\s*/, '')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6 border-t border-white/10">
                  <Button size="lg" onClick={() => window.open(selectedProject.liveUrl, '_blank')} className="flex-1 bg-primary text-charcoal hover:bg-primary/90 font-bold" disabled={selectedProject.liveUrl === '#'}>
                    <ExternalLink className="mr-2 w-5 h-5" /> Live Demo
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => window.open(selectedProject.githubUrl, '_blank')} className="flex-1 bg-transparent border-white/50 text-white hover:bg-white/10" disabled={selectedProject.githubUrl === '#'}>
                    <Github className="mr-2 w-5 h-5" /> View Source Code
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
