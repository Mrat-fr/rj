import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="flex flex-col bg-[#0a0a0a] text-white">
      <div className="h-screen flex flex-col">
        <Navbar />

        <section className="relative flex-1 flex flex-col pt-28 pb-16 bg-[#0d0d0d] overflow-y-auto">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.07),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full flex-1 flex flex-col">
          {/* Back link */}
          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-[#D4A017] transition-colors mb-6">
            ← All Services
          </Link>

          {/* Subtitle badge — on its own line below back link */}
          <div className="flex mb-8">
            <div className="inline-flex items-center gap-2 border border-[#D4A017]/30 bg-[#D4A017]/8 px-4 py-2">
              <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
              <span className="text-[#D4A017] text-xs font-black tracking-[0.3em] uppercase">{service.subtitle}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-none mb-12 uppercase">
            {service.title.split(" ").map((word, i) => (
              <span key={i}>
                {i === service.title.split(" ").length - 1
                  ? <span className="gold-text">{word}</span>
                  : <>{word} </>}
              </span>
            ))}
          </h1>

          {/* Main content — 3 columns: description+CTA | features | breakdown */}
          <div className="grid lg:grid-cols-3 gap-10 items-start flex-1">
            {/* Column 1 — description & CTA */}
            <div>
              <p className="text-gray-400 text-sm leading-loose mb-8">
                {service.longDescription}
              </p>

              <Link
                href="/quote"
                className="inline-block bg-[#D4A017] text-black font-black px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#F0C040] hover:shadow-[0_0_30px_rgba(212,160,23,0.4)] transition-all duration-300"
              >
                Get a Free Quote →
              </Link>
            </div>

            {/* Column 2 — what's included */}
            <div>
              <h2 className="text-lg font-black text-white uppercase tracking-wide mb-4">
                What&apos;s <span className="gold-text">Included</span>
              </h2>
              <div className="space-y-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 border border-[#D4A017]/10 bg-[#111] px-4 py-3.5">
                    <div className="w-4 h-4 border border-[#D4A017]/50 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6l4 4 6-7" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-xs">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 — service breakdown */}
            <div>
              <h2 className="text-lg font-black text-white uppercase tracking-wide mb-4">
                Service <span className="gold-text">Breakdown</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {service.includes.map(({ label, detail }, i) => (
                  <div key={label} className="group border border-[#D4A017]/15 bg-[#111] p-5 hover:border-[#D4A017]/40 transition-colors">
                    <div className="text-[#D4A017]/20 text-2xl font-black leading-none mb-2 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-white font-black text-xs uppercase tracking-wide mb-1 group-hover:text-[#D4A017] transition-colors">{label}</h3>
                    <p className="text-gray-500 text-[11px] leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
