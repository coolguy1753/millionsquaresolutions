import { useEffect, useRef } from 'react';
import { 
  Building2, 
  Plane, 
  ShoppingCart, 
  Monitor, 
  Heart, 
  GraduationCap 
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
      icon: <Building2 className="w-8 h-8" />,
      title: "Banking & Financial Services",
      description: "From secure data processing to comprehensive customer support and collections, we help financial institutions streamline operations, enhance security, and improve customer satisfaction.",
      services: ["BPO (Inbound, Outbound, Back Office)", "Customer Success"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Travel & Hospitality",
      description: "Supporting travel agencies, airlines, and hospitality businesses with booking management, customer service, and specialized Airbnb solutions to ensure seamless guest experiences.",
      services: ["BPO (Customer Service, Order Taking)", "Airbnb Services"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce & Retail",
      description: "Optimizing online sales processes, managing customer inquiries, and handling backend operations to enhance the shopping experience and boost sales.",
      services: ["BPO (Customer Service, Order Taking, Back Office)", "Customer Success"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "SaaS & Technology",
      description: "Driving product adoption, ensuring customer retention, and providing technical support for software and technology companies.",
      services: ["Customer Success", "BPO (Technical Support, Back Office)"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare (Non-clinical BPO)",
      description: "Assisting healthcare providers with non-clinical back-office tasks, patient scheduling support, and administrative data management while ensuring compliance.",
      services: ["BPO (Back Office, Data Entry)"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education & E-Learning",
      description: "Supporting educational platforms with administrative tasks, student support, and content management solutions.",
      services: ["BPO (Back Office, Customer Service)"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="industries" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">
            Industries We Empower
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Million Square Solutions brings specialized expertise to a diverse range of industries, 
            understanding their unique challenges and delivering tailored solutions that drive success.
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
                <h4 className="text-sm font-semibold text-primary mb-2">Relevant Services:</h4>
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
              Don't See Your Industry?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We work with businesses across various sectors. Our adaptable solutions and experienced team 
              can be tailored to meet the unique requirements of your industry.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-futuristic"
            >
              Discuss Your Needs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

