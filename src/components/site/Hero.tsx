import hero from "@/assets/hero.jpg";
import { HeroDonateCard } from "./HeroDonateCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";

export const Hero = () => {
  const [donateOpen, setDonateOpen] = useState(false);

  return (
  <section id="home" className="relative overflow-hidden">
    {/* Mobile: full-bleed, full-screen hero */}
    <div className="relative h-[100svh] w-full md:hidden">
      <img
        src={hero}
        alt="Trauma-informed humanitarian response"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />

      {/* Subtle gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 safe-area-bottom">
        <div className="animate-fade-up">
          <h1 className="text-[2.5rem] leading-[1.05] font-display font-semibold text-white tracking-tight">
            When the crisis<br />remains in the body.
          </h1>
          <p className="mt-5 text-base text-white/90 max-w-sm mx-auto">
            Trauma-informed humanitarian response in conflict-affected regions.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              onClick={() => setDonateOpen(true)}
              className="rounded-sm px-10 py-6 text-base font-semibold tracking-wide"
            >
              Donate
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile donate overlay */}
      {donateOpen && (
        <div className="fixed inset-0 z-[100] bg-background md:hidden animate-fade-up overflow-y-auto">
          <div className="flex justify-end p-4 safe-area-top">
            <button
              onClick={() => setDonateOpen(false)}
              aria-label="Close"
              className="p-2 text-foreground hover:opacity-70 transition-opacity"
            >
              <X size={28} />
            </button>
          </div>
          <div className="px-5 pb-12 flex justify-center">
            <HeroDonateCard variant="light" />
          </div>
        </div>
      )}
    </div>

    {/* Desktop: full-bleed hero with overlaid donate card */}
    <div className="hidden md:block relative w-full h-[88vh] min-h-[640px]">
      <img
        src={hero}
        alt="Trauma-informed humanitarian response"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />

      <div className="relative h-full container-narrow">
        <div className="grid grid-cols-12 gap-8 h-full items-center">
          <div className="col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white bg-white/15 backdrop-blur px-3 py-1.5 rounded-sm border border-white/20">
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
};
