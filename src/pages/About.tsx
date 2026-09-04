import { CtaBand, Title } from "../components/chrome";
import { Parallax, Reveal } from "../components/motion";
import { Icon } from "../components/icons";
import { images, values } from "../content/site";

export function About() {
  return (
    <>
      <Title t="About" />

      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
            {"// about mogen"}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
            Paperwork <span className="text-pine">to pixels.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
            We're the studio you call when "starting a business" and "getting
            online" are the same project — because they are.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
        <Reveal>
          <figure>
            <Parallax
              src={images.studio}
              alt="Mogen's team at work in the Johannesburg studio"
              className="aspect-[16/8] rounded-xl border border-line"
            />
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-soft">
              <span>The studio · Johannesburg</span>
              <span>{`${new Date().getFullYear()}`}</span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
                {"// why we exist"}
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                One studio, two crafts.
              </h2>
              <blockquote className="mt-8 border-l-2 border-gold pl-6">
                <p className="font-display text-2xl font-semibold italic leading-snug tracking-tight">
                  "Nobody wants two suppliers, two invoices and a launch date
                  that depends on whichever one replies last."
                </p>
                <footer className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-soft">
                  — the founding frustration
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-soft lg:col-span-7">
            <Reveal>
              <p>
                Mogen started after watching too many new businesses bounce
                between a registration agent and a web agency — each waiting
                on the other, each billing separately, and the launch date
                slipping a month at a time.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p>
                So we built the studio we kept wishing existed: one team that
                files the CIPC paperwork <em className="font-semibold not-italic text-ink">and</em> ships
                the website or app. The company exists on paper in days; the
                site that sells it follows in weeks. Same people, same
                WhatsApp thread, one fixed quote.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                We stay deliberately small and senior — the person who scopes
                your project is the person doing the work. No account managers
                relaying messages, no juniors learning on your budget, no
                outsourcing your codebase overseas.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-ink">
                If it needs a registration number or a URL, it's our kind of
                work.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
            {"// the way we work"}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Four promises, kept in writing.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.index} delay={i * 0.06} className="h-full">
              <div className="group h-full bg-paper p-8 transition-colors duration-300 hover:bg-card sm:p-10">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[13px] tracking-[0.22em] text-gold">
                    {v.index}
                  </p>
                  <Icon
                    name="spark"
                    size={16}
                    className="text-line transition-all duration-500 group-hover:rotate-90 group-hover:text-gold"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 leading-relaxed text-soft">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Let's make it official." />
    </>
  );
}
