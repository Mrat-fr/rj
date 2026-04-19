import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  quotes: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    service: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }),
});
