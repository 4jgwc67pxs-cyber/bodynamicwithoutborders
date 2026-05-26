import logo from "@/assets/logo.jpg";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email });
    setLoading(false);
    if (error) {
      if (error.code === "23505") {
        toast.success("You're already subscribed — thank you.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      return;
    }
    toast.success("Thanks — you're on the list.");
    setEmail("");
  };

  return (
    <footer className="border-t border-border py-14 md:py-20 bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand + mission */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-md overflow-hidden bg-primary">
                <img src={logo} alt="" className="w-full h-full object-cover" />
              </span>
              <span className="font-display font-semibold text-primary">
                Bodynamic <em className="not-italic font-normal text-muted-foreground">Without Borders</em>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Trauma-informed humanitarian response. Field-tested in Ukraine since 2006.
            </p>
            <p className="mt-5 text-xs text-muted-foreground/80 leading-relaxed max-w-xs">
              Bodynamic Without Borders is a registered non-profit organisation.
              <br />
              <span className="italic">Reg. no. and entity details to be added.</span>
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#work" className="hover:text-primary transition-colors">Our work</a></li>
              <li><Link to="/stories" className="hover:text-primary transition-colors">Stories</Link></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/#donate" className="hover:text-primary transition-colors">Donate</a></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href="mailto:contact@bodynamicwithoutborders.org" className="hover:text-primary transition-colors break-all">
                  contact@bodynamicwithoutborders.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>Copenhagen, Denmark</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Stay informed
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Quarterly updates from the field. No noise.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-full border border-border bg-background text-sm focus:border-accent focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-full text-sm font-semibold transition-all disabled:opacity-60"
              >
                {loading ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <span>© 2026 Bodynamic Without Borders — Trauma-informed humanitarian response.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
