import hero from "@/assets/hero.jpg";
import { HeroDonateCard } from "./HeroDonateCard";

export const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    {/* Mobile: full-bleed, capped at 85vh so next section peeks */}
    <div className="relative h-[85svh] min-h-[560px] w-full md:hidden">
      <img
        src={hero}
        alt="Trauma-informed humanitarian response"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55" />

      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 pt-24 safe-area-bottom">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white bg-white/15 backdrop-blur px-3 py-1.5 rounded-sm border border-white/20">
            Field-tested in Ukraine since 2006
          </span>
          <h1 className="mt-5 hero-display font-display text-white">
            When the crisis<br />remains in the body.
          </h1>
          <p className="mt-4 text-base text-white/85 max-w-xl">
            Trauma-informed humanitarian response in conflict-affected and post-crisis regions.
          </p>
          <a
            href="#donate"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground px-6 py-3.5 rounded-sm text-sm font-semibold shadow-soft transition-all"
          >
            Donate now →
          </a>
        </div>
      </div>
    </div>

    {/* Desktop: capped at 85vh, oversized headline */}
    <div className="hidden md:block relative w-full h-[85vh] min-h-[640px]">
      <img
        src={hero}
        alt="Trauma-informed humanitarian response"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      <div className="relative h-full container-narrow">
        <div className="grid grid-cols-12 gap-8 h-full items-center">
          <div className="col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white bg-white/15 backdrop-blur px-3 py-1.5 rounded-sm border border-white/20">
              Field-tested in Ukraine since 2006
            </span>
            <h1 className="mt-6 hero-display font-display text-white">
              When the crisis<br />remains in the body.
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl">
              Trauma-informed humanitarian response in conflict-affected and post-crisis regions.
            </p>
          </div>
          <div className="col-span-5 flex justify-end animate-fade-up">
            <HeroDonateCard />
          </div>
        </div>
      </div>
    </div>
  </section>
);
