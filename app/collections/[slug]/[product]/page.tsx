import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductZoom from "@/components/ProductZoom";
import ProductPhoto from "@/components/ProductPhoto";
import InquiryCTA from "@/components/InquiryCTA";
import MobileContactBar from "@/components/MobileContactBar";
import Accordion, { AccordionItem } from "@/components/Accordion";
import Reveal from "@/components/Reveal";
import { collections, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return collections.flatMap((c) =>
    c.products.map((p) => ({ slug: c.slug, product: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; product: string }>;
}): Promise<Metadata> {
  const { slug, product: productSlug } = await params;
  const { product } = getProduct(slug, productSlug);
  if (!product) return {};
  return {
    title: `${product.name} | Loupe`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; product: string }>;
}) {
  const { slug, product: productSlug } = await params;
  const { collection, product } = getProduct(slug, productSlug);
  if (!collection || !product) notFound();

  const otherProducts = collection.products.filter((p) => p.slug !== product.slug);

  return (
    <div className="pb-24 md:pb-0">
      <div className="container-fluid pt-8">
        <Link href={`/collections/${collection.slug}`} className="text-xs uppercase tracking-label text-charcoal/60 hover:text-gold">
          &larr; {collection.name}
        </Link>
      </div>

      <div className="container-fluid mt-6 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <ProductZoom src={product.image} alt={product.name} label={product.metal} />
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs uppercase tracking-label text-gold">{collection.name}</p>
          <h1 className="mt-3 font-display text-4xl leading-tight">{product.name}</h1>
          <p className="mt-3 text-lg text-charcoal/70">
            {product.priceOnRequest ? "Price Upon Request" : product.price}
          </p>

          <p className="mt-6 leading-relaxed text-charcoal/80">{product.description}</p>
          <p className="mt-3 text-sm text-charcoal/60">{product.metal}</p>

          <div className="mt-8">
            <Accordion>
              <AccordionItem title="Details" defaultOpen>
                <ul className="space-y-2">
                  {product.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="text-gold">&mdash;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </AccordionItem>
              <AccordionItem title="Materials &amp; Stones">
                <p>{product.metal}. Center and accent stones are independently graded and traceable to source.</p>
              </AccordionItem>
              <AccordionItem title="Craftsmanship">
                <p>Hand-fabricated on the bench by our goldsmiths — cut, soldered, and set individually, not cast from a mold.</p>
              </AccordionItem>
              <AccordionItem title="Shipping &amp; Returns">
                <p>
                  Ready-to-ship pieces arrive in 2&ndash;3 weeks; customized
                  orders typically take 6&ndash;8 weeks from final approval.
                  Every piece ships fully insured, signature required.
                </p>
              </AccordionItem>
              <AccordionItem title="Care">
                <p>Includes lifetime cleaning, inspection, and complimentary resizing within the first year.</p>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-8">
            <InquiryCTA productName={product.name} />
          </div>

          <Link href="/bespoke" className="btn-text mt-6">
            Customize This Design
            <span className="arrow">&rarr;</span>
          </Link>
        </div>
      </div>

      {otherProducts.length > 0 && (
        <div className="container-fluid mt-24 border-t border-line pt-14">
          <h2 className="font-display text-2xl">More from {collection.name}</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link href={`/collections/${collection.slug}/${p.slug}`} className="group block" data-cursor="Explore">
                  <ProductPhoto
                    src={p.image}
                    alt={p.name}
                    label={p.metal}
                  />
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg">{p.name}</h3>
                    <span className="text-sm text-charcoal/70">{p.price}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <MobileContactBar productName={product.name} />
    </div>
  );
}
