import React from 'react';
import SectionTitle from './SectionTitle';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle title="About Me" subtitle="Committed to Justice & Excellence" />
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                I'm <strong>Pallab Kumar Gorain</strong>, a committed and enthusiastic law student pursuing a <span className="text-navy-900 font-semibold">B.A.LL.B.</span> at Imamul Hai Khan Law College, Bokaro. I am currently gaining deep practical experience at the <span className="text-navy-900 font-semibold">Purulia District Court, West Bengal</span>.
              </p>
              <p>
                My work is shaped by integrity, empathy, and a deep commitment to India's constitutional values. Every case, every client, every effort is rooted in purpose. I believe in the power of the law to bring about positive change and protect the vulnerable.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-slate-50 border-l-4 border-gold-600 rounded-r-lg relative">
              <Quote className="absolute top-4 left-4 text-slate-300 w-8 h-8 -z-10" />
              <blockquote className="italic text-navy-900 font-medium text-lg pl-6">
                "Justice is not a service—it's a duty. And I'm here to serve."
              </blockquote>
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px] bg-navy-900 rounded-2xl p-8 text-white flex flex-col justify-center">
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gold-600 rounded-full opacity-20 blur-xl"></div>
             <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
             
             <h3 className="text-2xl font-serif font-bold mb-6 z-10">Why Choose Me?</h3>
             <ul className="space-y-4 z-10">
               <li className="flex items-start">
                 <div className="bg-gold-600/20 p-2 rounded-full mr-4 mt-1">
                   <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Integrity First</h4>
                   <p className="text-slate-300 text-sm">Unwavering ethical standards in every legal proceeding.</p>
                 </div>
               </li>
               <li className="flex items-start">
                 <div className="bg-gold-600/20 p-2 rounded-full mr-4 mt-1">
                   <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Research Oriented</h4>
                   <p className="text-slate-300 text-sm">Advanced proficiency with SCC Online & Indian Kanoon.</p>
                 </div>
               </li>
               <li className="flex items-start">
                 <div className="bg-gold-600/20 p-2 rounded-full mr-4 mt-1">
                   <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Client Focused</h4>
                   <p className="text-slate-300 text-sm">Empathetic understanding of family and property disputes.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;