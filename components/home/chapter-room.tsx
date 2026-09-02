"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue
} from "framer-motion";
import { useEffect, useRef } from "react";
import { IconCircleDot } from "@/components/ui/icons";

const BODY_TEXT =
  "A room begins with a chair, a table, a lamp. Over the years, only some pieces stay — the brass lamp, the marble tray, the walnut chest that never dates. This is the collection for those pieces. The ones you keep.";

const WORDS = BODY_TEXT.split(" ");

const SCRUB_START = 0.05;
const SCRUB_END = 0.42;

export function ChapterRoom() {
  const trackerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const inner = innerRef.current;
    const tracker = trackerRef.current;
    if (!inner || !tracker) return;

    let rafId = 0;

    const update = () => {
      const rect = tracker.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh - rect.top) / (2 * vh);
      const progress = Math.max(0, Math.min(1, raw));
      // Slide begins ONLY after the word-scrub finishes (scrub ends at 0.42).
      // Small buffer (0.45) lets the last word settle, then slide runs 0.45 → 0.95.
      const slideProgress = Math.max(
        0,
        Math.min(1, (progress - 0.45) / (0.95 - 0.45))
      );
      const y = slideProgress * -100;
      inner.style.transform = `translateY(${y}%)`;
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      {/* Section = pure sticky, SHORTER than viewport so Living Room peeks below.
          Inner div has bg + content and gets the direct transform mutation. */}
      <section
        className="pointer-events-none sticky top-0 z-40 h-[70svh]"
        aria-labelledby="chapter-room-heading"
      >
        <div
          ref={innerRef}
          style={{ willChange: "transform" }}
          className="pointer-events-auto flex h-full w-full items-center justify-center bg-ink text-chalk"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center md:px-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 text-[10px] uppercase tracking-[0.28em] text-chalk/70"
            >
              The Luxe Version · Interior Decor
            </motion.p>

            <motion.h2
              id="chapter-room-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(1.125rem,1.75vw,1.75rem)] font-bold uppercase leading-[1.05] tracking-[0.02em]"
            >
              The Art of the Room
            </motion.h2>

            <p
              aria-label={BODY_TEXT}
              className="mt-10 max-w-3xl text-[12px] uppercase leading-[1.9] tracking-[0.14em] text-chalk md:text-[13px]"
            >
              {WORDS.map((word, i) => (
                <ScrubWord
                  key={i}
                  word={word}
                  index={i}
                  total={WORDS.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-14"
            >
              <a href="#collection" className="cta-outline text-chalk">
                <IconCircleDot />
                See in your room
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tracker — drives both the word-scrub AND the section slide-up. */}
      <div ref={trackerRef} aria-hidden className="h-[100vh]" />
    </>
  );
}

function ScrubWord({
  word,
  index,
  total,
  scrollYProgress
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const range = SCRUB_END - SCRUB_START;
  const perWord = range / total;
  const wordStart = SCRUB_START + index * perWord;
  const wordEnd = Math.min(SCRUB_END, wordStart + perWord * 2.2);

  const opacity = useTransform(
    scrollYProgress,
    [wordStart, wordEnd],
    [0.18, 1]
  );

  return (
    <>
      <motion.span style={{ opacity }}>{word}</motion.span>
      {index < total - 1 && " "}
    </>
  );
}
