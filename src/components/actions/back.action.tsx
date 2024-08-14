import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackActionProps {
  href?: string;
}

export function BackAction({ href = '/' }: BackActionProps) {
  return (
    <div className="pb-4" translate="no">
      <Link href={href}>
        <div className="flex gap-1 items-center hover:underline">
          <ArrowLeft size={24} /> <span className="text-sm">Back</span>
        </div>
      </Link>
    </div>
  );
}
