
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AutomationSection from '@/components/AutomationSection';
import ServicesSection from '@/components/ServicesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-main-gradient relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 border border-white/20 rounded-full"></div>
      </div>
      
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AutomationSection />
        <ServicesSection />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-light mb-4 text-white">amorin.ai</div>
          <div className="text-neutral-warm/60 text-sm tracking-wider">
            © 2024 Amorin AI. Transforming businesses with intelligent automation.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
