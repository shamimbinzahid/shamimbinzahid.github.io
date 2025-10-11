export const TextLinks = ({ links }) => (
  <div className="flex gap-3 flex-wrap opacity-0 animate-fade-in delay-300">
    {links.map((link, index) => (
      <div key={index} className="flex items-center gap-4">
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          {link.text}
        </a>
        {index < links.length - 1 && (
          <span className="text-gray-700 dark:text-gray-300">•</span>
        )}
      </div>
    ))}
  </div>
);
