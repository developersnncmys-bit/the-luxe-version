"use client";

import { motion } from "framer-motion";

export function HousePointOfView() {
  return (
    <section
      id="point-of-view"
      className="relative bg-ink py-24 text-chalk md:py-32"
      aria-labelledby="pov-heading"
    >
      <div className="mx-auto max-w-editorial px-6 md:px-14">
        {/* Header — small eyebrow + the "We curate…" line promoted to the section
            headline. Larger, wider prose sits below. */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.h2
            id="pov-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(1.75rem,3.25vw,2.875rem)] font-light uppercase leading-[1.2] tracking-[0.02em] text-chalk"
          >
            We curate for a room that already knows what it wants.
          </motion.h2>
        </div>

        {/* Single closing line — editorial silence, just one thought under the headline. */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-2xl text-center text-[15px] leading-[1.85] text-chalk/75 md:mt-24 md:text-[16px]"
        >
          Fewer pieces, chosen carefully, kept for the years they will be lived with.
        </motion.p>
      </div>
    </section>
  );
}
