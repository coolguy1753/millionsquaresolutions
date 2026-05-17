import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">

      {/* Gradient top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, #a855f7, #22d3ee, transparent)' }}></div>

      {/* Glass background */}
      <div className="relative" style={{ background: 'rgba(7,17,31,0.85)', backdropFilter: 'blur(20px)' }}>

        {/* Subtle glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(34,211,238,0.04), transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Company */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold futuristic-heading mb-4">
                Million Square Solutions
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md text-sm">
                Dedicated Customer Success professionals for global SaaS businesses.
                Fewer accounts per CSM, deeper relationships, and AI-driven workflows
                that protect your revenue and grow your accounts.
              </p>
              <div className="flex items-center text-muted-foreground group">
                <Mail className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                <a href="mailto:info@millionsquaresolutions.com" className="hover:text-primary transition-colors text-sm">
                  info@millionsquaresolutions.com
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">Navigation</h3>
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
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center group text-sm"
                    >
                      <ArrowUpRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus Areas */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">Focus Areas</h3>
              <ul className="space-y-3">
                {[
                  'Churn Mitigation',
                  'Managed CSM Teams',
                  'Revenue Operations',
                  'NPS & Health Scoring',
                  'Customer Advocacy',
                  'Retention Strategy',
                ].map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#22d3ee' }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">

              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Connect:</span>
                
                  href="https://www.linkedin.com/company/millionsquaresolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <div className="text-center md:text-right">
                <p className="text-muted-foreground text-sm">
                  {`© ${currentYear}`} <span className="text-white font-medium">Million Square Solutions</span>. Dedicated Customer Success for Global SaaS.
                </p>
                <div className="flex gap-4 mt-2 justify-center md:justify-end">
                  <button className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</button>
                  <button className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
