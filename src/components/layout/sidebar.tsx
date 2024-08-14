import { Portfolio } from '@/models';
import {
  Title,
  Paragraph,
  ButtonLinkIcon,
  Avatar,
  AvatarImage,
  AvatarFallback,
  EmailAction,
  ResumeAction,
} from '@/components';

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
    <aside className="flex flex-col">
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
      <div className="block py-4" translate="no">
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
        <EmailAction email={email} />
        <ResumeAction link={resumeLink?.url} />
      </div>

      <div className="block pt-6 lg:pt-12 lg:pb-4">
        <ul className="flex gap-2 items-center">
          {socialMedia.map((social, index) => {
            return (
              <li key={index}>
                <ButtonLinkIcon item={social} />
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
