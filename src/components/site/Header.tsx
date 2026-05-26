import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#work", label: "Our work" },
  { href: "/stories", label: "Stories" },
  { href: "#about", label: "About" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="w-9 h-9 md:w-10 md:h-10 rounded-md overflow-hidden bg-primary shrink-0">
            <img src={logo} alt="Bodynamic Without Borders" className="w-full h-full object-cover" />
          </span>
          <span className="font-display text-base md:text-lg font-semibold text-primary leading-tight">
            Bodynamic <em className="not-italic font-normal text-muted-foreground">Without Borders</em>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
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
            className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-soft hover:shadow-elegant hover:-translate-y-0.5"
          >
            Donate
          </a>
          <button
            className="md:hidden p-2 text-primary"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-t border-border animate-fade-up">
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
              className="mt-2 inline-flex items-center justify-center bg-accent text-accent-foreground px-5 py-3 rounded-full font-semibold"
            >
              Donate →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
