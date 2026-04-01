"use client";

import { motion } from "framer-motion";
import { Monitor, Globe, Server, ArrowRight } from "lucide-react";

// Updated services based on Web Development & MERN Stack
const services = [
  {
    title: "Frontend Development",
    icon: <Monitor className="h-6 w-6" />,
    description:
      "Design responsive, interactive, and visually appealing user interfaces using modern web technologies to ensure a seamless user experience.",
    features: ["HTML5 / CSS3", "JavaScript", "React.js"],
    price: "Custom Quote",
    accent: "text-blue-400",
    bg: "bg-blue-400/10",
    highlight: false,
  },
  {
    title: "Full Stack MERN Apps",
    icon: <Globe className="h-6 w-6" />,
    description:
      "Build complete, production-ready full-stack web applications from the ground up using MongoDB, Express.js, React, and Node.js.",
    features: ["MERN Stack", "Database Design", "User Authentication"],
    price: "Starting from $500",
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10",
    highlight: true,
  },
  {
    title: "Backend & APIs",
    icon: <Server className="h-6 w-6" />,
    description:
      "Develop robust, scalable backend architectures and RESTful APIs to power your web applications and manage data efficiently.",
    features: ["Node.js", "Express.js", "MongoDB APIs"],
    price: "Starting from $25/hr",
    accent: "text-purple-400",
    bg: "bg-purple-400/10",
    highlight: false,
  },
];

export function ServicesSection() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      (target as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="section-padding bg-[#020617] relative border-t border-white/5">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="section-heading uppercase tracking-tighter">
            My <span className="text-gradient-blue">Services</span>
          </h2>
          <p className="section-subtitle">
            Helping businesses and teams build responsive, high-performance web applications using modern MERN stack technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass p-8 rounded-[2.5rem] flex flex-col gap-6 group
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40
                ${service.highlight ? "border-primary/40 bg-primary/5 shadow-primary/10 shadow-xl" : "border-white/5 hover:border-white/10"}`}
            >
              {/* Most Popular Badge */}
              {service.highlight && (
                <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/30 z-10">
                  ★ Most Popular
                </span>
              )}
              {/* Icon */}
              <div className={`h-14 w-14 rounded-2xl ${service.bg} flex items-center justify-center ${service.accent} group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Title & Price */}
              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase tracking-widest text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className={`text-xs font-bold uppercase tracking-[0.15em] ${service.accent}`}>
                  {service.price}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className={`text-[10px] font-bold uppercase tracking-wider ${service.accent} bg-white/5 px-2.5 py-1 rounded-lg`}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className={`group/btn flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl
                  border border-white/10 bg-white/[0.04]
                  text-xs font-black uppercase tracking-[0.18em] text-foreground
                  hover:bg-primary hover:text-primary-foreground hover:border-primary
                  transition-all duration-300 active:scale-95`}
              >
                Get Started
                <ArrowRight
                  size={14}
                  className="group-hover/btn:translate-x-1 transition-transform duration-300"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}