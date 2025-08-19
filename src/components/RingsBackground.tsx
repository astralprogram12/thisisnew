'use client';

import React from 'react';

export function RingsBackground() {
  return (
    <div aria-hidden={true} className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Primary animated ring pattern */}
      <div
        className="absolute -left-40 -top-56 h-[1200px] w-[1200px] rounded-full animate-breathe"
        style={{
          background: "radial-gradient(circle, rgba(31,94,66,0.08) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.6,
        }}
      />
      {/* Secondary floating pattern */}
      <div
        className="absolute -right-60 -top-20 h-[800px] w-[800px] rounded-full animate-float"
        style={{
          background: "radial-gradient(circle, rgba(96,198,137,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.4,
          animationDelay: "2s",
        }}
      />
      {/* Tertiary subtle pattern */}
      <div
        className="absolute -left-20 -bottom-40 h-[600px] w-[600px] rounded-full animate-breathe"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.3,
          animationDelay: "4s",
        }}
      />
      {/* Floating particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-nenrin-sprout rounded-full opacity-20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-nenrin-forest rounded-full opacity-30 animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-nenrin-gold rounded-full opacity-25 animate-float" style={{ animationDelay: "5s" }} />
    </div>
  );
}
