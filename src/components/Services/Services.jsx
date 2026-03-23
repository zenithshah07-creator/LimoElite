import React from 'react';
import { useLang } from '../../context/LangContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const serviceData = [
  { icon: '✈️', bg: '#FFF3E0', titleKey: 'svc1_title', descKey: 'svc1_desc', href: '#airport' },
  { icon: '🏙️', bg: '#E8F4FD', titleKey: 'svc2_title', descKey: 'svc2_desc', href: '#booking' },
  { icon: '⏱️', bg: '#FFF3E0', titleKey: 'svc3_title', descKey: 'svc3_desc', href: '#booking' },
  { icon: '📅', bg: '#E8F5E9', titleKey: 'svc4_title', descKey: 'svc4_desc', href: '#plans' },
  { icon: '🗓️', bg: '#FFF8E1', titleKey: 'svc5_title', descKey: 'svc5_desc', href: '#plans' },
  { icon: '📆', bg: '#EDE7F6', titleKey: 'svc6_title', descKey: 'svc6_desc', href: '#contact' },
];

// 1. Hook moved inside the sub-component
const ServiceCard = ({ icon, bg, title, desc, href, learnMore }) => {
  const ref = useScrollAnimation(); // ✅ Hook is now called at the top level of this component

  return (
    <div
      ref={ref}
      className="service-card bg-white rounded-2xl p-7 shadow-sm cursor-default fade-up"
      style={{ borderTop: '3px solid transparent' }}
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4" style={{ background: bg }}>
        {icon}
      </div>
      <h3 className="font-display font-semibold text-brand-blue text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      <a href={href} className="inline-block mt-4 text-brand-orange text-sm font-semibold hover:underline">
        {learnMore}
      </a>
    </div>
  );
};

const Services = () => {
  const { t } = useLang();
  const headerRef = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 fade-up" ref={headerRef}>
          <span className="font-bebas text-brand-orange tracking-widest text-sm">{t('services_eyebrow')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-blue mt-1">{t('services_title')}</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">{t('services_sub')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 2. Map directly to the ServiceCard component */}
          {serviceData.map((svc) => (
            <ServiceCard
              key={svc.titleKey}
              icon={svc.icon}
              bg={svc.bg}
              title={t(svc.titleKey)}
              desc={t(svc.descKey)}
              href={svc.href}
              learnMore={t('learn_more')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;