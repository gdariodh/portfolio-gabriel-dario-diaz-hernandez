import React from 'react';
import { cn } from '@/utils';
import { Experience } from '@/models';
import { Paragraph, Title } from '@/components';
import { ItemExperience } from '@/app/experience/components';

interface ListOfExperienceProps {
  experiences: Experience[];
  title?: string;
  label?: string;
  className?: {
    container?: string;
    list?: string;
  };
}

const baseClass = 'flex flex-col gap-4';

export function ListOfExperience({
  experiences,
  title,
  label,
  className,
}: ListOfExperienceProps) {
  return (
    <div className={cn(baseClass, className?.container)}>
      <div>
        {title && <Title size="large">{title}</Title>}
        {label && <Paragraph>{label}</Paragraph>}
      </div>

      <ul className={cn('grid grid-cols-1 gap-3', className?.list)}>
        {experiences.map((experience, index) => (
          <li key={index}>
            <ItemExperience experience={experience} />
          </li>
        ))}
      </ul>
    </div>
  );
}
