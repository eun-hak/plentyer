import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // 모든 검색 엔진 크롤링 차단 (도메인 연결 전까지)
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
    // sitemap은 색인이 차단되어 있으므로 제외
  };
}

