import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

export const useCountUp = (target, suffix = '', triggerRef) => {
  useEffect(() => {
    const el = triggerRef?.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let n = 0;
          const step = target / 60;
          const iv = setInterval(() => {
            n = Math.min(n + step, target);
            const display = el.querySelector(`[data-count="${target}"]`);
            if (display) {
              display.textContent =
                target === 49
                  ? (n / 10).toFixed(1) + suffix
                  : Math.floor(n) + suffix;
            }
            if (n >= target) clearInterval(iv);
          }, 25);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, triggerRef]);
};
