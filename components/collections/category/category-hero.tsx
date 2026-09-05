"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  kicker: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function CategoryHero({
  kicker,
  title,
  description,
  image,
  imageAlt
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={ref} className="relative bg-ink text-chalk">
      {/* Full-bleed hero — image spans the viewport width; kicker + title sit
          in a left-aligned overlay over a soft left-side scrim for legibility. */}
      <div className="relative min-h-[90svh] w-full overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Left-weighted scrim — keeps the text readable without darkening the
            image where it doesn't need to be. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent md:from-ink/60 md:via-ink/15 md:to-transparent lg:w-3/5"
        />

        <div className="relative z-10 flex min-h-[90svh] items-end px-6 pb-20 pt-32 md:px-14 md:pb-28 md:pt-40 lg:px-20 lg:pb-36">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-[10px] uppercase tracking-[0.32em] text-chalk/70"
            >
              {kicker}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-md font-semibold uppercase leading-[1.02] tracking-[0.02em]"
            >
              {title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:px-14 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[14px] leading-[1.8] text-chalk/80 md:text-[15px]"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
