import apa from "@/assets/apa2023.jpg";

const regions = [
  { name: "Ukraine & Eastern Europe", status: "Active" },
  { name: "Middle East", status: "Active" },
  { name: "Sub-Saharan Africa", status: "Active" },
  { name: "Latin America", status: "Partner-led" },
  { name: "South & Southeast Asia", status: "Emerging" },
];

export const Global = () => (
  <section id="global" className="py-20 md:py-28">
    <div className="container-narrow">
      <div className="max-w-2xl reveal">
        <span className="eyebrow">Where we work</span>
        <h2 className="mt-4 text-3xl md:text-5xl">From Ukraine to the world.</h2>
      </div>
      <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="reveal">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The experience developed in Ukraine now informs crisis response in other vulnerable regions.
            We work through local partnerships, training, and long-term recovery structures rather than
            short deployment alone.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {regions.map((r) => {
              const active = r.status === "Active";
              return (
                <li key={r.name} className="flex items-center gap-4 py-4">
                  <span
                    className={`w-2 h-2 rounded-full ${active ? "bg-accent" : "bg-muted-foreground/40"}`}
                  />
                  <span className="flex-1 font-medium text-primary">{r.name}</span>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      active ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {r.status}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="reveal">
          <div className="relative rounded-sm overflow-hidden shadow-elegant">
            <img src={apa} alt="APA Society for Military Psychology" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-sm text-xs font-medium text-primary">
              Partners
            </div>
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-primary/90 to-transparent text-white text-sm">
              <div className="font-medium">APA — Society for Military Psychology</div>
              <div className="text-white/70 text-xs">2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
