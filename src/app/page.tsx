import { getPortfolioData } from '@/services';
import { ListOfExperience } from '@/app/experience/components';

export default async function Home() {
  const portfolio = await getPortfolioData();
  const { workExperiences, personalProjects, showPersonalProjects } = portfolio;

  return (
    <div className="flex flex-col gap-8">
      <ListOfExperience
        experiences={workExperiences}
        title={'Work Experiences'}
        label={`Projects I’ve Contributed To`}
      />

      {showPersonalProjects && (
        <ListOfExperience
          experiences={personalProjects}
          title={'Personal Projects'}
          label="Built in My Spare Time"
        />
      )}
    </div>
  );
}
