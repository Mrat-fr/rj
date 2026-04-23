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
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#0d0d0d] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.07),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-[#D4A017] transition-colors mb-8">
            ← All Services
          </Link>

          <div className="inline-flex items-center gap-2 border border-[#D4A017]/30 bg-[#D4A017]/8 px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
            <span className="text-[#D4A017] text-xs font-black tracking-[0.3em] uppercase">{service.subtitle}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6 uppercase">
            {service.title.split(" ").map((word, i) => (
              <span key={i}>
                {i === service.title.split(" ").length - 1
                  ? <span className="gold-text">{word}</span>
                  : <>{word} </>}
              </span>
            ))}
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
            {service.longDescription}
          </p>

          <Link
            href="/quote"
            className="inline-block bg-[#D4A017] text-black font-black px-8 py-4 text-base uppercase tracking-widest hover:bg-[#F0C040] hover:shadow-[0_0_30px_rgba(212,160,23,0.4)] transition-all duration-300"
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Features */}
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wide mb-8">
                What&apos;s <span className="gold-text">Included</span>
              </h2>
              <div className="space-y-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-4 border border-[#D4A017]/10 bg-[#111] px-5 py-4">
                    <div className="w-5 h-5 border border-[#D4A017]/50 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6l4 4 6-7" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service breakdown */}
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wide mb-8">
                Service <span className="gold-text">Breakdown</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.includes.map(({ label, detail }, i) => (
                  <div key={label} className="group border border-[#D4A017]/15 bg-[#111] p-6 hover:border-[#D4A017]/40 transition-colors">
                    <div className="text-[#D4A017]/20 text-3xl font-black leading-none mb-3 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-white font-black text-sm uppercase tracking-wide mb-1 group-hover:text-[#D4A017] transition-colors">{label}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 bg-[#D4A017]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-black/60 text-xs font-black uppercase tracking-widest mb-1">Ready to book?</p>
            <h2 className="text-3xl md:text-4xl font-black text-black uppercase leading-none">
              Get your free quote today
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/quote"
              className="bg-black text-white font-black px-8 py-4 uppercase tracking-widest hover:bg-[#111] transition-colors text-center"
            >
              Request a Quote
            </Link>
            <a
              href="tel:07757835819"
              className="border-2 border-black text-black font-black px-8 py-4 uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-200 text-center"
            >
              07757 835819
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
