export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  includes: { label: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "waste-removals",
    title: "Waste Removals",
    subtitle: "Fast, responsible clearance",
    description: "Fast, responsible clearance for homes and businesses. We handle it all so you don't have to.",
    longDescription:
      "Whether you're clearing out after a renovation, decluttering before a move, or managing a full commercial clearance, our waste removal team gets it done quickly and responsibly. We sort, load, and dispose of your waste — so you don't have to lift a finger.",
    features: [
      "Same-day and next-day availability",
      "Full house and garden clearances",
      "Commercial and office waste",
      "Responsible recycling & disposal",
      "No hidden fees — fixed pricing",
    ],
    includes: [
      { label: "House Clearance", detail: "Full or partial clearance of any property" },
      { label: "Garden Waste", detail: "Green waste, soil, branches, and furniture" },
      { label: "Commercial Waste", detail: "Office clearouts, retail, and industrial" },
      { label: "Bulky Items", detail: "Sofas, appliances, mattresses, and more" },
    ],
  },
  {
    slug: "house-removals",
    title: "House Removals",
    subtitle: "Stress-free home moves",
    description: "Stress-free home moves handled with care. We pack, load, transport, and unload — safely every time.",
    longDescription:
      "Moving home is one of life's biggest events — we make sure it's a smooth one. Our experienced team handles everything from careful packing to safe transport and unloading at your new place. We treat your belongings as if they were our own.",
    features: [
      "Professional packing service available",
      "Careful handling of fragile items",
      "Fully insured moves",
      "Local and long-distance",
      "Flexible scheduling including weekends",
    ],
    includes: [
      { label: "Packing & Wrapping", detail: "We pack and protect your belongings" },
      { label: "Loading & Transport", detail: "Safe loading and secure transit" },
      { label: "Unloading & Placement", detail: "Placed exactly where you want them" },
      { label: "Furniture Assembly", detail: "Disassemble and reassemble as needed" },
    ],
  },
  {
    slug: "office-removals",
    title: "Office Removals",
    subtitle: "Efficient office relocations",
    description: "Efficient office relocations to minimise downtime. Your business keeps moving, and so do we.",
    longDescription:
      "We understand that time is money. Our office relocation service is built around minimising disruption to your business. We work around your schedule — including evenings and weekends — to ensure you're up and running in your new space as fast as possible.",
    features: [
      "Out-of-hours moves to avoid downtime",
      "IT equipment handled with care",
      "Labelling and inventory systems",
      "Fully insured commercial moves",
      "Small offices to large corporate relocations",
    ],
    includes: [
      { label: "Desk & Chair Moves", detail: "Full office furniture relocation" },
      { label: "IT & Equipment", detail: "Safe packing of computers and servers" },
      { label: "Filing & Archives", detail: "Organised transfer of documents" },
      { label: "Storage Solutions", detail: "Short-term storage between offices" },
    ],
  },
  {
    slug: "load-unload",
    title: "Load & Unload",
    subtitle: "A helping hand with the heavy lifting",
    description: "Need a hand with the heavy lifting? Our team loads and unloads quickly, carefully, every time.",
    longDescription:
      "Already have a van or container but need a team to handle the heavy lifting? We provide skilled, reliable labour for loading and unloading — whether it's a single delivery, a self-hire van, or a shipping container. No job too big, no job too small.",
    features: [
      "Flexible hourly booking",
      "Two-man or larger teams available",
      "Works with your own transport",
      "Available for storage unit moves",
      "Same-day availability",
    ],
    includes: [
      { label: "Van Loading", detail: "Efficient loading of hire vans and trucks" },
      { label: "Container Unloading", detail: "Storage containers and shipping loads" },
      { label: "Furniture Moving", detail: "Heavy item repositioning within a property" },
      { label: "Delivery Assistance", detail: "Help receiving large deliveries" },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
