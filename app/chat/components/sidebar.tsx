import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ChatIcon } from '@/icons/chat-icon';
import { SearchIcon } from '@/icons/search-icon';
import { Plus } from 'lucide-react';
import { AvatarMenu } from './avatar-menu';

export const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-3 top-3 h-full w-[348px] rounded-t-[26px] bg-white shadow-md">
      <div className="px-8 py-6">
        <Logo />
        <div className="mt-8 flex items-center gap-2.5">
          <Button className="w-full">
            <Plus />
            New Chat
          </Button>
          <Button>
            <SearchIcon />
          </Button>
        </div>
      </div>
      <div className="mt-4 pl-8 pr-12">
        <h3 className="text-sm font-medium text-gray-500">Today</h3>
        <div className="">
          <button className="flex items-center gap-2.5 py-[15px] text-start">
            <ChatIcon className="shrink-0" />
            <span className="line-clamp-1">
              When was the current chairman of NNPC appointed?
            </span>
          </button>
          <button className="flex items-center gap-2.5 py-[15px] text-start">
            <ChatIcon className="shrink-0" />
            <span className="line-clamp-1">
              When was the current chairman of NNPC appointed?
            </span>
          </button>
          <button className="flex items-center gap-2.5 py-[15px] text-start">
            <ChatIcon className="shrink-0" />
            <span className="line-clamp-1">
              When was the current chairman of NNPC appointed?
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 w-full cursor-pointer px-8">
        <AvatarMenu />
      </div>
    </aside>
  );
};
