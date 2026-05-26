import { ShieldCheck } from "lucide-react";

const partners = [
  "AFU Combat Stress Control",
  "Equal-to-Equal Training",
  "Bodynamic International",
  "Veteran Hub Ukraine",
];

export const TrustBar = () => (
  <section className="border-b border-border/60 bg-muted/40 py-6">
    <div className="container-narrow">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary shrink-0">
          <ShieldCheck size={14} className="text-accent" />
          Working with
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-muted-foreground">
          {partners.map((p, i) => (
            <span key={p} className="flex items-center gap-6">
              <span>{p}</span>
              {i < partners.length - 1 && (
                <span className="hidden md:inline w-1 h-1 rounded-full bg-border" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);