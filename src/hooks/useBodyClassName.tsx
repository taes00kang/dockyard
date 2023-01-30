import { useEffect, useState } from "react";

export function useBodyClassName() {
  const [bodyClassName, setBodyClassName] = useState("");

  useEffect(() => {
    // Set the initial class name
    setBodyClassName(document.body.className);

    // Add a listener to watch for changes to the body class name
    const observer = new MutationObserver(() => {
      setBodyClassName(document.body.className);
    });
    observer.observe(document.body, { attributes: true });

    // Remove the listener when the component unmounts
    return () => observer.disconnect();
  }, []);

  return bodyClassName;
}
