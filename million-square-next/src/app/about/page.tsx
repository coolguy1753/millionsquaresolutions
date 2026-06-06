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
  description: "Million Square Solutions — founded by a 10+ year B2B SaaS Customer Success veteran. Learn about our mission, values and approach to CS outsourcing.",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold futuristic-heading mb-4">I didn't build a theory.</h2>
              <p className="text-primary font-semibold text-xl mb-6">I built from experience.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">Over a decade inside Customer Success, not advising on it, but doing it. Managing accounts, running QBRs, saving at-risk customers, building teams, and integrating AI into how CS works day-to-day.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">Built and led CSM teams managing 150+ SaaS accounts, building churn prediction frameworks, cutting QBR prep time by 50% using GenAI, and sustaining 100%+ Net Revenue Retention consistently across complex mid-market portfolios.</p>
              <p className="text-muted-foreground leading-relaxed mb-8">Million Square Solutions exists because I know exactly what great CS looks like and I know most companies never get it. I built this to close that gap.</p>
              <div className="glass-morphism p-6 rounded-xl border border-primary/20">
                <p className="text-white font-semibold italic">"Million Square Solutions exists because I know exactly what great CS looks like — and I know most companies never get it. I built this to close that gap."</p>
                <p className="text-primary text-sm mt-3">— Founder, Million Square Solutions</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-2xl glass-morphism border border-primary/30 neon-glow overflow-hidden">
                <img src="/founder.jpg" alt="Million Square Solutions Founder" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="glass-morphism p-12 rounded-2xl border border-white/10 mb-12">
            <h2 className="text-3xl font-bold futuristic-heading mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">To give every SaaS company access to world-class Customer Success through dedicated CSM teams powered by AI workflows and real SaaS expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Fewer Accounts, Deeper Relationships</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">30-35 accounts per CSM vs industry average of 50-80. More time per customer means better outcomes.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 text-center">
              <h3 className="text-xl font-bold text-white mb-3">AI-Native from Day One</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Every CSM is equipped with GenAI tools. Oracle Certified AI expertise built into every engagement.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 text-center">
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