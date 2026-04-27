import taras from "@/assets/taras.jpg";
import volodymyr from "@/assets/volodymyr.jpg";
import oleh from "@/assets/oleh.jpg";
import { ArrowRight, Quote, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const stories = [
  {
    img: taras,
    tag: "Veterans program",
    name: "Taras Kovalyk",
    role: "Wounded combat veteran, Ukraine",
    quote: "Suddenly you want the future to come — to plan, to live more than one day.",
    body: "Wounded on the front in 2014, Taras came home but couldn't find his way back. Five months in the Equal to Equal training rebuilt his footing — a relationship, university, civilian life with presence instead of reaction.",
    outcome: "Today: married, university graduate, mentoring new veterans.",
  },
  {
    img: volodymyr,
    tag: "Clinician training",
    name: "Volodymyr",
    role: "Psychotherapist & supervisor, Eastern Ukraine",
    quote: "We're not flying in to fix a country — we're training the people who already are.",
    body: "Volodymyr now leads mobile crisis teams in displacement settings, supervising a growing network of local Bodynamic-trained therapists across the country.",
    outcome: "Now supervises 40+ local clinicians across 6 regions.",
  },
  {
    img: oleh,
    tag: "Military psychiatry",
    name: "Oleh, MD",
    role: "Chief of Combat Stress Control, AFU",
    quote: "What we built in Ukraine is now being asked for in conflicts elsewhere.",
    body: "Oleh integrates body-based trauma protocols into frontline mental health care across the Armed Forces of Ukraine — and shares the model with NATO partners.",
    outcome: "Body-based protocols now standard across AFU mental health units.",
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
          Behind every statistic is a person who decided to keep going. These are three of them.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-xs text-white/55">
          <ShieldCheck size={14} className="text-accent" strokeWidth={2} />
          <span>Real people. Shared with their permission.</span>
        </div>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
        {stories.map((s) => (
          <article
            key={s.name}
            className="reveal group flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all hover:border-accent/40 hover:-translate-y-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={s.img}
                alt={s.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {s.tag}
              </span>
            </div>

            <div className="flex flex-col flex-1 p-6 md:p-7">
              <Quote className="text-accent mb-3" size={24} strokeWidth={1.5} />
              <blockquote className="font-display text-lg md:text-xl leading-snug text-white italic">
                "{s.quote}"
              </blockquote>
              <p className="mt-5 text-sm text-white/70 leading-relaxed flex-1">
                {s.body}
              </p>
              <div className="mt-5 px-3 py-2.5 rounded-lg bg-accent/10 border-l-2 border-accent">
                <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-0.5">
                  Outcome
                </div>
                <div className="text-xs text-white/85 leading-snug">
                  {s.outcome}
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 text-sm">
                <div className="font-semibold text-white">{s.name}</div>
                <div className="text-white/55 text-xs mt-0.5">{s.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>

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
