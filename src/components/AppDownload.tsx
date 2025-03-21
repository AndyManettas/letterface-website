
import React from 'react';
import { Apple, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const AppDownload = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-background/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium mb-4">
            Download Now
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get the Letterface app</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Start receiving personalized newsletters on your phone today. Available for iOS and Android.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="w-full max-w-xs">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[40px] blur-xl opacity-70"></div>
                <div className="relative bg-black rounded-[40px] p-3 shadow-2xl border border-gray-700 overflow-hidden">
                  <div className="rounded-[32px] overflow-hidden bg-white pt-8 pb-4 px-3 h-[360px] md:h-[420px]">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-lg">Letterface</h3>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">New</span>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <div className="h-32 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-3/4 bg-gray-200 rounded-full"></div>
                        <div className="h-4 w-1/2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Personalized content at your fingertips</h3>
                <p className="text-foreground/70 max-w-md">
                  Get your AI-generated newsletters delivered directly to your mobile device. Read on the go, save for later, or share with friends.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors w-full">
                    <Apple size={24} />
                    <div className="text-left">
                      <div className="text-xs font-light">Download on the</div>
                      <div className="text-lg font-semibold -mt-1">App Store</div>
                    </div>
                  </button>
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors w-full">
                    <Smartphone size={24} />
                    <div className="text-left">
                      <div className="text-xs font-light">Get it on</div>
                      <div className="text-lg font-semibold -mt-1">Google Play</div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
