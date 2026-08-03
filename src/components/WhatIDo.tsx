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

function ServiceDiagram() {
  return (
    <div
      aria-hidden="true"
      className="grid min-h-[340px] grid-rows-[auto_1fr_auto] border border-ink/12 bg-ink p-5 text-white lg:min-h-[360px]"
      data-service-diagram
    >
      <div className="grid grid-cols-3 gap-3">
        {["Kund", "Innehåll", "System"].map((label, index) => (
          <div
            key={label}
            className="flex min-h-24 flex-col justify-between border border-white/14 p-3"
            data-diagram-node
          >
            <span className="font-mono text-[10px] text-white/60">
              0{index + 1}
            </span>
            <span className="text-[15px]">{label}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center py-5">
        <div className="relative h-px w-full bg-white/14">
          <span
            className="absolute inset-y-0 left-0 w-full bg-signal"
            data-diagram-flow
          />
        </div>
      </div>

      <div>
        <p className="font-display text-[clamp(2rem,4vw,4rem)] leading-[0.92] tracking-normal">
          En sida ska inte bara finnas.
          <br />
          Den ska göra arbete.
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-white/14 pt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
          <span>Från signal</span>
          <span>Till system</span>
        </div>
      </div>
    </div>
  );
}

export function WhatIDo() {
  return (
    <section
      id="vad-jag-gor"
      className="scroll-mt-8 bg-white py-18 lg:py-24"
      data-services
    >
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-7 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <div className="services-sticky">
          <div data-reveal>
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
          </div>
          <div className="mt-8 hidden lg:block">
            <ServiceDiagram />
          </div>
        </div>

        <div className="relative lg:pl-8">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 hidden w-px bg-ink/10 lg:block"
          >
            <span
              className="block h-full w-px bg-signal"
              data-service-progress
            />
          </div>

          <div className="grid gap-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-5 border-t border-ink/14 py-8 sm:grid-cols-[150px_1fr] lg:min-h-[48vh] lg:items-center"
                data-service-card
              >
                <div>
                  <span className="inline-grid size-9 place-items-center border border-ink/14 font-mono text-[11px] text-signal">
                    0{index + 1}
                  </span>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {service.eyebrow}
                  </p>
                </div>
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
              </article>
            ))}
          </div>

          <div
            className="mt-10 grid gap-3 border border-ink/12 bg-paper p-5 sm:grid-cols-3"
            data-reveal
          >
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
