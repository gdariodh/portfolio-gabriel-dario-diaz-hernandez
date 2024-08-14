import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackActionProps {
  href?: string;
}

export default function BackAction({ href = '/' }: BackActionProps) {
  return (
    <div>
      <Link href={href}>
        <div className="flex gap-1 items-center hover:underline pb-3">
          <ArrowLeft size={24} /> <span className="text-sm">Back</span>
        </div>
      </Link>
    </div>
  );
}
