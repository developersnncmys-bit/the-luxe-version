import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, type Product } from "@/lib/content";
import { CategoryHero } from "@/components/collections/category/category-hero";
import { CategoryGrid } from "@/components/collections/category/category-grid";

type CategoryConfig = {
  filter: Product["category"];
  title: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
};

// Reshuffle-safe: adding a new category is a matter of a new entry here plus
// a matching value in `Product["category"]`. Unknown slugs 404 automatically.
const CATEGORIES: Record<string, CategoryConfig> = {
  sculptures: {
    filter: "Sculptures",
    title: "Sculptures",
    kicker: "The Collection · Objects",
    description:
      "Hand-carved and cast forms — the piece a room turns toward first. Walnut, travertine, cast bronze, each shaped to hold a corner or an entry.",
    image: "/images/sculptures/scu1.png",
    imageAlt: "A hand-carved walnut sculpture"
  },
  vases: {
    filter: "Vases",
    title: "Vases",
    kicker: "The Collection · Objects",
    description:
      "Vessels in ceramic, stone and glass — sculpture that holds. Wheel-thrown, hand-blown, bronze-glazed; scaled for the console, the sideboard, the low table.",
    image: "/images/vases/vase1.png",
    imageAlt: "A ceramic vessel"
  },
  figurines: {
    filter: "Figurines",
    title: "Figurines",
    kicker: "The Collection · Objects",
    description:
      "Small representational forms — quiet punctuation on a shelf. Bronze, alabaster, porcelain — the object at the edge of the bookcase, the desk, the bedside.",
    image: "/images/figurine-fauna.png",
    imageAlt: "A small figurine"
  },
  "decorative-objects": {
    filter: "Decorative Objects",
    title: "Decorative Objects",
    kicker: "The Collection · Objects",
    description:
      "Mirrors, trays and the quiet objects that finish the surfaces of a room. Framed in brass, blackened oak, or unlacquered edges that warm with time.",
    image: "/images/mirrors.png",
    imageAlt: "An arched mirror"
  },
  tabletop: {
    filter: "Tabletop",
    title: "Tabletop",
    kicker: "The Collection · Objects",
    description:
      "Vessels and forms scaled for the dining table — service as composition. Stoneware chargers, hand-blown carafes, undyed linen runners.",
    image: "/images/table-top/table1.png",
    imageAlt: "A stoneware charger"
  },
  lighting: {
    filter: "Lighting",
    title: "Lighting",
    kicker: "The Collection",
    description:
      "Chandeliers, pendants and lamps — light that draws a room together. Hand-blown glass, unlacquered brass, warm to read by.",
    image: "/images/lighting/light1.png",
    imageAlt: "A sculptural chandelier"
  }
};

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export function generateMetadata({
  params
}: {
  params: { category: string };
}): Metadata {
  const cfg = CATEGORIES[params.category];
  if (!cfg) return { title: "Not found — The Luxe Version" };
  return {
    title: `${cfg.title} — The Luxe Version`,
    description: cfg.description
  };
}

export default function CategoryPage({
  params
}: {
  params: { category: string };
}) {
  const cfg = CATEGORIES[params.category];
  if (!cfg) notFound();

  const products = PRODUCTS.filter((p) => p.category === cfg.filter);

  return (
    <>
      <CategoryHero
        kicker={cfg.kicker}
        title={cfg.title}
        description={cfg.description}
        image={cfg.image}
        imageAlt={cfg.imageAlt}
      />
      <CategoryGrid products={products} />
    </>
  );
}
