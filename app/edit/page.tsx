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
  const productByHandle = new Map(PRODUCTS.map((p) => [p.handle, p]));

  return (
    <>
      <EditHero />
      <EditIntro />
      {EDITS.map((edit, i) => {
        const products = edit.productHandles
          .map((h) => productByHandle.get(h))
          .filter((p): p is Product => p !== undefined);
        return (
          <EditSection
            key={edit.slug}
            id={edit.slug}
            number={edit.number}
            title={edit.title}
            intro={edit.intro}
            products={products}
            mirror={i % 2 === 1}
          />
        );
      })}
      <EditClosing />
    </>
  );
}
