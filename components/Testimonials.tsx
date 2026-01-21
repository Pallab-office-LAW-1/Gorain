import React from 'react';
import SectionTitle from './SectionTitle';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const references: Testimonial[] = [
  {
    text: "Pallab's dedication to understanding legal concepts and practical application is impressive. A promising future lawyer.",
    author: "Senior Advocate M. Sharma",
    role: "Mentor at Purulia Court"
  },
  {
    text: "His research skills and attention to detail in legal documentation are exceptional for a student.",
    author: "Prof. R. Das",
    role: "Faculty, Imamul Hai Khan Law College"
  },
  {
    text: "Pallab combines academic knowledge with practical insight. His commitment to justice is evident.",
    author: "A. Sengupta",
    role: "Court Clerk, Purulia District Court"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="References" 
          subtitle="Academic & Professional Feedback" 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {references.map((ref, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="mb-6">
                <Quote className="w-10 h-10 text-gold-500/30" />
              </div>
              <p className="text-slate-700 italic mb-6 flex-grow">"{ref.text}"</p>
              <div className="mt-auto border-t border-slate-100 pt-4">
                <p className="font-bold text-navy-900">{ref.author}</p>
                <p className="text-sm text-slate-500">{ref.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;