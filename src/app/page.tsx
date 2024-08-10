import { getPortfolioData } from '@/services';
import { portfolioDataAdapter } from '@/adapters';
import {
  Paragraph,
  ButtonSocialMedia,
  Title,
  CardExperience,
} from '@/components';
import { Pill } from '@/components';

export default async function Home() {
  const data = await getPortfolioData();
  const portfolioData = portfolioDataAdapter(data.data);

  const {
    name,
    role,
    summary,
    workExperiences,
    personalProjects,
    socialMedia,
  } = portfolioData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 ">
      <div className="flex flex-col gap-4">
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

      <div className="py-4 px-6 rounded-md  border-4 border-red-200 dark:border-esmerald">
        <div>
          <Title>Lastest Work Experience</Title>
          {workExperiences.map((experience, index) => (
            <div key={index} className="py-4">
              <CardExperience experience={experience} />
            </div>
          ))}
        </div>

        <div>
          <Title>Personal Projects</Title>

          {personalProjects.map((project, index) => (
            <div key={index} className="py-4">
              <CardExperience experience={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
