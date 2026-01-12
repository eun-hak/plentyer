
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
  tags?: string[];
  readingTime?: number;
  coverImage?: string;
}

export const CATEGORIES: Category[] = [
  { id: '1', name: 'PC 게임', slug: 'pc', description: 'PC 게임 리뷰, 공략, 추천 게임 소개.', count: 52 },
  { id: '2', name: '콘솔 게임', slug: 'console', description: '플레이스테이션, 엑스박스, 닌텐도 스위치 게임 리뷰와 공략.', count: 38 },
  { id: '3', name: '모바일 게임', slug: 'mobile', description: '모바일 게임 리뷰, 추천, 업데이트 소식.', count: 45 },
  { id: '4', name: 'e스포츠', slug: 'esports', description: '프로 게임 리그, 경기 분석, 선수 소식.', count: 29 },
  { id: '5', name: '가이드', slug: 'guide', description: '초보자를 위한 게임 시작 가이드와 기본 팁.', count: 34 },
  { id: '6', name: '공략', slug: 'strategy', description: '게임 공략, 전략, 고급 팁과 메타 분석.', count: 41 },
  { id: '7', name: '리뷰', slug: 'review', description: '최신 게임부터 클래식까지 심도있는 리뷰.', count: 28 },
];

import { POST_CONTENTS } from './posts-content';

