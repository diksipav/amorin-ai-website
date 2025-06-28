
import React from 'react';

const BusinessCard = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 rounded-xl p-12 text-white shadow-2xl">
      <div className="flex items-start justify-between">
        {/* Left side - Logo and company name */}
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="amorin.ai logo" className="w-16 h-16" />
          <span className="text-4xl font-light tracking-wide">amorin.ai</span>
        </div>
        
        {/* Right side - Name and title */}
        <div className="text-right">
          <h1 className="text-5xl font-light mb-2">Alberto Rocha</h1>
          <p className="text-xl text-purple-200">Co-founder</p>
        </div>
      </div>
      
      {/* Contact information */}
      <div className="mt-16 space-y-3 text-lg font-light">
        <p>hello@amorin.ai</p>
        <p>+34 603 307 398</p>
        <p>https://www.amorin.ai/</p>
        <p>https://www.linkedin.com/company/amorin-ai</p>
      </div>
    </div>
  );
};

export default BusinessCard;
