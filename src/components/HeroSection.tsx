
import React from 'react';
import ScrollRevealText from './ScrollRevealText';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-main-gradient">
      {/* Background geometric elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 opacity-60">
          <span className="text-sm tracking-[0.2em] uppercase text-neutral-warm">
            [SERVICE]
          </span>
        </div>
        
        <ScrollRevealText className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-center mb-12">
          <div className="mb-4">
            We help <span className="gradient-text font-normal">small</span> and
          </div>
          <div className="mb-4">
            <span className="gradient-text font-normal">medium businesses</span> save time,
          </div>
          <div className="mb-4">
            reduce costs, and improve efficiency
          </div>
          <div>
            with <span className="gradient-text font-normal italic">custom AI solutions</span>
          </div>
        </ScrollRevealText>

        <ScrollRevealText delay={300} className="text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed opacity-90">
          <div className="mb-8">
            Including smart chatbots, voice agents, internal assistants, 
            and AI-powered workflow automations that transform how your business operates.
          </div>
        </ScrollRevealText>

        <ScrollRevealText delay={600} className="text-center">
          <div className="inline-block text-sm tracking-[0.15em] uppercase text-neutral-warm">
            SCROLL 52% ↓
          </div>
        </ScrollRevealText>
      </div>
    </section>
  );
};

export default HeroSection;
