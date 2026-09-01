export type Product = {
  handle: string;
  name: string;
  category: string;
  description: string;
  price: { inr: number; usd: number };
  image: string;
  aspect: "portrait" | "landscape" | "square";
};

// Curated stand-ins. Client-facing: replace with brand photography.
export const PRODUCTS: Product[] = [
  {
    handle: "sofa-halden",
    name: "Sofa — Halden",
    category: "Furniture",
    description:
      "A low-profile bouclé sofa in cream, on tapered oak legs. Sized for a reading nook or a compact living room.",
    price: { inr: 184000, usd: 2280 },
    image:
      "/images/sofa.png",
    aspect: "portrait"
  },
  {
    handle: "table-lamp-alba",
    name: "Table Lamp — Alba",
    category: "Lighting",
    description:
      "A brass table lamp with an ivory linen shade. Warm enough to read by — for the side table or the console.",
    price: { inr: 68000, usd: 840 },
    image:
      "/images/Lume-Alba.png",
    aspect: "portrait"
  },
  {
    handle: "sculpture-ondu",
    name: "Sculpture — Ondu",
    category: "Objects",
    description:
      "A hand-carved walnut sculpture in a dark oil finish. A single graphic form — for a mantel, an entry, or a corner that wants a line.",
    price: { inr: 96000, usd: 1180 },
    image:
      "/images/sculpture.png",
    aspect: "portrait"
  },
  {
    handle: "dining-table-solstice",
    name: "Dining Table — Solstice",
    category: "Furniture",
    description:
      "A round oak dining table on a pedestal base. Seats four to six — for the eat-in kitchen or the compact dining room.",
    price: { inr: 214000, usd: 2650 },
    image:
      "/images/dining.png",
    aspect: "landscape"
  },
  {
    handle: "floor-rug-cendre",
    name: "Floor Rug — Cendre",
    category: "Textiles",
    description:
      "A hand-loomed wool rug in warm ash tones. Low pile — for high-traffic rooms and layering over hardwood.",
    price: { inr: 92000, usd: 1140 },
    image:
      "/images/floor-rugs.png",
    aspect: "square"
  },
  {
    handle: "mirror-solis",
    name: "Mirror — Solis",
    category: "Pieces",
    description:
      "A tall arched mirror framed in unlacquered brass — the kind that warms with time. For entryways and dressing rooms.",
    price: { inr: 96000, usd: 1180 },
    image:
      "/images/mirrors.png",
    aspect: "portrait"
  }
];

export const JOURNAL_ENTRIES = [
  {
    slug: "on-the-brass-lamp",
    kicker: "Guide",
    title: "On the brass lamp",
    excerpt:
      "Which brass floor lamp fits which reading chair — scale, arm reach, and shade height.",
    image:
      "/images/studio-lamp.png"
  },
  {
    slug: "on-the-small-balcony",
    kicker: "Guide",
    title: "On the small balcony",
    excerpt:
      "Turning a narrow balcony into an outdoor room — a chair, a lamp, a small table by the view.",
    image:
      "/images/studio-balcony.png"
  },
  {
    slug: "on-the-wall-above-the-sofa",
    kicker: "Guide",
    title: "On the wall above the sofa",
    excerpt:
      "How to choose one sculptural piece that anchors the wall without competing with the sofa below it.",
    image:
      "/images/studio-wall.png"
  },
  {
    slug: "on-the-dining-chandelier",
    kicker: "Guide",
    title: "On the dining chandelier",
    excerpt:
      "Choosing a chandelier for the dining table — length, drop height, and the light it should give at eight.",
    image:
      "/images/studio-convers.png"
  }
];
