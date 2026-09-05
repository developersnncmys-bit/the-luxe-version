"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/lib/content";

type Panel = {
  key: string;
  label: string;
  body: string;
};

// "Product Information" accordion — Chanel's Description / More Details /
// The Collection block. Only Description opens by default.
export function ProductInfo({ product }: { product: Product }) {
  const panels: Panel[] = [
    {
      key: "description",
      label: "Description",
      body: product.description
    },
    {
      key: "more-details",
      label: "More details",
      body:
        product.body ??
        "A studio piece from the house. Made in small numbers; each finished by hand."
    },
    {
      key: "the-collection",
      label: "The Collection",
      body: `Part of the house's ${product.category.toLowerCase()} — a small, tightly curated group of pieces made in the studio and released each season.`
    }
  ];

  const [openKeys, setOpenKeys] = useState<string[]>(["description"]);
  const toggle = (key: string) =>
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );

  return (
    <section
      id="product-info"
      className="relative bg-ink py-24 text-chalk md:py-32"
      aria-labelledby="product-info-heading"
    >
      <div className="mx-auto max-w-editorial px-6 md:px-14">
        <motion.h2
          id="product-info-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold uppercase tracking-[0.06em] md:mb-20"
        >
          Product Information
        </motion.h2>

        <div className="mx-auto max-w-4xl divide-y divide-chalk/15 border-y border-chalk/15">
          {panels.map((panel) => {
            const isOpen = openKeys.includes(panel.key);
            return (
              <div key={panel.key}>
                <button
                  type="button"
                  onClick={() => toggle(panel.key)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-chalk md:py-8"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-chalk md:text-[12px]">
                    {panel.label}
                  </span>
                  <Chevron open={isOpen} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-8 text-[13px] leading-[1.8] text-chalk/75 md:text-[14px]">
                        {panel.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={clsx(
        "shrink-0 text-chalk/70 transition-transform duration-500",
        open ? "rotate-180" : "rotate-0"
      )}
    >
      <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
