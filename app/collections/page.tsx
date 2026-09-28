import Link from "next/link";
import ProductPhoto from "@/components/ProductPhoto";
import { collections, getCollectionThumbnail } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Loupe",
  description: "Browse Loupe's collections of engagement rings, fine jewelry, and watches.",
};

export default function CollectionsPage() {
  return (
    <div className="container-fluid py-16">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-label text-gold">Collections</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Every Piece, By Category</h1>
        <p className="mt-4 text-charcoal/70">
          Signature settings and styles from our atelier — each available as
          shown, or as the starting point for a bespoke commission.
        </p>
      </div>

      <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <Link key={collection.slug} href={`/collections/${collection.slug}`} className="group block">
            <ProductPhoto
              src={getCollectionThumbnail(collection)}
              alt={collection.name}
              label={`${collection.products.length} pieces`}
              className="transition-opacity group-hover:opacity-80"
            />
            <h2 className="mt-4 font-display text-2xl">{collection.name}</h2>
            <p className="mt-1 text-sm text-charcoal/60">{collection.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
