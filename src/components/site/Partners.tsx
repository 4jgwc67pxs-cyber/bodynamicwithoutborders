import ucAdvocacyAsset from "@/assets/partner-uc-advocacy.webp.asset.json";
import raiseAsset from "@/assets/partner-raise.png.asset.json";
import bodynamicAsset from "@/assets/partner-bodynamic.png.asset.json";

type Partner = {
  name: string;
  href?: string;
  logo?: string;
};

const partners: Partner[] = [
  {
    name: "UC Advocacy Group",
    href: "https://www.ucadvocacygroup.org",
    logo: ucAdvocacyAsset.url,
  },
  {
    name: "Raise.UA",
    href: "https://raise.com.ua/en",
    logo: raiseAsset.url,
  },
  { name: "Armed Forces of Ukraine" },
  { name: "Veteran Hub" },
  {
    name: "Bodynamic International",
    href: "https://www.bodynamic.com",
    logo: bodynamicAsset.url,
  },
  { name: "Ministry of Health [edit]" },
];

export const Partners = () => (
  <section aria-label="Partners and recognition" className="py-16 md:py-20 border-y border-border bg-muted/20">
    <div className="container-narrow">
      <div className="text-center reveal">
        <span className="eyebrow">Partners & recognition</span>
        <h2 className="mt-3 text-xl md:text-2xl font-display font-semibold text-foreground">
          Trusted by the institutions doing the work alongside us.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-sm overflow-hidden reveal">
        {partners.map((p) => {
          const content = p.logo ? (
            <img
              src={p.logo}
              alt={p.name}
              className="max-h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ) : (
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
              {p.name}
            </span>
          );

          const className =
            "group bg-background flex items-center justify-center px-4 py-8 text-center min-h-[110px]";

          return p.href ? (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              className={className}
            >
              {content}
            </a>
          ) : (
            <div key={p.name} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);