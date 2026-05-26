import kateryna from "@/assets/kateryna.jpg";
import vitaliy from "@/assets/vitaliy.jpg";
import { ArrowRight, Quote, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const stories = [
  {
    img: kateryna,
    tag: "Volunteer recovery",
    name: "Kateryna Podzizey",
    role: "Combat medic & volunteer, Ukraine",
    quote:
      "The war changed me. It is not good and not bad. It is just a fact — now I need to accept this new me.",
    excerpt:
      "A tactical medic on the front lines since 2014, Kateryna lived the contrasts of war — coffee and laughter by day, evacuating the wounded to Mariupol by night. She came home to find that the woman who left was not the woman who returned.",
    outcome: "From chaotic survival to goal-oriented recovery.",
  },
  {
    img: vitaliy,
    tag: "Clinician recovery",
    name: "Vitaliy Kabashniuk",
    role: "Therapist & medic, Maidan first-aid post",
    quote:
      "An old lecturer is crying talking about psychogenic self-regulation and cannot get a hold of himself. Then a student stood up and clapped.",
    excerpt:
      "Twenty-five years of medicine did not prepare Vitaliy for the stream of patients at the Maidan first-aid post. The crying attacks came later — in trains, in cathedrals, in the middle of his own university lectures. Bodynamics gave him a way back.",
    outcome: "From uncontrollable spasms to steady professional ground.",
  },
];

export const Story = () => (
  <section id="stories" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle at 25% 30%, white 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    <div className="container-narrow relative">
      <div className="reveal max-w-3xl">
        <span className="eyebrow !text-accent">Human stories</span>
        <h2 className="mt-4 text-3xl md:text-5xl text-white leading-[1.05]">
          The work, in the words of those living it.
        </h2>
        <p className="mt-5 text-base md:text-lg text-white/75 max-w-2xl">
          Behind every statistic is a person who decided to keep going. Swipe through their words.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-xs text-white/55">
          <ShieldCheck size={14} className="text-accent" strokeWidth={2} />
          <span>Real people. Shared with their permission.</span>
        </div>
      </div>

      <div className="reveal mt-14">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {stories.map((story) => (
              <CarouselItem key={story.name}>
                <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                  <div className="lg:col-span-5 relative">
                    <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10">
                      <img
                        src={story.img}
                        alt={story.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                      <span className="absolute top-5 left-5 bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                        {story.tag}
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="font-semibold text-white text-lg">{story.name}</div>
                        <div className="text-white/70 text-xs mt-1">{story.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <Quote className="text-accent mb-5" size={36} strokeWidth={1.25} />
                      <blockquote className="font-display text-2xl md:text-3xl lg:text-[2rem] leading-[1.25] text-white italic">
                        "{story.quote}"
                      </blockquote>
                      <p className="mt-8 text-[15px] md:text-base text-white/75 leading-relaxed">
                        {story.excerpt}
                      </p>
                      <div className="mt-8 px-5 py-4 rounded-sm bg-accent/10 border-l-2 border-accent">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-1">
                          Outcome
                        </div>
                        <div className="text-sm text-white/90 leading-snug">{story.outcome}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="text-xs text-white/55 uppercase tracking-wider">
              {stories.length} stories · swipe or use arrows
            </div>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white" />
              <CarouselNext className="static translate-y-0 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white" />
            </div>
          </div>
        </Carousel>
      </div>

      <div className="reveal mt-12 text-center">
        <Link
          to="/stories"
          className="inline-flex items-center gap-2 text-white border-b border-accent pb-1 font-medium hover:gap-3 transition-all"
        >
          Read the full stories <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);
