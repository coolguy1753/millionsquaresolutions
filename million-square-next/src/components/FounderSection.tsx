'use client';
import Link from "next/link";

const FounderSection = () => {
  return (
    <section id="founder" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">Why Choose Us</div>
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">Why Million Square Solutions?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We did not build a theory. We built from experience — over a decade inside B2B SaaS Customer Success, doing the work, not advising on it.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 fade-in">
            <div className="text-4xl font-black text-primary mb-4">30-35</div>
            <h3 className="text-xl font-bold text-white mb-3">Accounts Per CSM</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Industry average is 50-80. We cap at 30-35 — giving your customers more time, faster responses, and stronger relationships.</p>
          </div>
          <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 fade-in fade-in-delay-2">
            <div className="text-4xl font-black text-accent mb-4">AI</div>
            <h3 className="text-xl font-bold text-white mb-3">Native Operations</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">AI-certified expertise built into every engagement. QBR prep time cut by 50%. Churn prediction before it happens.</p>
          </div>
          <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1 fade-in fade-in-delay-3">
            <div className="text-4xl font-black text-secondary mb-4">10+</div>
            <h3 className="text-xl font-bold text-white mb-3">Years Doing It</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Not consulting. Not advising. Managing accounts, running QBRs, saving at-risk customers — real SaaS CS experience across 150+ accounts.</p>
          </div>
        </div>
        <div className="glass-morphism p-10 rounded-2xl border border-primary/20 mb-12">
          <p className="text-xl text-white font-semibold text-center italic mb-4">"Million Square Solutions exists because great Customer Success deserves more than an average vendor. We built this to close that gap."</p>
          <p className="text-primary text-center text-sm font-mono tracking-widest uppercase">— Founder, Million Square Solutions</p>
        </div>
        <div className="text-center">
          <Link href="/about" className="btn-futuristic px-8 py-4 text-lg font-bold inline-block">Our Full Story</Link>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;