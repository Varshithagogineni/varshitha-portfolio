"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-fuchsia-500/10 blur-3xl animate-blob" />
        <div className="absolute top-10 right-10 w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-violet-500/20 to-cyan-400/10 blur-3xl animate-blob" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-cyan-300/90 mb-5"
        >
          {"// hi, I'm"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight"
        >
          <span className="text-gradient">Varshitha Gogineni</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-zinc-200"
        >
          AI Engineer{" "}
          <span className="text-zinc-500 font-normal text-2xl sm:text-3xl md:text-4xl">
            / Data Engineer
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed"
        >
          I build{" "}
          <span className="text-zinc-200 font-medium">
            agentic AI systems
          </span>
          ,{" "}
          <span className="text-zinc-200 font-medium">
            real-time voice agents
          </span>
          , and{" "}
          <span className="text-zinc-200 font-medium">
            LLM-powered tool-calling pipelines
          </span>{" "}
          — with a strong data-engineering foundation backing every model.
          Recognized at{" "}
          <span className="text-zinc-200 font-medium">Dallas AI 2025</span>{" "}
          (Top 14 of 32). Recently graduated from the{" "}
          <span className="text-cyan-300">University of North Texas</span> with
          an MS in Information Science (
          <span className="font-mono text-cyan-300">4.00 / 4.00 GPA</span>,
          2026).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-accent text-zinc-950 font-medium hover:opacity-90 transition-opacity"
          >
            View projects
            <ArrowDown size={16} />
          </a>
          <a
            href="/resume.pdf"
            download="Varshitha_Gogineni_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all"
          >
            <Download size={16} />
            Download résumé
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-violet-400/50 hover:text-violet-300 transition-all"
          >
            <Mail size={16} />
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex items-center gap-6 text-xs font-mono text-zinc-500"
        >
          <span>📍 Denton, TX</span>
          <span>·</span>
          <a
            href="mailto:varshithagogineni007@gmail.com"
            className="hover:text-cyan-300 transition-colors"
          >
            varshithagogineni007@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
