import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";
import taras from "@/assets/taras.jpg";
import oleh from "@/assets/oleh.jpg";
import volodymyr from "@/assets/volodymyr.jpg";
import igor from "@/assets/igor.jpg";
import ukraine from "@/assets/ukraine.jpg";
import hero from "@/assets/hero.jpg";

const stories = [
  {
    img: taras,
    tag: "Veterans program",
    name: "Taras",
    role: "Wounded combat veteran, Ukraine",
    quote: "Suddenly you want the future to come — to plan, to live more than one day.",
    body: "Wounded on the front in 2014, Taras came home but couldn't find his way back. Over five months in Ditte Marcher's Equal to Equal training, body-based trauma work helped him rebuild a relationship, enroll in university, and re-enter civilian life with presence instead of reaction.",
    featured: true,
  },
  {
    img: ukraine,
    tag: "Veterans program",
    name: "Olena",
    role: "Veteran's wife, Lviv",
    quote: "I learned my body was holding the war too. Once I felt that, I could finally rest.",
    body: "Olena joined a partner program for veteran families after her husband returned from the front. Through body-based work, she found a way to support him without losing herself in the process.",
  },
  {
    img: volodymyr,
    tag: "Clinician training",
    name: "Volodymyr",
    role: "Psychotherapist & supervisor",
    quote: "We're not flying in to fix a country — we're training the people who already are.",
    body: "Volodymyr now leads mobile crisis teams in eastern Ukraine. Trained as a Bodynamic specialist, he supervises a growing network of local psychotherapists working in displacement settings.",
  },
  {
    img: oleh,
    tag: "Military psychiatry",
    name: "Oleh, MD",
    role: "Chief of Combat Stress Control, AFU",
    quote: "What we built in Ukraine is now being asked for in conflicts elsewhere.",
    body: "As Chief of Combat Stress Control in the Armed Forces of Ukraine, Oleh integrates body-based trauma protocols into frontline mental health care — and shares the model with NATO partners.",
  },
  {
    img: hero,
    tag: "Displacement response",
    name: "A shelter in Kharkiv",
    role: "Community recovery program",
    quote: "The children stopped flinching at every loud sound. That was the first sign.",
    body: "In the first weeks after evacuation, a partner team ran daily body-based stabilization sessions for displaced families. Within a month, sleep returned and children began to play again.",
  },
  {
    img: igor,
    tag: "Frontline medicine",
    name: "Igor",
    role: "Former CASEVAC commander",
    quote: "Bandages stop the bleeding. Trauma work is what brings them back to life.",
    body: "After commanding a CASEVAC unit, Igor retrained as a clinical psychologist and EMDR therapist. He now co-facilitates trauma programs for the same veterans he once evacuated.",
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

  const [featured, ...rest] = stories;

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
                {featured.quote}
              </blockquote>
              <div className="mt-6 text-sm">
                <div className="font-semibold text-white">{featured.name}</div>
                <div className="text-white/60">{featured.role}</div>
              </div>
              <p className="mt-6 text-white/80 leading-relaxed">{featured.body}</p>
            </div>
          </article>
        </section>

        {/* Story grid */}
        <section className="container-narrow pb-20 md:pb-28">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {rest.map((s, i) => (
              <article
                key={s.name + i}
                className="reveal group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 ease-smooth hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {s.tag}
                  </div>
                  <blockquote className="mt-3 font-display text-lg md:text-xl text-primary leading-snug">
                    "{s.quote}"
                  </blockquote>
                  <div className="mt-4 text-sm">
                    <div className="font-semibold text-primary">{s.name}</div>
                    <div className="text-muted-foreground">{s.role}</div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </article>
            ))}
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
