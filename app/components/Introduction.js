import { useState } from "react";
import content from "../content.json";

export default function Introduction({ renderTextWithLinks }) {
  const [isMore, setIsMore] = useState(false);
  const handleToggle = () => {
    setIsMore(!isMore);
  };

  return (
    <section id="section-intro" className="min-h-[100svh] sm:min-h-[100dvh] snap-start snap-always flex flex-col">
      <main className="p-4 sm:p-6 py-6 sm:py-12 flex-grow flex items-center justify-center">
        <div className="text-sm sm:text-base text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-4 opacity-0 animate-fade-in font-display">
            {content.name}
          </h1>

          <p className="font-medium text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 opacity-0 animate-fade-in delay-200">
            {content.subtitle}
          </p>

          <div className="flex justify-center gap-6 mb-8 opacity-0 animate-fade-in delay-400">
            {content.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="underline decoration-gray-600/50 dark:decoration-gray-300/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="max-w-xl mx-auto text-gray-600/75 dark:text-gray-300/75 opacity-0 animate-fade-in delay-600">
            <span>
              {renderTextWithLinks(content.intro, content.introLinks)}
            </span>
            <br /> <br />
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <span>
                {renderTextWithLinks(content.more, content.moreLinks)}
              </span>
            </div>
            <button
              onClick={handleToggle}
              className="cursor-pointer mt-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
            >
              {isMore ? content.readLessLabel : content.readMoreLabel}
            </button>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-xs text-gray-500 dark:text-gray-400 opacity-0 animate-fade-in delay-600">
        © {new Date().getFullYear()} • {content.footerNote}
      </footer>
    </section>
  );
}
