import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProductCard from "@/components/ProductCard";
import { collections, getCollection } from "@/lib/products";

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
    title: `${collection.name} | The Loupee`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {collection.products.map((product) => (
            <ProductCard key={product.slug} product={product} collectionSlug={collection.slug} />
          ))}
        </div>

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
