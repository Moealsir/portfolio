import { useRef, useEffect } from 'react';

const useIntersectionObserver = (options) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elementRef.current.classList.add('animate');
        } else {
          elementRef.current.classList.remove('animate');
        }
      },
      options
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return elementRef;
};

export default useIntersectionObserver;