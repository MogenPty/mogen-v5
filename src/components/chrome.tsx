import {
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme, type ThemeMode } from "../theme";
import { Icon, type IconName } from "./icons";
import { business, contact, navLinks, services, tickerItems } from "../content/site";

/* ————— shared button styles ————— */
const base =
  "inline-flex items-center gap-2 rounded-md font-semibold transition-all duration-300";
export const btnPrimary = `${base} bg-ink px-6 py-3 text-[15px] text-paper hover:bg-pine hover:gap-3.5 dark:text-[#0c1310] dark:hover:text-[#0c1310]`;
export const btnGhost = `${base} border border-line px-6 py-3 text-[15px] text-ink hover:border-ink hover:bg-card`;
export const btnGold = `${base} bg-gold px-6 py-3 text-[15px] text-[#201603] hover:bg-[#f5c04e] hover:gap-3.5`;

export function Title({ t }: { t?: string }) {
  useEffect(() => {
    document.title = t
      ? `${t} — ${business.name}`
      : `${business.name} — Web Development, Mobile Apps & Business Registration`;
  }, [t]);
  return null;
}

/* ————— ambient layered background ————— */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-blueprint absolute inset-0" />
      <div
        className="absolute -top-40 right-[-15vw] h-[70vw] w-[70vw] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--gold) 13%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute left-[-20vw] top-[35vh] h-[65vw] w-[65vw] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--pine) 12%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-25vw] right-[10vw] h-[55vw] w-[55vw] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--pine) 8%, transparent), transparent 70%)",
        }}
      />
    </div>
  );
}

/* ————— theme toggle ————— */
const modeIcon: Record<ThemeMode, IconName> = {
  light: "sun",
  dark: "moon",
  system: "auto",
};

export function ThemeToggle({ showLabel = false }: { showLabel?: boolean }) {
  const { mode, cycle } = useTheme();
  return (
    <button
      onClick={cycle}
      aria-label={`Color mode: ${mode}. Click to change.`}
      title={`Color mode: ${mode}`}
      className={`${base} border border-line px-3 py-2 text-ink hover:border-ink hover:bg-card`}
    >
      <motion.span
        key={mode}
        initial={{ rotate: -60, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="text-pine"
      >
        <Icon name={modeIcon[mode]} size={17} />
      </motion.span>
      {showLabel && (
        <span className="font-mono text-[11px] uppercase tracking-widest">
          {mode}
        </span>
      )}
    </button>
  );
}

export function ThemeSegments() {
  const { mode, setMode } = useTheme();
  const modes: ThemeMode[] = ["light", "dark", "system"];
  return (
    <div className="inline-flex rounded-md border border-line p-1">
      {modes.map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`flex items-center gap-1.5 rounded px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors ${
            mode === m ? "bg-ink text-paper dark:text-[#0c1310]" : "text-soft hover:text-ink"
          }`}
        >
          <Icon name={modeIcon[m]} size={13} />
          {m}
        </button>
      ))}
    </div>
  );
}

