'use client';
const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFounder = () => {
    document.querySelector('#founder')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 sm:px-10 md:px-16 pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0E27] -z-20" />
<div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#0d1235] to-[#0A0E27] -z-10" />
<div className="blob blob-cyan w-96 h-96 top-1/4 left-1/4" />
<div className="blob blob-purple w-80 h-80 bottom-1/4 right-1/4" />
<div className="blob blob-cyan w-64 h-64 top-1/3 right-1/3" style={{animationDelay: '-2s'}} />
      <div className="relative z-10 w-full max-w-screen-xl mx-auto">
        <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-6">
          Customer Success Outsourcing Services
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6" style={{background: 'linear-gradient(135deg, #ffffff 0%, #00D4FF 50%, #6B46C1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
          Your Customers Deserve<br />
          <span style={{WebkitTextFillColor: '#00D4FF'}} className="neon-text">More Than Average CS</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-4 leading-relaxed">
          Dedicated Customer Success Managers for global SaaS businesses - powered by AI workflows, structured EBRs, and a model built around{' '}
          <span className="text-primary font-semibold">fewer accounts, deeper relationships.</span>
        </p>
        <p className="text-sm sm:text-base text-muted-foreground/70 max-w-3xl mx-auto mb-10">
          Trusted by SaaS companies across the <span className="text-primary font-semibold">US, UK, Canada, UAE, Australia and New Zealand</span> to reduce churn, improve NRR, and scale customer success operations without hiring in-house.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button onClick={scrollToContact} className="btn-futuristic flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold">
            Book a Free Strategy Call
          </button>
          <button onClick={scrollToFounder} className="px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-xl hover:border-primary/50 hover:text-primary transition-all duration-300">
            Why Choose Us
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: '30-35', label: 'Accounts Per CSM', sub: 'vs industry avg 50-80' },
            { value: '100%+', label: 'NRR Sustained', sub: 'across portfolios' },
            { value: '190%', label: 'Client Review Growth', sub: 'verified results' },
            { value: '3 mo', label: 'Churn Recovery', sub: 'avg turnaround time' },
          ].map((stat, i) => (
            <div key={i} className={`glass-morphism p-4 rounded-xl border border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 fade-in fade-in-delay-${i + 1}`}>
              <div className="text-2xl md:text-3xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-white uppercase tracking-wider font-semibold">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;