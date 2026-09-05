import type { Metadata } from "next";
import { EDITS, PRODUCTS, type Product } from "@/lib/content";
import { EditHero } from "@/components/edit/edit-hero";
import { EditIntro } from "@/components/edit/edit-intro";
import { EditSection } from "@/components/edit/edit-section";
import { EditClosing } from "@/components/edit/edit-closing";

export const metadata: Metadata = {
  title: "The Edit — The Luxe Version",
  description: "A selection of objects chosen for the season."
};

export default function EditPage() {
  // Per-category rotation: each time a category is picked (across all edits)
  // we advance to the next product in that category, wrapping at the end.
  // Result: chandelier-verre appears in the first edit that uses Lighting,
  // table-lamp-alba in the second, pendant-lume in the third, etc. Different
  // edits see different pieces even when they share categories.
  const cursor = new Map<Product["category"], number>();
  const resolveEdit = (categories: Product["category"][]) =>
    categories
      .map((cat) => {
        const inCat = PRODUCTS.filter((p) => p.category === cat);
        if (inCat.length === 0) return undefined;
        const i = cursor.get(cat) ?? 0;
        cursor.set(cat, i + 1);
        return inCat[i % inCat.length];
      })
      .filter((p): p is Product => p !== undefined);

  return (
    <>
      <EditHero />
      <EditIntro />
      {EDITS.map((edit, i) => (
        <EditSection
          key={edit.slug}
          id={edit.slug}
          number={edit.number}
          title={edit.title}
          intro={edit.intro}
          products={resolveEdit(edit.categories)}
          mirror={i % 2 === 1}
        />
      ))}
      <EditClosing />
    </>
  );
}
