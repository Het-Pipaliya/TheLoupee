import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProductCard from "@/components/ProductCard";
import CollectionFilters from "@/components/CollectionFilters";
import {
  collections,
  filterProducts,
  getAvailableGenders,
  getAvailableStyles,
  getCollection,
} from "@/lib/products";

const showLabels: Record<string, string> = {
  "best-sellers": "Best Sellers",
  new: "New Arrivals",
  "ready-to-ship": "Ready-to-Ship",
};

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return {
    title: `${collection.name} | Loupe`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ style?: string; gender?: string; show?: string }>;
}) {
  const { slug } = await params;
  const { style, gender, show } = await searchParams;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const filteredProducts = filterProducts(collection.products, { style, gender, show: show as "best-sellers" | "new" | "ready-to-ship" | undefined });
  const availableStyles = getAvailableStyles(collection.products);
  const availableGenders = getAvailableGenders(collection.products);
  const showOptions = (["best-sellers", "new", "ready-to-ship"] as const)
    .filter((key) => collection.products.some((p) => (key === "best-sellers" ? p.bestSeller : key === "new" ? p.isNew : p.readyToShip)))
    .map((key) => ({ value: key, label: showLabels[key] }));

  return (
    <div>
      <section className="relative">
        <PlaceholderImage ratio="wide" label={collection.name} className="h-[45vh] w-full" />
        <div className="absolute inset-0 flex items-center bg-ink/30">
          <div className="container-fluid">
            <Link href="/collections" className="text-xs uppercase tracking-label text-paper/70 hover:text-gold-light">
              &larr; All Collections
            </Link>
            <h1 className="mt-4 font-display text-4xl text-paper md:text-5xl">{collection.name}</h1>
            <p className="mt-3 max-w-xl text-paper/85">{collection.description}</p>
          </div>
        </div>
      </section>

      <section className="container-fluid py-16">
        <CollectionFilters
          basePath={`/collections/${collection.slug}`}
          styles={availableStyles}
          genders={availableGenders}
          showOptions={showOptions}
          current={{ style, gender, show }}
        />

        {filteredProducts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} collectionSlug={collection.slug} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-charcoal/60">
            No pieces match that filter yet — a designer can source or build one for you.
          </p>
        )}

        <div className="mt-16 border-t border-line pt-10 text-center">
          <p className="font-display text-2xl">Don&apos;t see the right piece?</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-charcoal/70">
            Every design here can be customized in metal, stone, and size —
            or used as a starting point for something entirely bespoke.
          </p>
          <Link href="/bespoke" className="mt-6 inline-flex btn-outline">
            Start a Bespoke Commission
          </Link>
        </div>
      </section>
    </div>
  );
}
