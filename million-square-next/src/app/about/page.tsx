import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Million Square Solutions",
  url: "https://www.millionsquaresolutions.com/about",
  description: "Million Square Solutions was founded by a 10+ year B2B SaaS Customer Success veteran. We provide dedicated CSM teams for global SaaS businesses.",
  mainEntity: {
    "@type": "Organization",
    name: "Million Square Solutions",
    url: "https://www.millionsquaresolutions.com",
    description: "10+ years of B2B SaaS Customer Success experience. Built and led CSM teams managing 150+ SaaS accounts. Oracle Certified Generative AI Professional.",
    knowsAbout: ["Customer Success", "SaaS Retention", "Churn Reduction", "NRR Optimization", "CRM Architecture", "AI in Customer Success"],
  },
};

export const metadata: Metadata = {
  title: "About Us",
  description: "Million Square Solutions — a dedicated Customer Success outsourcing company built on 10+ years of real B2B SaaS experience. Learn about our mission, values and approach.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">Our Story</div>
            <h1 className="text-4xl md:text-6xl font-bold futuristic-heading mb-6">About Million Square Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Built by a Customer Success practitioner, not a consultant. Every dedicated CSM we deploy is trained on real-world SaaS retention playbooks.</p>
          </div>
          <div className="relative mb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
            <div className="relative border border-white/10 rounded-3xl p-12 md:p-16">
              <div className="mb-12">
                <p className="text-xs font-mono tracking-[0.3em] text-primary/60 uppercase mb-4">Our Philosophy</p>
                <h2 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6">
                  <span className="futuristic-heading">We did not</span><br />
                  <span className="futuristic-heading">build a theory.</span>
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-white/90 italic">We built from experience.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="border-l-2 border-primary/40 pl-6">
                  <p className="text-4xl font-black text-primary mb-2">10+</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Years inside B2B SaaS Customer Success — managing accounts, running QBRs, saving at-risk customers every single day.</p>
                </div>
                <div className="border-l-2 border-secondary/40 pl-6">
                  <p className="text-4xl font-black text-secondary mb-2">150+</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">SaaS accounts led — building churn prediction frameworks and sustaining 100%+ NRR across complex mid-market portfolios.</p>
                </div>
                <div className="border-l-2 border-accent/40 pl-6">
                  <p className="text-4xl font-black text-accent mb-2">50%</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">QBR prep time cut using GenAI — Oracle Certified expertise built into every engagement from day one.</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-8">
                <p className="text-lg text-white/80 leading-relaxed max-w-3xl">When you work with us, you are not getting a generic outsourcing firm. You are getting a dedicated customer success team that has lived the exact problems your customers face — and knows how to solve them.</p>
              </div>
            </div>
          </div>
          <div className="relative mb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 rounded-3xl" />
            <div className="relative border border-primary/20 rounded-3xl p-12 text-center">
              <p className="text-xs font-mono tracking-[0.3em] text-primary/60 uppercase mb-6">Our Mission</p>
              <h2 className="text-4xl md:text-5xl font-black futuristic-heading mb-6 leading-tight">To give every SaaS company<br />access to world-class CS.</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Through dedicated CSM teams powered by AI workflows, real SaaS expertise, and a model built around fewer accounts and deeper relationships.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 text-center">
              <div className="text-3xl font-black text-primary mb-4">30-35</div>
              <h3 className="text-xl font-bold text-white mb-3">Fewer Accounts, Deeper Relationships</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">30-35 accounts per CSM vs industry average of 50-80. More time per customer means better outcomes.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 text-center">
              <div className="text-3xl font-black text-accent mb-4">AI</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Native from Day One</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Every CSM is equipped with GenAI tools. Oracle Certified AI expertise built into every engagement.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 text-center">
              <div className="text-3xl font-black text-secondary mb-4">100%+</div>
              <h3 className="text-xl font-bold text-white mb-3">Outcomes Over Activity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">We measure success by NRR, churn rate, and expansion revenue, not tickets closed or emails sent.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="glass-morphism p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-black text-primary mb-2">10+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="glass-morphism p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-black text-primary mb-2">150+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">SaaS Accounts Led</div>
            </div>
            <div className="glass-morphism p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-black text-primary mb-2">6</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Countries Served</div>
            </div>
            <div className="glass-morphism p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-black text-primary mb-2">100%+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">NRR Maintained</div>
            </div>
          </div>
          <div className="glass-morphism p-12 rounded-2xl border border-primary/20 text-center">
            <h2 className="text-3xl font-bold futuristic-heading mb-4">Work With Us</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Ready to see what dedicated Customer Success can do for your SaaS business?</p>
            <a href="/#contact" className="btn-futuristic px-8 py-4 text-lg font-bold inline-block">Book a Free Strategy Call</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}