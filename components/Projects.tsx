// import { useState, useRef, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Button } from '@/components/ui/button';
// import {
//   ExternalLink,
//   Github,
//   Mail,
//   Filter,
//   Brain,
//   Globe,
//   Smartphone,
//   Code,
//   Zap,
// } from 'lucide-react';
// import {projects} from './data/projects';

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   longDescription: string;
//   technologies: string[];
//   category: 'AI' | 'Web' | 'Mobile' | string;
//   complexity: 'High' | 'Medium' | 'Low';
//   liveUrl: string;
//   githubUrl: string;
//   featured: boolean;
//   status: 'Completed' | 'In Development' | 'Planning';
//   priority: number;
// };

// const categories = ['All', 'AI', 'Web', 'Mobile'];

// export default function Projects() {
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
//   const [selectedCategory, setSelectedCategory] = useState<string>('All');
//   const hoveredRef = useRef<number | null>(null);

//   const filteredProjects = useMemo<Project[]>(() => {
//     const list =
//       selectedCategory === 'All'
//         ? projects
//         : projects.filter((project: Project) => project.category === selectedCategory);
//     return [...list].sort((a, b) => a.priority - b.priority);
//   }, [selectedCategory]);

//   const featuredProjects = useMemo<Project[]>(() => {
//     return [...projects.filter((p: Project) => p.featured)].sort((a, b) => a.priority - b.priority);
//   }, []);

//   const regularProjects = useMemo<Project[]>(() => {
//     return [...projects.filter((p: Project) => !p.featured)].sort((a, b) => a.priority - b.priority);
//   }, []);

//   const getComplexityColor = (complexity: Project['complexity']): string => {
//     switch (complexity) {
//       case 'High':
//         return 'text-red-400 bg-red-400/10';
//       case 'Medium':
//         return 'text-yellow-400 bg-yellow-400/10';
//       case 'Low':
//         return 'text-green-400 bg-green-400/10';
//       default:
//         return 'text-gray-400 bg-gray-400/10';
//     }
//   };

//   const getStatusColor = (status: Project['status']): string => {
//     switch (status) {
//       case 'Completed':
//         return 'text-green-400 bg-green-400/10';
//       case 'In Development':
//         return 'text-blue-400 bg-blue-400/10';
//       case 'Planning':
//         return 'text-purple-400 bg-purple-400/10';
//       default:
//         return 'text-gray-400 bg-gray-400/10';
//     }
//   };

//   const ProjectCard = ({
//     project,
//     index,
//     featured = false,
//   }: {
//     project: Project;
//     index: number;
//     featured?: boolean;
//   }) => (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className={`glass-card p-6 group hover:scale-105 transition-all duration-300 ${
//         featured ? 'glow border-2 border-primary/30' : 'glow hover:glow-secondary'
//       } h-full flex flex-col`}
//       onMouseEnter={() => (hoveredRef.current = index)}
//       onMouseLeave={() => (hoveredRef.current = null)}
//       whileHover={{ y: -5 }}
//     >
//       <div className="relative overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 aspect-video flex items-center justify-center">
//         <div className="text-4xl font-bold opacity-20">
//           {project.category === 'AI' ? (
//             <Brain />
//           ) : project.category === 'Web' ? (
//             <Globe />
//           ) : project.category === 'Mobile' ? (
//             <Smartphone />
//           ) : (
//             <Code />
//           )}
//         </div>
//         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
//           <Button
//             size="sm"
//             onClick={() => window.open(project.liveUrl, '_blank')}
//             className="glass-card text-xs"
//             disabled={project.liveUrl === '#'}
//           >
//             <ExternalLink className="h-3 w-3 mr-1" />
//             Live
//           </Button>
//           <Button
//             size="sm"
//             variant="outline"
//             onClick={() => window.open(project.githubUrl, '_blank')}
//             className="glass-card border-white/20 text-xs"
//             disabled={project.githubUrl === '#'}
//           >
//             <Github className="h-3 w-3 mr-1" />
//             Code
//           </Button>
//         </div>
//       </div>

//       <div className="space-y-3 flex-1 flex flex-col">
//         <div className="flex items-start justify-between">
//           <h3
//             className={`font-bold leading-tight ${featured ? 'text-lg' : 'text-base'} line-clamp-2`}
//           >
//             {project.title}
//           </h3>
//           <div className="flex flex-col space-y-1 ml-2">
//             <span
//               className={`text-xs px-2 py-1 rounded-full ${getComplexityColor(
//                 project.complexity
//               )}`}
//             >
//               {project.complexity}
//             </span>
//             <span
//               className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}
//             >
//               {project.status}
//             </span>
//           </div>
//         </div>

//         <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
//           {hoveredRef.current === index ? project.longDescription : project.description}
//         </p>

