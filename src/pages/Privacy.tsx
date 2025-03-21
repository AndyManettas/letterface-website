import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Shield, User, FileText, Share2, Lock, Clock, Settings, Globe, UserMinus, RefreshCw, MessageSquare } from "lucide-react";
const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">Last Updated: March 16, 2025</p>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-base">
                At Letterface, we value your privacy. This Privacy Policy explains how we collect, use, 
                and protect your personal information when you use the Letterface application ("Service"). 
                By using the Service, you agree to the practices described in this Policy.
              </p>
            </div>
            
            <Separator className="my-6" />
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <User className="mr-3 h-5 w-5 text-primary" />
                    <span>1. Information We Collect</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <ul className="space-y-4 list-disc list-outside ml-5">
                    <li><strong>Account Information</strong>: When you sign up, we collect your email address and any other information you provide (e.g., name).</li>
                    <li><strong>User Content</strong>: We collect the prompts you submit to generate newsletters and the resulting AI-generated content.</li>
                    <li><strong>Usage Data</strong>: We may collect information about how you interact with the Service, such as scheduling preferences, IP address, device type, and browsing activity.</li>
                    <li><strong>Email Delivery</strong>: We process your email address to send newsletters as scheduled.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <FileText className="mr-3 h-5 w-5 text-primary" />
                    <span>2. How We Use Your Information</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <ul className="space-y-4 list-disc list-outside ml-5">
                    <li><strong>To Provide the Service</strong>: We use your information to generate, schedule, and deliver newsletters to your inbox.</li>
                    <li><strong>To Improve the Service</strong>: We analyze usage data and User Content to enhance our AI and overall functionality.</li>
                    <li><strong>To Communicate</strong>: We may send you service-related emails (e.g., updates, account notifications). With your consent, we may also send promotional emails.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Share2 className="mr-3 h-5 w-5 text-primary" />
                    <span>3. How We Share Your Information</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <ul className="space-y-4 list-disc list-outside ml-5">
                    <li><strong>Service Providers</strong>: We may share your information with third-party providers (e.g., email delivery services, cloud hosting) to operate the Service. These providers are bound by confidentiality obligations.</li>
                    <li><strong>Legal Requirements</strong>: We may disclose your information if required by law or to protect our rights, safety, or property.</li>
                    <li><strong>No Sale</strong>: We do not sell your personal information to third parties.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Lock className="mr-3 h-5 w-5 text-primary" />
                    <span>4. Data Security</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    We use reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. 
                    However, no system is completely secure, and we cannot guarantee absolute security.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Clock className="mr-3 h-5 w-5 text-primary" />
                    <span>5. Data Retention</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    We retain your account information and User Content for as long as your account is active or as needed to provide the Service. 
                    You may delete your account at any time, after which we will delete your data within 12 months, except as required by law.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Settings className="mr-3 h-5 w-5 text-primary" />
                    <span>6. Your Choices</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <ul className="space-y-4 list-disc list-outside ml-5">
                    <li><strong>Account Management</strong>: You can update or delete your account via the Service.</li>
                    <li><strong>Email Preferences</strong>: You can opt out of promotional emails by following the unsubscribe instructions in those emails. Service-related emails are mandatory.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <Globe className="mr-3 h-5 w-5 text-primary" />
                    <span>7. International Users</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    The Service is hosted in Australia. If you are outside this region, your data may be transferred to and processed in this location, subject to local laws.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <UserMinus className="mr-3 h-5 w-5 text-primary" />
                    <span>8. Children's Privacy</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    The Service is not intended for users under 13. We do not knowingly collect personal information from children under 13. 
                    If we learn of such collection, we will delete it.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <RefreshCw className="mr-3 h-5 w-5 text-primary" />
                    <span>9. Changes to This Policy</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    We may update this Privacy Policy from time to time. We will notify you of significant changes via email or within the Service. 
                    Your continued use of the Service after such changes constitutes acceptance of the updated Policy.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10" className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  <div className="flex items-center">
                    <MessageSquare className="mr-3 h-5 w-5 text-primary" />
                    <span>10. Contact Us</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-9">
                  <p className="mb-2">
                    If you have questions about this Privacy Policy, please contact us at 
                    <a href="mailto:contact@lifestylecorp.com.au" className="text-primary hover:underline ml-1">contact@lifestylecorp.com.au</a>.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Privacy;