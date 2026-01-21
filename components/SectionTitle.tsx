import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h3 className={`text-lg font-bold uppercase tracking-wider mb-2 ${light ? 'text-gold-500' : 'text-gold-600'}`}>
        {title}
      </h3>
      <h2 className={`text-3xl md:text-4xl font-serif font-bold ${light ? 'text-white' : 'text-navy-900'}`}>
        {subtitle}
      </h2>
      <div className={`mt-4 h-1 w-20 ${centered ? 'mx-auto' : ''} ${light ? 'bg-white/20' : 'bg-navy-900/10'}`}>
        <div className={`h-full w-10 ${light ? 'bg-gold-500' : 'bg-navy-900'}`}></div>
      </div>
    </div>
  );
};

export default SectionTitle;