import ukraine from "@/assets/ukraine.jpg";


export const UkraineSection = () => (
  <section id="ukraine" className="py-20 md:py-28">
    <div className="container-narrow grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="reveal relative">
        <div className="relative rounded-sm overflow-hidden shadow-soft">
          <img src={ukraine} alt="Training session in Lviv" className="w-full aspect-[4/5] object-cover" />
          <div className="absolute top-4 left-4 bg-background/95 backdrop-blur px-3 py-1 rounded-sm text-xs font-medium text-primary">
            Ukraine
          </div>
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-primary/90 to-transparent text-white text-sm">
            <div className="font-medium">Training session, Lviv</div>
            <div className="text-white/70 text-xs">September 2023</div>
          </div>
        </div>
      </div>

      <div className="reveal">
        <span className="eyebrow">Ukraine is our operational proof</span>
        <h2 className="mt-4 text-3xl md:text-5xl">Where the work was built.</h2>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Since 2006, we've worked alongside Ukrainian communities — with veterans, displaced families,
          and the clinicians who care for them. The methods refined there now ground how we respond elsewhere.
        </p>

        <div className="mt-8 p-6 md:p-8 bg-muted/60 border border-border rounded-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">
            Sustained PTSD reduction
          </div>
          <div className="mt-3 font-display text-4xl md:text-5xl font-semibold text-primary flex items-baseline gap-3 flex-wrap">
            40% <span className="text-accent text-2xl">→</span> 8%
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Documented in a Ukrainian veteran cohort, across treatment and follow-up.
          </p>
        </div>
      </div>
    </div>
  </section>
);
