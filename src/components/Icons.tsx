'use client';

import React from 'react';

interface IconProps {
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export const WAIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.5 3.5a11 11 0 0 0-16 14.1L3 21l3.6-1.4A11 11 0 1 0 20.5 3.5z"/>
    <path d="M8.5 8.5c.5 2.2 2.8 4.5 5 5l1.8-.9c.3-.2.7 0 .8.3l.7 1.7c.1.4 0 .8-.4 1a6.6 6.6 0 0 1-3 1c-3.6 0-7.2-3.6-7.2-7.2 0-1 .3-2 .8-2.9.2-.4.7-.5 1-.4l1.7.7c.3.1.5.5.3.8l-.9 1.8z"/>
  </svg>
);

export const SparkIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l1.8 4.8L18 9l-4.2 2.2L12 16l-1.8-4.8L6 9l4.2-2.2L12 2z"/>
  </svg>
);

export const BellIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 8a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9"/>
    <path d="M10 21a2 2 0 0 0 4 0"/>
  </svg>
);

export const TimerIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="13" r="9"/>
    <path d="M12 6v7l4 4M9 3h6"/>
  </svg>
);

export const PinIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 3l7 7-4 4 4 4-3 3-4-4-4 4-3-3 4-4-4-4 7-7z"/>
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);
