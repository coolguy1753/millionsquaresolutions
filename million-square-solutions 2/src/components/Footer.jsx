import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/company/millionsquaresolutions/', '_blank');
  };

  return (
    <footer className="relative overflow-hidden">

      {/* Gradient top border */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #22d3ee 30%, #a855f7 50%, #22d3ee 70%, transparent 100%)' }}></div>

      <div style={{ background: 'rgba(5,12,24,0.95)', backdropFilter: 'blur(20px)' }}>

        {/* Subtle top glow */}
        <div className="absolute left-0 right-0 top-0 h-32 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 100% at 50% 0%, rgba(34,211,238,0.05), transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10">

          {/* 3 equal columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Col 1 — Company */}
            <div>
              <div className="text-xl font-bold futuristic-heading mb-4">
                Million Square Solutions
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Dedicated Customer Success professionals for global SaaS businesses — fewer accounts, deeper relationships, AI-driven workflows.
              </p>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@millionsquaresolutions.com" className="text-sm hover:text-primary transition-colors">
                  info@millionsquaresolutions.com
                </a>
              </div>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-white mb-5 uppercase tracking-[0.2em]">Navigation</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Meet the Founder', href: '#founder' },
                  { name: 'Our Services', href: '#services' },
                  { name: 'Case Studies', href: '#results' },
                  { name: 'Contact Us', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Focus Areas */}
            <div>
              <h3 className="text-xs font-semibold text-white mb-5 uppercase tracking-[0.2em]">Focus Areas</h3>
              <ul className="space-y-3">
                {[
                  'Churn Mitigation',
                  'Managed CSM Teams',
                  'Revenue Operations',
                  'NPS & Health Scoring',
                  'Customer Advocacy',
                  'Retention Strategy',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#22d3ee' }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>

            {/* Left — LinkedIn */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground uppercase tracking-[0.15em]">Connect</span>
              <button
                onClick={openLinkedIn}
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>

            {/* Center — Copyright */}
            <p className="text-xs text-muted-foreground text-center">
              © {currentYear} <span className="text-white font-medium">Million Square Solutions</span>. Dedicated Customer Success for Global SaaS.
            </p>

            {/* Right — Privacy & Terms */}
            <div className="flex items-center gap-4">
              <button className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</button>
              <button className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</button>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
