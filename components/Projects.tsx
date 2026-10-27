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
  github?: string;
};

const aiProjects: Project[] = [
  {
    name: "Home Operator — Hands-Free Repair Voice Agent",
    tag: "Voice AI · MCP on AWS AgentCore",
    description:
      "Alexa+ style voice add-on built for Amazon's Build, Ship, Shape hackathon — a self-hosted MCP server (spec 2025-11-25) on Amazon Bedrock AgentCore Runtime that talks you through appliance repairs step by step, hands-free, with every instruction served verbatim from the manufacturer's own manual so the model can never invent a repair step.",
    bullets: [
      "Engineered code-enforced voice safety: a power-off safety gate that clears only on the user's own words, checked server-side — measured over 43 live voice conversations, the gate held 30/30 attempts to skip it, opened 10/10 when confirmed, and every repair line was spoken word-for-word in 40/40 completed runs.",
      "Built the real-time lane on Amazon Nova 2 Sonic (speech-to-speech) behind a custom relay that constrains tool calls, with 8 MCP tools (~2 ms each) secured by Cognito JWT auth on AgentCore — plus live recall checks against the US CPSC government API and DynamoDB-persisted household state.",
      "Designed an offline pipeline turning manual PDFs into structured, human-reviewed repair data (46 page-cited corrections across 5 appliances), and open-sourced cpsc-recall-check — an MIT-licensed Python library with 21 tests against real recall records.",
    ],
    stack: [
      "Amazon Nova 2 Sonic",
      "Bedrock AgentCore",
      "MCP",
      "Python",
      "Cognito",
      "DynamoDB",
    ],
    metric: "safety gate · 40/40 verbatim runs",
    link: "https://d6zzi2o2me078.cloudfront.net/?code=9bad96-b7c7a5",
    github: "https://github.com/Varshithagogineni/home-operator",
  },
  {
    name: "RoleReady — AI Job-Application Copilot",
    tag: "AI Copilot · LangChain + Tavily",
    description:
      "Full-stack AI copilot for international students — paste a job link and upload a resume to get a one-page prep sheet: live company intel with cited sources, visa-sponsorship signals (H-1B/OPT/STEM OPT) with evidence and confidence, real interview questions, networking contacts, a fit score, an AI-tailored resume, and “Ray”, a chatbot grounded in all of that research.",
    bullets: [
      "Cut LLM usage from ~10 to 2 calls per prep — running entirely within free tiers — via a semantic router that offloads factual queries to Tavily (zero LLM calls), a global semaphore with per-key rate limiting, 429/503-aware retries, and response caching.",
      "Architected a multi-provider AI pipeline: LangChain orchestration with structured Pydantic outputs from Gemini, plus Tavily running parallel, source-cited live web research so every fact in the app links to evidence.",
      "Shipped end-to-end to production with Google OAuth + Supabase Postgres for accounts and saved application history — React/Vite frontend on Vercel, FastAPI backend on Render, CI via GitHub auto-deploys.",
    ],
    stack: ["LangChain", "Gemini", "Tavily", "FastAPI", "React", "Supabase"],
    metric: "live · ~10 → 2 LLM calls per prep",
    link: "https://roleready-fawn.vercel.app",
    github: "https://github.com/Varshithagogineni/roleready",
  },
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
    metric: "live validated · 0 errors",
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
    metric: "hands-free voice AI",
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

const realtimeProjects: Project[] = [
  {
    name: "Rumble Reef — Real-Time Multiplayer Brawler",
    tag: "WebRTC · Three.js · Serverless Netcode",
    description:
      "Browser-based multiplayer brawler for up to 6 players with three Brawl Stars-style modes — friends join from any phone or laptop with a 4-letter room code, no login, no install. Runs with zero game servers, entirely on free tiers.",
    bullets: [
      "Architected serverless netcode: the host's browser runs the authoritative simulation at 30 ticks/s in a Web Worker while peers connect over WebRTC data channels (an unreliable lane for snapshots and inputs, a reliable lane for events), with Supabase Realtime used only for the handshake and a 15 Hz relay fallback.",
      "Implemented competitive-grade lag compensation — local prediction with reconciliation, remote players interpolated 80 ms in the past, shots fast-forwarded by measured latency, and host-side visibility culling so players hidden in bushes are never even sent to opponents.",
      "Built a code-only art pipeline: Blender Python scripts generate and export every model as glTF, rendered live in Three.js with soft shadows, animated water caustics and poison gas — with a 2D sprite fallback for devices without WebGL.",
    ],
    stack: ["WebRTC", "Three.js", "JavaScript", "Supabase", "Blender", "Vercel"],
    metric: "6 players · 30 tick/s · $0 infra",
    link: "https://rumblereef.vercel.app",
    github: "https://github.com/Varshithagogineni/bushwhack",
  },
];

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 / projects">
      <div className="space-y-14">
        <ProjectGroup label="AI Engineering" projects={aiProjects} />
        <ProjectGroup label="Data Engineering" projects={dataProjects} />
        <ProjectGroup label="Full-Stack & Real-Time" projects={realtimeProjects} />
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
        <div className="flex items-center gap-4">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-zinc-400 hover:text-cyan-300 hover:underline transition-colors"
            >
              Code →
            </a>
          )}
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
      </div>
    </motion.article>
  );
}
