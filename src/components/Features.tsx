
import React, { useEffect, useRef } from 'react';
import { Sparkles, Clock, Zap, Feather, Palette, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Sparkles className="text-primary" size={32} />,
    title: "AI-Powered Content",
    description: "Letterface uses advanced AI to create custom newsletters on any topic you choose.",
  },
  {
    icon: <Clock className="text-primary" size={32} />,
    title: "Scheduled Delivery",
    description: "Set your ideal delivery schedule - daily, weekly, or any interval that works for you.",
  },
  {
    icon: <Zap className="text-primary" size={32} />,
    title: "Instant Setup",
    description: "Get started in seconds with a simple prompt. No complex configuration needed.",
  },
  {
    icon: <Feather className="text-primary" size={32} />,
    title: "Natural Language",
    description: "Define your content needs in plain English - just like you'd explain to a person.",
  },
  {
    icon: <Palette className="text-primary" size={32} />,
    title: "Customizable Style",
    description: "Adjust the tone, length, and style to match your preferences and brand.",
  },
  {
    icon: <Lock className="text-primary" size={32} />,
    title: "Private & Secure",
    description: "Your data and preferences are kept secure and never shared with third parties.",
  },
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
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
    
    const featuresItems = document.querySelectorAll('.feature-item');
    featuresItems.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      featuresItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="features" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need in a newsletter service</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Letterface combines powerful AI with simple controls to give you perfectly tailored newsletters without the hassle.
          </p>
        </div>
        
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "feature-item opacity-0 bg-background rounded-xl p-6 shadow-sm border border-border/60 transition duration-300 hover:shadow-md hover:border-primary/20 flex flex-col h-full",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
