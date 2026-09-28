import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProductPhoto from "@/components/ProductPhoto";
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
    <div className="container-fluid py-12">
      <Link href={`/collections/${collection.slug}`} className="text-xs uppercase tracking-label text-charcoal/60 hover:text-gold">
        &larr; {collection.name}
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div>
          {product.image ? (
            <ProductPhoto src={product.image} alt={product.name} priority className="w-full" />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <PlaceholderImage ratio="portrait" label={product.metal} className="sm:col-span-2" />
              <PlaceholderImage ratio="square" label="Detail" />
              <PlaceholderImage ratio="square" label="On hand" />
            </div>
          )}
        </div>

        <div>
          <p className="text-xs uppercase tracking-label text-gold">{collection.name}</p>
          <h1 className="mt-3 font-display text-4xl">{product.name}</h1>
          <p className="mt-2 text-lg text-charcoal/70">{product.price}</p>

          <p className="mt-6 leading-relaxed text-charcoal/80">{product.description}</p>

          <ul className="mt-6 space-y-2 border-t border-line pt-6 text-sm text-charcoal/70">
            {product.details.map((detail) => (
              <li key={detail} className="flex gap-2">
                <span className="text-gold">&mdash;</span>
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request This Piece
            </Link>
            <Link href="/bespoke" className="btn-outline">
              Customize This Design
            </Link>
          </div>

          <p className="mt-6 text-xs text-charcoal/50">
            Ready-to-ship pieces arrive in 2&ndash;3 weeks. Customized orders
            typically take 6&ndash;8 weeks from final approval.
          </p>
        </div>
      </div>

      {otherProducts.length > 0 && (
        <div className="mt-24 border-t border-line pt-12">
          <h2 className="font-display text-2xl">More from {collection.name}</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherProducts.map((p) => (
              <Link key={p.slug} href={`/collections/${collection.slug}/${p.slug}`} className="group block">
                <ProductPhoto
                  src={p.image}
                  alt={p.name}
                  label={p.metal}
                  className="transition-opacity group-hover:opacity-80"
                />
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg">{p.name}</h3>
                  <span className="text-sm text-charcoal/70">{p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
