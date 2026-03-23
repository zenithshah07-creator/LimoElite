import React, { useState } from 'react';
import { useLang } from '../../context/LangContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ContactInfo = ({ t }) => (
  <div>
    <div className="rounded-2xl p-7 text-white mb-6" style={{ background: 'linear-gradient(135deg,#1A3A6B,#0A1628)' }}>
      <h3 className="font-display text-xl font-bold mb-5">{t('contact_info_title')}</h3>
      <div className="space-y-4">
        {[
          { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
          { icon: '📱', label: 'WhatsApp', value: '+1 (555) 123-4567', href: 'https://wa.me/15551234567' },
          { icon: '📧', label: 'Email', value: 'booking@limoelite.com', href: 'mailto:booking@limoelite.com' },
        ].map(({ icon, label, value, href }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-brand-yellow text-xl">{icon}</span>
            <div>
              <p className="text-white/50 text-xs">{label}</p>
              <a href={href} className="text-white font-semibold hover:text-brand-yellow transition-colors text-sm">
                {value}
              </a>
            </div>
          </div>
        ))}
        <div className="flex items-start gap-3">
          <span className="text-brand-yellow text-xl">📍</span>
          <div>
            <p className="text-white/50 text-xs">Address</p>
            <p className="text-white font-semibold text-sm">
              123 Luxury Drive, Suite 100<br />Beverly Hills, CA 90210
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-brand-yellow text-xl">⏰</span>
          <div>
            <p className="text-white/50 text-xs">Hours</p>
            <p className="text-white font-semibold text-sm">{t('contact_hours')}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-3">
      <a href="tel:+15551234567" className="flex-1 bg-brand-red text-white text-center font-semibold py-3 rounded-xl hover:bg-red-700 transition-all text-sm">
        {t('btn_call')}
      </a>
      <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer"
        className="flex-1 text-white text-center font-semibold py-3 rounded-xl hover:opacity-90 transition-all text-sm"
        style={{ background: '#25D366' }}>
        {t('btn_wa')}
      </a>
    </div>
  </div>
);

const ContactForm = ({ t }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-blue transition-colors";

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-semibold text-lg mb-1">{t('form_success')}</p>
        <p className="text-sm text-green-600">{t('form_note')}</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-green-700 underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text" name="name" required value={form.name} onChange={handleChange}
        className={inputClass} placeholder={t('form_name')}
      />
      <input
        type="email" name="email" required value={form.email} onChange={handleChange}
        className={inputClass} placeholder={t('form_email')}
      />
      <input
        type="tel" name="phone" value={form.phone} onChange={handleChange}
        className={inputClass} placeholder={t('form_phone')}
      />
      <select name="service" value={form.service} onChange={handleChange} className={inputClass + ' text-gray-600'}>
        <option value="">{t('form_service')}</option>
        {['Airport Transfer','Hourly Charter','Daily Plan','Weekly Plan','Monthly Plan','Special Event'].map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <textarea
        name="message" rows="4" value={form.message} onChange={handleChange}
        className={inputClass + ' resize-none'} placeholder={t('form_msg')}
      />
      <button type="submit" className="w-full bg-brand-red text-white font-semibold py-3 rounded-xl hover:bg-red-700 transition-all hover:scale-[1.01]">
        {t('form_submit')}
      </button>
      <p className="text-gray-400 text-xs text-center">{t('form_note')}</p>
    </form>
  );
};

const Contact = () => {
  const { t } = useLang();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-bebas text-brand-orange tracking-widest text-sm">{t('contact_eyebrow')}</span>
          <h2 className="font-display text-4xl font-bold text-brand-blue mt-1">{t('contact_title')}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-up" ref={leftRef}><ContactInfo t={t} /></div>
          <div className="fade-up" ref={rightRef}><ContactForm t={t} /></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
