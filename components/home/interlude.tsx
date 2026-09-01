"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export function Interlude() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-ink text-chalk grain"
      aria-hidden
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="/simplicity-section.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-editorial flex-col items-center justify-center px-6 md:px-10">
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-center font-display text-display-md font-medium uppercase leading-[1.15] tracking-tight text-chalk"
        >
          A room is built one piece at a time.
        </motion.h3>
      </div>
    </section>
  );
}
