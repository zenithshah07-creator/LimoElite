import React from 'react';
import { useLang } from '../../context/LangContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Plans = () => {
  const { t } = useLang();
  const headerRef = useScrollAnimation();
  const p1Ref = useScrollAnimation();
  const p2Ref = useScrollAnimation();
  const p3Ref = useScrollAnimation();

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14 fade-up" ref={headerRef}>
          <span className="font-bebas text-brand-orange tracking-widest text-sm">{t('plans_eyebrow')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-blue mt-1">{t('plans_title')}</h2>
          <p className="text-gray-500 mt-3">{t('plans_sub')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* DAILY */}
          <div className="rounded-2xl border-2 border-gray-100 p-7 fade-up flex flex-col" ref={p1Ref}>
            <div className="text-3xl mb-3">📅</div>
            <span className="font-bebas text-brand-orange tracking-widest text-sm">{t('plan1_label')}</span>
            <h3 className="font-display text-2xl font-bold text-brand-blue mt-1 mb-1">{t('plan1_title')}</h3>
            <p className="text-gray-400 text-sm mb-4">{t('plan1_sub')}</p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6 flex-1">
              {['p1f1','p1f2','p1f3','p1f4'].map(k => (
                <li key={k} className="flex gap-2"><span className="text-green-500">✓</span><span>{t(k)}</span></li>
              ))}
            </ul>
            <p className="text-3xl font-bold text-brand-blue mb-4" style={{ fontFamily: 'Oswald' }}>
              From $199<span className="text-sm font-normal text-gray-400">/day</span>
            </p>
            <a href="#booking" className="block text-center bg-brand-orange text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all">
              {t('book_daily')}
            </a>
          </div>

          {/* WEEKLY — featured */}
          <div
            className="rounded-2xl p-7 fade-up flex flex-col relative overflow-hidden"
            ref={p2Ref}
            style={{ background: '#1A3A6B', boxShadow: '0 20px 60px rgba(26,58,107,0.35)' }}
          >
            <div className="ribbon">{t('best_value')}</div>
            <div className="text-3xl mb-3">🗓️</div>
            <span className="font-bebas text-brand-yellow tracking-widest text-sm">{t('plan2_label')}</span>
            <h3 className="font-display text-2xl font-bold text-white mt-1 mb-1">{t('plan2_title')}</h3>
            <p className="text-white/60 text-sm mb-4">{t('plan2_sub')}</p>
            <ul className="space-y-2 text-sm text-white/80 mb-6 flex-1">
              {['p2f1','p2f2','p2f3','p2f4','p2f5'].map(k => (
                <li key={k} className="flex gap-2"><span className="text-brand-yellow">✓</span><span>{t(k)}</span></li>
              ))}
            </ul>
            <p className="text-3xl font-bold text-brand-yellow mb-4" style={{ fontFamily: 'Oswald' }}>
              From $799<span className="text-sm font-normal text-white/50">/week</span>
            </p>
            <a href="#booking" className="block text-center bg-brand-red text-white font-semibold py-3 rounded-xl hover:bg-red-600 transition-all">
              {t('book_weekly')}
            </a>
          </div>

          {/* MONTHLY */}
          <div className="rounded-2xl border-2 border-gray-100 p-7 fade-up flex flex-col" ref={p3Ref}>
            <div className="text-3xl mb-3">📆</div>
            <span className="font-bebas text-brand-blue tracking-widest text-sm">{t('plan3_label')}</span>
            <h3 className="font-display text-2xl font-bold text-brand-blue mt-1 mb-1">{t('plan3_title')}</h3>
            <p className="text-gray-400 text-sm mb-4">{t('plan3_sub')}</p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6 flex-1">
              {['p3f1','p3f2','p3f3','p3f4','p3f5'].map(k => (
                <li key={k} className="flex gap-2"><span className="text-green-500">✓</span><span>{t(k)}</span></li>
              ))}
            </ul>
            <p className="text-3xl font-bold text-brand-blue mb-4" style={{ fontFamily: 'Oswald' }}>
              Custom<span className="text-sm font-normal text-gray-400"> quote</span>
            </p>
            <a href="#contact" className="block text-center bg-brand-blue text-white font-semibold py-3 rounded-xl hover:bg-blue-900 transition-all">
              {t('contact_quote')}
            </a>
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">{t('plans_note')}</p>
      </div>
    </section>
  );
};

export default Plans;
