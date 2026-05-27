import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FieldVideo = () => (
  <section className="py-20 md:py-28 bg-muted/30">
    <div className="container-narrow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="reveal order-2 md:order-1">
          <span className="eyebrow">From the field</span>
          <h2 className="mt-4 text-3xl md:text-4xl">
            Training camp with children in Ukraine.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A glimpse from one of our recent camps — where children affected by
            the war learn body-based tools to regulate, ground, and reconnect
            with safety.
          </p>
          <Link
            to="/ukraine"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
          >
            See the Ukraine work
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="reveal order-1 md:order-2">
          <div className="relative mx-auto max-w-sm aspect-[9/16] bg-foreground rounded-sm overflow-hidden shadow-elegant">
            <video
              src="/videos/ukraine-training-camp.mp4"
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);