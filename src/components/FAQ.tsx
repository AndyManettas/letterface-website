
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does Letterface generate newsletter content?",
    answer: "Letterface uses advanced AI language models to generate custom content based on your specific prompt and preferences. Our system searches for reliable, up-to-date information and crafts it into a coherent, personalized newsletter delivered straight to your inbox."
  },
  {
    question: "Can I customize the delivery schedule?",
    answer: "Absolutely! You can set your newsletter to be delivered daily, weekly, or at any custom interval that works for you. You can also specify the exact time of day you'd like to receive it."
  },
  {
    question: "What types of topics can I create newsletters about?",
    answer: "Letterface can create newsletters on virtually any topic - from industry news and market trends to niche hobbies and specific interests. If you can describe it in a prompt, our AI can generate content for it."
  },
  {
    question: "Is there a limit to how many newsletters I can create?",
    answer: "Currently there is a limit of 12 newsletters per paying account. In the future, different plans will offer different numbers of newsletters."
  },
  {
    question: "How accurate is the information in the newsletters?",
    answer: "Letterface strives for high accuracy by sourcing information from reliable sources. However, as with any AI system, occasional errors may occur. We're constantly improving our systems and appreciate feedback when you spot anything incorrect."
  },
  {
    question: "Can I edit or modify my newsletter settings after creation?",
    answer: "Yes, you can modify your newsletter prompt, delivery schedule, and other preferences at any time through your account dashboard. Changes will be applied to the next scheduled delivery."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Everything you need to know about Letterface and how it works.
          </p>
        </div>
        
        <div className="bg-background rounded-xl shadow-sm border border-border/60 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-secondary/30 font-medium text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-foreground/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
