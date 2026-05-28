import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies — Million Square Solutions",
  url: "https://www.millionsquaresolutions.com/case-studies",
  description: "Real customer success results — churn reduction, NRR improvement and retention recovery for global SaaS businesses.",
  publisher: {
    "@type": "Organization",
    name: "Million Square Solutions",
    url: "https://www.millionsquaresolutions.com",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Regional Bank Mortgage Division — 190% Review Growth",
        description: "Designed and launched a targeted Google Review campaign resulting in 190% total review growth and 4.94 average Google rating.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mortgage Company Retention Recovery",
        description: "Within 3 months, reversed a cancellation decision and renewed the contract through senior CSM ownership and full account audit.",
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real customer success results — churn reduction, NRR improvement and retention recovery for global SaaS businesses across US, UK, Canada, UAE, Australia and New Zealand.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">Proof of Impact</div>
            <h1 className="text-4xl md:text-6xl font-bold futuristic-heading mb-6">Real Results. Real Stories.</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Client names kept confidential by agreement. These are real engagements managed by our team.</p>
          </div>
          <div className="space-y-8 mb-16">
            <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
              <div className="text-xs text-primary/60 uppercase tracking-widest font-bold mb-2">Case Study 01</div>
              <h2 className="text-2xl font-bold text-white mb-1">Regional Bank — Mortgage Division</h2>
              <p className="text-muted-foreground text-sm mb-6">Financial Services · United States · Engagement: 2024-Present</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <div className="text-xs text-primary/60 uppercase tracking-wider mb-2">The Challenge</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">A regional bank with an active mortgage division was struggling with poor online reviews and weak digital presence. Their Loan Officers were not leveraging available technology. The bank needed a structured adoption program fast.</p>
                </div>
                <div>
                  <div className="text-xs text-accent uppercase tracking-wider mb-2">What We Did</div>
                  <ul className="space-y-1">
                    <li className="text-muted-foreground text-sm">Designed and launched a targeted Google Review campaign</li>
                    <li className="text-muted-foreground text-sm">Conducted individual and leadership webinars for Loan Officers</li>
                    <li className="text-muted-foreground text-sm">Guided LOs through full product adoption and profile optimization</li>
                    <li className="text-muted-foreground text-sm">Built a sustainable review generation process for the team</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-primary">190%</div>
                  <div className="text-xs text-muted-foreground">Total Review Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-primary">4.94</div>
                  <div className="text-xs text-muted-foreground">Avg Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-primary">1,392</div>
                  <div className="text-xs text-muted-foreground">Platform Reviews 2025</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-primary">+73%</div>
                  <div className="text-xs text-muted-foreground">YoY Review Growth</div>
                </div>
              </div>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
              <div className="text-xs text-primary/60 uppercase tracking-widest font-bold mb-2">Case Study 02</div>
              <h2 className="text-2xl font-bold text-white mb-1">Mortgage Company — Retention Recovery</h2>
              <p className="text-muted-foreground text-sm mb-6">Financial Services · United States · Critical Account Recovery</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <div className="text-xs text-primary/60 uppercase tracking-wider mb-2">The Challenge</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">A mortgage company had reached a breaking point with their existing CS support. Persistent unresolved issues and lack of strategic engagement had driven the client to the verge of cancellation. The account was about to be lost entirely.</p>
                </div>
                <div>
                  <div className="text-xs text-accent uppercase tracking-wider mb-2">What We Did</div>
                  <ul className="space-y-1">
                    <li className="text-muted-foreground text-sm">Took direct ownership with a senior CSM</li>
                    <li className="text-muted-foreground text-sm">Conducted a full audit of all open issues and complaints</li>
                    <li className="text-muted-foreground text-sm">Coordinated resolution across Support, Engineering, and Sales</li>
                    <li className="text-muted-foreground text-sm">Hosted dedicated demos to re-establish product confidence</li>
                    <li className="text-muted-foreground text-sm">Established transparent, regular communication cadence</li>
                  </ul>
                </div>
              </div>
              <div className="glass-morphism p-6 rounded-xl border border-accent/20 mt-4">
                <div className="text-xs text-accent uppercase tracking-wider mb-2">The Outcome</div>
                <p className="text-white font-semibold mb-2">Within 3 months, the client reversed their cancellation decision and renewed their contract.</p>
                <p className="text-muted-foreground text-sm">The client specifically requested that our team continue managing their account going forward.</p>
              </div>
            </div>
          </div>
          <div className="glass-morphism p-12 rounded-2xl border border-primary/20 text-center">
            <h2 className="text-3xl font-bold futuristic-heading mb-4">Want Results Like These?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Book a free 30-minute strategy call. We will audit your current CS setup and show you exactly where revenue is leaking.</p>
            <a href="/#contact" className="btn-futuristic px-8 py-4 text-lg font-bold inline-block">Book a Free Strategy Call</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}