import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Users, Calendar, Award } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";
import ukraine from "@/assets/ukraine.jpg";

const facts = [
  { icon: Calendar, label: "On the ground since", value: "2006" },
  { icon: Users, label: "People treated", value: "2,400+ [edit]" },
  { icon: Award, label: "Local clinicians trained", value: "180 [edit]" },
  { icon: MapPin, label: "Cities active in", value: "Lviv, Kyiv, Kharkiv [edit]" },
];

const programs = [
  {
    title: "Mobile crisis teams",
    body: "Body-based stabilisation for displaced families and frontline communities, deployed within days of an incident.",
  },
  {
    title: "Clinician training",
    body: "Equal-to-Equal trainings for Ukrainian psychotherapists, psychiatrists, and combat medics — building local capacity that stays after we leave.",
  },
  {
    title: "Veteran programs",
    body: "Long-form recovery work with active and former service members, in partnership with Veteran Hub and the Armed Forces of Ukraine.",
  },
  {
    title: "Family & community work",
    body: "Group sessions for the partners, parents, and children who carry the second wave of trauma.",
  },
];

const partners = [
  "Armed Forces of Ukraine",
  "Veteran Hub",
  "Ministry of Health [edit]",
  "Bodynamic Institute",
];

const Ukraine = () => {
  useReveal();

  useEffect(() => {
    document.title = "Ukraine — Bodynamic Humanity";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Active in Ukraine since 2006. Body-based trauma care for veterans, displaced families, and the clinicians who care for them."
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <img src={ukraine} alt="Training session in Lviv" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/70" />
          <div className="relative h-full container-narrow flex flex-col justify-end pb-12 md:pb-16">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 w-fit">
              <ArrowLeft size={16} /> Back to home
            </Link>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground bg-accent px-3 py-1.5 rounded-sm w-fit">
              Active since 2006
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-semibold text-white tracking-tight max-w-3xl">
              Ukraine: where the work was built.
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-2xl">
              For 18 years we've worked alongside Ukrainian communities — with veterans, displaced
              families, and the clinicians who care for them.
            </p>
          </div>
        </section>

        {/* Quick facts */}
        <section className="border-b border-border">
          <div className="container-narrow py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </div>
                    <div className="text-sm font-semibold text-foreground">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The story */}
        <section className="py-20 md:py-28">
          <div className="container-narrow grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4 reveal">
              <span className="eyebrow">The story</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold tracking-tight">
                How we ended up here.
              </h2>
            </div>
            <div className="lg:col-span-8 reveal space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our first work in Ukraine began in 2006 — long before the war as the world now
                knows it. We came to train clinicians in body-based trauma methods and ended up
                building a network that, by 2014, had already begun responding to the human cost
                of conflict in the east. [edit]
              </p>
              <p>
                When the full-scale invasion began in 2022, that network became the foundation of
                a rapid, locally-led response. The clinicians we'd trained over fifteen years were
                already in place. We expanded mobile crisis teams, scaled veteran programs, and
                kept training — because the need was outrunning the workforce. [edit]
              </p>
              <p className="text-foreground font-medium">
                Today, the work is Ukrainian-led. Our role is to keep training, keep funding the
                frontline practitioners, and keep showing up.
              </p>
              <a
                href="https://www.bodynamic.com/projects/ukraine-veterans/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-accent hover:text-[hsl(var(--accent-hover))] font-medium transition-colors"
              >
                Read the full Ukraine project page on bodynamic.com →
              </a>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="py-16 md:py-20">
          <div className="container-narrow">
            <div className="reveal">
              <span className="eyebrow">In the field</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold tracking-tight max-w-2xl">
                See the work in action.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Volunteers treating soldiers returning from the frontline at a crisis rehabilitation camp in Ukraine.
              </p>
            </div>
            <div className="mt-10 relative w-full aspect-video rounded-sm overflow-hidden border border-border shadow-soft bg-muted">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/BURtfIU0EFk?rel=0"
                title="Ukraine Crisis Rehabilitation Camp"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            {/* Video 2 */}
            <div className="mt-10 reveal">
              <p className="text-muted-foreground max-w-xl">
                <em>[Add video description here]</em>
              </p>
            </div>
            <div className="mt-3 relative w-full aspect-video rounded-sm overflow-hidden border border-border shadow-soft bg-muted">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/9Pldc5JWrPY?rel=0"
                title="Ukraine video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            {/* Video 3 */}
            <div className="mt-10 reveal">
              <p className="text-muted-foreground max-w-xl">
                <em>[Add video description here]</em>
              </p>
            </div>
            <div className="mt-3 relative w-full aspect-video rounded-sm overflow-hidden border border-border shadow-soft bg-muted">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/V5R7rnLtn-s?rel=0"
                title="Ukraine video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 md:py-24 bg-muted/30 border-y border-border">
          <div className="container-narrow">
            <div className="max-w-2xl reveal">
              <span className="eyebrow">What we do there</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold tracking-tight">
                Four programs, one method.
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((p, i) => (
                <div
                  key={p.title}
                  className="reveal bg-background border border-border rounded-sm p-7"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <h3 className="font-display text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Further reading */}
        <section className="py-20 md:py-24">
          <div className="container-narrow">
            <div className="max-w-2xl reveal">
              <span className="eyebrow">Further reading</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold tracking-tight">
                More from the field.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Articles and resources from the Bodynamic Institute on the Ukraine work.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Project",
                  title: "Ukraine Veterans — project overview",
                  href: "https://www.bodynamic.com/projects/ukraine-veterans/",
                },
                {
                  label: "Article",
                  title: "Reclaiming wholeness: Ukrainian veterans",
                  href: "https://www.bodynamic.com/blog/reclaiming-wholeness-ukrainian-veterans/",
                },
                {
                  label: "Manual",
                  title: "Self-support manual: exercises for crisis work (EN / UA)",
                  href: "https://www.bodynamic.com/blog/self-support-manual-exercises-for-crisis-work-in-english-ukrainian/",
                },
                {
                  label: "Article",
                  title: "Overcoming shock, trauma and PTSD — Bodynamic for Ukrainian veterans",
                  href: "https://www.bodynamic.com/blog/overcoming-shock-trauma-and-ptsd-bodynamic-for-ukrainian-veterans/",
                },
              ].map((r, i) => (
                <a
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group bg-background border border-border rounded-sm p-6 hover:border-accent transition-colors flex items-start justify-between gap-4"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {r.label}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">bodynamic.com</p>
                  </div>
                  <ArrowRight size={18} className="shrink-0 mt-1 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="py-20 md:py-28">
          <div className="container-narrow grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="reveal">
              <span className="eyebrow">Documented outcome</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold tracking-tight">
                Sustained PTSD reduction in a veteran cohort.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Across treatment and follow-up, PTSD symptom prevalence fell from 40% to 8% in a
                documented cohort of Ukrainian veterans. The drop held in follow-up — the work
                doesn't wear off.
              </p>
            </div>
            <div className="reveal p-8 md:p-10 bg-muted/60 border border-border rounded-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                PTSD prevalence
              </div>
              <div className="mt-4 font-display text-5xl md:text-6xl font-semibold text-primary flex items-baseline gap-4 flex-wrap">
                40% <span className="text-accent text-3xl">→</span> 8%
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Documented in a Ukrainian veteran cohort, across treatment and follow-up. [edit: link to study]
              </p>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 border-y border-border bg-muted/20">
          <div className="container-narrow">
            <div className="text-center reveal">
              <span className="eyebrow">On the ground with</span>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden reveal">
              {partners.map((p) => (
                <div
                  key={p}
                  className="bg-background flex items-center justify-center px-4 py-8 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container-narrow text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight">
              Fund the work in Ukraine.
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/80">
              Right now: 47 families on the Kharkiv waiting list. [edit] Every donation goes
              directly to the clinicians treating them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="/#donate"
                className="inline-flex items-center gap-2 bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground px-7 py-3.5 rounded-sm font-semibold transition-all hover:-translate-y-0.5 shadow-soft"
              >
                Donate now <ArrowRight size={18} />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 px-7 py-3.5 rounded-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ukraine;