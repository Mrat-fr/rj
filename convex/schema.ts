import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  quotes: defineTable({
    name: v.string(),
    email: v.optional(v.string()),
    phone: v.string(),
    service: v.string(),
    message: v.optional(v.string()),
    fromPostcode: v.string(),
    fromLocation: v.string(),
    toPostcode: v.string(),
    toLocation: v.string(),
    fromImageId: v.optional(v.id("_storage")),
    toImageId: v.optional(v.id("_storage")),
    createdAt: v.number(),
  }),
});
