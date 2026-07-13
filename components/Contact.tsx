"use client";

import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import Section from "./Section";

type Status = "idle" | "submitting" | "success" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    botcheck: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMsg(
        "Contact form is not configured. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local."
      );
      return;
    }

    if (!form.first_name.trim() || !form.last_name.trim() || !form.email.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in first name, last name, and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus("error");
      setErrorMsg("That email address doesn't look right.");
      return;
    }

    if (form.botcheck) {
      setStatus("success");
      return;
    }

    try {
      setStatus("submitting");

      const payload = {
        access_key: ACCESS_KEY,
        subject: `Portfolio contact — ${form.first_name} ${form.last_name}`,
        from_name: `${form.first_name} ${form.last_name}`,
        replyto: form.email,
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        message: form.message || "(No message — visitor submitted name + email only.)",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.success === false) {
        throw new Error(
          data?.message || "Something went wrong sending your message."
        );
      }

      setStatus("success");
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
        botcheck: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  }

  return (
    <Section id="contact" eyebrow="06 / contact" title="Let's talk">
      <div className="grid lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-5"
        >
          <p className="text-zinc-300 leading-relaxed">
            Looking to collaborate on agentic AI, voice agents, or cloud data
            pipelines? Drop your name and email and I&apos;ll get back to you.
          </p>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:varshithagogineni007@gmail.com"
              className="flex items-center gap-3 text-zinc-300 hover:text-cyan-300 transition-colors"
            >
              <Mail size={16} className="text-cyan-300" />
              varshithagogineni007@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/varshitha-gogineni/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-zinc-300 hover:text-violet-300 transition-colors"
            >
              <span className="font-mono text-violet-300">in</span>
              linkedin.com/in/varshitha-gogineni
            </a>
          </div>
          <p className="font-mono text-xs text-zinc-500">
            Based in Dallas, TX · open to remote / hybrid.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 space-y-4"
        >
          <input
            type="text"
            name="botcheck"
            value={form.botcheck}
            onChange={update("botcheck")}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="First name"
              required
              value={form.first_name}
              onChange={update("first_name")}
              placeholder="Ada"
            />
            <Field
              label="Last name"
              required
              value={form.last_name}
              onChange={update("last_name")}
              placeholder="Lovelace"
            />
          </div>

          <Field
            label="Email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
          />

          <label className="block">
            <span className="text-sm text-zinc-300">Message (optional)</span>
            <textarea
              value={form.message}
              onChange={update("message")}
              rows={4}
              placeholder="What are you building?"
              className="mt-1.5 w-full rounded-lg bg-white/[0.03] border border-white/10 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors"
            />
          </label>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-accent text-zinc-950 font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send size={16} />
                Send message
              </>
            )}
          </button>

          {status === "success" && (
            <div className="flex items-start gap-2 text-sm text-emerald-300 bg-emerald-400/5 border border-emerald-400/20 rounded-lg px-3 py-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              <span>
                Thanks — your message is on its way to Varshitha&apos;s inbox.
              </span>
            </div>
          )}

          {status === "error" && errorMsg && (
            <div className="flex items-start gap-2 text-sm text-rose-300 bg-rose-400/5 border border-rose-400/20 rounded-lg px-3 py-2">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm text-zinc-300">
        {label}
        {required && <span className="text-cyan-300 ml-0.5">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg bg-white/[0.03] border border-white/10 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors"
      />
    </label>
  );
}
