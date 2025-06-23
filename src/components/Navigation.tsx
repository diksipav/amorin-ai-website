
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'INDEX', href: '#' },
    { name: 'PROFILE', href: '#profile' },
    { name: 'WORKS', href: '#works' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
        {/* Logo */}
        <div className="text-white text-xl font-light tracking-wide">
          amorin.ai
        </div>

        {/* Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(true)}
          className="text-white hover:bg-white/10 transition-colors"
        >
          <Menu size={24} />
        </Button>
      </nav>

      {/* Full Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md animate-fade-in">
          {/* Close Button */}
          <div className="absolute top-6 right-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:bg-white/10 transition-colors"
            >
              <X size={24} />
            </Button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col items-center justify-center h-full space-y-12">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl md:text-6xl font-light text-white hover:text-bright-cyan transition-colors duration-300 tracking-wider"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-8 mt-16 text-white/80">
              <a href="#" className="hover:text-bright-cyan transition-colors">
                X ↗
              </a>
              <a href="#" className="hover:text-bright-cyan transition-colors">
                Instagram ↗
              </a>
              <a href="#" className="hover:text-bright-cyan transition-colors">
                LinkedIn ↗
              </a>
              <a href="#" className="hover:text-bright-cyan transition-colors">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
