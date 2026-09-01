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
            className="select-none text-[clamp(2rem,6vw,7rem)] font-semibold uppercase leading-none tracking-[0.01em] text-chalk"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
