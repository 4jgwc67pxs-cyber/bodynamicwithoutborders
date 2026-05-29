import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — Bodynamic Humanity";
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
            <h1 className="mt-4 text-4xl md:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: April 2026</p>
          </div>

          <div className="mt-10 prose-content space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">1. Who we are</h2>
              <p>
                Bodynamic Humanity ("we", "us") is a humanitarian initiative providing
                trauma-informed support in conflict and crisis regions. This policy explains how we
                handle personal information collected via this website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">2. Information we collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Information you provide voluntarily (name, email, message) when contacting us or signing up for updates.</li>
                <li>Donation details processed by our payment provider — we do not store full card data.</li>
                <li>Basic technical data (IP address, browser type, pages visited) collected automatically for security and analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">3. How we use your information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to inquiries and provide requested information.</li>
                <li>To process donations and issue receipts.</li>
                <li>To send updates if you have opted in.</li>
                <li>To improve the website and ensure its security.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">4. Sharing</h2>
              <p>
                We do not sell personal data. We share information only with service providers
                strictly necessary to operate the site and process donations, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">5. Your rights (GDPR)</h2>
              <p>
                You have the right to access, correct, delete, or restrict use of your personal data,
                and to withdraw consent at any time. Contact us at the address below to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">6. Cookies</h2>
              <p>
                We use only essential cookies required for the site to function. No third-party
                tracking or advertising cookies are set without your consent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-primary mb-3">7. Contact</h2>
              <p>
                Questions about this policy? Email{" "}
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

export default Privacy;