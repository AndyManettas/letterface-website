import { useEffect, RefObject } from 'react';

interface UseAnimateOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

const useAnimateOnScroll = (
  ref: RefObject<HTMLElement>,
  options: UseAnimateOnScrollOptions = { threshold: 0.1 }
) => {
  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      options
    );

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [ref, options]);
};

export default useAnimateOnScroll; 