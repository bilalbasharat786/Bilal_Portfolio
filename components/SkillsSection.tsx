"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Rocket, Wrench, ArrowRight } from "lucide-react";

// Updated skills based on your MERN Stack Resume
const skillGroups = [
    {
        title: "Frontend Development",
        icon: <Code2 className="text-emerald-400" />,
        skills: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Responsive Design"]
    },
    {
        title: "Backend & Database",
        icon: <Rocket className="text-purple-400" />,
        skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"]
    },
    {
        title: "Certifications",
        icon: <Brain className="text-blue-400" />,
        skills: ["MERN Stack Development", "Web Designing", "Advanced IT"]
    },
    {
        title: "Tools & Core Skills",
        icon: <Wrench className="text-amber-400" />,
        skills: ["VS Code", "Git/GitHub", "Problem Solving", "Full-Stack Architecture"]
    }
];

export function SkillsSection() {
    return (
        <section id="skills" className="section-padding bg-[#020617] relative border-t border-white/5">
            <div className="container-custom">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="section-heading uppercase tracking-tighter">My <span className="text-gradient-blue">Skills</span></h2>
                    <p className="section-subtitle">A structured overview of my technical expertise in MERN stack and web technologies.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-[2.5rem] border-white/5 hover:bg-white/[0.08] transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">
                                    {group.icon}
                                </div>
                                <h3 className="text-sm font-black text-foreground uppercase tracking-widest leading-tight">{group.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {group.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                        <div className="h-1 w-1 rounded-full bg-primary/40" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 flex flex-col items-center"
                >
                    {/* Changed LeetCode link to Email Link based on your resume */}
                    <a
                        href="mailto:officialbilal707@gmail.com"
                        className="group flex items-center gap-3 px-8 py-4 rounded-2xl glass border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
                    >
                        <span className="text-xs font-black uppercase tracking-[0.2em]">Email Me</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}