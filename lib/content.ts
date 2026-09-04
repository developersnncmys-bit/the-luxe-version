export type Product = {
  handle: string;
  name: string;
  category:
    | "Sculptures"
    | "Vases"
    | "Figurines"
    | "Decorative Objects"
    | "Tabletop"
    | "Lighting";
  description: string;
  price: { inr: number; usd: number };
  image: string;
  aspect: "portrait" | "landscape" | "square";
};

// Curated stand-ins. Client-facing: replace with brand photography.
export const PRODUCTS: Product[] = [
  {
    handle: "chandelier-verre",
    name: "Chandelier — Verre",
    category: "Lighting",
    description:
      "A hand-blown glass chandelier in warm brass. Suspended presence for the dining table or a double-height entry.",
    price: { inr: 328000, usd: 4050 },
    image: "/images/lighting/light1.png",
    aspect: "portrait"
  },
  {
    handle: "table-lamp-alba",
    name: "Table Lamp — Alba",
    category: "Lighting",
    description:
      "A brass table lamp with an ivory linen shade. Warm enough to read by — for the side table or the console.",
    price: { inr: 68000, usd: 840 },
    image: "/images/lighting/light2.png",
    aspect: "portrait"
  },
  {
    handle: "sculpture-ondu",
    name: "Sculpture — Ondu",
    category: "Sculptures",
    description:
      "A hand-carved walnut sculpture in a dark oil finish. A single graphic form — for a mantel, an entry, or a corner that wants a line.",
    price: { inr: 96000, usd: 1180 },
    image: "/images/sculptures/scu1.png",
    aspect: "portrait"
  },
  {
    handle: "pendant-lume",
    name: "Pendant — Lume",
    category: "Lighting",
    description:
      "A single-drop pendant in unlacquered brass. Reads as jewellery for the room — above a console, a bar, or a corner reading chair.",
    price: { inr: 84000, usd: 1040 },
    image: "/images/lighting/light3.png",
    aspect: "portrait"
  },
  {
    handle: "objet-sillon",
    name: "Objet — Sillon",
    category: "Sculptures",
    description:
      "A sculpted seated form in cast bronze. For the console, the mantelpiece, or the low bookshelf that needs one thing done well.",
    price: { inr: 128000, usd: 1580 },
    image: "/images/sculptures/scu2.png",
    aspect: "portrait"
  },
  {
    handle: "mirror-solis",
    name: "Mirror — Solis",
    category: "Decorative Objects",
    description:
      "A tall arched mirror framed in unlacquered brass — the kind that warms with time. For entryways and dressing rooms.",
    price: { inr: 96000, usd: 1180 },
    image: "/images/mirrors.png",
    aspect: "portrait"
  },
  {
    handle: "objet-vestige",
    name: "Objet — Vestige",
    category: "Vases",
    description:
      "A vessel in hand-thrown ceramic with a matte oxide glaze. Reads as sculpture on a shelf, quiet on a low table.",
    price: { inr: 74000, usd: 910 },
    image: "/images/vases/vase1.png",
    aspect: "portrait"
  },
  {
    handle: "mirror-halo",
    name: "Mirror — Halo",
    category: "Decorative Objects",
    description:
      "A circular mirror set in a slim brass rim. Reads as a drawing on the wall — a single line, a held moment of light.",
    price: { inr: 82000, usd: 1010 },
    image: "/images/mirror-halo.png",
    aspect: "portrait"
  },
  {
    handle: "mirror-lune",
    name: "Mirror — Lune",
    category: "Decorative Objects",
    description:
      "A freestanding cheval mirror in blackened oak, hand-oiled. For the dressing corner, the bedroom, the quiet end of a hall.",
    price: { inr: 138000, usd: 1700 },
    image: "/images/mirror-lune.png",
    aspect: "portrait"
  },
  {
    handle: "sculpture-monolith",
    name: "Sculpture — Monolith",
    category: "Sculptures",
    description:
      "A carved travertine column, upright and quiet. A single vertical gesture — for a corner, an entry, or the room that wants a still figure.",
    price: { inr: 148000, usd: 1820 },
    image: "/images/sculptures/scu3.png",
    aspect: "portrait"
  },
  {
    handle: "vase-ondule",
    name: "Vase — Ondulé",
    category: "Vases",
    description:
      "A rippled stoneware vase, wheel-thrown and unglazed. For the console, the sideboard, the shelf that wants weight and quiet.",
    price: { inr: 58000, usd: 720 },
    image: "/images/vases/vase2.png",
    aspect: "portrait"
  },
  {
    handle: "vase-obra",
    name: "Vase — Obra",
    category: "Vases",
    description:
      "A tall bronze-glazed vessel with a narrow throat. Reads sculptural empty; holds a single stem beautifully.",
    price: { inr: 96000, usd: 1180 },
    image: "/images/vases/vase3.png",
    aspect: "portrait"
  },
  {
    handle: "figurine-fauna",
    name: "Figurine — Fauna",
    category: "Figurines",
    description:
      "A small bronze animal figure, patinated by hand. For the shelf edge, the desk, the bookcase that wants a single occupant.",
    price: { inr: 42000, usd: 520 },
    image: "/images/figurine-fauna.png",
    aspect: "portrait"
  },
  {
    handle: "figurine-anima",
    name: "Figurine — Anima",
    category: "Figurines",
    description:
      "A hand-carved alabaster form — a small figure, softly modelled. Casts a low interior light when placed near a lamp.",
    price: { inr: 54000, usd: 670 },
    image: "/images/figurine-anima.png",
    aspect: "portrait"
  },
  {
    handle: "figurine-perle",
    name: "Figurine — Perle",
    category: "Figurines",
    description:
      "A porcelain pear on a low walnut plinth. A quiet gift for a bedside, an entry table, a writing desk.",
    price: { inr: 38000, usd: 470 },
    image: "/images/figurine-perle.png",
    aspect: "portrait"
  },
  {
    handle: "charger-terra",
    name: "Charger — Terra",
    category: "Tabletop",
    description:
      "A wide stoneware charger in matte oxide. Sits under the dinner plate; reads as a low sculpture the rest of the day.",
    price: { inr: 32000, usd: 400 },
    image: "/images/table-top/table1.png",
    aspect: "portrait"
  },
  {
    handle: "carafe-verre",
    name: "Carafe — Verre",
    category: "Tabletop",
    description:
      "A hand-blown water carafe with a slightly gathered neck. For the dinner table, the desk, the bedside.",
    price: { inr: 28000, usd: 350 },
    image: "/images/table-top/table2.png",
    aspect: "portrait"
  },
  {
    handle: "runner-bruma",
    name: "Runner — Bruma",
    category: "Tabletop",
    description:
      "A long linen runner in undyed flax, hand-hemmed. Softens the wood, holds the plates, wears in with use.",
    price: { inr: 24000, usd: 300 },
    image: "/images/table-top/table3.png",
    aspect: "portrait"
  }
];

