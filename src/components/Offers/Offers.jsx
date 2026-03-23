import React, { useState, useEffect } from 'react';
import { useLang } from '../../context/LangContext';

const Offers = () => {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % 3), 4000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard?.writeText('LIMO20').catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const offers = [
    {
      badge: t('offer1_badge'),
      badgeColor: 'bg-brand-yellow text-brand-dark',
      title: t('offer1_title'),
      sub: t('offer1_sub'),
      action: (
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={handleCopy}
            className="bg-white text-brand-red font-bebas text-lg px-6 py-2 rounded-xl hover:scale-105 transition-all tracking-widest"
          >
            {copied ? 'COPIED ✓' : 'LIMO20'}
          </button>
          <a href="#booking" className="bg-brand-yellow text-brand-dark font-semibold text-sm px-5 py-2 rounded-full hover:scale-105 transition-all">
            {t('claim_btn')}
          </a>
        </div>
      ),
    },
    {
      badge: t('offer2_badge'),
      badgeColor: 'bg-brand-orange text-white',
      title: t('offer2_title'),
      sub: t('offer2_sub'),
      action: (
        <a href="#plans" className="bg-brand-yellow text-brand-dark font-semibold text-sm px-5 py-2 rounded-full hover:scale-105 transition-all flex-shrink-0">
          {t('weekly_btn')}
        </a>
      ),
    },
    {
      badge: t('offer3_badge'),
      badgeColor: 'bg-brand-blue text-white',
      title: t('offer3_title'),
      sub: t('offer3_sub'),
      action: (
        <a href="#airport" className="bg-brand-yellow text-brand-dark font-semibold text-sm px-5 py-2 rounded-full hover:scale-105 transition-all flex-shrink-0">
          {t('airport_btn')}
        </a>
      ),
    },
  ];

  return (
    <section className="py-10 bg-brand-red">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-6">
          <span className="font-bebas text-white/60 tracking-widest text-sm">{t('offer_heading')}</span>
        </div>

        <div className="relative rounded-2xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.2)' }}>
          <div className="p-6 min-h-[120px]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className={`inline-block text-xs font-bebas tracking-widest px-3 py-1 rounded-full mb-2 ${offers[current].badgeColor}`}>
                  {offers[current].badge}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-1">{offers[current].title}</h3>
                <p className="text-white/70 text-sm">{offers[current].sub}</p>
              </div>
              {offers[current].action}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 pb-4">
            {[0, 1, 2].map(i => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-white/50 text-xs mt-3">⏰ {t('offer_urgency')}</p>
      </div>
    </section>
  );
};

export default Offers;
