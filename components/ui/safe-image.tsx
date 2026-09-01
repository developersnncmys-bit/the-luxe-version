"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & { fallbackSeed?: string };

export function SafeImage({ src, alt, fallbackSeed, ...rest }: Props) {
  const [current, setCurrent] = useState(src);
  return (
    <Image
      {...rest}
      src={current}
      alt={alt}
      onError={() => {
        const seed = encodeURIComponent(fallbackSeed ?? (typeof alt === "string" ? alt : "luxe"));
        setCurrent(`https://picsum.photos/seed/${seed}/1400/1800`);
      }}
    />
  );
}
