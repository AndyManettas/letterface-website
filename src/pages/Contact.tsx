import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      toast.error("Please accept the terms and conditions before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Using Formspree for form submission
      const formData = new FormData(formRef.current as HTMLFormElement);
      const response = await fetch('https://formspree.io/f/xjkyeybq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        formRef.current?.reset();
        setAcceptedTerms(false);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our newsletters or need help with your account? 
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </div>
          
          <div className="bg-card rounded-xl shadow-sm p-6 md:p-8 border border-border/40">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Your email address" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="What is this regarding?" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="How can we help you?" 
                  className="min-h-32" 
                  required 
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptedTerms} 
                  onCheckedChange={() => setAcceptedTerms(!acceptedTerms)} 
                />
                <Label htmlFor="terms" className="text-sm font-normal">
                  I agree to the processing of my personal data in accordance with the <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                </Label>
              </div>
              
              {/* Hidden field for recipient email - optional for Formspree */}
              <input type="hidden" name="_replyto" value="contact@lifestylecorp.com.au" />
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting || !acceptedTerms}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="animate-spin mr-2 h-4 w-4" />
                      Sending...
                    </span>
                  ) : "Send Message"}
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 text-center">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Email Us Directly</h2>
              <a href="mailto:contact@lifestylecorp.com.au" className="text-primary hover:underline">
                contact@lifestylecorp.com.au
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
