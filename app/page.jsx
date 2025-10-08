import Link from "next/link";
import content from "./content.json";
import { ProfilePhoto } from "./components/ProfilePhoto";
import { Header } from "./components/Header";
import { TextLinks } from "./components/TextLinks";
import { ContentParagraphsHome } from "./components/ContentParagraphs";
import { Footer } from "./components/Footer";
import { renderTextWithLinks } from "./components/utils";

// Main App Component
export default function Home() {
  return (
    <div className="relative rotating-gradient min-h-[100dvh] bg-amber-100/10 ark:bg-gray-950 ark:bg-gradient-to-br ark:from-gray-950 ark:via-teal-950/30 ark:to-black flex flex-col select-none">
      <main className="px-4 sm:px-6 py-6 sm:py-12 flex-grow flex flex-col items-center justify-center">
        <article className="max-w-4xl text-sm sm:text-base text-start p-4 flex flex-col gap-8">
          <ProfilePhoto name={content.name} />

          <Header name={content.name} subtitle={content.subtitle} />

          <ContentParagraphsHome paragraphs={content.paragraphs} />

          <span className="opacity-0 animate-fade-in delay-600 text-color-sub">
            <Link href="/about" className="text-color-link">
              Read more
            </Link>{" "}
            about me, download my full{" "}
            <Link href={content.resumeUrl} target="_blank" className="text-color-link"> resume (PDF)</Link>{" "}
            or{" "}
            {renderTextWithLinks(
              content.navParagraphHome.text,
              content.navParagraphHome.links
            )}
          </span>

          <Footer
            footerNote={content.footerNote}
            resumeUrl={content.resumeUrl}
          />
        </article>
      </main>
    </div>
  );
}
