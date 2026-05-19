"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Download, FileText, GraduationCap, MapPin, Trophy } from "lucide-react";

export default function About() {
  return (
    <Section id="about" eyebrow="01 / about" title="A bit about me">
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 text-zinc-300 leading-relaxed text-lg space-y-5"
        >
          <p>
            I&apos;m an{" "}
            <span className="text-zinc-100 font-medium">AI Engineer</span>{" "}
            focused on shipping{" "}
            <span className="text-zinc-100 font-medium">
              agentic AI, real-time voice agents, and LLM-powered backends
            </span>
            . I&apos;ve built tool-calling pipelines that handle 100+ live
            scenarios with strict JSON-schema validation, voice workflows that
            autonomously close out 70–80% of inbound calls, and RAG assistants
            that hold context across multi-turn sessions.
          </p>
          <p>
            My core stack is{" "}
            <span className="font-mono text-cyan-300">Python</span>,{" "}
            <span className="font-mono text-cyan-300">LangChain</span>,{" "}
            <span className="font-mono text-cyan-300">Gemini</span> /
            <span className="font-mono text-cyan-300"> OpenAI APIs</span>,{" "}
            <span className="font-mono text-cyan-300">Whisper STT</span>, and{" "}
            <span className="font-mono text-cyan-300">MCP</span> — wired up with{" "}
            <span className="font-mono text-cyan-300">Twilio</span> and{" "}
            <span className="font-mono text-cyan-300">n8n</span> for production
            workflows.
          </p>
          <p className="text-zinc-400 text-base">
            Backed by a strong data-engineering foundation —{" "}
            <span className="font-mono">BigQuery</span>,{" "}
            <span className="font-mono">PySpark</span>,{" "}
            <span className="font-mono">Airflow</span>,{" "}
            <span className="font-mono">dbt</span>,{" "}
            <span className="font-mono">Pub/Sub</span> on GCP — so the models I
            ship sit on top of pipelines that are observable and reliable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <InfoCard
            icon={<GraduationCap size={18} className="text-cyan-300" />}
            title="MS, Information Science"
            subtitle="University of North Texas · Class of 2026"
            meta="GPA 4.00 / 4.00"
          />
          <InfoCard
            icon={<Trophy size={18} className="text-violet-300" />}
            title="Dallas AI 2025"
            subtitle="Top 14 of 32 teams"
            meta="VoiceFit"
          />
          <InfoCard
            icon={<MapPin size={18} className="text-cyan-300" />}
            title="Denton, TX"
            subtitle="Open to AI / Data Engineering roles"
          />

          <a
            href="/resume.pdf"
            download="Varshitha_Gogineni_Resume.pdf"
            className="group relative rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 p-4 hover:border-cyan-400/60 transition-colors"
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              <FileText size={18} className="text-cyan-300" />
              <span>Download my résumé</span>
              <Download
                size={14}
                className="ml-auto text-zinc-400 group-hover:text-cyan-300 group-hover:translate-y-0.5 transition-all"
              />
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              PDF · AI &amp; Data Engineer · updated 2026
            </p>
          </a>
        </motion.div>
      </div>
    </Section>
  );
}

function InfoCard({
  icon,
  title,
  subtitle,
  meta,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  meta?: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-white/20 transition-colors">
      <div className="flex items-center gap-2 text-sm font-medium">
        {icon}
        <span>{title}</span>
      </div>
      <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>
      {meta && (
        <p className="mt-1 font-mono text-xs text-zinc-500">{meta}</p>
      )}
    </div>
  );
}
