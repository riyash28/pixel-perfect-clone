import { useEffect, useRef, useState } from "react";

/**
 * Reusable IntersectionObserver hook.
 * Returns a ref to attach to the target element and an `isVisible` flag
 * that flips to true once the element enters the viewport. One-shot trigger
 * (disconnects after first intersection) — matches the existing animation
 * behavior used in WhyWeAreDifferent.
 */
export function useInViewAnimation<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.05, rootMargin: "0px 0px -10% 0px" },
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isVisible };
}