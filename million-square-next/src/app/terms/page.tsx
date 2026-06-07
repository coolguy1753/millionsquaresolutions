import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Million Square Solutions — the terms and conditions governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold futuristic-heading mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 2026</p>
          <div className="space-y-8">
            <div className="glass-morphism p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-primary mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">By accessing and using the Million Square Solutions website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-primary mb-4">Services</h2>
              <p className="text-muted-foreground leading-relaxed">Million Square Solutions provides Customer Success outsourcing services to SaaS businesses. The specific terms of any engagement are governed by separate service agreements between Million Square Solutions and each client.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-primary mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">All content on this website, including text, graphics, logos, and images, is the property of Million Square Solutions and is protected by applicable intellectual property laws.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-primary mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">Million Square Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">If you have any questions about these Terms of Service, please contact us at info@millionsquaresolutions.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}