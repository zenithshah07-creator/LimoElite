import React from 'react';
import { useLang } from '../../context/LangContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AirportCard = ({ t }) => (
  <div className="rounded-2xl p-7 text-white float-anim" style={{ background: 'linear-gradient(135deg,#1A3A6B,#0A1628)' }}>
    <div className="flex items-center gap-4 mb-6">
      <div className="text-4xl">✈️</div>
      <div>
        <p className="text-white/60 text-xs font-semibold tracking-wider">FLIGHT TRACKING</p>
        <p className="text-white font-semibold">AA 1234 — On Time</p>
      </div>
      <span className="ml-auto flex items-center gap-1.5 bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
        <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot inline-block" />
        Live
      </span>
    </div>

    <div className="flex items-center gap-3 mb-6">
      <div className="text-center"><div className="text-2xl">🏠</div><div className="text-xs text-white/60 mt-1">Pickup</div></div>
      <div className="flex-1 relative border-t-2 border-dashed border-white/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange rounded-full w-3 h-3" />
      </div>
      <div className="text-center"><div className="text-2xl">✈️</div><div className="text-xs text-white/60 mt-1">Airport</div></div>
    </div>

    <div className="bg-white/10 rounded-xl p-3 text-center mb-5">
      <p className="text-white/70 text-sm">{t('tracking_msg')}</p>
    </div>

    <div className="flex justify-center gap-4 flex-wrap">
      <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">Licensed ✓</span>
      <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">Insured ✓</span>
      <span className="bg-yellow-500/20 text-yellow-300 text-xs px-3 py-1 rounded-full">Vetted ✓</span>
    </div>
  </div>
);

const Airport = () => {
  const { t } = useLang();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  const features = ['apt1','apt2','apt3','apt4','apt5','apt6'];

  return (
    <section id="airport" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-up" ref={leftRef}>
          <AirportCard t={t} />
        </div>
        <div className="fade-up" ref={rightRef}>
          <span className="font-bebas text-brand-orange tracking-widest text-sm">{t('airport_eyebrow')}</span>
          <h2 className="font-display text-4xl font-bold text-brand-blue mt-2 mb-5">{t('airport_title')}</h2>
          <ul className="space-y-3 mb-7">
            {features.map(key => (
              <li key={key} className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✅</span>
                <span className="text-gray-600 text-sm">{t(key)}</span>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            className="inline-block bg-brand-red text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 transition-all hover:scale-105"
          >
            {t('apt_cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Airport;
