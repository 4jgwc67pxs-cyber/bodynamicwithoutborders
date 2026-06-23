import logo from "@/assets/logo.jpg";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border py-12 md:py-16 bg-background">
    <div className="container-narrow">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-md overflow-hidden bg-primary">
              <img src={logo} alt="" className="w-full h-full object-cover" />
            </span>
            <span className="font-display font-semibold text-primary">
              Bodynamic <em className="not-italic font-normal text-muted-foreground">Humanity</em>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Trauma-informed humanitarian response. Field-tested in Ukraine since 2006.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/#ukraine" className="hover:text-primary transition-colors">Ukraine</a></li>
            <li><a href="/#work" className="hover:text-primary transition-colors">What we do</a></li>
            <li><Link to="/stories" className="hover:text-primary transition-colors">Stories</Link></li>
            <li><a href="/#donate" className="hover:text-primary transition-colors">Donate</a></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
          </ul>
        </div>

        <div>
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
      </div>
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div className="flex flex-col gap-1">
          <span>© 2026 Bodynamic Humanity — Trauma-informed humanitarian response.</span>
          <span className="text-muted-foreground/80">With care — Lucca</span>
        </div>
        <span>All rights reserved.</span>
      </div>
    </div>
  </footer>
);
