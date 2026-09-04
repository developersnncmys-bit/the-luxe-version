"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Cat = { id: string; label: string; count: number };

export function CollectionIndex({ categories }: { categories: Cat[] }) {
  return (
    <section
      id="index"
      className="relative bg-ink py-24 text-chalk md:py-32"
      aria-labelledby="index-heading"
    >
      <div className="mx-auto max-w-editorial px-6 md:px-14">
        <motion.p
          id="index-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center text-[10px] uppercase tracking-[0.32em] text-chalk/55 md:mb-14"
        >
          The Index
        </motion.p>

        {/* Horizontal row — three categories side by side, each a self-contained cluster
            (number → name → count) stacked vertically. Anchors unchanged. */}
        <motion.ul
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto grid max-w-4xl grid-cols-3 gap-6 border-y border-chalk/15 py-10 md:gap-10 md:py-14"
        >
          {categories.map((c, i) => (
            <motion.li
              key={c.id}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              className="text-center"
            >
              <Link href={`#${c.id}`} className="group flex flex-col items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.32em] text-chalk/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.125rem,2.25vw,1.875rem)] font-semibold uppercase leading-none tracking-[0.005em] text-chalk transition-opacity group-hover:opacity-70">
                  {c.label}
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-chalk/55">
                  {String(c.count).padStart(2, "0")} Pieces
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
