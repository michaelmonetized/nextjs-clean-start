export type DesignCategory =
  | "hospitality"
  | "contractors"
  | "professionals"
  | "saas";

export interface DesignMockup {
  slug: string;
  title: string;
  category: DesignCategory;
  description: string;
  image: string;
  tags: string[];
  url: string;
}

export const CATEGORIES: { value: DesignCategory | "all"; label: string }[] = [
  { value: "all", label: "All Designs" },
  { value: "hospitality", label: "Hospitality" },
  { value: "contractors", label: "Contractors" },
  { value: "professionals", label: "Professionals" },
  { value: "saas", label: "SaaS" },
];

export const designs: DesignMockup[] = [
  {
    slug: "mountain-lodge-retreat",
    title: "Mountain Lodge Retreat",
    category: "hospitality",
    description:
      "Warm, atmospheric booking experience for a luxury mountain lodge with seasonal availability and immersive photography.",
    image:
      "https://via.placeholder.com/800x600/1e1e2e/cdd6f4?text=Mountain+Lodge+Retreat",
    tags: ["responsive", "dark-mode", "booking", "atmospheric"],
    url: "https://mountainlodgeretreat.example.com",
  },
  {
    slug: "coastal-inn-collection",
    title: "Coastal Inn Collection",
    category: "hospitality",
    description:
      "Breezy coastal aesthetic for a boutique inn chain. Tidal color palette with smooth scroll-driven room galleries.",
    image:
      "https://via.placeholder.com/800x600/313244/89dceb?text=Coastal+Inn+Collection",
    tags: ["responsive", "modern", "gallery", "scroll-driven"],
    url: "https://coastalinncollection.example.com",
  },
  {
    slug: "urban-bistro-hub",
    title: "Urban Bistro Hub",
    category: "hospitality",
    description:
      "Bold typographic menu system for an upscale urban bistro. Reservation flow with real-time table availability.",
    image:
      "https://via.placeholder.com/800x600/45475a/f9e2af?text=Urban+Bistro+Hub",
    tags: ["typography", "bold", "reservation", "real-time"],
    url: "https://urbanbistrohub.example.com",
  },
  {
    slug: "ironworks-construction",
    title: "Ironworks Construction",
    category: "contractors",
    description:
      "Industrial-strength portfolio for a general contractor. Project timeline visualization and before/after comparisons.",
    image:
      "https://via.placeholder.com/800x600/585b70/fab387?text=Ironworks+Construction",
    tags: ["industrial", "portfolio", "timeline", "comparison"],
    url: "https://ironworksconstruction.example.com",
  },
  {
    slug: "apex-roofing-pros",
    title: "Apex Roofing Pros",
    category: "contractors",
    description:
      "High-converting lead generation site for residential roofing. Instant quote calculator with satellite imagery integration.",
    image:
      "https://via.placeholder.com/800x600/6c7086/a6e3a1?text=Apex+Roofing+Pros",
    tags: ["lead-gen", "calculator", "conversion", "clean"],
    url: "https://apexroofingpros.example.com",
  },
  {
    slug: "precision-electric",
    title: "Precision Electric Co",
    category: "contractors",
    description:
      "Service-area map with emergency dispatch integration for a commercial electrical contractor. 24/7 booking flow.",
    image:
      "https://via.placeholder.com/800x600/7f849c/f5c2e7?text=Precision+Electric+Co",
    tags: ["service-area", "emergency", "map", "booking"],
    url: "https://precisionelectric.example.com",
  },
  {
    slug: "sterling-law-group",
    title: "Sterling Law Group",
    category: "professionals",
    description:
      "Authoritative yet approachable presence for a mid-size law firm. Case study showcase with attorney profile cards.",
    image:
      "https://via.placeholder.com/800x600/9399b2/cba6f7?text=Sterling+Law+Group",
    tags: ["authoritative", "case-study", "profiles", "accessible"],
    url: "https://sterlinglawgroup.example.com",
  },
  {
    slug: "clarity-wealth-advisors",
    title: "Clarity Wealth Advisors",
    category: "professionals",
    description:
      "Trust-first financial advisory site with interactive retirement planning tools and compliance-safe content blocks.",
    image:
      "https://via.placeholder.com/800x600/bac2de/89b4fa?text=Clarity+Wealth+Advisors",
    tags: ["trust", "interactive", "planning", "compliance"],
    url: "https://claritywealthadvisors.example.com",
  },
  {
    slug: "pulse-analytics-platform",
    title: "Pulse Analytics Platform",
    category: "saas",
    description:
      "Data-dense dashboard marketing site for a real-time analytics SaaS. Animated metric counters and live demo embed.",
    image:
      "https://via.placeholder.com/800x600/cdd6f4/1e1e2e?text=Pulse+Analytics+Platform",
    tags: ["data-dense", "dashboard", "animated", "live-demo"],
    url: "https://pulseanalytics.example.com",
  },
  {
    slug: "shipwright-devops",
    title: "Shipwright DevOps",
    category: "saas",
    description:
      "Developer-focused CI/CD platform site with terminal-aesthetic code examples and usage-based pricing calculator.",
    image:
      "https://via.placeholder.com/800x600/11111b/a6e3a1?text=Shipwright+DevOps",
    tags: ["developer", "terminal", "pricing", "code-examples"],
    url: "https://shipwrightdevops.example.com",
  },
];

export function getDesignBySlug(slug: string): DesignMockup | undefined {
  return designs.find((d) => d.slug === slug);
}

export function getDesignsByCategory(
  category: DesignCategory | "all"
): DesignMockup[] {
  if (category === "all") return designs;
  return designs.filter((d) => d.category === category);
}
