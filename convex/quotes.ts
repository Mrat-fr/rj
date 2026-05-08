import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const submitQuote = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    service: v.string(),
    message: v.optional(v.string()),
    fromPostcode: v.string(),
    fromLocation: v.string(),
    toPostcode: v.string(),
    toLocation: v.string(),
    fromImageId: v.optional(v.id("_storage")),
    toImageId: v.optional(v.id("_storage")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("quotes", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const listQuotes = query({
  handler: async (ctx) => {
    return await ctx.db.query("quotes").order("desc").collect();
  },
});

export const getImageUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

export const deleteQuote = mutation({
  args: { quoteId: v.id("quotes") },
  handler: async (ctx, args) => {
    const quote = await ctx.db.get(args.quoteId);
    if (!quote) throw new Error("Quote not found");
    if (quote.fromImageId) await ctx.storage.delete(quote.fromImageId);
    if (quote.toImageId) await ctx.storage.delete(quote.toImageId);
    await ctx.db.delete(args.quoteId);
  },
});
