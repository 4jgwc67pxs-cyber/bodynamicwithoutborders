import { useState } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";

const amounts: { value: number; impact: string }[] = [
  { value: 10, impact: "Trauma-informed care for one displaced child" },
  { value: 25, impact: "One full therapy session in the field" },
  { value: 50, impact: "Trains a local clinician for a week" },
  { value: 100, impact: "Sponsors one crisis-response deployment day" },
];

type Variant = "light" | "onImage";

export const HeroDonateCard = ({ variant = "onImage" }: { variant?: Variant }) => {
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState<string>("");

  const finalAmount = custom ? Number(custom) : amount;

  const impactLine = (() => {
    if (custom) {
      if (!finalAmount || finalAmount < 1) return "Every contribution funds direct field care.";
      if (finalAmount < 25) return "Funds trauma care for displaced children.";
      if (finalAmount < 75) return "Supports a week of community recovery work.";
      if (finalAmount < 150) return "Trains local clinicians in trauma response.";
      return "Sponsors full crisis-response deployment days.";
    }
    return amounts.find((a) => a.value === amount)?.impact ?? "";
  })();

  return (
    <div
      className={`w-full max-w-[440px] bg-white rounded-md p-6 md:p-7 text-foreground shadow-elegant ${
        variant === "onImage" ? "ring-1 ring-black/5" : ""
      }`}
    >
      {/* Frequency toggle */}
      <div className="bg-muted p-1 rounded-sm grid grid-cols-2 gap-1">
        {(["monthly", "once"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFrequency(f)}
            className={`py-2.5 rounded-sm text-sm font-semibold transition-all ${
              frequency === f
                ? "bg-accent text-accent-foreground shadow-soft"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {f === "monthly" ? "Monthly" : "One-time"}
          </button>
        ))}
      </div>

      <div className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        Choose an amount to give
      </div>

      {/* Amount grid */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {amounts.map((a) => {
          const active = !custom && amount === a.value;
          return (
            <button
              key={a.value}
              onClick={() => {
                setAmount(a.value);
                setCustom("");
              }}
              className={`py-3.5 rounded-sm border font-display font-semibold text-base transition-all ${
                active
                  ? "border-accent bg-accent/10 text-primary ring-1 ring-accent"
                  : "border-border text-foreground hover:border-primary/40"
              }`}
            >
              €{a.value} <span className="text-xs font-normal text-muted-foreground">
                {frequency === "monthly" ? "/ mo" : ""}
              </span>
            </button>
          );
        })}
      </div>

      {/* Custom amount */}
      <div className="mt-3 relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
          €
        </span>
        <input
          type="number"
          inputMode="numeric"
          placeholder="Other amount"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="w-full py-3 pl-8 pr-4 rounded-sm border border-border bg-background focus:border-accent focus:outline-none transition-colors text-sm"
        />
      </div>

      {/* Impact line — concrete outcome */}
      <div className="mt-4 px-3.5 py-3 rounded-sm bg-accent/10 border-l-2 border-accent">
        <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-1">
          Your impact
        </div>
        <p className="text-sm text-foreground leading-snug">{impactLine}</p>
      </div>

      {/* Urgency line */}
      <div className="mt-3 flex gap-2 items-center text-xs">
        <AlertCircle size={14} className="text-destructive shrink-0" />
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">Right now:</span> 47 families on the Kharkiv waiting list. [edit]
        </p>
      </div>

      {/* CTA */}
      <button className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground py-3.5 rounded-sm font-semibold shadow-soft transition-all hover:-translate-y-0.5">
        {frequency === "monthly" ? "Join today" : `Donate €${finalAmount || 0}`}
        <ArrowRight size={18} />
      </button>

      <p className="mt-3 text-[11px] text-muted-foreground text-center">
        Secure payment · Cancel anytime
      </p>
    </div>
  );
};