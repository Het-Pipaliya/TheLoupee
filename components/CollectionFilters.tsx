import Link from "next/link";

type Option = { value: string; label: string };

function Pill({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`border px-4 py-2 text-xs uppercase tracking-label transition-colors ${
        active
          ? "border-ink bg-ink text-paper"
          : "border-line text-charcoal/70 hover:border-ink hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}

export default function CollectionFilters({
  basePath,
  styles,
  genders,
  showOptions,
  current,
}: {
  basePath: string;
  styles: Option[];
  genders: Option[];
  showOptions: Option[];
  current: { style?: string; gender?: string; show?: string };
}) {
  if (styles.length === 0 && genders.length === 0 && showOptions.length === 0) return null;

  const hasActiveFilter = Boolean(current.style || current.gender || current.show);

  return (
    <div className="mb-10 flex flex-wrap items-center gap-2">
      <Pill href={basePath} label="All" active={!hasActiveFilter} />
      {showOptions.map((opt) => (
        <Pill
          key={opt.value}
          href={`${basePath}?show=${opt.value}`}
          label={opt.label}
          active={current.show === opt.value}
        />
      ))}
      {styles.map((opt) => (
        <Pill
          key={opt.value}
          href={`${basePath}?style=${opt.value}`}
          label={opt.label}
          active={current.style === opt.value}
        />
      ))}
      {genders.map((opt) => (
        <Pill
          key={opt.value}
          href={`${basePath}?gender=${opt.value}`}
          label={opt.label}
          active={current.gender === opt.value}
        />
      ))}
    </div>
  );
}
