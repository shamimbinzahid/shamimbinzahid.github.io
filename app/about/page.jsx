"use client";
import content from '../content.json';
import { AboutHeader } from '../components/AboutHeader';
import { BackButton } from '../components/BackButton';
import { ContentParagraphs } from '../components/ContentParagraphs';
import { Footer } from '../components/Footer';

// About Page Component
export default function About() {
  return (
    <div className="relative rotating-gradient min-h-[100dvh] bg-amber-100/10 dark:bg-gray-950 dark:bg-gradient-to-br dark:from-gray-950 dark:via-teal-950/30 dark:to-black flex flex-col select-none">
      <main className="px-4 sm:px-6 py-6 sm:py-12 flex-grow flex flex-col items-center justify-center">
        <article className="max-w-4xl text-sm sm:text-base text-start p-4 flex flex-col gap-8">
          <BackButton />

          <AboutHeader />

          <ContentParagraphs paragraphs={content.paragraphs} />

          <BackButton />

          <Footer footerNote={content.footerNote} resumeUrl={content.resumeUrl} />

        </article>
      </main>
    </div>
  );
}