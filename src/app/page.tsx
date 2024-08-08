import { getPortfolioData } from '@/services';
import { portfolioDataAdapter } from '@/adapters';
import { Title, Text } from '@/components';
import { Linkedin, Github } from 'lucide-react';

export default async function Home() {
  const data = await getPortfolioData();

  const portfolioData = portfolioDataAdapter(data.data);
  console.log(portfolioData);

  const {
    name,
    role,
    summary,
    workExperiences,
    personalProjects,
    socialMedia,
  } = portfolioData;

  return (
    <main className="grid grid-cols-[400px_1fr] min-h-screen items-center p-6">
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold">WIP - Portfolio</h3>
        <div>
          <Title text={name} />
          <Text text={role} type="small" />
          {summary.map((text, index) => (
            <Text key={index} text={text} />
          ))}
        </div>

        <div>
          <h3 className="text-4xl font-bold">Social Media</h3>

          <ul className="flex gap-2 items-center">
            {socialMedia.map((social, index) => {
              const socialName = social.name.toLowerCase();
              let icon = null;

              if (socialName === 'linkedin') {
                icon = <Linkedin size={24} />;
              }

              if (socialName === 'github') {
                icon = <Github size={24} />;
              }

              if (!icon) {
                return null;
              }

              return (
                <li key={index}>
                  <a href={social.link.url} target="_blank">
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="py-4 px-6 rounded-md  border-4 border-brown-300 ">
        <div>
          <h3 className="text-4xl font-bold">Work Experience</h3>
          {workExperiences.map((experience, index) => (
            <div key={index} className="py-4">
              <h2 className="text-3xl font-bold">{experience.title}</h2>
              <Text text={experience.time} type="small" />
              <Text text={experience.text} />
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-4xl font-bold">Personal Projects</h3>

          {personalProjects.map((project, index) => (
            <div key={index} className="py-4">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <Text text={project.text} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
