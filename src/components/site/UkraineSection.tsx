import ukraine from "@/assets/ukraine.jpg";

export const UkraineSection = () => (
  <section id="ukraine" className="relative w-full">
    <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <img
        src={ukraine}
        alt="Training session in Lviv, Ukraine"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />
      <div className="absolute inset-0 flex items-center">
        <div className="container-narrow">
          <div className="reveal max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-accent-foreground bg-accent/90 px-3 py-1.5 rounded-full">
              Ukraine — since 2006
            </span>
            <h2 className="mt-5 text-5xl md:text-7xl uppercase text-white leading-[0.95]">
              Where the work was built.
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed max-w-xl">
              We've worked alongside Ukrainian communities — with veterans, displaced families,
              and the clinicians who care for them. The methods refined there now ground how we respond elsewhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
