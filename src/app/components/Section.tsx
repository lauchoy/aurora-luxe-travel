import type { ReactNode } from 'react';
import { cn } from '../lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  withContainer?: boolean;
}

export function Section({
  children,
  className,
  containerSize = 'lg',
  withContainer = true,
}: SectionProps) {
  const content = withContainer ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return <section className={cn('py-24', className)}>{content}</section>;
}