"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ServiceCard = {
  title: string;
  body: string;
  cta: { label: string; href: string };
};

const CARDS: ServiceCard[] = [
  {
    title: "Provenance",
    body:
      "Every piece is signed, dated and accompanied by a hand-numbered certificate. Made in small numbers, held in the ledger for life.",
    cta: { label: "Learn more", href: "/house" }
  },
  {
    title: "The Art of Detail",
    body:
      "A piece from the house arrives wrapped in unbleached linen, sealed in a hand-lined box — the arrival part of the ritual.",
    cta: { label: "Discover", href: "/house" }
  },
  {
    title: "House Services",
    body:
      "From private commission to placement in the room, our concierge accompanies the piece long after it has left the studio.",
    cta: { label: "Enquire", href: "#enquire" }
  }
];

// Editorial services block — Chanel's "Fine Jewellery According to Chanel"
// pattern, translated for the house's tone (Provenance / Detail / Services).
export function ProductServices() {
  return (
    <section className="relative bg-ink py-24 text-chalk md:py-32">
      <div className="mx-auto max-w-editorial px-6 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold uppercase leading-[1.1] tracking-[0.06em] md:mb-20"
        >
          <span className="block">Ownership</span>
          <span className="mt-2 block text-chalk/70">According to the House</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col justify-between border border-chalk/15 p-10 md:p-12"
            >
              <div>
                <h3 className="font-display text-[13px] font-semibold uppercase tracking-[0.22em] text-chalk md:text-[14px]">
                  {card.title}
                </h3>
                <p className="mt-6 text-[13px] leading-[1.75] text-chalk/75">
                  {card.body}
                </p>
              </div>

              <Link
                href={card.cta.href}
                className="mt-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-chalk underline underline-offset-[6px] decoration-chalk/50 transition-colors hover:decoration-chalk"
              >
                {card.cta.label}
                <span aria-hidden>›</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
