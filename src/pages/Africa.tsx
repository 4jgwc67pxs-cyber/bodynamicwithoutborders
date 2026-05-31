import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

const Africa = () => {
  useReveal();

  useEffect(() => {
    document.title = "Africa — Bodynamic Humanity";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Mapping needs and local partners across conflict-affected regions in Africa."
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
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] bg-muted text-muted-foreground border border-primary-foreground/20 px-3 py-1.5 rounded-sm w-fit">
              In planning
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-3xl">
              The next theatre.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
              Conflict-affected regions across Africa carry an enormous, under-resourced burden
              of body-held trauma. We are mapping needs and local partners now.
            </p>
          </div>
        </section>

        {/* Why */}
        <section className="py-20 md:py-24">
          <div className="container-narrow max-w-3xl space-y-6">
            <div>
              <span className="eyebrow">Honest status</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold tracking-tight">
                We're in the listening phase.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't have a deployment date and we won't fake one. What we have is a method
              that works in conflict settings, a track record across 20 years, and a commitment
              to building this with local clinicians — not on top of them. [edit]
            </p>
            <p className="text-lg text-foreground font-medium">
              If you work in mental health, humanitarian response, or trauma care anywhere on the
              continent and want to talk — we want to hear from you.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-muted/30 border-t border-border">
          <div className="container-narrow grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-background border border-border rounded-sm p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Fund the groundwork
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Your donation funds the partner scoping, the travel, and the early training
                materials needed to make this real.
              </p>
              <a
                href="/#donate"
                className="mt-6 inline-flex items-center gap-2 bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground px-6 py-3 rounded-sm font-semibold transition-all hover:-translate-y-0.5 shadow-soft"
              >
                Donate <ArrowRight size={18} />
              </a>
            </div>
            <div className="bg-background border border-border rounded-sm p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Partner with us
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Local clinicians, humanitarian organisations, and researchers — get in touch and
                help us build this right.
              </p>
              <a
                href="mailto:hello@bodynamicwithoutborders.org"
                className="mt-6 inline-flex items-center gap-2 border border-border px-6 py-3 rounded-sm font-semibold hover:bg-muted transition-colors"
              >
                Get in touch [edit] <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Africa;