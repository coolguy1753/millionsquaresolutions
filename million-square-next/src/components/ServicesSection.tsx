'use client';
import { Users, BrainCircuit, BarChart3, Database, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Managed CSM Teams", description: "Dedicated CSMs managing 30-35 accounts each — not the industry average of 50-80.", icon: Users, iconColor: "text-primary", tag: "Core Offering" },
  { title: "AI-Powered Retention", description: "GenAI playbooks to predict churn and automate personalized customer journeys.", icon: BrainCircuit, iconColor: "text-accent", tag: "Strategic Edge" },
  { title: "NRR Optimization", description: "Proactive expansion, upsell identification, and systematic renewal management.", icon: BarChart3, iconColor: "text-secondary", tag: "Growth Focus" },
  { title: "CRM Architecture", description: "HubSpot and Salesforce CS workflows for 360-degree account health visibility.", icon: Database, iconColor: "text-primary", tag: "Infrastructure" },
  { title: "Churn Prevention Systems", description: "AI-driven early warning systems to identify at-risk accounts before they cancel.", icon: ShieldCheck, iconColor: "text-accent", tag: "Revenue Protection" },
  { title: "Scaleable CS Ops", description: "Standardizing QBRs, EBRs, onboarding playbooks and escalation management.", icon: Zap, iconColor: "text-secondary", tag: "Operational Excellence" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">Customer Success as a Service</div>
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">Elite CSM Teams. AI-Driven Results.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">A fully managed CS outsourcing engine built on 10+ years of B2B SaaS expertise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="glass-morphism p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group relative">
                <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-primary/60 font-bold">{service.tag}</div>
                <Icon className={"w-8 h-8 mb-4 " + service.iconColor} />
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <Link href="/services" className="btn-futuristic px-8 py-4 text-lg font-bold inline-block">View All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;