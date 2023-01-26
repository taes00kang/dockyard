import { useEffect, useState } from "react";

export function useScrollPosition(ref: React.RefObject<HTMLDivElement>) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > ref.current!.offsetTop) {
        setScrollPosition(window.scrollY - ref.current!.offsetTop);
      }
    };
    if (window !== undefined && ref.current) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}
