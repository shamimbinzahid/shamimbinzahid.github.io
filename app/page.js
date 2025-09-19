"use client";
import { useState } from "react";
import Image from "next/image";
import content from './content.json';

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);

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
    <div className="rotating-gradient min-h-[100dvh] bg-amber-100/15 dark:bg-gray-950 dark:bg-gradient-to-br dark:from-gray-950 dark:via-teal-950/30 dark:to-black flex flex-col select-none">
      <main className="p-4 sm:p-6 py-6 sm:py-12 flex-grow flex flex-col items-center justify-center">
        <article className="max-w-4xl text-sm sm:text-base text-start px-4 flex flex-col gap-8">
          {/* Photo */}
          <div className="w-24 h-24 sm:w-40 sm:h-40 opacity-0 animate-fade-in relative delay-300">
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
              onContextMenu={(e) => {
                e.preventDefault();
                setShowTooltip(true);
                setTimeout(() => {
                  setShowTooltip(false);
                }, 1500);
              }}
            />
            <span
              className={`absolute top-0 left-0 transform -translate-y-full mt-2 bg-gray-900 text-white text-xs rounded py-1 px-2 transition-opacity duration-300 whitespace-nowrap dark:bg-gray-700 ${
                showTooltip ? "opacity-100" : "opacity-0"
              }`}
            >
              Sorry, can&apos;t let you do that steve!
            </span>
          </div>

          {/* Name and Tagline */}
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white opacity-0 animate-fade-in delay-100 font-display ">
              {content.name}
            </h1>
            <p className="font-medium text-sm sm:text-base text-gray-600 dark:text-gray-300 opacity-0 animate-fade-in delay-200 ">
              {content.subtitle}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-4 sm:gap-6 flex-wrap opacity-0 animate-fade-in delay-300 text-xs">
            <a
              href={content.links[0].href}
              target="_blank"
              aria-label={content.links[0].label}
              title={content.links[0].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-100"
            >
              {content.links[0].label}
            </a>
            <a
              href={content.links[1].href}
              target="_blank"
              aria-label={content.links[1].label}
              title={content.links[1].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-100"
            >
              {content.links[1].label}
            </a>
            <a
              href={content.links[2].href}
              target="_blank"
              aria-label={content.links[2].label}
              title={content.links[2].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-100"
            >
              {content.links[2].label}
            </a>
            <a
              href={content.links[3].href}
              target="_blank"
              aria-label={content.links[3].label}
              title={content.links[3].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-100"
            >
              {content.links[3].label}
            </a>
            <a
              href="#"
              onClick={() => window.print()}
              aria-label="Print page"
              title="Print this page (Why not?)"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-100"
            >
              {content.links[4].label}
            </a>
          </div>

          {/* First Paragraph */}
          <p className="text-gray-900/90 dark:text-gray-300/75 leading-relaxed font-light opacity-0 animate-fade-in delay-400">
            {renderTextWithLinks(content.intro, content.introLinks)}
          </p>

          {/* Second Paragraph */}
          <p className="text-gray-900/90 dark:text-gray-300/75 leading-relaxed font-light opacity-0 animate-fade-in delay-500">
            {renderTextWithLinks(content.more, content.moreLinks)}
          </p>

          {/* <p className="text-gray-900/90 dark:text-gray-300/75 leading-relaxed font-light opacity-0 animate-fade-in delay-600">{content.readMoreLabel}</p> */}

          {/* Footer */}
          <div className="text-gray-900/90 dark:text-gray-300/75 flex flex-row flex-wrap gap-2 sm:gap-3 opacity-0 animate-fade-in delay-700">
            <p>© {new Date().getFullYear()}</p>
            <p className="hidden sm:inline">•</p>
            <p>{content.footerNote}</p>
            <p className="hidden sm:inline">•</p>
            <a
              href={content.resumeUrl}
              aria-label="Resume"
              title="Resume"
              className="underline decoration-gray-600/50 dark:decoration-gray-300/50 transition-colors duration-200"
            >
              Download CV
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
