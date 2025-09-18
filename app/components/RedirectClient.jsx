'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function RedirectClient({ keyword, redirectUrl }) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);
  const [progress, setProgress] = useState(100);
  const [linkExists, setLinkExists] = useState(null);

  useEffect(() => {
    // Set link existence state
    setLinkExists(!!redirectUrl);
    
    // Start countdown
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          // Redirect when countdown reaches 0
          if (redirectUrl) {
            window.location.href = redirectUrl;
          } else {
            router.push('/');
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Update progress bar (smoother animation)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(progressInterval);
          return 0;
        }
        return prev - (100 / (3 * 40));
      });
    }, 25);

    return () => {
      clearInterval(countdownInterval);
      clearInterval(progressInterval);
    };
  }, [keyword, redirectUrl, router]);

  // Show loading until we determine if link exists
  if (linkExists === null) {
    return (
      <div className="rotating-gradient min-h-[100dvh] bg-amber-100/15 dark:bg-gray-950 dark:bg-gradient-to-br dark:from-gray-950 dark:via-teal-950/30 dark:to-black flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <circle fill="#1e40af" stroke="#1e40af" strokeWidth="16" r="15" cx="40" cy="65">
                <animate attributeName="cy" calcMode="spline" dur="1.5" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
              </circle>
              <circle fill="#1e40af" stroke="#1e40af" strokeWidth="16" r="15" cx="100" cy="65">
                <animate attributeName="cy" calcMode="spline" dur="1.5" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
              </circle>
              <circle fill="#1e40af" stroke="#1e40af" strokeWidth="16" r="15" cx="160" cy="65">
                <animate attributeName="cy" calcMode="spline" dur="1.5" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rotating-gradient min-h-[100dvh] bg-amber-100/15 dark:bg-gray-950 dark:bg-gradient-to-br dark:from-gray-950 dark:via-teal-950/30 dark:to-black flex flex-col items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className='w-24 h-24 mx-auto mb-4'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
            <circle fill='#1e40af' stroke='#1e40af' strokeWidth='16' r='15' cx='40' cy='65'>
              <animate attributeName='cy' calcMode='spline' dur='1.5' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.4'></animate>
            </circle>
            <circle fill='#1e40af' stroke='#1e40af' strokeWidth='16' r='15' cx='100' cy='65'>
              <animate attributeName='cy' calcMode='spline' dur='1.5' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.2'></animate>
            </circle>
            <circle fill='#1e40af' stroke='#1e40af' strokeWidth='16' r='15' cx='160' cy='65'>
              <animate attributeName='cy' calcMode='spline' dur='1.5' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='0'></animate>
            </circle>
          </svg>
        </div>

        <p className="text-lg leading-relaxed font-medium text-gray-800 dark:text-gray-200 mb-2">
          {linkExists 
            ? `You are being navigated to "${keyword}"`
            : "Link broken or removed."}
        </p>
        
        {!linkExists && (
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            Taking you back home
          </p>
        )}

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}...
        </p>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6">
          <div
            className="bg-blue-900 dark:bg-blue-800 h-2.5 rounded-full transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}