import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-start justify-center overflow-hidden pt-48">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-secondary/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 floating-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-accent/20 floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-secondary/20 floating-animation" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 futuristic-heading leading-tight"
          >
            Scale Your SaaS Retention with{' '}
            <span className="text-primary neon-text">Strategic CS Talent</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Million Square Solutions: Your Extended Customer Success Team. We bridge the gap between product features and customer outcomes.
            <span className="block mt-2 text-primary font-semibold">
              Leveraging 13+ years of expertise to boost NRR and drive sustainable growth.
            </span>
          </p>
          
          {/* Call to Action Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToServices}
              className="btn-futuristic flex items-center gap-2 text-lg px-8 py-4"
            >
              Our Success Framework
              <ArrowRight size={20} />
            </button>
            
            <button
              onClick={scrollToContact}
              className="glass-morphism hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Play size={20} />
              Book Strategy Audit
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-morphism p-6 rounded-lg neon-glow">
              <div className="text-3xl font-bold text-primary mb-2">NRR</div>
              <div className="text-muted-foreground">Driven Focus</div>
            </div>
            <div className="glass-morphism p-6 rounded-lg neon-glow">
              <div className="text-3xl font-bold text-accent mb-2">Churn</div>
              <div className="text-muted-foreground">Mitigation Experts</div>
            </div>
            <div className="glass-morphism p-6 rounded-lg neon-glow">
              <div className="text-3xl font-bold text-secondary mb-2">AI-Ready</div>
              <div className="text-muted-foreground">CS Operations</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

