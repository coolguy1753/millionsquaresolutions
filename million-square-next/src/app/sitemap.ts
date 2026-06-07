import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.millionsquaresolutions.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
  url: 'https://www.millionsquaresolutions.com/services',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.9,
},
{
  url: 'https://www.millionsquaresolutions.com/about',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: 'https://www.millionsquaresolutions.com/case-studies',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: 'https://www.millionsquaresolutions.com/blog',
  lastModified: new Date(),
  changeFrequency: 'weekly',
  priority: 0.9,
},
{
  url: 'https://www.millionsquaresolutions.com/blog/what-is-customer-success-outsourcing',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: 'https://www.millionsquaresolutions.com/blog/customer-success-as-a-service',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: 'https://www.millionsquaresolutions.com/blog/how-to-reduce-saas-churn',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: 'https://www.millionsquaresolutions.com/blog/csm-account-ratio',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: 'https://www.millionsquaresolutions.com/blog/nrr-vs-grr-guide',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
  ];
}