"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

export default function QuoteImage({ storageId }: { storageId: Id<"_storage"> }) {
  const url = useQuery(api.quotes.getImageUrl, { storageId });

  if (url === undefined) {
    return (
      <div className="w-48 h-32 bg-[#1a1a1a] border border-[#222] animate-pulse" />
    );
  }

  if (url === null) {
    return (
      <div className="w-48 h-32 bg-[#1a1a1a] border border-[#222] flex items-center justify-center text-gray-600 text-xs">
        Image not found
      </div>
    );
  }

  return (
    <img
      src={url}
      alt="Quote attachment"
      className="max-w-xs max-h-64 object-contain border border-[#222] cursor-pointer hover:border-[#D4A017]/50 transition-colors"
      onClick={() => window.open(url, "_blank")}
    />
  );
}
