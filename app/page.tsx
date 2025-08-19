'use client';

import React from 'react';
import { NenrinLogo } from '@/components/NenrinLogo';
import { RingsBackground } from '@/components/RingsBackground';
import { Home } from '@/components/Home';
import { Icon } from '@/components/Icons';

export default function NenrinDashboard() {
  return (
    <main className="relative min-h-screen w-full">
      <RingsBackground/>
      
      <header className="enhanced-header sticky top-0 z-10 max-w-5xl mx-auto px-6 py-6 flex items-center justify-between animate-fadeInScale">
          <NenrinLogo size={48}/>
          <div className="flex items-center gap-4">
            <span className="chip animate-fadeInScale" style={{ animationDelay: "0.5s" }}>
              <Icon.Spark width="14" height="14" className="animate-sparkle"/> 
              New branches are growing... Dashboard coming soon.
            </span>
          </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 pt-4 pb-12 grid gap-6">
        <Home/>
      </div>

      <footer className="relative max-w-5xl mx-auto px-6 py-8 text-center">
        {/* Decorative element */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-nenrin-sprout to-nenrin-forest flex items-center justify-center animate-float">
            <Icon.Spark className="text-white animate-sparkle" width="24" height="24"/>
          </div>
        </div>
        
        <p className="font-nenrin-body text-sm text-nenrin-bark leading-relaxed max-w-md mx-auto">
          Nenrin grows with you, calmly and at your own pace. 
          <span className="block mt-2 text-nenrin-forest font-medium">
            You are always in control.
          </span>
        </p>
        
        {/* Bottom accent */}
        <div className="mt-6 w-32 h-0.5 bg-gradient-to-r from-transparent via-nenrin-sprout to-transparent mx-auto rounded-full opacity-50"/>
      </footer>
    </main>
  );
}
