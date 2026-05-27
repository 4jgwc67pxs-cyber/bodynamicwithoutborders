import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { getStripeEnvironment } from "@/lib/stripe";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";

interface Sub {
  status: string;
  price_id: string;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
}

const TIER_LABEL: Record<string, string> = {
  donation_monthly_10: "€10 / month",
  donation_monthly_25: "€25 / month",
  donation_monthly_50: "€50 / month",
  donation_monthly_100: "€100 / month",
};

export default function Account() {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [sub, setSub] = useState<Sub | null>(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      navigate("/auth?redirect=/account");
      return;
    }
    (async () => {
      const { data } = await supabase
        .from("subscriptions")
        .select("status, price_id, current_period_end, cancel_at_period_end")
        .eq("user_id", user.id)
        .eq("environment", getStripeEnvironment())
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      setSub((data as Sub) ?? null);
      setLoading(false);
    })();
  }, [user, authLoading, navigate]);

  const openPortal = async () => {
    setPortalLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-portal-session", {
        body: { returnUrl: `${window.location.origin}/account`, environment: getStripeEnvironment() },
      });
      if (error || !data?.url) throw new Error(data?.error || error?.message || "Could not open portal");
      window.open(data.url, "_blank");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setPortalLoading(false);
    }
  };

  if (authLoading || loading) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading…</div>;
  }

  const isActive = sub && ["active", "trialing", "past_due"].includes(sub.status);
  const isCanceling = sub?.cancel_at_period_end;

  return (
    <div className="min-h-screen bg-background">
      <PaymentTestModeBanner />
      <div className="container-narrow py-16 md:py-24 max-w-xl mx-auto">
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary">← Back to home</Link>
        <h1 className="mt-6 text-3xl font-display">Your account</h1>
        <p className="mt-2 text-sm text-muted-foreground">{user?.email}</p>

        <div className="mt-10 rounded-md border border-border p-6">
          <h2 className="text-lg font-semibold">Monthly donation</h2>
          {sub ? (
            <>
              <p className="mt-3 text-2xl font-display">
                {TIER_LABEL[sub.price_id] ?? sub.price_id}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Status: <span className="font-medium text-foreground">{sub.status}</span>
                {isCanceling && sub.current_period_end && (
                  <> — ends {new Date(sub.current_period_end).toLocaleDateString()}</>
                )}
              </p>
              {isActive && (
                <button
                  onClick={openPortal}
                  disabled={portalLoading}
                  className="mt-6 w-full bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground py-3 rounded-sm font-semibold disabled:opacity-60"
                >
                  {portalLoading ? "Opening…" : "Manage / cancel"}
                </button>
              )}
            </>
          ) : (
            <>
              <p className="mt-3 text-muted-foreground">You don't have an active monthly donation.</p>
              <Link
                to="/#donate"
                className="mt-6 inline-block bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground py-3 px-6 rounded-sm font-semibold"
              >
                Become a monthly donor
              </Link>
            </>
          )}
        </div>

        <button onClick={signOut} className="mt-8 text-sm text-muted-foreground hover:text-primary">
          Sign out
        </button>
      </div>
    </div>
  );
}