"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { UserButton } from "@clerk/nextjs";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import QuoteImage from "@/components/QuoteImage";
import Link from "next/link";

const services = [
  "Waste Removals",
  "House Removals",
  "Office Removals",
  "Load & Unload",
  "Other",
];

const inputCls =
  "w-full h-12 bg-[#0a0a0a] border border-[#222] text-white px-4 text-sm focus:outline-none focus:border-[#D4A017] transition-colors placeholder-gray-700";

export default function AdminPage() {
  const quotes = useQuery(api.quotes.listQuotes);
  const deleteQuoteMutation = useMutation(api.quotes.deleteQuote);

  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const filtered = quotes?.filter((q) => {
    if (serviceFilter && q.service !== serviceFilter) return false;
    if (search) {
      const term = search.toLowerCase();
      return (
        q.name.toLowerCase().includes(term) ||
        q.phone.toLowerCase().includes(term) ||
        q.fromLocation.toLowerCase().includes(term) ||
        q.toLocation.toLowerCase().includes(term) ||
        q.fromPostcode.toLowerCase().includes(term) ||
        q.toPostcode.toLowerCase().includes(term)
      );
    }
    return true;
  });

  const handleDelete = async (quoteId: Id<"quotes">) => {
    setDeletingId(quoteId);
    try {
      await deleteQuoteMutation({ quoteId });
      setConfirmDeleteId(null);
      setExpandedId(null);
    } catch {
      // mutation failed — Convex will log the error
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <section className="relative pt-16 pb-12 bg-[#0d0d0d] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.07),transparent_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-[#D4A017] transition-colors mb-8"
          >
            ← Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl md:text-4xl font-black text-white leading-none">
              QUOTE <span className="gold-text">SUBMISSIONS</span>
            </h1>
            {quotes && (
              <span className="inline-flex items-center gap-1.5 border border-[#D4A017]/30 bg-[#D4A017]/8 px-3 py-1">
                <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
                <span className="text-[#D4A017] text-xs font-black tracking-widest">
                  {quotes.length}
                </span>
              </span>
            )}
            <div className="ml-auto">
              <UserButton />
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            Manage and review incoming quote requests.
          </p>
        </div>
      </section>

      {/* Filters + Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by name, phone, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`${inputCls} sm:max-w-sm`}
          />
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className={`${inputCls} sm:max-w-[200px] appearance-none cursor-pointer`}
          >
            <option value="">All Services</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-[#0a0a0a]">
                {s}
              </option>
            ))}
          </select>
          {filtered && quotes && (
            <span className="self-center text-gray-600 text-xs font-bold tracking-widest ml-auto">
              Showing {filtered.length} of {quotes.length}
            </span>
          )}
        </div>

        {/* Loading state */}
        {quotes === undefined && (
          <div className="bg-[#111] border border-[#D4A017]/15 p-6 space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-14 bg-[#1a1a1a] animate-pulse" />
            ))}
          </div>
        )}

        {/* Empty state */}
        {filtered && filtered.length === 0 && (
          <div className="bg-[#111] border border-[#D4A017]/15 p-16 text-center">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
              {quotes?.length === 0
                ? "No quotes yet"
                : "No quotes match your filters"}
            </p>
          </div>
        )}

        {/* Quote list */}
        {filtered && filtered.length > 0 && (
          <div className="bg-[#111] border border-[#D4A017]/15">
            {/* Table header — desktop only */}
            <div className="hidden md:grid grid-cols-[1.2fr_1fr_1fr_1.2fr_1.2fr_0.8fr_40px] gap-4 px-6 py-3 border-b border-[#222] text-xs font-black text-gray-500 uppercase tracking-widest">
              <span>Name</span>
              <span>Phone</span>
              <span>Service</span>
              <span>From</span>
              <span>To</span>
              <span>Date</span>
              <span />
            </div>

            {filtered.map((q) => {
              const isExpanded = expandedId === q._id;
              return (
                <div key={q._id} className="border-b border-[#222] last:border-b-0">
                  {/* Row */}
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedId(isExpanded ? null : q._id)
                    }
                    className="w-full text-left hover:bg-[#D4A017]/3 transition-colors"
                  >
                    {/* Desktop row */}
                    <div className="hidden md:grid grid-cols-[1.2fr_1fr_1fr_1.2fr_1.2fr_0.8fr_40px] gap-4 px-6 py-4 items-center">
                      <span className="text-white font-bold text-sm truncate">
                        {q.name}
                      </span>
                      <span className="text-gray-400 text-sm truncate">
                        {q.phone}
                      </span>
                      <span>
                        <span className="inline-block border border-[#D4A017]/30 bg-[#D4A017]/8 text-[#D4A017] text-xs font-black px-2 py-0.5 tracking-wider">
                          {q.service}
                        </span>
                      </span>
                      <span className="text-gray-400 text-sm truncate">
                        {q.fromPostcode}
                      </span>
                      <span className="text-gray-400 text-sm truncate">
                        {q.toPostcode}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {new Date(q.createdAt).toLocaleDateString("en-GB")}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {isExpanded ? "▲" : "▼"}
                      </span>
                    </div>

                    {/* Mobile card */}
                    <div className="md:hidden px-5 py-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-sm">
                          {q.name}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {isExpanded ? "▲" : "▼"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-block border border-[#D4A017]/30 bg-[#D4A017]/8 text-[#D4A017] text-xs font-black px-2 py-0.5 tracking-wider">
                          {q.service}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {new Date(q.createdAt).toLocaleDateString("en-GB")}
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs">
                        {q.fromPostcode} → {q.toPostcode}
                      </p>
                    </div>
                  </button>

                  {/* Expanded details */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#222] bg-[#0d0d0d] space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Detail label="Full Name" value={q.name} />
                        <Detail label="Phone" value={q.phone} />
                        <Detail label="Service" value={q.service} />
                        <Detail
                          label="Submitted"
                          value={new Date(q.createdAt).toLocaleString("en-GB")}
                        />
                        <Detail
                          label="From"
                          value={`${q.fromPostcode} — ${q.fromLocation}`}
                        />
                        <Detail
                          label="To"
                          value={`${q.toPostcode} — ${q.toLocation}`}
                        />
                        {q.message && (
                          <div className="sm:col-span-2">
                            <Detail label="Message" value={q.message} />
                          </div>
                        )}
                      </div>

                      {/* Images */}
                      {(q.fromImageId || q.toImageId) && (
                        <div className="space-y-3">
                          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                            Attached Images
                          </h4>
                          <div className="flex flex-wrap gap-4">
                            {q.fromImageId && (
                              <div>
                                <p className="text-xs text-gray-600 mb-1">
                                  Pickup
                                </p>
                                <QuoteImage
                                  storageId={
                                    q.fromImageId as Id<"_storage">
                                  }
                                />
                              </div>
                            )}
                            {q.toImageId && (
                              <div>
                                <p className="text-xs text-gray-600 mb-1">
                                  Drop-off
                                </p>
                                <QuoteImage
                                  storageId={
                                    q.toImageId as Id<"_storage">
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Delete */}
                      <div className="pt-4 border-t border-[#222]">
                        {confirmDeleteId === q._id ? (
                          <div className="flex items-center gap-3">
                            <span className="text-red-400 text-sm font-bold">
                              Delete this quote?
                            </span>
                            <button
                              onClick={() =>
                                handleDelete(q._id as Id<"quotes">)
                              }
                              disabled={deletingId === q._id}
                              className="h-9 px-4 border border-red-500 text-red-400 text-xs font-black uppercase tracking-widest hover:bg-red-500/10 transition-colors disabled:opacity-50"
                            >
                              {deletingId === q._id
                                ? "Deleting..."
                                : "Confirm"}
                            </button>
                            <button
                              onClick={() => setConfirmDeleteId(null)}
                              className="h-9 px-4 border border-[#333] text-gray-400 text-xs font-black uppercase tracking-widest hover:border-[#555] transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setConfirmDeleteId(q._id)}
                            className="h-9 px-4 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-widest hover:border-red-500 hover:bg-red-500/10 transition-colors"
                          >
                            Delete Quote
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-white text-sm">{value}</p>
    </div>
  );
}
