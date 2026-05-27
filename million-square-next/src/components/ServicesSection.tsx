'use client';
import { Users, Zap, BarChart3, ShieldCheck, Database, BrainCircuit } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Managed CSM Teams",
      description: "Dedicated Customer Success Managers managing 30–35 accounts each — giving your customers more attention, faster responses, and deeper relationships than the industry average of 50–80 accounts per CSM.",
      icon: <Users className="w-8 h-8 text-primary" />,
      tag: "Core Offering"
    },
    {
      title: "AI-Powered Retention",
      description: "We equip our CSMs with Generative AI playbooks to predict churn before it happens and automate personalized customer journeys — keeping your NRR above 100%.",
      icon: <BrainCircuit className="w-8 h-8 text-accent" />,
      tag: "Strategic Edge"
    },
    {
      title: "NRR Optimization",
      description: "Dedicated customer success strategy focused on Net Revenue Retention — through proactive expansion, upsell identification, and systematic renewal management across your SaaS accounts.",
      icon: <BarChart3 className="w-8 h-8 text-secondary" />,
      tag: "Growth Focus"
    },
    {
      title: "CRM Architecture",
      description: "Designing HubSpot & Salesforce customer success workflows to give your leadership 360-degree account health visibility and reduce manual CS overhead.",
      icon: <Database className="w-8 h-8 text-primary" />,
      tag: "Infrastructure"
    },
    {
      title: "Churn Prevention Systems",
      description: "Building AI-driven early warning systems and churn prediction frameworks that identify at-risk accounts before they cancel — protecting your recurring revenue.",
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      tag: "Revenue Protection"
    },
    {
      title: "Scaleable CS Ops",
      description: "Standardizing QBRs, EBRs, onboarding playbooks, and escalation management so your customer success operations scale without adding headcount.",
      icon: <Zap className="w-8 h-8 text-secondary" />,
      tag: "Operational Excellence"
    }
  ];

  return (
    <section id="services" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">
            Customer Success as a Service
          </div>
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">
            Elite CSM Teams. AI-Driven Results.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just provide staff — we provide a fully managed customer success outsourcing engine built on 10+ years of B2B SaaS expertise, serving companies across the US, UK, Canada, UAE, Australia, and New Zealand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-morphism p-8 rounded-2xl neon-glow border border-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 group relative">
              <div className="absolute top-4 right-6 text-[10px] uppercase tracking-widest text-primary/60 font-bold">{service.tag}</div>
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

