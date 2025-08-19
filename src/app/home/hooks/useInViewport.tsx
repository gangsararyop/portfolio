"use client";

import { useCallback, useEffect, useState } from "react";

interface UseInViewport {
  sections: Record<"id" | "label", string>[];
}

const useInViewport = ({ sections }: UseInViewport) => {
  const [activeOption, setActiveOption] = useState("");

  const isInViewport = (element: HTMLElement | null): boolean => {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return rect.top >= 0 || rect.bottom >= 100;
  };

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    for (const section of sections) {
      const element = document.getElementById(section.id);

      if (isInViewport(element)) {
        setActiveOption(section.id);
        return;
      }
    }

    setActiveOption("");
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return activeOption;
};

export default useInViewport;
