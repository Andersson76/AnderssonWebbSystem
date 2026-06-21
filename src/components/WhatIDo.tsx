"use client";

import { motion, useMotionValue, type PanInfo } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const panels = [
  {
    title: "Företagswebbar",
    tag: "Webb",
    tagColor: "bg-signal",
    description:
      "Skräddarsydda webbplatser med tydlig struktur, snabb laddning och ett utseende som speglar ert företag.",
    Preview: WebPreview,
    height: "h-[480px]",
  },
  {
    title: "SEO",
    tag: "Sök",
    tagColor: "bg-signal",
    description:
      "Teknisk grund, tydlig struktur och innehåll som gör att rätt kunder hittar er i Google — utan genvägar.",
    Preview: SeoPreview,
    height: "h-[440px]",
  },
  {
    title: "System & integrationer",
    tag: "System",
    tagColor: "bg-tech",
    description:
      "API:er, databaser och kopplingar mellan era system — byggt för att faktiskt fungera i vardagen.",
    Preview: SystemPreview,
    height: "h-[500px]",
  },
];

function WebPreview() {
  return (
    <div className="relative flex h-full flex-col bg-white p-7">
      <div className="h-[3px] w-full bg-signal" />
      <p
        className="pointer-events-none absolute -right-2 bottom-0 font-display text-[7rem] font-light leading-none tracking-tight text-ink/[0.04]"
        aria-hidden="true"
      >
        Form
      </p>
      <div className="relative mt-8 flex flex-1 flex-col justify-between">
        <div>
          <p className="font-display text-2xl font-light leading-tight tracking-tight text-ink lg:text-3xl">
            Layout som bär
            <br />
            identitet
          </p>
          <div className="mt-6 space-y-2">
            <div className="h-px w-full bg-ink/10" />
            <div className="h-px w-4/5 bg-ink/10" />
            <div className="h-px w-3/5 bg-signal/40" />
          </div>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          Design · Innehåll · Kod
        </p>
      </div>
    </div>
  );
}

function SeoPreview() {
  return (
    <div className="relative flex h-full flex-col bg-white p-7">
      <div className="h-[3px] w-full bg-signal" />
      <div className="relative mt-6 flex flex-1 flex-col justify-center">
        <p className="font-display text-[clamp(2.5rem,8vw,4rem)] font-light leading-[0.88] tracking-tight text-ink">
          Syn
          <br />
          lig
          <br />
          het
        </p>
        <div className="mt-8 max-w-[200px]">
          <div className="flex items-end gap-[3px]">
            {[35, 50, 42, 68, 58, 82, 95].map((h, i) => (
              <div
                key={i}
                className={`flex-1 ${i === 6 ? "bg-signal" : "bg-ink/10"}`}
                style={{ height: `${h * 0.55}px` }}
              />
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] text-muted">
            Organisk tillväxt ↑
          </p>
        </div>
      </div>
    </div>
  );
}

function SystemPreview() {
  return (
    <div className="relative flex h-full flex-col bg-ink p-7">
      <div className="h-[3px] w-full bg-tech" />
      <div className="relative mt-8 flex flex-1 flex-col justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
          Integration
        </p>
        <div className="space-y-3">
          {["Webb", "CRM", "API", "Databas"].map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-signal">
                0{i + 1}
              </span>
              <span className="border border-white/15 px-3 py-1.5 font-mono text-[11px] text-white/80">
                {label}
              </span>
              {i < 3 && (
                <span className="font-mono text-[10px] text-white/25">→</span>
              )}
            </div>
          ))}
        </div>
        <p className="font-display text-xl font-light text-white">
          Allt ska prata
          <br />
          med varandra.
        </p>
      </div>
    </div>
  );
}

export function WhatIDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      setDragLimit(Math.min(container.offsetWidth - track.scrollWidth, 0));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    x.set(Math.max(dragLimit, Math.min(0, x.get() + info.velocity.x * 0.12)));
  };

  return (
    <section id="vad-jag-gor" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto mb-12 max-w-[1280px] px-6 lg:mb-16 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
              01 — Arbetet
            </p>
            <h2 className="mt-2 text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-[-0.03em] text-ink">
              Vad jag gör
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            Tre områden — webb, sök och system. Jag tar hand om hela kedjan,
            från idé till något som fungerar i produktion.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="cursor-grab overflow-hidden active:cursor-grabbing"
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: dragLimit, right: 0 }}
          dragElastic={0.05}
          dragTransition={{ bounceStiffness: 400, bounceDamping: 35 }}
          onDragEnd={handleDragEnd}
          className="flex items-end gap-5 pl-6 lg:gap-6 lg:pl-10"
        >
          {panels.map((panel) => (
            <article
              key={panel.title}
              className={`w-[min(82vw,400px)] shrink-0 select-none ${panel.height}`}
            >
              <div className="flex h-full flex-col overflow-hidden border border-ink/8 bg-white shadow-[4px_4px_0_0_#e85d04]">
                <div className="flex items-center gap-2 border-b border-ink/8 px-4 py-2.5">
                  <span
                    className={`${panel.tagColor} px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white`}
                  >
                    {panel.tag}
                  </span>
                </div>
                <div className="flex-1">
                  <panel.Preview />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold tracking-tight text-ink">
                  {panel.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {panel.description}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
