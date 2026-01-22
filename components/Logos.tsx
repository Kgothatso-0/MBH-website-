import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const MBHGroupLogo: React.FC<LogoProps> = ({ className = "h-12", light = false }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <svg viewBox="0 0 400 200" className="h-full w-auto">
      <path d="M50,130 A150,150 0 0,1 350,130" fill="none" stroke={light ? "white" : "#F9A01B"} strokeWidth="4" />
      <path d="M50,135 L350,135" stroke={light ? "white" : "#F9A01B"} strokeWidth="8" />
      <text x="200" y="120" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="80" fill={light ? "white" : "black"}>
        M<tspan fill="#F9A01B">B</tspan>H
      </text>
      <text x="200" y="155" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="12" fill={light ? "white" : "black"} letterSpacing="2">
        MOKGATLE BUSINESS HOLDINGS (PTY) LTD
      </text>
    </svg>
  </div>
);

export const MBHAutomotiveLogo: React.FC<LogoProps> = ({ className = "h-16" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <svg viewBox="0 0 200 200" className="h-full">
      <path d="M20,40 L180,40 L180,120 Q180,180 100,195 Q20,180 20,140 Z" fill="none" stroke="#F9A01B" strokeWidth="8" />
      <path d="M50,90 Q100,60 150,90 L155,120 L45,120 Z" fill="#F9A01B" />
      <circle cx="70" cy="110" r="8" fill="white" />
      <circle cx="130" cy="110" r="8" fill="white" />
    </svg>
    <div className="flex flex-col">
      <span className="text-3xl font-bold leading-none">MBH</span>
      <span className="text-mbh-gold font-bold tracking-widest text-sm uppercase">Automotive</span>
    </div>
  </div>
);

export const MBHHousekeepingLogo: React.FC<LogoProps> = ({ className = "h-16" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <svg viewBox="0 0 200 200" className="h-full">
      {/* Premium Shield Base */}
      <path d="M100 20 L180 50 V140 Q180 180 100 195 Q20 180 20 140 V50 Z" fill="black" stroke="#F9A01B" strokeWidth="6" />
      {/* Minimalist Sparkle and Clean Sweep Icon */}
      <path d="M100 60 L105 140 H95 L100 60 Z" fill="#F9A01B" />
      <path d="M70 145 H130" stroke="#F9A01B" strokeWidth="6" strokeLinecap="round" />
      <path d="M140 70 L145 80 M140 80 L150 75" stroke="white" strokeWidth="3" />
      <circle cx="65" cy="65" r="4" fill="white" />
    </svg>
    <div className="flex flex-col">
      <span className="text-3xl font-bold leading-none">MBH</span>
      <span className="text-mbh-gold font-bold tracking-[0.2em] text-[10px] uppercase">Housekeeping</span>
    </div>
  </div>
);

export const StudioMBHLogo: React.FC<LogoProps> = ({ className = "h-16" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="relative">
      <svg viewBox="0 0 100 100" className="h-14 w-14">
         {/* Modern Creative Studio Box/Frame */}
         <rect x="10" y="20" width="80" height="60" fill="none" stroke="#F9A01B" strokeWidth="4" />
         <path d="M10 40 L30 40 M70 40 L90 40 M50 20 L50 30 M50 70 L50 80" stroke="#F9A01B" strokeWidth="4" />
         <text x="50" y="62" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="30" fill="black">MBH</text>
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold tracking-[0.6em] text-gray-500 uppercase ml-1">Studio</span>
      <span className="text-3xl font-bold text-mbh-gold leading-none tracking-tighter">MBH</span>
    </div>
  </div>
);