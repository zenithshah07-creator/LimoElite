import React from 'react';
import { useLang } from '../../context/LangContext';

const CarLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#D62828" />
    <path d="M4 20h24M6 20l2-6h16l2 6M9 20v2m14-2v2M8 14h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="22" r="2" fill="white" />
    <circle cx="22" cy="22" r="2" fill="white" />
  </svg>
);

const Footer = () => {
  const { t } = useLang();

  const serviceLinks = [
    { href: '#airport', label: 'Airport Transfer' },
    { href: '#services', label: 'City-to-City' },
    { href: '#services', label: 'Hourly Charter' },
    { href: '#plans', label: 'Daily Plans' },
    { href: '#plans', label: 'Weekly Packages' },
    { href: '#plans', label: 'Monthly Contracts' },
  ];

  const companyLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#about', label: 'Awards' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
  ];

  const socials = ['f', 'in', 'tw', 'wa'];

  return (
    <footer className="pt-14 pb-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <CarLogo />
              <span className="font-display font-bold text-white text-lg">LimoElite</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">{t('footer_tagline')}</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-red hover:text-white transition-all text-xs"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('footer_services')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="text-white/40 text-sm hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('footer_company')}</h4>
            <ul className="space-y-2">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="text-white/40 text-sm hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('footer_contact')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+15551234567" className="text-white/40 hover:text-white transition-colors">+1 (555) 123-4567</a></li>
              <li><a href="mailto:booking@limoelite.com" className="text-white/40 hover:text-white transition-colors">booking@limoelite.com</a></li>
              <li className="text-white/40 leading-relaxed">123 Luxury Drive<br />Beverly Hills, CA 90210</li>
              <li className="text-green-400 text-sm">{t('contact_hours')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} LimoElite Services. {t('footer_rights')}
          </p>
          <div className="flex gap-5 text-xs">
            <a href="#" className="text-white/30 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors">Terms of Service</a>
            <span className="text-brand-yellow">{t('footer_licensed')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
