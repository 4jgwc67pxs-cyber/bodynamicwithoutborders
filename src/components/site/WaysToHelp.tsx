import { Heart, Users, Handshake, ArrowRight } from "lucide-react";

const ways = [
  {
    icon: Heart,
    title: "Donate",
    desc: "Fund trauma sessions, training, and crisis-zone deployments. Every contribution is traceable.",
    cta: "Give now",
    href: "#donate",
  },
  {
    icon: Users,
    title: "Volunteer",
    desc: "Clinicians, translators, logistics, design — we work with people who can give time and skill.",
    cta: "Get in touch",
    href: "mailto:contact@bodynamicwithoutborders.org?subject=Volunteer",
  },
  {
    icon: Handshake,
    title: "Partner",
    desc: "We collaborate with NGOs, clinics, governments, and foundations. Long-term partnerships welcome.",
    cta: "Start a conversation",
    href: "mailto:contact@bodynamicwithoutborders.org?subject=Partnership",
  },
];

export const WaysToHelp = () => (
  <section className="py-20 md:py-28">
    <div className="container-narrow">
      <div className="reveal max-w-2xl">
        <span className="eyebrow">Get involved</span>
        <h2 className="mt-3 text-3xl md:text-4xl text-primary leading-tight">
          Three ways to stand with us.
        </h2>
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
          Money matters. So does time, skill, and partnership. Choose what fits you.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
        {ways.map(({ icon: Icon, ...w }, i) => (
          <a
            key={w.title}
            href={w.href}
            className="reveal group bg-card border border-border rounded-2xl p-7 md:p-8 hover:border-accent/40 hover:shadow-elegant hover:-translate-y-1 transition-all"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Icon size={22} strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-xl text-primary">{w.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
              {w.cta} <ArrowRight size={16} />
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);