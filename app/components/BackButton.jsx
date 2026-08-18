import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const BackButton = ({ href = "/", label = "Go back home" }) => (
  <div className="opacity-0 animate-fade-in delay-050">
    <Link
      href={href}
      className="text-font-main text-color-link text-color-sub transition-colors duration-200 inline-flex items-center gap-2"
    >
      <ArrowLeft size={16} strokeWidth={1.5} />
      {label}
    </Link>
  </div>
);
