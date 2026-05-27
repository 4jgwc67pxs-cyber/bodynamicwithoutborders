const allocations = [
  { label: "Field programs", pct: 78, note: "Direct trauma care, deployments" },
  { label: "Clinician training", pct: 14, note: "Local capacity building" },
  { label: "Operations & admin", pct: 8, note: "Audited annually [edit]" },
];

export const Transparency = () => {
  return (
    <section id="transparency" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Where your money goes
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-foreground tracking-tight">
            Every euro is accounted for.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            We publish a full financial breakdown each year. The vast majority of every donation
            goes directly to trauma care in the field — not to overhead.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {allocations.map((a) => (
            <div key={a.label}>
              <div className="flex items-baseline justify-between">
                <div className="text-sm font-semibold text-foreground">{a.label}</div>
                <div className="font-display text-2xl font-semibold text-foreground">
                  {a.pct}%
                </div>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-border overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full"
                  style={{ width: `${a.pct}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{a.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-muted-foreground">
          <a href="#" className="underline underline-offset-4 hover:text-accent transition-colors">
            Read our latest annual report [edit]
          </a>
        </div>
      </div>
    </section>
  );
};