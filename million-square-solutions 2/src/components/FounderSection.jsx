import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FounderSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.founder-photo', { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.founder-photo', start: 'top 95%' }
      });
      gsap.fromTo('.founder-content > *', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.founder-content', start: 'top 95%' }
      });
      gsap.fromTo('.founder-cred-card', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.founder-creds', start: 'top 95%' }
      });
      gsap.fromTo('.founder-value-card', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.founder-values', start: 'top 95%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="founder" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">
            The Person Behind This
          </div>
          <h2 className="text-3xl md:text-5xl font-bold futuristic-heading">
            Why Trust Us?{' '}
            <span className="text-primary neon-text">Start With Me.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">

          <div className="founder-photo">
            <div className="relative rounded-2xl overflow-hidden glass-morphism border border-white/10 shadow-2xl">
              <img
                src="/founder.jpg"
                alt="Balbir Singh — Founder"
                className="w-full object-cover object-top"
                style={{ maxHeight: '520px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'linear-gradient(to top, rgba(7,17,31,0.97) 0%, rgba(7,17,31,0.6) 60%, transparent 100%)' }}>
                <div className="text-xl font-bold text-white font-serif mb-1">Balbir Singh</div>
                <div className="text-xs font-mono tracking-widest text-primary uppercase">Founder · 10+ Years in Customer Success</div>
              </div>
            </div>
          </div>

          <div className="founder-content space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              I didn't build a theory.<br />
              <span className="text-primary">I built from experience.</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I've spent <strong className="text-white">over a decade</strong> inside Customer Success — not advising on it, but doing it. Managing accounts, running QBRs, saving at-risk customers, building teams, and integrating AI into how CS works day-to-day.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I have built and led CSM teams managing <strong className="text-white">150+ SaaS accounts</strong> — building churn prediction frameworks, cutting QBR prep time by 50% using GenAI, and sustaining <strong className="text-white">100%+ Net Revenue Retention</strong> consistently across complex mid-market portfolios.
            </p>

            <div className="border-l-2 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl">
              <p className="text-white italic font-serif text-lg leading-relaxed">
                "Million Square Solutions exists because I know exactly what great CS looks like — and I know most companies never get it. I built this to close that gap."
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              When you work with us, you're not getting a generic outsourcing firm. You're getting a team <strong className="text-white">built, trained, and led by someone who has lived the exact problems your customers face</strong> — and knows how to solve them.
            </p>

            <div className="founder-creds grid grid-cols-2 gap-4 pt-2">
              <div className="founder-cred-card glass-morphism p-5 rounded-xl text-center neon-glow">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Years in B2B SaaS CS</div>
              </div>
              <div className="founder-cred-card glass-morphism p-5 rounded-xl text-center neon-glow">
                <div className="text-2xl font-bold text-accent mb-1">100%+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">NRR Sustained</div>
              </div>
              <div className="founder-cred-card glass-morphism p-5 rounded-xl text-center neon-glow">
                <div className="text-2xl font-bold text-secondary mb-1">150+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">SaaS Accounts Led</div>
              </div>
              <div className="founder-cred-card glass-morphism p-5 rounded-xl text-center neon-glow">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Leading CS Teams</div>
              </div>
            </div>
          </div>
        </div>

        <div className="founder-values grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="founder-value-card glass-morphism p-7 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-white font-semibold text-lg mb-3 group-hover:text-primary transition-colors">Proven playbooks, not guesswork</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">Every onboarding flow, QBR framework, and churn response process has been tested and refined on real SaaS portfolios — not built in a boardroom.</p>
          </div>
          <div className="founder-value-card glass-morphism p-7 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group">
            <div className="text-3xl mb-4">🤖</div>
            <h4 className="text-white font-semibold text-lg mb-3 group-hover:text-primary transition-colors">AI-native from day one</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">I led GenAI integration into CS operations before most companies started the conversation. Your CSMs come equipped with tools that cut overhead and sharpen focus.</p>
          </div>
          <div className="founder-value-card glass-morphism p-7 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group">
            <div className="text-3xl mb-4">🛡️</div>
            <h4 className="text-white font-semibold text-lg mb-3 group-hover:text-primary transition-colors">A leader who has saved accounts others wrote off</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">I've personally turned cancellation decisions into renewals. That experience shapes how every CSM we deploy handles your most at-risk accounts.</p>
          </div>
          <div className="founder-value-card glass-morphism p-7 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group">
            <div className="text-3xl mb-4">🏅</div>
            <h4 className="text-white font-semibold text-lg mb-3 group-hover:text-primary transition-colors">Oracle Certified AI Leadership</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">Oracle Certified Generative AI Professional — bringing world-class AI strategy and certified expertise directly into your CS operations.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FounderSection;
