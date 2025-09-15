"use client";
import { useState } from "react";
import Image from "next/image";
import content from './content.json';
import { Linkedin, Github, Instagram, Globe, Printer } from 'lucide-react';

export default function Home() {
  const [isMore, setIsMore] = useState(false);
  const handleToggle = () => {
    setIsMore(!isMore);
  };

  const renderTextWithLinks = (text, links) => {
    if (!links) return text;
    return text.split(/(\{[^}]+\})/).map((part, index) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        const key = part.slice(1, -1);
        const link = links[key];
        return link ? (
          <a key={index}
            href={link.href}
            className="underline decoration-gray-600/50 dark:decoration-gray-300/50">
            {link.label}
          </a>
        ) : part;
      }
      return part;
    });
  };

  return (
    <div className="rotating-gradient min-h-[100dvh] bg-amber-100/15 dark:bg-gray-950 dark:bg-gradient-to-br dark:from-gray-950 dark:via-teal-950/30 dark:to-black flex flex-col">
      <main className="p-4 sm:p-6 py-6 sm:py-12 flex-grow flex items-center justify-center">
        <div className="text-sm sm:text-base text-center px-4 flex flex-col gap-10 sm:gap-12">
          {/* Profile section with photo and text */}
          <div className="flex flex-col gap-6">
            <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto opacity-0 animate-fade-in">
              <Image
                src="/shamim.jpg"
                alt={content.name}
                width={144}
                height={144}
                className="rounded-full object-cover shadow-lg"
                aria-label={`A picture of ${content.name}`}
                title={`A picture of ${content.name}`}
                priority
                draggable={false}
              />
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white opacity-0 animate-fade-in font-display">
                {content.name}
              </h1>

              <p className="font-medium text-base sm:text-lg text-gray-600 dark:text-gray-300 opacity-0 animate-fade-in delay-200">
                {content.subtitle}
              </p>
            </div>
          </div>

          {/* Links section - keeping structure but using content values */}
          <div className="flex justify-center gap-6 opacity-0 animate-fade-in delay-400">
            <a href={content.links[0].href}
              target="_blank"
              aria-label={content.links[0].label}
              title={content.links[0].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href={content.links[1].href}
              target="_blank"
              aria-label={content.links[1].label}
              title={content.links[1].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a href={content.links[2].href}
              target="_blank"
              aria-label={content.links[2].label}
              title={content.links[2].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href={content.links[3].href}
              target="_blank"
              aria-label={content.links[3].label}
              title={content.links[3].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              <Globe size={20} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              onClick={() => { setIsMore(true); window.print(); }}
              aria-label="Print page"
              title="Print this page (Why not?)"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              <Printer size={20} strokeWidth={1.5} />
            </a>
          </div>

          <div className="max-w-xl mx-auto text-gray-900/90 dark:text-gray-300/75 opacity-0 animate-fade-in delay-600 leading-relaxed font-light">
            <p>
              {renderTextWithLinks(content.intro, content.introLinks)}</p>
            <br /> <br />
            <p className={`overflow-hidden transition-all duration-300 ease-in-out ${isMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {renderTextWithLinks(content.more, content.moreLinks)}
            </p>
            <button
              onClick={handleToggle}
              className="cursor-pointer mt-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
            >
              {isMore ? content.readLessLabel : content.readMoreLabel}
            </button>
          </div>
        </div>
      </main>

      {
        isMore && <footer className="leading-relaxed py-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center text-gray-500 dark:text-gray-400 opacity-0 animate-fade-in delay-600">
          <p>© {new Date().getFullYear()}</p> 
          <p className="hidden sm:inline">•</p>
          <p>{content.footerNote}</p> 
          <p className="hidden sm:inline">•</p>
          <a href={content.resumeUrl}
            aria-label="Resume"
            title="Resume"
            className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            Download Resume
          </a>
        </footer>
      }
    </div>
  );
}
