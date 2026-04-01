"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const links = [
    {
        label: "GitHub Profile",
        url: "https://github.com/bilalbasharat786",
        icon: <Github size={18} />
    },
    {
        label: "LinkedIn Achievements",
        url: "https://linkedin.com/in/bilal-basharat-5208a7388",
        icon: <Linkedin size={18} />
    }
];

export function VerifyMyWork() {
    return (
        <section id="verify" className="section-padding bg-[#020617] relative border-t border-white/5">
            <div className="container-custom">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="section-heading uppercase tracking-tighter">Verify <span className="text-gradient-blue">My Work</span></h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    {links.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center gap-3 px-8 py-4 rounded-2xl glass border-white/10 text-foreground font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-xl active:scale-95"
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
