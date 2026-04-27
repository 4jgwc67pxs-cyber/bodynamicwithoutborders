import logo from "@/assets/logo.jpg";

export const Footer = () => (
  <footer className="border-t border-border py-12 md:py-16 bg-background">
    <div className="container-narrow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-md overflow-hidden bg-primary">
            <img src={logo} alt="" className="w-full h-full object-cover" />
          </span>
          <span className="font-display font-semibold text-primary">
            Bodynamic <em className="not-italic font-normal text-muted-foreground">Without Borders</em>
          </span>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {["About", "Partners", "Press", "Annual report", "Contact", "Privacy"].map((l) => (
            <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
          ))}
        </ul>
      </div>
      <div className="mt-8 pt-8 border-t border-border text-xs text-muted-foreground">
        © 2026 Bodynamic Without Borders — Trauma-informed humanitarian response.
      </div>
    </div>
  </footer>
);
