import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Use — Bodynamic Without Borders";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="container-narrow max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Back home
          </Link>
          <div className="mt-6">
            <span className="eyebrow">Legal</span>
            <h1 className="mt-4 text-4xl md:text-5xl">Terms of Use</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: April 2026</p>
          </div>

          <div className="mt-10 space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">1. Acceptance</h2>
              <p>
                By accessing this website you agree to these Terms of Use. If you do not agree,
                please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">2. Purpose of the site</h2>
              <p>
                This website provides information about Bodynamic Without Borders, our
                trauma-informed humanitarian work, and the option to support our programs through
                donations. Content is for informational purposes and does not constitute medical or
                clinical advice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">3. Donations</h2>
              <p>
                Donations support our field programs and are processed by a third-party payment
                provider. Donations are generally non-refundable except where required by law. Please
                contact us if you believe a donation was made in error.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">4. Intellectual property</h2>
              <p>
                All text, images, and materials on this site are the property of Bodynamic Without
                Borders or used with permission. You may share content with attribution but may not
                reproduce or modify it for commercial use without written consent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">5. User conduct</h2>
              <p>
                You agree not to misuse the site, attempt to gain unauthorized access, or use
                content in any way that is unlawful, harmful, or misleading.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">6. Disclaimer</h2>
              <p>
                The site is provided "as is" without warranties of any kind. We do not guarantee
                that the site will be uninterrupted or error-free.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">7. Changes</h2>
              <p>
                We may update these Terms from time to time. Continued use of the site after changes
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">8. Contact</h2>
              <p>
                Questions? Email{" "}
                <a href="mailto:contact@bodynamicwithoutborders.org" className="text-accent hover:underline">
                  contact@bodynamicwithoutborders.org
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;