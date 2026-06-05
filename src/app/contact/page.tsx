import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Strategy Call — Quorbit",
  description: "Schedule a free 30-minute strategy call with the Quorbit team. No commitment, no long-deck sales pitch.",
};

const services = [
  "Performance Marketing",
  "E-Commerce Management & Ads",
  "All-in-One Digital Marketing",
  "Website Development & Automation",
  "Not Sure Yet",
];

const budgets = [
  "Under $2K/month",
  "$2K–$5K/month",
  "$5K–$20K/month",
  "$20K–$50K/month",
  "$50K+/month",
  "Prefer not to say",
];

const sources = ["Google Search", "LinkedIn", "Referral", "Social Media", "Other"];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-midnight pt-24 pb-20 px-6 border-b border-midnight-muted"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,201,25,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-6">Free Strategy Call</span>
          <div className="w-12 h-0.5 bg-yellow mb-7" />
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.05] text-ice mb-5">
            Let&apos;s Talk Growth
          </h1>
          <p className="text-ice-muted text-lg leading-relaxed max-w-xl">
            30 minutes. No commitment. No long-deck sales pitch. Just a direct conversation with someone who&apos;s done this before.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 bg-midnight-light">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-ice mb-1.5">
                  First Name <span className="text-yellow">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Jane"
                  className="w-full bg-midnight border border-midnight-muted rounded-lg px-4 py-3 text-sm text-ice placeholder-ice-muted/40 focus:outline-none focus:border-yellow/60 focus:ring-1 focus:ring-yellow/30 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ice mb-1.5">
                  Last Name <span className="text-yellow">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Smith"
                  className="w-full bg-midnight border border-midnight-muted rounded-lg px-4 py-3 text-sm text-ice placeholder-ice-muted/40 focus:outline-none focus:border-yellow/60 focus:ring-1 focus:ring-yellow/30 transition"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-ice mb-1.5">
                  Company Name <span className="text-yellow">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Acme Inc."
                  className="w-full bg-midnight border border-midnight-muted rounded-lg px-4 py-3 text-sm text-ice placeholder-ice-muted/40 focus:outline-none focus:border-yellow/60 focus:ring-1 focus:ring-yellow/30 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ice mb-1.5">
                  Company Website
                </label>
                <input
                  type="url"
                  name="website"
                  placeholder="https://acme.com"
                  className="w-full bg-midnight border border-midnight-muted rounded-lg px-4 py-3 text-sm text-ice placeholder-ice-muted/40 focus:outline-none focus:border-yellow/60 focus:ring-1 focus:ring-yellow/30 transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ice mb-1.5">
                Which service are you interested in? <span className="text-yellow">*</span>
              </label>
              <select
                name="service"
                required
                className="w-full bg-midnight border border-midnight-muted rounded-lg px-4 py-3 text-sm text-ice focus:outline-none focus:border-yellow/60 focus:ring-1 focus:ring-yellow/30 transition"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ice mb-1.5">
                Current monthly marketing budget
              </label>
              <select
                name="budget"
                className="w-full bg-midnight border border-midnight-muted rounded-lg px-4 py-3 text-sm text-ice focus:outline-none focus:border-yellow/60 focus:ring-1 focus:ring-yellow/30 transition"
              >
                <option value="">Select a range</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ice mb-1.5">
                What&apos;s your biggest marketing challenge right now? <span className="text-yellow">*</span>
              </label>
              <textarea
                name="challenge"
                required
                rows={4}
                placeholder="Tell us what's not working or where you want to grow..."
                className="w-full bg-midnight border border-midnight-muted rounded-lg px-4 py-3 text-sm text-ice placeholder-ice-muted/40 focus:outline-none focus:border-yellow/60 focus:ring-1 focus:ring-yellow/30 transition resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ice mb-1.5">
                How did you hear about us?
              </label>
              <select
                name="source"
                className="w-full bg-midnight border border-midnight-muted rounded-lg px-4 py-3 text-sm text-ice focus:outline-none focus:border-yellow/60 focus:ring-1 focus:ring-yellow/30 transition"
              >
                <option value="">Select an option</option>
                {sources.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow text-midnight font-bold py-3.5 rounded-lg hover:bg-yellow-dark transition-colors text-sm"
             
            >
              Submit &amp; Schedule My Call
            </button>
            <p className="text-xs text-ice-muted text-center">
              You&apos;ll hear from us within one business day to confirm your call time.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
