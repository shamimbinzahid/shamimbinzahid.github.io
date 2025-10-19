import { renderTextWithLinks } from "./utils";

var start_delay = 200;
var step_delay = 50;

export const ContentParagraphs = ({ paragraphs }) => (
  <div className="flex flex-col gap-4 sm:gap-6">
    {paragraphs.map((paragraph, index) => {
      return (
        <p
          key={index}
          className={`text-color-sub leading-loose light opacity-0 animate-fade-in delay-0${start_delay + index *  step_delay}`}
        >
          {renderTextWithLinks(paragraph.text, paragraph.links)}
        </p>
      );
    })}
  </div>
);

// Content Paragraphs Component (Home version - only first and last)
export const ContentParagraphsHome = ({ paragraphs }) => {
  if (paragraphs.length === 0) return null;
  if (paragraphs.length === 1)
    return <ContentParagraphs paragraphs={paragraphs} />;

  const paragraphIndexes = [0, paragraphs.length - 2];

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {paragraphIndexes.map((index, i) => (
        <p
          key={index}
          className={`text-color-sub leading-loose light opacity-0 animate-fade-in delay-0${start_delay + i * step_delay}`}
        >
          {renderTextWithLinks(paragraphs[index].text, paragraphs[index].links)}
        </p>
      ))}
    </div>
  );
};
