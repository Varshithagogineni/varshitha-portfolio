"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-[#0a0a0f]/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-gradient font-semibold">vg</span>
          <span className="text-zinc-400">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm text-zinc-300">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-white transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-accent transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download="Varshitha_Gogineni_Resume.pdf"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all"
        >
          <Download size={14} />
          Résumé
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-zinc-200"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur border-t border-white/5">
          <ul className="px-6 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-zinc-300 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download="Varshitha_Gogineni_Resume.pdf"
                onClick={() => setOpen(false)}
                className="block py-2 text-cyan-300"
              >
                Download résumé ↓
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
