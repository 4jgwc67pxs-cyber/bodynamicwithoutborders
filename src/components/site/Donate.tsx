import { useState } from "react";
import { ArrowRight, Check, Heart } from "lucide-react";

const amounts = [10, 25, 50, 100];

const points = [
  "Rapid crisis support in conflict-affected communities",
  "Training programs for local professionals",
  "Direct trauma recovery and long-term resilience work",
];

export const Donate = () => {
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");
  const [amount, setAmount] = useState<number>(250);
  const [custom, setCustom] = useState<string>("");

  const finalAmount = custom ? Number(custom) : amount;

  const impactLine = (() => {
    if (!finalAmount || finalAmount < 1) return "Every contribution matters.";
    if (finalAmount < 25) return "Helps cover materials for a trauma session.";
    if (finalAmount < 50) return "Supports a community recovery session.";
    if (finalAmount < 100) return "Contributes to training a local clinician.";
    return "Helps fund a full day of field response.";
  })();

  return (
    <section id="donate" className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="reveal rounded-3xl bg-gradient-navy text-primary-foreground overflow-hidden shadow-elegant">
          <div className="grid lg:grid-cols-5 gap-10 p-8 md:p-12 lg:p-16">
            {/* Left — pitch */}
            <div className="lg:col-span-2">
              <span className="eyebrow !text-accent">Act now</span>
              <h2 className="mt-4 text-3xl md:text-4xl text-white leading-tight">
                Help trauma healing reach crisis zones.
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/80">
                Your support brings trauma-informed humanitarian response to people affected by war,
                displacement, and disaster.
              </p>
              <ul className="mt-8 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-white/85">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — donation card */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 md:p-8 text-foreground shadow-elegant">
                {/* Frequency toggle */}
                <div className="bg-muted p-1 rounded-full grid grid-cols-2 gap-1">
                  {(["monthly", "once"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f)}
                      className={`py-2.5 rounded-full text-sm font-semibold transition-all ${
                        frequency === f
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {f === "monthly" ? "Monthly" : "One-time"}
                    </button>
                  ))}
                </div>

                {/* Amount grid */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {amounts.map((a) => {
                    const active = !custom && amount === a;
                    return (
                      <button
                        key={a}
                        onClick={() => {
                          setAmount(a);
                          setCustom("");
                        }}
                        className={`relative py-4 rounded-xl border-2 font-display font-semibold text-lg transition-all ${
                          active
                            ? "border-accent bg-accent/5 text-primary"
                            : "border-border text-foreground hover:border-primary/40"
                        }`}
                      >
                        €{a}
                        {a === 25 && !custom && (
                          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[9px] leading-none font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-soft whitespace-nowrap">
                            Popular
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Custom amount */}
                <div className="mt-4 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                    €
                  </span>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="Custom amount"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="w-full py-3.5 pl-8 pr-4 rounded-xl border-2 border-border bg-background focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Impact line */}
                <div className="mt-5 flex gap-3 items-start text-sm bg-muted/60 rounded-xl p-4">
                  <Heart size={18} className="text-accent shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-primary">
                      €{finalAmount || 0}
                      {frequency === "monthly" ? "/mo" : ""}
                    </span>{" "}
                    — {impactLine}
                  </p>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground py-4 rounded-full font-semibold shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant">
                  Donate €{finalAmount || 0}
                  {frequency === "monthly" ? " / month" : ""}
                  <ArrowRight size={18} />
                </button>

                <p className="mt-4 text-xs text-muted-foreground text-center">
                  Secure payment · Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
