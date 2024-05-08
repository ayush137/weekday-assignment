import { useCallback, useState } from "react";

const useIntersectionObserver = () => {
  const [observer, setOserver] = useState<IntersectionObserver | undefined>();
  const [isIntersecting, setIntersecting] = useState(false);

  const observerRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0,
        }
      );

      observer.observe(node);
      setOserver(observer);
    }
  }, []);

  return { observerRef, isIntersecting, observer };
};

export default useIntersectionObserver;
