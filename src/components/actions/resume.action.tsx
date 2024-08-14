import React from 'react';
import { FileDown } from 'lucide-react';
import { Paragraph } from '@/components';

interface ResumeActionProps {
  link: string;
}

export function ResumeAction({ link }: ResumeActionProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="hover:underline grid grid-cols-[16px_1fr] gap-1"
    >
      <FileDown size={16} /> <Paragraph size="small">View Resume</Paragraph>
    </a>
  );
}
