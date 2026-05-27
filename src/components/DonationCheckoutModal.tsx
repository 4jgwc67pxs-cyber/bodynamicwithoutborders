import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { X } from "lucide-react";
import { useCallback } from "react";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";
import { supabase } from "@/integrations/supabase/client";

export type CheckoutRequest =
  | { kind: "subscription"; priceId?: string; customAmountCents?: number }
  | { kind: "donation"; amountCents: number; customerEmail?: string; userId?: string };

interface Props {
  request: CheckoutRequest;
  onClose: () => void;
}

export function DonationCheckoutModal({ request, onClose }: Props) {
  const fetchClientSecret = useCallback(async (): Promise<string> => {
    const returnUrl = `${window.location.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`;
    const environment = getStripeEnvironment();

    if (request.kind === "subscription") {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { priceId: request.priceId, customAmountCents: request.customAmountCents, returnUrl, environment },
      });
      if (error || !data?.clientSecret) {
        throw new Error(data?.error || error?.message || "Failed to start checkout");
      }
      return data.clientSecret;
    } else {
      const { data, error } = await supabase.functions.invoke("create-donation-checkout", {
        body: {
          amountCents: request.amountCents,
          customerEmail: request.customerEmail,
          userId: request.userId,
          returnUrl,
          environment,
        },
      });
      if (error || !data?.clientSecret) {
        throw new Error(data?.error || error?.message || "Failed to start checkout");
      }
      return data.clientSecret;
    }
  }, [request]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-start md:items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white rounded-md w-full max-w-2xl my-8 shadow-elegant">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-elegant hover:bg-muted z-10"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <div id="checkout" className="rounded-md overflow-hidden">
          <EmbeddedCheckoutProvider stripe={getStripe()} options={{ fetchClientSecret }}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </div>
    </div>
  );
}