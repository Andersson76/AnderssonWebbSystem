"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Vi hittar det som är sant",
    number: "A",
    body: "Vilka kunder vill ni ha mer av? Vad frågar de innan de köper? Vilka manuella moment borde webben eller systemen ta över?",
    output: "Karta över budskap, sidor och funktioner.",
  },
  {
    title: "Jag bygger nära verkligheten",
    number: "B",
    body: "Design, text och kod växer tillsammans. Ni får se riktiga skärmar tidigt, inte en lång presentation som sedan måste översättas.",
    output: "Fungerande vyer, innehåll och teknisk grund.",
  },
  {
    title: "Vi lämnar inget halvt",
    number: "C",
    body: "Lansering handlar om mer än att trycka publicera. Jag ser över prestanda, indexering, formulär, felvägar och hur ni förvaltar sidan.",
    output: "Lanserad sida med tydligt nästa steg.",
  },
];

const variants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.14,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function HowIWork() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <section ref={ref} className="bg-harbor py-18 text-white lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55">
              02 / Sättet
            </p>
            <h2 className="mt-3 max-w-lg text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-[0.94] tracking-normal">
              Kort väg mellan tanke och produktion.
            </h2>
          </div>
          <p className="max-w-xl text-[17px] leading-[1.7] text-white/72">
            Jag vill att processen ska kännas mer som ett arbetsmöte än en
            byråprocess. Färre lager, snabbare beslut, tydligare ansvar.
          </p>
        </div>

        <ol className="mt-12 grid border-t border-white/18 lg:mt-16 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.li
              key={step.number}
              custom={i}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="border-b border-white/18 py-7 lg:border-b-0 lg:border-r lg:pr-8 lg:last:border-r-0 lg:[&:not(:first-child)]:pl-8"
            >
              <span className="inline-grid size-10 place-items-center bg-signal font-mono text-sm text-white">
                {step.number}
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-normal">
                {step.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-white/70">
                {step.body}
              </p>
              <p className="mt-6 border-l-2 border-white/24 pl-4 font-mono text-[11px] uppercase tracking-[0.13em] text-white/72">
                {step.output}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
