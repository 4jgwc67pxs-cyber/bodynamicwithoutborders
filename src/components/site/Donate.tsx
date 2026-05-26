import { Check } from "lucide-react";
import { HeroDonateCard } from "./HeroDonateCard";

const points = [
  "Rapid crisis support in conflict-affected communities",
  "Training programs for local professionals",
  "Direct trauma recovery and long-term resilience work",
];

export const Donate = () => {
  return (
    <section id="donate" className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="reveal rounded-md bg-gradient-navy text-primary-foreground overflow-hidden shadow-elegant">
          <div className="grid lg:grid-cols-5 gap-10 p-8 md:p-12 lg:p-16">
            {/* Left — pitch */}
            <div className="lg:col-span-2">
              <span className="eyebrow !text-accent">Act now</span>
              <h2 className="mt-4 text-3xl md:text-4xl text-white leading-tight">
                Help trauma healing reach crisis zones.
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/80">
                Your support brings trauma-informed humanitarian response to people affected by war,
                displacement, and disaster.
              </p>
              <ul className="mt-8 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-white/85">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — donation card */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <HeroDonateCard variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
