import { FileText, Users, Scale, Mail } from "lucide-react";

const items = [
  {
    icon: Users,
    label: "Board of directors",
    desc: "Independent governance, meets quarterly.",
    cta: "Meet the board [edit]",
  },
  {
    icon: FileText,
    label: "Annual reports",
    desc: "Audited financials, program outcomes, full transparency.",
    cta: "Download 2024 report [edit]",
  },
  {
    icon: Scale,
    label: "Legal & registration",
    desc: "Registered NGO in Denmark, CVR [edit]. Subject to Danish charity law.",
    cta: "Registration details [edit]",
  },
  {
    icon: Mail,
    label: "Get in touch",
    desc: "Volunteer, partner clinically, or press inquiries.",
    cta: "Contact us [edit]",
  },
];

export const Governance = () => (
  <section aria-label="Governance and transparency" className="py-20 md:py-24 bg-background">
    <div className="container-narrow">
      <div className="max-w-2xl reveal">
        <span className="eyebrow">Governance</span>
        <h2 className="mt-3 text-2xl md:text-3xl font-display font-semibold text-foreground">
          Nothing to hide. Everything to show.
        </h2>
        <p className="mt-4 text-muted-foreground">
          We are accountable to the people we serve, the clinicians we train, and the donors who
          make this possible.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden reveal">
        {items.map(({ icon: Icon, label, desc, cta }) => (
          <div key={label} className="bg-background p-6 md:p-7 flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center">
              <Icon size={18} className="text-accent" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">{label}</div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <a
                href="#"
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-accent hover:underline underline-offset-4"
              >
                {cta} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);