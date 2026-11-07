import React from 'react';

interface BrandMarkProps {
  className?: string;
  size?: number;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ className = '', size = 26 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hc-gradient-refined" x1="2" y1="4" x2="30" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#67D8E7" />
          <stop offset="100%" stopColor="#B6A4E8" />
        </linearGradient>
      </defs>
      {/* Outer technical perimeter frame */}
      <rect
        x="3"
        y="3"
        width="26"
        height="26"
        rx="3"
        stroke="rgba(255, 255, 255, 0.25)"
        strokeWidth="1.25"
        fill="rgba(0, 0, 0, 0.4)"
      />
      {/* Structural research grid coordinate */}
      <line x1="3" y1="16" x2="29" y2="16" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="16" y1="3" x2="16" y2="29" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="2 2" />

      {/* Central stylized H/C synthesis glyph with refined gradient */}
      <path
        d="M9 10V22M9 16H23M23 10V14M23 18V22"
        stroke="url(#hc-gradient-refined)"
        strokeWidth="2.2"
        strokeLinecap="square"
      />

      {/* Discrete experimental nodes */}
      <circle cx="9" cy="10" r="1.75" fill="#67D8E7" />
      <circle cx="9" cy="22" r="1.75" fill="#67D8E7" />
      <circle cx="23" cy="10" r="1.75" fill="#B6A4E8" />
      <circle cx="23" cy="22" r="1.75" fill="#B6A4E8" />
      <circle cx="16" cy="16" r="2" fill="#F5F5F3" stroke="#07090E" strokeWidth="1" />
    </svg>
  );
};
