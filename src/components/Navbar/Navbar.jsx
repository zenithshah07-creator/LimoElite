import React, { useState, useEffect } from 'react';
import { useLang } from '../../context/LangContext';

const CarLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#D62828" />
    <path d="M4 20h24M6 20l2-6h16l2 6M9 20v2m14-2v2M8 14h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="22" r="2" fill="white" />
    <circle cx="22" cy="22" r="2" fill="white" />
  </svg>
);

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: t('nav_services') },
    { href: '#fleet', label: t('nav_fleet') },
    { href: '#plans', label: t('nav_plans') },
    { href: '#about', label: t('nav_about') },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: t('nav_contact') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-blue/97 backdrop-blur-md'
            : 'bg-brand-blue/60 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <CarLogo />
            <span className="font-display font-bold text-white text-xl">LimoElite</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-brand-yellow transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-white/80 text-xs font-semibold border border-white/30 rounded-full px-3 py-1 hover:border-white transition-colors"
            >
              🌐 {lang === 'en' ? 'EN | ES' : 'ES | EN'}
            </button>
            <a
              href="#booking"
              className="hidden md:block bg-brand-red text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-red-700 transition-all hover:scale-105"
            >
              {t('nav_book')}
            </a>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark">
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="flex flex-col items-center gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white font-display text-3xl hover:text-brand-yellow transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="mt-4 bg-brand-red text-white text-lg font-semibold px-8 py-3 rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              {t('nav_book')}
            </a>
            <button
              onClick={() => { toggleLang(); setMobileOpen(false); }}
              className="mt-2 text-white/60 text-sm border border-white/20 rounded-full px-4 py-2"
            >
              Switch Language / Cambiar Idioma
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
