const partners = [
  "Bodynamic International",
  "Ukrainian veteran networks",
  "Local NGO partners",
  "Independent clinicians",
];

export const Partners = () => (
  <section id="about" className="py-20 md:py-24 bg-background border-t border-border">
    <div className="container-narrow">
      <div className="reveal max-w-2xl">
        <span className="eyebrow">Who we work with</span>
        <h2 className="mt-5 text-3xl md:text-5xl uppercase">Built with people on the ground.</h2>
        <p className="mt-5 text-base text-muted-foreground leading-relaxed">
          We work in partnership with local clinicians, veteran networks and humanitarian organisations.
          The work belongs to the communities it serves.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border reveal">
        {partners.map((p) => (
          <div key={p} className="bg-background p-6 md:p-8 flex items-center justify-center text-center">
            <span className="font-display uppercase text-lg md:text-xl text-primary leading-tight">{p}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);