"use client";
import { useEffect, useRef, useState } from "react";
import content from "./content.json";
import Introduction from "./components/Introduction";
import BentoGrid from "./components/BentoGrid";
import Work from "./components/Work";
import Life from "./components/Life";
import Contact from "./components/Contact";

export default function Home() {
  // Auto-hide indicators after inactivity
  const [indicatorsVisible, setIndicatorsVisible] = useState(true);
  const timeoutRef = useRef(null);
  const scrollRef = useRef(null);
  
  // Reset the idle timer
  const resetIdleTimer = () => {
    console.log('Resetting idle timer'); // Debug log
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIndicatorsVisible(true);
    timeoutRef.current = setTimeout(() => {
      setIndicatorsVisible(false);
      console.log('Indicators hidden due to timeout'); // Debug log
    }, 2000); // 3 seconds of inactivity
  };

  // Toggle indicators manually (for debugging)
  const toggleIndicators = () => {
    setIndicatorsVisible(prev => !prev);
  };

  useEffect(() => {
    // Set up scroll container reference
    scrollRef.current = document.getElementById('snap-scroll-root');
    
    // Set up initial timer
    resetIdleTimer();
    
    // Add scroll event listener directly on the scrollRef
    const handleScroll = () => {
      console.log('Scroll detected'); // Debug log
      resetIdleTimer();
    };
    
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
      
      // Also check window for safety
      window.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      // Clean up everything
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
      
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // helper to replace {placeholders} with anchor tags
  const renderTextWithLinks = (text, map) => {
    const parts = text.split(/(\{[^}]+\})/g).filter(Boolean);
    return parts.map((part, idx) => {
      const match = part.match(/^\{([^}]+)\}$/);
      if (match) {
        const key = match[1];
        const link = map?.[key];
        if (link) {
          return (
            <a
              key={`${key}-${idx}`}
              href={link.href}
              className="underline decoration-gray-600/50 dark:decoration-gray-300/50"
            >
              {link.label}
            </a>
          );
        }
      }
      return <span key={idx}>{part}</span>;
    });
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Track which section is in view and the ordered list of sections
  const [activeSection, setActiveSection] = useState('section-intro');
  const [sectionIds, setSectionIds] = useState(['section-intro', 'section-bento', 'section-work', 'section-life', 'section-contact']);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: document.querySelector('#snap-scroll-root'),
      rootMargin: '0px',
      threshold: 0.6,
    };
    const handler = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const obs = new IntersectionObserver(handler, options);
    observerRef.current = obs;
    const secs = Array.from(document.querySelectorAll('section[id^="section-"]'));
    setSectionIds(secs.map((s) => s.id));
    secs.forEach((s) => obs.observe(s));
    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <div className="rotating-gradient min-h-[100svh] sm:min-h-[100dvh] overflow-hidden bg-white dark:bg-gray-950 dark:bg-gradient-to-br dark:from-gray-950 dark:via-teal-950/30 dark:to-black flex flex-col">
      {/* Floating Up/Down buttons + indicators */}
      <div className="fixed right-safe top-1/2 -translate-y-1/2 translate-x-0 z-50 flex flex-col items-center gap-3">
        {/* Debug button (double-click for emergency toggle) */}
        <div 
          onDoubleClick={toggleIndicators}
          className="absolute -left-20 -top-20 w-10 h-10 opacity-0"
        ></div>
        
        <button
          aria-label="Scroll up"
          className={`btn-floating w-10 h-10 sm:w-11 sm:h-11 transition-margin duration-400 ${!indicatorsVisible ? 'mb-0' : 'mb-1'}`}
          onClick={() => {
            resetIdleTimer();
            const idx = sectionIds.indexOf(activeSection);
            const target = sectionIds[Math.max(0, idx - 1)] || sectionIds[0];
            scrollToId(target);
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
        {/* Indicators */}
        <div className={`indicators-container flex flex-col items-center gap-2 py-1 ${!indicatorsVisible ? 'hide' : ''}`}>
          {sectionIds.map((id) => {
            const active = activeSection === id;
            return (
              <button
                key={id}
                aria-label={`Go to ${id}`}
                className={`indicator-dot ${active ? 'indicator-dot--active animate-dot-bounce' : 'opacity-60'} cursor-pointer`}
                onClick={() => {
                  resetIdleTimer();
                  scrollToId(id);
                }}
              />
            );
          })}
        </div>
        <button
          aria-label="Scroll down"
          className={`btn-floating w-10 h-10 sm:w-11 sm:h-11 transition-margin duration-400 ${!indicatorsVisible ? 'mt-0' : 'mt-1'}`}
          onClick={() => {
            resetIdleTimer();
            const idx = sectionIds.indexOf(activeSection);
            const target = sectionIds[Math.min(sectionIds.length - 1, idx + 1)] || sectionIds[sectionIds.length - 1];
            scrollToId(target);
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>

      {/* Snap container */}
      <div id="snap-scroll-root" className="h-[100svh] sm:h-[100dvh] overflow-y-auto overscroll-y-contain snap-y snap-mandatory scroll-smooth">
        {/* Section components */}
        <Introduction renderTextWithLinks={renderTextWithLinks} />
        <BentoGrid />
        <Work />
        <Life />
        <Contact />
      </div>
    </div>
  );
}
