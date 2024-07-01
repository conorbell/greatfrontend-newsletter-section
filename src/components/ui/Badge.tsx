import { cva } from 'class-variance-authority';
import { cn } from '../../utils/utils';

export interface BadgeProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'neutral' | 'error' | 'warning' | 'success' | 'brand';
  className?: string;
  children?: React.ReactNode;
}

const badgeVariants = cva(
  //styles that will always be applied
  'flex justify-center items-center border border-solid rounded-full p-auto',
  {
    variants: {
      variant: {
        neutral: 'bg-gray-50 border-[#e6e6e6] text-neutral-600',
        error: 'bg-red-50 border-red-200 text-red-600',
        warning: 'bg-amber-50 border-amber-50 text-amber-700',
        success: 'bg-green-50 border-green-200 text-green-700',
        brand: 'bg-indigo-50 border-indigo-200 text-indigo-700',
      },
      size: {
        small: 'text-xs h-5 leading-4 py-0.5 px-1.5',
        medium: 'text-sm h-6  leading-5 py-0.5 px-2',
        large: 'text-sm h-7 leading-5 py-1 px-2.5 ',
      },
      defaultVariants: {
        variant: 'neutral',
        size: 'medium',
      },
    },
  }
);

export default function Badge({
  size,
  variant,
  className,
  ...props
}: BadgeProps) {
  console.log('variant in badge', variant);
  return (
    <div
      {...props}
      className={cn(badgeVariants({ variant, size }), className)}
    ></div>
  );
}
