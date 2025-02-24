import {
  LogOut,
  MonitorCog,
  Moon,
  Palette,
  Settings,
  Sun,
  Trash2,
  User,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

export function AvatarMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
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
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[275px]" align="start">
        <DropdownMenuItem>
          <User />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette />
            <span>Appearance</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Sun />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Moon />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MonitorCog />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem className="text-red-500">
          <Trash2 />
          <span>Delete All Chat</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
