import React from 'react';
import SectionTitle from './SectionTitle';
import { MessageSquare, FileText, Scale } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <Scale className="absolute -right-20 top-20 w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Professional Offerings" 
          subtitle="Comprehensive Legal Assistance" 
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-10 h-10 text-gold-500 mr-4" />
              <h3 className="text-2xl font-serif font-bold">Consultation</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Clear, actionable legal advice to help you understand your position and options.
            </p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li className="flex items-center">• Personalized guidance</li>
              <li className="flex items-center">• Strategy formulation</li>
              <li className="flex items-center">• Risk assessment</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors">
            <div className="flex items-center mb-6">
              <FileText className="w-10 h-10 text-gold-500 mr-4" />
              <h3 className="text-2xl font-serif font-bold">Drafting</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Meticulous preparation of legal notices, agreements, and court petitions with attention to detail.
            </p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li className="flex items-center">• Legal Notices</li>
              <li className="flex items-center">• Agreements & Contracts</li>
              <li className="flex items-center">• Court Pleadings</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors">
            <div className="flex items-center mb-6">
              <Scale className="w-10 h-10 text-gold-500 mr-4" />
              <h3 className="text-2xl font-serif font-bold">Representation</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Practical advocacy for hearings and proceedings at the Purulia District Court.
            </p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li className="flex items-center">• Court Appearances</li>
              <li className="flex items-center">• Argument Presentation</li>
              <li className="flex items-center">• Case Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;