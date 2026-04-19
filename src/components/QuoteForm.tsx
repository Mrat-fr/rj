"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const services = [
  "Waste Removals",
  "House Removals",
  "Office Removals",
  "Load & Unload",
  "Other",
];

export default function QuoteForm() {
  const submitQuote = useMutation(api.quotes.submitQuote);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.service) return;
    setStatus("loading");
    try {
      await submitQuote(form);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="quote" className="relative py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.07),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left side — contact info */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 border border-[#D4A017]/30 bg-[#D4A017]/8 px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
              <span className="text-[#D4A017] text-xs font-black tracking-[0.3em] uppercase">Free Quote</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-none mb-4">
              GET IN <span className="gold-text">TOUCH</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Fill in the form and we&apos;ll get back to you promptly with a tailored quote.
            </p>

            <div className="space-y-4">
              {[
                { Icon: PhoneIcon, label: "Phone", value: "073 123 4567", href: "tel:0731234567" },
                { Icon: MailIcon, label: "Email", value: "randjlogisticremovals@gmail.com", href: "mailto:randjlogisticremovals@gmail.com" },
                { Icon: PinIcon, label: "Area", value: "London & Surrounding Areas", href: "#" },
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

            {/* Availability badge */}
            <div className="mt-8 flex items-center gap-3 border border-[#D4A017]/20 bg-[#111] px-5 py-4">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="text-white text-sm font-black uppercase tracking-wider">Available Now</p>
                <p className="text-gray-500 text-xs">Fast response guaranteed</p>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="border-2 border-[#D4A017] bg-[#D4A017]/5 p-14 text-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#D4A017] flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-[#D4A017] mb-2 uppercase tracking-wide">Quote Request Sent!</h3>
                <p className="text-gray-400 mb-8">We&apos;ll be in touch shortly. Thank you for choosing R&amp;J!</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-[#D4A017] text-black font-black px-8 py-3 uppercase tracking-widest hover:bg-[#F0C040] transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#111] border border-[#D4A017]/15 p-8 md:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Full Name" required>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-[#0a0a0a] border border-[#222] text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#D4A017] transition-colors placeholder-gray-700"
                    />
                  </FormField>
                  <FormField label="Phone Number" required>
                    <input
                      type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="07X XXX XXXX"
                      className="w-full bg-[#0a0a0a] border border-[#222] text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#D4A017] transition-colors placeholder-gray-700"
                    />
                  </FormField>
                </div>

                <FormField label="Email Address" required>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-[#0a0a0a] border border-[#222] text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#D4A017] transition-colors placeholder-gray-700"
                  />
                </FormField>

                <FormField label="Service Required" required>
                  <select
                    name="service" required value={form.service} onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-[#222] text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#D4A017] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="text-gray-600">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#0a0a0a]">{s}</option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Message / Details">
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tell us about your move — location, date, special requirements..."
                    className="w-full bg-[#0a0a0a] border border-[#222] text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#D4A017] transition-colors placeholder-gray-700 resize-none"
                  />
                </FormField>

                {status === "error" && (
                  <p className="text-red-400 text-sm border border-red-400/30 bg-red-400/5 px-4 py-3">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#D4A017] text-black font-black py-4 text-base uppercase tracking-widest hover:bg-[#F0C040] hover:shadow-[0_0_30px_rgba(212,160,23,0.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : "REQUEST FREE QUOTE →"}
                </button>

                <p className="text-center text-gray-600 text-xs">
                  Or call us:{" "}
                  <a href="tel:0731234567" className="text-[#D4A017] font-bold hover:text-[#F0C040] transition-colors">
                    073 123 4567
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
        {label} {required && <span className="text-[#D4A017]">*</span>}
      </label>
      {children}
    </div>
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
