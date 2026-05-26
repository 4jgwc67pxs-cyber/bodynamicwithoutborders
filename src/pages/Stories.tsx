import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";
import kateryna from "@/assets/kateryna.jpg";

const featured = {
  img: kateryna,
  tag: "Volunteer recovery",
  name: "Kateryna Podzizey",
  role: "Combat medic & volunteer, Ukraine",
  quote:
    "The war changed me. It is not good and not bad. It is just a fact — now I need to accept this new me.",
  paragraphs: [
    "It started on Maidan in 2013 — on her 21st birthday. By March, Kateryna knew her life had split into a before and an after. When the war began, going to the front was not a question. Her younger brother, barely 18, went first. She and her chosen sister finished tactical medicine training and followed.",
    "Then came the contrasts: bombardment at night, coffee and laughter by day. Driving the wounded to Mariupol in the dark, jumping rope in combat boots between shifts. Learning to tell their fire from the enemy's. Carrying the coffin of a friend she had known since Maidan — and the next morning, eating grilled chicken in the same ambulance.",
    "She came home to exams, a diploma, a new job, a new love. And the slow, frightening realisation that the woman who came back was not the woman who left. \"I started to think that some things were normal that are not normal and cannot be normal.\"",
    "At the Equal to Equal training she could not answer a simple question: who am I now? Across four modules and eight months of body-based work, she found ground beneath that question. Today she meets people without hostility, accepts that they can disagree, and moves through her life with intention instead of chaos.",
    "\"After the war\" has not begun yet, she says — not while her unit is still burying six people a month. \"But I am alive.\"",
  ],
  outcome: "From chaotic survival to goal-oriented recovery.",
};

const Stories = () => {
  useReveal();

  useEffect(() => {
    document.title = "Stories — Bodynamic Without Borders";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Stories from veterans, families, and clinicians in Ukraine — the human side of trauma-informed humanitarian response."
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        {/* Hero */}
        <section className="container-narrow pb-12 md:pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Back home
          </Link>
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Voices from the field</span>
            <h1 className="mt-4 text-4xl md:text-6xl">Stories that the data alone can't tell.</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Behind every statistic is a body that learned to live again. These are the people we
              work with — veterans, families, clinicians, and communities rebuilding after crisis.
            </p>
          </div>
        </section>

        {/* Featured story */}
        <section className="container-narrow pb-16 md:pb-24">
          <article className="reveal grid lg:grid-cols-5 gap-8 lg:gap-12 items-center bg-primary text-primary-foreground rounded-3xl overflow-hidden shadow-elegant">
            <div className="lg:col-span-2">
              <img
                src={featured.img}
                alt={featured.name}
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto"
              />
            </div>
            <div className="lg:col-span-3 p-8 md:p-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider">
                {featured.tag}
              </div>
              <Quote className="mt-6 text-accent" size={36} strokeWidth={1.5} />
              <blockquote className="mt-3 font-display text-2xl md:text-3xl leading-snug text-white italic">
                "{featured.quote}"
              </blockquote>
              <div className="mt-6 text-sm">
                <div className="font-semibold text-white">{featured.name}</div>
                <div className="text-white/60">{featured.role}</div>
              </div>
            </div>
          </article>
        </section>

        {/* Full narrative */}
        <section className="container-narrow pb-20 md:pb-28">
          <div className="reveal max-w-2xl mx-auto">
            <div className="eyebrow">In her own words</div>
            <div className="mt-6 space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed font-serif">
              {featured.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 px-6 py-5 rounded-xl bg-accent/10 border-l-2 border-accent">
              <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-1">
                Outcome
              </div>
              <div className="text-sm text-foreground/90">{featured.outcome}</div>
            </div>
            <p className="mt-10 text-sm text-muted-foreground italic">
              More stories from the field will be added as participants share them.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container-narrow pb-20 md:pb-28">
          <div className="reveal rounded-3xl bg-muted/60 border border-border p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl">Be part of the next story.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Your support funds the trauma work behind every recovery on this page.
            </p>
            <Link
              to="/#donate"
              className="mt-7 inline-flex items-center gap-2 bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground px-7 py-4 rounded-full font-semibold shadow-soft transition-all hover:-translate-y-0.5"
            >
              Donate now <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Stories;
