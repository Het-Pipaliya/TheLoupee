import Reveal from "./Reveal";

export default function BrandStatement({
  eyebrow,
  lines,
  tone = "ivory",
}: {
  eyebrow?: string;
  lines: string[];
  tone?: "ivory" | "charcoal";
}) {
  const isCharcoal = tone === "charcoal";
  return (
    <section className={`section-space ${isCharcoal ? "bg-charcoal text-paper" : "bg-paper text-ink"}`}>
      <div className="container-fluid text-center">
        {eyebrow ? (
          <Reveal>
            <p className={`text-xs uppercase tracking-[0.3em] ${isCharcoal ? "text-gold-light" : "text-gold"}`}>
              {eyebrow}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-4xl font-display text-4xl leading-[1.15] md:text-6xl">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
