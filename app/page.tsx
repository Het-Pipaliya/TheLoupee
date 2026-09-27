import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProductCard from "@/components/ProductCard";
import { collections, getFeaturedProducts } from "@/lib/products";

export default function Home() {
  const featured = getFeaturedProducts(4);

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <PlaceholderImage ratio="wide" label="Atelier — hand-fabrication" className="h-[70vh] w-full" />
        <div className="absolute inset-0 flex items-center bg-ink/20">
          <div className="container-fluid">
            <p className="text-xs uppercase tracking-label text-paper/80">Fine Jewelry &amp; Watches</p>
            <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-paper md:text-6xl">
              Jewelry built around the person who wears it.
            </h1>
            <p className="mt-6 max-w-md text-paper/85">
              Hand-fabricated engagement rings, fine jewelry, and curated
              watches — designed in dialogue with you, made in our atelier.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/collections/engagement-rings" className="btn-primary">
                Shop Engagement Rings
              </Link>
              <Link href="/bespoke" className="btn-outline !border-paper !text-paper hover:!bg-paper hover:!text-ink">
                Start a Bespoke Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro statement */}
      <section className="container-fluid py-20 text-center">
        <p className="mx-auto max-w-3xl font-display text-2xl leading-relaxed text-charcoal md:text-3xl">
          Every piece we make begins the same way: a conversation. From a
          single sketch to the final polish, our designers and goldsmiths
          work under one roof — so what you commission is exactly what you
          receive.
        </p>
      </section>

      {/* Collections grid */}
      <section className="container-fluid pb-20">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl">Shop by Collection</h2>
          <Link href="/collections" className="text-xs uppercase tracking-label hover:text-gold">
            View All
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.slice(0, 6).map((collection) => (
            <Link key={collection.slug} href={`/collections/${collection.slug}`} className="group block">
              <PlaceholderImage ratio="square" label={collection.name} className="transition-opacity group-hover:opacity-80" />
              <h3 className="mt-4 font-display text-xl">{collection.name}</h3>
              <p className="mt-1 text-sm text-charcoal/60">{collection.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bespoke banner */}
      <section className="bg-charcoal text-paper">
        <div className="container-fluid grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-label text-gold-light">Bespoke Design</p>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              Can&apos;t find it in our collections? Let&apos;s design it together.
            </h2>
            <p className="mt-6 max-w-md text-paper/75">
              Our bespoke process pairs you with a designer for a private
              consultation, hand-rendered sketches, and a 3D model you can
              review before a single stone is set.
            </p>
            <Link href="/bespoke" className="mt-8 inline-flex btn-primary !bg-gold !text-ink hover:!bg-gold-light">
              Explore Bespoke Design
            </Link>
          </div>
          <PlaceholderImage ratio="landscape" tone="charcoal" label="Design consultation" />
        </div>
      </section>

      {/* Featured pieces */}
      <section className="container-fluid py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl">Recently Added</h2>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} collectionSlug={product.collectionSlug} />
          ))}
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="border-t border-line bg-ivory">
        <div className="container-fluid grid gap-12 py-20 md:grid-cols-3">
          {[
            {
              title: "Hand-Fabricated",
              body: "Nearly every piece is built by hand from raw metal, not cast from a mold — the traditional goldsmith's method.",
            },
            {
              title: "Ethically Sourced",
              body: "Every diamond and gemstone is traceable, conflict-free, and independently graded before it reaches the bench.",
            },
            {
              title: "Made to Last",
              body: "Each commission includes lifetime cleaning, inspection, and complimentary resizing within the first year.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
