import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils';
import { Experience } from '@/models';
import { Title, Paragraph, Pill } from '@/components';

const baseClass = 'flex flex-col gap-4';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function CardExperience({ experience, className }: ExperienceCardProps) {
  const { image, title, text, tags, link, altLink, time } = experience;

  return (
    <div
      className={cn(
        'flex flex-col gap-4 border-b p-4 border-slate-900/10 dark:border-slate-50/[0.1] ',
        className
      )}
    >
      <div>
        <div className="flex gap-3 items-center ">
          <Title size="medium" className="mt-auto">
            {title}
          </Title>
          {image && (
            <div className="h-[32px] w-auto inline-flex ml-auto mb-auto">
              <Image
                src={image.url}
                alt={image.alt}
                className="w-auto h-full"
                width={200}
                height={32}
              />
            </div>
          )}
        </div>
        {time && <Paragraph size="small">{time}</Paragraph>}
        <Paragraph size="small">{text}</Paragraph>
      </div>

      {tags && (
        <ul className="flex items-center gap-1 flex-wrap">
          {tags?.map((tag, index) => (
            <li key={index}>
              <Pill>{tag}</Pill>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
