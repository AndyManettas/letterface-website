
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { ArrowRight, Apple, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "space-y-8 transform transition-all duration-700 opacity-0 translate-y-12",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <div className="space-y-3">
              <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium">
                AI-Powered Newsletter App
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Your personalized newsletter, <span className="text-gradient">in your pocket</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-prose">
                Letterface creates custom email digests on any topic you choose, delivered right to your mobile device.
              </p>
            </div>
            
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                    <Apple size={24} />
                    <div className="text-left">
                      <div className="text-xs font-light">Download on the</div>
                      <div className="text-lg font-semibold -mt-1">App Store</div>
                    </div>
                  </button>
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                    <Smartphone size={24} />
                    <div className="text-left">
                      <div className="text-xs font-light">Get it on</div>
                      <div className="text-lg font-semibold -mt-1">Google Play</div>
                    </div>
                  </button>
                </a>
              </div>
              
              <p className="text-foreground/60 text-sm">
                Available for iOS and Android. Free to download.
              </p>
            </div>
          </div>
          
          <div className={cn(
            "relative transform transition-all duration-700 delay-300 opacity-0 translate-y-12",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <div className="relative mx-auto max-w-[320px]">
              {/* Phone frame */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[40px] blur-xl opacity-70"></div>
              <div className="relative bg-black rounded-[40px] p-3 shadow-2xl border border-gray-700 overflow-hidden">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-between px-6 z-20">
                  <div className="text-white text-xs">9:41</div>
                  <div className="flex space-x-1.5">
                    <div className="w-4 h-1 bg-white rounded-sm"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-xl z-10"></div>
                
                {/* Screen content */}
                <div className="relative rounded-[32px] overflow-hidden bg-white pt-8 pb-4 px-3 h-[520px]">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-lg">Daily Tech Digest</h3>
                      <div className="text-xs text-gray-500">8:00 AM</div>
                    </div>
                    
                    <div className="h-px bg-gradient-to-r from-border via-primary/20 to-border"></div>
                    
                    <div className="space-y-3 prose prose-sm max-w-none">
                      <p>Today's top tech headlines:</p>
                      <ul className="space-y-2">
                        <li className="flex gap-2 items-start">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                          <span>Apple announces new MacBook Pro with M3 chip</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                          <span>Google's AI model achieves human-level performance</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                          <span>Startup raises $50M to build sustainable batteries</span>
                        </li>
                      </ul>
                      <p className="text-gray-500 italic">Curated specifically for you based on your interests.</p>
                    </div>
                    
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                      <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/4 -right-4 w-28 h-28 bg-primary/20 rounded-full blur-2xl z-0 animate-pulse-soft"></div>
            <div className="absolute -bottom-10 left-1/4 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl z-0 animate-float"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/3 -left-28 w-56 h-56 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
