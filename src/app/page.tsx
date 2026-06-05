import Link from "next/link";

const services = [
  {
    badge: "Paid Media",
    title: "Performance Marketing",
    body: "Full-funnel paid media management across Google, Meta, LinkedIn, and YouTube. Every dollar traceable to a business outcome.",
    href: "/services/performance-marketing",
    icon: "📈",
  },
  {
    badge: "E-Commerce",
    title: "E-Commerce Management & Ads",
    body: "End-to-end e-commerce growth — platform management, catalog optimization, and performance advertising built to scale revenue.",
    href: "/services/ecommerce",
    icon: "🛒",
  },
  {
    badge: "All-in-One",
    title: "All-in-One Digital Marketing",
    body: "SEO, paid media, email, and social under one coordinated strategy — so your channels amplify each other instead of competing.",
    href: "/services/all-in-one",
    icon: "⚡",
  },
  {
    badge: "Tech & Systems",
    title: "Website Development & Automation",
    body: "Websites, CRM, and marketing automation systems — designed, built, and integrated to turn traffic into revenue.",
    href: "/services/website-automation",
    icon: "⚙️",
  },
];

const stats = [
  { number: "3x", label: "Average revenue lift in 6 months" },
  { number: "140%", label: "Organic traffic growth" },
  { number: "$94K", label: "Monthly revenue scaled from $28K" },
  { number: "31%", label: "Paid CAC reduction" },
];

const pillars = [
  {
    title: "Senior-led accounts",
    body: "Strategists who have operated at the CMO level — not account managers who know a little about everything.",
  },
  {
    title: "Revenue-first reporting",
    body: "Every report ties back to revenue and pipeline. Not channel vanity metrics.",
  },
  {
    title: "Transparent and direct",
    body: "We push back when something won't work. Transparency isn't a bonus here — it's the baseline.",
  },
  {
    title: "AI-driven execution",
    body: "Automation and AI built into every workflow — so your campaigns move faster than the competition.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight pt-24 pb-32 px-6">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #FFC919 0%, transparent 70%)" }} />
        <div className="relative max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-yellow border border-yellow/30 rounded-full px-3 py-1 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow inline-block" />
              Business Simplified
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-ice"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              Marketing that{" "}
              <span className="text-yellow">orbits</span>{" "}
              your growth.
            </h1>
            <p className="text-lg sm:text-xl text-ice-muted leading-relaxed mb-10 max-w-xl">
              A futuristic marketing agency blending creativity, AI, automation, and strategic growth into one connected orbit. One partner. Every channel. One outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-yellow text-midnight font-bold px-6 py-3.5 rounded-lg hover:bg-yellow-dark transition-colors text-sm"
              >
                Schedule a Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-midnight-muted text-ice-muted font-medium px-6 py-3.5 rounded-lg hover:border-yellow/40 hover:text-ice transition-colors text-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-midnight-light border-y border-midnight-muted">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-yellow" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                {s.number}
              </p>
              <p className="text-sm text-ice-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-midnight">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-ice mb-4" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              What We Do
            </h2>
            <p className="text-ice-muted max-w-lg text-lg leading-relaxed">
              Four core services, built to work independently or as a unified growth orbit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group block bg-midnight-light border border-midnight-muted rounded-2xl p-8 hover:border-yellow/40 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-yellow">
                    {svc.badge}
                  </span>
                  <span className="text-xl">{svc.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-ice mb-3 group-hover:text-yellow transition-colors"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                  {svc.title}
                </h3>
                <p className="text-sm text-ice-muted leading-relaxed mb-5">{svc.body}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-yellow">
                  Learn more
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quorbit */}
      <section className="py-24 px-6 bg-midnight-light">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-yellow mb-4 block">Why Quorbit</span>
              <h2 className="text-3xl font-bold text-ice mb-6 leading-tight"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                One partner. Every channel. Full accountability.
              </h2>
              <p className="text-ice-muted leading-relaxed mb-6">
                Most businesses don&apos;t have a marketing problem — they have a coordination problem. Channels managed in silos, budgets duplicated, attribution a guessing game.
              </p>
              <p className="text-ice-muted leading-relaxed mb-8">
                Quorbit fixes this from the ground up. We manage your entire growth stack with one strategy, one voice, and one set of outcomes everyone is accountable to.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-5 py-3 rounded-lg hover:bg-yellow-dark transition-colors text-sm"
              >
                Talk to Us
              </Link>
            </div>
            <div className="space-y-4">
              {pillars.map((item) => (
                <div key={item.title} className="bg-midnight border border-midnight-muted rounded-xl p-5 hover:border-yellow/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-yellow flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="font-bold text-ice mb-1" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                        {item.title}
                      </p>
                      <p className="text-sm text-ice-muted leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ background: "radial-gradient(ellipse at center, #FFC919 0%, transparent 70%)" }} />
        <div className="relative max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow mb-4 block">Get Started</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ice mb-4 leading-tight"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            Ready to enter orbit?
          </h2>
          <p className="text-ice-muted text-lg mb-8 leading-relaxed">
            Schedule a free 30-minute strategy call. Come with your current setup and goals. We&apos;ll come with an honest read and a clear path forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-6 py-3.5 rounded-lg hover:bg-yellow-dark transition-colors text-sm"
          >
            Schedule My Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-sm text-ice-muted mt-4">No commitment required. No long-deck sales pitch.</p>
        </div>
      </section>
    </div>
  );
}
