import { Hero } from "@/components/home/hero";
import { ChapterRoom } from "@/components/home/chapter-room";
import { ChapterLook } from "@/components/home/chapter-look";
import { ChapterObject } from "@/components/home/chapter-object";
import { ChapterFilm } from "@/components/home/chapter-film";
import { Interlude } from "@/components/home/interlude";
import { Collection } from "@/components/home/collection";
import { JournalTeaser } from "@/components/home/journal";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Bounded runway for Chapter Room's sticky. Fragment inside = section
          (100vh sticky) + tracker (50vh). Runway = 200vh → sticky pins for 100vh
          and slides up cleanly just before ChapterFilm scrolls into view. */}
      <div className="relative h-[100vh]">
        <ChapterRoom />
      </div>
      {/* Sequential flow after chapter-room — no more reveal-behind so that
          ChapterFilm can sit between chapter-room and the Living Room reveal. */}
      <div className="relative bg-ink">
        <ChapterFilm />
        <div className="relative h-[300vh]">
          <ChapterLook
            pinned
            eyebrow="Shop the Room"
            title={"The\nLiving\nRoom"}
            cover="/images/banner2.png"
            thumbnails={[
              {
                src: "/images/Living-room1.png",
                label: "Chapter I",
                videoSrc: "images/living-room1.mp4"
              },
              {
                src: "/images/living-room2.png",
                label: "Chapter II",
                videoSrc: "/images/living-room2.mp4"
              }
            ]}
          />
        </div>
        <ChapterObject />
        {/* <Interlude /> */}
        <Collection />
        {/* <ChapterLook
          eyebrow="Shop the Room"
          title={"The\nBedroom"}
          cover="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=80"
          thumbnails={[
            {
              src: "https://images.unsplash.com/photo-1616627451515-e8f9f2e46f7f?auto=format&fit=crop&w=600&q=80",
              label: "Behind the film",
              videoSrc: "https://assets.mixkit.co/videos/4196/4196-720.mp4"
            },
            {
              src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80",
              label: "The studio",
              videoSrc: "https://assets.mixkit.co/videos/4046/4046-720.mp4"
            }
          ]}
        /> */}
        <JournalTeaser />
      </div>
    </>
  );
}
