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

export function HowIWork() {
  return (
    <section
      className="relative overflow-clip bg-harbor text-white"
      data-process
    >
      <div className="bg-harbor" data-process-stage>
        <div className="mx-auto flex max-w-[1320px] flex-col justify-center px-5 py-18 sm:px-7 lg:min-h-svh lg:px-10 lg:py-10">
          <div
            className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end"
            data-reveal
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/65">
                02 / Sättet
              </p>
              <h2 className="mt-3 max-w-lg text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-[0.94] tracking-normal">
                Kort väg mellan tanke och produktion.
              </h2>
            </div>
            <p className="max-w-xl text-[17px] leading-[1.7] text-white/76">
              Jag vill att processen ska kännas mer som ett arbetsmöte än en
              byråprocess. Färre lager, snabbare beslut, tydligare ansvar.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="mt-9 h-px w-full overflow-hidden bg-white/18"
          >
            <span
              className="block h-full w-full bg-signal"
              data-process-progress
            />
          </div>

          <ol className="mt-8 grid lg:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="relative min-h-[290px] border-b border-white/18 py-7 lg:border-b-0 lg:border-r lg:pr-8 lg:last:border-r-0 lg:[&:not(:first-child)]:pl-8"
                data-process-card
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-0 h-px bg-signal lg:right-8"
                  data-process-rule
                />
                <span className="inline-grid size-10 place-items-center bg-signal font-mono text-sm text-white">
                  {step.number}
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-normal">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-white/74">
                  {step.body}
                </p>
                <p className="mt-6 border-l-2 border-white/28 pl-4 font-mono text-[11px] uppercase tracking-[0.13em] text-white/76">
                  {step.output}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
