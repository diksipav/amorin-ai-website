
import React from 'react';
import ScrollRevealText from './ScrollRevealText';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, delay = 0 }) => {
  return (
    <ScrollRevealText delay={delay} className="group">
      <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105">
        <div className="text-sm text-neutral-warm mb-4 tracking-wider">
          {number}
        </div>
        <h3 className="text-3xl md:text-4xl font-light mb-6 group-hover:text-bright-cyan transition-colors duration-300">
          {title}
        </h3>
        <p className="text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </ScrollRevealText>
  );
};

export default ServiceCard;
