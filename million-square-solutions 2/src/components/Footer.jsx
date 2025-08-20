import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-background to-background/95 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold futuristic-heading mb-4">
              Million Square Solutions
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Your trusted partner for comprehensive BPO, Customer Success, and Airbnb services. 
              Leveraging 13+ years of global expertise to drive your business success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <a href="mailto:info@millionsquaresolutions.com" className="hover:text-primary transition-colors duration-300">
                  info@millionsquaresolutions.com
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <a href="tel:+91-XXXXXXXXXX" className="hover:text-primary transition-colors duration-300">
                  +91-XXXXXXXXXX
                </a>
              </div>
              <div className="flex items-start text-muted-foreground">
                <MapPin className="w-4 h-4 mr-3 text-primary mt-1 flex-shrink-0" />
                <address className="not-italic">
                  G-3/16, First Floor, Malviya Nagar<br />
                  New Delhi, Delhi 110017, India
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Industries', href: '#industries' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'BPO Services',
                'Customer Success',
                'Airbnb Services',
                'Inbound Support',
                'Outbound Services',
                'Back Office Solutions'
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Million Square Solutions. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 text-xs text-muted-foreground">
                <button className="hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </button>
                <button className="hover:text-primary transition-colors duration-300">
                  Terms of Service
                </button>
                <button className="hover:text-primary transition-colors duration-300">
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual enhancement */}
      <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-primary/10 floating-animation"></div>
      <div className="absolute bottom-10 right-10 w-6 h-6 rounded-full bg-accent/10 floating-animation" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
};

export default Footer;

