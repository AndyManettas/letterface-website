
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Shield, Mail, BookOpen, UserCheck, Calendar, Copy, Fingerprint, AlertTriangle, RefreshCw, Scale } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">Terms of Service</h1>
            <p className="text-muted-foreground">Last Updated: March 16, 2025</p>
            <Separator className="mt-6 mb-8 mx-auto w-24 bg-primary/40 h-0.5" />
          </div>
          
          <Card className="mb-8 border border-primary/10 shadow-md">
            <CardContent className="pt-6">
              <p className="text-lg">
                Welcome to Letterface! These Terms of Service ("Terms") govern your use of the Letterface application ("Service"), 
                provided by Lifestyle Corp Pty Ltd ("we," "us," or "our"). By accessing or using the Service, you agree to be 
                bound by these Terms. If you do not agree, please do not use the Service.
              </p>
            </CardContent>
          </Card>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border/50 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="py-4 flex items-center gap-3 text-xl font-medium hover:no-underline">
                <UserCheck className="h-5 w-5 text-primary" />
                <span>Use of the Service</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 px-2">
                <ul className="space-y-3 list-disc pl-10">
                  <li><strong className="font-medium">Eligibility</strong>: You must be at least 13 years old to use the Service. By using Letterface, you represent that you meet this age requirement.</li>
                  <li><strong className="font-medium">Account</strong>: You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately if you suspect unauthorized use.</li>
                  <li><strong className="font-medium">License</strong>: We grant you a non-exclusive, non-transferable, revocable license to use the Service for personal, non-commercial purposes, subject to these Terms.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-border/50 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="py-4 flex items-center gap-3 text-xl font-medium hover:no-underline">
                <Copy className="h-5 w-5 text-primary" />
                <span>User Content</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 px-2">
                <ul className="space-y-3 list-disc pl-10">
                  <li><strong className="font-medium">Customization</strong>: You may create and customize newsletters using prompts provided to our AI system. You are solely responsible for the content generated based on your prompts ("User Content").</li>
                  <li><strong className="font-medium">Ownership</strong>: You retain ownership of your User Content. By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, store, and process your User Content solely to provide and improve the Service.</li>
                  <li><strong className="font-medium">Prohibited Content</strong>: You may not use the Service to create, distribute, or store content that is illegal, harmful, abusive, defamatory, obscene, or violates the rights of others.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-border/50 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="py-4 flex items-center gap-3 text-xl font-medium hover:no-underline">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>AI-Generated Content</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 px-2">
                <p className="pl-5">
                  The Service uses artificial intelligence to generate newsletters based on your prompts. We do not guarantee the accuracy, completeness, or appropriateness of AI-generated content. You are responsible for reviewing and approving all newsletters before they are sent.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-border/50 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="py-4 flex items-center gap-3 text-xl font-medium hover:no-underline">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Email Delivery</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 px-2">
                <ul className="space-y-3 list-disc pl-10">
                  <li><strong className="font-medium">Scheduling</strong>: You may schedule newsletters to be sent to your email inbox. We will use reasonable efforts to deliver newsletters on time but are not liable for delays or failures due to technical issues or third-party email services.</li>
                  <li><strong className="font-medium">Compliance</strong>: You agree to comply with all applicable anti-spam laws (e.g., CAN-SPAM Act). Newsletters are for personal use only and may not be used to send unsolicited emails to others.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-border/50 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="py-4 flex items-center gap-3 text-xl font-medium hover:no-underline">
                <Fingerprint className="h-5 w-5 text-primary" />
                <span>Intellectual Property</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 px-2">
                <p className="pl-5">
                  All rights, title, and interest in the Service (excluding User Content) belong to us or our licensors. You may not copy, modify, distribute, or reverse-engineer the Service.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border border-border/50 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="py-4 flex items-center gap-3 text-xl font-medium hover:no-underline">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span>Termination</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 px-2">
                <p className="pl-5">
                  We may suspend or terminate your access to the Service at our discretion, with or without notice, for violating these Terms or for any other reason. You may stop using the Service at any time.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border border-border/50 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="py-4 flex items-center gap-3 text-xl font-medium hover:no-underline">
                <Shield className="h-5 w-5 text-primary" />
                <span>Disclaimers</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 px-2">
                <p className="pl-5">
                  The Service is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or secure.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="border border-border/50 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="py-4 flex items-center gap-3 text-xl font-medium hover:no-underline">
                <Scale className="h-5 w-5 text-primary" />
                <span>Limitation of Liability</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 px-2">
                <p className="pl-5">
                  To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the Service. Our total liability will not exceed $100.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9" className="border border-border/50 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="py-4 flex items-center gap-3 text-xl font-medium hover:no-underline">
                <RefreshCw className="h-5 w-5 text-primary" />
                <span>Changes to the Terms</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 px-2">
                <p className="pl-5">
                  We may update these Terms from time to time. We will notify you of significant changes via email or within the Service. Your continued use of the Service after such changes constitutes acceptance of the updated Terms.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10" className="border border-border/50 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="py-4 flex items-center gap-3 text-xl font-medium hover:no-underline">
                <Scale className="h-5 w-5 text-primary" />
                <span>Governing Law</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 px-2">
                <p className="pl-5">
                  These Terms are governed by the laws of Australia, without regard to conflict of law principles.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-11" className="border border-border/50 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="py-4 flex items-center gap-3 text-xl font-medium hover:no-underline">
                <Mail className="h-5 w-5 text-primary" />
                <span>Contact Us</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 px-2">
                <p className="pl-5">
                  If you have questions about these Terms, please contact us at{' '}
                  <a href="mailto:contact@lifestylecorp.com.au" className="text-primary hover:underline">
                    contact@lifestylecorp.com.au
                  </a>.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
