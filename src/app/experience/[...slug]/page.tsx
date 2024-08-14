import React from 'react';
import Image from 'next/image';
import { getExperienceDataBySlug } from '@/services';
import {
  Title,
  Paragraph,
  Pill,
  CardBase,
  ButtonLinkIcon,
  BackAction,
} from '@/components';
import { notFound } from 'next/navigation';

export default async function ExperiencePageBySlug({ params }) {
  const [type, slug] = params?.slug;

  const experience = await getExperienceDataBySlug(slug, type);

  if (!experience) {
    return notFound();
  }

  const { title, text, time, image, tags, codeLink, link, altLink } =
    experience;

  return (
    <div>
      <BackAction />

      <CardBase variant="secondary">
        <div className="flex pb-2">
          <div className="flex gap-3 flex-wrap">
            <div>
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
        </div>

        {text?.map((paragraph, index) => {
          const isTitle = paragraph.startsWith('#');

          if (isTitle) {
            return (
              <Title key={index} size="small" className="py-2" type="h3">
                {paragraph.replace('#', '')}
              </Title>
            );
          }

          return (
            <Paragraph key={index} size="small" className="py-[2px]">
              {paragraph}
            </Paragraph>
          );
        })}

        <div className="flex flex-wrap gap-4">
          {codeLink?.url && (
            <ButtonLinkIcon
              item={{
                name: 'Github',
                link: codeLink,
                label: 'View Code',
              }}
              className="py-3"
            />
          )}

          {link?.url && (
            <ButtonLinkIcon
              item={{
                name: 'Link',
                link: link,
                label: 'View Project',
              }}
              className="py-3"
            />
          )}

          {altLink?.url && (
            <ButtonLinkIcon
              item={{
                name: 'Link',
                link: altLink,
                label: 'View Alt Link',
              }}
              className="py-3"
            />
          )}
        </div>

        {tags && (
          <div translate="no">
            <Title size="small" className="py-2">
              Tech Stack:
            </Title>

            <ul className="flex items-center gap-1 flex-wrap">
              {tags?.map((tag, index) => (
                <li key={index}>
                  <Pill>{tag}</Pill>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardBase>
    </div>
  );
}
