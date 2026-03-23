import React from 'react';
import { useLang } from '../../context/LangContext';

const Map = () => {
  const { t } = useLang();

  return (
    <section id="map">
      <div className="text-center py-8 bg-white">
        <span className="font-bebas text-brand-orange tracking-widest text-sm">{t('map_eyebrow')}</span>
        <h2 className="font-display text-3xl font-bold text-brand-blue mt-1">{t('map_title')}</h2>
      </div>

      <div className="relative">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120845!2d-118.4143012!3d34.0901191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc35069e7a0b%3A0x9b4e94c6fd08c6f0!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="420"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating info card */}
        <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#D62828">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            <span className="font-display font-bold text-brand-blue text-sm">LimoElite Services</span>
          </div>
          <p className="text-gray-500 text-xs mb-2">
            123 Luxury Drive, Suite 100<br />Beverly Hills, CA 90210
          </p>
          <p className="text-gray-500 text-xs mb-3">📞 +1 (555) 123-4567</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-brand-blue text-white text-xs font-semibold py-2 rounded-lg hover:bg-blue-900 transition-all"
          >
            {t('map_directions')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Map;
