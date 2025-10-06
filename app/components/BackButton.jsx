import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => (
  <div className="opacity-0 animate-fade-in delay-50">
    <Link
      href="/"
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
    >
      <ArrowLeft size={16} strokeWidth={1.5} />
      Go back home
    </Link>
  </div>
);
