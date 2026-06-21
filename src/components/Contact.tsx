import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="kontakt" className="border-t border-ink/10 bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
              03 — Kontakt
            </p>
            <h2 className="mt-2 text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-[-0.03em] text-ink">
              Hör av dig
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              Har ni ett projekt i tankarna, eller vill ni bara veta om jag kan
              hjälpa till? Skicka ett mail eller slå en signal — jag svarar
              personligen.
            </p>
          </div>

          <div className="border-l-[4px] border-signal bg-white p-8 lg:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {SITE.company}
            </p>
            <ul className="mt-6 space-y-5">
              <li>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  E-post
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 block text-[17px] text-ink transition-colors hover:text-signal"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  Telefon
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-1 block text-[17px] text-ink transition-colors hover:text-signal"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  Plats
                </p>
                <p className="mt-1 text-[17px] text-ink">{SITE.location}</p>
              </li>
            </ul>
          </div>
        </div>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-8">
          <p className="text-[12px] text-muted">
            © {new Date().getFullYear()} {SITE.company}
          </p>
          <p className="text-[12px] text-muted">
            {SITE.founder} · {SITE.location}
          </p>
        </footer>
      </div>
    </section>
  );
}
