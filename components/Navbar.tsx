"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === "#home" || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      (target as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container-custom">
        <div className={`glass px-6 py-3 rounded-full flex items-center justify-between border-white/10 transition-all duration-300 ${scrolled ? "shadow-xl shadow-black/50 backdrop-blur-xl bg-white/[0.06]" : "shadow-2xl"}`}>
          {/* Logo - Left */}
          <a
            href="#"
            onClick={scrollToHero}
            className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-2 group shrink-0"
          >
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground transform group-hover:rotate-12 transition-transform">B</div>
            <span className="hidden sm:inline">Muhammad <span className="text-primary">Bilal.</span></span>
            <span className="sm:hidden text-primary">Bilal.</span>
          </a>

          {/* Desktop Nav - Right */}
          <div className="hidden md:flex items-center gap-8 px-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a
              href="/MuhammadBilalResume.pdf"
              download
              className="hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-full glass text-foreground text-xs font-bold hover:bg-white/10 transition-all border-white/20 active:scale-95"
            >
              <Download size={14} />
              Download CV
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex px-6 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:brightness-110 transition-all active:scale-95"
            >
              Let&apos;s Talk
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 py-4 md:hidden"
          >
            <div className="glass rounded-3xl p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full py-4 rounded-2xl bg-primary text-primary-foreground text-center font-bold"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Talk
              </a>
              <a
                href="/MuhammadBilalResume.pdf"
                download
                className="w-full py-4 rounded-2xl glass text-foreground text-center font-bold flex items-center justify-center gap-2 border-white/20 hover:bg-white/10 transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Download size={16} />
                Download CV
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
