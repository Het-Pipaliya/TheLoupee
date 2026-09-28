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
    <Link
      href={`/collections/${collectionSlug}/${product.slug}`}
      className="group block"
      data-cursor="Explore"
    >
      <ProductPhoto src={product.image} alt={product.name} label={product.metal} />
      <div className="mt-5 flex items-baseline justify-between gap-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
        <h3 className="font-display text-lg">{product.name}</h3>
        <span className="text-sm text-charcoal/70">{product.price}</span>
      </div>
      <p className="mt-1 text-sm text-charcoal/60">{product.metal}</p>
      <span className="mt-2 inline-block text-xs uppercase tracking-[0.2em] text-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        View Piece &rarr;
      </span>
    </Link>
  );
}
