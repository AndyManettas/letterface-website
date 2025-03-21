
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last updated: June 1, 2023</p>
            
            <h2>1. Introduction</h2>
            <p>
              At Letterface, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the service.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you:
            </p>
            <ul>
              <li>Register for an account</li>
              <li>Set up your newsletter preferences</li>
              <li>Interact with our customer service</li>
              <li>Respond to surveys or promotions</li>
            </ul>
            <p>
              This information may include:
            </p>
            <ul>
              <li>Your name and email address</li>
              <li>Your newsletter preferences and prompts</li>
              <li>Your subscription and billing information</li>
              <li>Your communication preferences</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Generate and deliver your personalized newsletters</li>
              <li>Process your subscriptions and send related information</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze usage and trends to improve your experience</li>
            </ul>
            
            <h2>4. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul>
              <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
              <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
              <li>To protect the rights, property, and safety of Letterface, our users, or others</li>
            </ul>
            
            <h2>5. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
            
            <h2>6. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
            </p>
            
            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request that we correct or update your personal information</li>
              <li>Request that we delete your personal information</li>
              <li>Object to our processing of your personal information</li>
              <li>Request the restriction of our processing of your personal information</li>
              <li>Request a copy of your personal information in a portable format</li>
            </ul>
            
            <h2>8. Changes to this Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@letterface.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
