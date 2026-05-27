import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Stats } from "@/components/site/Stats";
import { Method } from "@/components/site/Method";
import { UkraineSection } from "@/components/site/UkraineSection";
import { Work } from "@/components/site/Work";
import { Team } from "@/components/site/Team";
import { Partners } from "@/components/site/Partners";
import { Governance } from "@/components/site/Governance";
import { Story } from "@/components/site/Story";
import { Global } from "@/components/site/Global";
import { Transparency } from "@/components/site/Transparency";
import { Donate } from "@/components/site/Donate";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Bodynamic Without Borders — Trauma-informed humanitarian response";
    const meta = document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute("content",
      "Trauma-informed humanitarian response in the world's most vulnerable regions. Field-tested in Ukraine since 2006."
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Stats />
        <Method />
        <UkraineSection />
        <Work />
        <Transparency />
        <Team />
        <Partners />
        <Governance />
        <Story />
        <Global />
        <Donate />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
