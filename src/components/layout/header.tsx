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

interface HeaderProps {
  portfolio: Portfolio;
}

export function Header({ portfolio }: HeaderProps) {
  const { name, role, summary, socialMedia, image, resumeLink, email } =
    portfolio;

  return (
    <header className="flex flex-col px-4 lg:px-8 lg:sticky lg:top-0 lg:max-h-screen py-4 ">
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
    </header>
  );
}
