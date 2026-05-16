import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-background to-background/95 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="lg:col-span-2">
            <div className="text-2xl font-bold futuristic-heading mb-4">
              Million Square Solutions
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Dedicated Customer Success professionals for global SaaS businesses.
              Fewer accounts per CSM, deeper relationships, and AI-driven workflows
              that protect your revenue and grow your accounts.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-muted-foreground group">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <a href="mailto:info@millionsquaresolutions.com" className="hover:text-primary transition-colors">
                  info@millionsquaresolutions.com
                </a>
              </div>
              <div className="flex items-center text-muted-foreground group">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <a href="tel:+919811813137" className="hover:text-primary transition-colors">
                  +91-9811813137
                </a>
              </div>
              <div className="flex items-start text-muted-foreground">
                <MapPin className="w-4 h-4 mr-3 text-primary mt-1 flex-shrink-0" />
                <address className="not-italic text-sm">
                  G-3/16, First Floor, Malviya Nagar<br />
                  New Delhi, Delhi 110017, India
                </address>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
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
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <ArrowUpRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Focus Areas</h3>
            <ul className="space-y-3">
              {[
                'Churn Mitigation',
                'Managed CSM Teams',
                'Revenue Operations',
                'NPS and Health Scoring',
                'Customer Advocacy',
                'Retention Strategy',
              ].map((item) => (
                <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Connect:</span>
              
                href="https://www.linkedin.com/company/millionsquaresolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                {`© ${currentYear}`} <span className="text-white font-medium">Million Square Solutions</span>.
                Dedicated Customer Success for Global SaaS.
              </p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <button className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</button>
                <button className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
