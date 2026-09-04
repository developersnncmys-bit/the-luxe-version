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
      {/* Split hero — image left, title right. Same shape as ObjectsHero for
          visual continuity across the collections family. */}
      <div className="grid grid-cols-1 md:grid-cols-12 md:min-h-[100svh]">
        <div className="relative aspect-[4/5] overflow-hidden md:col-span-7 md:aspect-auto md:min-h-[100svh]">
          <motion.div style={{ y, scale }} className="absolute inset-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="flex items-center justify-start px-6 py-16 md:col-span-5 md:px-14 md:py-20">
          <div className="max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 text-[9px] uppercase tracking-[0.28em] text-chalk/60"
            >
              {kicker}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-md font-semibold uppercase leading-[1.05] tracking-[0.005em]"
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
