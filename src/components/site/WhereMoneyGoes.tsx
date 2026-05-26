const allocations = [
  { pct: "70%", label: "Direct field work", desc: "Trauma sessions, mobile clinics, crisis deployments" },
  { pct: "20%", label: "Clinician training", desc: "Equal-to-Equal modules for local therapists" },
  { pct: "10%", label: "Operations", desc: "Coordination, travel, and program oversight" },
];

export const WhereMoneyGoes = () => (
  <section className="py-16 md:py-24 bg-muted/40">
    <div className="container-narrow">
      <div className="reveal max-w-2xl">
        <span className="eyebrow">Where your money goes</span>
        <h2 className="mt-3 text-3xl md:text-4xl text-primary leading-tight">
          Every euro, accounted for.
        </h2>
        <p className="mt-4 text-muted-foreground text-base leading-relaxed">
          We keep our operational footprint deliberately small so the majority of every
          donation reaches the people doing the work on the ground.
        </p>
      </div>

      <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
        {allocations.map((a, i) => (
          <div
            key={a.label}
            className="reveal bg-background rounded-2xl p-7 md:p-8 border border-border shadow-card"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="font-display text-5xl md:text-6xl font-semibold text-primary tracking-tight">
              {a.pct}
            </div>
            <div className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent">
              {a.label}
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);