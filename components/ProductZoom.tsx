"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

export default function ProductZoom({
  src,
  alt,
  label,
}: {
  src?: string;
  alt: string;
  label?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState("50% 50%");
  const [zoomed, setZoomed] = useState(false);

  if (!src) {
    return <PlaceholderImage ratio="portrait" label={label} className="w-full" />;
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] w-full cursor-zoom-in overflow-hidden bg-ivory"
      onMouseMove={handleMove}
      onMouseEnter={() => setZoomed(true)}
      onMouseLeave={() => setZoomed(false)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-contain p-10 transition-transform duration-300 ease-out"
        style={{ transformOrigin: origin, transform: zoomed ? "scale(1.8)" : "scale(1)" }}
        sizes="(min-width: 1024px) 55vw, 100vw"
      />
    </div>
  );
}
