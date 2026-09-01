"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { IconSearch, IconAccount, IconHeart, IconBag } from "@/components/ui/icons";

// "The Luxe Version" removed — the wordmark on top already links to home.
const NAV_LINKS = [
  { href: "/collections/pieces", label: "Pieces", tag: "New" },
  { href: "/collections", label: "Complete Collection", active: true },
  { href: "/journal", label: "The Studio" }
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-chalk">
      {/* Full-width persistent bar. Two rows:
            Row 1 — wordmark centered, utility icons right
            Row 2 — primary nav links centered */}
      <div
        className={clsx(
          "w-full border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-silk",
          scrolled
            ? "border-chalk/10 bg-ink/75 backdrop-blur-md"
            : "border-transparent bg-ink/25 backdrop-blur-sm"
        )}
      >
        {/* Row 1: centered wordmark + right-aligned icons */}
        <div className="relative mx-auto flex h-16 max-w-editorial items-center justify-center px-6 md:h-20 md:px-10">
          <Link
            href="/"
            aria-label="THE LUXE VERSION — home"
            style={{
              fontFamily: "var(--font-serif-display)",
              transform: "scaleY(1.55)",
              transformOrigin: "center",
              display: "inline-block"
            }}
            className="text-[16px] font-bold uppercase leading-none tracking-[0.12em] md:text-[22px]"
          >
            The Luxe Version
          </Link>

          <nav
            className="absolute right-6 top-1/2 flex -translate-y-1/2 items-center gap-4 text-chalk/90 md:right-10 md:gap-5"
            aria-label="Utilities"
          >
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

        {/* Row 2: primary nav links, centered */}
        <nav
          className="mx-auto flex h-11 max-w-editorial items-center justify-center gap-8 border-t border-chalk/5 px-6 md:h-12 md:gap-12 md:px-10"
          aria-label="Primary"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "relative whitespace-nowrap text-[10px] uppercase tracking-[0.22em] transition-opacity md:text-[11px]",
                l.active
                  ? "text-chalk font-medium"
                  : "text-chalk/65 hover:text-chalk"
              )}
            >
              {l.label}
              {l.tag && (
                <span className="ml-1.5 italic text-champagne font-light normal-case tracking-normal">
                  {l.tag}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
