import taras from "@/assets/taras.jpg";
import { ArrowRight, Quote } from "lucide-react";

export const Story = () => (
  <section id="stories" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "radial-gradient(circle at 25% 30%, white 1px, transparent 1px)",
      backgroundSize: "32px 32px"
    }} />
    <div className="container-narrow grid lg:grid-cols-5 gap-10 lg:gap-16 items-center relative">
      <div className="reveal lg:col-span-2">
        <div className="relative rounded-2xl overflow-hidden shadow-elegant">
          <img src={taras} alt="Taras Kovalyk" className="w-full aspect-[4/5] object-cover" />
          <div className="absolute top-4 left-4 bg-accent px-3 py-1 rounded-full text-xs font-semibold text-accent-foreground">
            Veterans program
          </div>
        </div>
      </div>
      <div className="reveal lg:col-span-3">
        <span className="eyebrow !text-accent">A human story</span>
        <h2 className="mt-4 text-3xl md:text-5xl text-white">A story from Ukraine.</h2>
        <Quote className="mt-8 text-accent" size={36} strokeWidth={1.5} />
        <blockquote className="mt-3 font-display text-2xl md:text-3xl leading-snug text-white/95 italic">
          Suddenly you want the future to come — to plan, to live more than one day.
        </blockquote>
        <div className="mt-6 text-sm">
          <div className="font-semibold text-white">Taras Kovalyk</div>
          <div className="text-white/60">Wounded combat veteran, Ukraine — Equal to Equal training</div>
        </div>
        <p className="mt-6 text-white/75 leading-relaxed max-w-2xl">
          Wounded on the front in 2014, Taras came home but couldn't find his way back. Over five months
          in Ditte Marcher's Equal to Equal training, body-based trauma work helped him rebuild a relationship,
          enroll in university, and re-enter civilian life with presence instead of reaction.
        </p>
        <a href="#" className="mt-7 inline-flex items-center gap-2 text-white border-b border-accent pb-1 font-medium hover:gap-3 transition-all">
          Read more stories <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </section>
);
