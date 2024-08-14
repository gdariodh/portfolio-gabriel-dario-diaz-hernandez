import { ImagePrismic } from '@/models';
import Image from 'next/image';
import React from 'react';

interface ProjectImageProps {
  image: ImagePrismic;
}

export function ProjectImage({ image }: ProjectImageProps) {
  return (
    <div className="hidden lg:block bg-slate-800 dark:bg-white/5 rounded-md overflow-hidden p-[4px]">
      <div className="h-[24px] max-h-[24px] w-auto">
        <Image
          src={image.url}
          alt={image.alt || 'experience image'}
          className="w-full h-full"
          width={image.width || 24}
          height={image.height || 24}
        />
      </div>
    </div>
  );
}
