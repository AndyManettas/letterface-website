
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobile) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);
  
  const navLinks = [{
    name: 'Features',
    href: '/#features'
  }, {
    name: 'How It Works',
    href: '/#how-it-works'
  }, {
    name: 'Testimonials',
    href: '/#testimonials'
  }, {
    name: 'FAQ',
    href: '/#faq'
  }, {
    name: 'Contact',
    href: '/contact'  // Updated to use the full route
  }];
  
  return (
    <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6", scrolled ? "glass shadow-sm backdrop-blur-lg" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <Link to="/" className="flex items-center space-x-2 z-[60]">
          <span className="font-display text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">letterface</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">
                {link.name}
              </a>)}
          </div>
          <div className="flex space-x-3">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <img src="/app-store-button.svg" alt="App Store" className="h-10 w-auto transition-opacity hover:opacity-90" />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src="/play-store-button.svg" alt="Play Store" className="h-10 w-auto transition-opacity hover:opacity-90" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground z-[60]" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[55] md:hidden" onClick={toggleMenu} />
      )}

      {/* Mobile Menu Content */}
      <div 
        className={cn(
          "fixed inset-0 top-0 pt-24 px-6 space-y-6 bg-background z-[55] transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 pt-4">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-foreground/90 hover:text-primary py-3 border-b border-border/50 text-lg font-medium" 
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col space-y-3 w-full pt-4">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex justify-center">
              <img src="/app-store-button.svg" alt="App Store" className="h-12 w-auto" />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex justify-center">
              <img src="/play-store-button.svg" alt="Play Store" className="h-12 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
