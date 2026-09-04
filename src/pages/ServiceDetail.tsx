import { Link, Navigate, useParams } from "react-router-dom";
import { Accordion, Title, btnGhost, btnPrimary } from "../components/chrome";
import { Reveal } from "../components/motion";
import { Icon } from "../components/icons";
import { contact, faqItems, services } from "../content/site";

export function ServiceDetail() {
  const { slug } = useParams();
  const idx = services.findIndex((s) => s.slug === slug);
  if (idx === -1) return <Navigate to="/services" replace />;

  const service = services[idx];
  const prev = services[(idx + services.length - 1) % services.length];
  const next = services[(idx + 1) % services.length];
  const relatedFaqs = faqItems
    .filter((f) => f.services?.includes(service.slug))
    .slice(0, 3);

  return (
    <>
      <Title t={service.title} />

      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-8">
        <Reveal>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-soft transition-colors hover:text-pine"
          >
            <Icon
              name="arrowLeft"
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            All services
          </Link>
          <p className="mt-8 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em] text-soft">
            <span className="text-gold">{service.index}</span>
            <span className="h-px w-8 bg-line" />
            {service.lane} lane
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {service.title}
          </h1>
          <p className="mt-4 font-display text-2xl italic text-pine">
            {service.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
            {service.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" state={{ service: service.slug }} className={btnPrimary}>
              Request a quote
              <Icon name="arrowUpRight" size={16} />
            </Link>
            <Link to="/faq" className={btnGhost}>
              Read the FAQs
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-14 px-5 pb-8 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {service.sections.map((block, i) => (
            <Reveal key={block.heading} delay={i * 0.05}>
              <article
                className={`py-10 ${i > 0 ? "border-t border-line" : "border-t border-line lg:border-t-0"}`}
              >
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {block.heading}
                </h2>
                {block.body.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-4 max-w-2xl text-lg leading-relaxed text-soft">
                    {p}
                  </p>
                ))}
                {block.list && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {block.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-lg border border-line bg-card p-4 text-[15px]"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pine/12 text-pine">
                          <Icon name="check" size={12} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}

          {relatedFaqs.length > 0 && (
            <Reveal>
              <div className="mt-6 border-t border-line pt-10">
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Related questions
                </h2>
                <div className="mt-6">
                  <Accordion items={relatedFaqs} defaultOpen={null} />
                </div>
              </div>
            </Reveal>
          )}
        </div>

        <aside className="lg:col-span-5">
          <div className="space-y-6 lg:sticky lg:top-28">
            <Reveal>
              <div className="rounded-xl border border-line bg-card p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-soft">
                  At a glance
                </p>
                <dl className="mt-5 space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 text-pine">
                      <Icon name="clock" size={20} />
                    </span>
                    <div>
                      <dt className="font-semibold">Typical timeline</dt>
                      <dd className="mt-1 text-[15px] text-soft">{service.timeline}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 text-pine">
                      <Icon name="compass" size={20} />
                    </span>
                    <div>
                      <dt className="font-semibold">Which lane</dt>
                      <dd className="mt-1 text-[15px] text-soft">
                        {service.lane === "Build"
                          ? "Software — designed, built and supported in-house."
                          : "Compliance — filed with CIPC, SARS and the registers."}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 text-pine">
                      <Icon name="bolt" size={20} />
                    </span>
                    <div>
                      <dt className="font-semibold">How pricing works</dt>
                      <dd className="mt-1 text-[15px] text-soft">{service.pricingNote}</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-xl border-2 border-pine/30 bg-tint p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-pine">
                  Included
                </p>
                <ul className="mt-5 space-y-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-[15px]">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pine text-paper dark:text-[#0c1310]">
                        <Icon name="check" size={11} />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  state={{ service: service.slug }}
                  className={`${btnPrimary} mt-7 w-full justify-center`}
                >
                  Request a quote
                  <Icon name="arrowUpRight" size={16} />
                </Link>
                <p className="mt-4 text-center font-mono text-[11px] text-soft">
                  {contact.reply}
                </p>
              </div>
            </Reveal>
          </div>
        </aside>
      </section>

      {/* prev / next */}
      <nav className="mx-auto mt-10 max-w-7xl border-t border-line px-5 sm:px-8">
        <div className="grid sm:grid-cols-2">
          <Link
            to={`/services/${prev.slug}`}
            className="group border-b border-line px-2 py-8 transition-colors hover:bg-tint sm:border-b-0 sm:border-r sm:pr-8"
          >
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-soft">
              <Icon
                name="arrowLeft"
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Previous
            </p>
            <p className="mt-2 font-display text-2xl font-bold tracking-tight group-hover:text-pine">
              {prev.title}
            </p>
          </Link>
          <Link
            to={`/services/${next.slug}`}
            className="group px-2 py-8 text-right transition-colors hover:bg-tint sm:pl-8"
          >
            <p className="flex items-center justify-end gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-soft">
              Next
              <Icon
                name="arrowRight"
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </p>
            <p className="mt-2 font-display text-2xl font-bold tracking-tight group-hover:text-pine">
              {next.title}
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
}