/* ————— header ————— */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-40">
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "border-b border-line bg-paper/85 backdrop-blur-md"
              : "border-b border-transparent"
          }`}
        >
          <div
            className={`mx-auto flex max-w-7xl items-center gap-6 px-5 transition-all duration-300 sm:px-8 ${
              scrolled ? "py-3" : "py-5"
            }`}
          >
            <Link to="/" className="group flex items-baseline gap-2.5">
              <span className="font-display text-[26px] font-extrabold leading-none tracking-tight">
                Mogen
                <span className="inline-block text-gold transition-transform duration-300 group-hover:-translate-y-0.5">
                  .
                </span>
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-soft xl:inline">
                build + register
              </span>
            </Link>

            <nav className="ml-auto hidden items-center gap-7 md:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`link-draw text-[15px] font-medium transition-colors ${
                    isActive(l.href) ? "is-active text-pine" : "text-ink hover:text-pine"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-3 md:ml-6">
              <ThemeToggle />
              <Link to="/contact" className={`${btnPrimary} hidden lg:inline-flex`}>
                Request a quote
                <Icon name="arrowUpRight" size={16} />
              </Link>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="rounded-md border border-line p-2 text-ink hover:border-ink md:hidden"
              >
                <Icon name="menu" size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-[26px] font-extrabold tracking-tight">
                Mogen<span className="text-gold">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-md border border-line p-2 text-ink hover:border-ink"
              >
                <Icon name="close" size={20} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-7">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <Link
                    to={l.href}
                    className={`font-display text-5xl font-bold tracking-tight ${
                      isActive(l.href) ? "text-pine" : "text-ink"
                    }`}
                  >
                    {l.label}
                    <span className="text-gold">.</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="space-y-5 px-7 pb-10">
              <ThemeSegments />
              <p className="font-mono text-[12px] text-soft">
                {contact.email}
                <br />
                {contact.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ————— footer ————— */
export function Footer() {
  return (
    <footer className="mt-28 bg-foot text-footink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl font-extrabold tracking-tight">
            Mogen<span className="text-gold">.</span>
          </p>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-footink/70">
            The South African studio that registers your business with CIPC and
            builds the website or app that brings it customers. One team, one
            quote, no runaround.
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-footink/50">
            Johannesburg · {contact.coords}
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            Explore
          </p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-[15px] text-footink/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            Services
          </p>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-[15px] text-footink/80 transition-colors hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-[15px] text-footink/80">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-gold"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phoneHref}`}
                className="transition-colors hover:text-gold"
              >
                {contact.phone}
              </a>
            </li>
            <li className="text-footink/60">{contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-footink/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-6 text-[13px] text-footink/60 sm:px-8">
          <p>
            © {new Date().getFullYear()} {business.legal}
          </p>
          <p className="flex items-center gap-2">
            <Icon name="spark" size={12} className="text-gold" />
            Made in Johannesburg
          </p>
          <p className="ml-auto flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
            <Icon name="shield" size={13} className="text-gold" />
            POPIA — your details are only used to reply
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ————— marquee ticker ————— */
export function Marquee({ speed = "34s" }: { speed?: string }) {
  return (
    <div
      className="marquee border-y border-line bg-card py-4"
      style={{ "--speed": speed } as CSSProperties}
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center"
          >
            {tickerItems.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center">
                <span className="whitespace-nowrap px-6 font-mono text-[13px] uppercase tracking-[0.22em] text-soft">
                  {item}
                </span>
                <Icon name="spark" size={13} className="shrink-0 text-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ————— section heading ————— */
export function SectionHead({
  kicker,
  title,
  sub,
  right,
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
  right?: ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
          {"// "}
          {kicker}
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
        {sub && <p className="mt-4 max-w-xl text-lg leading-relaxed text-soft">{sub}</p>}
      </div>
      {right}
    </div>
  );
}

/* ————— CTA band ————— */
export function CtaBand({
  title = "Ready when you are.",
  sub = "Tell us what you're building — or what you're trying to register. A fixed, itemised quote lands in your inbox within 48 hours.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-foot text-footink">
      <div className="bg-blueprint absolute inset-0 opacity-40" aria-hidden="true" />
      <Icon
        name="spark"
        size={340}
        className="animate-spin-slow absolute -right-24 -top-24 text-gold/15"
        strokeWidth={0.7}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-gold">
          {"// next step"}
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-footink/70">{sub}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/contact" className={btnGold}>
            Request a quote
            <Icon name="arrowUpRight" size={16} />
          </Link>
          <Link
            to="/services"
            className={`${base} border border-footink/30 px-6 py-3 text-[15px] text-footink hover:border-footink hover:bg-footink/10`}
          >
            Browse services
          </Link>
        </div>
        <p className="mt-10 font-mono text-[13px] text-footink/50">
          {contact.email} · {contact.phone}
        </p>
      </div>
    </section>
  );
}

/* ————— accordion ————— */
export interface AccordionEntry {
  q: string;
  a: string;
}

export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionEntry[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center gap-5 py-5 text-left"
            >
              <span className="w-7 shrink-0 font-mono text-[12px] text-soft/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`flex-1 font-display text-lg font-semibold tracking-tight transition-colors sm:text-xl ${
                  isOpen ? "text-pine" : "group-hover:text-pine"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`shrink-0 text-pine transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <Icon name="chevron" size={20} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pl-12 pr-8 leading-relaxed text-soft">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
