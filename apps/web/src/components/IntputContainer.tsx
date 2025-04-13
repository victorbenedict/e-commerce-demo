import { cn } from '@repo/ui/lib/utils';
import React from 'react';

export default function InputContainer({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('grid w-full items-center gap-1.5', className)} {...props}>
      {children}
    </div>
  );
}
