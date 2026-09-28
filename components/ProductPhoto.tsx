import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

export default function ProductPhoto({
  src,
  alt,
  label,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
}) {
  if (!src) {
    return <PlaceholderImage label={label} className={className} />;
  }

  return (
    <div className={`relative aspect-square overflow-hidden bg-ivory ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      />
    </div>
  );
}
