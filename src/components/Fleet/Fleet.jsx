import React from 'react';
import { useLang } from '../../context/LangContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const vehicles = [
  {
    img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80',
    badgeText: 'Most Popular', badgeColor: 'bg-brand-yellow text-brand-dark',
    titleKey: 'car1_title', descKey: 'car1_desc', capKey: 'car1_cap',
    amenities: ['WiFi', 'Climate Control', 'Water', 'Charger'],
    bookKey: 'book_sedan', btnColor: 'bg-brand-blue hover:bg-blue-900',
    featured: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80',
    badgeText: 'Family Choice', badgeColor: 'bg-brand-orange text-white',
    titleKey: 'car2_title', descKey: 'car2_desc', capKey: 'car2_cap',
    amenities: ['WiFi', 'Extra Luggage', 'Entertainment', 'Water'],
    bookKey: 'book_suv', btnColor: 'bg-brand-red hover:bg-red-700',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80',
    badgeText: 'Premium', badgeColor: 'bg-brand-red text-white',
    titleKey: 'car3_title', descKey: 'car3_desc', capKey: 'car3_cap',
    amenities: ['Full Bar', 'Sound System', 'Mood Lighting', 'Red Carpet'],
    bookKey: 'book_limo', btnColor: 'bg-brand-blue hover:bg-blue-900',
    featured: false,
  },
];

const VehicleCard = ({ vehicle, t }) => {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`vehicle-card bg-white rounded-2xl overflow-hidden fade-up ${
        vehicle.featured
          ? 'border-2 border-brand-red'
          : ''
      }`}
      style={{
        boxShadow: vehicle.featured
          ? '0 8px 32px rgba(214,40,40,0.4)'
          : '0 8px 32px rgba(0,0,0,0.3)',
        transform: vehicle.featured ? 'translateY(-8px)' : undefined,
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={vehicle.img}
          alt={t(vehicle.titleKey)}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className={`absolute top-3 right-3 text-xs font-bebas tracking-wider px-3 py-1 rounded-full ${vehicle.badgeColor}`}>
          {vehicle.badgeText}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-display font-bold text-brand-blue text-xl">{t(vehicle.titleKey)}</h3>
          {vehicle.featured && (
            <span className="bg-red-50 text-brand-red text-xs font-semibold px-2 py-0.5 rounded">★ Featured</span>
          )}
        </div>
        <p className="text-gray-500 text-sm mb-3">{t(vehicle.descKey)}</p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-brand-orange text-sm">👤</span>
          <span className="text-gray-600 text-sm">{t(vehicle.capKey)}</span>
        </div>
        <div className="flex gap-2 flex-wrap mb-5">
          {vehicle.amenities.map(a => (
            <span key={a} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{a}</span>
          ))}
        </div>
        <a
          href="#booking"
          className={`block text-center text-white text-sm font-semibold py-2.5 rounded-xl transition-all ${vehicle.btnColor}`}
        >
          {t(vehicle.bookKey)}
        </a>
      </div>
    </div>
  );
};

const Fleet = () => {
  const { t } = useLang();
  const headerRef = useScrollAnimation();

  return (
    <section id="fleet" className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 fade-up" ref={headerRef}>
          <span className="font-bebas text-brand-orange tracking-widest text-sm">{t('fleet_eyebrow')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-1">{t('fleet_title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map(v => <VehicleCard key={v.titleKey} vehicle={v} t={t} />)}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
