import Link from "next/link";
import ProductPhoto from "./ProductPhoto";
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
      <ProductPhoto
        src={product.image}
        alt={product.name}
        label={product.metal}
        className="transition-opacity group-hover:opacity-80"
      />
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg">{product.name}</h3>
        <span className="text-sm text-charcoal/70">{product.price}</span>
      </div>
      <p className="mt-1 text-sm text-charcoal/60">{product.metal}</p>
    </Link>
  );
}
