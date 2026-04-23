import Link from "next/link";

export default function QuoteForm() {
  return (
    <section id="quote" className="relative flex-1 flex flex-col justify-center py-16 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.07),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-[#D4A017]/30 bg-[#D4A017]/8 px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
            <span className="text-[#D4A017] text-xs font-black tracking-[0.3em] uppercase">Free Quote</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none mb-4">
            GET IN <span className="gold-text">TOUCH</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Ready to move? Get in touch and we&apos;ll get back to you promptly with a tailored quote.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            { Icon: PhoneIcon, label: "Phone", value: "07757 835819", href: "tel:07757835819" },
            { Icon: MailIcon, label: "Email", value: "rjlogistics.removals@gmail.com", href: "mailto:rjlogistics.removals@gmail.com" },
            { Icon: PinIcon, label: "Area", value: "Nottingham and Surrounding Midlands", href: "#" },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group flex items-start gap-4 border border-[#D4A017]/15 bg-[#111] p-5 hover:border-[#D4A017]/50 hover:bg-[#D4A017]/5 transition-all duration-300"
            >
              <div className="w-10 h-10 border border-[#D4A017]/30 group-hover:border-[#D4A017] flex items-center justify-center shrink-0 transition-colors">
                <Icon className="w-5 h-5 text-[#D4A017]" />
              </div>
              <div>
                <p className="text-xs text-gray-600 font-bold uppercase tracking-widest mb-0.5">{label}</p>
                <p className="text-white text-sm font-bold break-all">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/quote"
            className="bg-[#D4A017] text-black font-black text-sm px-8 py-4 uppercase tracking-widest hover:bg-[#F0C040] hover:shadow-[0_0_30px_rgba(212,160,23,0.4)] transition-all duration-300"
          >
            Request Free Quote →
          </Link>
          <div className="flex items-center gap-3 border border-[#D4A017]/20 bg-[#111] px-5 py-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <p className="text-white text-sm font-black uppercase tracking-wider">Available Now</p>
              <p className="text-gray-500 text-xs">Fast response guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
