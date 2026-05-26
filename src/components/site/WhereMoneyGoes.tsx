const allocations = [
  { label: "Field programs", pct: 72, note: "Direct trauma care & response" },
  { label: "Local training", pct: 18, note: "Equipping clinicians & first responders" },
  { label: "Operations", pct: 10, note: "Coordination, safety, admin" },
];

export const WhereMoneyGoes = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container-narrow">
      <div className="reveal max-w-2xl">
        <span className="eyebrow">Transparency</span>
        <h2 className="mt-5 text-4xl md:text-6xl uppercase">Where your money goes.</h2>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          We keep the structure lean so the majority of every donation reaches people in the field.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 reveal">
        {allocations.map((a) => (
          <div key={a.label} className="bg-card border border-border rounded-2xl p-7 shadow-card">
            <div className="font-display text-6xl md:text-7xl text-primary leading-none">{a.pct}%</div>
            <div className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent">{a.label}</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.note}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted-foreground reveal">
        Indicative allocation. Verified figures published in our annual report.
      </p>
    </div>
  </section>
);