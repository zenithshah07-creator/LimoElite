import React, { useState } from 'react';
import { useLang } from '../../context/LangContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const faqKeys = [
  { q: 'faq_q1', a: 'faq_a1' },
  { q: 'faq_q2', a: 'faq_a2' },
  { q: 'faq_q3', a: 'faq_a3' },
  { q: 'faq_q4', a: 'faq_a4' },
  { q: 'faq_q5', a: 'faq_a5' },
  { q: 'faq_q6', a: 'faq_a6' },
  { q: 'faq_q7', a: 'faq_a7' },
  { q: 'faq_q8', a: 'faq_a8' },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
    <button
      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className="font-semibold text-brand-blue text-sm pr-4">{question}</span>
      <span className="text-brand-orange font-bold text-xl flex-shrink-0 transition-transform duration-300"
        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
        +
      </span>
    </button>
    <div
      className="overflow-hidden transition-all duration-400 ease-in-out"
      style={{ maxHeight: isOpen ? '300px' : '0px' }}
    >
      <p className="text-gray-500 text-sm leading-relaxed px-5 pb-5">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollAnimation();
  const listRef = useScrollAnimation();

  const handleToggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12 fade-up" ref={headerRef}>
          <span className="font-bebas text-brand-orange tracking-widest text-sm">{t('faq_eyebrow')}</span>
          <h2 className="font-display text-4xl font-bold text-brand-blue mt-1">{t('faq_title')}</h2>
        </div>
        <div className="space-y-3 fade-up" ref={listRef}>
          {faqKeys.map(({ q, a }, i) => (
            <FAQItem
              key={q}
              question={t(q)}
              answer={t(a)}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
