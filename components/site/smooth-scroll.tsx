"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.35,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.4
      }}
    >
      {children}
    </ReactLenis>
  );
}
