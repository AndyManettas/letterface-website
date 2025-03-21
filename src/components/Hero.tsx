
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn("space-y-8 transform transition-all duration-700 opacity-0 translate-y-12", isVisible && "opacity-100 translate-y-0")}>
            <div className="space-y-3">
              <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium">
                AI-Powered Newsletter Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Your personalized newsletter, <span className="text-gradient">written by AI</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-prose">Letterface lets you create custom email digests on any topic, delivered on your schedule.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <img src="/app-store-button.svg" alt="App Store" className="h-12 w-auto transition-opacity hover:opacity-90" />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <img src="/play-store-button.svg" alt="Play Store" className="h-12 w-auto transition-opacity hover:opacity-90" />
              </a>
            </div>
            
            <p className="text-foreground/60 text-sm">
              Available on iOS and Android. No credit card required.
            </p>
          </div>
          
          <div className={cn("relative transform transition-all duration-700 delay-300 opacity-0 translate-y-12", isVisible && "opacity-100 translate-y-0")}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative bg-white shadow-xl rounded-2xl p-6 overflow-hidden border border-white/40">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold">🚀 Daily Tech Digest</h3>
                    <p className="text-sm text-foreground/70">Delivered every morning at 8:00 AM</p>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-border via-primary/20 to-border"></div>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Today's top tech headlines:</p>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-sm text-blue-500">💻 Nvidia's $1 Trillion AI Initiative</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>At GTC 2025, Nvidia introduced its Blackwell Ultra GPU and Vera Rubin AI chips</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-blue-500">🧠 Stargate: A $500B AI Mega-Project</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>SoftBank, Oracle, and OpenAI announced Stargate, an AI infrastructure project aiming to boost U.S. AI supremacy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-0 w-36 h-36 bg-primary/5 rounded-tl-full -mb-10 -mr-10 z-0"></div>
              </div>
            </div>
            
            <div className="absolute top-1/4 -right-4 w-28 h-28 bg-primary/20 rounded-full blur-2xl z-0 animate-pulse-soft"></div>
            <div className="absolute -bottom-10 left-1/4 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl z-0 animate-float"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/3 -left-28 w-56 h-56 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
    </section>;
};

export default Hero;
