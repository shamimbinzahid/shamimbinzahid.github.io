/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports
  images: {
    domains: ['source.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  // Ensure trailing slashes for compatibility with GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
