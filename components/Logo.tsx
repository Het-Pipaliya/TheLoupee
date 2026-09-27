export default function Logo({
  className = "",
  markClassName = "",
  wordmarkClassName = "",
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className={`h-8 w-8 shrink-0 ${markClassName}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="46" cy="50" r="30" stroke="currentColor" strokeWidth="9" />
        <circle cx="67" cy="30" r="9" stroke="currentColor" strokeWidth="3.6" />
        <path d="M67 26v8M63 30h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M64 74 L76 86 L58 79 Z" fill="currentColor" />
      </svg>
      <span className={`font-sans font-light tracking-[0.35em] ${wordmarkClassName}`}>LOUPE</span>
    </span>
  );
}
