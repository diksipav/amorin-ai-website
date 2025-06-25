import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AutomationSection from "@/components/AutomationSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        {/* <ServicesSection /> */}
      </main>

      {/* <footer className="py-12 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-gray-600 text-sm tracking-wider">
            © 2025 amorin.ai. Transforming businesses with intelligent
            automation.
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Index;
