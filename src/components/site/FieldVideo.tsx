import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const videos = [
  {
    src: "/videos/ukraine-training-camp.mp4",
    poster: "/videos/ukraine-training-camp-poster.jpg",
    caption: "Children's camp · Ukraine · 2025",
  },
  {
    src: "/videos/ukraine-training-clinicians-1.mp4",
    poster: "/videos/ukraine-training-clinicians-1-poster.jpg",
    caption: "Clinician training · Ukraine · 2025",
  },
];

export const FieldVideo = () => (
  <section className="py-20 md:py-28 bg-foreground text-background">
    <div className="container-narrow">
      {/* Header */}
      <div className="reveal max-w-2xl">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
          From the field
        </span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-background">
          Ukraine, in motion.
        </h2>
        <p className="mt-5 text-lg text-background/70 leading-relaxed">
          Two windows into the work — a camp where children affected by the war
          relearn safety in their own bodies, and a training where Ukrainian
          clinicians take the method back into their practice.
        </p>
      </div>

      {/* Two portrait videos side by side */}
      <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
        {videos.map((v) => (
          <figure key={v.src} className="reveal">
            <div className="relative w-full aspect-[9/16] bg-black rounded-sm overflow-hidden ring-1 ring-background/10 shadow-elegant">
              <video
                src={v.src}
                poster={v.poster}
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
              {v.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-10 reveal">
        <Link
          to="/ukraine"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
        >
          See the Ukraine work
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);