import { Portfolio } from '@/models';
import {
  Title,
  Paragraph,
  ButtonSocialMedia,
  Avatar,
  AvatarImage,
  AvatarFallback,
  EmailAction,
} from '@/components';
import { MapPin } from 'lucide-react';
import ResumeAction from '../actions/resume.action';

interface SidebarProps {
  portfolio: Portfolio;
}

export function Sidebar({ portfolio }: SidebarProps) {
  const {
    name,
    role,
    summary,
    socialMedia,
    image,
    location,
    resumeLink,
    email,
  } = portfolio;

  return (
    <div className="flex flex-col">
      <div>
        <Avatar>
          <AvatarImage
            src={image.url}
            alt={image.alt}
            width={image.width || 24}
            height={image.height || 24}
          />
          <AvatarFallback>GD</AvatarFallback>
        </Avatar>
      </div>
      <div className="block py-4">
        <Title size="large" type="h1" className="text-4xl">
          {name}
        </Title>
        <Title
          size="large"
          type="h2"
          className=" text-slate-700 dark:text-slate-400"
        >
          {role}
        </Title>
      </div>
      <div>
        <Title size="large" type="h2">
          Profile
        </Title>
        {summary.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </div>

      <div className="flex flex-col gap-2 pt-6">
        <Paragraph size="small" className="grid grid-cols-[16px_1fr] gap-1">
          <MapPin size={16} />
          {location}
        </Paragraph>

        <EmailAction email={email} />
        <ResumeAction link={resumeLink?.url} />
      </div>

      <div className="block pt-12 pb-4">
        <ul className="flex gap-2 items-center">
          {socialMedia.map((social, index) => {
            return (
              <li key={index}>
                <ButtonSocialMedia item={social} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
