import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import type { Product } from "@/lib/products";

export default function ProductCard({
  product,
  collectionSlug,
}: {
  product: Product;
  collectionSlug: string;
}) {
  return (
    <Link href={`/collections/${collectionSlug}/${product.slug}`} className="group block">
      {product.image ? (
        <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-opacity group-hover:opacity-80"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      ) : (
        <PlaceholderImage label={product.metal} className="transition-opacity group-hover:opacity-80" />
      )}
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg">{product.name}</h3>
        <span className="text-sm text-charcoal/70">{product.price}</span>
      </div>
      <p className="mt-1 text-sm text-charcoal/60">{product.metal}</p>
    </Link>
  );
}
