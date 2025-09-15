'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import redirects from '../redirects.json';

export default function Redirect() {
  const router = useRouter();
  const params = useParams();
  const keyword = params.keyword;

  useEffect(() => {
    function handleRedirect() {
      try {
        // Use the imported redirects directly
        
        // Check if keyword exists in redirects
        if (keyword && redirects[keyword]) {
          // Redirect to the specified URL
          window.location.href = redirects[keyword];
        } else {
          // If keyword doesn't exist, redirect to home page
          router.push('/');
        }
      } catch (error) {
        console.error('Redirect error:', error);
        // On error, redirect to home page
        router.push('/');
      }
    }
    
    handleRedirect();
  }, [keyword, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg">Redirecting...</p>
      </div>
    </div>
  );
}