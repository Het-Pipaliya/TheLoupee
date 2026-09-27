type PlaceholderImageProps = {
  label?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide";
  tone?: "ivory" | "charcoal";
  className?: string;
};

const ratioClass: Record<NonNullable<PlaceholderImageProps["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export default function PlaceholderImage({
  label,
  ratio = "portrait",
  tone = "ivory",
  className = "",
}: PlaceholderImageProps) {
  const toneClasses =
    tone === "charcoal"
      ? "bg-charcoal text-gold-light"
      : "bg-ivory text-gold";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${ratioClass[ratio]} ${toneClasses} ${className}`}
    >
      <div className="absolute inset-3 border border-current/25" />
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 opacity-70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M16 24 L32 10 L48 24 L38 24 L32 54 L26 24 Z" />
        <path d="M16 24 L26 24 M38 24 L48 24" />
        <path d="M22 24 L32 40 L42 24" />
      </svg>
      {label ? (
        <span className="absolute bottom-3 left-3 right-3 text-[0.65rem] uppercase tracking-label opacity-60">
          {label}
        </span>
      ) : null}
    </div>
  );
}
