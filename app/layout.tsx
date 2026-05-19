import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Varshitha Gogineni — AI & Data Engineer",
  description:
    "AI & Data Engineer building agentic AI, voice agents, and cloud-native data pipelines. Recognized at Y Combinator's Gemini x Pipecat Hackathon and Dallas AI 2025.",
  keywords: [
    "Varshitha Gogineni",
    "AI Engineer",
    "Data Engineer",
    "Agentic AI",
    "Voice Agents",
    "GCP",
    "BigQuery",
    "RAG",
    "LangChain",
  ],
  authors: [{ name: "Varshitha Gogineni" }],
  openGraph: {
    title: "Varshitha Gogineni — AI & Data Engineer",
    description:
      "Building agentic AI, voice agents, and cloud-native data pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-zinc-100 font-sans selection:bg-cyan-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
