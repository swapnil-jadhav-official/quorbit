import Link from "next/link";

interface MetricRow {
  metric: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ProcessStep {
  title: string;
  body: string;
}

interface ServiceSection {
  title: string;
  body: string;
}

interface Props {
  badge: string;
  headline: string;
  subheadline: string;
  opening: string;
  whatIncluded: ServiceSection[];
  process: ProcessStep[];
  whoFor: string[];
  metrics: MetricRow[];
  faqs: FAQ[];
  ctaHeadline: string;
  ctaBody: string;
  ctaBottom: string;
}

export default function ServicePageLayout({
  badge,
  headline,
  subheadline,
  opening,
  whatIncluded,
  process,
  whoFor,
  metrics,
  faqs,
  ctaHeadline,
  ctaBody,
  ctaBottom,
}: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight pt-20 pb-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #FFC919 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-yellow border border-yellow/30 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow inline-block" />
            {badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6 text-ice"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-ice-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {subheadline}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-6 py-3 rounded-lg hover:bg-yellow-dark transition-colors text-sm"
          >
            Schedule a Free Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Opening statement */}
      <section className="py-20 px-6 bg-midnight-light">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-ice-muted leading-relaxed">{opening}</p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6 bg-midnight">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-ice mb-12"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whatIncluded.map((item) => (
              <div key={item.title} className="bg-midnight-light border border-midnight-muted rounded-2xl p-7 hover:border-yellow/30 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow flex-shrink-0 mt-2" />
                  <h3 className="font-bold text-ice" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-ice-muted leading-relaxed pl-4">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-midnight-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-ice mb-12"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            How We Work
          </h2>
          <div className="space-y-8">
            {process.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 bg-yellow text-midnight rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-ice mb-1" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-ice-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 px-6 bg-midnight">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-ice mb-8"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            Who This Is Built For
          </h2>
          <ul className="space-y-3">
            {whoFor.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-ice-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-6 bg-midnight-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-ice mb-10"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            The Numbers We&apos;re Accountable To
          </h2>
          <div className="border border-midnight-muted rounded-2xl overflow-hidden">
            {metrics.map((row, i) => (
              <div
                key={row.metric}
                className={`flex items-center gap-6 px-6 py-5 ${i !== metrics.length - 1 ? "border-b border-midnight-muted" : ""} hover:bg-midnight transition-colors`}
              >
                <span className="font-mono text-sm font-bold text-yellow w-24 shrink-0">
                  {row.metric}
                </span>
                <span className="text-sm text-ice-muted">{row.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-midnight">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-ice mb-10"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-midnight-muted pb-6">
                <h3 className="font-bold text-ice mb-2" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                  {faq.question}
                </h3>
                <p className="text-sm text-ice-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-midnight-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ background: "radial-gradient(ellipse at center, #FFC919 0%, transparent 70%)" }} />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-ice mb-4"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            {ctaHeadline}
          </h2>
          <p className="text-ice-muted text-lg mb-8 leading-relaxed">{ctaBody}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-6 py-3.5 rounded-lg hover:bg-yellow-dark transition-colors text-sm"
          >
            Schedule My Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-sm text-ice-muted mt-4">{ctaBottom}</p>
        </div>
      </section>
    </div>
  );
}
