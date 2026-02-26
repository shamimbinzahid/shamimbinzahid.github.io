"use client";

import { AArrowUp, AArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

function LargeTextToggle() {
  const [isLarge, setIsLarge] = useState(false);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSize = () => {
    setIsLarge(!isLarge);
    document.documentElement.classList.toggle("large-text");
  };

  return (
    <button
      onClick={toggleSize}
      className="fixed z-50 top-12 right-24 w-9 h-9 p-2 rounded-xl backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/10 opacity-0 animate-fade-in flex items-center text-color-sub hover:text-color-main transition-colors cursor-pointer"
      aria-label={isLarge ? "Switch to default text size" : "Switch to large text size"}
      title={isLarge ? "Switch to default text size" : "Switch to large text size"}
    >
      {isMounted ? (
        <>
          <AArrowDown
            strokeWidth={1.5}
            className={`h-5 w-5 absolute transition-all duration-500 ease-in-out ${
              isLarge
                ? "scale-100 opacity-100 rotate-0"
                : "scale-0 opacity-0 rotate-180"
            }`}
          />
          <AArrowUp
            strokeWidth={1.5}
            className={`h-5 w-5 absolute transition-all duration-500 ease-in-out ${
              !isLarge
                ? "scale-100 opacity-100 rotate-0"
                : "scale-0 opacity-0 -rotate-180"
            }`}
          />
        </>
      ) : (
        <div className="h-5 w-5" />
      )}
    </button>
  );
}

export default LargeTextToggle;
