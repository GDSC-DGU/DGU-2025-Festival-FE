import { useEffect, useRef, useState } from "react";

export function useOnScreenAnimation<T extends HTMLElement>(
  threshold: number = 1
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= threshold); // ✅ 비율 기반 토글
      },
      { threshold }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}
