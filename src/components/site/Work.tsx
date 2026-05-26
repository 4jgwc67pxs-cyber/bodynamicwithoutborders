

const items = [
  {
    num: "01",
    step: "Arrive",
    title: "On the ground in the first weeks",
    body: "Body-based trauma sessions in shelters, displacement settings, and overstretched local services where formal care cannot yet meet the need.",
    cta: "See our field response",
  },
  {
    num: "02",
    step: "Train",
    title: "Local hands, permanent care",
    body: "Local clinicians, teachers, and first responders learn the same methods so trauma support remains in place long after the emergency phase.",
    cta: "Training programs",
  },
  {
    num: "03",
    step: "Stay",
    title: "Long after the headlines",
    body: "Crisis leaves the headlines long before it leaves the body. Our partnerships are built for the slow work of reintegration and resilience.",
    cta: "Long-term partnerships",
  },
];

export const Work = () => (
  <section id="work" className="py-20 md:py-28 bg-muted/40">
    <div className="container-narrow">
      <div className="max-w-2xl reveal">
        <span className="eyebrow">What we do</span>
        <h2 className="mt-4 text-3xl md:text-5xl">Arrive. Train. Stay.</h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Our model moves from immediate stabilization to local capacity building and long-term recovery.
          The point is not a short intervention. It is durable care.
        </p>
      </div>

      <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <article
            key={it.num}
            className="reveal group bg-card rounded-sm p-7 md:p-8 border border-border shadow-card transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-elegant"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="flex items-baseline gap-3 text-xs font-mono font-semibold tracking-wider text-accent">
              <span>{it.num}</span>
              <span className="h-px w-6 bg-accent/40" />
              <span className="uppercase">{it.step}</span>
            </div>
            <h3 className="mt-5 text-xl md:text-2xl">{it.title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{it.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
