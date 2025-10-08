export const SocialLinks = ({ links }) => (
  <div className="flex gap-4 flex-wrap opacity-0 animate-fade-in delay-200">
    <a
      href={links[0].href}
      target="_blank"
      aria-label={links[0].label}
      title={links[0].label}
      className="underline decoration-gray-600/50 ark:decoration-gray-300/50 text-gray-700 ark:text-gray-300 hover:text-gray-900 ark:hover:text-white transition-colors duration-100"
    >
      LinkedIn
    </a>
    <a
      href={links[1].href}
      target="_blank"
      aria-label={links[1].label}
      title={links[1].label}
      className="underline decoration-gray-600/50 ark:decoration-gray-300/50 text-gray-700 ark:text-gray-300 hover:text-gray-900 ark:hover:text-white transition-colors duration-100"
    >
      Github
    </a>
    <a
      href={links[2].href}
      target="_blank"
      aria-label={links[2].label}
      title={links[2].label}
      className="underline decoration-gray-600/50 ark:decoration-gray-300/50 text-gray-700 ark:text-gray-300 hover:text-gray-900 ark:hover:text-white transition-colors duration-100"
    >
      Instagram
    </a>
    <a
      href={links[3].href}
      target="_blank"
      aria-label={links[3].label}
      title={links[3].label}
      className="underline decoration-gray-600/50 ark:decoration-gray-300/50 text-gray-700 ark:text-gray-300 hover:text-gray-900 ark:hover:text-white transition-colors duration-100"
    >
      Portfolio
    </a>
    <a
      href="#"
      onClick={() => window.print()}
      aria-label="Print page"
      title="Print this page (Why not?)"
      className="underline decoration-gray-600/50 ark:decoration-gray-300/50 text-gray-700 ark:text-gray-300 hover:text-gray-900 ark:hover:text-white transition-colors duration-100"
    >
      Print (Why not?)
    </a>
  </div>
);
