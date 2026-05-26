import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";
import kateryna from "@/assets/kateryna.jpg";
import vitaliy from "@/assets/vitaliy.jpg";

const stories = [
  {
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
  },
  {
    img: vitaliy,
    tag: "Clinician recovery",
    name: "Vitaliy Kabashniuk",
    role: "Therapist & medic, Maidan first-aid post",
    quote:
      "An old lecturer is crying talking about psychogenic self-regulation and cannot get a hold of himself in front of so many students. Suddenly one of them stood up and clapped.",
    paragraphs: [
      "Vitaliy \"became sick\" on February 23rd 2014, around 10 a.m., when the most dramatic Maidan events were already over. Twenty-five years of medical experience had not prepared him for the endless stream of patients at the first-aid post on the corner of Prorizna and Khreschatyk — opened in place of the burnt-down Trade Union Building. On his white coat: a handmade tag that read only \"Vitaliy, therapist\".",
      "The Ministries of Health and Education had forbidden doctors and teachers from taking part. He was the only therapist on his shift, and the Medical National Resistance Office also asked him to be the psychologist for his colleagues. Acute pneumonias, severe decompensated chronic illness, suspected tuberculosis, suspected cancer — patients refused to leave, asking only for a pill for relief. They called him Father, Brother, Mister Professor.",
      "Outwardly he was kind, gentle, smiling softly. Inwardly there was a lump in his throat he was afraid would break. When the shift finally ended, the team simply said thank you and dissolved into space. Halfway down Shevchenko Boulevard he ran into the bushes and cried for half an hour. He cried again in St. Volodymyr Cathedral. He cried a third time on the night train, a towel over his face.",
      "The attacks would not stop — at the national anthem, at \"Plyve Kacha\", at any reminder. Mid-lecture, in front of his students, he broke down trying to talk about psychogenic self-regulation. One student — a Maidan veteran — stood up and clapped. The whole class followed. He was so surprised he stopped crying.",
      "Sedatives did not work. Returning to the first-aid post made it worse. Two days unconscious with fever; a month of bronchitis. The way through came elsewhere: a fast, a new first-aid course for volunteers, a degree in practical psychology, trips to the eastern front as a tactical medicine instructor — and finding Bodynamics and Ditte Marcher online, which brought him into a circle of like-minded colleagues.",
      "During the training his condition improved markedly. A throat spasm returned only once, in the third module, when he went deeper into the crisis moments of his life. Today he cries rarely, and people around him do not notice. He stays in control of his psychological state through whatever the events bring, and he makes the key decisions clearly.",
    ],
    outcome: "From uncontrollable spasms to steady professional ground.",
  },
];

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

        {/* Stories */}
        {stories.map((story, idx) => (
          <div key={story.name}>
            <section className="container-narrow pb-12 md:pb-16">
              <article className="reveal grid lg:grid-cols-5 gap-8 lg:gap-12 items-center bg-primary text-primary-foreground rounded-3xl overflow-hidden shadow-elegant">
                <div className="lg:col-span-2">
                  <img
                    src={story.img}
                    alt={story.name}
                    className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto"
                  />
                </div>
                <div className="lg:col-span-3 p-8 md:p-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider">
                    {story.tag}
                  </div>
                  <Quote className="mt-6 text-accent" size={36} strokeWidth={1.5} />
                  <blockquote className="mt-3 font-display text-2xl md:text-3xl leading-snug text-white italic">
                    "{story.quote}"
                  </blockquote>
                  <div className="mt-6 text-sm">
                    <div className="font-semibold text-white">{story.name}</div>
                    <div className="text-white/60">{story.role}</div>
                  </div>
                </div>
              </article>
            </section>

            <section className="container-narrow pb-20 md:pb-24">
              <div className="reveal max-w-2xl mx-auto">
                <div className="eyebrow">In their own words</div>
                <div className="mt-6 space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed font-serif">
                  {story.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-10 px-6 py-5 rounded-xl bg-accent/10 border-l-2 border-accent">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-1">
                    Outcome
                  </div>
                  <div className="text-sm text-foreground/90">{story.outcome}</div>
                </div>
                {idx < stories.length - 1 && (
                  <div className="mt-16 border-t border-border" />
                )}
              </div>
            </section>
          </div>
        ))}

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
