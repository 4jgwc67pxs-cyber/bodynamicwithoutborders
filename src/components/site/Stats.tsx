const stats = [
  { num: "2006", label: "On the ground since", sub: "Continuous work with Ukrainian clinicians and veterans" },
  { num: "4", label: "Bodynamic modules", sub: "Each Equal-to-Equal training spans 8+ months" },
  { num: "40+", label: "Local clinicians", sub: "Now supervising trauma teams across Ukraine" },
  { num: "100%", label: "Survivor-led", sub: "Programs designed with the people who use them" },
];

export const Stats = () => (
  <section id="impact" className="py-16 md:py-24 bg-primary text-primary-foreground">
    <div className="container-narrow">
      <div className="reveal max-w-2xl mb-12 md:mb-16">
        <span className="eyebrow !text-accent">Our impact</span>
        <h2 className="mt-3 text-3xl md:text-4xl text-white leading-tight">
          Small numbers. Real ground.
        </h2>
        <p className="mt-4 text-white/70 text-sm md:text-base leading-relaxed">
          We don't run on inflated statistics. Every figure below reflects verifiable work
          with named clinicians, units, and partners in Ukraine.
        </p>
      </div>
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
