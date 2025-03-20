import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://example.com?a=b&c=d',
            changeFrequency: 'never',
        },      
    ]
}