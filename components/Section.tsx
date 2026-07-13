"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title?: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="relative px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/90">
            {eyebrow}
          </p>
          {title && (
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              {title}
            </h2>
          )}
          <div className="mt-4 h-px w-24 bg-gradient-accent" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
