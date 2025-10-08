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
          className="underline decoration-gray-600/50 ark:decoration-gray-300/50 text-gray-700 ark:text-gray-300 hover:text-gray-900 ark:hover:text-white transition-colors duration-100"
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
