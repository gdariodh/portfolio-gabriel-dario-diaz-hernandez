'use client';
import React from 'react';
import { truncateText } from '@/utils';
import { toast, Toaster } from 'react-hot-toast';
import { Clipboard, Mail } from 'lucide-react';
import { Paragraph } from '@/components';

interface EmailActionProps {
  email: string;
}

export function EmailAction({ email }: EmailActionProps) {
  const copyClipboard = () => {
    navigator.clipboard.writeText(email);
    toast.success('Email copied!');
  };

  return (
    <button
      className="flex items-center gap-1 hover:underline"
      onClick={copyClipboard}
    >
      <div className="grid grid-cols-[16px_1fr] items-center gap-1">
        <Mail size={16} />

        <Paragraph size="small" className="block lg:hidden">
          Copy Email
        </Paragraph>

        <Paragraph size="small" className="hidden lg:block">
          <span>{truncateText(email, 50)}</span>
        </Paragraph>
      </div>

      <Clipboard size={16} />

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: '',
          duration: 5000,
        }}
      />
    </button>
  );
}
