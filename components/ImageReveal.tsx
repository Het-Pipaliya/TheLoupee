"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

export default function ImageReveal({
  src,
  alt,
  className = "",
  sizes,
}: {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="h-full w-full"
        variants={{
          hidden: { clipPath: "inset(0 0 100% 0)" },
          show: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
        }}
      >
        <motion.div
          className="relative h-full w-full"
          variants={{
            hidden: { scale: 1.08 },
            show: { scale: 1, transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
