import { useEffect, useRef } from 'react';
import { Headphones, Users, Home, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
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
            { opacity: 0, y: 50, rotationY: -15 },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              duration: 0.8,
              delay: index * 0.2,
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

  const services = [
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "BPO Services",
      description: "Comprehensive business process outsourcing solutions including inbound services, outbound services, and back-office operations.",
      features: [
        "Customer Service & Support",
        "Collections & Payment Processing", 
        "Data Entry & Management",
        "Technical Support"
      ],
      color: "from-primary to-blue-400"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer Success Services",
      description: "Proactive customer success strategies to ensure your clients achieve their desired outcomes and drive recurring revenue.",
      features: [
        "Onboarding & Implementation",
        "Proactive Health Checks",
        "Churn Prevention",
        "Upselling Opportunities"
      ],
      color: "from-secondary to-purple-400"
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Airbnb Services",
      description: "Dedicated 24/7 support for Airbnb hosts and guests to maximize ratings, revenue, and ensure seamless experiences.",
      features: [
        "Listing Optimization",
        "Guest Communication",
        "Calendar Management",
        "Review Management"
      ],
      color: "from-accent to-green-400"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">
            Our Comprehensive Service Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our range of specialized services designed to optimize your operations, 
            enhance customer satisfaction, and drive significant growth for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={el => cardsRef.current[index] = el}
              className="group card-3d glass-morphism p-8 rounded-xl hover:neon-glow transition-all duration-500 cursor-pointer"
            >
              {/* Icon with gradient background */}
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button className="flex items-center text-primary hover:text-white transition-colors duration-300 font-semibold group-hover:translate-x-2 transform transition-transform duration-300">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold futuristic-heading mb-12">
            Why Choose Million Square Solutions?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "13+ Years of Global Expertise", desc: "Proven track record across industries" },
              { title: "Client-Centric Approach", desc: "Tailored solutions for your unique needs" },
              { title: "Significant Cost Savings", desc: "Optimize operations while reducing costs" },
              { title: "Scalability", desc: "Grow with flexible, scalable solutions" }
            ].map((item, index) => (
              <div key={index} className="glass-morphism p-6 rounded-lg holographic">
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

