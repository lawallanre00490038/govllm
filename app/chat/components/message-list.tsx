import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { MessageItem } from './message-item';

type Message = {
  message: string;
  createdAt: string;
  senderRole: string;
  isBroadcast: boolean;
};

type Props = {
  messages: Message[];
  riderImage?: string;
};

export const MessageList = ({ messages, riderImage }: Props) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (isInitialLoad && messages.length > 0) {
      scrollToBottom('instant');
      setIsInitialLoad(false);
    }
  }, [messages, isInitialLoad]);

  useEffect(() => {
    if (!isInitialLoad && messages.length > 0) {
      const shouldScroll =
        !showScrollButton ||
        (containerRef.current &&
          containerRef.current.scrollHeight - containerRef.current.scrollTop ===
            containerRef.current.clientHeight);

      if (shouldScroll) {
        scrollToBottom('smooth');
      }
    }
  }, [messages, showScrollButton, isInitialLoad]);

  useEffect(() => {
    setIsInitialLoad(true);
  }, [messages]);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollButton(!isNearBottom);
  };

  const sortedMessages = messages.sort((a, b) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  const groupByDate = (messages: Message[]) => {
    return messages.reduce((acc: { [key: string]: Message[] }, message) => {
      const date = new Date(message.createdAt).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(message);
      return acc;
    }, {});
  };

  const groupedMessages = groupByDate(sortedMessages);

  return (
    <div className="relative flex h-[365px] flex-col">
      <div
        className="flex-1 overflow-y-scroll overscroll-contain"
        ref={containerRef}
        onScroll={handleScroll}
      >
        <div className="flex min-h-full flex-col justify-end px-5 py-2">
          {Object.keys(groupedMessages).map((date) => (
            <div key={date}>
              <p className="my-2 text-center text-sm text-gray-100">{date}</p>
              <div className="space-y-3">
                {groupedMessages[date].map((msg, index) => (
                  <MessageItem
                    key={index}
                    message={msg.message}
                    time={msg.createdAt}
                    isOutgoing={
                      msg?.senderRole === 'PARTNER' || msg?.isBroadcast || false
                    }
                    image={riderImage}
                  />
                ))}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {showScrollButton && (
        <button
          onClick={() => scrollToBottom('smooth')}
          className="absolute bottom-5 right-5 flex size-10 items-center justify-center rounded-full border bg-white shadow-lg transition-colors hover:border-white hover:bg-gray-600"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};
