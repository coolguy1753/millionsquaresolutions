import { useEffect, useRef } from 'react';
import { 
  Monitor, 
  ShieldCheck, 
  ShoppingCart, 
  Cpu, 
  BarChart, 
  Globe 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IndustriesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const industries = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Vertical SaaS",
      description: "Driving deep adoption for industry-specific software. We help vertical SaaS firms manage complex user journeys and reduce high-touch churn.",
      services: ["Success Playbooks", "Niche Onboarding"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "FinTech & RegTech",
      description: "Managing high-stakes client relationships where security and compliance are paramount. We ensure your users feel supported and secure.",
      services: ["Trust-Based CS", "Compliance Monitoring"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Tech",
      description: "Optimizing the customer lifecycle for Shopify apps, martech tools, and inventory platforms to drive predictable renewals.",
      services: ["Expansion Sales", "Health Tracking"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & Infrastructure",
      description: "Helping technical founders translate complex AI features into tangible business outcomes for their end users.",
      services: ["Technical Success", "Usage Analytics"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Data & Analytics",
      description: "Ensuring users extract maximum value from data platforms, turning complex dashboards into actionable business insights.",
      services: ["Adoption Strategy", "ROI Reporting"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Marketplaces",
      description: "Scaling support and success operations for double-sided marketplaces that require 24/7 strategic oversight.",
      services: ["Scale Ops", "Global CS Talent"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="industries" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">
            SaaS Segments We Empower
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in high-growth technology sectors, bringing domain-specific 
            Customer Success frameworks to ensure your users never stop growing.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              ref={el => cardsRef.current[index] = el}
              className="group glass-morphism p-6 rounded-xl card-3d hover:neon-glow transition-all duration-500"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {industry.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {industry.description}
              </p>

              {/* Services */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-primary mb-2">Success Metrics:</h4>
                {industry.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-center text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass-morphism p-8 rounded-xl holographic max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold futuristic-heading mb-4">
              Building the Future of SaaS?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you are an early-stage startup or a scaling enterprise, our 
              Customer Success models adapt to your product's unique DNA.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-futuristic"
            >
              Get a Customized CS Roadmap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
