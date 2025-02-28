import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ChatIcon } from '@/icons/chat-icon';
import { SearchIcon } from '@/icons/search-icon';
import { Plus } from 'lucide-react';
import { AvatarMenu } from './avatar-menu';
import { SingleMsgMoreSettingsPopover } from './single-msg-more-settings-popover';

const messages = [
  'When was the current chairman of NNPC appointed?',
  'When was the current chairman of NNPC appointed?',
  'When was the current chairman of NNPC appointed?',
];

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
      <div className="mt-6">
        <h3 className="px-8 text-sm font-medium text-gray-500">Today</h3>
        <div className="mt-1 space-y-1.5 px-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-between rounded-lg px-4 py-2.5 hover:bg-gray-100"
            >
              <button className="flex w-[85%] items-center gap-2.5 overflow-hidden whitespace-nowrap text-start">
                <ChatIcon className="shrink-0" />
                <span className="">{message}</span>
              </button>
              <SingleMsgMoreSettingsPopover />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 w-full cursor-pointer px-8">
        <AvatarMenu />
      </div>
    </aside>
  );
};
