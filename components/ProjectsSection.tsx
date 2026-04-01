"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Jamal Collection - E-Commerce",
    description:
      "A fully functional e-commerce platform built with the MERN stack. Features include product browsing, secure cart management, and a responsive user interface.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    github: "https://github.com/bilalbasharat786/Ecommerce-Store-MERN",
    live: "https://jamalcollection.com",
  },
  {
    title: "OnFlix - Movie Platform",
    description:
      "A dynamic movie streaming application featuring Hollywood and Bollywood categories. Built with modern web technologies focusing on performance and seamless UI.",
    tags: ["React", "Node.js", "API Integration", "Responsive Design"],
    github: "https://github.com/bilalbasharat786/OnFlix-Movies",
    live: "https://on-flix-movies-a7we.vercel.app",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Portfolio</span>
          </div>
          <h2 className="section-heading uppercase tracking-tighter">
            Featured <span className="text-gradient-blue">Works</span>
          </h2>
          <p className="section-subtitle">
            A selection of my recent projects involving the MERN stack, full-stack development, and responsive web design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass p-8 rounded-[2.5rem] flex flex-col gap-6 hover:bg-white/[0.07] hover:border-primary/30 transition-all group shadow-xl"
            >
              {/* Title */}
              <h3 className="text-xl font-black text-foreground uppercase tracking-tight leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed font-medium flex-1">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
                >
                  <Github size={14} />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-foreground text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all border-white/20"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}