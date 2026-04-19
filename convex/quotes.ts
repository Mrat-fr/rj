import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submitQuote = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    service: v.string(),
    message: v.string(),
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
