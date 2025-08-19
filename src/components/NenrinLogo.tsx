'use client';

import React from 'react';

interface NenrinLogoProps {
  size?: number;
}

export function NenrinLogo({ size = 36 }: NenrinLogoProps) {
  return (
    <div className="flex items-center gap-4 logo-container" aria-label="Nenrin logo">
      <div className="relative">
        <svg aria-hidden={true} viewBox="0 0 40 40" width={size} height={size} className="animate-float">
          <circle cx="20" cy="20" r="18" fill="none" stroke="var(--nenrin-forest)" strokeWidth="2.5" className="animate-breathe"/>
          <circle cx="20" cy="20" r="12" fill="none" stroke="var(--nenrin-sprout)" strokeWidth="2" opacity=".8" style={{ animationDelay: "1s" }} className="animate-breathe"/>
          <circle cx="20" cy="20" r="6"  fill="none" stroke="var(--nenrin-gold)" strokeWidth="1.5" opacity=".6" style={{ animationDelay: "2s" }} className="animate-breathe"/>
          {/* Central dot with sparkle animation */}
          <circle cx="20" cy="20" r="2" fill="var(--nenrin-forest)" opacity=".9" className="animate-sparkle"/>
        </svg>
        {/* Subtle glow effect */}
        <div 
          className="absolute inset-0 rounded-full animate-breathe"
          style={{
            background: "radial-gradient(circle, rgba(31,94,66,0.15) 0%, transparent 70%)",
            animationDelay: "0.5s"
          }}
        />
      </div>
      <div className="flex flex-col">
        <p className="font-nenrin-heading font-bold tracking-wide text-2xl text-nenrin-forest">
          Nenrin
        </p>
        <div className="h-0.5 w-full bg-gradient-to-r from-nenrin-sprout to-nenrin-forest opacity-70 rounded"/>
        <p className="font-nenrin-body text-xs text-nenrin-forest opacity-80 mt-1 font-medium">
          Your digital companion
        </p>
      </div>
    </div>
  );
}
