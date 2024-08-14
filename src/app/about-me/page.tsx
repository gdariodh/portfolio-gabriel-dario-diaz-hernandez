import {
  Title,
  Paragraph,
  ButtonSocialMedia,
  Avatar,
  AvatarImage,
  AvatarFallback,
  EmailAction,
  CardBase,
} from '@/components';
import BackAction from '@/components/actions/back.action';
import ResumeAction from '@/components/actions/resume.action';
import { getPortfolioData } from '@/services';
import { ArrowLeft, MapPin } from 'lucide-react';
import Link from 'next/link';

export default async function Contact() {
  const portfolio = await getPortfolioData();
  const { name, role, image, location, email, resumeLink, socialMedia } =
    portfolio;

  return (
    <div>
      <BackAction />

      <CardBase>
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

        <div className="flex flex-col gap-2 pt-6">
          <Paragraph size="small" className="grid grid-cols-[16px_1fr] gap-1">
            <MapPin size={16} />
            {location}
          </Paragraph>

          <EmailAction email={email} />
          <ResumeAction link={resumeLink?.url} />
        </div>

        <div className="block pt-4 pb-4">
          <Title size="large" type="h2" className="pb-2">
            Social
          </Title>
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
      </CardBase>
    </div>
  );
}
