'use client';
const IndustriesSection = () => {
  const industries = [
    {
      icon: "⚙️",
      title: "SaaS & Software Companies",
      description: "Our primary focus. We help B2B SaaS businesses across the US, UK, Canada, UAE, Australia, and New Zealand drive product adoption, reduce churn, and grow NRR through dedicated customer success managers who become a true extension of your team.",
      metrics: ["Onboarding & Adoption", "Renewal Management", "Expansion Revenue"]
    },
    {
      icon: "🏦",
      title: "FinTech & RegTech",
      description: "Managing high-stakes client relationships where trust, compliance, and precision are non-negotiable. Our dedicated CSMs ensure your FinTech users feel confident and supported at every stage of their journey.",
      metrics: ["Trust-Based CS", "Compliance Monitoring", "Risk-Aware Engagement"]
    },
    {
      icon: "🤖",
      title: "AI & Automation Platforms",
      description: "Helping AI-first SaaS companies translate complex technology into clear customer outcomes — driving adoption among users who need expert guidance to unlock full product value and reduce churn.",
      metrics: ["Technical Onboarding", "Feature Adoption", "ROI Demonstration"]
    },
    {
      icon: "💻",
      title: "IT Services & Consulting",
      description: "Supporting IT service providers with structured customer success operations that maintain client satisfaction, reduce project churn, and build long-term account relationships across global markets.",
      metrics: ["Account Health Scoring", "Stakeholder Management", "Renewal Strategy"]
    },
    {
      icon: "🔗",
      title: "CRM & ERP Solution Providers",
      description: "Deep domain expertise in managing complex, high-touch CRM and ERP implementations. We help your clients realize full platform value and expand usage — improving NRR and reducing cancellations.",
      metrics: ["Implementation Support", "Power User Development", "Cross-sell Enablement"]
    },
    {
      icon: "👥",
      title: "HR Tech & WorkTech",
      description: "Driving adoption across HR platforms, talent tools, and workforce solutions — ensuring your B2B clients in the US, UK, Australia and beyond get measurable ROI from their investment and renew year after year.",
      metrics: ["User Activation", "Executive QBRs", "Churn Prevention"]
    }
  ];

  return (
    <section id="industries" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">
            Who We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">
            Industries We Specialize In
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We bring dedicated customer success outsourcing expertise to high-growth B2B technology companies across the US, UK, Canada, UAE, Australia, and New Zealand — so your customers never stop seeing value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="glass-morphism p-8 rounded-2xl neon-glow border border-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{industry.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{industry.description}</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-2">Focus Areas:</p>
                <ul className="space-y-1">
                  {industry.metrics.map((metric, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

