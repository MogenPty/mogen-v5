import { Link } from "react-router-dom";
import { BuildLog } from "../components/terminal";
import {
  Accordion,
  CtaBand,
  Marquee,
  SectionHead,
  Title,
  btnGhost,
  btnPrimary,
} from "../components/chrome";
import { CountUp, Parallax, Reveal } from "../components/motion";
import { Icon } from "../components/icons";
import { faqItems, images, processSteps, services, stats } from "../content/site";

function scrollToProcess() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document
    .getElementById("process")
    ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}

export function Home() {
  const teaserFaqs = [faqItems[0], faqItems[7], faqItems[10]];

  return (
    <>
      <Title />

      {/* ————— hero: the build log ————— */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-12 lg:pt-20">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.22em] text-soft">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pine opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pine" />
                </span>
                Johannesburg · build + register studio
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-[clamp(2.9rem,7.2vw,5.3rem)] font-extrabold leading-[0.98] tracking-tight">
                Registered by{" "}
                <span className="relative inline-block">
                  Tuesday
                  <svg
                    viewBox="0 0 120 12"
                    className="absolute -bottom-1.5 left-0 w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 9c32-6 62-6 114-3"
                      stroke="var(--gold)"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
                .
                <br />
                <span className="text-pine">Online by Friday.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-soft">
                Mogen registers your company with CIPC, then designs and builds
                the website or app that brings it customers. One team, one
                fixed quote — from paperwork to production.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link to="/contact" className={btnPrimary}>
                  Request a quote
                  <Icon name="arrowUpRight" size={16} />
                </Link>
                <button onClick={scrollToProcess} className={btnGhost}>
                  How it works
                </button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <ul className="mt-10 flex flex-wrap gap-2.5">
                {["CIPC filings", "Next.js builds", "App Store deploys"].map(
                  (chip) => (
                    <li
                      key={chip}
                      className="flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-soft"
                    >
                      <Icon name="check" size={12} className="text-pine" />
                      {chip}
                    </li>
                  )
                )}
              </ul>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl border border-line"
              aria-hidden="true"
            />
            <Reveal delay={0.15} y={34}>
              <BuildLog />
            </Reveal>
            <div className="animate-floaty absolute -left-3 top-10 hidden items-center gap-2 rounded-md border border-line bg-card px-3.5 py-2 shadow-lg sm:flex">
              <Icon name="seal" size={16} className="text-pine" />
              <span className="font-mono text-[11px] uppercase tracking-wider">
                CIPC · approved
              </span>
            </div>
            <div className="animate-floaty-slow absolute -right-2 bottom-28 hidden items-center gap-2 rounded-md border border-line bg-card px-3.5 py-2 shadow-lg sm:flex">
              <Icon name="shield" size={16} className="text-pine" />
              <span className="font-mono text-[11px] uppercase tracking-wider">
                SSL · grade A
              </span>
            </div>
            <div className="animate-floaty absolute -top-5 right-12 hidden items-center gap-2 rounded-md border border-line bg-card px-3.5 py-2 shadow-lg md:flex">
              <Icon name="bolt" size={16} className="text-gold" />
              <span className="font-mono text-[11px] uppercase tracking-wider">
                Lighthouse · 98
              </span>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ————— stats ————— */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-l-2 border-line pl-6 transition-colors duration-300 hover:border-gold">
                <p className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
                  <CountUp
                    to={s.value}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix ?? ""}
                  />
                </p>
                <p className="mt-3 max-w-[220px] text-[15px] leading-snug text-soft">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— services index ————— */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionHead
          kicker="what we do"
          title={
            <>
              Two lanes. <span className="text-pine">One partner.</span>
            </>
          }
          sub="Most studios build. Most agents file. Mogen does both, so your launch doesn't stall between two suppliers."
          right={
            <Link to="/services" className={btnGhost}>
              All services
              <Icon name="arrowRight" size={16} />
            </Link>
          }
        />

        <div className="border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to={`/services/${s.slug}`}
                className="group grid items-center gap-x-6 gap-y-3 border-b border-line px-2 py-8 transition-colors duration-300 hover:bg-ink dark:hover:bg-tint md:grid-cols-12 md:px-4"
              >
                <span className="font-mono text-[13px] text-soft transition-colors group-hover:text-gold md:col-span-1">
                  {s.index}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-paper dark:group-hover:text-ink md:col-span-4 md:text-3xl">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-snug text-soft transition-colors group-hover:text-paper/75 dark:group-hover:text-soft md:col-span-4">
                  {s.summary}
                </p>
                <span className="w-fit rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-soft transition-colors group-hover:border-gold group-hover:text-gold md:col-span-2">
                  {s.lane} lane
                </span>
                <span className="flex h-11 w-11 items-center justify-center justify-self-start rounded-full border border-line transition-all duration-300 group-hover:translate-x-1 group-hover:border-gold group-hover:bg-gold group-hover:text-ink md:col-span-1 md:justify-self-end">
                  <Icon name="arrowUpRight" size={18} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— process: sticky two-column ————— */}
      <section id="process" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
                {"// how it works"}
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                From first call to launch day.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-soft">
                Four steps, no mystery. The same process whether you're
                registering a Pty Ltd or shipping an app to the stores.
              </p>
              <div className="mt-8 max-w-sm rounded-lg border border-line bg-card p-6">
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-soft">
                    Quote turnaround
                  </p>
                  <p className="font-display text-2xl font-bold text-pine">48 hrs</p>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
                  <Reveal delay={0.3}>
                    <div className="h-full w-4/5 rounded-full bg-gold" />
                  </Reveal>
                </div>
                <p className="mt-3 text-[13px] text-soft">
                  Fixed and itemised. Government fees shown as separate lines.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.06}>
                <div className="relative border-l border-line pb-12 pl-10 last:pb-0">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-[3px] border-pine bg-paper" />
                  <p className="font-mono text-[12px] tracking-[0.22em] text-gold">
                    {step.index}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-soft">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— build lane ————— */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <figure>
              <Parallax
                src={images.studio}
                alt="The Mogen studio team reviewing a website build together"
                className="rounded-xl border border-line"
              />
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-soft">
                Friday review · something to look at, every week
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
                {"// the build lane"}
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Pixels that pull their weight.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-soft">
                A Mogen build is judged on one thing: whether it brings you
                work. Fast on South African mobile networks, honest about what
                it costs to run, and easy for your own team to edit.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {[
                  "Design and code under one roof — no handoff drift",
                  "Staging link in week one, not a big reveal at the end",
                  "CMS training so you're never hostage to us",
                  "Three months of support included with every launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pine/12 text-pine">
                      <Icon name="check" size={12} />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/services/web-development" className={btnPrimary}>
                  Web development
                  <Icon name="arrowRight" size={16} />
                </Link>
                <Link to="/services/mobile-app-development" className={btnGhost}>
                  Mobile apps
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— register lane ————— */}
      <section className="border-y border-line bg-tint">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
                {"// the register lane"}
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Paperwork, handled.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-soft">
                CIPC registrations, SARS numbers, B-BBEE affidavits, tender
                packs — the documents that make you a real company in the eyes
                of banks, suppliers and the state. Filed correctly, tracked
                daily, delivered fast.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {[
                  "Pty Ltd registration in 3–5 business days, typically",
                  "SARS tax registration handled with the CIPC process",
                  "Expiry register — we remind you before documents lapse",
                  "Government fees itemised, never marked up",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pine/12 text-pine">
                      <Icon name="check" size={12} />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/services/business-registration" className={btnPrimary}>
                  Business registration
                  <Icon name="arrowRight" size={16} />
                </Link>
                <Link to="/services/business-documentation" className={btnGhost}>
                  Documentation
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={0.12}>
              <div className="relative mx-auto max-w-md">
                <div className="rounded-xl border border-line bg-card p-8 shadow-[0_24px_60px_-24px_rgba(15,68,51,0.35)]">
                  <div className="border-b border-dashed border-line pb-5">
                    <div className="flex items-center gap-3">
                      <Icon name="seal" size={26} className="text-gold" />
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-soft">
                          Sample · CoR 14.3
                        </p>
                        <p className="font-display text-lg font-bold tracking-tight">
                          Certificate of Registration
                        </p>
                      </div>
                    </div>
                  </div>
                  <dl className="space-y-4 py-6 font-mono text-[13px]">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-soft">
                        Company name
                      </dt>
                      <dd className="mt-1 font-bold text-ink">
                        Acme Trading (Pty) Ltd
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-soft">
                        Registration number
                      </dt>
                      <dd className="mt-1 font-bold text-ink">2026/184221/07</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-soft">
                        Status
                      </dt>
                      <dd className="mt-2">
                        <span className="animate-stamp inline-block rounded border-2 border-pine px-3 py-1 font-bold uppercase tracking-[0.24em] text-pine">
                          Approved
                        </span>
                      </dd>
                    </div>
                  </dl>
                  <div className="flex items-center justify-between border-t border-dashed border-line pt-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-soft">
                      Issued · 3 business days
                    </p>
                    <div
                      className="h-7 w-28 rounded-sm opacity-70"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, var(--ink) 0 2px, transparent 2px 4px, var(--ink) 4px 5px, transparent 5px 9px)",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="absolute -left-6 -top-6 -z-10 h-full w-full rounded-xl border border-line" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— FAQ teaser ————— */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
              {"// straight answers"}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Asked often, answered honestly.
            </h2>
            <p className="mt-5 leading-relaxed text-soft">
              Pricing, timelines, documents — the things people hesitate to
              ask about on a first call.
            </p>
            <Link to="/faq" className={`${btnGhost} mt-8`}>
              All FAQs
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <Accordion items={teaserFaqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
