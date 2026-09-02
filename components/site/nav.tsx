"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { IconSearch, IconAccount, IconHeart, IconBag } from "@/components/ui/icons";

const PRIMARY_LINKS = [
  { href: "/collections", label: "The Complete Collection" },
  { href: "/collections/pieces", label: "Pieces", tag: "New" },
  { href: "/collections/lighting", label: "Lighting" },
  { href: "/collections/furniture", label: "Furniture" },
  { href: "/collections/textiles", label: "Textiles" },
  { href: "/journal", label: "The Studio" }
];

const SECONDARY_LINKS = [
  { href: "/maison", label: "The Maison" },
  { href: "/studio/appointment", label: "Book an appointment" },
  { href: "/faq", label: "Client Care" },
  { href: "/careers", label: "Careers" }
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerRevealed, setFooterRevealed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      /* Footer counts as "revealed" once its top edge has scrolled into
         the top ~20% of the viewport — at that point the client-services
         strip is dominant on screen and the nav should retract. */
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setFooterRevealed(rect.top < window.innerHeight * 0.2);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock body scroll and support Escape while the menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 text-chalk transition-transform duration-500 ease-silk",
          footerRevealed && !menuOpen ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div
          className={clsx(
            "w-full border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-silk",
            menuOpen
              ? "border-transparent bg-transparent"
              : scrolled
                ? "border-chalk/10 bg-ink/75 backdrop-blur-md"
                : "border-transparent bg-ink/25 backdrop-blur-sm"
          )}
        >
          <div className="relative mx-auto flex h-16 max-w-editorial items-center justify-between px-6 md:h-20 md:px-10">
            {/* Left: hamburger / close toggle + Menu label */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="relative z-[60] flex items-center gap-3 text-chalk/90 transition-opacity hover:opacity-60"
            >
              <span className="relative inline-block h-[14px] w-[20px]">
                <span
                  className={clsx(
                    "absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-silk",
                    menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-300",
                    menuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-silk",
                    menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  )}
                />
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.28em] md:inline">
                {menuOpen ? "Close" : "Menu"}
              </span>
            </button>

            {/* Center: wordmark */}
            <Link
              href="/"
              aria-label="THE LUXE VERSION — home"
              style={{
                fontFamily: "var(--font-serif-display)",
                transform: "translate(-50%, -50%) scaleY(1.55)",
                transformOrigin: "center",
                display: "inline-block"
              }}
              className="absolute left-1/2 top-1/2 z-[60] whitespace-nowrap text-[16px] font-bold uppercase leading-none tracking-[0.12em] md:text-[22px]"
            >
              The Luxe Version
            </Link>

            {/* Right: utility icons */}
            <nav className="relative z-[60] flex items-center gap-4 text-chalk/90 md:gap-5" aria-label="Utilities">
              <button className="p-1.5 transition-opacity hover:opacity-60" aria-label="Search">
                <IconSearch />
              </button>
              <button className="p-1.5 transition-opacity hover:opacity-60" aria-label="Account">
                <IconAccount />
              </button>
              <button className="hidden p-1.5 transition-opacity hover:opacity-60 md:inline" aria-label="Wishlist">
                <IconHeart />
              </button>
              <button className="p-1.5 transition-opacity hover:opacity-60" aria-label="Bag">
                <IconBag />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="site-menu"
            key="site-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[45] bg-ink text-chalk"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="mx-auto flex h-full max-w-editorial flex-col justify-between px-6 pb-10 pt-28 md:px-10 md:pt-32">
              <motion.ul
                initial="initial"
                animate="animate"
                variants={{ animate: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
                className="space-y-2 md:space-y-3"
              >
                {PRIMARY_LINKS.map((l) => (
                  <motion.li
                    key={l.href}
                    variants={{
                      initial: { opacity: 0, y: 24 },
                      animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                    }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      style={{ fontFamily: "var(--font-serif-display)" }}
                      className="group inline-flex items-baseline gap-3 text-[clamp(1.125rem,1.8vw,1.75rem)] font-light leading-[1.2] text-chalk transition-opacity hover:opacity-60"
                    >
                      <span>{l.label}</span>
                      {l.tag && (
                        <span className="text-[11px] uppercase tracking-[0.24em] text-champagne font-normal">
                          {l.tag}
                        </span>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-16 flex flex-col gap-8 border-t border-chalk/15 pt-8 md:flex-row md:items-end md:justify-between">
                <ul className="flex flex-wrap gap-x-8 gap-y-3">
                  {SECONDARY_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-[11px] uppercase tracking-[0.24em] text-chalk/70 transition-opacity hover:text-chalk"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="text-[10px] uppercase tracking-[0.32em] text-chalk/40">
                  India · English
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
