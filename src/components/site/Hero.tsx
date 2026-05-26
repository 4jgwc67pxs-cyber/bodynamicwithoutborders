import hero from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => (
  <section id="home" className="relative overflow-hidden md:pt-28 md:pb-24">
    {/* Mobile: full-bleed, full-screen hero */}
    <div className="relative h-[100dvh] w-full md:hidden bg-primary">
      <img
        src={hero}
        alt="Trauma-informed humanitarian response"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />
      {/* Strong bottom-up gradient so text reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/95" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-14 pt-24 safe-area-bottom">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white border border-white/40 px-3 py-1.5 rounded-full">
            Field-tested in Ukraine since 2006
          </span>
          <h1 className="mt-5 text-[2.5rem] leading-[1.05] font-display font-semibold text-white tracking-tight">
            When the crisis<br />remains in the body.
          </h1>
          <p className="mt-4 text-base text-white/90 max-w-xl leading-relaxed">
            We train trauma therapists in war zones — so survivors get care where care isn't coming.
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

    {/* Desktop: full-bleed editorial hero */}
    <div className="hidden md:block relative w-full h-[88vh] min-h-[640px] max-h-[860px] bg-primary -mt-28">
      <img
        src={hero}
        alt="Trauma-informed humanitarian response"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="container-narrow w-full pb-20 lg:pb-28">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-white border border-white/40 px-3 py-1.5 rounded-full">
              Field-tested in Ukraine since 2006
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-[1.05] tracking-tight">
              When the crisis<br />remains in the body.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              We train trauma therapists in war zones — so survivors get care where care isn't coming.
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
