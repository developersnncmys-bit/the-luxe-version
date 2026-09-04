"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { IconPlay } from "@/components/ui/icons";
import { SafeImage } from "@/components/ui/safe-image";

// A tile in either slot can now be a video OR an image — the discriminant is `kind`.
type MediaTile =
  | { kind: "video"; src: string; poster: string; label: string; kicker: string }
  | { kind: "image"; src: string; alt: string; label: string; kicker: string };

// Beat 1 — Chandelier hero + Living Room context inset
const BEAT_1_HERO: MediaTile = {
  kind: "image",
  src: "/images/lighting/light1.png",
  alt: "The Sculptural Chandelier",
  kicker: "Lighting",
  label: "The Sculptural Chandelier"
};
const BEAT_1_INSET: MediaTile = {
  kind: "video",
  src: "/images/living-room1.mp4",
  // NOTE: filename on disk is capital-L `Living-room1.png` — must match exactly on Vercel/Linux.
  poster: "/images/Living-room1.png",
  kicker: "In Situ",
  label: "In the Living Room"
};

// Beat 2 — Sculptural showpiece hero + Sitting Room context inset (mirrored)
const BEAT_2_HERO: MediaTile = {
  kind: "image",
  src: "/images/sculptures/scu2.png",
  alt: "The Carved Form",
  kicker: "Showpiece",
  label: "The Carved Form"
};
const BEAT_2_INSET: MediaTile = {
  kind: "image",
  src: "/images/smiplicity-section.png",
  alt: "In the Sitting Room",
  kicker: "In Situ",
  label: "In the Sitting Room"
};

export function ChapterObject() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yFilm1 = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);
  const yPiece1 = useTransform(scrollYProgress, [0, 1], ["-10%", "6%"]);
  const yFilm2 = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);
  const yPiece2 = useTransform(scrollYProgress, [0, 1], ["-10%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative bg-ink py-28 text-chalk md:py-40"
      aria-labelledby="creations-heading"
    >
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        {/* Section header */}
        <div className="mb-28 grid grid-cols-12 items-end gap-6 md:mb-44">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-chalk/60 md:col-span-3 md:col-start-1"
          >
            <span className="inline-block h-px w-10 bg-chalk/50" />
            Shop the Piece
          </motion.p>
          <motion.h2
            id="creations-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 font-display text-[clamp(1.125rem,1.75vw,1.75rem)] font-bold uppercase leading-[1.05] tracking-[0.02em] md:col-span-8 md:col-start-4"
          >
            See the Piece in the Room
          </motion.h2>
        </div>

        {/* Beat 1 — HERO card LEFT (Living Room image), inset TOP-RIGHT (dining video) */}
        <HeroPlusInset
          hero={BEAT_1_HERO}
          inset={BEAT_1_INSET}
          yHero={yFilm1}
          yInset={yPiece1}
          mirror={false}
        />

        {/* Beat 2 — HERO card RIGHT (Sitting Room image), inset TOP-LEFT (pendant image) — mirrored */}
        <div className="mt-40 md:mt-64">
          <HeroPlusInset
            hero={BEAT_2_HERO}
            inset={BEAT_2_INSET}
            yHero={yFilm2}
            yInset={yPiece2}
            mirror
          />
        </div>

      </div>
    </section>
  );
}

// ── BEAT COMPONENT ────────────────────────────────────────────────────────

function HeroPlusInset({
  hero,
  inset,
  yHero,
  yInset,
  mirror
}: {
  hero: MediaTile;
  inset: MediaTile;
  yHero: MotionValue<string>;
  yInset: MotionValue<string>;
  mirror: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* ── HERO CARD ── ~60% width, anchored to one side. Moderate negative
          space (~14%) between hero and inset — Chanel-editorial without a chasm. */}
      <div
        className={clsx(
          "w-full md:w-[60%]",
          mirror ? "md:ml-auto" : "md:mr-auto"
        )}
      >
        <motion.div
          style={{ y: yHero }}
          className="group relative aspect-[16/10] w-full overflow-hidden bg-onyx"
        >
          <MediaCell tile={hero} sizes="(min-width: 768px) 60vw, 100vw" />
        </motion.div>

        {/* Hero caption — stacked kicker + bold label, matching the inset caption style. */}
        <div
          className={clsx(
            "mt-4",
            mirror ? "text-right" : "text-left"
          )}
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-chalk/60">
            {hero.kicker}
          </p>
          <h3 className="mt-2 font-display text-[14px] font-bold uppercase leading-[1.15] tracking-[0.01em] md:text-[16px]">
            {hero.label}
          </h3>
        </div>
      </div>

      {/* ── INSET CARD ── overlaps the hero's OPPOSITE corner. Can be video or image. */}
      <motion.div
        style={{ y: yInset }}
        className={clsx(
          // Mobile: stacks below hero in normal flow.
          "mt-12 w-full md:mt-0 md:absolute md:z-10 md:w-[26%] md:-top-16 lg:-top-20",
          // Desktop: absolute to opposite corner of hero.
          mirror ? "md:left-0" : "md:right-0"
        )}
      >
        <div className="group relative aspect-[4/5] w-full overflow-hidden bg-onyx">
          <MediaCell tile={inset} sizes="(min-width: 768px) 26vw, 100vw" />
        </div>

        {/* Inset caption — anchored below piece, same side */}
        <div
          className={clsx(
            "mt-4",
            mirror ? "text-left" : "text-right"
          )}
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-chalk/60">
            {inset.kicker}
          </p>
          <h3 className="mt-2 font-display text-[14px] font-bold uppercase leading-[1.15] tracking-[0.01em] md:text-[16px]">
            {inset.label}
          </h3>
        </div>
      </motion.div>
    </motion.article>
  );
}

function MediaCell({ tile, sizes }: { tile: MediaTile; sizes: string }) {
  if (tile.kind === "video") {
    return <VideoCell src={tile.src} poster={tile.poster} label={tile.label} />;
  }
  return (
    <SafeImage
      src={tile.src}
      alt={tile.alt}
      fallbackSeed={tile.label}
      fill
      sizes={sizes}
      className="object-cover transition-transform duration-[1600ms] ease-silk group-hover:scale-[1.04]"
    />
  );
}

// ── MEDIA CELLS ───────────────────────────────────────────────────────────

function VideoCell({
  src,
  poster,
  label
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Belt-and-braces: autoPlay attribute is not always honored (React strict-mode
  // remount, hydration timing, Safari muted-autoplay quirks). Force play() on
  // mount as well; the promise catch swallows the harmless AbortError that
  // happens if the element unmounts before the play() promise resolves.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    const attempt = el.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => void 0);
    }
  }, []);

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-silk group-hover:scale-[1.03]"
      />

      {/* Play glyph acts as a loading indicator — fades out once playback begins. */}
      <span
        className={clsx(
          "pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-silk",
          playing ? "opacity-0" : "opacity-100"
        )}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/30 ring-1 ring-chalk/60 backdrop-blur-md">
          <IconPlay />
        </span>
      </span>
    </div>
  );
}
