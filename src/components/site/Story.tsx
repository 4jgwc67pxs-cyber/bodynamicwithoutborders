import kateryna from "@/assets/kateryna.jpg";
import { ArrowRight, Quote, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const story = {
  img: kateryna,
  tag: "Volunteer recovery",
  name: "Kateryna Podzizey",
  role: "Combat medic & volunteer, Ukraine",
  quote:
    "The war changed me. It is not good and not bad. It is just a fact — now I need to accept this new me.",
  paragraphs: [
    "A tactical medic on the front lines since 2014, Kateryna lived the contrasts of war — coffee and laughter by day, evacuating the wounded to Mariupol by night. She came home to exams, a diploma, a new job, and the slow realisation that the person who left was no longer the person who returned.",
    "She arrived at the Equal to Equal training unable to answer a simple question: who am I now? Across four modules and eight months of body-based work, she found ground beneath that question — and the new self the war had made.",
  ],
  outcome: "From chaotic survival to goal-oriented recovery.",
};

const stats = [
  { value: "8", label: "Months of training" },
  { value: "2014", label: "On the front line since" },
  { value: "4", label: "Bodynamic modules completed" },
];

export const Story = () => (
  <section id="stories" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
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
          Behind every statistic is a person who decided to keep going. These are three of them.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-xs text-white/55">
          <ShieldCheck size={14} className="text-accent" strokeWidth={2} />
          <span>Real people. Shared with their permission.</span>
        </div>
      </div>

      <article className="reveal mt-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Portrait */}
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

        {/* Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <Quote className="text-accent mb-5" size={36} strokeWidth={1.25} />
            <blockquote className="font-display text-2xl md:text-3xl lg:text-[2rem] leading-[1.25] text-white italic">
              "{story.quote}"
            </blockquote>
            <div className="mt-8 space-y-5">
              {story.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] md:text-base text-white/75 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 px-5 py-4 rounded-sm bg-accent/10 border-l-2 border-accent">
              <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-1">
                Outcome
              </div>
              <div className="text-sm text-white/90 leading-snug">{story.outcome}</div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl md:text-3xl text-white">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/55 mt-1 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <div className="reveal mt-12 text-center">
        <Link
          to="/stories"
          className="inline-flex items-center gap-2 text-white border-b border-accent pb-1 font-medium hover:gap-3 transition-all"
        >
          Read all stories <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);
