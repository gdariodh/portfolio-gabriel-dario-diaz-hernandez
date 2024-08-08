import { PRISMIC_ACCESS_TOKEN, PRISMIC_REPOSITORY_NAME } from '@/constants';
import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';

export const createClientPrismic = (
  config: prismicNext.CreateClientConfig = {}
) => {
  const client = prismic.createClient(PRISMIC_REPOSITORY_NAME as string, {
    accessToken: PRISMIC_ACCESS_TOKEN,
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
        : { next: { revalidate: 5 } },
    ...config,
  });

  return client;
};
