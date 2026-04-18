type LogoProps = {
  className?: string;
  /** Tailwind text size classes, e.g. "text-[20px] md:text-[22px]" */
  sizeClassName?: string;
  /** Override the navy parts color (defaults to text-navy) */
  baseColorClassName?: string;
};

/**
 * OneMeet wordmark.
 * - Poppins, semi-bold, tight tracking.
 * - The leading "O" is rendered in a warm yellow tone, sized to match the cap-height of "M".
 */
export function Logo({
  className = "",
  sizeClassName = "text-[20px] md:text-[22px]",
  baseColorClassName = "text-navy",
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center font-semibold leading-none tracking-[-0.02em] ${sizeClassName} ${baseColorClassName} ${className}`}
      style={{ fontFamily: "'Poppins', 'Inter', system-ui, sans-serif" }}
    >
      <span
        aria-hidden="true"
        style={{
          color: "#F5C518",
          fontSize: "1.08em",
          lineHeight: 1,
          display: "inline-block",
          transform: "translateY(0.01em)",
        }}
      >
        O
      </span>
      <span style={{ lineHeight: 1 }}>neMeet</span>
    </span>
  );
}
