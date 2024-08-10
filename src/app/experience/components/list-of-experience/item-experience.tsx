import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils';
import { Experience } from '@/models';
import { Title, Paragraph, Pill, CardBase } from '@/components';

interface ItemExperienceProps {
  experience: Experience;
  className?: string;
}

export function ItemExperience({ experience, className }: ItemExperienceProps) {
  const { image, title, text, tags, link, altLink, time } = experience;

  return (
    <CardBase className={cn(className)}>
      <div className="flex items-start pb-1">
        <div>
          <Title size="medium">{title}</Title>
          {time && (
            <Paragraph size="small" className="font-[500]">
              {time}
            </Paragraph>
          )}
        </div>

        {image?.url && (
          <div className="ml-auto bg-slate-800 inline-flex dark:bg-white/5 rounded-md overflow-hidden w-auto h-full p-[4px]">
            <div className="h-[24px] w-auto">
              <Image
                src={image.url}
                alt={image.alt || 'experience image'}
                className="w-full h-full"
                width={image.width || 24}
                height={image.height || 24}
              />
            </div>
          </div>
        )}
      </div>
      <Paragraph size="small" className="max-w-xl">
        {text}
      </Paragraph>

      {tags && (
        <ul className="flex items-center gap-1 flex-wrap pt-2">
          {tags?.map((tag, index) => (
            <li key={index}>
              <Pill>{tag}</Pill>
            </li>
          ))}
        </ul>
      )}
    </CardBase>
  );
}
