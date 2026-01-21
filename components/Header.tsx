import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-navy-900 text-white p-2 rounded-lg mr-3">
              <span className="font-serif font-bold text-xl">PK</span>
            </div>
            <div className={`flex flex-col ${scrolled ? 'text-navy-900' : 'text-navy-900 lg:text-white'}`}>
              <span className="font-bold leading-none">Adv. Pallab Kumar Gorain</span>
              <span className="text-xs opacity-80">Law Student & Legal Practitioner</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium hover:text-gold-600 transition-colors ${
                  scrolled ? 'text-slate-600' : 'text-slate-800 lg:text-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-gold-600 hover:bg-gold-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Consult Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-navy-900' : 'text-navy-900 lg:text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-gold-600 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;