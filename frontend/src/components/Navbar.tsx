import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'works'];
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 z-50">
      <div className="bg-[#1a1a1a] border border-[#1c1c21] rounded-xl md:rounded-2xl px-3 md:px-6 py-2 md:py-3 flex items-center justify-between">
        <h1 className="font-['Zen_Dots'] text-white text-lg md:text-2xl uppercase">
          C<span className="capitalize">onstruct</span>
          <span className="capitalize text-[#1b4bce]">Dev</span>
        </h1>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-1 items-center absolute left-1/2 -translate-x-1/2">
          <a 
            href="#hero" 
            className={`px-4 py-2 rounded-xl font-['Roboto_Mono'] font-medium text-sm uppercase transition-colors ${
              activeSection === 'hero' ? 'text-[#1d4fd7]' : 'text-[#81807e] hover:text-[#1d4fd7]'
            }`}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={`px-4 py-2 rounded-xl font-['Roboto_Mono'] font-medium text-sm uppercase transition-colors ${
              activeSection === 'services' ? 'text-[#1d4fd7]' : 'text-[#81807e] hover:text-[#1d4fd7]'
            }`}
          >
            Services
          </a>
          <a 
            href="#works" 
            className={`px-4 py-2 rounded-xl font-['Roboto_Mono'] font-medium text-sm uppercase transition-colors ${
              activeSection === 'works' ? 'text-[#1d4fd7]' : 'text-[#81807e] hover:text-[#1d4fd7]'
            }`}
          >
            Projects
          </a>
        </div>

        <button className="hidden lg:block bg-[#1b4bce] px-4 py-2 rounded-xl text-[#fefcfb] font-['Roboto_Mono'] font-medium text-sm uppercase hover:bg-[#1640b8] transition-colors">
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-[#1a1a1a] border border-[#1c1c21] rounded-xl p-4 flex flex-col gap-2">
          <a 
            href="#hero" 
            className={`px-5 py-3 rounded-xl font-['Roboto_Mono'] font-medium text-sm uppercase text-left transition-colors ${
              activeSection === 'hero' ? 'text-[#1d4fd7]' : 'text-[#81807e]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={`px-5 py-3 rounded-xl font-['Roboto_Mono'] font-medium text-sm uppercase text-left transition-colors ${
              activeSection === 'services' ? 'text-[#1d4fd7]' : 'text-[#81807e]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#works" 
            className={`px-5 py-3 rounded-xl font-['Roboto_Mono'] font-medium text-sm uppercase text-left transition-colors ${
              activeSection === 'works' ? 'text-[#1d4fd7]' : 'text-[#81807e]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <button className="bg-[#1b4bce] px-5 py-3 rounded-xl text-[#fefcfb] font-['Roboto_Mono'] font-medium text-sm uppercase">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}