//         <div className="flex flex-wrap gap-1">
//           {project.technologies.slice(0, 4).map((tech: string, i: number) => (
//             <span
//               key={i}
//               className="px-2 py-1 text-xs rounded-md bg-white/10 text-primary border border-white/10"
//             >
//               {tech}
//             </span>
//           ))}
//           {project.technologies.length > 4 && (
//             <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-muted-foreground border border-white/10">
//               +{project.technologies.length - 4}
//             </span>
//           )}
//         </div>

//         <div className="flex space-x-2 pt-2">
//           <Button
//             size="sm"
//             onClick={() => window.open(project.liveUrl, '_blank')}
//             className="flex-1 text-xs"
//             disabled={project.liveUrl === '#'}
//           >
//             <ExternalLink className="h-3 w-3 mr-1" />
//             Live Demo
//           </Button>
//           <Button
//             size="sm"
//             variant="outline"
//             onClick={() => window.open(project.githubUrl, '_blank')}
//             className="flex-1 border-primary/50 hover:bg-primary/10 text-xs"
//             disabled={project.githubUrl === '#'}
//           >
//             <Github className="h-3 w-3 mr-1" />
//             GitHub
//           </Button>
//         </div>
//       </div>
//     </motion.div>
//   );

//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
//           <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Featured Projects</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
//             A showcase of my latest work in AI/ML, full-stack development, and innovative solutions
//           </p>
//           <div className="flex justify-center space-x-2 mb-8">
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? 'default' : 'outline'}
//                 size="sm"
//                 onClick={() => setSelectedCategory(category)}
//                 className={selectedCategory === category ? 'bg-primary text-black' : 'border-primary/50 hover:bg-primary/10'}
//               >
//                 <Filter className="h-4 w-4 mr-2" /> {category}
//               </Button>
//             ))}
//           </div>
//         </motion.div>

//         {selectedCategory === 'All' && (
//           <div className="mb-16">
//             <h3 className="text-2xl font-bold mb-8 text-center">⭐ Featured Projects</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {featuredProjects.map((project, index) => (
//                 <ProjectCard key={project.id} project={project} index={index} featured={true} />
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {(selectedCategory === 'All' ? regularProjects : filteredProjects).map((project, index) => (
//             <ProjectCard key={project.id} project={project} index={index} />
//           ))}
//         </div>

//         <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[{ label: 'Total Projects', value: '17+', icon: Code }, { label: 'AI Projects', value: '8+', icon: Brain }, { label: 'Web Apps', value: '9+', icon: Globe }, { label: 'Technologies', value: '20+', icon: Zap }].map((stat, index) => (
//             <div key={index} className="glass-card p-6 text-center glow">
//               <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
//               <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
//               <div className="text-sm text-muted-foreground">{stat.label}</div>
//             </div>
//           ))}
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.7 }} className="mt-16 text-center">
//           <p className="text-lg text-muted-foreground mb-6">Want to see more of my work or collaborate on a project?</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" onClick={() => window.open('https://github.com/mukul-sharma-tech', '_blank')} className="glass-card glow">
//               <Github className="mr-2 h-5 w-5" /> View All on GitHub
//             </Button>
//             <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="glass-card border-primary/50 hover:bg-primary/10">
//               <Mail className="mr-2 h-5 w-5" /> Let's Collaborate
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import { projects } from './data/projects';
import type { Project } from './data/projects'; // Importing your Project type

const categories = ['All', 'AI', 'Web', 'Mobile'];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const hoveredRef = useRef<number | null>(null);

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
      } h-full flex flex-col`}
      onMouseEnter={() => (hoveredRef.current = index)}
      onMouseLeave={() => (hoveredRef.current = null)}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video flex items-center justify-center bg-black">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full rounded-lg"
          />
        ) : (
          <div className="text-4xl font-bold opacity-20">
            {project.category === 'AI' ? (
              <Brain />
            ) : project.category === 'Web' ? (
              <Globe />
            ) : project.category === 'Mobile' ? (
              <Smartphone />
            ) : (
              <Code />
            )}
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <Button
            size="sm"
            onClick={() => window.open(project.liveUrl, '_blank')}
            className="glass-card text-xs"
            disabled={project.liveUrl === '#'}
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Live
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="glass-card border-white/20 text-xs"
            disabled={project.githubUrl === '#'}
          >
            <Github className="h-3 w-3 mr-1" />
            Code
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
          {hoveredRef.current === index ? project.longDescription : project.description}
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

        <div className="flex space-x-2 pt-2">
          <Button
            size="sm"
            onClick={() => window.open(project.liveUrl, '_blank')}
            className="flex-1 text-xs"
            disabled={project.liveUrl === '#'}
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Live Demo
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="flex-1 border-primary/50 hover:bg-primary/10 text-xs"
            disabled={project.githubUrl === '#'}
          >
            <Github className="h-3 w-3 mr-1" />
            GitHub
          </Button>
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
              <Mail className="mr-2 h-5 w-5" /> Let's Collaborate
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
