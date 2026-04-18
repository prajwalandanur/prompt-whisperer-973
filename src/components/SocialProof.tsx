const ITEMS = [
  "Proximity-based discovery",
  "Face verified profiles",
  "Zero fake accounts",
  "iOS and Android",
  "Mutual consent connections",
  "Live event hosting",
  "15 meter proximity radar",
];

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {ITEMS.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 whitespace-nowrap text-[13px] uppercase tracking-[0.08em] text-muted-foreground"
        >
          <span className="inline-block h-[5px] w-[5px] rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SocialProof() {
  return (
    <section
      aria-label="OneMeet highlights"
      className="relative overflow-hidden border-y border-border bg-surface-soft py-6"
    >
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-soft to-transparent" />

      <div className="flex w-max animate-[om-marquee_40s_linear_infinite] items-center">
        <Row />
        <Row ariaHidden />
        <Row ariaHidden />
      </div>
    </section>
  );
}
