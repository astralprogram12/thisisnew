'use client';

import { NenrinLogo } from '@/components/NenrinLogo';
import { RingsBackground } from '@/components/RingsBackground';
import { Icon } from '@/components/Icons';

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center">
      <RingsBackground />
      
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="mb-8">
          <NenrinLogo size={64} />
        </div>
        
        <div className="card animate-fadeInScale">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-nenrin-sprout to-nenrin-forest-light">
              <Icon.Spark className="text-white animate-sparkle" width="24" height="24"/>
            </div>
            <h1 className="font-nenrin-heading text-2xl font-bold text-nenrin-ink">
              Page Not Found
            </h1>
          </div>
          
          <p className="font-nenrin-body text-nenrin-text-light mb-6">
            The path you're looking for has grown in a different direction.
          </p>
          
          <a 
            href="/" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <Icon.Check width="16" height="16" />
            Return to Garden
          </a>
        </div>
      </div>
    </main>
  );
}