import hero from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    {/* Mobile: full-bleed, full-screen hero */}
    <div className="relative h-[100svh] w-full md:hidden">
      <img
        src={hero}
        alt="Trauma-informed humanitarian response"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />
      {/* Strong bottom-up gradient so text reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/95" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-14 pt-24 safe-area-bottom">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-accent-foreground bg-accent/90 px-3 py-1.5 rounded-full">
            Field-tested in Ukraine since 2006
          </span>
          <h1 className="mt-5 text-[3.25rem] leading-[0.92] font-display text-white uppercase">
            When crisis stays<br />in the body,<br />we go there.
          </h1>
          <p className="mt-5 text-base text-white/85 max-w-xl leading-relaxed">
            Body-oriented trauma care for people living through war, displacement and disaster — built with local clinicians, in the field.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground px-6 py-3.5 rounded-full font-semibold shadow-elegant transition-all hover:-translate-y-0.5"
            >
              Donate now <ArrowRight size={18} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3.5 rounded-full font-semibold transition-all"
            >
              See our work
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Desktop: full-bleed hero */}
    <div className="relative hidden md:block w-full h-[92vh] min-h-[640px]">
      <img
        src={hero}
        alt="Trauma-informed humanitarian response"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-primary/85" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end pb-20 lg:pb-28">
        <div className="container-narrow">
          <div className="max-w-4xl animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-[0.22em] text-accent-foreground bg-accent/90 px-3 py-1.5 rounded-full">
              Field-tested in Ukraine since 2006
            </span>
            <h1 className="mt-6 text-6xl md:text-7xl lg:text-[7.5rem] font-display text-white uppercase leading-[0.9]">
              When crisis stays in the body,<br />we go there.
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
              Body-oriented trauma care for people living through war, displacement and disaster — built with local clinicians, in the field.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#donate"
                className="inline-flex items-center gap-2 bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground px-7 py-4 rounded-full font-semibold shadow-elegant transition-all hover:-translate-y-0.5"
              >
                Donate now <ArrowRight size={18} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-7 py-4 rounded-full font-semibold transition-all"
              >
                See our work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
