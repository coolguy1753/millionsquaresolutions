import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, BrainCircuit, BarChart3, Database, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Success Outsourcing Services',
  description: 'Dedicated CSM teams, churn prevention, NRR optimization and CRM architecture for global SaaS businesses. Serving US, UK, Canada, UAE, Australia and New Zealand.',
};

const services = [
  {
    title: 'Managed CSM Teams',
    description: 'Dedicated Customer Success Managers managing 30–35 accounts each — giving your customers more attention, faster responses, and deeper relationships than the industry average of 50–80 accounts per CSM.',
    icon: <Users className="w-10 h-10 text-primary" />,
    tag: 'Core Offering',
    benefits: [
      'Dedicated CSM per account segment',
      '30-35 accounts per CSM — not 80',
      'Structured QBRs and EBRs',
      'Multi-timezone coverage',
    ],
  },
  {
    title: 'AI-Powered Retention',
    description: 'We equip our CSMs with Generative AI playbooks to predict churn before it happens and automate personalized customer journeys — keeping your NRR above 100%.',
    icon: <BrainCircuit className="w-10 h-10 text-accent" />,
    tag: 'Strategic Edge',
    benefits: [
      'AI churn prediction models',
      'Automated health scoring',
      'Personalized customer journeys',
      'Oracle Certified AI expertise',
    ],
  },
  {
    title: 'NRR Optimization',
    description: 'Dedicated customer success strategy focused on Net Revenue Retention — through proactive expansion, upsell identification, and systematic renewal management.',
    icon: <BarChart3 className="w-10 h-10 text-secondary" />,
    tag: 'Growth Focus',
    benefits: [
      'Expansion revenue identification',
      'Renewal management system',
      'Upsell playbooks',
      '100%+ NRR target',
    ],
  },
  {
    title: 'CRM Architecture',
    description: 'Designing HubSpot & Salesforce customer success workflows to give your leadership 360-degree account health visibility and reduce manual CS overhead.',
    icon: <Database className="w-10 h-10 text-primary" />,
    tag: 'Infrastructure',
    benefits: [
      'HubSpot CS workflow design',
      'Salesforce CS architecture',
      '360-degree health dashboards',
      'Automated CS reporting',
    ],
  },
  {
    title: 'Churn Prevention Systems',
    description: 'Building AI-driven early warning systems and churn prediction frameworks that identify at-risk accounts before they cancel — protecting your recurring revenue.',
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
    tag: 'Revenue Protection',
    benefits: [
      'Early warning systems',
      'At-risk account playbooks',
      'Cancellation intervention',
      'Win-back campaigns',
    ],
  },
  {
    title: 'Scaleable CS Ops',
    description: 'Standardizing QBRs, EBRs, onboarding playbooks, and escalation management so your customer success operations scale without adding headcount.',
    icon: <Zap className="w-10 h-10 text-secondary" />,
    tag: 'Operational Excellence',
    benefits: [
      'Onboarding playbook design',
      'Escalation management',
      'CS team training',
      'Process documentation',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">
              Customer Success as a Service
            </div>
            <h1 className="text-4xl md:text-6xl font-bold futuristic-heading mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A fully managed customer success outsourcing engine built on 10+ years of B2B SaaS expertise — serving companies across the US, UK, Canada, UAE, Australia and New Zealand.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div>{service.icon}</div>
                  <div>
                    <div className="text-xs text-primary/60 uppercase tracking-widest font-bold mb-1">{service.tag}</div>
                    <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-morphism p-12 rounded-2xl border border-primary/20 text-center">
            <h2 className="text-3xl font-bold futuristic-heading mb-4">Ready to Scale Your Customer Success?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-minute strategy call — we'll audit your current CS setup and show you exactly where revenue is leaking.
            </p>
            <a href="/#contact" className="btn-futuristic px-8 py-4 text-lg font-bold inline-block">
              Book a Free Strategy Call
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}