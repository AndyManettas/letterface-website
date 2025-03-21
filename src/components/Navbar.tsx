
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Apple, Smartphone } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
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
  }];
  
  return <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6", scrolled ? "glass shadow-sm backdrop-blur-lg" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-display text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">letterface</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">
                {link.name}
              </a>)}
          </div>
          <div className="flex space-x-2">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" leftIcon={<Apple size={16} />}>
                App Store
              </Button>
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" leftIcon={<Smartphone size={16} />}>
                Play Store
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn("fixed inset-0 z-40 bg-background glass-dark md:hidden flex flex-col pt-24 px-6 space-y-6 transform transition-transform duration-300 ease-in-out", isOpen ? "translate-x-0" : "translate-x-full")}>
        {navLinks.map(link => <a key={link.name} href={link.href} className="text-foreground/90 hover:text-primary py-3 border-b border-border/50 text-lg font-medium" onClick={toggleMenu}>
            {link.name}
          </a>)}
        <div className="flex space-x-2 w-full">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" size="sm" leftIcon={<Apple size={16} />} className="w-full justify-center">
              App Store
            </Button>
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" size="sm" leftIcon={<Smartphone size={16} />} className="w-full justify-center">
              Play Store
            </Button>
          </a>
        </div>
      </div>
    </nav>;
};

export default Navbar;
