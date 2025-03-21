
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/70 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-display font-bold">Letterface</span>
            </div>
            <p className="text-foreground/70 max-w-md mb-6">
              Letterface is an AI-powered newsletter service that delivers personalized content directly to your inbox, exactly when you want it.
            </p>
            <p className="text-sm text-foreground/60">
              © {currentYear} Letterface. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#features" className="text-foreground/70 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-foreground/70 hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-foreground/70 hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
