import { useState, type FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Title, btnGhost, btnPrimary } from "../components/chrome";
import { Reveal } from "../components/motion";
import { Icon, type IconName } from "../components/icons";
import { contact, services } from "../content/site";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

type Errors = Partial<Record<keyof FormState, string>>;

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Tell us your name.";
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = "That email doesn't look right.";
  if (f.phone.trim() && !/^[\d\s()+.-]{7,}$/.test(f.phone.trim()))
    e.phone = "Use digits, spaces and + only.";
  if (f.message.trim().length < 10) e.message = "Give us at least a sentence to work with.";
  if (!f.consent) e.consent = "We need your OK to reply — it's a POPIA thing.";
  return e;
}

const inputClass = (hasError: boolean) =>
  `w-full rounded-md border bg-paper px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-soft/60 ${
    hasError ? "border-[#c0533a]" : "border-line focus:border-pine"
  }`;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-[13px] font-medium text-[#c0533a]">
      <Icon name="close" size={12} />
      {msg}
    </p>
  );
}

export function Contact() {
  const location = useLocation();
  const preselected = (location.state as { service?: string } | null)?.service;

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: preselected ?? "",
    message: "",
    consent: false,
  });
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [reference, setReference] = useState("");

  const errors = validate(form);
  const shown = (k: keyof FormState) => (touched[k] ? errors[k] : undefined);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));
  const blur = (k: keyof FormState) => setTouched((t) => ({ ...t, [k]: true }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, service: true, message: true, consent: true });
    if (Object.keys(errors).length > 0) return;

    setStatus("sending");
    const ref = `MG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    window.setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem("mogen-enquiries") ?? "[]");
        stored.push({ ...form, ref, sourcePage: "contact", createdAt: new Date().toISOString() });
        localStorage.setItem("mogen-enquiries", JSON.stringify(stored));
      } catch {}
      setReference(ref);
      setStatus("done");
    }, 900);
  };

  const reset = () => {
    setForm({ name: "", email: "", phone: "", service: "", message: "", consent: false });
    setTouched({});
    setStatus("idle");
  };

  const infoRows: { icon: IconName; label: string; value: string; href?: string }[] = [
    { icon: "mail", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: "phone", label: "Phone", value: contact.phone, href: `tel:${contact.phoneHref}` },
    { icon: "pin", label: "Studio", value: contact.address },
    { icon: "clock", label: "Hours", value: contact.hours },
  ];

  return (
    <>
      <Title t="Contact" />

      <section className="mx-auto grid max-w-7xl gap-14 px-5 pt-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
              {"// contact"}
            </p>
            <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
              Tell us what you're <span className="text-pine">building.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-soft">
              An idea on a napkin, a company that needs papers, or a website
              that needs to earn its keep — start here. {contact.reply}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-5">
              {infoRows.map((row) => (
                <li key={row.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line bg-card text-pine">
                    <Icon name={row.icon} size={18} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-soft">
                      {row.label}
                    </p>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="font-semibold transition-colors hover:text-pine"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{row.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 rounded-xl border border-line bg-tint p-6">
              <p className="flex items-start gap-3 text-[15px] leading-relaxed text-soft">
                <Icon name="shield" size={20} className="mt-0.5 shrink-0 text-pine" />
                <span>
                  <strong className="font-semibold text-ink">POPIA note — </strong>
                  details you send are used only to respond to your enquiry.
                  No mailing lists, no spam, no sharing with third parties.
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <div className="rounded-xl border border-line bg-card p-7 shadow-[0_24px_60px_-30px_rgba(15,68,51,0.35)] sm:p-9">
              {status === "done" ? (
                <div className="py-10 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pine text-paper dark:text-[#0c1310]">
                    <Icon name="check" size={28} />
                  </span>
                  <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight">
                    Enquiry logged.
                  </h2>
                  <p className="mx-auto mt-4 max-w-sm leading-relaxed text-soft">
                    Thanks — it's in the queue. {contact.reply} Keep the
                    reference handy if you follow up:
                  </p>
                  <p className="mx-auto mt-5 w-fit rounded-md border border-dashed border-pine px-4 py-2 font-mono text-[14px] font-bold tracking-wider text-pine">
                    {reference}
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <button onClick={reset} className={btnPrimary}>
                      Send another
                    </button>
                    <Link to="/" className={btnGhost}>
                      Back to home
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-2xl font-bold tracking-tight">
                      Request a quote
                    </h2>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-soft">
                      48-hr reply
                    </p>
                  </div>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-soft">
                        Name *
                      </label>
                      <input
                        id="name"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        onBlur={() => blur("name")}
                        placeholder="Thandi Nkosi"
                        className={inputClass(!!shown("name"))}
                      />
                      <FieldError msg={shown("name")} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-soft">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        onBlur={() => blur("email")}
                        placeholder="you@business.co.za"
                        className={inputClass(!!shown("email"))}
                      />
                      <FieldError msg={shown("email")} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-soft">
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        onBlur={() => blur("phone")}
                        placeholder="+27 82 000 0000"
                        className={inputClass(!!shown("phone"))}
                      />
                      <FieldError msg={shown("phone")} />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-soft">
                        Service of interest
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          value={form.service}
                          onChange={(e) => set("service", e.target.value)}
                          className={`${inputClass(false)} appearance-none pr-10 ${form.service ? "" : "text-soft/70"}`}
                        >
                          <option value="">Not sure yet — help me choose</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                          <option value="both">Both lanes — register + build</option>
                        </select>
                        <Icon
                          name="chevron"
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-soft"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-soft">
                        What do you need? *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                        onBlur={() => blur("message")}
                        placeholder="e.g. I need to register a Pty Ltd and then get a website live for a landscaping business…"
                        className={`${inputClass(!!shown("message"))} resize-y`}
                      />
                      <FieldError msg={shown("message")} />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => {
                          set("consent", e.target.checked);
                          blur("consent");
                        }}
                        className="mt-1 h-4 w-4 accent-pine"
                      />
                      <span className="text-[14px] leading-relaxed text-soft">
                        I agree that Mogen may use these details to respond to
                        my enquiry, in line with POPIA. *
                      </span>
                    </label>
                    <FieldError msg={shown("consent")} />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`${btnPrimary} mt-8 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60`}
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper/40 border-t-paper dark:border-[#0c1310]/40 dark:border-t-[#0c1310]" />
                        Logging your enquiry…
                      </>
                    ) : (
                      <>
                        Send enquiry
                        <Icon name="send" size={16} />
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-center font-mono text-[11px] text-soft">
                    Prefer email? {contact.email}
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
