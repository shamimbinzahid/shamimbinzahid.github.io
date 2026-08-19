import Link from "next/link";

export const Footer = ({ footNote, resumeUrl }) => (
  <div className="mt-4 sm:mt-8 text-color-sub flex flex-row flex-wrap gap-2 sm:gap-3 opacity-0 animate-fade-in delay-0450">
    <p>© {new Date().getFullYear()}</p>
    <p className="hidden sm:inline">•</p>
    <p>{footNote}</p>
    <p className="hidden sm:inline">•</p>
    <Link href="/scribbles" className="text-color-link hover:underline">
      Scribbles
    </Link>
  </div>
);
