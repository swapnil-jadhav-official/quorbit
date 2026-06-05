import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "3×", label: "Average revenue lift" },
  { number: "140%", label: "Organic traffic growth" },
  { number: "31%", label: "Paid CAC reduction" },
  { number: "$94K", label: "Monthly revenue scaled" },
];

const services = [
  {
    num: "01",
    title: "Performance Marketing",
    desc: "Full-funnel paid media across Google, Meta, LinkedIn, and YouTube. Every dollar traceable to a real outcome.",
    href: "/services/performance-marketing",
  },
  {
    num: "02",
    title: "E-Commerce Management",
    desc: "Platform management, catalog optimization, and performance advertising — built to scale monthly revenue.",
    href: "/services/ecommerce",
  },
  {
    num: "03",
    title: "All-in-One Digital Marketing",
    desc: "SEO, paid media, email, and social under one strategy. When channels share data, results compound.",
    href: "/services/all-in-one",
  },
  {
    num: "04",
    title: "Website & Automation",
    desc: "Websites, CRM, and automation systems built and integrated. Turn traffic into revenue — automatically.",
    href: "/services/website-automation",
  },
];

const results = [
  {
    quote: "CPL dropped from $340 to $180 in 60 days. Lead-to-close rate improved from 8% to 14%.",
    label: "B2B SaaS — Performance Marketing",
  },
  {
    quote: "Organic traffic up 140%. Email revenue tripled via automated flow rebuild. Paid CAC down 31%.",
    label: "B2C Lifestyle Brand — All-in-One",
  },
  {
    quote: "Monthly store revenue scaled from $28K to $94K in 5 months with rebuilt Shopping and Meta campaigns.",
    label: "Home Goods — E-Commerce",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
          display: flex;
          width: max-content;
        }
        .service-row {
          border-left: 2px solid transparent;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }
        .service-row:hover {
          border-left-color: #FFC919;
          background-color: rgba(255,201,25,0.03);
        }
        .service-row:hover .service-title {
          color: #FFC919;
        }
        .service-row:hover .service-arrow {
          color: #FFC919;
          transform: translateX(4px);
        }
        .service-arrow {
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .service-title {
          transition: color 0.2s ease;
        }
      `}</style>

      <div className="bg-midnight">

        {/* ── HERO ── */}
        <section
          className="relative min-h-screen flex flex-col bg-midnight overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,201,25,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-8 pt-8">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-ice-muted">
              QUORBIT™
            </span>
            <Link
              href="/contact"
              className="text-xs font-semibold uppercase tracking-widest text-ice-muted hover:text-ice transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Center content */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            {/* Thin yellow rule above headline */}
            <div className="w-16 h-px bg-yellow mb-8" />
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-black text-ice leading-[1.0] tracking-tight max-w-4xl">
              Marketing that<br />
              <span>orbits your growth.</span>
            </h1>
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between px-8 pb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-6 py-3 text-sm uppercase tracking-widest hover:bg-yellow-dark transition-colors"
            >
              Start a project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-ice-muted">
              <span>Scroll to explore</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── MARQUEE TICKER ── */}
        <div className="bg-yellow overflow-hidden py-3">
          <div className="marquee-track">
            {[0, 1].map((i) => (
              <span key={i} className="flex items-center gap-0 whitespace-nowrap pr-0">
                {[
                  "Performance Marketing",
                  "E-Commerce Management",
                  "SEO & Content",
                  "Email Marketing",
                  "Social Media",
                  "Marketing Automation",
                  "Website Development",
                  "Paid Media",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-midnight text-xs font-black uppercase tracking-widest px-6"
                  >
                    {item}
                    <span className="ml-6 opacity-40">·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ── STATS ── */}
        <section className="bg-midnight py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-midnight-muted border-x border-midnight-muted">
              {stats.map((s) => (
                <div key={s.label} className="px-10 py-8 flex flex-col gap-3">
                  <span className="text-7xl font-black text-yellow leading-none tracking-tight">
                    {s.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-ice-muted leading-snug">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES EDITORIAL LIST ── */}
        <section id="services" className="bg-midnight-light py-24 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-end justify-between mb-12 border-b border-midnight-muted pb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-3">
                  Services
                </span>
                <h2 className="text-4xl font-black text-ice">The full orbit.</h2>
              </div>
              <Link
                href="/contact"
                className="text-sm font-semibold text-ice-muted hover:text-yellow transition-colors flex items-center gap-2 shrink-0"
              >
                Discuss your scope
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* List */}
            <div className="divide-y divide-midnight-muted border-b border-midnight-muted">
              {services.map((svc) => (
                <Link key={svc.href} href={svc.href} className="block">
                  <div className="service-row flex items-center gap-6 py-7 px-4 -mx-4">
                    <span className="text-xs font-bold text-ice-muted w-8 shrink-0 tabular-nums">
                      {svc.num}
                    </span>
                    <span className="service-title text-xl font-black text-ice flex-1">
                      {svc.title}
                    </span>
                    <span className="text-sm text-ice-muted leading-relaxed max-w-xs hidden md:block">
                      {svc.desc}
                    </span>
                    <svg
                      className="service-arrow w-5 h-5 text-ice-muted shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOLD STATEMENT ── */}
        <section className="bg-midnight py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-4xl sm:text-5xl font-black text-ice leading-tight">
              Most marketing fails not because of bad products —
            </p>
            <p className="text-4xl sm:text-5xl font-black text-yellow leading-tight mt-2">
              because of bad coordination.
            </p>
          </div>
        </section>

        {/* ── SPLIT IMAGE + TEXT ── */}
        <section className="bg-midnight-light py-0 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
              {/* Image */}
              <div className="relative min-h-[480px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
                  alt="Data analytics dashboard"
                  fill
                  className="object-cover opacity-55"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-midnight-light/80" />
              </div>

              {/* Text */}
              <div
                className="py-20 px-12 lg:px-16 flex flex-col justify-center border-l-4 border-yellow"
              >
                <h2 className="text-3xl font-black text-ice leading-tight mb-8">
                  Every dollar. Every channel. Fully accountable.
                </h2>
                <ul className="space-y-5">
                  {[
                    "Real-time performance dashboards",
                    "Revenue-attributed reporting across all channels",
                    "Weekly optimization cycles with full transparency",
                    "Unified cross-channel view in one report",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4 text-sm text-ice-muted">
                      <span className="w-px h-4 bg-yellow shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENT RESULTS ── */}
        <section className="bg-midnight py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-3">
                Client Results
              </span>
              <h2 className="text-4xl font-black text-ice">Results we&apos;re accountable to.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-midnight-muted border border-midnight-muted">
              {results.map((r) => (
                <div
                  key={r.label}
                  className="bg-midnight p-10 flex flex-col justify-between gap-8"
                >
                  <p className="text-lg font-semibold text-ice leading-relaxed">
                    {r.quote}
                  </p>
                  <span className="text-xs font-bold text-yellow uppercase tracking-widest">
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="bg-midnight-light py-32 px-6">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow mb-6 block">
              GET STARTED
            </span>
            {/* Thin yellow line above headline */}
            <div className="w-12 h-px bg-yellow mb-8" />
            <h2 className="text-5xl sm:text-6xl font-black text-ice leading-tight mb-6">
              Ready to enter orbit?
            </h2>
            <p className="text-ice-muted text-lg leading-relaxed mb-10 max-w-md">
              Schedule a free 30-minute strategy call. We&apos;ll bring an honest read and a clear path forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-yellow text-midnight font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-yellow-dark transition-colors"
            >
              Schedule My Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-xs text-ice-muted mt-5 tracking-wide">
              No commitment required. No sales pitch. Just a real conversation.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
