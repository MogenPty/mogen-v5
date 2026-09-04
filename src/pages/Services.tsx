import { Link } from "react-router-dom";
import { CtaBand, Title, btnPrimary } from "../components/chrome";
import { Reveal } from "../components/motion";
import { Icon } from "../components/icons";
import { services } from "../content/site";

export function Services() {
  return (
    <>
      <Title t="Services" />

      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
          {"// services"}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
          What we <span className="text-pine">do.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
          Four offerings, two lanes. The <strong className="font-semibold text-ink">Build lane</strong> designs
          and ships the software; the <strong className="font-semibold text-ink">Register lane</strong> makes
          the company behind it real, compliant and tender-ready.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <span className="flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2">
            <Icon name="code" size={16} className="text-pine" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
              Build lane — software
            </span>
          </span>
          <span className="flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2">
            <Icon name="seal" size={16} className="text-gold" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
              Register lane — compliance
            </span>
          </span>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
        {services.map((s, i) => (
          <Reveal key={s.slug}>
            <article
              className={`grid gap-10 border-t border-line py-16 lg:grid-cols-12 ${
                i === services.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <p className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em] text-soft">
                  <span className="text-gold">{s.index}</span>
                  <span className="h-px w-8 bg-line" />
                  {s.lane} lane
                </p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-2 font-display text-xl italic text-pine">
                  {s.tagline}
                </p>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">
                  {s.summary}
                </p>
                <p className="mt-6 max-w-xl leading-relaxed text-soft">
                  {s.sections[0].body[0]}
                </p>
                <div className="mt-8">
                  <Link
                    to={`/services/${s.slug}`}
                    className="group inline-flex items-center gap-2 font-semibold text-pine"
                  >
                    <span className="link-draw">Full details</span>
                    <Icon
                      name="arrowRight"
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-line bg-card p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_-24px_rgba(15,68,51,0.4)]">
                  <div className="flex items-center justify-between border-b border-dashed border-line pb-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-soft">
                      What you get
                    </p>
                    <Icon
                      name={s.lane === "Build" ? "code" : "seal"}
                      size={18}
                      className={s.lane === "Build" ? "text-pine" : "text-gold"}
                    />
                  </div>
                  <ul className="space-y-3 py-5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-[15px]">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pine/12 text-pine">
                          <Icon name="check" size={12} />
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2 border-t border-dashed border-line pt-4 font-mono text-[12px] text-soft">
                    <p className="flex items-center gap-2.5">
                      <Icon name="clock" size={14} className="text-pine" />
                      {s.timeline}
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Icon name="bolt" size={14} className="text-pine" />
                      {s.pricingNote}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    state={{ service: s.slug }}
                    className={`${btnPrimary} mt-6 w-full justify-center`}
                  >
                    Request a quote
                    <Icon name="arrowUpRight" size={16} />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mt-4">
        <CtaBand
          title="Not sure which lane you need?"
          sub="Most clients need a bit of both. Tell us where you are — idea, paperwork, or already trading — and we'll map the shortest route to launch."
        />
      </section>
    </>
  );
}
