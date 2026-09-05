"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

/**
 * Force scroll-to-top on every route change. Next's built-in scroll restore
 * doesn't reach Lenis's internal offset, so long pages could open at the
 * middle or bottom depending on where the previous page was scrolled.
 */
export function ScrollTopOnRoute() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}
