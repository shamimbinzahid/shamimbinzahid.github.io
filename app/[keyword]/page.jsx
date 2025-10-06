import { RedirectClient } from '../components/RedirectClient';
import redirects from '../redirects.json';

/**
 * Generate metadata for each redirect page
 * @param {Object} props - The props object
 * @param {Object} props.params - The params object
 * @param {string} props.params.keyword - The keyword parameter
 * @param {Object} parent - The parent metadata
 */
export async function generateMetadata({ params }, parent) {
  const keyword = params.keyword;
  const redirectUrl = redirects[keyword];
  
  return {
    title: redirectUrl 
      ? `Redirecting to ${keyword} | Shamim Bin Zahid`
      : 'Link not found | Shamim Bin Zahid',
    description: `Redirecting to ${keyword || 'homepage'}`
  };
}

/**
 * Pre-render all pages defined in redirects.json at build time
 */
export function generateStaticParams() {
  return Object.keys(redirects).map((keyword) => ({
    keyword,
  }));
}

/**
 * Redirect page component
 * @param {Object} props - The props object 
 * @param {Object} props.params - The params object
 * @param {string} props.params.keyword - The keyword parameter
 */
export default function Redirect({ params }) {
  const { keyword } = params;
  const redirectUrl = keyword && redirects[keyword];
  
  return <RedirectClient keyword={keyword} redirectUrl={redirectUrl} />;
}