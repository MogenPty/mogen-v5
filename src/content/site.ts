export type Lane = "Build" | "Register";

export interface ServiceSection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface Service {
  slug: string;
  index: string;
  lane: Lane;
  title: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  timeline: string;
  pricingNote: string;
  sections: ServiceSection[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    index: "01",
    lane: "Build",
    title: "Web Development",
    tagline: "Websites that work as hard as you do.",
    summary:
      "Design, build and launch of marketing sites, online stores and custom web apps — engineered to load fast, rank well and turn visitors into enquiries.",
    deliverables: [
      "UX & UI design, done in-house",
      "Responsive build — phone-first, always",
      "CMS your team can actually edit",
      "SSL, hosting & domain setup",
      "Analytics & Search Console wired up",
      "3 months of post-launch support",
    ],
    timeline: "2–6 weeks, typical",
    pricingNote: "Fixed quote before we start. No hourly surprises.",
    sections: [
      {
        heading: "Built to be found",
        body: [
          "A beautiful site nobody finds is a brochure. Every Mogen build ships with semantic markup, tuned Core Web Vitals and local SEO foundations — schema, meta, sitemaps and a Google Business Profile that matches what you sell.",
          "We measure what matters: enquiries, calls and quote requests — not vanity traffic.",
        ],
      },
      {
        heading: "Built to convert",
        body: [
          "Clear calls to action on every screen, enquiry forms that respect people's time, and click-to-chat on WhatsApp where your customers already are.",
        ],
        list: [
          "Enquiry forms wired to your inbox & admin portal",
          "WhatsApp click-to-chat buttons",
          "Fast load times on South African mobile networks",
          "Accessible, WCAG-minded interfaces",
        ],
      },
      {
        heading: "Built to last",
        body: [
          "Modern stack, maintainable code and a handover that includes training. When you want changes in six months — or a new developer takes over — the codebase makes sense.",
        ],
      },
    ],
  },
  {
    slug: "mobile-app-development",
    index: "02",
    lane: "Build",
    title: "Mobile App Development",
    tagline: "Your business, in your customer's pocket.",
    summary:
      "Cross-platform iOS & Android apps — from clickable prototype to store approval, with push notifications, secure logins and updates handled.",
    deliverables: [
      "Clickable prototype before we build",
      "One codebase — iOS & Android",
      "App Store & Play Store submission",
      "Push notifications & in-app analytics",
      "Secure auth, payments & API integrations",
      "Ongoing maintenance & OS-update plans",
    ],
    timeline: "6–12 weeks, typical",
    pricingNote: "Scoped in phases, so you can stop or pivot after the prototype.",
    sections: [
      {
        heading: "Prototype first, spend later",
        body: [
          "Before a line of production code is written you'll hold a clickable prototype on your own phone. Test it with real customers, fix the flow, then build the thing people actually wanted.",
        ],
      },
      {
        heading: "Store-ready, not just app-ready",
        body: [
          "Both app stores reject a surprising number of first submissions. We handle screenshots, store listings, privacy manifests and the review back-and-forth — you get the approval email.",
        ],
        list: [
          "App Store & Google Play accounts set up under your name",
          "Store listings, screenshots & release notes",
          "Review resubmissions handled by us",
          "Staged rollouts so bugs hit 1% before 100%",
        ],
      },
      {
        heading: "Kept current",
        body: [
          "Operating systems move fast. Our maintenance plans cover OS updates, dependency upgrades and small feature work, so your app never quietly rots on the store.",
        ],
      },
    ],
  },
  {
    slug: "business-registration",
    index: "03",
    lane: "Register",
    title: "Business Registration",
    tagline: "From name reservation to tax number.",
    summary:
      "Full CIPC company registration: name reservation, Pty Ltd incorporation, SARS tax registration and your founding documents — typically done in 3–5 business days.",
    deliverables: [
      "CIPC name reservation (3 options checked)",
      "Pty Ltd registration & Memorandum of Incorporation",
      "Company registration certificate (CoR 14.3)",
      "SARS income tax & PAYE registration",
      "Share certificates & securities register",
      "B-BBEE sworn affidavit (EME)",
    ],
    timeline: "3–5 business days, typical",
    pricingNote: "Government fees itemised separately — you see exactly what CIPC charges.",
    sections: [
      {
        heading: "Why register",
        body: [
          "A registered Pty Ltd separates your personal assets from the business, unlocks a proper business bank account, and is the entry ticket for tenders, supplier databases and serious clients.",
          "Most banks and payment gateways won't even talk to you without a CIPC registration number.",
        ],
      },
      {
        heading: "What you'll need",
        body: ["Keep it simple — we only ask for what CIPC actually requires:"],
        list: [
          "Certified ID copies of all directors",
          "Three preferred company names, in order",
          "A physical South African address for the company",
          "Shareholding split, if there's more than one director",
        ],
      },
      {
        heading: "After registration",
        body: [
          "We walk you through what comes next: opening the business bank account, registering on the Central Supplier Database if you'll tender, and which SARS obligations apply from day one — so nothing sneaks up on you at year end.",
        ],
      },
    ],
  },
  {
    slug: "business-documentation",
    index: "04",
    lane: "Register",
    title: "Business Documentation",
    tagline: "The paperwork that unlocks tenders.",
    summary:
      "Compliance documents that get you onto supplier databases and into tender boxes: tax clearance, CSD registration, B-BBEE, COIDA and letters of good standing.",
    deliverables: [
      "SARS tax compliance status (TCS) PIN",
      "Central Supplier Database (CSD) registration",
      "B-BBEE certificate or sworn affidavit",
      "Letter of Good Standing (COIDA)",
      "Company profile & capability statement",
      "Director resolution & ID packs for bids",
    ],
    timeline: "1–3 business days per document",
    pricingNote: "Priced per document, or bundled for a full tender pack.",
    sections: [
      {
        heading: "Tender-ready, fast",
        body: [
          "Tender deadlines don't wait for paperwork. Tell us which bid you're chasing and we'll tell you exactly which documents it needs — then get them issued before the box closes.",
        ],
      },
      {
        heading: "Always current",
        body: [
          "Tax clearance PINs and good-standing letters expire. We keep a register of your document expiry dates and remind you before anything lapses, so you're never scrambling the week a tender closes.",
        ],
        list: [
          "Expiry-date register for every document we issue",
          "Reminders before tax PINs and letters lapse",
          "Updated packs re-issued on demand",
          "One email gets you a full, current tender pack",
        ],
      },
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const tickerItems = [
  "Web development",
  "Mobile apps",
  "CIPC registration",
  "Tax clearance",
  "B-BBEE",
  "CSD registration",
  "E-commerce",
  "App Store deploys",
  "SSL & hosting",
  "Company profiles",
];

export const stats: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}[] = [
  { value: 2, prefix: "0", suffix: "", label: "lanes — build & register — under one roof" },
  { value: 48, suffix: " hrs", label: "to a fixed, itemised quote" },
  { value: 5, prefix: "3–", suffix: " days", label: "typical Pty Ltd registration turnaround" },
  { value: 100, suffix: "%", label: "in-house — no outsourcing your project" },
];

export const processSteps = [
  {
    index: "01",
    title: "Discover",
    body: "A free 30-minute consult — call or coffee. We listen first: what you sell, who buys it, and what's blocking you. No pitch deck.",
  },
  {
    index: "02",
    title: "Scope & quote",
    body: "Within 48 hours you get a fixed, itemised quote in plain language. Government fees are listed separately so you see exactly where every rand goes.",
  },
  {
    index: "03",
    title: "Build or file",
    body: "Builds run in weekly check-ins with something to look at each Friday. Registrations get daily status updates until CIPC says approved.",
  },
  {
    index: "04",
    title: "Launch & support",
    body: "Go live with training, handover documents and real support afterwards. We answer the phone after launch — that's the whole point.",
  },
];

export const values = [
  {
    index: "01",
    title: "Plain language",
    body: "CIPC jargon and dev jargon both stay out of your inbox. If you can't explain our quote to your spouse, we haven't done our job.",
  },
  {
    index: "02",
    title: "Fixed quotes",
    body: "We quote a number and stand behind it. Scope creep is our problem to manage, not a surprise invoice for you.",
  },
  {
    index: "03",
    title: "Show, don't tell",
    body: "Prototypes on your phone, staging links in your browser, CIPC confirmation numbers in your inbox. Progress you can verify.",
  },
  {
    index: "04",
    title: "Aftercare included",
    body: "Launch is the middle of the relationship, not the end. Support windows, expiry reminders and honest maintenance plans.",
  },
];

export interface FaqItem {
  q: string;
  a: string;
  cat: "Getting started" | "Development" | "Registration" | "Pricing & payments";
  services?: string[];
}

export const faqItems: FaqItem[] = [
  {
    q: "How does a project with Mogen actually start?",
    a: "With a free 30-minute consult — a call or a coffee, your choice. We ask what you sell, who buys it and what's in the way. Within 48 hours you get a fixed, itemised quote. You only commit when the quote makes sense to you.",
    cat: "Getting started",
  },
  {
    q: "Do you work with businesses outside Gauteng?",
    a: "Yes. Most of our registration work is fully remote — documents, IDs and signatures all travel electronically. For builds we run weekly video check-ins with a staging link, so you can watch progress from anywhere in South Africa.",
    cat: "Getting started",
  },
  {
    q: "How long does a website take?",
    a: "A focused marketing site typically takes 2–4 weeks from signed quote to live. Online stores and custom web apps run 4–8 weeks depending on integrations. You'll see a staging link in week one, not a big reveal at the end.",
    cat: "Development",
    services: ["web-development"],
  },
  {
    q: "Can I update the website myself after launch?",
    a: "Yes. Every site ships with a CMS and a training session for your team — text, images, prices and pages. If you'd rather not touch it, we offer small monthly care plans that cover content updates.",
    cat: "Development",
    services: ["web-development"],
  },
  {
    q: "Do you handle hosting and domains?",
    a: "We set up your domain, DNS, SSL certificate and hosting as part of the build, registered in your name so you always own everything. We'll recommend a hosting plan that fits your traffic — and tell you when a cheap one is enough.",
    cat: "Development",
    services: ["web-development"],
  },
  {
    q: "Do I get the app on both iPhone and Android?",
    a: "Yes — we build cross-platform, so one codebase ships to the App Store and Google Play together. You pay for one build, not two, and both stores get updates on the same schedule.",
    cat: "Development",
    services: ["mobile-app-development"],
  },
  {
    q: "Who handles the app store submissions?",
    a: "We do — accounts, listings, screenshots, privacy details and the review process. The store accounts are opened under your name, so you own the app outright. If a store reviewer pushes back, we handle the resubmission.",
    cat: "Development",
    services: ["mobile-app-development"],
  },
  {
    q: "How long does Pty Ltd registration take?",
    a: "Name reservation usually comes back within 1–2 business days, and the full registration typically completes in 3–5 business days once we have your documents. SARS tax registration follows automatically with the CIPC process.",
    cat: "Registration",
    services: ["business-registration"],
  },
  {
    q: "What do I need to register a company?",
    a: "Certified ID copies of all directors, three preferred company names in order of preference, and a physical South African address for the company. That's the full list — we handle the rest of the paperwork.",
    cat: "Registration",
    services: ["business-registration"],
  },
  {
    q: "Do I need B-BBEE straight away?",
    a: "For a new company under R10 million annual turnover, a sworn EME affidavit is usually enough to start — it's quick and inexpensive. A full B-BBEE certificate only becomes necessary once you're tendering for bigger contracts. We'll tell you which one your situation needs, not the more expensive one.",
    cat: "Registration",
    services: ["business-registration", "business-documentation"],
  },
  {
    q: "What does a website cost?",
    a: "It scales with scope, which is exactly why we quote per project instead of publishing a rate card. Indicatively: focused marketing sites sit well below the price of a decent bakkie, and stores or custom apps are scoped in phases so you control the spend. The quote is fixed before we start.",
    cat: "Pricing & payments",
  },
  {
    q: "How do payments work?",
    a: "Builds are 50% upfront to book your slot and 50% on launch. Registration and documentation work is paid upfront together with the itemised government fees. You'll always see CIPC and SARS fees as separate line items — we don't mark them up.",
    cat: "Pricing & payments",
  },
];

export const faqCategories = [
  "All",
  "Getting started",
  "Development",
  "Registration",
  "Pricing & payments",
] as const;

export const contact = {
  email: "hello@mogen.co.za",
  phone: "+27 (0) 10 012 1440",
  phoneHref: "+27100121440",
  address: "Johannesburg, Gauteng, South Africa",
  coords: "26.1076° S, 28.0567° E",
  hours: "Mon–Fri · 08:00–17:00 SAST",
  reply: "We reply within one business day.",
};

export const images = {
  studio:
    "https://image.qwenlm.ai/generated-images/21eac350-1095-4d94-964b-a3f6de6b9802/_result.png",
  documents:
    "https://image.qwenlm.ai/generated-images/9c7b59d0-aff6-4d80-8ae5-ee7f1572115d/_result.png",
};

export const business = {
  name: "Mogen",
  descriptor: "Build + register, under one roof",
  legal: "Mogen (Pty) Ltd",
};
