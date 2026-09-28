import Link from "next/link";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import FeaturedSplit from "@/components/FeaturedSplit";
import CollectionCard from "@/components/CollectionCard";
import ProductCard from "@/components/ProductCard";
import CraftsmanshipStory from "@/components/CraftsmanshipStory";
import PrivateClientSection from "@/components/PrivateClientSection";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { collections, getCollection, getCollectionThumbnail, getFeaturedProducts } from "@/lib/products";
import heroImage from "@/public/images/hero-hands.webp";

export default function Home() {
  const featured = getFeaturedProducts(4);
  const engagementRings = getCollection("engagement-rings")!;

  return (
    <div>
      <Hero image={heroImage} />

      <FeaturedSplit
        eyebrow="Signature Setting"
        title="Solstice Solitaire"
        description="A tapered cathedral shank lifts a single round brilliant into the light, its lines polished to a mirror finish — hand-fabricated, not cast, and built to be worn every day for the rest of a life."
        href="/collections/engagement-rings/solstice-solitaire"
        cta="Discover the Setting"
        image={getCollectionThumbnail(engagementRings)}
        imageAlt="Solstice Solitaire engagement ring"
      />

      <section className="section-space">
        <div className="container-fluid">
          <div className="flex items-end justify-between">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl">Shop by Collection</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/collections" className="btn-text">
                View All
                <span className="arrow">&rarr;</span>
              </Link>
            </Reveal>
          </div>
          <RevealGroup className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {collections.slice(0, 6).map((collection) => (
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
      </section>

      <BrandStatement
        eyebrow="Our Philosophy"
        lines={["Made by hand.", "Made for one."]}
      />

      <section className="relative section-space overflow-hidden bg-charcoal text-paper">
        <div className="container-fluid grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-light">The Bespoke Experience</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
                Can&apos;t find it in our collections?
                <br />
                Let&apos;s design it together.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-paper/75">
                Our bespoke process pairs you with a designer for a private
                consultation, hand-rendered sketches, and a 3D model you can
                review before a single stone is set.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link href="/bespoke" className="mt-9 inline-flex btn-primary !bg-gold !text-ink !border-gold hover:!bg-paper">
                Begin Your Commission
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="border border-paper/15 bg-paper/5 p-10 md:p-14">
            <ol className="flex flex-col gap-6 text-sm">
              {["Consultation", "Design", "Stone Selection", "Hand Fabrication", "Final Presentation"].map(
                (step, i) => (
                  <li key={step} className="flex items-baseline gap-4 border-b border-paper/10 pb-6 last:border-0 last:pb-0">
                    <span className="font-display text-xl text-gold-light">0{i + 1}</span>
                    <span className="uppercase tracking-[0.16em] text-paper/85">{step}</span>
                  </li>
                ),
              )}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-fluid">
          <div className="flex items-end justify-between">
            <div>
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl">Recently Added</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-2 text-sm text-charcoal/60">New settings from the atelier.</p>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <RevealItem key={product.slug}>
                <ProductCard product={product} collectionSlug={product.collectionSlug} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CraftsmanshipStory />

      <PrivateClientSection />
    </div>
  );
}
