import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle */}
        <circle cx="20" cy="20" r="18" fill="url(#gradient)" stroke="currentColor" strokeWidth="1"/>
        
        {/* Arrow pointing up (career growth) */}
        <path
          d="M20 8L26 16H23V24H17V16H14L20 8Z"
          fill="white"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        
        {/* Steps/ladder effect */}
        <rect x="16" y="28" width="8" height="2" fill="white" opacity="0.8"/>
        <rect x="14" y="30" width="12" height="2" fill="white" opacity="0.6"/>
        <rect x="12" y="32" width="16" height="2" fill="white" opacity="0.4"/>
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function LogoWithText({ className = '', size = 'md' }: LogoProps) {
  const isWhite = className.includes('text-white');
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Logo size={size} />
      <span className={`text-2xl font-bold ${isWhite ? 'text-white' : 'text-gray-900'}`}>
        Role<span className="text-primary">Raise</span>
      </span>
    </div>
  );
}