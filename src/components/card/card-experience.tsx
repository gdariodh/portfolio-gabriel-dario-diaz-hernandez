import { Experience } from '@/models';
import Image from 'next/image';
import React from 'react';
import { Pill } from '../data-display/pill';
import { Paragraph } from '../data-display/paragraph';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function CardExperience({ experience, className }: ExperienceCardProps) {
  const { image, title, text, tags, link, altLink, time } = experience;

  return (
    <div className={`flex flex-col ${className}`}>
      {image && <Image src={image.url} alt={image.alt} />}
      {time && <Paragraph size="large">{time}</Paragraph>}

      <h3>{title}</h3>
      <p>{text}</p>

      <ul className="flex items-center gap-1 flex-wrap">
        {tags?.map((tag, index) => (
          <li key={index}>
            <Pill>{tag}</Pill>
          </li>
        ))}
      </ul>
    </div>
  );
}
