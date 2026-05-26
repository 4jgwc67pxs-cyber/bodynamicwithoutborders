import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#ukraine", label: "Ukraine" },
  { href: "#work", label: "What we do" },
  { href: "#impact", label: "Impact" },
  { href: "/stories", label: "Stories" },
  { href: "#about", label: "About" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-background border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        <button
          className="lg:hidden p-2 -ml-2 text-primary"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <a href="#home" className="flex items-center gap-3 group lg:mr-auto absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <span className="w-9 h-9 md:w-10 md:h-10 rounded-md overflow-hidden bg-primary shrink-0">
            <img src={logo} alt="Bodynamic Without Borders" className="w-full h-full object-cover" />
          </span>
          <span className="hidden sm:inline font-display text-base md:text-lg font-semibold text-primary leading-tight">
            Bodynamic <em className="not-italic font-normal text-muted-foreground">Without Borders</em>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#donate"
            className="inline-flex items-center gap-2 bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground px-4 py-2 md:px-5 md:py-2.5 rounded-sm text-sm font-semibold transition-all shadow-soft hover:shadow-elegant hover:-translate-y-0.5"
          >
            Donate
          </a>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-background border-t border-border animate-fade-up">
          <div className="container-narrow py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-accent text-accent-foreground px-5 py-3 rounded-sm font-semibold"
            >
              Donate →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
