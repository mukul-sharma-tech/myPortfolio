"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function GitHubStats() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="github-stats" className="py-16 relative">
      <div className="container mx-auto px-4" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-tag mx-auto w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60 inline-block" />
            open source activity
          </div>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">
            GitHub Stats and Leetcode Stats
          </h2>
        </motion.div>

       

        {/* LeetCode heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="glass-card p-3 card-3d w-full max-w-2xl">
            <img
              src="https://leetcard.jacoblin.cool/mukul1010?theme=dark&font=Fira%20Code&ext=heatmap"
              alt="LeetCode Stats"
              className="rounded-lg w-full"
            />
          </div>
        </motion.div>

        {/* Activity graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-card p-3 card-3d"
        >
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=mukul-sharma-tech&bg_color=0d1117&color=7dd3fc&line=7dd3fc&point=a78bfa&hide_border=true"
            alt="GitHub Activity Graph"
            className="rounded-lg w-full"
          />
        </motion.div>

      </div>
    </section>
  );
}
