
import React from 'react';
import ScrollRevealText from './ScrollRevealText';
import { Button } from '@/components/ui/button';

const AutomationSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollRevealText className="text-6xl md:text-8xl lg:text-9xl font-light leading-tight mb-8">
          <div className="mb-4">
            The new <span className="gradient-text font-normal">standard</span> for
          </div>
          <div className="gradient-text font-normal italic">
            intelligent automation
          </div>
        </ScrollRevealText>

        <ScrollRevealText delay={300} className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12 opacity-90">
          Custom RAG systems. Multi-step AI agents. Intelligent workflows.
          We build cutting-edge AI solutions that transform how your
          business operates.
        </ScrollRevealText>

        <ScrollRevealText delay={600} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-electric-purple hover:bg-electric-purple/80 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Book a Free Call
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
          >
            View Our Work
          </Button>
        </ScrollRevealText>
      </div>
    </section>
  );
};

export default AutomationSection;
