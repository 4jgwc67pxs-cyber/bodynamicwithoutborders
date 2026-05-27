const stats = [
  { num: "2,400+", label: "People treated", sub: "In crisis zones and displacement camps [edit]" },
  { num: "180", label: "Local clinicians trained", sub: "Building lasting in-country capacity [edit]" },
  { num: "18 yrs", label: "On the ground in Ukraine", sub: "Continuous presence since 2006" },
  { num: "40→8%", label: "PTSD reduction", sub: "Documented in Ukraine veteran cohort" },
];

export const Stats = () => (
  <section id="impact" className="py-16 md:py-24 bg-primary text-primary-foreground">
    <div className="container-narrow">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-12 gap-x-8">
        {stats.map((s, i) => (
          <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white">
              {s.num}
            </div>
            <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-accent">
              {s.label}
            </div>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
