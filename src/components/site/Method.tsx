import { Activity, Users, Globe2 } from "lucide-react";

const pillars = [
  {
    icon: Activity,
    eyebrow: "01 — The body remembers",
    title: "Trauma lives in the nervous system, not the story.",
    body: "After war, displacement or disaster, talk alone often can't reach the wound. Bodynamic uses precise, body-based interventions to help the nervous system complete what crisis interrupted — restoring regulation, sleep and presence.",
  },
  {
    icon: Users,
    eyebrow: "02 — Built for the field",
    title: "Designed for clinicians working under pressure.",
    body: "Our protocols are tested in active conflict zones. Short, structured sessions. No equipment. Works in shelters, clinics and mobile units. Local clinicians can deliver it after focused training — without flying experts in for every case.",
  },
  {
    icon: Globe2,
    eyebrow: "03 — Local capacity, lasting impact",
    title: "We train the people who stay.",
    body: "Every deployment leaves a network behind: trained psychotherapists, military medics and community workers carrying the method forward. That's how a 12-week training in Lviv becomes 15 years of care across Ukraine.",
  },
];

export const Method = () => (
  <section id="method" className="py-24 md:py-32 bg-background">
    <div className="container-narrow">
      <div className="reveal max-w-3xl">
        <span className="eyebrow">The method</span>
        <h2 className="mt-4 text-3xl md:text-5xl text-primary leading-[1.05]">
          Why body-based trauma work,<br className="hidden md:block" /> and why it works in crisis zones.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Bodynamic is a clinically developed somatic approach — refined over four decades and field-tested in Ukraine since 2006. Here's what makes it different from conventional trauma therapy in humanitarian settings.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map(({ icon: Icon, eyebrow, title, body }) => (
          <article
            key={eyebrow}
            className="reveal group relative bg-card rounded-sm p-7 md:p-8 border border-border transition-colors hover:border-accent/40"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-accent/10 text-accent mb-6">
              <Icon size={20} strokeWidth={1.75} />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </div>
            <h3 className="mt-3 font-display text-xl md:text-2xl text-primary leading-tight">
              {title}
            </h3>
            <p className="mt-4 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
              {body}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
