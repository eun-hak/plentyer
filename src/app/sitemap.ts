import { MetadataRoute } from 'next';
import { POSTS, CATEGORIES } from './data/mock';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://plentyer.com';
  
  // 정적 페이지
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-01-12'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-01-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-01-12'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-01-12'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date('2026-01-12'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // 카테고리 페이지
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 포스트 페이지 - 모든 게시글 포함
  const postPages: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${baseUrl}/post/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 총 URL 개수: 정적 페이지(6) + 카테고리(3) + 포스트(POSTS.length)
  // 개발 환경에서만 로그 출력
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Sitemap] 총 ${staticPages.length + categoryPages.length + postPages.length}개 URL 생성 (포스트: ${postPages.length}개)`);
  }

  return [...staticPages, ...categoryPages, ...postPages];
}

