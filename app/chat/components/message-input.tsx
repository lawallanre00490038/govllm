'use client';

import { ArrowUpFromDot, Globe, Mic, Paperclip } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface MessageInputProps {
  onSend?: (message: string) => void;
  placeholder?: string;
  maxHeight?: number;
  minHeight?: number;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  onSend,
  placeholder = 'Type a message...',
  maxHeight = 150,
  minHeight = 60,
}) => {
  const [message, setMessage] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustHeight = useCallback((): void => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = `${Math.max(minHeight, newHeight)}px`;
  }, [maxHeight, minHeight]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  const handleSubmit = (): void => {
    console.log('handleSubmit');
    const trimmedMessage = message.trim();

    if (trimmedMessage) {
      onSend?.(trimmedMessage);
      setMessage('');

      if (textareaRef.current) {
        textareaRef.current.style.height = `${minHeight}px`;
      }
    }
  };

  const handleEnterPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
  ): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [message, maxHeight, minHeight, adjustHeight]);

  return (
    <div className="mx-auto mt-[100px] max-w-3xl rounded-[30px] border bg-white">
      <form
        onSubmit={handleSubmit}
        className="relative mx-auto flex w-full items-end gap-2 pt-5"
      >
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleChange}
          onKeyDown={handleEnterPress}
          placeholder={placeholder}
          className="flex h-[58px] w-full resize-none items-center overflow-y-auto overscroll-contain rounded-t-[30px] px-4 text-sm outline-none placeholder:text-gray-300 focus:ring-0 focus:ring-primary"
          style={{
            height: `${minHeight}px`,
            minHeight: `${minHeight}px`,
            maxHeight: `${maxHeight}px`,
          }}
          rows={1}
        />
      </form>
      <div className="flex w-full items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <button className="rounded-[20px] border p-2 hover:bg-gray-100">
            <Paperclip size={20} />
          </button>
          <button className="flex items-center gap-2 rounded-[20px] border p-2 text-sm hover:bg-gray-100">
            <Globe size={20} />
            <span>Search</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-[20px] p-2 hover:bg-gray-100">
            <Mic size={20} />
          </button>
          <button
            onClick={handleSubmit}
            disabled={!message.trim()}
            className="rounded-[20px] border border-primary-foreground bg-primary-foreground p-2 disabled:opacity-50"
          >
            <ArrowUpFromDot size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
