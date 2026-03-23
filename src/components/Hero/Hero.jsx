import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '../../context/LangContext';

const TABS = ['tab1', 'tab2', 'tab3'];

const BookingWidget = ({ t }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="booking" className="glass rounded-2xl p-6 max-w-3xl mx-auto text-left mt-8">
      {/* Tabs */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === i
                ? 'bg-brand-red text-white'
                : 'text-white/60 border border-white/20 hover:border-white/50'
            }`}
          >
            {t(tab)}
          </button>
        ))}
      </div>

      {/* Tab 0 — One Way */}
      {activeTab === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="b-input" type="text" placeholder={t('pickup_ph')} />
          <input className="b-input" type="text" placeholder={t('dropoff_ph')} />
          <input className="b-input" type="date" />
          <input className="b-input" type="time" />
          <select className="b-input">
            <option>Passengers</option>
            {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n}</option>)}
          </select>
          <select className="b-input">
            <option>Vehicle Type</option>
            <option>Executive Sedan</option>
            <option>Luxury SUV</option>
            <option>Stretch Limo</option>
            <option>Sprinter Van</option>
          </select>
        </div>
      )}

      {/* Tab 1 — Round Trip */}
      {activeTab === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="b-input" type="text" placeholder={t('pickup_ph')} />
          <input className="b-input" type="text" placeholder={t('dropoff_ph')} />
          <input className="b-input" type="date" placeholder="Departure Date" />
          <input className="b-input" type="date" placeholder="Return Date" />
          <select className="b-input">
            <option>Passengers</option>
            {[1,2,3,4,5,6].map(n => <option key={n}>{n}</option>)}
          </select>
          <select className="b-input">
            <option>Vehicle Type</option>
            <option>Executive Sedan</option>
            <option>Luxury SUV</option>
            <option>Stretch Limo</option>
          </select>
        </div>
      )}

      {/* Tab 2 — By the Hour */}
      {activeTab === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="b-input" type="text" placeholder={t('pickup_ph')} />
          <input className="b-input" type="date" />
          <input className="b-input" type="time" />
          <select className="b-input">
            <option>Duration</option>
            {['2 hrs','4 hrs','6 hrs','8 hrs','10 hrs','12 hrs'].map(d => <option key={d}>{d}</option>)}
          </select>
          <select className="b-input md:col-span-2">
            <option>Vehicle Type</option>
            <option>Executive Sedan</option>
            <option>Luxury SUV</option>
            <option>Stretch Limo</option>
          </select>
        </div>
      )}

      <button className="mt-4 w-full bg-brand-red text-white font-semibold py-3 rounded-xl hover:bg-red-700 transition-all text-sm">
        {t('search_btn')}
      </button>
      <p className="text-center text-white/40 text-xs mt-3">{t('widget_note')}</p>
    </div>
  );
};

const StatCounter = ({ target, suffix, label }) => {
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
      <div className="text-3xl font-bold text-brand-yellow" style={{ fontFamily: 'Oswald, sans-serif' }}>
        {value}
      </div>
      <div className="text-white/60 text-xs mt-1">{label}</div>
    </div>
  );
};

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col justify-center" style={{ background: '#0A1628' }}>
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80')" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.7) 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-12 text-center">
        {/* Badge */}
        <div
          className="inline-block mb-4 px-4 py-2 rounded-full text-xs tracking-widest"
          style={{
            fontFamily: 'Bebas Neue, cursive',
            background: 'rgba(255,215,0,0.15)',
            border: '1px solid rgba(255,215,0,0.4)',
            color: '#FFD700',
            letterSpacing: '4px',
          }}
        >
          {t('hero_badge')}
        </div>

        {/* H1 */}
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          {t('hero_title').split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>

        <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">{t('hero_sub')}</p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#booking"
            className="bg-brand-red text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 transition-all hover:scale-105 text-sm"
          >
            {t('hero_btn1')}
          </a>
          <a
            href="#fleet"
            className="border border-white/50 text-white font-semibold px-8 py-3 rounded-full hover:border-white transition-all text-sm"
          >
            {t('hero_btn2')}
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <StatCounter target={500} suffix="+" label={t('stat1')} />
          <StatCounter target={50} suffix="+" label={t('stat2')} />
          <StatCounter target={10} suffix="+" label={t('stat3')} />
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-yellow" style={{ fontFamily: 'Oswald' }}>4.9★</div>
            <div className="text-white/60 text-xs mt-1">{t('stat4')}</div>
          </div>
        </div>

        {/* Booking Widget */}
        <BookingWidget t={t} />
      </div>
    </section>
  );
};

export default Hero;
