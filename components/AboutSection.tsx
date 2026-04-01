"use client";

"use client";

import { motion } from "framer-motion";

// Updated stats based on your resume
const aboutStats = [
  { label: "Tech Stack", value: "MERN", color: "blue" },
  { label: "Certifications", value: "4", color: "emerald" },
  { label: "Focus", value: "Full-Stack", color: "purple" },
  { label: "Location", value: "Rawalpindi", color: "green" }
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">About Me</span>
              <h2 className="text-4xl md:text-6xl font-black text-foreground leading-none">
                Building applications with <br />
                <span className="text-gradient-emerald uppercase">MERN Stack</span>
              </h2>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed font-bold">
              I&apos;m <span className="text-foreground font-black">Muhammad Bilal</span>, a dedicated Web Developer[cite: 1, 2]. 
              Currently, my expertise lies in <span className="text-primary font-black">HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, and MongoDB</span>. 
              My objective is to design responsive user interfaces and develop efficient full-stack applications, while continuously enhancing my skills through innovative projects.
            </p>
          </motion.div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col items-center space-y-2 hover:bg-white/[0.08] transition-colors shadow-xl"
              >
                <div className="text-3xl font-black text-foreground">{stat.value}</div>
                <div className="text-[10px] font-black text-primary/80 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}