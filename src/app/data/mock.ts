
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface Post {
  id: string;
  title: string;
  summary: string;
  content: string; // HTML-like string for the demo
  category: string; // Category Slug
  date: string;
  slug: string;
  views: number;
}

export const CATEGORIES: Category[] = [
  { id: '1', name: '기술', slug: 'tech', description: '최신 기술 트렌드, 코딩 튜토리얼, 소프트웨어 리뷰.', count: 42 },
  { id: '2', name: '금융', slug: 'finance', description: '개인 금융 팁, 투자 전략, 시장 분석.', count: 28 },
  { id: '3', name: '라이프스타일', slug: 'lifestyle', description: '생산성 향상, 미니멀 라이프, 건강 팁.', count: 35 },
  { id: '4', name: '여행', slug: 'travel', description: '디지털 노마드 가이드, 도시 리뷰, 여행 장비.', count: 19 },
];

export const POSTS: Post[] = [
  {
    id: '1',
    title: 'React와 Tailwind CSS 시작하기',
    summary: '2024년 가장 인기 있는 프론트엔드 스택을 사용하여 첫 프로젝트를 설정하는 포괄적인 가이드.',
    content: `
      <h2>소개</h2>
      <p>React와 Tailwind CSS는 완벽한 조합입니다. 개발자가 HTML(또는 JSX)을 벗어나지 않고도 빠른 사용자 인터페이스를 구축할 수 있게 해줍니다. 이 가이드에서는 이들을 설정하는 방법을 살펴보겠습니다.</p>
      
      <h3>왜 Tailwind인가요?</h3>
      <p>Tailwind는 유틸리티 우선 CSS 프레임워크입니다. Bootstrap과 달리 미리 빌드된 구성 요소를 제공하지 않습니다. 대신, 완전히 사용자 정의된 디자인을 구축할 수 있는 저수준 유틸리티 클래스를 제공합니다.</p>
      
      <h3>환경 설정</h3>
      <p>먼저 Node.js를 설치해야 합니다. 그런 다음 새 Vite 프로젝트를 만듭니다...</p>
      
      <h2>핵심 개념</h2>
      <p>유틸리티 우선 워크플로를 이해하는 것이 중요합니다. CSS 파일을 작성하는 대신 마크업에 직접 클래스를 작성하기 시작합니다.</p>
    `,
    category: 'tech',
    date: '2025-01-08',
    slug: 'getting-started-react-tailwind',
    views: 1205
  },
  {
    id: '2',
    title: '개발자를 위한 수동 소득 전략',
    summary: 'SaaS, 템플릿 및 콘텐츠를 통해 코딩 기술을 반복적인 수익원으로 전환하는 방법.',
    content: `
      <h2>수동 소득의 꿈</h2>
      <p>모든 개발자는 코드를 한 번 작성하고 영원히 돈을 받는 것을 꿈꿉니다. 하지만 얼마나 현실적일까요?</p>
      
      <h3>마이크로 SaaS</h3>
      <p>특정 틈새 시장의 특정 문제를 해결하는 작고 집중된 도구를 구축하는 것이 수입을 창출하는 가장 좋은 방법 중 하나입니다.</p>
      
      <h3>템플릿 판매</h3>
      <p>디자인에 재능이 있다면 HTML/CSS 또는 React 템플릿을 판매하는 것이 수익성이 좋을 수 있습니다.</p>
    `,
    category: 'finance',
    date: '2025-01-05',
    slug: 'passive-income-devs',
    views: 890
  },
  {
    id: '3',
    title: '미니멀리즘: 디지털 정리 가이드',
    summary: '디지털 생활을 정리하고 알림 피로를 줄여 주의 집중 시간을 되찾으세요.',
    content: `
      <h2>소음</h2>
      <p>우리는 알림에 시달리고 있습니다. 이제 통제권을 되찾을 때입니다.</p>
      
      <h3>1단계: 구독 취소</h3>
      <p>이메일을 확인하고 지난 한 달 동안 열지 않은 모든 것의 구독을 취소하세요.</p>
    `,
    category: 'lifestyle',
    date: '2024-12-28',
    slug: 'digital-decluttering',
    views: 2300
  },
  {
    id: '4',
    title: '서울에서 원격 근무하기 좋은 최고의 카페',
    summary: '빠른 WiFi, 충분한 전원 콘센트, 훌륭한 커피를 제공하는 서울 카페 목록.',
    content: `
      <h2>서울의 카페 문화</h2>
      <p>서울은 원격 근무자들의 천국입니다. 인터넷은 빠르고 커피는 진합니다.</p>
      
      <h3>홍대 지역</h3>
      <p>젊은 분위기로 유명한 홍대에는 학생과 프리랜서를 위한 수많은 카페가 있습니다.</p>
    `,
    category: 'travel',
    date: '2024-12-15',
    slug: 'seoul-remote-work-cafes',
    views: 560
  },
  {
    id: '5',
    title: 'React 서버 컴포넌트 이해하기',
    summary: 'React 렌더링의 미래와 SEO 및 성능에 미치는 영향에 대한 심층 분석.',
    content: '<p>React 서버 컴포넌트를 사용하면 서버에서 렌더링할 수 있는 UI를 작성할 수 있습니다...</p>',
    category: 'tech',
    date: '2024-11-30',
    slug: 'react-server-components',
    views: 3400
  },
   {
    id: '6',
    title: 'ETF 투자 101',
    summary: '장기적인 부 축적을 위한 인덱스 펀드가 가장 안전한 이유.',
    content: '<p>상장지수펀드(ETF)는 즉각적인 분산 투자를 제공합니다...</p>',
    category: 'finance',
    date: '2024-10-20',
    slug: 'etf-investing-101',
    views: 1100
  }
];
