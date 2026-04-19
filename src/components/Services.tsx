const services = [
  {
    title: "Waste Removals",
    description: "Fast, responsible clearance for homes and businesses. We handle it all so you don't have to.",
    icon: WasteIcon,
  },
  {
    title: "House Removals",
    description: "Stress-free home moves handled with care. We pack, load, transport, and unload — safely every time.",
    icon: HouseIcon,
  },
  {
    title: "Office Removals",
    description: "Efficient office relocations to minimise downtime. Your business keeps moving, and so do we.",
    icon: OfficeIcon,
  },
  {
    title: "Load & Unload",
    description: "Need a hand with the heavy lifting? Our team loads and unloads quickly, carefully, every time.",
    icon: BoxIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-[#0d0d0d] overflow-hidden">
      {/* Background details */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 border border-[#D4A017]/30 bg-[#D4A017]/8 px-4 py-2 mb-5">
            <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
            <span className="text-[#D4A017] text-xs font-black tracking-[0.3em] uppercase">Our Services</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-none">
              WHAT WE <span className="gold-text">DO</span>
            </h2>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
              End-to-end moving solutions built for speed, safety, and peace of mind.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="h-px flex-1 bg-[#D4A017]/20" />
            <div className="w-3 h-3 border border-[#D4A017]/50 rotate-45" />
            <div className="h-px w-16 bg-[#D4A017]/50" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ title, description, icon: Icon }, idx) => (
            <div
              key={title}
              className="group relative bg-[#111] border border-[#D4A017]/15 rounded-xl p-7 card-hover overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#D4A017]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4A017] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Number */}
              <div className="text-[#D4A017]/15 text-6xl font-black absolute top-3 right-4 leading-none select-none">
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="relative w-12 h-12 border border-[#D4A017]/30 flex items-center justify-center mb-6 group-hover:border-[#D4A017] group-hover:bg-[#D4A017]/10 transition-all duration-300">
                <Icon className="w-6 h-6 text-[#D4A017]" />
              </div>

              <h3 className="text-base font-black text-white uppercase tracking-wide mb-3 group-hover:text-[#D4A017] transition-colors duration-200">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {description}
              </p>

              {/* Arrow on hover */}
              <div className="mt-6 flex items-center gap-2 text-[#D4A017]/0 group-hover:text-[#D4A017] transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-black uppercase tracking-widest">Learn More</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#D4A017]/20 divide-x divide-[#D4A017]/20 bg-[#111]">
          {[
            { value: "500+", label: "Moves Completed" },
            { value: "100%", label: "On-Time Rate" },
            { value: "5★", label: "Customer Rating" },
            { value: "24/7", label: "Availability" },
          ].map(({ value, label }) => (
            <div key={label} className="py-8 px-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-[#D4A017] leading-none mb-1">{value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WasteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
    </svg>
  );
}

function HouseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function OfficeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M8 3v18M16 3v18M2 9h6M16 9h6M2 15h6M16 15h6" />
    </svg>
  );
}

function BoxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}
