import hero from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => (
  <section id="home" className="relative overflow-hidden md:pt-28 md:pb-24">
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
          <h1 className="mt-5 text-[2.5rem] leading-[1.05] font-display font-semibold text-white tracking-tight">
            When the crisis<br />remains in the body.
          </h1>
          <p className="mt-4 text-base text-white/85 max-w-xl">
            Trauma-informed humanitarian response in conflict-affected and post-crisis regions.
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

    {/* Desktop: original framed hero */}
    <div className="hidden md:block container-narrow">
      <div className="relative rounded-3xl overflow-hidden shadow-elegant">
        <div className="relative aspect-[21/9] w-full">
          <img
            src={hero}
            alt="Trauma-informed humanitarian response"
            className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-hero-overlay" />
          <div className="absolute inset-0 bg-primary/20" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-12 lg:p-16">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-accent-foreground bg-accent/90 px-3 py-1.5 rounded-full">
              Field-tested in Ukraine since 2006
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-[1.05] tracking-tight">
              When the crisis<br />remains in the body.
            </h1>
            <p className="mt-5 md:mt-6 text-base md:text-lg text-white/85 max-w-xl">
              Trauma-informed humanitarian response in conflict-affected and post-crisis regions.
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
    </div>
  </section>
);
