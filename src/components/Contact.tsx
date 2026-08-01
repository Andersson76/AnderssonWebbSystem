import { SITE } from "@/lib/site";

const prompts = [
  "Vi behöver en sida som känns mer som oss.",
  "Vi får fel typ av förfrågningar.",
  "Vi gör för mycket manuellt efter kontakt.",
  "Vår webb och våra system pratar inte ihop.",
];

export function Contact() {
  return (
    <section id="kontakt" className="bg-cream py-18 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
              03 / Kontakt
            </p>
            <h2 className="mt-3 max-w-3xl text-[clamp(2.5rem,7vw,6.2rem)] font-semibold leading-[0.9] tracking-normal text-ink">
              Ta med ett verkligt problem.
            </h2>
            <p className="mt-7 max-w-2xl text-[18px] leading-[1.7] text-ink/74">
              Det räcker. Vi kan börja där och se om det ska bli webb, SEO,
              system eller en mindre smart koppling som gör vardagen lättare.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {prompts.map((prompt) => (
                <p
                  key={prompt}
                  className="border-t border-ink/16 pt-3 text-[15px] leading-relaxed text-ink"
                >
                  {prompt}
                </p>
              ))}
            </div>
          </div>

          <aside className="border border-ink/12 bg-white p-6 shadow-[8px_8px_0_0_#2b7a78] lg:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Skriv eller ring
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 block break-words text-2xl font-semibold leading-tight text-ink transition-colors hover:text-signal"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.phoneHref}
              className="mt-3 block text-xl text-ink/74 transition-colors hover:text-signal"
            >
              {SITE.phone}
            </a>

            <div className="mt-8 border-t border-ink/12 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Det du får tillbaka
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-ink/74">
                Ett rakt svar på om jag tror att jag kan hjälpa, och i så fall
                vilken minsta vettiga första insats är.
              </p>
            </div>
          </aside>
        </div>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink/12 pt-7">
          <p className="text-[12px] text-muted">
            © {new Date().getFullYear()} {SITE.company}
          </p>
          <p className="text-[12px] text-muted">
            {SITE.founder} / {SITE.location} / sedan {SITE.since}
          </p>
        </footer>
      </div>
    </section>
  );
}
