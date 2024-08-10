import { getPortfolioData } from '@/services';
import { portfolioAdapter } from '@/adapters';
import { ListOfExperience } from '@/app/experience/components';

export default async function Home() {
  const data = await getPortfolioData();
  const portfolio = portfolioAdapter(data.data);

  const { workExperiences, personalProjects } = portfolio;

  return (
    <div className="flex flex-col gap-8">
      <ListOfExperience
        experiences={workExperiences}
        title={'Work experiences'}
        label={' that I have had the opportunity to participate in.'}
      />

      <ListOfExperience
        experiences={personalProjects}
        title={'Personal projects'}
        label=" that I have developed in my free time."
      />
    </div>
  );
}
