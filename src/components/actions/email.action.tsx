'use client';
import React from 'react';
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
    <div className="flex items-center gap-1">
      <div className="grid grid-cols-[16px_1fr] items-center gap-1">
        <Mail size={16} />

        <Paragraph size="small">{email}</Paragraph>
      </div>

      <button className="p-0" onClick={copyClipboard}>
        <Clipboard size={16} />
      </button>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: '',
          duration: 5000,
        }}
      />
    </div>
  );
}
