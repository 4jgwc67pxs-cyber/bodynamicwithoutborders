import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FieldVideo = () => (
  <section className="py-20 md:py-28 bg-foreground text-background">
    <div className="container-narrow">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Video frame — portrait, intentionally contained */}
        <figure className="reveal md:col-span-5 md:col-start-1">
          <div className="relative mx-auto w-full max-w-[280px] md:max-w-none aspect-[9/16] bg-black rounded-sm overflow-hidden ring-1 ring-background/10 shadow-elegant">
            <video
              src="/videos/ukraine-training-camp.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
            <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm bg-background/90 text-foreground">
              Field footage
            </span>
          </div>
          <figcaption className="mt-4 text-xs uppercase tracking-wider text-background/50">
            Training camp · Ukraine · 2025
          </figcaption>
        </figure>

        {/* Text */}
        <div className="reveal md:col-span-6 md:col-start-7">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            From the field
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-background">
            A training camp for the children of the war.
          </h2>
          <p className="mt-5 text-lg text-background/70 leading-relaxed">
            Thirty seconds from a recent camp — where children affected by the
            war learn body-based tools to regulate, ground, and feel safe in
            their own bodies again.
          </p>
          <Link
            to="/ukraine"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
          >
            See the Ukraine work
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);