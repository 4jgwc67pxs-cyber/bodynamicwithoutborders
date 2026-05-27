const partners = [
  "Ministry of Health [edit]",
  "Armed Forces of Ukraine",
  "Veteran Hub",
  "UNHCR partner [edit]",
  "Bodynamic Institute",
  "University partner [edit]",
];

export const Partners = () => (
  <section aria-label="Partners and recognition" className="py-16 md:py-20 border-y border-border bg-muted/20">
    <div className="container-narrow">
      <div className="text-center reveal">
        <span className="eyebrow">Partners & recognition</span>
        <h2 className="mt-3 text-xl md:text-2xl font-display font-semibold text-foreground">
          Trusted by the institutions doing the work alongside us.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-sm overflow-hidden reveal">
        {partners.map((p) => (
          <div
            key={p}
            className="bg-background flex items-center justify-center px-4 py-8 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  </section>
);