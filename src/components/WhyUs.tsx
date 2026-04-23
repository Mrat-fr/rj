const pillars = [
  {
    icon: ShieldIcon,
    title: "RELIABLE",
    tag: "01",
    description: "We show up on time, every time. Your schedule is our priority — no delays, no excuses.",
  },
  {
    icon: StarIcon,
    title: "PROFESSIONAL",
    tag: "02",
    description: "Trained team, proper equipment, and a white-glove attitude toward your belongings.",
  },
  {
    icon: PoundIcon,
    title: "AFFORDABLE",
    tag: "03",
    description: "Premium service at fair prices. No hidden fees, no surprises — just honest value.",
  },
];

const trustBadges = [
  { icon: SpeedIcon, label: "Fast Response", sub: "Same-day availability" },
  { icon: HeartIcon, label: "Fully Insured", sub: "Your items protected" },
  { icon: LockIcon, label: "Secure Handling", sub: "Care in every move" },
  { icon: ClockIcon, label: "Punctual", sub: "On time, every time" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative flex-1 flex flex-col justify-center py-16 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.06),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 border border-[#D4A017]/30 bg-[#D4A017]/8 px-4 py-2 mb-5">
            <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
            <span className="text-[#D4A017] text-xs font-black tracking-[0.3em] uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            THE R<span className="gold-text">&amp;</span>J PROMISE
          </h2>
        </div>

        {/* Three pillar cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map(({ icon: Icon, title, tag, description }) => (
            <div
              key={title}
              className="group relative border border-[#D4A017]/20 bg-[#0d0d0d] p-8 card-hover overflow-hidden"
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#D4A017] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Tag */}
              <div className="absolute top-4 right-5 text-5xl font-black text-[#D4A017]/8 leading-none select-none">{tag}</div>

              {/* Icon ring */}
              <div className="relative w-16 h-16 rounded-full border-2 border-[#D4A017]/40 flex items-center justify-center mb-8 group-hover:border-[#D4A017] group-hover:animate-pulse-gold transition-all duration-300">
                <div className="absolute inset-1.5 rounded-full border border-[#D4A017]/15 group-hover:border-[#D4A017]/30 transition-colors" />
                <Icon className="w-7 h-7 text-[#D4A017]" />
              </div>

              <h3 className="text-2xl font-black text-white tracking-wider mb-3 group-hover:text-[#D4A017] transition-colors duration-200">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>


        {/* Gold-bordered trust badge strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 border border-[#D4A017]/30 bg-[#0d0d0d] py-7 px-4 hover:border-[#D4A017] hover:bg-[#D4A017]/5 transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 rounded-full border border-[#D4A017]/40 group-hover:border-[#D4A017] flex items-center justify-center transition-colors duration-300">
                <Icon className="w-5 h-5 text-[#D4A017]" />
              </div>
              <div>
                <p className="text-white font-black text-sm uppercase tracking-wider">{label}</p>
                <p className="text-gray-600 text-xs mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function PoundIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="15" x2="18" y2="15" />
      <path d="M8 15V9a4 4 0 018 0" />
      <path d="M8 19h10" />
    </svg>
  );
}

function SpeedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
