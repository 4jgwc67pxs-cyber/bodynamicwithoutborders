import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

const milestones = [
  {
    period: "Now",
    title: "Partner scoping",
    body: "In conversation with local clinicians and humanitarian organisations in Gaza, Syria, and Lebanon. [edit]",
  },
  {
    period: "Q2 2026",
    title: "First training cohort",
    body: "Adapting the Equal-to-Equal training for Arabic-speaking clinicians, with cultural and contextual revision. [edit]",
  },
  {
    period: "Q4 2026",
    title: "First deployment",
    body: "Mobile crisis team deployment in partnership with on-the-ground organisations. [edit]",
  },
];

const MiddleEast = () => {
  useReveal();

  useEffect(() => {
    document.title = "Middle East — Bodynamic Without Borders";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Bringing body-based trauma care to Gaza, Syria, and beyond. Launching 2026."
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
          <div className="container-narrow">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-8">
              <ArrowLeft size={16} /> Back to home
            </Link>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] bg-primary-foreground text-primary px-3 py-1.5 rounded-sm w-fit">
              Launching 2026 [edit]
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-3xl">
              Bringing the work to the Middle East.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
              Gaza, Syria, and the refugee corridors across the region. We are scoping first
              deployments with local clinicians and humanitarian partners — and we need your help
              to get there.
            </p>
          </div>
        </section>

        {/* Why */}
        <section className="py-20 md:py-24">
          <div className="container-narrow max-w-3xl">
            <span className="eyebrow">Why now</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold tracking-tight">
              The same need. A different context.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                The pattern we've seen in Ukraine — that trauma lodges in the body long after the
                fighting stops — is not Ukrainian. It is human. Across Gaza, Syria, and the wider
                region, millions of people are living with body-held trauma that conventional
                talk therapy cannot reach. [edit]
              </p>
              <p>
                We will not parachute in. As in Ukraine, our first job is to listen, then to
                train local clinicians who already understand the language, the culture, and the
                people. The method belongs to them.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-20 md:py-24 bg-muted/30 border-y border-border">
          <div className="container-narrow">
            <div className="max-w-2xl reveal">
              <span className="eyebrow">The plan</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold tracking-tight">
                What your support funds.
              </h2>
            </div>
            <div className="mt-12 space-y-px bg-border rounded-sm overflow-hidden">
              {milestones.map((m, i) => (
                <div
                  key={m.title}
                  className="reveal bg-background p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="md:col-span-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-accent">
                      {m.period}
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="container-narrow text-center max-w-2xl mx-auto">
            <span className="eyebrow">Help us launch</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold tracking-tight">
              Fund the first deployment.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Every euro raised before launch goes directly to partner scoping, training
              development, and the first cohort.
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
                className="inline-flex items-center gap-2 border border-border px-7 py-3.5 rounded-sm font-semibold hover:bg-muted transition-colors"
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

export default MiddleEast;