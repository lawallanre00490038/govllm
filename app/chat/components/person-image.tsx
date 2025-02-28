'use client';

import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@/lib/utils';

type Props = {
  image?: string;
  size: number;
  smSize?: number;
  className?: string;
};

export const PersonImage = ({ image, size, smSize, className }: Props) => {
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <Image
      src={image ?? '/user-placeholder.png'}
      width={smSize && matches ? smSize : size}
      height={smSize && matches ? smSize : size}
      alt="person"
      className={cn('shrink-0 rounded-full object-cover', className)}
      style={{
        height: `${smSize && matches ? smSize : size}px`,
        width: `${smSize && matches ? smSize : size}px`,
      }}
    />
  );
};
