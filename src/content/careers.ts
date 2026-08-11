export type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  department: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

/**
 * Publish only approved open roles.
 * Empty by default to avoid inventing openings.
 */
export const jobs: Job[] = [];

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}