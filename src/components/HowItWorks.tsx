import React, { useEffect, useRef } from 'react';
import { PenSquare, Send, MailOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: <PenSquare className="text-white" size={20} />,
    title: "Define Your Content",
    description: 'Write a simple prompt like "Summarize the most important tech news in the last 24 hours" or "Send me weekly updates on renewable energy advancements."',
    color: "bg-blue-500",
    textAlign: "text-right" // Right-align this description
  },
  {
    icon: <Send className="text-white" size={20} />,
    title: "Choose Your Schedule",
    description: "Select how often you want to receive your newsletter—daily, weekly, or any custom schedule that fits your needs.",
    color: "bg-indigo-500",
    textAlign: "text-left" // Keep this left-aligned
  },
  {
    icon: <MailOpen className="text-white" size={20} />,
    title: "Receive & Enjoy",
    description: "Your personalized newsletter arrives in your inbox automatically, filled with relevant, AI-generated content tailored to your interests.",
    color: "bg-primary",
    textAlign: "text-right" // Right-align this description
  }
];

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      stepItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple setup, powerful results</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Getting started with Letterface takes less than a minute. Just three simple steps to your personalized newsletter.
          </p>
        </div>
        
        <div ref={stepsRef} className="relative">
          {/* Connect line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "step-item opacity-0 relative md:grid md:grid-cols-2 gap-8 items-center",
                  index % 2 === 1 ? "md:rtl" : ""
                )}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={cn(
                  "flex flex-col mb-6 md:mb-0",
                  // Apply text alignment based on the step definition
                  step.textAlign,
                  // Keep other alignment classes
                  index % 2 === 1 ? "md:items-start" : "md:items-end",
                  "md:ltr"
                )}>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70 max-w-md">{step.description}</p>
                </div>
                
                <div className="relative flex md:justify-center">
                  <div className={cn(
                    "absolute left-1/2 top-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full blur-2xl opacity-20 -translate-x-1/2 -translate-y-1/2 z-0",
                    step.color
                  )}></div>
                  
                  <div className="relative glass shadow-md rounded-xl p-6 border border-white/20 max-w-sm z-10">
                    <div className={cn(
                      "absolute -top-5 left-4 w-8 h-8 rounded-full flex items-center justify-center",
                      step.color
                    )}>
                      {step.icon}
                    </div>
                    
                    {index === 0 && (
                      <div className="flex flex-col space-y-3">
                        <div className="text-sm font-medium">Newsletter Prompt</div>
                        <div className="bg-secondary/50 rounded-lg p-3 text-sm">
                          Summarize the most important tech news in the last 24 hours
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="flex flex-col space-y-3">
                        <div className="text-sm font-medium">Delivery Schedule</div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 rounded-full bg-primary"></div>
                            <div className="text-sm">Every weekday at 8:00 AM</div>
                          </div>
                          <div className="h-px bg-border"></div>
                          <div className="text-xs text-foreground/60">Customize timing to fit your routine</div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="flex flex-col space-y-3">
                        <div className="text-sm font-medium">Your Inbox</div>
                        <div className="bg-secondary/50 rounded-lg p-3 space-y-2">
                          <div className="text-sm font-semibold">Today's Tech Digest</div>
                          <div className="h-px bg-border"></div>
                          <div className="text-xs text-foreground/70">
                            AI-generated content tailored to your interests
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
