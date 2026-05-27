import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ukraine from "@/assets/ukraine.jpg";

type Status = "active" | "launching" | "planning";

const theatres: {
  slug: string;
  region: string;
  status: Status;
  statusLabel: string;
  headline: string;
  body: string;
  cta: string;
  img?: string;
}[] = [
  {
    slug: "/ukraine",
    region: "Ukraine",
    status: "active",
    statusLabel: "Active since 2006",
    headline: "Where the work was built.",
    body: "Veterans, displaced families, and the clinicians who care for them. 2,400+ treated, 180 local clinicians trained. [edit]",
    cta: "Read the full story",
    img: ukraine,
  },
  {
    slug: "/middle-east",
    region: "Middle East",
    status: "launching",
    statusLabel: "Launching 2026 [edit]",
    headline: "Gaza, Syria, and beyond.",
    body: "Scoping first deployments in partnership with local clinicians and humanitarian partners. [edit]",
    cta: "Help us launch",
  },
  {
    slug: "/africa",
    region: "Africa",
    status: "planning",
    statusLabel: "In planning",
    headline: "The next theatre.",
    body: "Mapping needs and local partners across conflict-affected regions. Your support brings this forward.",
    cta: "Help us get there",
  },
];

const statusStyles: Record<Status, string> = {
  active: "bg-accent text-accent-foreground",
  launching: "bg-foreground text-background",
  planning: "bg-muted text-muted-foreground border border-border",
};

export const UkraineSection = () => (
  <section id="ukraine" className="py-20 md:py-28 bg-background">
    <div className="container-narrow">
      <div className="max-w-3xl reveal">
        <span className="eyebrow">Where we work</span>
        <h2 className="mt-4 text-3xl md:text-5xl">
          One active theatre. Two more in the pipeline.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Ukraine is where the method was built and proven. Your support funds the work there —
          and helps us bring it to where it's needed next.
        </p>
      </div>

      <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {theatres.map((t, i) => (
          <Link
            key={t.slug}
            to={t.slug}
            className="reveal group flex flex-col bg-background border border-border rounded-sm overflow-hidden hover:border-accent hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              {t.img ? (
                <img
                  src={t.img}
                  alt={t.region}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-smooth"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/40">
                  <span className="font-display text-5xl text-muted-foreground/40">
                    {t.region}
                  </span>
                </div>
              )}
              <span
                className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm ${statusStyles[t.status]}`}
              >
                {t.statusLabel}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.region}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                {t.headline}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {t.body}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                {t.cta}
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
