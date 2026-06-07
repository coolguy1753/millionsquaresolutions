'use client';
import Link from "next/link";

const CaseStudiesSection = () => {
  const stats = [
    { metric: "190%", label: "Total Review Growth", company: "Regional Bank — US", tag: "Product Adoption" },
    { metric: "4.94★", label: "Avg Google Rating", company: "Regional Bank — US", tag: "Reputation Management" },
    { metric: "3 mo", label: "Churn Recovery", company: "Mortgage Company — US", tag: "Retention Recovery" },
    { metric: "100%+", label: "NRR Maintained", company: "Across Portfolios", tag: "NRR Optimization" },
  ];

  return (
    <section id="results" className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">Proof of Impact</div>
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">Real Results. Real Stories.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Client names kept confidential. These are real engagements managed by our team.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="glass-morphism p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="text-xs text-primary/60 uppercase tracking-widest font-bold mb-3">{stat.tag}</div>
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.metric}</div>
              <div className="text-sm text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.company}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/case-studies" className="btn-futuristic px-8 py-4 text-lg font-bold inline-block">Read Full Case Studies</Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;