import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProductCard from "@/components/ProductCard";
import CollectionFilters from "@/components/CollectionFilters";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { PHONE_PRIMARY, telHref } from "@/lib/contact";
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
        <PlaceholderImage ratio="wide" label={collection.name} className="h-[65vh] min-h-[440px] w-full" />
        <div className="absolute inset-0 flex items-center bg-ink/30">
          <div className="container-fluid">
            <Link href="/collections" className="text-xs uppercase tracking-label text-paper/70 hover:text-gold-light">
              &larr; All Collections
            </Link>
            <h1 className="mt-5 font-display text-5xl text-paper md:text-6xl">{collection.name}</h1>
            <p className="mt-4 max-w-xl text-paper/85">{collection.description}</p>
          </div>
        </div>
      </section>

      <section className="section-space container-fluid">
        <CollectionFilters
          basePath={`/collections/${collection.slug}`}
          styles={availableStyles}
          genders={availableGenders}
          showOptions={showOptions}
          current={{ style, gender, show }}
        />

        {filteredProducts.length > 0 ? (
          <RevealGroup className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <RevealItem key={product.slug}>
                <ProductCard product={product} collectionSlug={collection.slug} />
              </RevealItem>
            ))}
          </RevealGroup>
        ) : (
          <p className="py-12 text-center text-charcoal/60">
            No pieces match that filter yet — speak with a specialist and we&apos;ll source or build one for you.
          </p>
        )}

        <Reveal className="mt-20 border-t border-line pt-12 text-center">
          <p className="font-display text-2xl">Don&apos;t see the right piece?</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-charcoal/70">
            Every design here can be customized in metal, stone, and size —
            or used as a starting point for something entirely bespoke.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/bespoke" className="btn-outline">
              Begin Your Commission
            </Link>
            <a href={telHref(PHONE_PRIMARY)} className="btn-text">
              Call {PHONE_PRIMARY}
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
