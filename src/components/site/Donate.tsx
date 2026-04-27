import { ArrowRight, Check } from "lucide-react";

const points = [
  "Rapid crisis support in conflict-affected communities",
  "Training programs for local professionals",
  "Direct trauma recovery and long-term resilience work",
];

export const Donate = () => (
  <section id="donate" className="py-20 md:py-28">
    <div className="container-narrow">
      <div className="reveal rounded-3xl bg-gradient-navy text-primary-foreground overflow-hidden shadow-elegant">
        <div className="grid lg:grid-cols-5 gap-8 p-8 md:p-12 lg:p-16">
          <div className="lg:col-span-3">
            <span className="eyebrow !text-accent">Act now</span>
            <h2 className="mt-4 text-3xl md:text-5xl text-white">
              Help trauma healing reach crisis zones.
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl">
              Your support helps bring trauma-informed humanitarian response to people affected by war,
              displacement, and disaster.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground px-7 py-4 rounded-full font-semibold shadow-elegant transition-all hover:-translate-y-0.5"
              >
                Donate now <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-7 py-4 rounded-full font-semibold transition-all"
              >
                Become a partner
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 lg:pl-8 lg:border-l border-white/15">
            <div className="text-sm font-semibold uppercase tracking-wider text-accent">
              How your support is used
            </div>
            <p className="mt-3 text-sm text-white/75">
              Donations are directly allocated to:
            </p>
            <ul className="mt-5 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-white/85">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
