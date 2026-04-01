"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Film, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

// Updated with your actual MERN Stack & Web Development Projects
const achievements = [
  {
    icon: <Film className="h-6 w-6" />,
    title: "Movie Streaming Platform",
    status: "Full Stack Project",
    description: "Developed a dynamic movie streaming and live TV application featuring Hollywood and Bollywood categories.",
    accent: "🎬"
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "E-Commerce Store",
    status: "Full Stack Project",
    description: "Built a fully functional e-commerce platform with product management, shopping cart, and seamless user experience.",
    accent: "🛒"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Real-time Chat App",
    status: "Full Stack Project",
    description: "Created an interactive real-time chatting web application enabling fast and secure communication between users.",
    accent: "💬"
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Secure Auth System",
    status: "Backend Architecture",
    description: "Implemented a robust OTP-based email verification and registration system to ensure secure user authentication.",
    accent: "🔒"
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding bg-background relative border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Projects & Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Proven Track in <span className="text-gradient-blue">Web Development</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            A showcase of hands-on full-stack projects, focusing on responsive frontends and robust backend architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] flex flex-col items-center text-center space-y-6 hover:bg-white/[0.07] hover:border-primary/30 transition-all group shadow-xl"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground leading-tight">{item.title}</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">{item.status}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <div className="text-3xl pt-2">{item.accent}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}