import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { getStripeEnvironment } from "@/lib/stripe";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";

export default function ThankYou() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const [amount, setAmount] = useState<{ cents: number; currency: string } | null>(null);
  const [loading, setLoading] = useState(!!sessionId);

  useEffect(() => {
    if (!sessionId) return;
    let cancelled = false;
    let attempts = 0;
    const poll = async () => {
      attempts += 1;
      const { data } = await supabase
        .from("donations")
        .select("amount_cents, currency")
        .eq("stripe_session_id", sessionId)
        .eq("environment", getStripeEnvironment())
        .maybeSingle();
      if (cancelled) return;
      if (data) {
        setAmount({ cents: data.amount_cents, currency: data.currency });
        setLoading(false);
      } else if (attempts < 8) {
        setTimeout(poll, 1500);
      } else {
        setLoading(false);
      }
    };
    poll();
    return () => { cancelled = true; };
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-background">
      <PaymentTestModeBanner />
      <div className="container-narrow py-20 md:py-32 max-w-xl mx-auto text-center">
        <div className="text-5xl mb-6">💛</div>
        <h1 className="text-3xl md:text-4xl font-display">Thank you.</h1>
        {loading ? (
          <p className="mt-4 text-muted-foreground">Confirming your donation…</p>
        ) : amount ? (
          <p className="mt-4 text-lg text-foreground">
            Your <span className="font-semibold">€{(amount.cents / 100).toFixed(2)}</span> donation
            is helping fund trauma-informed care in crisis zones.
          </p>
        ) : (
          <p className="mt-4 text-lg text-foreground">
            Your donation is on its way. We'll send a confirmation by email shortly.
          </p>
        )}
        <div className="mt-10 flex gap-3 justify-center">
          <Link to="/" className="px-6 py-3 rounded-sm border border-border hover:bg-muted text-sm font-medium">
            Back to home
          </Link>
          <Link to="/account" className="px-6 py-3 rounded-sm bg-accent text-accent-foreground hover:bg-[hsl(var(--accent-hover))] text-sm font-semibold">
            Manage donation
          </Link>
        </div>
      </div>
    </div>
  );
}