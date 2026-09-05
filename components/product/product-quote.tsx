"use client";

import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/safe-image";
import type { Product } from "@/lib/content";

// Editorial pull-quote — Chanel pattern: lifestyle image left, single serif-y
// quote right. Only renders when the product has both fields.
export function ProductQuote({ product }: { product: Product }) {
  if (!product.pullQuote || !product.lifestyleImage) return null;

  return (
    <section className="relative bg-ink py-20 text-chalk md:py-24">
      <div className="mx-auto grid max-w-editorial grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-14 md:px-14">
        {/* Lifestyle image — 6 cols, capped in landscape ratio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[3/2] w-full overflow-hidden bg-onyx md:col-span-6 md:aspect-[4/3]"
        >
          <SafeImage
            src={product.lifestyleImage}
            alt={`${product.name} in situ`}
            fallbackSeed={`${product.handle}-lifestyle`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Pull quote — 6 cols, vertically centred */}
        <div className="flex items-center md:col-span-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md"
          >
            <p className="font-display text-[clamp(1.125rem,1.5vw,1.5rem)] font-semibold uppercase leading-[1.2] tracking-[0.01em] text-chalk">
              &ldquo;{product.pullQuote}&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
