'use client';
import React from 'react';

import { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/utils';

interface ToastProps {
  variant: 'neutral' | 'error' | 'warning' | 'success' | 'brand';
  toastMessage: string;
  duration?: number;
  children?: React.ReactNode;
}

const toastVariants = cva(
  //styles that will always be applied
  'flex self-center items-center gap-3 pl-1 pr-2.5 py-1 rounded-xl animate-slide-in',
  {
    variants: {
      variant: {
        neutral: 'bg-gray-50 border-[#e6e6e6] text-neutral-600',
        error: 'bg-red-50 border-red-200 text-red-600',
        warning: 'bg-amber-50 border-amber-50 text-amber-700',
        success: 'bg-green-50 border-green-200 text-green-700',
        brand: 'bg-indigo-50 border-indigo-200 text-indigo-700',
      },

      defaultVariants: {
        variant: 'neutral',
      },
    },
  }
);

export default function Toast({
  variant,
  className,
  duration,
  children,
  ...props
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);
  console.log('children', children);

  if (!visible) return null;

  return (
    <div {...props} className={cn(toastVariants({ variant }), className)}>
      {children}
    </div>
  );
}
