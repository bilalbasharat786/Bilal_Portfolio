"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Award, BookOpen } from "lucide-react";

// Updated with your actual technical certifications
const certifications = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "MERN Stack Development",
    role: "Supertech Institute • 2025",
    description: "Comprehensive training in MongoDB, Express.js, React.js, and Node.js for developing robust full-stack applications.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Web Designing",
    role: "TEVTA Institute • 2025",
    description: "Specialized coursework focusing on modern web design principles, UI/UX fundamentals, and responsive layouts.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Advanced IT",
    role: "AGT Institute • 2023",
    description: "Extensive training in advanced information technology concepts, establishing a strong foundation for software development.",
  }
];

export function CompetitionsSection() {
  return (
    <section id="certifications" className="section-padding bg-background relative border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Learning & Growth</span>
          </div>
          <h2 className="section-heading uppercase tracking-tighter">
            Certifications &amp; <span className="text-gradient-blue">Training</span>
          </h2>
          <p className="section-subtitle">
            Continuous learning and skill development through recognized technical institutes.
          </p>
        </div>

        {/* Changed to 3 columns (md:grid-cols-3) since there are 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((item, index) => (
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
                <h3 className="text-base font-black text-foreground leading-tight uppercase tracking-tight">{item.title}</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">{item.role}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}