import { renderTextWithLinks } from "./utils";
import Link from "next/link";

export const ContentParagraphs = ({ paragraphs }) => (
  <div className="flex flex-col gap-4 sm:gap-6">
    {paragraphs.map((paragraph, index) => {
      var delay = 100 + index * 100;
      return (
        <p
          key={index}
          className={`text-gray-900/90 dark:text-gray-300/75 leading-loose light opacity-0 animate-fade-in delay-${delay}`}
        >
          {renderTextWithLinks(paragraph.text, paragraph.links)}
        </p>
      );
    })}
  </div>
);

// Content Paragraphs Component (Home version - only first and last)
export const ContentParagraphsHome = ({ paragraphs }) => {
  const firstParagraph = paragraphs[0];
  const lastParagraph = paragraphs[paragraphs.length - 1];

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <p className="text-gray-900/90 dark:text-gray-300/75 leading-loose light opacity-0 animate-fade-in delay-400">
        {renderTextWithLinks(firstParagraph.text, firstParagraph.links)}
      </p>
      <p className="text-gray-900/90 dark:text-gray-300/75 leading-loose light opacity-0 animate-fade-in delay-500">
        {renderTextWithLinks(lastParagraph.text, lastParagraph.links)}
      </p>
    </div>
  );
};
