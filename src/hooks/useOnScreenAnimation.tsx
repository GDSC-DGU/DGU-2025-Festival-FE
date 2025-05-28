import { useEffect, useRef, useState } from "react";

export function useOnScreenAnimation<T extends HTMLElement>(
  threshold: number = 1,
  delay: number = 0
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold }
      );

      observer.observe(element);

      return () => {
        if (element) observer.unobserve(element);
        observer.disconnect();
      };
    }, delay);

    return () => clearTimeout(timeout);
  }, [threshold, delay]);

  return { ref, isVisible };
}
