"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Affärssida",
    eyebrow: "01 / Synligt",
    body: "En webbplats som förklarar vad ni gör utan att låta som alla andra. Struktur, copy, form och teknik byggs ihop från början.",
    details: ["Startsidans logik", "Tjänstesidor", "Publicering"],
  },
  {
    title: "Sökgrund",
    eyebrow: "02 / Hittbart",
    body: "Teknisk SEO, innehållsstruktur och landningssidor för de sökningar som faktiskt kan bli affär.",
    details: ["Sökintention", "Schema", "Prestanda"],
  },
  {
    title: "Systemkoppling",
    eyebrow: "03 / Bakom",
    body: "När webben ska prata med formulär, bokning, CRM, e-post, databaser eller interna flöden bygger jag kopplingen.",
    details: ["API", "Automation", "Datamodell"],
  },
];

const proof = [
  "Direktkontakt med den som bygger",
  "Design och kod i samma beslut",
  "Lansering med fortsatt förvaltning i tanken",
];

const variants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.13,
      duration: 0.62,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

function ServiceDiagram() {
  return (
    <div className="grid min-h-[420px] grid-rows-[1fr_auto] border border-ink/12 bg-ink p-5 text-white">
      <div className="grid grid-cols-3 gap-3">
        {["Kund", "Innehåll", "System"].map((label, i) => (
          <div
            key={label}
            className="flex flex-col justify-between border border-white/14 p-3"
          >
            <span className="font-mono text-[10px] text-white/45">
              0{i + 1}
            </span>
            <span className="text-[15px]">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.92] tracking-normal">
          En sida ska inte bara finnas.
          <br />
          Den ska göra arbete.
        </p>
        <div className="mt-6 h-2 w-full bg-white/12">
          <div className="h-full w-[72%] bg-signal" />
        </div>
      </div>
    </div>
  );
}

export function WhatIDo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <section id="vad-jag-gor" ref={ref} className="bg-white py-18 lg:py-24">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-7 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <div className="lg:sticky lg:top-8 lg:h-fit">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
            01 / Affärssidan
          </p>
          <h2 className="mt-3 max-w-md text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-[0.95] tracking-normal text-ink">
            Mindre broschyr. Mer maskinrum.
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-[1.7] text-muted">
            Sidan ska se egen ut, men också göra ett tydligt jobb: skapa
            förtroende, sortera rätt besökare och ta bort friktion i vardagen.
          </p>
          <div className="mt-8 hidden lg:block">
            <ServiceDiagram />
          </div>
        </div>

        <div>
          <div className="grid gap-4">
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                custom={i}
                variants={variants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid gap-5 border-t border-ink/14 py-7 sm:grid-cols-[150px_1fr]"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {service.eyebrow}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold tracking-normal text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[16px] leading-[1.7] text-ink/72">
                    {service.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.details.map((detail) => (
                      <span
                        key={detail}
                        className="border border-ink/12 bg-cream px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 grid gap-3 border border-ink/12 bg-paper p-5 sm:grid-cols-3">
            {proof.map((item) => (
              <p key={item} className="text-[14px] leading-relaxed text-ink">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
