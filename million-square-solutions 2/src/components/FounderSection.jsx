const FounderSection = () => {
  return (
    <section id="founder" className="relative py-16 overflow-hidden">
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
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Million Square Solutions was built by a customer success practitioner — not a consultant. Every dedicated CSM we deploy is trained on real-world SaaS retention playbooks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10">

          <div>
            <div className="relative rounded-2xl overflow-hidden glass-morphism border border-white/10 shadow-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
              <img
                src="/founder.jpg"
                alt="Balbir Singh — Founder, Million Square Solutions — Customer Success Outsourcing"
                className="w-full object-cover object-top"
                style={{ maxHeight: '520px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'linear-gradient(to top, rgba(7,17,31,0.97) 0%, rgba(7,17,31,0.6) 60%, transparent 100%)' }}>
                <div className="text-xl font-bold text-white font-serif mb-1">Balbir Singh</div>
                <div className="text-xs font-mono tracking-widest text-primary uppercase">Founder · 10+ Years in B2B SaaS Customer Success</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
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
              When you work with us, you're not getting a generic outsourcing firm. You're getting a <strong className="text-white">dedicated customer success team built, trained, and led by someone who has lived the exact problems your customers face</strong> — and knows how to solve them.
            </p>
          </div>
        </div>

        {/* 4 credential cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { num: '10+', label: 'Years in B2B SaaS CS', color: 'text-primary' },
            { num: '100%+', label: 'NRR Sustained', color: 'text-accent' },
            { num: '150+', label: 'SaaS Accounts Led', color: 'text-secondary' },
            { num: '5+', label: 'Years Leading CS Teams', color: 'text-primary' },
          ].map((item, i) => (
            <div key={i} className="glass-morphism p-5 rounded-xl text-center neon-glow border border-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
              <div className={`text-2xl font-bold mb-1 ${item.color}`}>{item.num}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>

        {/* 4 value cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🎯',
              title: 'Proven playbooks, not guesswork',
              text: 'Every onboarding flow, QBR framework, and churn response process has been tested and refined on real SaaS portfolios — not built in a boardroom.'
            },
            {
              icon: '🤖',
              title: 'AI-native from day one',
              text: 'I led GenAI integration into CS operations before most companies started the conversation. Your dedicated CSMs come equipped with AI tools that cut overhead and sharpen focus.'
            },
            {
              icon: '🛡️',
              title: 'A leader who has saved accounts others wrote off',
              text: "I've personally turned cancellation decisions into renewals for SaaS clients across the US, UK, and beyond. That experience shapes how every CSM we deploy handles your most at-risk accounts."
            },
            {
              icon: '🏅',
              title: 'Oracle Certified AI Leadership',
              text: 'Oracle Certified Generative AI Professional — bringing world-class AI strategy and certified expertise directly into your customer success operations.'
            },
          ].map((card, i) => (
            <div key={i} className="glass-morphism p-7 rounded-2xl neon-glow border border-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-3xl mb-4">{card.icon}</div>
              <h4 className="text-white font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{card.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FounderSection;
