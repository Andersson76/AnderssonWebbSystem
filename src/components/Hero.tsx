import { SITE } from "@/lib/site";

const notes = [
  { label: "Webb", value: "Tydlig affär" },
  { label: "Sök", value: "Rätt trafik" },
  { label: "System", value: "Mindre handarbete" },
];

function OperatingBoard() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[380px] border border-ink/12 bg-paper p-4 shadow-[10px_10px_0_0_#2b7a78] lg:min-h-[410px]"
      data-operating-board
    >
      <div
        className="flex items-center justify-between border-b border-ink/12 pb-3"
        data-board-layer
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          Arbetsbord / {SITE.location}
        </p>
        <div className="flex gap-1.5">
          <span className="size-2 bg-signal" />
          <span className="size-2 bg-harbor" />
          <span className="size-2 bg-ink" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_96px] gap-4">
        <div
          className="border border-ink/12 bg-white p-4"
          data-board-layer
        >
          <p className="font-display text-3xl leading-[0.95] tracking-normal text-ink">
            Det synliga
            <br />
            ska bära det
            <br />
            osynliga.
          </p>
          <div className="mt-7 grid gap-2">
            {notes.map((note, index) => (
              <div
                key={note.label}
                className="grid grid-cols-[54px_1fr] items-center border-t border-ink/10 pt-2"
              >
                <span className="font-mono text-[10px] uppercase tracking-wide text-signal">
                  0{index + 1}
                </span>
                <span className="text-[13px] text-ink">{note.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3" data-board-layer>
          <div className="bg-harbor p-3 text-white">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/65">
              Status
            </p>
            <p className="mt-8 font-mono text-xl">Live</p>
          </div>
          <div className="bg-clay p-3 text-white">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
              Fokus
            </p>
            <p className="mt-8 font-mono text-xl">Nytta</p>
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-6 left-6 right-6 border border-ink/12 bg-white p-4"
        data-board-layer
      >
        <div className="flex items-end gap-2">
          {[38, 62, 44, 78, 54, 88, 70, 96].map((height, index) => (
            <span
              key={height}
              className={
                index === 7 ? "w-full bg-signal" : "w-full bg-ink/12"
              }
              data-chart-bar
              style={{ height }}
            />
          ))}
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          Mer av rätt besökare, mindre av löst arbete
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream" data-hero>
      <header className="relative mx-auto flex w-full max-w-[1320px] items-start justify-between gap-5 px-5 py-6 sm:px-7 lg:px-10 lg:py-8">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink">
            {SITE.company}
          </p>
          <p className="mt-1 text-[13px] text-muted">
            Webbplatser, sökbarhet och verksamhetssystem
          </p>
        </div>
        <a
          href={`mailto:${SITE.email}`}
          className="hidden border-b border-ink/25 pb-1 text-right text-[13px] text-ink transition-colors hover:border-signal hover:text-signal sm:block"
        >
          {SITE.email}
        </a>
      </header>

      <div className="relative mx-auto grid min-h-[calc(100svh-92px)] w-full max-w-[1320px] gap-12 px-5 pb-24 pt-8 sm:px-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.7fr)] lg:items-center lg:px-10 lg:pb-28 lg:pt-2">
        <div data-hero-copy>
          <p
            className="mb-6 inline-flex border border-ink/15 bg-white px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
            data-hero-detail
          >
            En liten digital verkstad för företag som vill vara begripliga
          </p>
          <h1 className="max-w-5xl text-[clamp(2.9rem,6.8vw,5.8rem)] font-semibold leading-[0.9] tracking-normal text-ink">
            {["Webb med", "egenvikt.", "System med", "minne."].map(
              (line) => (
                <span key={line} className="block overflow-hidden">
                  <span className="block" data-hero-line>
                    {line}
                  </span>
                </span>
              ),
            )}
          </h1>

          <div
            className="mt-7 grid gap-5 lg:grid-cols-[1fr_220px]"
            data-hero-detail
          >
            <p className="max-w-xl text-[18px] leading-[1.65] text-ink/78">
              Jag bygger affärssidor, sökstruktur och systemkopplingar som
              känns handgjorda för verksamheten bakom. Inte ett tema med nytt
              typsnitt. Inte en AI-text med logga ovanpå.
            </p>
            <div className="border-l-[3px] border-signal pl-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Startpunkt
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">
                Vad ska kunder förstå, göra och komma tillbaka till?
              </p>
            </div>
          </div>

          <div
            className="mt-6 flex flex-wrap items-center gap-3"
            data-hero-detail
          >
            <a
              href="#kontakt"
              className="bg-ink px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-signal"
            >
              Starta samtal
            </a>
            <a
              href="#vad-jag-gor"
              className="border border-ink/20 bg-white px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-ink"
            >
              Se arbetet
            </a>
          </div>
        </div>

        <OperatingBoard />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted lg:flex"
        data-hero-detail
      >
        <span className="h-px w-10 bg-ink/30" />
        Scrolla för arbetsgången
        <span className="h-px w-10 bg-ink/30" />
      </div>
    </section>
  );
}
