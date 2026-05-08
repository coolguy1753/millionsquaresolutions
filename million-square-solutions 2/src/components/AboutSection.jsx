import { useEffect, useRef } from 'react';
import { Award, Target, Users, Zap, Linkedin, Rocket, BarChart3, ShieldCheck } from 'lucide-react';
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
          y: 0,
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
          y: 0,
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
            The Million Square Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Redefining Customer Success by blending 13+ years of operational excellence with modern SaaS strategy.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Founder Section */}
          <div ref={founderRef} className="glass-morphism p-8 rounded-xl neon-glow">
            <div className="flex items-center mb-6">
              <img 
                src="/balbirsingh.jpg" 
                alt="Balbir Singh - Founder" 
                className="w-32 h-32 rounded-full object-cover mr-6 border-2 border-primary/50" 
              />
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Balbir Singh</h3>
                <p className="text-primary font-semibold mb-2">Founder & CS Strategist</p>
                <a 
                  href="https://www.linkedin.com/in/balbirsingh1990/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-2"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 13 years of leadership in global operations and customer success, Balbir Singh founded Million Square Solutions to help SaaS companies move beyond traditional support.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              His journey from managing large-scale BPO operations for travel and banking giants to scaling Customer Success for global SaaS firms has given him a unique perspective on <strong>Retention-as-a-Growth-Engine.</strong>
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              At Million Square, he leads a team of high-caliber CSMs from India, focusing on reducing Time-to-Value (TTV) and maximizing Net Revenue Retention (NRR) for ambitious startups worldwide.
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
                To be the world’s most trusted partner for Customer-Led Growth, empowering SaaS companies to build unbreakable relationships with their customers.
              </p>
            </div>

            <div className="glass-morphism p-6 rounded-xl holographic">
              <div className="flex items-center mb-4">
                <Rocket className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deliver elite, strategic CS talent and data-driven playbooks that transform customer support into a predictable revenue driver.
              </p>
            </div>

            <div className="glass-morphism p-6 rounded-xl holographic">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-xl font-bold text-white">Our Values</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We value <strong>Outcome over Output</strong>, deep empathy in every interaction, and radical transparency in how we measure success for our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Pillars */}
        <div className="text-center">
          <h3 className="text-3xl font-bold futuristic-heading mb-12">The Pillars of Our Partnership</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Scalability",
                description: "Seamlessly expanding your CS capacity without the overhead.",
                icon: <Zap className="w-8 h-8 text-yellow-400" />
              },
              {
                title: "Empathetic CX",
                description: "Human-centric communication that builds long-term loyalty.",
                icon: <Users className="w-8 h-8 text-pink-400" />
              },
              {
                title: "Data Integrity",
                description: "Turning customer health scores into actionable expansion plans.",
                icon: <BarChart3 className="w-8 h-8 text-blue-400" />
              },
              {
                title: "CS Excellence",
                description: "Operational rigor rooted in 13+ years of global experience.",
                icon: <Award className="w-8 h-8 text-green-400" />
              }
            ].map((value, index) => (
              <div key={index} className="glass-morphism p-6 rounded-lg card-3d group flex flex-col items-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
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
