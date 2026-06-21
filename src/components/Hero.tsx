"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const services = [
  {
    number: "01",
    title: "Webb",
    description: "Företagswebbar med tydlig identitet och solid teknisk grund.",
  },
  {
    number: "02",
    title: "SEO",
    description: "Struktur och innehåll som gör att rätt kunder hittar er.",
  },
  {
    number: "03",
    title: "System",
    description: "API:er, databaser och integrationer som fungerar i vardagen.",
  },
];

const lineVariants: Variants = {
  hidden: { opacity: 0, y: "105%" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.11,
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

function Tagline() {
  const text = "Bygger digitalt i Göteborg.";
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (count >= text.length) {
      const t = window.setTimeout(() => setDone(true), 500);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setCount((c) => c + 1), 42);
    return () => window.clearTimeout(t);
  }, [count, text.length]);

  return (
    <p className="mt-8 font-mono text-sm tracking-wide text-muted">
      {text.slice(0, count)}
      {!done && <span className="cursor-out text-signal">|</span>}
    </p>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col bg-white">
      <header className="mx-auto flex w-full max-w-[1280px] items-start justify-between gap-6 px-6 py-8 lg:px-10 lg:py-10">
        <div>
          <p className="text-[15px] font-medium tracking-tight text-ink">
            {SITE.company}
          </p>
          <p className="mt-1 font-mono text-[11px] tracking-wide text-muted">
            {SITE.location}
          </p>
        </div>
        <a
          href={`mailto:${SITE.email}`}
          className="text-right text-[13px] text-muted transition-colors hover:text-signal"
        >
          {SITE.email}
        </a>
      </header>

      <div className="mx-auto grid w-full max-w-[1280px] flex-1 gap-12 px-6 pb-12 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-16 lg:px-10 lg:pb-16">
        <div>
          <h1 className="text-[clamp(3.5rem,11vw,7rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-ink">
            {["Webb.", "Sök.", "System."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <Tagline />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-10 max-w-lg text-[17px] leading-[1.65] text-muted"
          >
            Jag bygger skräddarsydda webbplatser och tekniska lösningar för
            företag — med design och kod i samma hand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            <span className="h-[3px] w-8 bg-signal" aria-hidden="true" />
            <a
              href="#kontakt"
              className="text-[13px] font-medium text-ink transition-colors hover:text-signal"
            >
              Hör av dig
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="border-l-[4px] border-signal bg-surface/40 lg:mt-6"
          aria-label="Tjänster"
        >
          <p className="border-b border-ink/8 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Specifikation
          </p>
          <ul>
            {services.map((service) => (
              <li
                key={service.number}
                className="border-b border-ink/8 px-5 py-5 last:border-b-0"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-medium text-signal">
                    {service.number}
                  </span>
                  <span className="font-mono text-sm font-medium uppercase tracking-wide text-ink">
                    {service.title}
                  </span>
                </div>
                <p className="mt-2 pl-8 text-[13px] leading-relaxed text-muted">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>

      <footer className="mx-auto mt-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-3 border-t border-ink/10 px-6 py-5 lg:px-10">
        <p className="text-[12px] text-muted">
          {SITE.location} · {SITE.founder} · {SITE.since}
        </p>
        <a
          href="#vad-jag-gor"
          className="text-[12px] text-signal transition-opacity hover:opacity-70"
        >
          Vad jag gör ↓
        </a>
      </footer>
    </section>
  );
}
