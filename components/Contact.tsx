"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'muku0784@gmail.com',
    link: 'mailto:muku0784@gmail.com',
    color: 'primary'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8882360895',
    link: 'tel:+918882360895',
    color: 'secondary'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Delhi, India',
    link: '#',
    color: 'accent'
  }
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com/mukul-sharma-tech',
    color: 'primary'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/mukul-sharma-830a152b2',
    color: 'secondary'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    url: 'https://instagram.com/mukul_sharma_tech',
    color: 'accent'
  },
  {
    icon: ExternalLink,
    label: 'LeetCode',
    url: 'https://leetcode.com/mukulsharmamait',
    color: 'primary'
  },
  {
    icon: ExternalLink,
    label: 'CodeChef',
    url: 'https://codechef.com/users/mukul_sharma',
    color: 'secondary'
  },
  {
    icon: ExternalLink,
    label: 'CodeForces',
    url: 'https://codeforces.com/profile/mukul_sharma',
    color: 'accent'
  }
];

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual EmailJS or form service)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary border-primary/30 hover:bg-primary/10';
      case 'secondary':
        return 'text-secondary border-secondary/30 hover:bg-secondary/10';
      case 'accent':
        return 'text-accent border-accent/30 hover:bg-accent/10';
      default:
        return 'text-primary border-primary/30 hover:bg-primary/10';
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 glow"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MessageCircle className="mr-3 h-6 w-6 text-primary" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass border-white/20 focus:border-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass border-white/20 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="glass border-white/20 focus:border-primary"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass border-white/20 focus:border-primary resize-none"
                  placeholder="Tell me about your project, idea, or just say hello!"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full glow hover:glow-secondary group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin mr-2 h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass-card p-8 glow-secondary">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className={`flex items-center p-4 rounded-lg glass border transition-all duration-300 ${getColorClasses(info.color)}`}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className={`p-2 rounded-lg bg-white/10 mr-4`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 glow-accent">
              <h3 className="text-2xl font-bold mb-6">Connect on Social</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 rounded-lg glass border transition-all duration-300 hover:scale-105 ${getColorClasses(social.color)}`}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon className="h-5 w-5 mr-3" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-card p-8 glow">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Response Time', value: '< 24h' },
                  { label: 'Projects Done', value: '17+' },
                  { label: 'Availability', value: 'Open' },
                  { label: 'Time Zone', value: 'IST' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-lg font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center glass-card p-8 glow"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to connect, 
            I&apos;m always excited to discuss new opportunities and innovative ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open('mailto:muku0784@gmail.com', '_blank')}
              className="glow hover:glow-secondary"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me Directly
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="border-primary/50 hover:bg-primary/10"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}