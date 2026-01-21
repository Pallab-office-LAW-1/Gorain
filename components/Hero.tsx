import React from 'react';
import { ArrowRight, FileText, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-slate-50 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-200/50 skew-x-12 transform origin-top-right hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-gold-600/10 text-gold-600 font-semibold rounded-full text-sm tracking-wide mb-4">
              Welcome — Namaste 🙏
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-900 leading-tight">
              Advocate <br/>
              <span className="text-gold-600">Pallab Kumar Gorain</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Driven by passion, purpose, and professionalism in India's justice system. Dedicated to upholding constitutional values and serving the people.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-navy-900 hover:bg-navy-800 transition-colors shadow-lg hover:shadow-xl"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm"
              >
                <FileText className="mr-2 h-5 w-5" />
                My Resume
              </a>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500 font-medium">
               <div className="flex items-center">
                 <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                 Purulia District Court
               </div>
               <div className="flex items-center">
                 <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                 West Bengal, India
               </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-gold-600 rounded-2xl transform translate-x-4 translate-y-4 hidden md:block"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto aspect-[3/4] bg-slate-200">
                <img 
                  src="https://github.com/Pallab-office-LAW-1/Pallab-11-office-LAW/raw/e54c69e72ffd7609eac752a2f958da13b989ac99/1759594964369-0199b008-314e-799d-af11-aecbd3ad5b76%20(1).png" 
                  alt="Portrait of Pallab Kumar Gorain" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 to-transparent p-6 text-white">
                  <p className="font-serif font-bold text-xl">Legal Practitioner</p>
                  <p className="text-sm opacity-80">Committed to Justice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;