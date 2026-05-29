'use client';
import Link from "next/link";
import { Linkedin } from "lucide-react";

const FounderSection = () => {
  return (
    <section id="founder" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl glass-morphism border border-primary/30 neon-glow overflow-hidden">
                <img src="/founder.jpg" alt="Balbir Singh Founder Million Square Solutions" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
            </div>
          </div>
          <div>
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-6">Meet the Founder</div>
            <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-2">Balbir Singh</h2>
            <p className="text-primary font-semibold text-lg mb-6">Founder and Customer Success Leader</p>
            <p className="text-muted-foreground leading-relaxed mb-4">10+ years inside B2B SaaS Customer Success — not advising on it, but doing it. Built and led CSM teams managing 150+ accounts, sustaining 100%+ NRR consistently.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">Oracle Certified Generative AI Professional. Million Square Solutions exists because great CS deserves more than an average vendor.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-futuristic px-6 py-3 inline-block">Our Full Story</Link>
              <a href="https://www.linkedin.com/in/balbirsingh1990" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl text-white hover:border-primary/50 hover:text-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;