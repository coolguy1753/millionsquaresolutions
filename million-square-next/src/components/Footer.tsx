'use client';
import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #00D4FF 25%, #6B46C1 50%, #00D4FF 75%, transparent 100%)" }} />
      <div style={{ background: "rgba(5,12,24,0.97)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="text-xl font-bold futuristic-heading mb-3">Million Square Solutions</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-xs">Dedicated Customer Success professionals for global SaaS businesses — fewer accounts, deeper relationships, AI-driven workflows.</p>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@millionsquaresolutions.com" className="text-sm hover:text-primary transition-colors">info@millionsquaresolutions.com</a>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xs font-semibold text-white mb-5 uppercase tracking-[0.2em]">Company</h3>
              <div className="space-y-3">
                <a href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
                <a href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
                <a href="/case-studies" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</a>
                <a href="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a>
                <a href="/#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold text-white mb-5 uppercase tracking-[0.2em]">Services</h3>
              <div className="space-y-3">
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Managed CSM Teams</a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Churn Prevention</a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">NRR Optimization</a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CRM Architecture</a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CS Operations</a>
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold text-white mb-5 uppercase tracking-[0.2em]">Latest Posts</h3>
              <div className="space-y-3">
                <a href="/blog/what-is-customer-success-outsourcing" className="block text-sm text-muted-foreground hover:text-primary transition-colors">What is CS Outsourcing?</a>
                <a href="/blog/customer-success-as-a-service" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Success as a Service</a>
                <a href="/blog/how-to-reduce-saas-churn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Reduce SaaS Churn in 90 Days</a>
                <a href="/blog/csm-account-ratio" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CSM Account Ratio Guide</a>
                <a href="/blog/nrr-vs-grr-guide" className="block text-sm text-muted-foreground hover:text-primary transition-colors">NRR vs GRR Guide</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/millionsquaresolutions/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <Linkedin className="w-4 h-4" />
                </div>
                LinkedIn
              </a>
              <a href="https://g.page/r/CYPSJrcrpu69EAI/review" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                Google
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              © {currentYear} <span className="text-white font-medium">Million Square Solutions</span>. Dedicated Customer Success for Global SaaS.
            </p>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;