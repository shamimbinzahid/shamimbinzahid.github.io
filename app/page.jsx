import Link from "next/link";
import content from "./content.json";
import { ProfilePhoto } from "./components/ProfilePhoto";
import { Header } from "./components/Header";
import { TextLinks } from "./components/TextLinks";
import { ContentParagraphsHome } from "./components/ContentParagraphs";
import { Footer } from "./components/Footer";

// Main App Component
export default function Home() {
  return (
    <div className="relative rotating-gradient min-h-[100dvh] bg-amber-100/10 dark:bg-gray-950 dark:bg-gradient-to-br dark:from-gray-950 dark:via-teal-950/30 dark:to-black flex flex-col select-none">
      <main className="px-4 sm:px-6 py-6 sm:py-12 flex-grow flex flex-col items-center justify-center">
        <article className="max-w-4xl text-sm sm:text-base text-start p-4 flex flex-col gap-8">
          <ProfilePhoto name={content.name} />

          <Header name={content.name} subtitle={content.subtitle} />

          <TextLinks links={content.textLinks} />

          <ContentParagraphsHome paragraphs={content.paragraphs} />

          <Link
            href="/about"
            className="w-fit inline underline decoration-gray-600/50 dark:decoration-gray-300/50 opacity-0 animate-fade-in delay-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            Read more
          </Link>

          <Footer
            footerNote={content.footerNote}
            resumeUrl={content.resumeUrl}
          />
        </article>
      </main>
    </div>
  );
}
