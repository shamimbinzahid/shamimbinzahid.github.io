export const renderTextWithLinks = (text, links) => {
  if (!links || Object.keys(links).length === 0) return text;
  return text.split(/(\{[^}]+\})/).map((part, index) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      const key = part.slice(1, -1);
      const link = links[key];
      return link ? (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-color-link text-color-sub leading-loose"
        >
          {link.label}
        </a>
      ) : (
        part
      );
    }
    return part;
  });
};
