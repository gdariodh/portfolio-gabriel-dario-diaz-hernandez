import React from 'react';
import Image from 'next/image';
import { cn, truncateText } from '@/utils';
import { Experience } from '@/models';
import { Title, Paragraph, Pill, CardBase } from '@/components';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ItemExperienceProps {
  experience: Experience;
  className?: string;
}

export function ItemExperience({ experience, className }: ItemExperienceProps) {
  const { image, title, text, tags, link, altLink, time, slug, type } =
    experience;

  const experienceLink = `/experience/${type}/${slug}`;
  return (
    <Link href={experienceLink}>
      <CardBase
        className={cn(
          className,
          'dark:hover:bg-slate-900 dark:hover:border-primary transition-colors ease-in duration-200'
        )}
      >
        <div className="flex relative">
          <div className="flex gap-3">
            <div>
              <Title size="medium">{title}</Title>
              {time && time?.length >= 0 && (
                <Paragraph size="small" className="font-[500]">
                  {time}
                </Paragraph>
              )}
            </div>

            <div className="mb-auto">
              {image?.url && (
                <div>
                  <div className="bg-slate-800 inline-flex dark:bg-white/5 rounded-md overflow-hidden w-auto h-full p-[4px]">
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
                </div>
              )}
            </div>
          </div>

          <div className="absolute right-0">
            <Link href={`/experience`}>
              <ExternalLink size={16} className="ml-1 hover:scale-110" />
            </Link>
          </div>
        </div>

        <Paragraph size="small" className="max-w-xl py-2">
          {text[0]}
        </Paragraph>

        {tags && (
          <ul className="flex items-center gap-1 flex-wrap">
            {tags?.slice(0, 8)?.map((tag, index) => (
              <li key={index}>
                <Pill>{tag}</Pill>
              </li>
            ))}
          </ul>
        )}
      </CardBase>
    </Link>
  );
}
