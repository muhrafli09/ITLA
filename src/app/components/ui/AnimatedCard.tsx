import React, { useRef, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function AnimatedCard({
  className,
  delay = 0,
  direction = 'up',
  children,
  ...props
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 30px, 0)';
      case 'down':
        return 'translate3d(0, -30px, 0)';
      case 'left':
        return 'translate3d(30px, 0, 0)';
      case 'right':
        return 'translate3d(-30px, 0, 0)';
      default:
        return 'translate3d(0, 30px, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'rounded-lg border border-border bg-card text-card-foreground shadow-sm',
        'transition-all duration-500 ease-out',
        'hover:shadow-md hover:border-primary/50',
        className
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : getInitialTransform(),
      }}
      {...props}
    >
      {children}
    </div>
  );
}
