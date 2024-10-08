import { portfolioAdapter } from '@/adapters';
import { PRISMIC_ENVIRONMENT } from '@/constants';
import { ExperienceType } from '@/models';
import { createClientPrismic } from '@/prismicio';

export const getPortfolioData = async () => {
  const client = createClientPrismic();
  const data = await client.getByUID(
    'portfolio',
    `${PRISMIC_ENVIRONMENT}-portfolio`
  );
  return portfolioAdapter(data?.data);
};

export const getExperienceDataBySlug = async (
  slug: string,
  type: ExperienceType
) => {
  const data = await getPortfolioData();

  if (type === 'personal-project') {
    const project =
      data?.personalProjects.find((project) => project.slug === slug) || null;
    return project;
  }

  const experience =
    data?.workExperiences.find((experience) => experience.slug === slug) ||
    null;
  return experience;
};
