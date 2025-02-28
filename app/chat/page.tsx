import { Logo } from '@/components/logo';
import { SparklesIcon } from '@/icons/sparkles-icon';
import { Gem, ListTodo } from 'lucide-react';
import React from 'react';
import { Sidebar } from './components/sidebar';
import { MessageInput } from './components/message-input';
import { TemplateTray } from './components/template-tray';

const templates = {
  Tasks: {
    Icon: ListTodo,
    items: [
      'Summarize the key points of the latest city council meeting',
      'Evaluate the effectiveness of a new public health initiative',
      'Outline the steps for implementing a new recycling program',
    ],
  },
  Examples: {
    Icon: SparklesIcon,
    items: [
      'Summarize the key points of the latest city council meeting',
      'Evaluate the effectiveness of a new public health initiative',
      'Outline the steps for implementing a new recycling program',
    ],
  },
  'Special Tasks': {
    Icon: Gem,
    items: [
      'Develop a strategy for emergency response coordination',
      'Assess the needs of undeserved communities for social services',
      'Propose measures to enhance cybersecurity for government agencies',
    ],
  },
};

export default function Page() {
  return (
    <div>
      <Sidebar />
      <main className="relative ml-[348px] h-full px-16 pt-16">
        <div className="overflow-y-auto pb-[200px]">
          <div className="flex justify-center">
            <Logo className="h-[66px] w-[300px]" width={300} height={66} />
          </div>

          <div className="mt-20 grid grid-cols-3 gap-10">
            {Object.entries(templates).map(([key, value]) => (
              <TemplateTray key={key} {...value} title={key} />
            ))}
          </div>
        </div>
        <div className="fixed inset-x-0 bottom-8 ml-[348px]">
          <MessageInput />
        </div>
      </main>
    </div>
  );
}
