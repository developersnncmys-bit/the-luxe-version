import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

export function IconSearch(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" {...base} {...p} aria-hidden>
      <circle cx="9" cy="9" r="6" />
      <path d="M13.5 13.5 L17 17" />
    </svg>
  );
}

export function IconAccount(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" {...base} {...p} aria-hidden>
      <circle cx="10" cy="7" r="3.25" />
      <path d="M3.5 17c1.2-3 3.7-4.5 6.5-4.5s5.3 1.5 6.5 4.5" />
    </svg>
  );
}

export function IconHeart(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" {...base} {...p} aria-hidden>
      <path d="M10 16.5S3.5 13 3.5 8.25a3.25 3.25 0 0 1 6.5-.5 3.25 3.25 0 0 1 6.5.5C16.5 13 10 16.5 10 16.5Z" />
    </svg>
  );
}

export function IconBag(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" {...base} {...p} aria-hidden>
      <path d="M4.5 6.5h11l-.9 10a1 1 0 0 1-1 .9H6.4a1 1 0 0 1-1-.9L4.5 6.5Z" />
      <path d="M7 6.5V5a3 3 0 0 1 6 0v1.5" />
    </svg>
  );
}

export function IconPlay(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" width="10" height="10" {...base} strokeWidth={1.2} {...p} aria-hidden>
      <path d="M3 1.5 L10 6 L3 10.5 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCircleDot(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 22 22" width="22" height="22" {...base} {...p} aria-hidden>
      <circle cx="11" cy="11" r="10" />
      <circle cx="11" cy="11" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconArrowThin(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 8" width="26" height="8" {...base} strokeWidth={0.75} {...p} aria-hidden>
      <path d="M0 4H24M24 4L20 1M24 4L20 7" />
    </svg>
  );
}

export function IconGlobe(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" {...base} {...p} aria-hidden>
      <circle cx="10" cy="10" r="7" />
      <path d="M3 10h14M10 3c2.2 2 3.2 4.5 3.2 7s-1 5-3.2 7M10 3c-2.2 2-3.2 4.5-3.2 7s1 5 3.2 7" />
    </svg>
  );
}

export function IconChevron(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 10 6" width="10" height="6" {...base} {...p} aria-hidden>
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}
