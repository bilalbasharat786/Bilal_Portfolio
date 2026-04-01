"use client";

import { motion } from "framer-motion";
import { Sparkles, Download } from "lucide-react";

// Updated Tech Stack based on your Resume (MERN Stack + HTML/CSS)
const techStack = [
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-32 pb-12">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm"
          >
            <Sparkles size={14} />
            <span>Open for Full-Stack Web Projects</span>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.9] uppercase"
            >
              FULL STACK <br />
              <span className="text-gradient-animate">WEB DEVELOPER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl font-bold tracking-[0.3em] text-muted-foreground uppercase"
            >
              Muhammad Bilal
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href="#contact"
              className="px-10 py-5 rounded-full bg-primary text-primary-foreground font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/40"
            >
              Start a Project
            </a>
            <a
              href="#about"
              className="px-10 py-5 rounded-full glass text-foreground font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all border-white/20"
            >
              My Story
            </a>
            <a
              href="/MuhammadBilalResume.pdf"
              download
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full glass text-foreground font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all border-white/20"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Tech stack bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full pt-16"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground mb-10">Specialized Tech Stack</p>
            <div className="marquee-container glass rounded-[2.5rem] border-white/5 py-12 relative overflow-hidden">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

              <div className="marquee-content">
                {/* Triple the list to ensure it covers even the largest screens and loops seamlessly */}
                {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                  <div key={`${tech.name}-${i}`} className="flex items-center justify-center min-w-[150px]">
                    <img
                      src={tech.url}
                      alt={tech.name}
                      className="tech-icon"
                      title={tech.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual Accents */}
      <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}