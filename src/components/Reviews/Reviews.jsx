import React from 'react';
import { useLang } from '../../context/LangContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const reviewsData = [
  { initials: 'SM', name: 'Sarah M.', city: 'Los Angeles, CA', stars: 5, textKey: 'rev1_text', platform: 'Google', color: 'bg-brand-red' },
  { initials: 'JR', name: 'James R.', city: 'New York, NY', stars: 5, textKey: 'rev2_text', platform: 'Google', color: 'bg-brand-blue' },
  { initials: 'MG', name: 'Maria G.', city: 'Miami, FL', stars: 5, textKey: 'rev3_text', platform: 'Yelp', color: 'bg-brand-orange' },
  { initials: 'DK', name: 'David K.', city: 'Chicago, IL', stars: 5, textKey: 'rev4_text', platform: 'Google', color: 'bg-brand-blue' },
  { initials: 'PS', name: 'Priya S.', city: 'San Francisco, CA', stars: 5, textKey: 'rev5_text', platform: 'TripAdvisor', color: 'bg-brand-red' },
  { initials: 'CV', name: 'Carlos V.', city: 'Houston, TX', stars: 4, textKey: 'rev6_text', platform: 'Google', color: 'bg-brand-orange' },
];

const platformColors = {
  Google: 'bg-blue-50 text-blue-500',
  Yelp: 'bg-green-50 text-green-600',
  TripAdvisor: 'bg-orange-50 text-orange-500',
};

const StarRating = ({ count }) => (
  <div className="text-brand-yellow text-sm mb-2">
    {'★'.repeat(count)}{'☆'.repeat(5 - count)}
  </div>
);

const ReviewCard = ({ review, t }) => {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl p-6 shadow-sm fade-up relative overflow-hidden"
      style={{ borderLeft: '3px solid #F4821F' }}
    >
      <div className="absolute top-4 right-4 text-7xl font-serif text-gray-100 leading-none select-none">"</div>
      <StarRating count={review.stars} />
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{t(review.textKey)}</p>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm`}>
          {review.initials}
        </div>
        <div>
          <p className="font-semibold text-brand-blue text-sm">{review.name}</p>
          <p className="text-gray-400 text-xs">{review.city}</p>
        </div>
        <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${platformColors[review.platform]}`}>
          {review.platform}
        </span>
      </div>
    </div>
  );
};

const RatingSummary = ({ t }) => {
  const ref = useScrollAnimation();
  const bars = [
    { stars: 5, pct: 92 },
    { stars: 4, pct: 6 },
    { stars: 3, pct: 2 },
  ];
  return (
    <div ref={ref} className="max-w-md mx-auto mb-12 bg-white rounded-2xl p-6 shadow-sm fade-up">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-5xl font-bold text-brand-blue" style={{ fontFamily: 'Oswald' }}>4.9</div>
        <div>
          <div className="text-brand-yellow text-xl">★★★★★</div>
          <p className="text-gray-400 text-xs mt-1">{t('reviews_based')}</p>
        </div>
      </div>
      <div className="space-y-2">
        {bars.map(({ stars, pct }) => (
          <div key={stars} className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-12 text-right">{stars} ★</span>
            <div className="flex-1 bg-gray-100 rounded-full h-2">
              <div className="bg-brand-yellow h-2 rounded-full" style={{ width: `${pct}%` }} />
            </div>
            <span className="w-8">{pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Reviews = () => {
  const { t } = useLang();
  const headerRef = useScrollAnimation();

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 fade-up" ref={headerRef}>
          <span className="font-bebas text-brand-orange tracking-widest text-sm">{t('reviews_eyebrow')}</span>
          <h2 className="font-display text-4xl font-bold text-brand-blue mt-1">{t('reviews_title')}</h2>
        </div>
        <RatingSummary t={t} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <ReviewCard key={review.initials} review={review} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
