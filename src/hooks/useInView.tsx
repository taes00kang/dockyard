import { useEffect, useState } from "react";

interface InViewId {
  inViewId: string | null;
}

// Function to check if an element is in view
function isInView(element: Element) {
  const elementTop = element.getBoundingClientRect().top;

  // Check if the top element is within the viewable area of the browser window
  return elementTop <= 500;
}

export function useInView(): InViewId {
  const [inViewId, setInViewId] = useState<string | null>("theme-1");

  useEffect(() => {
    // Get all section elements
    const sections = document.querySelectorAll("section");

    function handleScroll() {
      // For each element, check if it is in view
      sections.forEach((section) => {
        if (isInView(section)) {
          // If the section is in view, set the inViewId state to the section"s ID
          setInViewId(section.id);
        }
      });
    }

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { inViewId };
}
