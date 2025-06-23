
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
      <div className="p-8 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-md">
        <div className="text-sm text-gray-600 mb-4 tracking-wider">
          {number}
        </div>
        <h3 className="text-3xl md:text-4xl font-light mb-6 text-deep-purple group-hover:text-electric-purple transition-colors duration-300">
          {title}
        </h3>
        <p className="text-lg leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
      </div>
    </ScrollRevealText>
  );
};

export default ServiceCard;
