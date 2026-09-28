import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

export default function CollectionCard({
  href,
  name,
  tagline,
  image,
  ratio = "portrait",
}: {
  href: string;
  name: string;
  tagline: string;
  image?: string;
  ratio?: "portrait" | "square";
}) {
  return (
    <Link href={href} className="group block" data-cursor="View">
      <div className={`relative overflow-hidden bg-ivory ${ratio === "square" ? "aspect-square" : "aspect-[3/4]"}`}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <PlaceholderImage label={name} className="h-full w-full" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-xs uppercase tracking-[0.2em] text-ink">Explore Collection &rarr;</span>
        </div>
      </div>
      <h3 className="mt-5 font-display text-xl transition-transform duration-500 group-hover:-translate-y-0.5">{name}</h3>
      <p className="mt-1 text-sm text-charcoal/60">{tagline}</p>
    </Link>
  );
}
