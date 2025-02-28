import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  ChevronRight,
  LogOut,
  Palette,
  Settings,
  Trash2,
  User,
} from 'lucide-react';
import Image from 'next/image';

export const MoreSettingsPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="mt-4 flex h-[62px] w-full items-center gap-2.5 rounded-full border border-input bg-white px-2.5 shadow">
          <Image
            src="/pretty-lady.jpeg"
            alt="profile"
            width={36}
            height={36}
            className="size-9 shrink-0 rounded-full object-cover"
          />
          <span className="text-sm font-medium">Adeleke Sarah</span>

          <Button variant={'outline'} className="ml-auto h-9 w-9">
            <LogOut />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="rounded-2xl p-2 text-gray-600">
        <div className="flex flex-col gap-2.5">
          <Button
            size={'sm'}
            variant={'ghost'}
            className="justify-start rounded-xl text-sm"
          >
            <User />
            Profile
          </Button>
          <Button
            size={'sm'}
            variant={'ghost'}
            className="justify-start rounded-xl text-sm"
          >
            <Settings />
            Settings
          </Button>
          <Button
            size={'sm'}
            variant={'ghost'}
            className="justify-start rounded-xl text-sm"
          >
            <Palette />
            Appearance
            <ChevronRight className="ml-auto" />
          </Button>
          <Button
            size={'sm'}
            variant={'ghost'}
            className="justify-start rounded-xl text-sm"
          >
            <Trash2 />
            Delete All Chats
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
