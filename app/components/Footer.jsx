export const Footer = ({ footerNote, resumeUrl }) => (
  <div className="mt-4 sm:mt-8 text-gray-900/90 ark:text-gray-300/75 flex flex-row flex-wrap gap-2 sm:gap-3 opacity-0 animate-fade-in delay-900">
    <p>© {new Date().getFullYear()}</p>
    <p className="hidden sm:inline">•</p>
    <p>{footerNote}</p>
  </div>
);
