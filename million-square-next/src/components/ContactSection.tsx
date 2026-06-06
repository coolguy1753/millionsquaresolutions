'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/mgoqdkgb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">
            Get Started Today
          </div>
          <h2 className="text-4xl md:text-5xl font-bold futuristic-heading mb-6">
            Scale Your Customer Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to outsource your customer success operations? Let's discuss how our dedicated CSM teams can reduce churn and drive predictable NRR for your SaaS business — whether you're based in the US, UK, Canada, UAE, Australia, or New Zealand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="glass-morphism p-8 rounded-xl neon-glow border border-white/10 hover:border-primary/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-2">Request a Strategic Consultation</h3>
            <p className="text-muted-foreground text-sm mb-6">Talk to our customer success outsourcing experts — free, no obligation.</p>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Inquiry Received!</h4>
                <p className="text-muted-foreground">Our customer success team will reach out within 12-24 hours.</p>
              </div>
            ) : (
              <form name="contact" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Work Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="john@saas-company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="+1 / +44 / +91 — Your Number" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">Focus Area *</label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required
                      className="w-full px-4 py-3 bg-[#1a1a2e] border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-primary focus:outline-none transition-all appearance-none">
                      <option value="" disabled>Select an area</option>
                      <option value="Dedicated CSM Teams">Dedicated CSM Teams</option>
                      <option value="Churn Reduction">Churn Reduction</option>
                      <option value="NRR Optimization">NRR Optimization</option>
                      <option value="CS Strategy & Consulting">CS Strategy & Consulting</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">How can we help? *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your SaaS product, current CS challenges, team size, and what you're looking to achieve..." />
                </div>

                <button type="submit" className="btn-futuristic w-full flex items-center justify-center gap-2 py-4 font-bold text-lg">
                  <Send className="w-5 h-5" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          <div className="space-y-5">
            <div className="glass-morphism p-6 rounded-xl neon-glow border border-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4">
              <Mail className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Email Our CS Team</h3>
                <a href="mailto:info@millionsquaresolutions.com" className="text-primary hover:text-white transition-colors">
                  info@millionsquaresolutions.com
                </a>
                <p className="text-muted-foreground text-xs mt-1">For customer success outsourcing inquiries</p>
              </div>
            </div>

            <div className="glass-morphism p-6 rounded-xl neon-glow border border-white/10 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4">
              <Phone className="w-7 h-7 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Direct Line</h3>
                <a href="tel:+919811813137" className="text-accent hover:text-white transition-colors">
                  +91-9811813137
                </a>
                <p className="text-muted-foreground text-xs mt-1">India HQ — serving US, UK, Canada, UAE, Australia & NZ</p>
              </div>
            </div>

            <div className="glass-morphism p-6 rounded-xl neon-glow border border-white/10 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4">
              <MapPin className="w-7 h-7 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Office Headquarters</h3>
                <address className="text-muted-foreground not-italic leading-relaxed text-sm">
                  G-3/16, First Floor, Malviya Nagar<br />
                  New Delhi, Delhi 110017, India
                </address>
                <p className="text-muted-foreground text-xs mt-1">Dedicated CSM teams for global SaaS clients</p>
              </div>
            </div>

            <div className="glass-morphism p-6 rounded-xl neon-glow border border-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-white">Global Availability</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground text-sm">Strategic Support</span>
                  <span className="text-white font-medium text-sm">24/7 Global Coverage</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground text-sm">Office Hours</span>
                  <span className="text-white font-medium text-sm">9:00 AM - 9:00 PM</span>
                </div>
                <p className="text-xs text-primary italic mt-2">
                  *Our dedicated CSM teams align with your time zones — EST, PST, GMT, GST, AEST.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
