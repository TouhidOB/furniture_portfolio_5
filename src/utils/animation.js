import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const animateFadeUp = (element, trigger, delay = 0) => {
  if (prefersReducedMotion() || !element) return null;

  return gsap.fromTo(
    element,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: 'power2.out',
      delay,
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};

export const animateParallaxScale = (element, trigger) => {
  if (prefersReducedMotion() || !element) return null;

  return gsap.fromTo(
    element,
    { scale: 1.08 },
    {
      scale: 1.0,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    }
  );
};

export { gsap, ScrollTrigger };
