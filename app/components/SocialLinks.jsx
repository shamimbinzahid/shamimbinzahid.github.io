export const SocialLinks = ({ links }) => (
  <div className="flex gap-4 flex-wrap opacity-0 animate-fade-in delay-200">
    <a
      href={links[0].href}
      target="_blank"
      aria-label={links[0].label}
      title={links[0].label}
      className="text-color-link text-color-sub"
    >
      LinkedIn
    </a>
    <a
      href={links[1].href}
      target="_blank"
      aria-label={links[1].label}
      title={links[1].label}
      className="text-color-link text-color-sub"
    >
      Github
    </a>
    <a
      href={links[2].href}
      target="_blank"
      aria-label={links[2].label}
      title={links[2].label}
      className="text-color-link text-color-sub"
    >
      Instagram
    </a>
    <a
      href={links[3].href}
      target="_blank"
      aria-label={links[3].label}
      title={links[3].label}
      className="text-color-link text-color-sub"
    >
      Portfolio
    </a>
    <a
      href="#"
      onClick={() => window.print()}
      aria-label="Print page"
      title="Print this page (Why not?)"
      className="text-color-link text-color-sub"
    >
      Print (Why not?)
    </a>
  </div>
);
