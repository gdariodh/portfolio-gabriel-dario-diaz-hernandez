import { getPortfolioData } from '@/services';
import { portfolioAdapter } from '@/adapters';
import { Title, CardExperience, Sidebar } from '@/components';

export default async function Home() {
  const data = await getPortfolioData();
  const portfolio = portfolioAdapter(data.data);

  const { workExperiences, personalProjects } = portfolio;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 ">
      <Sidebar portfolio={portfolio} />
      <div className="flex flex-col gap-12">
        <div>
          <Title>Lastest Work Experience</Title>
          {workExperiences.map((experience, index) => (
            <CardExperience key={index} experience={experience} />
          ))}
        </div>

        <div>
          <Title>Personal Projects</Title>

          {personalProjects.map((project, index) => (
            <CardExperience key={index} experience={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
