import React from 'react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { PersonImage } from './person-image';

type Props = {
  isOutgoing: boolean;
  message: string;
  time: string;
  image?: string;
};

export const MessageItem = ({ isOutgoing, image, message, time }: Props) => {
  return (
    <div
      className={cn('max-w-[70%]', {
        'ml-auto': isOutgoing,
      })}
    >
      {!isOutgoing && (
        <PersonImage image={image ? image : '/images/avatar1.png'} size={24} />
      )}
      <div
        className={cn(
          'mt-[2px] max-w-fit break-words border bg-[#F3F3F3] px-[18px] py-[15.5px] font-medium text-[#222325]',
          {
            'rounded-e-[20px] rounded-tl-[20px]': !isOutgoing,
          },
          {
            'ml-auto rounded-s-[20px] rounded-tr-[20px] bg-white': isOutgoing,
          },
        )}
      >
        {message}
      </div>
      <p
        className={cn('mt-2 text-[10px] font-medium text-[#636363]', {
          'text-right': isOutgoing,
        })}
      >
        {format(new Date(time), 'h:mm a')}
      </p>
    </div>
  );
};
