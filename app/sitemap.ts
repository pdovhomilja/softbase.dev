import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://softbase.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://softbase.dev/en/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ]
}
