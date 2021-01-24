import { useState, useEffect } from 'react';

const useScrollPosition = (initialPosition = 0) => {
  const [scrollPosition, setScrollPosition] = useState(initialPosition);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setScrollPosition((scrollTop / (scrollHeight - clientHeight)) * 100);
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
