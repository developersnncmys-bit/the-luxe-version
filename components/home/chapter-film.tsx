"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { IconPlay } from "@/components/ui/icons";

export function ChapterFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Muted autoplay — same belt-and-braces pattern as chapter-object's VideoCell.
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
    <section
      className="relative bg-ink pt-24 pb-40 md:pt-32 md:pb-56"
      aria-labelledby="chapter-film-heading"
    >
      <motion.figure
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl px-6 md:px-10"
      >
        <div className="group relative aspect-[4/3] w-full overflow-hidden bg-onyx">
          <video
            ref={videoRef}
            src="/images/dining-video.mp4"
            poster="/images/dining.png"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="A film from the studio"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="h-full w-full object-cover"
          />

          <span
            className={clsx(
              "pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-silk",
              playing ? "opacity-0" : "opacity-100"
            )}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink/30 ring-1 ring-chalk/70 backdrop-blur-md md:h-20 md:w-20">
              <IconPlay />
            </span>
          </span>
        </div>

        <figcaption className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 text-center text-chalk md:mt-10">
          <p className="text-[10px] uppercase tracking-[0.28em] text-chalk/60 md:text-[11px]">
            Film
          </p>
          <h3
            id="chapter-film-heading"
            className="font-display text-[clamp(1.25rem,2vw,2rem)] font-bold uppercase tracking-[0.02em]"
          >
            A Conversation at the Studio
          </h3>
          <p className="text-[11px] uppercase tracking-[0.28em] text-chalk/70">
            With the Artisan
          </p>
          <p className="mt-4 max-w-lg text-[13px] leading-[1.8] text-chalk/70">
            An evening at the studio with the artisan who shaped this collection — on the pieces
            that never date, and the quiet work of making them.
          </p>
        </figcaption>
      </motion.figure>
    </section>
  );
}
