import { useEffect, useState } from "react";

export function useScrollPosition(ref: React.RefObject<HTMLDivElement>) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && window.scrollY > ref.current.offsetTop) {
        setScrollPosition(window.scrollY - ref.current.offsetTop);
      }
    };
    if (window !== undefined) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}
