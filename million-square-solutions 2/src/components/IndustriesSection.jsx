import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IndustriesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".industries-header", {
        opacity: 0, y: 30, duration: 0.8,
        scrollTrigger: { trigger: ".industries-header", start: "top 95%" }
      });
      gsap.from(".industry-card", {
        opacity: 0, y: 20, duration: 0.5, stagger: 0.08,
        scrollTrigger: { trigger: ".industries-grid", start: "top 95%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const industries = [
    {
      icon: "💻",
      title: "Vertical SaaS",
      description: "Driving deep adoption for industry-specific software. We help vertical SaaS firms manage complex user journeys and reduce high-touch churn.",
      metrics: ["Success Playbooks", "Niche Onboarding"]
    },
    {
      icon: "🛡️",
      title: "FinTech & RegTech",
      description: "Managing high-stakes client relationships where security and compliance are paramount. We ensure your users feel supported and secure.",
      metrics: ["Trust-Based CS", "Compliance Monitoring"]
    },
    {
      icon: "🛒",
      title: "E-commerce Tech",
      description: "Optimizing the customer lifecycle for Shopify apps, martech tools, and inventory platforms to drive predictable renewals.",
      metrics: ["Expansion Sales", "Health Tracking"]
    },
    {
      icon: "🤖",
      title: "AI & Infrastructure",
      description: "Helping technical founders translate complex AI features into tangible business outcomes for their end users.",
      metrics: ["Technical Success", "Usage Analytics"]
    },
    {
      icon: "📊",
      title: "Data & Analytics",
      description: "Ensuring users extract maximum value from data platforms, turning complex dashboards into actionable business insights.",
      metrics: ["Adoption Strategy", "ROI Reporting"]
    },
    {
      icon: "🌐",
      title: "Global Marketplaces",
      description: "Scaling support and success operations for double-sided marketplaces that require 24/7 strategic oversight.",
      metrics: ["Scale Ops", "Global CS Talent"]
    }
  ];

  return (
    <section id="industries" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="industries-header text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">
            Who We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">
            SaaS Segments We Empower
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in high-growth technology sectors, bringing domain-specific Customer
            Success frameworks to ensure your users never stop growing.
          </p>
        </div>

        <div className="industries-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {industry.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                {industry.description}
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-2">Success Metrics:</p>
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
