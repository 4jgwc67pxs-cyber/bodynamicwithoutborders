import hero from "@/assets/hero.jpg";
import { HeroDonateCard } from "./HeroDonateCard";

export const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    {/* Mobile: full-bleed, full-screen hero */}
    <div className="relative h-[100svh] w-full md:hidden">
      <img
        src={hero}
        alt="Trauma-informed humanitarian response"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />
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
          <div className="mt-7">
            <HeroDonateCard />
          </div>
        </div>
      </div>
    </div>

    {/* Desktop: full-bleed hero with overlaid donate card */}
    <div className="hidden md:block relative w-full h-[88vh] min-h-[640px]">
      <img
        src={hero}
        alt="Trauma-informed humanitarian response"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />
      {/* Left-side darkening so headline reads on photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/40 to-transparent" />
      <div className="absolute inset-0 bg-primary/10" />

      <div className="relative h-full container-narrow">
        <div className="grid grid-cols-12 gap-8 h-full items-center">
          <div className="col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground bg-accent/90 px-3 py-1.5 rounded-full">
              Field-tested in Ukraine since 2006
            </span>
            <h1 className="mt-6 text-5xl lg:text-6xl xl:text-7xl font-display font-semibold text-white leading-[1.05] tracking-tight">
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