// Editorial curation layer — reorderable seasonal picks. A given product can
// appear in more than one edit. Update `productHandles` each season to reshuffle.
export type EditSelection = {
  slug: string;
  number: string;
  title: string;
  intro: string;
  productHandles: string[];
};

export const EDITS: EditSelection[] = [
  {
    slug: "statement",
    number: "01",
    title: "Statement pieces",
    intro:
      "The pieces that command a room — a chandelier, a mirror, a sculpted form scaled to be seen.",
    productHandles: ["chandelier-verre", "sculpture-ondu", "mirror-solis"]
  },
  {
    slug: "new",
    number: "02",
    title: "New pieces",
    intro:
      "This season's new work — recent arrivals from the studio floor.",
    productHandles: ["pendant-lume", "objet-sillon"]
  },
  {
    slug: "limited",
    number: "03",
    title: "Limited pieces",
    intro:
      "Small editions and one-of-one commissions — signed, numbered, brief.",
    productHandles: ["chandelier-verre", "objet-sillon"]
  },
  {
    slug: "designer",
    number: "04",
    title: "Designer pieces",
    intro:
      "Signature works from the studio — the pieces the house is known for.",
    productHandles: ["sculpture-ondu", "table-lamp-alba", "mirror-solis"]
  }
];

export const JOURNAL_ENTRIES = [
  {
    slug: "on-the-brass-lamp",
    kicker: "Guide",
    title: "On the brass lamp",
    excerpt:
      "Which brass lamp fits which reading chair — scale, arm reach, and shade height.",
    image: "/images/lighting/light1.png"
  },
  {
    slug: "on-the-mantel-object",
    kicker: "Guide",
    title: "On the mantel object",
    excerpt:
      "Choosing one sculptural piece for the mantel — proportion, weight, and the shadow it casts at dusk.",
    image: "/images/sculptures/scu1.png"
  },
  {
    slug: "at-the-ceramics-kiln",
    kicker: "Studio",
    title: "At the ceramics kiln",
    excerpt:
      "A morning inside the small studio where our vessels are thrown, glazed and fired.",
    image: "/images/vases/vase1.png"
  },
  {
    slug: "on-the-wall-piece",
    kicker: "Guide",
    title: "On the wall piece",
    excerpt:
      "How to choose one sculptural piece that anchors the wall — without competing with the room below it.",
    image: "/images/sculptures/scu2.png"
  },
  {
    slug: "a-house-in-the-hills",
    kicker: "Interior",
    title: "A house in the hills",
    excerpt:
      "The Verre chandelier at rest — a long lens on the room that first commissioned it.",
    image: "/images/lighting/light2.png"
  },
  {
    slug: "on-the-dining-chandelier",
    kicker: "Guide",
    title: "On the dining chandelier",
    excerpt:
      "Choosing a chandelier for the dining table — length, drop height, and the light it should give at eight.",
    image: "/images/lighting/light3.png"
  },
  {
    slug: "the-case-for-unlacquered-brass",
    kicker: "Craft",
    title: "The case for unlacquered brass",
    excerpt:
      "On the finish that ages with the room instead of resisting it — and why we choose it every time.",
    image: "/images/table-top/table1.png"
  },
  {
    slug: "the-making-of-the-sillon",
    kicker: "Object",
    title: "The making of the Sillon",
    excerpt:
      "From clay maquette to cast bronze — the year-long path of a single sculpted seat.",
    image: "/images/sculptures/scu3.png"
  },
  {
    slug: "in-the-workshop-with-louis",
    kicker: "Conversation",
    title: "In the workshop with Louis",
    excerpt:
      "A morning with the glassblower who shapes every leaf of the Verre chandelier by hand.",
    image: "/images/vases/vase2.png"
  }
];
