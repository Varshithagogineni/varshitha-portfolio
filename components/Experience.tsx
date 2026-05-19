"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const roles = [
  {
    company: "Cambo Box",
    title: "AI Engineer Intern",
    location: "United States, Remote",
    dates: "Aug 2025 — Dec 2025",
    bullets: [
      "Designed a production-ready agentic AI voice workflow for restaurants, autonomously handling 70–80% of inbound calls and automating outbound reservation reminders.",
      "Integrated AI voice agents with Twilio telephony supporting real-time barge-in and seamless escalation, improving call-handling efficiency by ~40%.",
      "Architected tool-calling pipelines for 100+ reservation scenarios with strict JSON schema validation, reducing invalid AI tool calls by ~90%.",
      "Built REST API orchestration and cron-driven outbound workflows for sub-second response and zero-touch daily reservation confirmations.",
    ],
    stack: ["Python", "Twilio", "Agentic AI", "Tool Calling", "REST APIs"],
  },
  {
    company: "University of North Texas — CMHT IT Services",
    title: "IT Services Team Lead & Web Developer",
    location: "Denton, TX",
    dates: "Dec 2024 — May 2026",
    bullets: [
      "Promoted from classroom technology assistant to Team Lead, managing student assistants across 180+ managed laptops for students and CMHT faculty.",
      "Develop API-driven web applications and internal data tooling for 5+ academic departments, cutting response time on key endpoints by ~30%.",
      "Built ETL utilities and n8n automations to auto-generate reports and route form submissions — eliminating ~10 hours of manual work per week.",
      "Maintained team SOPs and IT documentation; provided hardware/software troubleshooting across CMHT.",
    ],
    stack: ["JavaScript", "n8n", "ETL", "REST APIs", "SOPs"],
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 / experience" title="Where I've worked">
      <div className="relative">
        <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/40 via-violet-400/30 to-transparent" />

        <div className="space-y-10">
          {roles.map((r, i) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-10 sm:pl-14"
            >
              <span className="absolute left-2 sm:left-3 top-2 w-3 h-3 rounded-full bg-gradient-accent ring-4 ring-[#0a0a0f]" />

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {r.title}{" "}
                      <span className="text-cyan-300">@ {r.company}</span>
                    </h3>
                    <p className="text-sm text-zinc-500">{r.location}</p>
                  </div>
                  <p className="font-mono text-xs text-zinc-400">{r.dates}</p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {r.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {r.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs px-2 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
