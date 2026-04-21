export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,160,23,0.12),transparent)]" />

      {/* Left gold accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4A017]/50 to-transparent" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 border border-[#D4A017]/40 bg-[#D4A017]/8 px-4 py-2 mb-8 animate-fade-in-left">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse-gold" />
              <span className="text-[#D4A017] text-xs font-black tracking-[0.3em] uppercase">London &amp; Surrounding Areas</span>
            </div>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-black leading-[0.9] mb-6 animate-fade-in-left delay-100">
              <span className="block text-white">R<span className="text-[#D4A017]">&amp;</span>J</span>
              <span className="block text-white text-4xl md:text-5xl xl:text-6xl mt-2 tracking-tight">LOGISTIC</span>
              <span className="gold-text block text-4xl md:text-5xl xl:text-6xl tracking-tight">AND REMOVALS</span>
            </h1>

            <div className="flex items-stretch gap-0 mb-8 animate-fade-in-left delay-200">
              <div className="w-1 bg-[#D4A017] self-stretch" />
              <p className="text-xl md:text-2xl font-black text-white pl-5 leading-snug">
                WE MOVE IT.<br />
                <span className="text-[#D4A017]">YOU RELAX.</span>
              </p>
            </div>

            <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed animate-fade-in-left delay-300">
              Professional, reliable removals across London and surrounding areas.
              On time, every time — because your move matters.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-left delay-400">
              <a
                href="#quote"
                className="relative group bg-[#D4A017] text-black font-black px-8 py-4 text-base uppercase tracking-widest hover:bg-[#F0C040] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,160,23,0.5)]"
              >
                <span className="relative z-10">GET A FREE QUOTE</span>
              </a>
              <a
                href="tel:0731234567"
                className="border-2 border-[#D4A017]/50 text-white font-black px-8 py-4 text-base uppercase tracking-widest hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-300 backdrop-blur-sm"
              >
                CALL NOW
              </a>
            </div>

            {/* Quick trust pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in-left delay-500">
              {["Fast Response", "Friendly Team", "Care in Every Move"].map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Truck illustration card */}
          <div className="relative animate-fade-in-right delay-200">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 border border-[#D4A017]/10 rounded-2xl" />
            <div className="absolute -inset-8 border border-[#D4A017]/5 rounded-3xl" />

            <div className="relative bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#D4A017]/25 rounded-2xl p-8 overflow-hidden">
              {/* Card inner grid */}
              <div className="absolute inset-0 grid-bg opacity-30" />

              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4A017]/20 to-transparent" />

              <div className="relative z-10">
                {/* Top label */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[#D4A017] text-xs font-black tracking-[0.25em] uppercase">Professional Fleet</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                    <div className="w-2 h-2 rounded-full bg-[#D4A017]/40" />
                    <div className="w-2 h-2 rounded-full bg-[#D4A017]/20" />
                  </div>
                </div>

                {/* SVG Moving Truck */}
                <div className="flex justify-center mb-8 animate-float">
                  <svg
                    width="320"
                    height="160"
                    viewBox="0 0 320 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-xs md:max-w-sm"
                  >
                    {/* Road line */}
                    <line x1="0" y1="145" x2="320" y2="145" stroke="#D4A017" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="12 8" />

                    {/* Truck body (cargo box) */}
                    <rect x="60" y="55" width="170" height="80" rx="3" fill="#1a1a1a" stroke="#D4A017" strokeWidth="1.5" />
                    {/* Cargo door lines */}
                    <line x1="145" y1="55" x2="145" y2="135" stroke="#D4A017" strokeWidth="1" strokeOpacity="0.4" />
                    <circle cx="152" cy="95" r="3" fill="#D4A017" />

                    {/* Cab */}
                    <path d="M230 80 L230 135 L295 135 L295 95 L275 75 L250 75 L230 80Z" fill="#141414" stroke="#D4A017" strokeWidth="1.5" />
                    {/* Windshield */}
                    <path d="M252 78 L275 78 L290 95 L252 95 Z" fill="#0a0a0a" stroke="#D4A017" strokeWidth="1" strokeOpacity="0.6" />
                    {/* Gold cab accent stripe */}
                    <line x1="230" y1="105" x2="295" y2="105" stroke="#D4A017" strokeWidth="2.5" strokeOpacity="0.7" />
                    {/* Door */}
                    <rect x="245" y="100" width="30" height="30" rx="1" fill="none" stroke="#D4A017" strokeWidth="1" strokeOpacity="0.4" />

                    {/* Wheels */}
                    <circle cx="100" cy="138" r="16" fill="#111" stroke="#D4A017" strokeWidth="2" />
                    <circle cx="100" cy="138" r="8" fill="#1a1a1a" stroke="#D4A017" strokeWidth="1.5" />
                    <circle cx="100" cy="138" r="2.5" fill="#D4A017" />

                    <circle cx="195" cy="138" r="16" fill="#111" stroke="#D4A017" strokeWidth="2" />
                    <circle cx="195" cy="138" r="8" fill="#1a1a1a" stroke="#D4A017" strokeWidth="1.5" />
                    <circle cx="195" cy="138" r="2.5" fill="#D4A017" />

                    <circle cx="265" cy="138" r="14" fill="#111" stroke="#D4A017" strokeWidth="2" />
                    <circle cx="265" cy="138" r="7" fill="#1a1a1a" stroke="#D4A017" strokeWidth="1.5" />
                    <circle cx="265" cy="138" r="2" fill="#D4A017" />

                    {/* Headlight */}
                    <rect x="289" y="108" width="6" height="10" rx="1" fill="#D4A017" opacity="0.9" />
                    {/* Headlight beam */}
                    <path d="M295 110 L315 105 M295 115 L315 120" stroke="#D4A017" strokeWidth="1" strokeOpacity="0.3" />

                    {/* Company name on truck */}
                    <text x="115" y="100" fill="#D4A017" fontSize="12" fontWeight="800" fontFamily="Arial" textAnchor="middle" opacity="0.8">R&amp;J</text>
                  </svg>
                </div>

                {/* Slogans */}
                <div className="text-center mb-6">
                  <p className="text-3xl font-black text-white leading-tight">ON TIME.</p>
                  <p className="text-3xl font-black text-[#D4A017] leading-tight">EVERY TIME.</p>
                  <p className="text-sm font-bold text-gray-500 italic mt-1 uppercase tracking-widest">You Call, We Haul.</p>
                </div>

                {/* Contact pills */}
                <div className="space-y-2.5">
                  {[
                    { icon: PhoneIcon, text: "073 123 4567", href: "tel:0731234567" },
                    { icon: MailIcon, text: "randjlogisticremovals@gmail.com", href: "mailto:randjlogisticremovals@gmail.com" },
                    { icon: PinIcon, text: "London & Surrounding Areas", href: "#" },
                  ].map(({ icon: Icon, text, href }) => (
                    <a
                      key={text}
                      href={href}
                      className="flex items-center gap-3 bg-black/60 border border-[#D4A017]/15 rounded-lg px-4 py-3 hover:border-[#D4A017]/50 transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-[#D4A017] shrink-0" />
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors truncate">{text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
