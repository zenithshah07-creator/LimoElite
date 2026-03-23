import React, { useEffect, useRef } from 'react';
import { useLang } from '../../context/LangContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const awards = [
  { icon: '🏆', titleKey: 'aw1_title', subKey: 'aw1_sub' },
  { icon: '⭐', titleKey: 'aw2_title', subKey: 'aw2_sub' },
  { icon: '🛡️', titleKey: 'aw3_title', subKey: 'aw3_sub' },
  { icon: '✅', titleKey: 'aw4_title', subKey: 'aw4_sub' },
  { icon: '🌍', titleKey: 'aw5_title', subKey: 'aw5_sub' },
  { icon: '🎖️', titleKey: 'aw6_title', subKey: 'aw6_sub' },
];

const TrustScoreBar = ({ t }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { el.style.width = '98%'; }, 300);
        observer.unobserve(el);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-center mt-6">
      <p className="text-white/50 text-xs mb-2">{t('trust_score_label')}</p>
      <div className="flex items-center gap-4 justify-center">
        <div className="flex-1 max-w-xs bg-white/10 rounded-full h-3">
          <div
            ref={barRef}
            className="bg-brand-yellow h-3 rounded-full"
            style={{ width: '0%', transition: 'width 1.5s ease' }}
          />
        </div>
        <span className="text-brand-yellow font-bold text-xl" style={{ fontFamily: 'Oswald' }}>98/100</span>
      </div>
    </div>
  );
};

const About = () => {
  const { t } = useLang();
  const imgRef = useScrollAnimation();
  const textRef = useScrollAnimation();
  const awardsRef = useScrollAnimation();
  const rankRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="fade-up rounded-2xl overflow-hidden" ref={imgRef} style={{ height: '360px' }}>
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&q=80"
              alt="LimoElite chauffeur"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="fade-up" ref={textRef}>
            <span className="font-bebas text-brand-orange tracking-widest text-sm">{t('about_eyebrow')}</span>
            <h2 className="font-display text-4xl font-bold text-brand-blue mt-2 mb-4">{t('about_title')}</h2>
            <p className="text-gray-500 leading-relaxed mb-6">{t('about_desc')}</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '🎯', key: 'val1' },
                { icon: '💎', key: 'val2' },
                { icon: '🤝', key: 'val3' },
              ].map(({ icon, key }) => (
                <div key={key} className="text-center p-4 rounded-xl bg-gray-50">
                  <div className="text-2xl mb-2">{icon}</div>
                  <p className="font-semibold text-brand-blue text-sm">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="text-center mb-10 fade-up" ref={awardsRef}>
          <span className="font-bebas text-brand-orange tracking-widest text-sm">{t('awards_eyebrow')}</span>
          <h2 className="font-display text-4xl font-bold text-brand-blue mt-1">{t('awards_title')}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-16">
          {awards.map((award) => {
            const ref = useScrollAnimation();
            return (
              <div
                key={award.titleKey}
                ref={ref}
                className="rounded-2xl p-5 text-white fade-up"
                style={{ background: 'linear-gradient(135deg,#1A3A6B,#0A1628)' }}
              >
                <div className="text-3xl mb-3">{award.icon}</div>
                <h4 className="font-display font-bold text-base mb-1">{t(award.titleKey)}</h4>
                <p className="text-white/50 text-xs">{t(award.subKey)}</p>
              </div>
            );
          })}
        </div>

        {/* Ranking & Trust */}
        <div className="rounded-2xl p-8 text-white fade-up" ref={rankRef} style={{ background: '#0A1628' }}>
          <h3 className="font-display text-3xl font-bold mb-6 text-center">{t('ranking_title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {['rank1','rank2','rank3','rank4'].map((key, i) => (
              <div key={key} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <span className="text-2xl">{['🥇','🔐','📋','💯'][i]}</span>
                <span className="text-white/80 text-sm">{t(key)}</span>
              </div>
            ))}
          </div>
          <TrustScoreBar t={t} />
        </div>

      </div>
    </section>
  );
};

export default About;
