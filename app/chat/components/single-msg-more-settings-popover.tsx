import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Ellipsis, Pencil, Share, Trash2 } from 'lucide-react';

export const SingleMsgMoreSettingsPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="rounded-md p-1 opacity-0 transition-opacity hover:bg-gray-200 group-hover:opacity-100">
          <Ellipsis className="size-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-32 rounded-2xl p-2 text-gray-600">
        <div className="flex flex-col gap-2.5">
          <Button
            size={'sm'}
            variant={'ghost'}
            className="justify-start rounded-xl text-sm"
          >
            <Share />
            Share
          </Button>
          <Button
            size={'sm'}
            variant={'ghost'}
            className="justify-start rounded-xl text-sm"
          >
            <Pencil />
            Rename
          </Button>
          <Button
            size={'sm'}
            variant={'ghost'}
            className="justify-start rounded-xl text-sm text-red-500"
          >
            <Trash2 />
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
