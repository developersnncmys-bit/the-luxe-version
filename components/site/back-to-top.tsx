"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    // Prefer Lenis so easing matches the rest of the site; fall back to native.
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          // mix-blend-difference keeps the mark legible over both the dark ink
          // pages and the white client-services strip in the footer.
          className="group fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 text-chalk mix-blend-difference md:bottom-10 md:right-10"
        >
          {/* Thin vertical rule — mirrors the site's cta-rule vocabulary but
              flipped: rule on TOP (points up), label below. Grows on hover. */}
          <span
            aria-hidden
            className="block h-9 w-px bg-current opacity-70 transition-[height] duration-700 ease-silk group-hover:h-12"
          />
          <span className="text-[10px] uppercase tracking-[0.28em] md:text-[11px]">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
