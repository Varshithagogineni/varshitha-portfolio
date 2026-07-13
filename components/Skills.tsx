"use client";

import { motion } from "framer-motion";
import Section from "./Section";

type Group = {
  label: string;
  items: string[];
  emphasis?: "primary" | "secondary";
};

const groups: Group[] = [
  {
    label: "Agentic AI & LLMs",
    emphasis: "primary",
    items: [
      "RAG",
      "Agentic AI",
      "Tool Calling",
      "LangChain",
      "Gemini APIs",
      "OpenAI APIs",
      "Model Context Protocol",
      "Tavily",
      "Structured Outputs (Pydantic)",
      "Prompt Caching",
      "Session Memory",
    ],
  },
  {
    label: "Voice & Real-Time AI",
    emphasis: "primary",
    items: [
      "Whisper STT",
      "Pipecat",
      "Twilio",
      "Real-time barge-in",
      "TTS / STT",
      "Streaming responses",
    ],
  },
  {
    label: "ML, NLP & Automation",
    emphasis: "primary",
    items: ["NLP", "CNNs", "Information Retrieval", "n8n", "Azure AI"],
  },
  {
    label: "Languages",
    emphasis: "primary",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "PySpark", "HiveQL"],
  },
  {
    label: "Data Engineering & Big Data",
    emphasis: "secondary",
    items: [
      "BigQuery",
      "Apache Spark",
      "Hive",
      "Dataproc",
      "Apache Airflow",
      "dbt",
      "Great Expectations",
      "Pub/Sub",
      "Cloud Storage",
      "ETL/ELT",
      "Power BI",
      "Looker Studio",
    ],
  },
  {
    label: "Cloud, Databases & Tooling",
    emphasis: "secondary",
    items: [
      "GCP",
      "Docker",
      "Git / GitHub",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "OAuth",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Pinecone Vector DB",
    ],
  },
];

export default function Skills() {
  const primary = groups.filter((g) => g.emphasis !== "secondary");
  const secondary = groups.filter((g) => g.emphasis === "secondary");

  return (
    <Section id="skills" eyebrow="04 / skills" title="Tools I build with">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
            AI Engineering
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent" />
        </div>

        <div className="space-y-7">
          {primary.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 mb-3">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 rounded-lg bg-cyan-400/[0.06] text-cyan-100 border border-cyan-400/20 hover:border-cyan-400/60 hover:text-white transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-14 mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Data Engineering Foundation
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
        </div>

        <div className="space-y-7 opacity-90">
          {secondary.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 mb-3">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.03] text-zinc-300 border border-white/10 hover:border-white/30 hover:text-zinc-100 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
