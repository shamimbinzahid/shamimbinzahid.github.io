"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { useState, useEffect } from "react";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.body.classList.toggle("dark", prefersDark);
    setIsDark(prefersDark);
    
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2500);

  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <span
        className={`w-fit fixed z-50 left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-sm rounded-md py-1 px-2 whitespace-nowrap transition-all duration-300 ease-in-out ${
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        System preference {isDark ? "dark" : "light"} mode detected
      </span>

      <button
        onClick={toggleTheme}
        className="fixed z-50 top-12 right-12 w-9 h-9 p-2 rounded-xl  backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/10 opacity-0 animate-fade-in flex items-center text-color-sub hover:text-color-main transition-colors cursor-pointer"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isMounted ? (
          <>
            <SunIcon
              strokeWidth={1.5}
              className={`h-5 w-5 absolute transition-all duration-500 ease-in-out ${
                isDark
                  ? "scale-100 opacity-100 rotate-0"
                  : "scale-0 opacity-0 rotate-180"
              }`}
            />
            <MoonIcon
              strokeWidth={1.5}
              className={`h-5 w-5 absolute transition-all duration-500 ease-in-out ${
                !isDark
                  ? "scale-100 opacity-100 rotate-0"
                  : "scale-0 opacity-0 -rotate-180"
              }`}
            />
          </>
        ) : (
          <div className="h-5 w-5" />
        )}
      </button>
    </>
  );
}

export default DarkModeToggle;
