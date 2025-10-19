"use client";
import { useState } from "react";
import Image from "next/image";

export const ProfilePhoto = ({ name }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="w-24 h-24 -mb-3 opacity-0 animate-fade-in delay-0050">
      <Image
        src="/shamim.jpg"
        alt={name}
        width={144}
        height={144}
        className="rounded-full object-cover shadow-lg"
        aria-label={`A picture of ${name}`}
        title={`A picture of ${name}`}
        priority
        draggable={false}
        onContextMenu={(e) => {
          e.preventDefault();
          setShowTooltip(true);
          setTimeout(() => {
            setShowTooltip(false);
          }, 1500);
        }}
      />
      <span
        className={`absolute top-0 left-0 transform -translate-y-full mt-2  bg-gray-800 text-white text-sm rounded-md py-1 px-2 transition-opacity duration-300 whitespace-nowrap ${
          showTooltip ? "opacity-100" : "opacity-0"
        }`}
      >
        Sorry, can&apos;t let you do that steve!
      </span>
    </div>
  );
};
