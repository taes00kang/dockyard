import { useEffect, useState } from 'react';

export function useScrollPosition(ref: React.RefObject<HTMLElement>) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(ref.current!.scrollTop);
    };

    ref.current!.addEventListener('scroll', handleScroll);

    return () => {
      ref.current!.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return scrollPosition;
}

