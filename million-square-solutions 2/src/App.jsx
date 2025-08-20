import ThreeBackground from './components/ThreeBackground';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import IndustriesSection from './components/IndustriesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThreeBackground />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
