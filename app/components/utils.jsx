export const renderTextWithLinks = (text, links) => {
  if (!text) return null;

  const renderInlineText = (value) => {
    const parts = value.split(/(\*\*[^*]+\*\*|\{[^}]+\})/g).filter(Boolean);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldText = part.slice(2, -2);
        return <strong key={index} className="font-semibold text-color-main">{renderInlineText(boldText)}</strong>;
      }

      if (part.startsWith("{") && part.endsWith("}")) {
        const key = part.slice(1, -1);
        const link = links?.[key];

        if (!link) {
          return part;
        }

        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-color-link text-color-sub leading-loose"
          >
            {link.label}
          </a>
        );
      }

      return part.split(/\n/).map((line, lineIndex) => (
        <span key={`${index}-${lineIndex}`}>
          {line}
          {lineIndex < part.split(/\n/).length - 1 ? <br /> : null}
        </span>
      ));
    });
  };

  const blocks = text.split(/\n\n+/).filter(Boolean);

  if (blocks.length > 1) {
    return (
      <>
        {blocks.map((block, blockIndex) => (
          <span key={blockIndex} className={blockIndex > 0 ? "block mt-6" : "block"}>
            {renderInlineText(block)}
          </span>
        ))}
      </>
    );
  }

  return renderInlineText(text);
};
