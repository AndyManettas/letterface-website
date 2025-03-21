
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    content: "Letterface has completely changed how I stay informed. Instead of scrolling through dozens of sites each morning, I get one perfectly curated email with exactly what I need to know.",
    author: "Sarah Johnson",
    role: "Marketing Director"
  },
  {
    content: "I've tried other newsletter services, but none match the personalization level of Letterface. It's like having my own personal researcher working around the clock.",
    author: "Michael Chen",
    role: "Software Engineer"
  },
  {
    content: "Setting up Letterface took me less than a minute, and the quality of content I receive is outstanding. The AI understands exactly what I'm looking for.",
    author: "Emma Rodriguez",
    role: "Healthcare Professional"
  },
  {
    content: "As a busy entrepreneur, I don't have time to keep up with industry news. Letterface delivers the perfect summary directly to my inbox, saving me hours each week.",
    author: "David Kim",
    role: "Startup Founder"
  },
  {
    content: "The ability to customize both the content and delivery schedule makes Letterface incredibly valuable. It adapts to my changing interests seamlessly.",
    author: "Olivia Thompson",
    role: "Research Analyst"
  },
  {
    content: "I'm amazed at how well Letterface captures my interests. It's introduced me to articles and insights I would have missed otherwise.",
    author: "James Wilson",
    role: "Creative Director"
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
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
    
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    testimonialItems.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      testimonialItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by thousands of users</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Hear from our community about how Letterface has transformed their information consumption.
          </p>
        </div>
        
        <div 
          ref={testimonialsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "testimonial-item opacity-0 bg-background rounded-xl p-6 shadow-sm border border-border flex flex-col h-full transition-all duration-300 hover:shadow-md hover:border-primary/20 group",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/30 group-hover:text-primary/50 transition-colors">
                  <path d="M10.667 13.333H5.33366C5.33366 8 8.00033 6.66667 10.0003 6C10.667 6.66667 9.33366 9.33333 10.667 10.6667C12.0003 12 15.3337 11.3333 15.3337 15.3333C15.3337 19.3333 12.0003 20 10.667 20C9.33366 20 6.66699 19.3333 6.66699 16C6.66699 12.6667 10.667 13.333 10.667 13.333Z" fill="currentColor"/>
                  <path d="M26.6667 13.333H21.3334C21.3334 8 24.0001 6.66667 26.0001 6C26.6667 6.66667 25.3334 9.33333 26.6667 10.6667C28.0001 12 31.3334 11.3333 31.3334 15.3333C31.3334 19.3333 28.0001 20 26.6667 20C25.3334 20 22.6667 19.3333 22.6667 16C22.6667 12.6667 26.6667 13.333 26.6667 13.333Z" fill="currentColor"/>
                </svg>
              </div>
              
              <p className="text-foreground/80 mb-6 flex-grow">
                {testimonial.content}
              </p>
              
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
