import { useState } from "react";
import { ArrowRight, Heart } from "lucide-react";

const amounts = [10, 25, 50, 100];

type Variant = "light" | "onImage";

export const HeroDonateCard = ({ variant = "onImage" }: { variant?: Variant }) => {
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState<string>("");

  const finalAmount = custom ? Number(custom) : amount;

  const impactLine = (() => {
    if (!finalAmount || finalAmount < 1) return "Every contribution matters.";
    if (finalAmount < 25) return "Funds one trauma session in the field.";
    if (finalAmount < 75) return "Supports a week of community recovery work.";
    if (finalAmount < 150) return "Trains a local clinician in trauma response.";
    return "Sponsors a full crisis-response deployment day.";
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
          const active = !custom && amount === a;
          return (
            <button
              key={a}
              onClick={() => {
                setAmount(a);
                setCustom("");
              }}
              className={`py-3.5 rounded-sm border font-display font-semibold text-base transition-all ${
                active
                  ? "border-accent bg-accent/10 text-primary ring-1 ring-accent"
                  : "border-border text-foreground hover:border-primary/40"
              }`}
            >
              €{a} <span className="text-xs font-normal text-muted-foreground">
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

      {/* Impact line */}
      <div className="mt-4 flex gap-2.5 items-start text-sm">
        <Heart size={16} className="text-accent shrink-0 mt-0.5" />
        <p className="text-muted-foreground leading-snug">{impactLine}</p>
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