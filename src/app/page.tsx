import Link from "next/link";
import Image from "next/image";

const services = [
  {
    badge: "Paid Media",
    title: "Performance Marketing",
    body: "Full-funnel paid media across Google, Meta, LinkedIn, and YouTube. Every dollar traceable to a real business outcome.",
    href: "/services/performance-marketing",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    badge: "E-Commerce",
    title: "E-Commerce Management & Ads",
    body: "Platform management, catalog optimization, and performance advertising — all connected and built to scale monthly revenue.",
    href: "/services/ecommerce",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    badge: "All-in-One",
    title: "All-in-One Digital Marketing",
    body: "SEO, paid media, email, and social under one strategy. When channels share data, results compound instead of cancel out.",
    href: "/services/all-in-one",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    badge: "Tech & Systems",
    title: "Website Development & Automation",
    body: "Websites, CRM, and automation systems built and integrated. Turn traffic into leads and leads into closed revenue — automatically.",
    href: "/services/website-automation",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const stats = [
  { number: "3×", label: "Average revenue lift", sub: "in 6 months" },
  { number: "140%", label: "Organic traffic growth", sub: "within 12 months" },
  { number: "31%", label: "Paid CAC reduction", sub: "first 60 days" },
  { number: "$94K", label: "Monthly revenue", sub: "scaled from $28K" },
];

const logos = ["Shopify", "HubSpot", "Google", "Meta", "LinkedIn", "Klaviyo"];

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
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-midnight">
        {/* top glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: "radial-gradient(ellipse, #FFC919 0%, transparent 65%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="pb-20 lg:pb-28">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-yellow border border-yellow/20 bg-yellow/5 rounded-full px-3 py-1 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow animate-pulse" />
              AI-Powered Digital Marketing
            </span>
            <h1 className="text-[3.2rem] sm:text-[3.8rem] font-black tracking-tight leading-[1.04] mb-6 text-ice"
             >
              Meet your<br />
              <span className="text-yellow">growth orbit.</span>
            </h1>
            <p className="text-lg text-ice-muted leading-relaxed mb-10 max-w-lg">
              Quorbit is a futuristic marketing agency blending AI, automation, and strategic expertise into one connected system. One partner, every channel, one outcome.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-dark transition-all hover:scale-[1.02] text-sm shadow-lg shadow-yellow/20"
              >
                Schedule a Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 border border-midnight-muted text-ice-muted font-medium px-6 py-3.5 rounded-xl hover:border-yellow/30 hover:text-ice transition-all text-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="relative hidden lg:block pb-0">
            <div className="relative rounded-t-2xl overflow-hidden border border-midnight-muted border-b-0"
              style={{ background: "linear-gradient(135deg, #1e1e27 0%, #14141A 100%)" }}>
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-midnight-muted">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow/60" />
                <span className="w-3 h-3 rounded-full bg-green/60" />
                <span className="ml-4 text-xs text-ice-muted/50 font-mono">quorbit.dashboard</span>
              </div>
              {/* Mock dashboard content */}
              <div className="p-6">
                {/* KPI row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "ROAS", value: "4.8×", change: "+12%" },
                    { label: "CAC", value: "$84", change: "−18%" },
                    { label: "Revenue", value: "$94K", change: "+34%" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-midnight rounded-xl p-3 border border-midnight-muted">
                      <p className="text-xs text-ice-muted mb-1">{kpi.label}</p>
                      <p className="text-xl font-bold text-ice">{kpi.value}</p>
                      <p className="text-xs font-semibold text-green mt-0.5">{kpi.change}</p>
                    </div>
                  ))}
                </div>
                {/* Chart bars */}
                <div className="bg-midnight rounded-xl p-4 border border-midnight-muted mb-3">
                  <p className="text-xs text-ice-muted mb-3">Revenue over 6 months</p>
                  <div className="flex items-end gap-2 h-20">
                    {[30, 42, 55, 48, 72, 94].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm transition-all"
                        style={{ height: `${(h / 94) * 100}%`, background: i === 5 ? "#FFC919" : `rgba(255,201,25,${0.15 + i * 0.1})` }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                      <span key={m} className="text-[10px] text-ice-muted/50">{m}</span>
                    ))}
                  </div>
                </div>
                {/* Channel row */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { ch: "Google Ads", pct: 42 },
                    { ch: "Meta", pct: 31 },
                    { ch: "SEO", pct: 18 },
                    { ch: "Email", pct: 9 },
                  ].map((c) => (
                    <div key={c.ch} className="bg-midnight rounded-lg px-3 py-2 border border-midnight-muted">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-ice-muted">{c.ch}</span>
                        <span className="text-yellow font-semibold">{c.pct}%</span>
                      </div>
                      <div className="h-1 bg-midnight-muted rounded-full overflow-hidden">
                        <div className="h-full bg-yellow rounded-full" style={{ width: `${c.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGO STRIP ── */}
      <section className="border-y border-midnight-muted bg-midnight-light">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <p className="text-xs text-ice-muted/50 uppercase tracking-widest text-center mb-5">Platforms & tools we work in</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {logos.map((l) => (
              <span key={l} className="text-sm font-bold text-ice-muted/40 tracking-wider uppercase">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOLD STATEMENT ── */}
      <section className="py-28 px-6 bg-midnight">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-4xl sm:text-5xl font-black text-ice leading-tight mb-6"
           >
            Most marketing fails not because of bad products —{" "}
            <span className="text-yellow">because of bad coordination.</span>
          </p>
          <p className="text-xl text-ice-muted max-w-2xl mx-auto leading-relaxed">
            Siloed channels. Duplicated budgets. Attribution guesswork. We fix this from the ground up — one orbit, one strategy, one set of outcomes everyone is accountable to.
          </p>
        </div>
      </section>

      {/* ── CAMPAIGN IMAGE SECTION ── */}
      <section className="py-0 px-6 bg-midnight-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            <div className="relative min-h-[380px] overflow-hidden rounded-tl-2xl rounded-bl-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
                alt="Data analytics dashboard"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-midnight-light/20 to-midnight/60" />
            </div>
            <div className="py-16 px-10 lg:px-14 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-yellow mb-4 block">Data-Driven Execution</span>
              <h2 className="text-3xl font-black text-ice mb-5 leading-tight"
               >
                Every channel. Every dollar. Every outcome — tracked.
              </h2>
              <p className="text-ice-muted leading-relaxed mb-6">
                We build campaigns with end-to-end attribution so you always know what&apos;s driving revenue and what&apos;s wasting budget. No vanity metrics. No guesswork.
              </p>
              <ul className="space-y-3">
                {["Real-time performance dashboards", "Revenue-attributed reporting", "Weekly optimization cycles", "Unified cross-channel view"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ice-muted">
                    <svg className="w-4 h-4 text-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 px-6 bg-midnight">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-midnight-muted rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-midnight px-8 py-10 flex flex-col">
              <p className="text-4xl font-black text-yellow mb-2">
                {s.number}
              </p>
              <p className="text-sm font-semibold text-ice">{s.label}</p>
              <p className="text-xs text-ice-muted mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-6 bg-midnight-light">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-yellow mb-3 block">Services</span>
              <h2 className="text-3xl font-black text-ice"
               >
                The full orbit.
              </h2>
            </div>
            <Link href="/contact" className="text-sm font-semibold text-yellow hover:text-yellow-dark transition-colors flex items-center gap-1 shrink-0">
              Talk to us about scope
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group relative block bg-midnight border border-midnight-muted rounded-2xl p-8 hover:border-yellow/40 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(255,201,25,0.04) 0%, transparent 60%)" }} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-yellow/10 text-yellow border border-yellow/20">
                      {svc.icon}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-ice-muted/50">{svc.badge}</span>
                  </div>
                  <h3 className="text-lg font-bold text-ice mb-3 group-hover:text-yellow transition-colors"
                   >
                    {svc.title}
                  </h3>
                  <p className="text-sm text-ice-muted leading-relaxed mb-5">{svc.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow/70 group-hover:text-yellow transition-colors">
                    Learn more
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI / INNOVATION IMAGE SECTION ── */}
      <section className="py-0 bg-midnight overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            <div className="py-16 px-0 lg:pr-14 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-yellow mb-4 block">AI + Automation</span>
              <h2 className="text-3xl font-black text-ice mb-5 leading-tight"
               >
                Faster than any team working alone. Smarter than any tool working alone.
              </h2>
              <p className="text-ice-muted leading-relaxed mb-6">
                We embed AI and automation into every layer of execution — from bid optimization and content at scale to lead routing and lifecycle flows. Your competitors are still doing it manually.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "AI bid management", sub: "Real-time optimization" },
                  { title: "Automated reporting", sub: "Revenue-connected" },
                  { title: "Predictive audiences", sub: "Behavioral targeting" },
                  { title: "Workflow automation", sub: "Zapier · HubSpot · Make" },
                ].map((item) => (
                  <div key={item.title} className="bg-midnight-light border border-midnight-muted rounded-xl p-4">
                    <p className="text-sm font-bold text-ice mb-0.5">{item.title}</p>
                    <p className="text-xs text-ice-muted">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-tr-2xl rounded-br-2xl">
              <Image
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80"
                alt="AI technology visualization"
                fill
                className="object-cover opacity-50"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent 40%, #14141A 100%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-24 px-6 bg-midnight-light">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-yellow mb-3 block">Client Results</span>
            <h2 className="text-3xl font-black text-ice"
             >
              Results we&apos;re accountable to.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {results.map((r) => (
              <div key={r.label} className="bg-midnight border border-midnight-muted rounded-2xl p-7 flex flex-col">
                <svg className="w-6 h-6 text-yellow mb-4 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm text-ice leading-relaxed mb-4 flex-1">{r.quote}</p>
                <span className="text-xs font-semibold text-yellow/60 uppercase tracking-wider">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM IMAGE + WHY US ── */}
      <section className="py-24 px-6 bg-midnight">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
              alt="Our team"
              fill
              className="object-cover opacity-70"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-2xl border border-midnight-muted" />
            <div className="absolute bottom-0 left-0 right-0 p-6"
              style={{ background: "linear-gradient(to top, rgba(20,20,26,0.95) 0%, transparent 100%)" }}>
              <p className="text-sm font-bold text-yellow">
                Senior-led. Outcome-focused.
              </p>
              <p className="text-xs text-ice-muted mt-1">Strategists who&apos;ve operated at CMO level</p>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-yellow mb-4 block">Why Quorbit</span>
            <h2 className="text-3xl font-black text-ice mb-8 leading-tight"
             >
              We don&apos;t hide behind activity metrics.
            </h2>
            <div className="space-y-5">
              {[
                { title: "CMO-level strategy", body: "Senior practitioners who have managed multi-channel programs for brands across the US, UK, and beyond." },
                { title: "Revenue-first reporting", body: "One report. Every channel. Revenue and pipeline as the north star — not impressions or engagement rates." },
                { title: "Direct and transparent", body: "We push back when something won't work. If results aren't trending right, we tell you exactly what we're changing and why." },
                { title: "AI built-in, not bolted-on", body: "Automation and AI are part of every workflow — from bidding to lead routing — not an afterthought." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow flex-shrink-0 mt-2" />
                  <div>
                    <p className="font-bold text-ice text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-ice-muted leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-28 px-6 relative overflow-hidden bg-midnight-light">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, #FFC919 0%, transparent 65%)" }} />
        <div className="relative max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow mb-4 block">Get Started</span>
          <h2 className="text-4xl sm:text-5xl font-black text-ice mb-5 leading-tight"
           >
            Ready to enter orbit?
          </h2>
          <p className="text-ice-muted text-lg mb-10 leading-relaxed">
            Schedule a free 30-minute strategy call. Come with your current setup and goals — we&apos;ll bring an honest read and a clear path forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-8 py-4 rounded-xl hover:bg-yellow-dark transition-all hover:scale-[1.02] text-sm shadow-xl shadow-yellow/20"
          >
            Schedule My Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-sm text-ice-muted mt-4">No commitment required. No sales pitch. Just a real conversation.</p>
        </div>
      </section>
    </div>
  );
}
