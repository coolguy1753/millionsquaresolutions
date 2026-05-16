import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .fromTo(statsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.2");
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFounder = () => {
    const el = document.querySelector('#founder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-start justify-center overflow-hidden pt-40">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-secondary/20"></div>
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 floating-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-accent/20 floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-secondary/20 floating-animation" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase">
            Customer Success Services
          </div>

          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 futuristic-heading leading-tight">
            Your Customers Deserve{' '}
            <span className="text-primary neon-text">More Than Average CS</span>
          </h1>

          <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Dedicated Customer Success professionals for global SaaS businesses — powered by AI workflows, structured EBRs, and a model built around
            <span className="text-primary font-semibold"> fewer accounts, deeper relationships.</span>
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button onClick={scrollToContact} className="btn-futuristic flex items-center gap-2 text-lg px-8 py-4">
              <Calendar size={20} />
              Book a Free Strategy Call
            </button>
            <button onClick={scrollToFounder} className="glass-morphism hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
              Meet the Founder
              <ArrowRight size={20} />
            </button>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-morphism p-5 rounded-xl neon-glow text-center">
              <div className="text-2xl font-bold text-primary mb-1">30-35</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Accounts per CSM</div>
            </div>
            <div className="glass-morphism p-5 rounded-xl neon-glow text-center">
              <div className="text-2xl font-bold text-accent mb-1">100%+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">NRR Sustained</div>
            </div>
            <div className="glass-morphism p-5 rounded-xl neon-glow text-center">
              <div className="text-2xl font-bold text-secondary mb-1">190%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Client Review Growth</div>
            </div>
            <div className="glass-morphism p-5 rounded-xl neon-glow text-center">
              <div className="text-2xl font-bold text-primary mb-1">3 mo</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Churn Recovery</div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
