"use client";
import { useState } from "react";

export default function Home() {

  const [isMore, setIsMore] = useState(false);
  const handleToggle = () => {
    setIsMore(!isMore);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 dark:bg-gradient-to-br dark:from-gray-950 dark:via-teal-950/30 dark:to-black flex flex-col">
      <main className="p-4 sm:p-6 py-6 sm:py-12 flex-grow flex items-center justify-center">
        <div className="text-sm sm:text-base text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-4 opacity-0 animate-fade-in font-display">
            Shamim Bin Zahid
          </h1>

          <p className="font-medium text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 opacity-0 animate-fade-in delay-200">
            Software engineer, UX designer, procrastinator and part time shitposter.
          </p>

          <div className="flex justify-center gap-6 mb-8 opacity-0 animate-fade-in delay-400">
            <a href="https://linkedin.com/in/shamemezahid" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/shamemezahid" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              GitHub
            </a>
            <a href="https://shamemezahid.github.io" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Website
            </a>
          </div>

          <div className="max-w-xl mx-auto text-gray-600/75 dark:text-gray-300/75 opacity-0 animate-fade-in delay-600">
            I love to build, break, and fix things.
            Currently helping founders launch fast with <a className="underline decoration-gray-600/25 dark:decoration-gray-300/25" href="https://airwork.ai">Airwork</a>.
            Working with startups for half a decade (5 yrs sounds less dramatic).
            <br /> <br />
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <span>This website is just a placeholder for this GitHub account.
                Checkout my full website <a className="underline decoration-gray-600/25 dark:decoration-gray-300/25" href="https://shamemezahid.github.io">here</a>.
                Feel free to reach out on <a className="underline decoration-gray-600/25 dark:decoration-gray-300/25" href="https://linkedin.com/in/shamemezahid">LinkedIn</a>. I love talking about products, business, design, economics, comicbooks, music, movies and puns.</span>
            </div>
            <button 
              onClick={handleToggle}
              className="cursor-pointer mt-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
            >
              {isMore ? " Read less" : " Read more"}
            </button>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-xs text-gray-500 dark:text-gray-400 opacity-0 animate-fade-in delay-600">
        © {new Date().getFullYear()} • Built (in a hurry but) with ❤️ by Shamim
      </footer>
    </div>
  );
}
