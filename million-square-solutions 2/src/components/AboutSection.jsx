import { useEffect, useRef } from 'react';
import { Award, Target, Users, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const founderRef = useRef(null);
  const visionRef = useRef(null);

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

      // Founder section animation
      gsap.fromTo(founderRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: founderRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Vision section animation
      gsap.fromTo(visionRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">
            About Million Square Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering excellence in business process outsourcing with over a decade of industry expertise
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Founder Section */}
          <div ref={founderRef} className="glass-morphism p-8 rounded-xl neon-glow">
            <div className="flex items-center mb-6">
              <img 
  src="/balbirsingh.jpg" 
  alt="Balbir Singh - Founder & CEO" 
  className="w-32 h-32 rounded-full object-cover mr-6" 
/>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Meet the Founder</h3>
                <p className="text-primary font-semibold">Balbir Singh - Founder & CEO</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Balbir Singh, the visionary Founder of Million Square Solutions, brings over 13 years of extensive 
              experience in the business process outsourcing (BPO) and customer success industries.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              His career has been marked by pivotal roles in leading BPO operations for prominent banking and 
              travel companies, where he honed his expertise in managing large-scale customer service, collections, 
              and back-office functions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Furthermore, Balbir's deep understanding of client satisfaction extends to his significant tenure as 
              a Customer Success Manager in SaaS companies, where he successfully built and scaled customer success 
              initiatives, ensuring client retention and product adoption.
            </p>
          </div>

          {/* Vision & Mission */}
          <div ref={visionRef} className="space-y-6">
            <div className="glass-morphism p-6 rounded-xl holographic">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in providing innovative, technology-driven business process solutions 
                that empower organizations to achieve operational excellence and sustainable growth.
              </p>
            </div>

            <div className="glass-morphism p-6 rounded-xl holographic">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional BPO and customer success services through cutting-edge technology, 
                skilled professionals, and client-centric approaches that drive measurable business outcomes.
              </p>
            </div>

            <div className="glass-morphism p-6 rounded-xl holographic">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-xl font-bold text-white">Our Approach</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We combine operational excellence with client-centric strategy, leveraging advanced technology 
                and proven methodologies to ensure unparalleled service delivery and client satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="text-center">
          <h3 className="text-3xl font-bold futuristic-heading mb-12">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Excellence",
                description: "Striving for perfection in every service we deliver",
                icon: "🏆"
              },
              {
                title: "Innovation",
                description: "Embracing cutting-edge technology and creative solutions",
                icon: "💡"
              },
              {
                title: "Integrity",
                description: "Building trust through transparency and ethical practices",
                icon: "🤝"
              },
              {
                title: "Partnership",
                description: "Collaborating closely with clients for mutual success",
                icon: "🚀"
              }
            ].map((value, index) => (
              <div key={index} className="glass-morphism p-6 rounded-lg card-3d group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

