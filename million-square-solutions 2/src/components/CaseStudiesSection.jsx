import { TrendingUp, Star, RefreshCw } from 'lucide-react';

const CaseStudiesSection = () => {
  return (
    <section id="results" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">
            Proof of Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-4">
            Real Results.{' '}
            <span className="text-primary neon-text">Real Stories.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Client names kept confidential by agreement. These are real engagements managed by our team.
          </p>
        </div>

        {/* Case Study 1 */}
        <div className="glass-morphism rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 overflow-hidden mb-8">
          <div className="p-2" style={{ background: 'linear-gradient(135deg, rgba(26,86,160,0.5) 0%, rgba(7,17,31,0.8) 100%)' }}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 gap-4">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono tracking-widest uppercase mb-3">Case Study 01</div>
                <h3 className="text-2xl font-bold text-white mb-1">Regional Bank — Mortgage Division</h3>
                <p className="text-muted-foreground text-sm">Financial Services &nbsp;·&nbsp; United States &nbsp;·&nbsp; Engagement: 2024–Present</p>
              </div>
              <TrendingUp className="w-10 h-10 text-primary flex-shrink-0" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 border-r border-white/5">
              <div className="text-xs font-mono tracking-widest text-primary uppercase mb-4">The Challenge</div>
              <p className="text-muted-foreground leading-relaxed">A regional bank with an active mortgage division was struggling with poor online reviews and weak digital presence. Their Loan Officers were not leveraging available technology. The bank needed a structured adoption program — fast.</p>
            </div>
            <div className="p-8">
              <div className="text-xs font-mono tracking-widest text-primary uppercase mb-4">What We Did</div>
              <ul className="space-y-2">
                {['Designed and launched a targeted Google Review campaign','Conducted individual and leadership webinars for Loan Officers','Guided LOs through full product adoption and profile optimization','Built a sustainable review generation process for the team'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary mt-0.5">→</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 border-t border-white/5" style={{ background: 'rgba(7,17,31,0.4)' }}>
            {[{num:'108',label:'Google Reviews Before'},{num:'204',label:'Reviews — Year 1'},{num:'313',label:'Reviews — Year 2'},{num:'4.94★',label:'Avg Google Rating'},{num:'190%',label:'Total Review Growth'}].map((s,i) => (
              <div key={i} className="p-5 text-center border-r border-white/5 last:border-r-0 hover:bg-white/5 transition-colors">
                <div className="text-2xl font-bold text-primary mb-1">{s.num}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/5" style={{ background: 'rgba(7,17,31,0.3)' }}>
            {[{num:'806',label:'Platform Reviews (2024)'},{num:'1,392',label:'Platform Reviews (2025)'},{num:'+73%',label:'YoY Review Growth'},{num:'1,159',label:'5-Star Reviews in 2025'}].map((s,i) => (
              <div key={i} className="p-5 text-center border-r border-white/5 last:border-r-0 hover:bg-white/5 transition-colors">
                <div className="text-2xl font-bold text-accent mb-1">{s.num}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="glass-morphism rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 overflow-hidden">
          <div className="p-2" style={{ background: 'linear-gradient(135deg, rgba(46,117,182,0.4) 0%, rgba(7,17,31,0.8) 100%)' }}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 gap-4">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-mono tracking-widest uppercase mb-3">Case Study 02</div>
                <h3 className="text-2xl font-bold text-white mb-1">Mortgage Company — Retention Recovery</h3>
                <p className="text-muted-foreground text-sm">Financial Services &nbsp;·&nbsp; United States &nbsp;·&nbsp; Critical Account Recovery</p>
              </div>
              <RefreshCw className="w-10 h-10 text-accent flex-shrink-0" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 border-r border-white/5">
              <div className="text-xs font-mono tracking-widest text-accent uppercase mb-4">The Challenge</div>
              <p className="text-muted-foreground leading-relaxed">A mortgage company had reached a breaking point with their existing CS support. Persistent unresolved issues and lack of strategic engagement had driven the client to the verge of cancellation. The account was about to be lost entirely.</p>
            </div>
            <div className="p-8">
              <div className="text-xs font-mono tracking-widest text-accent uppercase mb-4">What We Did</div>
              <ul className="space-y-2">
                {['Took direct ownership with a senior CSM','Conducted a full audit of all open issues and complaints','Coordinated resolution across Support, Engineering, and Sales','Hosted dedicated demos to re-establish product confidence','Established transparent, regular communication cadence'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-accent mt-0.5">→</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="m-6 p-6 rounded-xl border border-primary/20" style={{ background: 'rgba(201,168,76,0.05)' }}>
            <div className="flex items-start gap-3 mb-3">
              <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-primary font-semibold italic">The Outcome</div>
            </div>
            <p className="text-white text-lg mb-3">Within <strong>3 months</strong>, the client reversed their cancellation decision and renewed their contract.</p>
            <p className="text-muted-foreground italic border-l-2 border-primary pl-4">
              "The client specifically requested that our team — and only our team — continue managing their account going forward. This is the standard of trust we build with every client we manage."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;
