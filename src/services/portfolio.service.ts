import { createClientPrismic } from '@/prismicio';

export async function getPortfolioData() {
  const client = createClientPrismic();
  const data = await client.getSingle('portfolio');
  return data;
}
