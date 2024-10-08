import React from 'react';
import { truncateText } from '@/utils';
import { Experience } from '@/models';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Title, Paragraph, Pill, CardBase, ProjectImage } from '@/components';

const MAX_TAGS = 8;

interface ItemExperienceProps {
  experience: Experience;
}

export function ItemExperience({ experience }: ItemExperienceProps) {
  const { image, title, text, tags, time, slug, type } = experience;

  const experienceLink = `/experience/${type}/${slug}`;

  return (
    <Link href={experienceLink}>
      <CardBase variant="primary">
        <div className="flex relative">
          <div className="flex gap-3 flex-wrap">
            <div className="max-w-60 lg:max-w-md">
              <div translate="no">
                <Title size="medium">{title}</Title>
              </div>
              {time && time?.length >= 0 && (
                <Paragraph size="small" className="font-[500]">
                  {time}
                </Paragraph>
              )}
            </div>

            <div className="mb-auto">
              {image?.url && <ProjectImage image={image} />}
            </div>
          </div>

          <div className="absolute right-0">
            <ExternalLink size={16} className="hover:scale-110" />
          </div>
        </div>

        {text && text?.length > 0 && (
          <Paragraph size="small" className="max-w-xl py-2">
            {truncateText(text?.[0], 250)}
          </Paragraph>
        )}

        {tags && (
          <ul className="flex items-center gap-1 flex-wrap" translate="no">
            {tags?.slice(0, MAX_TAGS)?.map((tag, index) => (
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
