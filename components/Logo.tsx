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
        className={`h-7 w-7 shrink-0 ${markClassName}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="42" cy="46" r="27" stroke="currentColor" strokeWidth="6" />
        <circle cx="76" cy="24" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          d="M76 19v10M71 24h10"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path d="M58 63 L74 82 L62 79 Z" fill="currentColor" />
      </svg>
      <span className={`font-display tracking-wide ${wordmarkClassName}`}>LOUPE</span>
    </span>
  );
}
