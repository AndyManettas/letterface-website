
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last Updated: March 16, 2025</p>
            
            <p>
              Welcome to Letterface! These Terms of Service ("Terms") govern your use of the Letterface application ("Service"), provided by Lifestyle Corp Pty Ltd ("we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
            </p>
            
            <h2>1. Use of the Service</h2>
            <ul>
              <li><strong>Eligibility</strong>: You must be at least 13 years old to use the Service. By using Letterface, you represent that you meet this age requirement.</li>
              <li><strong>Account</strong>: You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately if you suspect unauthorized use.</li>
              <li><strong>License</strong>: We grant you a non-exclusive, non-transferable, revocable license to use the Service for personal, non-commercial purposes, subject to these Terms.</li>
            </ul>
            
            <h2>2. User Content</h2>
            <ul>
              <li><strong>Customization</strong>: You may create and customize newsletters using prompts provided to our AI system. You are solely responsible for the content generated based on your prompts ("User Content").</li>
              <li><strong>Ownership</strong>: You retain ownership of your User Content. By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, store, and process your User Content solely to provide and improve the Service.</li>
              <li><strong>Prohibited Content</strong>: You may not use the Service to create, distribute, or store content that is illegal, harmful, abusive, defamatory, obscene, or violates the rights of others.</li>
            </ul>
            
            <h2>3. AI-Generated Content</h2>
            <p>
              The Service uses artificial intelligence to generate newsletters based on your prompts. We do not guarantee the accuracy, completeness, or appropriateness of AI-generated content. You are responsible for reviewing and approving all newsletters before they are sent.
            </p>
            
            <h2>4. Email Delivery</h2>
            <ul>
              <li><strong>Scheduling</strong>: You may schedule newsletters to be sent to your email inbox. We will use reasonable efforts to deliver newsletters on time but are not liable for delays or failures due to technical issues or third-party email services.</li>
              <li><strong>Compliance</strong>: You agree to comply with all applicable anti-spam laws (e.g., CAN-SPAM Act). Newsletters are for personal use only and may not be used to send unsolicited emails to others.</li>
            </ul>
            
            <h2>5. Intellectual Property</h2>
            <p>
              All rights, title, and interest in the Service (excluding User Content) belong to us or our licensors. You may not copy, modify, distribute, or reverse-engineer the Service.
            </p>
            
            <h2>6. Termination</h2>
            <p>
              We may suspend or terminate your access to the Service at our discretion, with or without notice, for violating these Terms or for any other reason. You may stop using the Service at any time.
            </p>
            
            <h2>7. Disclaimers</h2>
            <p>
              The Service is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or secure.
            </p>
            
            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the Service. Our total liability will not exceed $100.
            </p>
            
            <h2>9. Changes to the Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of significant changes via email or within the Service. Your continued use of the Service after such changes constitutes acceptance of the updated Terms.
            </p>
            
            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Australia, without regard to conflict of law principles.
            </p>
            
            <h2>11. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at contact@lifestylecorp.com.au.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
