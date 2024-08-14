import { getPortfolioData } from '@/services';
import {
  Title,
  ButtonLinkIcon,
  Avatar,
  AvatarImage,
  AvatarFallback,
  EmailAction,
  CardBase,
  Location,
  BackAction,
  ResumeAction,
  Paragraph,
} from '@/components';

export default async function Contact() {
  const portfolio = await getPortfolioData();
  const { name, role, image, location, email, resumeLink, socialMedia } =
    portfolio;

  return (
    <div>
      <BackAction />

      <CardBase variant="secondary">
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
        <div className="block py-4 max-w-md">
          <div translate="no">
            <Title type="h1">{name}</Title>
            <Title type="h2" className="text-slate-700 dark:text-slate-400">
              {role}
            </Title>
          </div>

          <Location location={location} className="pt-2" />
        </div>

        <Paragraph size="small" className="pb-4 max-w-80">
          If you'd like to get in touch, feel free to contact me through any of
          the following methods.
        </Paragraph>

        <div className="flex flex-col gap-2">
          <EmailAction email={email} />
          <ResumeAction link={resumeLink?.url} />
        </div>

        <div className="block pt-4 pb-4">
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
      </CardBase>
    </div>
  );
}
