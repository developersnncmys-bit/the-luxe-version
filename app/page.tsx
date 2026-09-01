import { Hero } from "@/components/home/hero";
import { ChapterRoom } from "@/components/home/chapter-room";
import { ChapterLook } from "@/components/home/chapter-look";
import { ChapterObject } from "@/components/home/chapter-object";
import { Interlude } from "@/components/home/interlude";
import { Collection } from "@/components/home/collection";
import { JournalTeaser } from "@/components/home/journal";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Bounded runway for Chapter Room's sticky. Fragment inside = section
          (100vh sticky) + tracker (100vh). Runway = 300vh → sticky pins for 200vh. */}
      <div className="relative h-[300vh]">
        <ChapterRoom />
      </div>
      {/* Living Room and below sit BEHIND Chapter Room (z-0). -mt-[300vh] pulls
          this wrapper UP to the SAME starting position as Chapter Room's runway.
          Living Room's top is now directly behind Chapter Room from the moment
          Chapter Room pins — so the bottom 30vh of viewport (below the 70svh
          Chapter Room) already shows Living Room. As Chapter Room slides UP,
          more Living Room is exposed. No gap. */}
      <div className="relative z-0 -mt-[300vh] bg-ink">
        {/* Living Room is pinned (sticky) INSIDE its own bounded runway that matches
            Chapter Room's runway (300vh). This keeps Living Room BEHIND Chapter Room
            for the full duration of Chapter Room's pin — so as Chapter Room slides
            up, Living Room stays put and gets progressively revealed. */}
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
