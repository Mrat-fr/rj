"use client";

import { useState, useRef } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  "Waste Removals",
  "House Removals",
  "Office Removals",
  "Load & Unload",
  "Other",
];

type Step1 = {
  fromPostcode: string;
  fromLocation: string;
  fromImage: File | null;
  toPostcode: string;
  toLocation: string;
  toImage: File | null;
  service: string;
};

type Step2 = {
  name: string;
  phone: string;
  message: string;
};

export default function QuotePage() {
  const generateUploadUrl = useMutation(api.quotes.generateUploadUrl);
  const submitQuote = useMutation(api.quotes.submitQuote);

  const [step, setStep] = useState<1 | 2>(1);
  const [step1, setStep1] = useState<Step1>({
    fromPostcode: "",
    fromLocation: "",
    fromImage: null,
    toPostcode: "",
    toLocation: "",
    toImage: null,
    service: "",
  });
  const [step2, setStep2] = useState<Step2>({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);

  const handleStep1Change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setStep1((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleStep2Change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStep2((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (field: "fromImage" | "toImage") => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setStep1((prev) => ({ ...prev, [field]: file }));
  };

  const removeImage = (field: "fromImage" | "toImage") => {
    setStep1((prev) => ({ ...prev, [field]: null }));
    if (field === "fromImage" && fromInputRef.current) fromInputRef.current.value = "";
    if (field === "toImage" && toInputRef.current) toInputRef.current.value = "";
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!step1.fromPostcode || !step1.fromLocation || !step1.toPostcode || !step1.toLocation || !step1.service) return;
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const uploadImage = async (file: File): Promise<string> => {
    const uploadUrl = await generateUploadUrl();
    const res = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": file.type },
      body: file,
    });
    const { storageId } = await res.json();
    return storageId;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!step2.name || !step2.phone) return;
    setStatus("loading");
    try {
      let fromImageId: string | undefined;
      let toImageId: string | undefined;
      if (step1.fromImage) fromImageId = await uploadImage(step1.fromImage);
      if (step1.toImage) toImageId = await uploadImage(step1.toImage);

      await submitQuote({
        name: step2.name,
        phone: step2.phone,
        message: step2.message || undefined,
        service: step1.service,
        fromPostcode: step1.fromPostcode,
        fromLocation: step1.fromLocation,
        toPostcode: step1.toPostcode,
        toLocation: step1.toLocation,
        fromImageId: fromImageId as never,
        toImageId: toImageId as never,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="relative pt-36 pb-28 bg-[#0d0d0d] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.07),transparent_70%)]" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-[#D4A017] transition-colors mb-8">
            ← Back to Home
          </Link>

          {status === "success" ? (
            <div className="border-2 border-[#D4A017] bg-[#D4A017]/5 p-14 text-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#D4A017] flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-[#D4A017] mb-2 uppercase tracking-wide">Quote Request Sent!</h3>
              <p className="text-gray-400 mb-8">We&apos;ll be in touch shortly. Thank you for choosing R&amp;J!</p>
              <Link href="/" className="inline-block bg-[#D4A017] text-black font-black px-8 py-3 uppercase tracking-widest hover:bg-[#F0C040] transition-colors">
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              {/* Header + step indicator */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 border border-[#D4A017]/30 bg-[#D4A017]/8 px-4 py-2 mb-4">
                  <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
                  <span className="text-[#D4A017] text-xs font-black tracking-[0.3em] uppercase">Free Quote</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white leading-none mb-6">
                  {step === 1 ? <>YOUR <span className="gold-text">MOVE</span></> : <>YOUR <span className="gold-text">DETAILS</span></>}
                </h1>

                {/* Step pills */}
                <div className="flex items-center gap-3">
                  <StepPill number={1} label="Move Details" active={step === 1} done={step === 2} />
                  <div className="flex-1 h-px bg-[#D4A017]/20" />
                  <StepPill number={2} label="Your Details" active={step === 2} done={false} />
                </div>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <form onSubmit={handleNext} className="bg-[#111] border border-[#D4A017]/15 p-8 md:p-10 space-y-8">
                  {/* From */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-black text-[#D4A017] uppercase tracking-widest border-b border-[#D4A017]/20 pb-2">
                      From
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Postcode" required>
                        <input
                          type="text" name="fromPostcode" required value={step1.fromPostcode}
                          onChange={handleStep1Change} placeholder="e.g. SW1A 1AA"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Full Address" required>
                        <input
                          type="text" name="fromLocation" required value={step1.fromLocation}
                          onChange={handleStep1Change} placeholder="e.g. 10 Downing Street"
                          className={inputCls}
                        />
                      </Field>
                    </div>
                    <ImageUpload
                      label="Photo of pickup location (optional)"
                      file={step1.fromImage}
                      inputRef={fromInputRef}
                      onChange={handleImageChange("fromImage")}
                      onRemove={() => removeImage("fromImage")}
                    />
                  </div>

                  {/* To */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-black text-[#D4A017] uppercase tracking-widest border-b border-[#D4A017]/20 pb-2">
                      To
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Postcode" required>
                        <input
                          type="text" name="toPostcode" required value={step1.toPostcode}
                          onChange={handleStep1Change} placeholder="e.g. E1 6AN"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Full Address" required>
                        <input
                          type="text" name="toLocation" required value={step1.toLocation}
                          onChange={handleStep1Change} placeholder="e.g. 221B Baker Street"
                          className={inputCls}
                        />
                      </Field>
                    </div>
                    <ImageUpload
                      label="Photo of drop-off location (optional)"
                      file={step1.toImage}
                      inputRef={toInputRef}
                      onChange={handleImageChange("toImage")}
                      onRemove={() => removeImage("toImage")}
                    />
                  </div>

                  {/* Service */}
                  <Field label="Service Required" required>
                    <select
                      name="service" required value={step1.service} onChange={handleStep1Change}
                      className={`${inputCls} appearance-none cursor-pointer`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#0a0a0a]">{s}</option>
                      ))}
                    </select>
                  </Field>

                  <button type="submit" className="w-full h-12 bg-[#D4A017] text-black font-black text-base uppercase tracking-widest hover:bg-[#F0C040] hover:shadow-[0_0_30px_rgba(212,160,23,0.4)] transition-all duration-300">
                    Next →
                  </button>
                </form>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <form onSubmit={handleSubmit} className="bg-[#111] border border-[#D4A017]/15 p-8 md:p-10 space-y-6">
                  <Field label="Full Name" required>
                    <input
                      type="text" name="name" required value={step2.name}
                      onChange={handleStep2Change} placeholder="John Smith"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Phone Number" required>
                    <input
                      type="tel" name="phone" required value={step2.phone}
                      onChange={handleStep2Change} placeholder="07X XXX XXXX"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Message / Details">
                    <textarea
                      name="message" value={step2.message} onChange={handleStep2Change} rows={4}
                      placeholder="Any additional details about your move — dates, special items, access info..."
                      className="w-full bg-[#0a0a0a] border border-[#222] text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#D4A017] transition-colors placeholder-gray-700 resize-none"
                    />
                  </Field>

                  {status === "error" && (
                    <p className="text-red-400 text-sm border border-red-400/30 bg-red-400/5 px-4 py-3">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="h-12 px-6 border border-[#D4A017]/30 text-[#D4A017] font-black text-sm uppercase tracking-widest hover:border-[#D4A017] hover:bg-[#D4A017]/5 transition-all duration-200"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex-1 h-12 bg-[#D4A017] text-black font-black text-base uppercase tracking-widest hover:bg-[#F0C040] hover:shadow-[0_0_30px_rgba(212,160,23,0.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : "Submit Request →"}
                    </button>
                  </div>

                  <p className="text-center text-gray-600 text-xs">
                    Or call us:{" "}
                    <a href="tel:0731234567" className="text-[#D4A017] font-bold hover:text-[#F0C040] transition-colors">
                      073 123 4567
                    </a>
                  </p>
                </form>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

const inputCls = "w-full h-12 bg-[#0a0a0a] border border-[#222] text-white px-4 text-sm focus:outline-none focus:border-[#D4A017] transition-colors placeholder-gray-700";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
        {label} {required && <span className="text-[#D4A017]">*</span>}
      </label>
      {children}
    </div>
  );
}

function StepPill({ number, label, active, done }: { number: number; label: string; active: boolean; done: boolean }) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <div className={`w-7 h-7 flex items-center justify-center text-xs font-black border transition-colors ${
        done ? "bg-[#D4A017] border-[#D4A017] text-black" :
        active ? "border-[#D4A017] text-[#D4A017]" :
        "border-[#333] text-gray-600"
      }`}>
        {done ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : number}
      </div>
      <span className={`text-xs font-bold uppercase tracking-widest ${active ? "text-white" : done ? "text-[#D4A017]" : "text-gray-600"}`}>
        {label}
      </span>
    </div>
  );
}

function ImageUpload({
  label,
  file,
  inputRef,
  onChange,
  onRemove,
}: {
  label: string;
  file: File | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
}) {
  const preview = file ? URL.createObjectURL(file) : null;

  return (
    <div>
      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{label}</p>
      {file ? (
        <div className="relative border border-[#D4A017]/30 bg-[#0a0a0a] p-3 flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview!} alt="preview" className="w-16 h-16 object-cover border border-[#222]" />
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-bold truncate">{file.name}</p>
            <p className="text-gray-600 text-xs">{(file.size / 1024).toFixed(0)} KB</p>
          </div>
          <button
            type="button"
            onClick={onRemove}
            className="shrink-0 w-8 h-8 flex items-center justify-center border border-red-500/30 text-red-400 hover:border-red-500 hover:bg-red-500/10 transition-colors text-sm font-bold"
          >
            ✕
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full border border-dashed border-[#333] hover:border-[#D4A017]/50 bg-[#0a0a0a] hover:bg-[#D4A017]/3 transition-all duration-200 py-6 flex flex-col items-center gap-2 group"
        >
          <svg className="w-6 h-6 text-gray-600 group-hover:text-[#D4A017] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span className="text-xs text-gray-600 group-hover:text-gray-400 font-bold uppercase tracking-widest transition-colors">
            Click to upload image
          </span>
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onChange}
      />
    </div>
  );
}
