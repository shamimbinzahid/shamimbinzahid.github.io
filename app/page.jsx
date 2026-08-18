import Link from "next/link";
import content from "./content.json";
import { ProfilePhoto } from "./components/ProfilePhoto";
import { Header } from "./components/Header";
import { ContentParagraphsHome } from "./components/ContentParagraphs";
import { Footer } from "./components/Footer";
import { renderTextWithLinks } from "./components/utils";
import { TextLinks } from "./components/TextLinks";

export default function Home() {
  return (
    <>
      <ProfilePhoto name={content.name} />

      <Header name={content.name} subtitle={content.subtitle} />
      
      <TextLinks links={content.links} />

      <ContentParagraphsHome paragraphs={content.paragraphs} />

      <span className="opacity-0 animate-fade-in delay-0350 text-color-sub">
        <Link href="/about" className="text-color-link">
          Read more
        </Link>{" "}
        about me, download my full{" "}
        <Link
          href={content.resumeUrl}
          target="_blank"
          className="text-color-link"
        >
          {" "}
          resume (PDF)
        </Link>{" "}
        or{" "}
        {renderTextWithLinks(
          content.navParagraphHome.text,
          content.navParagraphHome.links
        )}
      </span>

      <Footer footerNote={content.footerNote} resumeUrl={content.resumeUrl} />
    </>
  );
}
