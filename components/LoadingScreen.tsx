"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const messages = [
  "Miracles are closer than you think.",
  "Yes, we're leaving money on the table. That's the point.",
  "They maximize shareholder value. We maximize human value.",
  "Enjoy the little things.",
  "Focus is saying no to 1000 good ideas."
];

export default function LoadingScreen() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    // Show a random quote immediately
    setCurrentIdx(Math.floor(Math.random() * messages.length));

    const interval = setInterval(() => {
      setCurrentIdx((prev) => {
        let nextIdx;
        do {
          nextIdx = Math.floor(Math.random() * messages.length);
        } while (nextIdx === prev && messages.length > 1);
        return nextIdx;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-between items-center overflow-hidden bg-[#3F8B8B] text-white font-sans">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 50% 45%, rgba(230, 197, 179, 0.35) 0%, rgba(63, 139, 139, 0.8) 30%, transparent 70%),
            radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.15), transparent 45%),
            radial-gradient(circle at 65% 35%, rgba(230, 197, 179, 0.15), transparent 45%)
          `,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      />

      <div className="flex-1 w-full flex flex-col justify-center items-center z-10">
        {/* Concentric Rings Container */}
        <div className="relative w-[120px] h-[120px] flex justify-center items-center mb-10 scale-125 md:scale-150">
          <div className="absolute w-[8px] h-[8px] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          
          <div className="absolute w-[40px] h-[40px] border-[3px] border-white/20 rounded-full"></div>
          <div className="absolute w-[65px] h-[65px] border-[3px] border-white/20 rounded-full"></div>
          <div className="absolute w-[90px] h-[90px] border-[3px] border-white/20 rounded-full"></div>
          <div className="absolute w-[115px] h-[115px] border-[3px] border-white/20 rounded-full"></div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
            className="absolute w-[115px] h-[115px] rounded-full border-[3.5px] border-transparent border-b-white"
          />
        </div>

        {/* Text Content */}
        <div className="text-center min-h-[110px] flex flex-col items-center drop-shadow-md">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[1.35rem] font-medium tracking-wide mb-6 max-w-[420px] leading-relaxed px-4"
            >
              {messages[currentIdx]}
            </motion.h1>
          </AnimatePresence>

          {/* Loading Dots */}
          <div className="flex justify-center gap-[6px] mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [0.6, 1, 0.6], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.4, delay: i * -0.16 }}
                className="w-[6px] h-[6px] bg-white/70 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 text-[0.85rem] text-white/60 pb-6 font-medium tracking-widest uppercase flex items-center gap-1.5">
        Mukul Sharma <span className="mx-1">•</span> AI & Full Stack Engineer
      </div>
    </div>
  );
}
