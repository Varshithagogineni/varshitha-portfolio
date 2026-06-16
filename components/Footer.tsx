import { Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p className="font-mono">
          © {year} Varshitha Gogineni · Built with Next.js + Tailwind
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:varshithagogineni007@gmail.com"
            aria-label="Email"
            className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
          >
            <Mail size={16} />
            <span className="text-xs">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/varshitha-gogineni/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-violet-300 transition-colors inline-flex items-center gap-1.5"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z" />
            </svg>
            <span className="text-xs">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Varshithagogineni"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            <span className="text-xs">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
