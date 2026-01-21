import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
             <div className="flex items-center mb-4">
                <div className="bg-gold-600 text-white p-2 rounded-lg mr-3">
                   <span className="font-serif font-bold text-xl">PK</span>
                </div>
                <div className="flex flex-col">
                   <span className="font-bold leading-none">Adv. Pallab Kumar</span>
                   <span className="text-xs opacity-70">Gorain</span>
                </div>
             </div>
             <p className="text-slate-400 text-sm mb-6">
               Building a foundation for future legal practice with integrity, empathy, and dedication to the law.
             </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-gold-500">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#practice" className="hover:text-white transition-colors">Practice Areas</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">My Journey</a></li>
            </ul>
          </div>

          {/* Legal Areas */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-gold-500">Legal Focus</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Criminal Defense</li>
              <li>Family Disputes</li>
              <li>Constitutional Rights</li>
              <li>Property Matters</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-gold-500">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Purulia District Court</li>
              <li>West Bengal, India</li>
              <li>pallabgorain50@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2025 Pallab Kumar Gorain. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-navy-800 rounded-full text-slate-300 hover:text-white hover:bg-gold-600 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;