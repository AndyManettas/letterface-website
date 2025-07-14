import { useEffect, RefObject } from 'react';

interface UseAnimateOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

const useAnimateOnScroll = (
  containerRef: RefObject<HTMLElement>,
  options: UseAnimateOnScrollOptions = { threshold: 0.1 }
) => {
  useEffect(() => {
    const container = containerRef.current;

    const elements: Element[] = [];

    if (container) {
      // If the container itself has the class, include it.
      if (container.classList.contains('animate-on-scroll')) {
        elements.push(container);
      }

      // Also include all descendants with the class.
      container.querySelectorAll('.animate-on-scroll').forEach((el) => elements.push(el));
    }

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [containerRef, options]);
};

export default useAnimateOnScroll; 