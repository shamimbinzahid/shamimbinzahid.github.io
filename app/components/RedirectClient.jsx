"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function RedirectClient({ keyword, redirectUrl }) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);
  const [progress, setProgress] = useState(100);
  const linkExists = !!redirectUrl;

  useEffect(() => {
    // Start countdown
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
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
        return prev - 100 / (3 * 40);
      });
    }, 25);

    return () => {
      clearInterval(countdownInterval);
      clearInterval(progressInterval);
    };
  }, [keyword, redirectUrl]);

  useEffect(() => {
    if (countdown !== 0) {
      return;
    }

    if (redirectUrl) {
      window.location.href = redirectUrl;
      return;
    }

    router.push("/");
  }, [countdown, redirectUrl, router]);

  return (
    <div className="text-center max-w-md px-4">
      <div className="w-20 h-20 mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <circle
            fill="#1e40af"
            stroke="#1e40af"
            strokeWidth="16"
            r="15"
            cx="40"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="1.5"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            ></animate>
          </circle>
          <circle
            fill="#1e40af"
            stroke="#1e40af"
            strokeWidth="16"
            r="15"
            cx="100"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="1.5"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            ></animate>
          </circle>
          <circle
            fill="#1e40af"
            stroke="#1e40af"
            strokeWidth="16"
            r="15"
            cx="160"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="1.5"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
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

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Redirecting in {countdown} second{countdown !== 1 ? "s" : ""}...
      </p>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6">
        <div
          className="bg-blue-900 dark:bg-blue-800 h-2.5 rounded-full transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