export const POSTS: Post[] = [
  {
    id: '1',
    title: 'FPS 게임 입문자를 위한 완벽 가이드',
    summary: 'FPS 게임을 처음 시작하는 분들을 위한 마우스 감도 설정, 크로스헤어 배치, 반동 제어 등 핵심 기술을 상세히 설명합니다.',
    content: POST_CONTENTS['fps-beginner-guide-2026'],
    category: 'guide',
    date: '2026-01-12',
    slug: 'fps-beginner-guide-2026',
    views: 2847,
    tags: ['FPS', '초보자 가이드', '조준', '게임 팁'],
    readingTime: 6
  },
  {
    id: '2',
    title: 'MOBA 게임 라인전 완벽 마스터하기',
    summary: '리그 오브 레전드, 도타2 등 MOBA 게임의 라인전 단계에서 우위를 점하는 CS 관리, 웨이브 컨트롤, 교환 타이밍을 알려드립니다.',
    content: POST_CONTENTS['moba-laning-phase-guide'],
    category: 'strategy',
    date: '2026-01-11',
    slug: 'moba-laning-phase-guide',
    views: 3201,
    tags: ['MOBA', 'LOL', '공략', '라인전'],
    readingTime: 7
  },
  {
    id: '3',
    title: '모바일 RPG 육성 시스템 완벽 이해',
    summary: '복잡한 모바일 RPG의 육성 시스템을 효율적으로 활용하는 방법과 자원 관리 전략을 초보자도 쉽게 따라할 수 있게 설명합니다.',
    content: POST_CONTENTS['mobile-rpg-progression-system'],
    category: 'guide',
    date: '2026-01-10',
    slug: 'mobile-rpg-progression-system',
    views: 1856,
    tags: ['모바일게임', 'RPG', '육성', '팁'],
    readingTime: 6
  },
  {
    id: '4',
    title: '전략 게임 자원 관리의 기술',
    summary: 'RTS와 턴제 전략 게임에서 승리로 이끄는 자원 관리, 빌드 오더, 확장 타이밍, 유닛 조합 전략을 상세히 다룹니다.',
    content: POST_CONTENTS['strategy-game-resource-management'],
    category: 'strategy',
    date: '2026-01-09',
    slug: 'strategy-game-resource-management',
    views: 2134,
    tags: ['전략게임', 'RTS', '자원관리', '공략'],
    readingTime: 7
  },
  {
    id: '5',
    title: '오픈월드 게임 탐험 완벽 가이드',
    summary: '젤다, 엘든 링 같은 오픈월드 게임에서 숨겨진 요소를 찾고, 효율적으로 탐험하며, 전투와 생존을 마스터하는 방법을 소개합니다.',
    content: POST_CONTENTS['open-world-exploration-tips'],
    category: 'guide',
    date: '2026-01-08',
    slug: 'open-world-exploration-tips',
    views: 2945,
    tags: ['오픈월드', '탐험', '게임 팁', 'RPG'],
    readingTime: 6
  },
  {
    id: '6',
    title: '경쟁 게임에서 승리하는 마인드셋',
    summary: '랭크 게임과 토너먼트에서 최고의 퍼포먼스를 내는 정신적 전략, 패배 극복법, 팀 소통 기술을 프로게이머의 관점에서 설명합니다.',
    content: POST_CONTENTS['competitive-gaming-mindset'],
    category: 'strategy',
    date: '2026-01-07',
    slug: 'competitive-gaming-mindset',
    views: 3567,
    tags: ['e스포츠', '멘탈', '경쟁', '프로게이머'],
    readingTime: 7
  },
  {
    id: '7',
    title: '2026년 꼭 해봐야 할 인디 게임',
    summary: '대형 게임사가 시도하지 않는 독창적인 게임플레이와 예술성을 가진 2026년 최고의 인디 게임들을 엄선하여 소개합니다.',
    content: POST_CONTENTS['indie-game-hidden-gems-2026'],
    category: 'review',
    date: '2026-01-06',
    slug: 'indie-game-hidden-gems-2026',
    views: 2678,
    tags: ['인디게임', '리뷰', '추천', '2026'],
    readingTime: 6
  },
  {
    id: '8',
    title: '콘솔 vs PC 게이밍: 2026년 완벽 비교',
    summary: 'PS5, Xbox, 게이밍 PC의 장단점을 비용, 성능, 게임 라이브러리, 편의성 측면에서 객관적으로 비교 분석합니다.',
    content: POST_CONTENTS['console-vs-pc-gaming-2026'],
    category: 'review',
    date: '2026-01-05',
    slug: 'console-vs-pc-gaming-2026',
    views: 4123,
    tags: ['콘솔', 'PC', '비교', '구매가이드'],
    readingTime: 7
  },
  {
    id: '9',
    title: '게임 스트리밍 시작하기 완벽 가이드',
    summary: '트위치, 유튜브에서 게임 방송을 시작하려는 분들을 위한 하드웨어 구성, OBS 설정, 방송 품질 향상 노하우를 공유합니다.',
    content: POST_CONTENTS['game-streaming-setup-guide'],
    category: 'guide',
    date: '2026-01-04',
    slug: 'game-streaming-setup-guide',
    views: 3421,
    tags: ['스트리밍', '트위치', '유튜브', '방송'],
    readingTime: 7
  },
  {
    id: '10',
    title: '프로게이머가 되는 길: e스포츠 커리어 가이드',
    summary: 'e스포츠 프로게이머를 꿈꾸는 분들을 위한 현실적인 조언과 입단 과정, 프로 생활의 진실, 은퇴 후 진로까지 솔직하게 다룹니다.',
    content: POST_CONTENTS['esports-career-guide'],
    category: 'guide',
    date: '2026-01-03',
    slug: 'esports-career-guide',
    views: 5234,
    tags: ['e스포츠', '프로게이머', '커리어', '진로'],
    readingTime: 7
  },
  {
    id: '11',
    title: '2026년 게이밍 하드웨어 구매 가이드',
    summary: '예산대별 최적의 게이밍 PC 구성과 CPU, GPU, 주변기기 선택 기준, 구매 시기 팁까지 하드웨어 전문가의 조언을 담았습니다.',
    content: POST_CONTENTS['gaming-hardware-buying-guide-2026'],
    category: 'review',
    date: '2026-01-02',
    slug: 'gaming-hardware-buying-guide-2026',
    views: 4567,
    tags: ['하드웨어', 'PC', '구매가이드', '2026'],
    readingTime: 8
  },
  {
    id: '12',
    title: '건강한 게임 습관: 게임 과몰입 예방법',
    summary: '게임을 즐기면서도 학업, 건강, 인간관계의 균형을 유지하는 방법과 게임 과몰입의 신호를 인식하고 대처하는 실용적 가이드입니다.',
    content: POST_CONTENTS['game-addiction-prevention'],
    category: 'guide',
    date: '2026-01-01',
    slug: 'game-addiction-prevention',
    views: 2890,
    tags: ['건강', '게임 습관', '과몰입 예방', '멘탈 케어'],
    readingTime: 7
  }
];
