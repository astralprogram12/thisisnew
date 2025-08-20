import Link from 'next/link';
import { SparkIcon } from '../src/components/Icons';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nenrin-mist to-[#F2F6F4]">
      <div className="text-center px-6">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-nenrin-sprout to-nenrin-forest flex items-center justify-center">
            <SparkIcon className="text-white" width="32" height="32" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-nenrin-bark mb-4">404</h1>
        <h2 className="text-2xl font-nenrin-heading text-nenrin-forest mb-6">Path Not Found</h2>
        
        <p className="text-nenrin-bark mb-8 max-w-md mx-auto leading-relaxed">
          The path you&rsquo;re looking for has grown in a different direction. 
          Let&rsquo;s help you find your way back to the main garden.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-nenrin-forest text-white rounded-full hover:bg-nenrin-bark transition-colors duration-200"
        >
          <SparkIcon width="16" height="16" />
          Return Home
        </Link>
      </div>
    </div>
  );
}