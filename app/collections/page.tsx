import CollectionCard from "@/components/CollectionCard";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { collections, getCollectionThumbnail } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Loupe",
  description: "Browse Loupe's collections of engagement rings, fine jewelry, and watches.",
};

export default function CollectionsPage() {
  return (
    <div className="section-space container-fluid">
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-xs uppercase tracking-label text-gold">Collections</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">Every Piece, By Category</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-charcoal/70">
            Signature settings and styles from our atelier — each available as
            shown, or as the starting point for a bespoke commission.
          </p>
        </Reveal>
      </div>

      <RevealGroup className="mt-16 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <RevealItem key={collection.slug}>
            <CollectionCard
              href={`/collections/${collection.slug}`}
              name={collection.name}
              tagline={collection.tagline}
              image={getCollectionThumbnail(collection)}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
