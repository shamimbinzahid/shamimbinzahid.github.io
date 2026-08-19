"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function GotoTopFAB() {
  const [isVisible, setIsVisible] = useState(false);
  const isScrollingToTop = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingToTop.current) {
        if (window.scrollY === 0) {
          isScrollingToTop.current = false;
        }
        setIsVisible(false);
        return;
      }

      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    isScrollingToTop.current = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(false);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 right-8 md:right-12 w-9 h-9 p-2 rounded-xl backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/10 flex items-center text-color-sub hover:text-color-main transition-[bottom] duration-200 ease-in-out cursor-pointer ${
        isVisible ? "bottom-8 md:bottom-12" : "-bottom-8 md:-bottom-12"
      }`}
      aria-label="Go to top"
      title="Go to top"
    >
      <ArrowUp strokeWidth={1.5} className="h-5 w-5" />
    </button>
  );
}

export default GotoTopFAB;