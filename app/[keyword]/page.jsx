import { RedirectClient } from '../components/RedirectClient';
import redirects from '../redirects.json';

/**
 * Generate metadata for each redirect page
 * @param {Object} props - The props object
 * @param {Promise<{keyword: string}>} props.params - The params object
 * @param {Object} parent - The parent metadata
 */
export async function generateMetadata({ params }, parent) {
  const { keyword } = await params;
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
 * @param {Promise<{keyword: string}>} props.params - The params object
 */
export default async function Redirect({ params }) {
  const { keyword } = await params;
  const redirectUrl = keyword && redirects[keyword];
  
  return <RedirectClient keyword={keyword} redirectUrl={redirectUrl} />;
}