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
        label={'Opportunities I Have Had the Privilege to Participate In'}
      />

      {showPersonalProjects && (
        <ListOfExperience
          experiences={personalProjects}
          title={'Personal Projects'}
          label="Developed in My Free Time"
        />
      )}
    </div>
  );
}
