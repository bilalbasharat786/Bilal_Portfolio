"use client";

import { motion } from "framer-motion";
import { Award, Layers, Headset } from "lucide-react";

const metrics = [
    {
        label: "Certifications",
        value: "4",
        icon: <Award className="h-6 w-6" />,
        description: "Certified in MERN Stack, Web Design, and Advanced IT."
    },
    {
        label: "Core Stack",
        value: "MERN",
        icon: <Layers className="h-6 w-6" />,
        description: "Building responsive UI and efficient full-stack applications."
    },
    {
        label: "Support",
        value: "24/7",
        icon: <Headset className="h-6 w-6" />,
        description: "Always available to deliver and iterate on your web projects."
    }
];

export function WhyChooseMe() {
    return (
        <section id="why-choose-me" className="section-padding bg-background relative border-t border-white/5">
            <div className="container-custom">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="section-heading uppercase tracking-tighter">Why <span className="text-gradient-blue">Choose Me</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-10 rounded-[3rem] flex flex-col items-center text-center space-y-6 hover:bg-white/[0.08] hover:border-primary/30 transition-all shadow-2xl group"
                        >
                            <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                                {metric.icon}
                            </div>
                            <div className="space-y-1">
                                <span className="text-5xl font-black text-foreground tracking-tighter">{metric.value}</span>
                                <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">{metric.label}</p>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {metric.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}