import { useCallback, useState } from "react";

const useIntersectionObserver = () => {
  const [observer, setOserver] = useState<IntersectionObserver | undefined>();
  const [isIntersecting, setIntersecting] = useState(false);

  const observerRef = useCallback((node: HTMLDivElement | null) => {
    console.log("hello");
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
          console.log("hello");
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
