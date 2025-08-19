'use client';

import React from 'react';

interface SuggestionCardProps {
  title: string;
  phrase: string;
  icon: React.ReactNode;
}

// WhatsApp number - replace with your actual number
const WHATSAPP_NUMBER = "6280000000000"; // e.g., 62812xxxxxxx

const waLink = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export function SuggestionCard({ title, phrase, icon }: SuggestionCardProps) {
  return (
    <a 
      href={waLink(phrase)} 
      target="_blank" 
      rel="noreferrer noopener" 
      aria-label={`Select suggestion: ${title}`} 
      className="card suggestion-card block focusable rounded-2xl grid-item group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-nenrin-heading text-[19px] font-semibold tracking-wider mb-2 text-nenrin-ink group-hover:text-nenrin-forest transition-colors duration-300">
            {title}
          </h3>
          <p className="font-nenrin-body text-[15px] text-nenrin-text-light leading-relaxed mb-3">
            &ldquo;{phrase}&rdquo;
          </p>
          {/* Visual indicator */}
          <div className="flex items-center gap-2 opacity-50 group-hover:opacity-80 transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-nenrin-sprout to-nenrin-forest opacity-60"/>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-nenrin-forest to-nenrin-gold opacity-40"/>
            <div className="w-1.5 h-1.5 rounded-full bg-nenrin-sage opacity-50"/>
          </div>
        </div>
        <span className="text-nenrin-forest pt-1 card-icon">{icon}</span>
      </div>
      {/* Hover accent line */}
      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-nenrin-sprout via-nenrin-forest to-nenrin-gold opacity-0 group-hover:opacity-40 transition-all duration-500 rounded-full"/>
    </a>
  );
}
