export default function Footer() {
  const year = new Date().getFullYear();

  const serviceLinks = [
    { label: "Waste Removals", slug: "waste-removals" },
    { label: "House Removals", slug: "house-removals" },
    { label: "Office Removals", slug: "office-removals" },
    { label: "Load & Unload", slug: "load-unload" },
  ];

  return (
    <footer className="relative bg-[#080808] border-t border-[#D4A017]/20 overflow-hidden">
      {/* Top gold bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#D4A017] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 border-2 border-[#D4A017] flex items-center justify-center">
                <div className="absolute inset-1 border border-[#D4A017]/20" />
                <span className="text-lg font-black text-[#D4A017]">RJ</span>
              </div>
              <div>
                <p className="text-sm font-black text-white leading-tight tracking-[0.15em] uppercase">Logistic and</p>
                <p className="text-sm font-black text-[#D4A017] leading-tight tracking-[0.15em] uppercase">Removals</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-4">
              Professional removals and logistics across Nottingham and surrounding midlands. Fast, reliable, affordable.
            </p>
            <p className="text-[#D4A017] font-black italic text-sm tracking-wide">WE MOVE IT. YOU RELAX.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="w-4 h-px bg-[#D4A017]" />
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    className="text-gray-500 text-sm hover:text-[#D4A017] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#D4A017]/30 group-hover:bg-[#D4A017] rounded-full transition-colors" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="w-4 h-px bg-[#D4A017]" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:07757835819" className="group flex items-start gap-3 text-gray-500 hover:text-white transition-colors text-sm">
                  <PhoneIcon className="w-4 h-4 text-[#D4A017] mt-0.5 shrink-0" />
                  <span>07757 835819</span>
                </a>
              </li>
              <li>
                <a href="mailto:rjlogistics.removals@gmail.com" className="group flex items-start gap-3 text-gray-500 hover:text-white transition-colors text-sm">
                  <MailIcon className="w-4 h-4 text-[#D4A017] mt-0.5 shrink-0" />
                  <span className="break-all">rjlogistics.removals@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <PinIcon className="w-4 h-4 text-[#D4A017] mt-0.5 shrink-0" />
                <span>Nottingham and Surrounding Midlands</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#D4A017]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            &copy; {year} R&amp;J Logistic and Removals. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-700">
            {["Fast Response", "Fully Insured", "5★ Rated"].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#D4A017]/50" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
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
