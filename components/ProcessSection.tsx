"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe2, LayoutDashboard, Zap, ShieldCheck } from "lucide-react";

// Updated workflow steps focusing on Full Stack Web Development
const steps = [
  {
    number: "01",
    title: "Planning",
    description: "Understanding your project goals, target audience, and structuring the website architecture.",
    icon: <Globe2 className="h-6 w-6" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Creating responsive, modern layouts using HTML, CSS, and interactive elements before coding.",
    icon: <LayoutDashboard className="h-6 w-6" />,
    color: "from-purple-500/20 to-transparent"
  },
  {
    number: "03",
    title: "Development",
    description: "Building the frontend with React and setting up secure backends with Node.js and MongoDB.",
    icon: <Zap className="h-6 w-6" />,
    color: "from-amber-500/20 to-transparent"
  },
  {
    number: "04",
    title: "Deployment",
    description: "Testing, fixing bugs, and deploying the MERN stack application to the live server.",
    icon: <ShieldCheck className="h-6 w-6" />,
    color: "from-emerald-500/20 to-transparent"
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-[#020617] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Workflow</span>
          </div>
          <h2 className="section-heading uppercase">My <span className="text-gradient-blue">Process</span></h2>
          <p className="section-subtitle">
            From idea to a live web application. A step-by-step approach to building fast, responsive, and secure websites.
          </p>
        </div>

        {/* Desktop: horizontal flow with connectors */}
        <div className="hidden md:flex items-stretch gap-0 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative glass p-8 rounded-[2.5rem] overflow-hidden border-white/5 hover:border-white/10 transition-all shadow-2xl flex-1"
              >
                {/* Large Background Number */}
                <span className="absolute -right-4 -bottom-8 text-[10rem] font-black text-white/[0.03] select-none group-hover:text-primary/[0.05] transition-colors leading-none">
                  {step.number}
                </span>

                {/* Icon & Details */}
                <div className="relative z-10 space-y-5">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                    {step.icon}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">{step.number}</span>
                      <div className="h-px w-8 bg-primary/30" />
                    </div>
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Subtle hover accent */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
              </motion.div>

              {/* Connector arrow between steps */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="flex flex-col items-center gap-1 px-2 flex-shrink-0 origin-left"
                >
                  <div className="w-8 h-px bg-gradient-to-r from-primary/60 to-primary/20" />
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="text-primary/60 -mt-[3px] ml-6">
                    <path d="M0 5H10M10 5L6 1M10 5L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow with dotted connector */}
        <div className="flex flex-col gap-0 md:hidden max-w-xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative glass p-10 rounded-[2.5rem] overflow-hidden border-white/5 hover:border-white/10 transition-all shadow-2xl"
              >
                <span className="absolute -right-4 -bottom-8 text-[12rem] font-black text-white/[0.03] select-none group-hover:text-primary/[0.05] transition-colors leading-none">
                  {step.number}
                </span>
                <div className="relative z-10 space-y-6">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                    {step.icon}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">{step.number}</span>
                      <div className="h-px w-8 bg-primary/30" />
                    </div>
                    <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
              </motion.div>

              {/* Vertical connector */}
              {index < steps.length - 1 && (
                <div className="flex flex-col items-center py-2 gap-1">
                  <div className="w-px h-4 bg-gradient-to-b from-primary/60 to-primary/20" />
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="text-primary/60">
                    <path d="M5 0V10M5 10L1 6M5 10L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}