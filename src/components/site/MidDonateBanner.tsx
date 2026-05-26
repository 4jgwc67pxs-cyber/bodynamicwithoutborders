import { ArrowRight } from "lucide-react";

export const MidDonateBanner = () => (
  <section className="py-12 md:py-16 bg-accent/8">
    <div className="container-narrow">
      <div className="reveal flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 md:p-10 rounded-2xl bg-card border border-border shadow-card">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">
            Become a monthly donor
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl text-primary">
            Steady support keeps the work going between crises.
          </h3>
        </div>
        <a
          href="#donate"
          className="shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-secondary text-primary-foreground px-6 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-soft"
        >
          Become a monthly donor <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </section>
);
