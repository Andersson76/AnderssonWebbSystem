"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Förstå",
    body: "Jag börjar med att förstå vad ert företag faktiskt behöver — inte vad en mall rekommenderar. Vi går igenom mål, målgrupp och vad som ska hända efter lansering.",
  },
  {
    number: "02",
    title: "Bygga",
    body: "Design och kod i samma hand. Inget tappas mellan skiss och leverans. Jag bygger responsivt, snabbt och med kod som går att underhålla.",
  },
  {
    number: "03",
    title: "Leverera",
    body: "Något som fungerar i vardagen — inte bara ser bra ut vid lansering. Jag ser till att ni kan hantera innehåll, att SEO-grunden finns, och att systemen pratar med varandra.",
  },
];

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function HowIWork() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="mb-14 lg:mb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
            02 — Process
          </p>
          <h2 className="mt-2 text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-[-0.03em] text-ink">
            Så jobbar jag
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
            En rak process utan byråkrati. Ni pratar direkt med mig — från
            första mötet till färdig leverans.
          </p>
        </div>

        <ol className="grid gap-0 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, i) => (
            <motion.li
              key={step.number}
              custom={i}
              variants={stepVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="border-t-[3px] border-signal py-8 lg:border-t-[3px] lg:py-0 lg:pt-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-medium text-signal">
                  {step.number}
                </span>
                <h3 className="font-mono text-sm font-medium uppercase tracking-[0.12em] text-ink">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-[15px] leading-[1.65] text-muted">
                {step.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
