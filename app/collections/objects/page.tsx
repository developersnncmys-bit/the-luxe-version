import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/content";
import { ObjectsHero } from "@/components/collections/objects/objects-hero";
import { ObjectsCatalog } from "@/components/collections/objects/objects-catalog";

export const metadata: Metadata = {
  title: "Objects — The Luxe Version",
  description:
    "Sculptures, vases, figurines, decorative pieces and tabletop — the objects that finish a room."
};

export default function ObjectsPage() {
  // All non-lighting products belong to the Objects umbrella.
  const objects = PRODUCTS.filter((p) => p.category !== "Lighting");

  return (
    <>
      <ObjectsHero />
      <ObjectsCatalog products={objects} />
    </>
  );
}
