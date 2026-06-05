import Link from "next/link";

const services = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "E-Commerce Management", href: "/services/ecommerce" },
  { label: "All-in-One Digital Marketing", href: "/services/all-in-one" },
  { label: "Website & Automation", href: "/services/website-automation" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-midnight-muted">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="relative flex items-center justify-center w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                  <circle cx="16" cy="16" r="13" stroke="#FFC919" strokeWidth="2.5" strokeDasharray="60 20" strokeLinecap="round"/>
                  <circle cx="16" cy="16" r="3" fill="#FFC919"/>
                </svg>
              </span>
              <span className="text-lg font-bold text-ice" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                Quorbit
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ice-muted max-w-xs mb-4">
              A futuristic marketing agency blending creativity, AI, automation, and strategic growth into one connected orbit.
            </p>
            <span className="text-xs font-semibold text-yellow tracking-widest uppercase">Business Simplified</span>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-bold text-ice mb-4" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-ice-muted hover:text-yellow transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-sm font-bold text-ice mb-4" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Get in Touch</p>
            <p className="text-sm text-ice-muted mb-5 leading-relaxed">
              Ready to grow? Schedule a free strategy call. Come with your goals — we come prepared.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-yellow text-midnight text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-yellow-dark transition-colors"
            >
              Schedule a Call
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-midnight-muted flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ice-muted">© {new Date().getFullYear()} Quorbit. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-ice-muted hover:text-ice transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-ice-muted hover:text-ice transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
