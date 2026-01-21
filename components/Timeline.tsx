import React from 'react';
import SectionTitle from './SectionTitle';
import { TimelineEvent } from '../types';

const events: TimelineEvent[] = [
  {
    year: '2021 – Present',
    title: 'Enrolled in B.A.LL.B. Course',
    description: 'Started integrated law degree at Imamul Hai Khan Law College, Bokaro, laying the academic foundation for legal practice.',
  },
  {
    year: '2023 – Present',
    title: 'Beginning Court Practice',
    description: 'Gaining practical experience at Purulia District Court, West Bengal, under senior mentorship.',
  },
  {
    year: '2024',
    title: 'Legal Research & Documentation',
    description: 'Enhanced case research capabilities using SCC Online and Indian Kanoon, focusing on drafting complex legal documents.',
  },
  {
    year: 'Future',
    title: 'Preparing for Legal Career',
    description: 'Building a robust foundation for future full-time practice and contributions to the Indian justice system.',
  },
];

const Timeline: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Journey" 
          subtitle="Academic Growth & Court Practice" 
          centered 
        />
        
        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-slate-200"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-600 rounded-full border-4 border-white shadow-sm z-10"></div>
                
                {/* Content Side */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className={`bg-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="inline-block px-3 py-1 bg-navy-900 text-white text-xs font-bold rounded-full mb-2">
                      {event.year}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-navy-900 mb-2">{event.title}</h4>
                    <p className="text-slate-600 text-sm">{event.description}</p>
                  </div>
                </div>

                {/* Empty Side for balance */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;