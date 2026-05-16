import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Target, Rocket, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        }
      });

      gsap.from(".about-image", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content Side */}
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-8">
              Where Human Expertise <br />
              <span className="text-primary text-3xl md:text-4xl">Meets Generative AI</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded on the principle that Customer Success is the primary engine for sustainable SaaS growth.
              We bridge the gap between traditional relationship management and modern, AI-driven workflows.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Oracle Certified AI Leadership</h4>
                  <p className="text-muted-foreground">Led by Oracle Certified Generative AI Professionals, we bring world-class AI strategy to your CS operations.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Proven Retention Playbooks</h4>
                  <p className="text-muted-foreground">Expertise built on managing complex mid-market portfolios with a consistent 100%+ Net Revenue Retention (NRR) track record.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Side */}
          <div className="about-image relative">
            <div className="relative z-10 glass-morphism p-8 rounded-3xl border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Years of Expertise</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all">
                  <div className="text-4xl font-bold text-accent mb-2">100%+</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">NRR Sustained</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-all">
                  <Zap className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">AI-Driven Ops</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all">
                  <Rocket className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Scalable Growth</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <blockquote className="italic text-muted-foreground text-sm leading-relaxed">
                  "Customer Success isn't just about support; it's about revenue protection and sustainable growth.
                  We build systems that stop churn before it starts."
                </blockquote>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
