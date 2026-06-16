"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import Section from "./Section";

type Project = {
  name: string;
  tag: string;
  description: string;
  bullets: string[];
  stack: string[];
  metric: string;
  link?: string;
};

const aiProjects: Project[] = [
  {
    name: "Self-Healing Browser Automation Agent",
    tag: "Agentic AI · Playwright MCP",
    description:
      "Carrier-agnostic agentic loop that completes an 8-page workers' compensation insurance quote end-to-end with zero carrier-specific code — an OpenAI reasoning model drives a Playwright MCP server controlling a real Chromium browser via function calling.",
    bullets: [
      "Engineered a self-healing core that auto-captures the live page snapshot on any tool failure and reinjects it, letting the model recover from complex Angular/PrimeNG widgets in real time without hard-coded selectors.",
      "Delivered a validated live submission ($539 instant quote, 0 errors, ~9-minute run); added recipe record-and-replay so routine runs cost cents — cutting projected cost at scale by ~10x.",
      "Designed a modular TypeScript architecture (agent loop, MCP client, per-carrier mapping, CLI) with token/cost tracking — adding a new carrier requires only a single new file.",
    ],
    stack: ["Playwright MCP", "OpenAI", "TypeScript", "Node.js", "Agentic AI"],
    metric: "$539 live quote · ~10x cheaper",
  },
  {
    name: "CMHT Voice Agent",
    tag: "LLM Voice Assistant · RAG",
    description:
      "Real-time LLM voice assistant for UNT's College of Merchandising, Hospitality and Tourism — helps students and faculty locate rooms and provides front-desk help.",
    bullets: [
      "Built with Gemini + LangChain, modular tool-calling, and session memory for context-aware multi-turn workflows.",
      "Optimized API latency and token usage via prompt caching, batched requests, and efficient context window management.",
    ],
    stack: ["Gemini APIs", "LangChain", "Python", "RAG"],
    metric: "speech-to-speech",
  },
  {
    name: "VoiceFit — AI Voice Assistant",
    tag: "Dallas AI 2025 · Top 14",
    description:
      "Hands-free AI fitness companion using Whisper STT, React, n8n, and OpenAI. Recognized as Top 14 of 32 teams at Dallas AI 2025.",
    bullets: [
      "Built a voice-enabled AI assistant with Whisper STT and a responsive React front-end.",
      "Designed automated task workflows in n8n reducing manual interaction steps by 60%+.",
    ],
    stack: ["Whisper STT", "React", "n8n", "OpenAI", "Supabase"],
    metric: "live demo",
    link: "https://voicefit.vercel.app",
  },
];

const dataProjects: Project[] = [
  {
    name: "Healthcare Data Lifecycle",
    tag: "Cloud-Native Pipeline · GCP",
    description:
      "End-to-end GCP data pipeline processing 1,048,575 CDC BRFSS healthcare survey records (2020–2024) into real-time informatics insights.",
    bullets: [
      "Engineered scalable ETL, batch, and streaming workflows with Cloud Storage, BigQuery, and Spark + Hive on Dataproc.",
      "Reduced health-alert delivery latency from minutes to under 5s via Pub/Sub streaming into BigQuery.",
      "Delivered Power BI dashboards across 27 BRFSS variables for near-real-time public health monitoring.",
    ],
    stack: ["BigQuery", "PySpark", "Hive", "Dataproc", "Pub/Sub", "Power BI"],
    metric: "1.04M records",
  },
  {
    name: "NYC Taxi Trips Pipeline",
    tag: "Batch Data Engineering",
    description:
      "End-to-end batch pipeline ingesting 10M+ NYC Yellow Taxi trips into BigQuery with bronze/silver/gold medallion layering and dbt-modeled analytics.",
    bullets: [
      "Orchestrated ingestion, transforms, and Great Expectations data quality checks as Apache Airflow DAGs with retries.",
      "Published metrics in a Looker Studio dashboard for at-a-glance KPI monitoring.",
    ],
    stack: ["BigQuery", "Apache Airflow", "dbt", "Great Expectations", "Python"],
    metric: "10M+ trips",
  },
];

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 / projects" title="Selected work">
      <div className="space-y-14">
        <ProjectGroup label="AI Engineering" projects={aiProjects} />
        <ProjectGroup label="Data Engineering" projects={dataProjects} />
      </div>
    </Section>
  );
}

function ProjectGroup({
  label,
  projects,
}: {
  label: string;
  projects: Project[];
}) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <h3 className="font-mono text-sm text-gradient font-semibold">
          {label}
        </h3>
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-xs text-zinc-500">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors flex flex-col"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-cyan-300/90 mb-2">{p.tag}</p>
          <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-gradient transition-all">
            {p.name}
          </h3>
        </div>
        {p.link ? (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-cyan-300 transition-colors"
            aria-label={`Open ${p.name}`}
          >
            <ExternalLink size={18} />
          </a>
        ) : (
          <Sparkles size={18} className="text-violet-300/70" />
        )}
      </div>

      <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
        {p.description}
      </p>

      <ul className="mt-4 space-y-1.5 text-sm text-zinc-400">
        {p.bullets.map((b, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400/70" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-xs px-2 py-1 rounded-md bg-cyan-400/5 text-cyan-200/90 border border-cyan-400/10"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="font-mono text-xs text-zinc-500">{p.metric}</span>
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-cyan-300 hover:underline"
          >
            Open →
          </a>
        )}
      </div>
    </motion.article>
  );
}
