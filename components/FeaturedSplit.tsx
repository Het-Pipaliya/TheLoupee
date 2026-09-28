import Link from "next/link";
import ImageReveal from "./ImageReveal";
import Reveal from "./Reveal";

export default function FeaturedSplit({
  eyebrow,
  title,
  description,
  href,
  cta,
  image,
  imageAlt,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  image?: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section className="section-space border-t border-line">
      <div className="container-fluid grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className={reverse ? "md:order-2" : ""}>
          {image ? (
            <ImageReveal src={image} alt={imageAlt} className="aspect-[4/5] bg-ivory" sizes="(min-width: 768px) 50vw, 100vw" />
          ) : (
            <div className="aspect-[4/5] bg-ivory" />
          )}
        </div>
        <div className={reverse ? "md:order-1" : ""}>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">{title}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-charcoal/75">{description}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link href={href} className="btn-text mt-8">
              {cta}
              <span className="arrow">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
