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
          className="underline decoration-gray-600/50 dark:decoration-gray-300/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-100"
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
