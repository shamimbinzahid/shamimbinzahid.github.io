"use client";
import { useState } from "react";

import Image from "next/image";
import { Linkedin, Instagram, Github, Globe, Printer} from "lucide-react"
import content from './content.json';

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);

  const renderTextWithLinks = (text, links) => {
    if (!links || Object.keys(links).length === 0) return text;
    return text.split(/(\{[^}]+\})/).map((part, index) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        const key = part.slice(1, -1);
        const link = links[key];
        return link ? (
          <a 
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
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
      <main className="px-4 sm:px-6 py-6 sm:py-12 flex-grow flex flex-col items-center justify-center">
        <article className="max-w-4xl text-sm sm:text-base text-start p-4 flex flex-col gap-6 sm:gap-8 ">
          
          {/* Photo */}
          <div className="w-12 h-12 -mb-3 opacity-0 animate-fade-in delay-300">
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
            <h1 className="text-xl font-bold text-gray-900 dark:text-white opacity-0 animate-fade-in delay-100 font-display ">
              {content.name}
            </h1>
            <p className="font-medium text-sm sm:text-base text-gray-600 dark:text-gray-300 opacity-0 animate-fade-in delay-200 ">
              {content.subtitle}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 flex-wrap opacity-0 animate-fade-in delay-300">
            <a
              href={content.links[0].href}
              target="_blank"
              aria-label={content.links[0].label}
              title={content.links[0].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-100"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a
              href={content.links[1].href}
              target="_blank"
              aria-label={content.links[1].label}
              title={content.links[1].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-100"
            >
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a
              href={content.links[2].href}
              target="_blank"
              aria-label={content.links[2].label}
              title={content.links[2].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-100"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href={content.links[3].href}
              target="_blank"
              aria-label={content.links[3].label}
              title={content.links[3].label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-100"
            >
              <Globe size={20} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              onClick={() => window.print()}
              aria-label="Print page"
              title="Print this page (Why not?)"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-100"
            >
              <Printer size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {content.paragraphs.map((paragraph, index) => {
              var delay = 300 + (index * 100);
              return (
                <p key={index} 
                  className={`text-gray-900/90 dark:text-gray-300/75 leading-relaxed light opacity-0 animate-fade-in delay-${delay}`}>
                  {renderTextWithLinks(paragraph.text, paragraph.links)}
                </p>
              );
            })}
          </div>
          
          {/* Footer */}
          <div className="mt-4 sm:mt-8 text-gray-900/90 dark:text-gray-300/75 flex flex-row flex-wrap gap-2 sm:gap-3 opacity-0 animate-fade-in delay-900">
            <p>© {new Date().getFullYear()}</p>
            <p className="hidden sm:inline">•</p>
            <p>{content.footerNote}</p>
            <p className="hidden sm:inline">•</p>
            <a
              href={content.resumeUrl}
              aria-label="Resume"
              title="Resume"
              className="underline decoration-gray-600/50 dark:decoration-gray-300/50 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Resume
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
