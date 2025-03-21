
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Shield, 
  UserCheck, 
  Copy, 
  Bot, 
  Mail, 
  Scale, 
  XCircle, 
  AlertTriangle, 
  RefreshCw, 
  Globe,
  MessageSquare
} from "lucide-react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">Terms of Service</h1>
            <p className="text-muted-foreground mb-6">Last Updated: March 16, 2025</p>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg">
                Welcome to Letterface! These Terms of Service ("Terms") govern your use of the Letterface application ("Service"), 
                provided by Lifestyle Corp Pty Ltd ("we," "us," or "our"). By accessing or using the Service, 
                you agree to be bound by these Terms. If you do not agree, please do not use the Service.
              </p>
            </div>
            
            <Separator className="my-6" />
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Shield className="mr-3 h-5 w-5 text-primary" />
                    <span>1. Use of the Service</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <ul className="space-y-4 list-disc list-outside ml-5">
                    <li><strong>Eligibility</strong>: You must be at least 13 years old to use the Service. By using Letterface, you represent that you meet this age requirement.</li>
                    <li><strong>Account</strong>: You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately if you suspect unauthorized use.</li>
                    <li><strong>License</strong>: We grant you a non-exclusive, non-transferable, revocable license to use the Service for personal, non-commercial purposes, subject to these Terms.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Copy className="mr-3 h-5 w-5 text-primary" />
                    <span>2. User Content</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <ul className="space-y-4 list-disc list-outside ml-5">
                    <li><strong>Customization</strong>: You may create and customize newsletters using prompts provided to our AI system. You are solely responsible for the content generated based on your prompts ("User Content").</li>
                    <li><strong>Ownership</strong>: You retain ownership of your User Content. By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, store, and process your User Content solely to provide and improve the Service.</li>
                    <li><strong>Prohibited Content</strong>: You may not use the Service to create, distribute, or store content that is illegal, harmful, abusive, defamatory, obscene, or violates the rights of others.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Bot className="mr-3 h-5 w-5 text-primary" />
                    <span>3. AI-Generated Content</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    The Service uses artificial intelligence to generate newsletters based on your prompts. We do not guarantee the accuracy, completeness, or appropriateness of AI-generated content. You are responsible for reviewing and approving all newsletters before they are sent.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-primary" />
                    <span>4. Email Delivery</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <ul className="space-y-4 list-disc list-outside ml-5">
                    <li><strong>Scheduling</strong>: You may schedule newsletters to be sent to your email inbox. We will use reasonable efforts to deliver newsletters on time but are not liable for delays or failures due to technical issues or third-party email services.</li>
                    <li><strong>Compliance</strong>: You agree to comply with all applicable anti-spam laws (e.g., CAN-SPAM Act). Newsletters are for personal use only and may not be used to send unsolicited emails to others.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Scale className="mr-3 h-5 w-5 text-primary" />
                    <span>5. Intellectual Property</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    All rights, title, and interest in the Service (excluding User Content) belong to us or our licensors. You may not copy, modify, distribute, or reverse-engineer the Service.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <XCircle className="mr-3 h-5 w-5 text-primary" />
                    <span>6. Termination</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    We may suspend or terminate your access to the Service at our discretion, with or without notice, for violating these Terms or for any other reason. You may stop using the Service at any time.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <AlertTriangle className="mr-3 h-5 w-5 text-primary" />
                    <span>7. Disclaimers</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    The Service is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or secure.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Shield className="mr-3 h-5 w-5 text-primary" />
                    <span>8. Limitation of Liability</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the Service. Our total liability will not exceed $100.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <RefreshCw className="mr-3 h-5 w-5 text-primary" />
                    <span>9. Changes to the Terms</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    We may update these Terms from time to time. We will notify you of significant changes via email or within the Service. Your continued use of the Service after such changes constitutes acceptance of the updated Terms.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Globe className="mr-3 h-5 w-5 text-primary" />
                    <span>10. Governing Law</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    These Terms are governed by the laws of Australia, without regard to conflict of law principles.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-11" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <MessageSquare className="mr-3 h-5 w-5 text-primary" />
                    <span>11. Contact Us</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    If you have questions about these Terms, please contact us at <a href="mailto:contact@lifestylecorp.com.au" className="text-primary hover:underline">contact@lifestylecorp.com.au</a>.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
