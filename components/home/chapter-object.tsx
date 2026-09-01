"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue
} from "framer-motion";
import { useRef, useState } from "react";
import clsx from "clsx";
import { IconCircleDot, IconPlay } from "@/components/ui/icons";
import { SafeImage } from "@/components/ui/safe-image";

// A tile in either slot can now be a video OR an image — the discriminant is `kind`.
type MediaTile =
  | { kind: "video"; src: string; poster: string; label: string; kicker: string }
  | { kind: "image"; src: string; alt: string; label: string; kicker: string };

// Beat 1 — LEFT hero card = IMAGE, RIGHT inset ("Vessel — Brume") = VIDEO
const BEAT_1_HERO: MediaTile = {
  kind: "image",
  src: "/images/living-room1.png",
  alt: "The Living Study",
  kicker: "Room",
  label: "The Living Study"
};
const BEAT_1_INSET: MediaTile = {
  kind: "video",
  src: "/images/dining-video.mp4",
  poster: "/images/living-room.png",
  kicker: "Pieces",
  label: "Vessel — Brume"
};

// Beat 2 — LEFT hero card = VIDEO, RIGHT inset = IMAGE (mirrored)
const BEAT_2_HERO: MediaTile = {
  kind: "video",
  src: "/images/smiplicity-section.png",
  poster: "/images/smiplicity-section.png",
  kicker: "The Reveal",
  label: "The Nocturne"
};
const BEAT_2_INSET: MediaTile = {
  kind: "image",
  src: "/images/pieces-light.png",
  alt: "Lume — Alba pendant",
  kicker: "Lighting",
  label: "Lume — Alba"
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
            Decor for the Interior
          </motion.p>
          <motion.h2
            id="creations-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 font-display text-[clamp(1.125rem,1.75vw,1.75rem)] font-bold uppercase leading-[1.05] tracking-[0.02em] md:col-span-8 md:col-start-4"
          >
            Pieces and Rooms
          </motion.h2>
        </div>

        {/* Beat 1 — HERO card LEFT (image), inset TOP-RIGHT (video "Vessel — Brume") */}
        <HeroPlusInset
          hero={BEAT_1_HERO}
          inset={BEAT_1_INSET}
          yHero={yFilm1}
          yInset={yPiece1}
          mirror={false}
        />

        {/* Beat 2 — HERO card RIGHT (video), inset TOP-LEFT (image) — mirrored */}
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
      {/* ── HERO CARD ── ~68% width, anchored to one side. Can be video or image. */}
      <div
        className={clsx(
          "w-full md:w-[68%]",
          mirror ? "md:ml-auto" : "md:mr-auto"
        )}
      >
        <motion.div
          style={{ y: yHero }}
          className="group relative aspect-[16/10] w-full overflow-hidden bg-onyx"
        >
          <MediaCell tile={hero} sizes="(min-width: 768px) 68vw, 100vw" />
        </motion.div>

        {/* Credit line — sits directly under hero, anchored to same side */}
        <div
          className={clsx(
            "mt-5 flex items-center gap-4",
            mirror ? "justify-end text-right" : "justify-start text-left"
          )}
        >
          <span className="inline-block h-px w-10 bg-chalk/40" />
          <p className="text-[10px] uppercase tracking-[0.28em] text-chalk/70">
            {hero.kicker}
          </p>
          <p className="text-[10px] uppercase tracking-[0.22em] text-chalk">
            {hero.label}
          </p>
        </div>
      </div>

      {/* ── INSET CARD ── overlaps the hero's OPPOSITE corner. Can be video or image. */}
      <motion.div
        style={{ y: yInset }}
        className={clsx(
          // Mobile: stacks below hero in normal flow.
          "mt-12 w-full md:mt-0 md:absolute md:z-10 md:w-[28%] md:-top-16 lg:-top-20",
          // Desktop: absolute to opposite corner of hero.
          mirror ? "md:left-0" : "md:right-0"
        )}
      >
        <div className="group relative aspect-[4/5] w-full overflow-hidden bg-onyx">
          <MediaCell tile={inset} sizes="(min-width: 768px) 28vw, 100vw" />
          {/* Shoppable pin — opposite corner from the overlap edge */}
          <span
            className={clsx(
              "pointer-events-none absolute flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-chalk backdrop-blur-md",
              mirror ? "bottom-4 right-4" : "bottom-4 left-4"
            )}
            aria-hidden
          >
            <IconCircleDot />
          </span>
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

  const play = () => {
    const el = videoRef.current;
    if (!el) return;
    el.play()
      .then(() => setPlaying(true))
      .catch(() => void 0);
  };
  const pause = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
  };

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-silk group-hover:scale-[1.03]"
      >
        <source src={src} type="video/mp4" />
      </video>

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
