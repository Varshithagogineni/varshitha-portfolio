"use client";

import { motion } from "framer-motion";
import { Award, Mic, Rocket } from "lucide-react";
import Section from "./Section";

const items = [
  {
    icon: <Award size={20} className="text-cyan-300" />,
    title: "Dallas AI 2025 — Top 14 of 32 teams",
    body: "Recognized for VoiceFit, an AI-powered hands-free fitness companion (OpenAI Whisper, n8n, Supabase). Live at voicefit.vercel.app.",
  },
  {
    icon: <Rocket size={20} className="text-violet-300" />,
    title: "Y Combinator · Gemini × Pipecat Hackathon",
    body: "Participated at YC during SF Tech Week 2025 — co-built an AI-powered Mock Interview Platform with Gemini Live and Pipecat, enabling real-time voice, screen-share, and AI code review.",
  },
  {
    icon: <Mic size={20} className="text-cyan-300" />,
    title: "CMHT Voice Assistant — UNT",
    body: "Built a speech-to-speech AI agent for UNT's College of Merchandising, Hospitality and Tourism that helps students and faculty locate rooms and provides front-desk assistance.",
  },
];

const certs = [
  "Anthropic — Introduction to Agent Skills",
  "Anthropic — Introduction to Model Context Protocol (MCP)",
  "Anthropic — Building with the Claude API",
  "Anthropic — Claude Code in Action",
];

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="05 / wins"
      title="Achievements & certifications"
    >
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              {it.icon}
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                Highlight
              </span>
            </div>
            <h3 className="font-semibold text-zinc-100">{it.title}</h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              {it.body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 mb-3">
          Certifications · Apr 2026
        </p>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-zinc-300">
          {certs.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-accent" />
              {c}
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
