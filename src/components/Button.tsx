
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 transition-all',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all',
    ghost: 'hover:bg-accent hover:text-accent-foreground transition-all',
  };

  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
