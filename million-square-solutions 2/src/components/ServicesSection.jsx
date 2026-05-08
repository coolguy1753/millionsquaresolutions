import { useEffect, useRef } from 'react';
import { Users, Zap, BarChart3, ShieldCheck, Database, BrainCircuit } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-header", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: ".service-header",
          start: "top 80%",
        }
      });

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Managed CSM Teams",
      description: "Elite, dedicated Customer Success Managers who integrate into your workflow to manage 100+ accounts seamlessly.",
      icon: <Users className="w-8 h-8 text-primary" />,
      tag: "Core Offering"
    },
    {
      title: "AI-Powered Retention",
      description: "We equip our CSMs with Generative AI playbooks to predict churn and automate personalized customer journeys.",
      icon: <BrainCircuit className="w-8 h-8 text-accent" />,
      tag: "Strategic Edge"
    },
    {
      title: "NRR Optimization",
      description: "Focusing on Net Revenue Retention through proactive expansion strategies and systematic renewal management.",
      icon: <BarChart3 className="w-8 h-8 text-secondary" />,
      tag: "Growth Focus"
    },
    {
      title: "CRM Architecture",
      description: "Designing HubSpot & Salesforce workflows to provide your leadership with 360-degree customer health visibility.",
      icon: <Database className="w-8 h-8 text-primary" />,
      tag: "Infrastructure"
    },
    {
      title: "Churn Prevention Systems",
      description: "Building data-driven early warning systems that stop churn before it starts, saving at-risk revenue.",
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      tag: "Revenue Protection"
    },
    {
      title: "Scaleable CS Ops",
      description: "Standardizing QBRs, onboarding playbooks, and escalation management for rapid SaaS scaling.",
      icon: <Zap className="w-8 h-8 text-secondary" />,
      tag: "Operational Excellence"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="service-header text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">
            Elite CSM Teams. AI-Driven Results.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just provide staff; we provide a high-performance Customer Success engine 
            built on 13+ years of SaaS growth expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 group relative"
            >
              <div className="absolute top-4 right-6 text-[10px] uppercase tracking-widest text-primary/60 font-bold">
                {service.tag}
              </div>
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
