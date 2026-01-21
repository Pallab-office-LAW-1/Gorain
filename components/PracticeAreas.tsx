import React from 'react';
import SectionTitle from './SectionTitle';
import { Gavel, Users, BookOpen, Home, PenTool, Search } from 'lucide-react';
import { PracticeArea } from '../types';

const practices: PracticeArea[] = [
  {
    title: 'Criminal Law',
    description: 'FIRs, bail applications, and defence strategies under the IPC.',
    icon: Gavel,
  },
  {
    title: 'Family Law',
    description: 'Divorce, maintenance, domestic violence, and guardianship matters.',
    icon: Users,
  },
  {
    title: 'Constitutional Law',
    description: 'Protecting fundamental rights and engaging in public interest litigation.',
    icon: BookOpen,
  },
  {
    title: 'Property Law',
    description: 'Resolving land disputes and handling property documentation.',
    icon: Home,
  },
  {
    title: 'Legal Drafting',
    description: 'Professional notices, agreements, and court pleadings.',
    icon: PenTool,
  },
  {
    title: 'Legal Research',
    description: 'Advanced research using SCC Online, Indian Kanoon & case databases.',
    icon: Search,
  },
];

const PracticeAreas: React.FC = () => {
  return (
    <section id="practice" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Practice Areas" 
          subtitle="Expert legal guidance across multiple domains" 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors duration-300">
                <practice.icon className="w-7 h-7 text-navy-900 group-hover:text-gold-500 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">{practice.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;