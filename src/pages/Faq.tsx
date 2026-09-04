import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Title } from "../components/chrome";
import { Reveal } from "../components/motion";
import { Icon } from "../components/icons";
import { contact, faqCategories, faqItems } from "../content/site";

export function Faq() {
  const [cat, setCat] = useState<(typeof faqCategories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqItems.filter((f) => {
      const inCat = cat === "All" || f.cat === cat;
      const inQuery =
        q.length === 0 ||
        f.q.toLowerCase().includes(q) ||
        f.a.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [cat, query]);

  return (
    <>
      <Title t="FAQ" />

      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
            {"// faq"}
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
            Answers, <span className="text-pine">up front.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
            The questions every new client asks — about money, timelines and
            paperwork — answered the way we'd answer them on a call.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-200 ${
                    cat === c
                      ? "border-pine bg-pine text-paper dark:text-[#0c1310]"
                      : "border-line text-soft hover:border-ink hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="relative block lg:w-80">
              <span className="sr-only">Search questions</span>
              <Icon
                name="search"
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-soft"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the FAQ…"
                className="w-full rounded-md border border-line bg-card py-3 pl-11 pr-4 text-[15px] outline-none transition-colors placeholder:text-soft/70 focus:border-pine"
              />
            </label>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-14 px-5 pb-8 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {filtered.length > 0 ? (
            <Reveal>
              <Accordion key={`${cat}-${query}`} items={filtered} />
            </Reveal>
          ) : (
            <div className="rounded-xl border border-dashed border-line bg-card p-10 text-center">
              <p className="font-display text-2xl font-bold tracking-tight">
                Nothing matches that.
              </p>
              <p className="mx-auto mt-3 max-w-sm text-soft">
                Try a different word, or just ask us directly — a human reads
                every message.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-pine"
              >
                <Icon name="mail" size={17} />
                {contact.email}
              </a>
            </div>
          )}
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-line bg-card p-7">
                <Icon name="send" size={22} className="text-gold" />
                <h2 className="mt-4 font-display text-2xl font-bold tracking-tight">
                  Still stuck?
                </h2>
                <p className="mt-3 leading-relaxed text-soft">
                  Send the question — even if it's just "I have an idea, now
                  what?". {contact.reply}
                </p>
                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center gap-2 font-semibold text-pine"
                >
                  <span className="link-draw">Ask us directly</span>
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-6 rounded-xl border border-line bg-tint p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-pine">
                  Popular routes
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { label: "Register a Pty Ltd", href: "/services/business-registration" },
                    { label: "Price a website", href: "/services/web-development" },
                    { label: "Get tender-ready", href: "/services/business-documentation" },
                    { label: "Ship an app", href: "/services/mobile-app-development" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link
                        to={l.href}
                        className="group flex items-center justify-between text-[15px] font-medium transition-colors hover:text-pine"
                      >
                        {l.label}
                        <Icon
                          name="arrowUpRight"
                          size={15}
                          className="text-soft transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-pine"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </aside>
      </section>
    </>
  );
}
