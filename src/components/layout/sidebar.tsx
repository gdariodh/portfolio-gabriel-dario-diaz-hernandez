import { Portfolio } from '@/models';
import {
  Title,
  Paragraph,
  ButtonSocialMedia,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
} from '@/components';
import Image from 'next/image';

interface SidebarProps {
  portfolio: Portfolio;
}

export function Sidebar({ portfolio }: SidebarProps) {
  const { name, role, summary, socialMedia, image, location, resumeLink } =
    portfolio;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Avatar>
          <AvatarImage src={image.url} alt={image.alt} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div>
        <Title size="large" type="h1">
          {name}
        </Title>
        <Paragraph size="large">{role}</Paragraph>
        {summary.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </div>

      <div>
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
