import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Container({ children, className, size = 'lg' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-9xl',
    full: 'max-w-full',
  };

  return <div className={cn('mx-auto w-full px-4', sizes[size], className)}>{children}</div>;
}