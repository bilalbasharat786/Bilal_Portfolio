"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, Loader2, Sparkles } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus({
        type: "success",
        message: "Message has been sent successfully!",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Let's build something <span className="text-gradient-blue">Great</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass p-8 rounded-[2.5rem] space-y-6 shadow-xl border-white/5">
              <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail size={18} />
                  </div>
                  <a
                    href="mailto:officialbilal707@gmail.com"
                    className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    officialbilal707@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Rawalpindi, Pakistan</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">Social Presence</p>
                <div className="flex gap-4">
                  <a href="https://github.com/bilalbasharat786" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-2xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"><Github size={20} /></a>
                  <a href="https://linkedin.com/in/bilal-basharat-5208a7388" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-2xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"><Linkedin size={20} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass p-8 md:p-10 rounded-[2.5rem] shadow-2xl border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                    <input
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-foreground placeholder:text-muted-foreground/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Your Email"
                      className="w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-foreground placeholder:text-muted-foreground/30"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-foreground placeholder:text-muted-foreground/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                {formStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center text-sm font-bold ${
                      formStatus.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}