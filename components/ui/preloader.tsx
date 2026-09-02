"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const WORD = "THE LUXE VERSION";
const STAGGER = 0.07; // seconds per letter
const LETTER_DURATION = 0.9;
const HOLD_AFTER_WRITE = 0.55; // pause after last letter lands
const EXIT_DURATION = 1.1;

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while the preloader occupies the viewport
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const totalWriteMs = (WORD.length * STAGGER + LETTER_DURATION + HOLD_AFTER_WRITE) * 1000;
    const dismiss = window.setTimeout(() => {
      setVisible(false);
    }, totalWriteMs);

    return () => {
      window.clearTimeout(dismiss);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {visible && (
        <motion.div
          key="preloader"
          exit={{ y: "-101%" }}
          transition={{ duration: EXIT_DURATION, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-ink"
          aria-hidden
        >
          <div className="relative flex items-center justify-center">
            {/* Subtle white halo behind the wordmark */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[60vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 35%, rgba(255,255,255,0) 65%)",
                filter: "blur(40px)"
              }}
            />
            <motion.h1
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: { staggerChildren: STAGGER, delayChildren: 0.15 }
              }
            }}
            aria-label={WORD}
            style={{
              fontFamily: "var(--font-serif-display)",
              transform: "scaleY(1.55)",
              transformOrigin: "center"
            }}
            className="relative z-10 select-none text-[clamp(1.25rem,3.6vw,4rem)] font-semibold uppercase leading-none tracking-[0.01em] text-chalk"
          >
            {WORD.split("").map((ch, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-bottom"
                aria-hidden
              >
                <motion.span
                  variants={{
                    initial: { y: "105%" },
                    animate: {
                      y: "0%",
                      transition: {
                        duration: LETTER_DURATION,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }
                  }}
                  className="inline-block"
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              </span>
            ))}
          </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
