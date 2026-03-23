import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '../../context/LangContext';

const CountStat = ({ target, suffix, label }) => {
  const ref = useRef(null);
  const [value, setValue] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let n = 0;
        const step = target / 60;
        const iv = setInterval(() => {
          n = Math.min(n + step, target);
          setValue(
            target === 49
              ? (n / 10).toFixed(1) + suffix
              : Math.floor(n) + suffix
          );
          if (n >= target) clearInterval(iv);
        }, 25);
        observer.unobserve(el);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <div className="text-center" ref={ref}>
      <div className="text-4xl font-bold text-brand-yellow" style={{ fontFamily: 'Oswald' }}>{value}</div>
      <div className="text-white/60 text-sm mt-1">{label}</div>
    </div>
  );
};

const TrustBar = () => {
  const { t } = useLang();

  return (
    <section className="py-14 bg-brand-blue">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-10">
          <CountStat target={49} suffix="/5" label={t('trust1')} />
          <CountStat target={500} suffix="+" label={t('trust2')} />
          <CountStat target={50} suffix="+" label={t('trust3')} />
          <CountStat target={10} suffix="+" label={t('trust4')} />
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-xs font-semibold tracking-widest mb-4">{t('featured_in')}</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['Forbes', 'Business Insider', 'TripAdvisor'].map(name => (
              <span key={name} className="text-white/30 font-bold text-lg tracking-wider">{name}</span>
            ))}
            <span className="flex items-center gap-1 text-white/30 font-bold text-lg">
              <span className="text-brand-yellow">★★★★★</span> Google
            </span>
            <span className="text-white/30 font-bold text-lg tracking-wider">BBB A+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
