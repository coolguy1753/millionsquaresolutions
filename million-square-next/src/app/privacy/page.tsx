import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Million Square Solutions — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold futuristic-heading mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 2026</p>
          <div className="space-y-8">
            <div className="glass-morphism p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">We collect information you provide directly to us when you fill out our contact form, including your name, email address, phone number, company name, and message. We do not sell your personal information to third parties.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">We use the information we collect to respond to your inquiries, provide our customer success outsourcing services, send you relevant information about our services, and improve our website and services.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">If you have any questions about this Privacy Policy, please contact us at info@millionsquaresolutions.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}