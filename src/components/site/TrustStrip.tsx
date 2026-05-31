import { ShieldCheck, PieChart, Clock } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    label: "Registered NGO",
    value: "Denmark · CVR [edit]",
  },
  {
    icon: PieChart,
    label: "Direct to programs",
    value: "92% of funds [edit]",
  },
  {
    icon: Clock,
    label: "In the field",
    value: "20 years, since 2006",
  },
];

export const TrustStrip = () => {
  return (
    <section aria-label="Trust and transparency" className="border-b border-border bg-background">
      <div className="container-narrow py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {items.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 md:justify-center">
              <div className="shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon size={18} className="text-accent" />
              </div>
              <div className="leading-tight">
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
  );
};