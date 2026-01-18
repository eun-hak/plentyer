
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
  { id: '1', name: '가이드', slug: 'guide', description: '초보자를 위한 게임 시작 가이드와 기본 팁.', count: 9 },
  { id: '2', name: '공략', slug: 'strategy', description: '게임 공략, 전략, 고급 팁과 메타 분석.', count: 6 },
  { id: '3', name: '리뷰', slug: 'review', description: '최신 게임부터 클래식까지 심도있는 리뷰.', count: 6 },
];

import { POST_CONTENTS } from './posts-content';

export const POSTS: Post[] = [
  {
    id: '21',
    title: '게이밍 하드웨어 구매 리뷰: 체감 성능을 기준으로 한 합리적 선택법',
    summary: '게이밍 하드웨어를 CPU/GPU, 메모리/저장장치, 모니터, 입력 장치 등 구성 요소별로 분석한 구매 리뷰. 스펙이 아닌 체감 성능과 사용 목적에 맞는 합리적 선택 기준을 제시합니다.',
    content: POST_CONTENTS['gaming-hardware-buying-review'],
    category: 'review',
    date: '2026-01-21',
    slug: 'gaming-hardware-buying-review',
    views: 7892,
    tags: ['하드웨어', 'PC', '구매가이드', '리뷰', 'CPU', 'GPU', '모니터'],
    readingTime: 7
  },
  {
    id: '20',
    title: '콘솔 vs PC 게이밍 리뷰: 플레이 환경에 따른 선택 기준 정리',
    summary: '콘솔과 PC 게이밍을 접근성, 성능, 조작 방식, 게임 라이브러리, 비용 등 객관적 기준으로 비교 분석한 리뷰. 사용자의 플레이 성향과 환경에 맞는 선택 기준을 제시합니다.',
    content: POST_CONTENTS['console-vs-pc-gaming-review'],
    category: 'review',
    date: '2026-01-20',
    slug: 'console-vs-pc-gaming-review',
    views: 6789,
    tags: ['콘솔', 'PC', '비교', '리뷰', '구매가이드', '플레이스테이션', 'Xbox'],
    readingTime: 7
  },
  {
    id: '19',
    title: '인디 게임 리뷰: 대작과 다른 재미를 만드는 이유',
    summary: '인디 게임의 장점과 한계를 객관적으로 분석한 리뷰. 명확한 방향성, 그래픽 스타일, 플레이 타임 특징, 한계 요소, 추천 유저 타입 등 인디 게임의 본질을 정리합니다.',
    content: POST_CONTENTS['indie-game-review'],
    category: 'review',
    date: '2026-01-19',
    slug: 'indie-game-review',
    views: 5234,
    tags: ['인디게임', '리뷰', 'Celeste', 'Stardew Valley', 'Hades'],
    readingTime: 6
  },
  {
    id: '18',
    title: '경쟁 게임 마인드셋 공략: 랭크에서 흔들리지 않는 사고방식',
    summary: '발로란트, 오버워치, 리그 오브 레전드 등 경쟁 게임에서 안정적인 랭크 플레이를 위한 마인드셋 공략. 통제 가능한 요소 집중, 틸트 인지, 손실 최소화, 커뮤니케이션, 복기 습관 등 판단 구조 안정화 방법을 정리합니다.',
    content: POST_CONTENTS['competitive-gaming-mindset-strategy'],
    category: 'strategy',
    date: '2026-01-18',
    slug: 'competitive-gaming-mindset-strategy',
    views: 4156,
    tags: ['경쟁게임', '랭크', '마인드셋', '멘탈', '공략', '틸트'],
    readingTime: 7
  },
  {
    id: '17',
    title: '전략 게임 자원 관리 공략: 패배를 막는 운영의 핵심 원칙',
    summary: 'RTS와 턴제 전략 게임에서 승패를 좌우하는 자원 관리 공략. 자원 구분, 초반 경제 안정화, 생산 대기열 관리, 확장 타이밍, 전투와 경제의 균형 등 운영 핵심을 정리합니다.',
    content: POST_CONTENTS['strategy-game-resource-management-guide'],
    category: 'strategy',
    date: '2026-01-17',
    slug: 'strategy-game-resource-management-guide',
    views: 3421,
    tags: ['전략게임', 'RTS', '자원관리', '공략', '경제 운영'],
    readingTime: 7
  },
  {
    id: '16',
    title: 'MOBA 라인전 공략: 초반 주도권을 잡는 실전 운영 핵심',
    summary: '리그 오브 레전드, 도타 2 등 MOBA 게임의 라인전에서 초반 주도권을 잡기 위한 목표 설정, 파밍 안정화, 웨이브 관리, 견제 타이밍, 시야 장악 등 실전 운영 핵심을 정리합니다.',
    content: POST_CONTENTS['moba-laning-phase-strategy'],
    category: 'strategy',
    date: '2026-01-16',
    slug: 'moba-laning-phase-strategy',
    views: 3892,
    tags: ['MOBA', 'LOL', '도타2', '라인전', '공략', '웨이브 관리'],
    readingTime: 7
  },
  {
    id: '15',
    title: '게임 스트리밍 시작 가이드: 처음부터 무리 없이 준비하는 방법',
    summary: '게임 스트리밍을 처음 시작하려는 유저를 위한 목적 설정, 필수 장비 기준, OBS 기본 설정, 플랫폼 선택, 초반 태도 등 안정적인 방송을 위한 핵심 가이드입니다.',
    content: POST_CONTENTS['game-streaming-beginner-guide'],
    category: 'guide',
    date: '2026-01-15',
    slug: 'game-streaming-beginner-guide',
    views: 2876,
    tags: ['스트리밍', '방송', 'OBS', '초보자 가이드', '게임 팁'],
    readingTime: 6
  },
  {
    id: '14',
    title: '오픈월드 게임 초보자 가이드: 길 잃지 않고 즐기는 탐험의 기본',
    summary: '오픈월드 게임 초보자를 위한 메인 퀘스트 활용법, 맵 해금 전략, 전투 준비 요소, 탐험 보상 판단 기준 등 방향 상실 없이 즐기는 핵심 가이드입니다.',
    content: POST_CONTENTS['open-world-beginner-guide'],
    category: 'guide',
    date: '2026-01-14',
    slug: 'open-world-beginner-guide',
    views: 3124,
    tags: ['오픈월드', '초보자 가이드', '탐험', '게임 팁', 'RPG'],
    readingTime: 6
  },
  {
    id: '13',
    title: '모바일 RPG 초보자 가이드: 성장 막히지 않게 시작하는 핵심 정리',
    summary: '모바일 RPG 초보자를 위한 초반 목표 설정, 캐릭터 육성 전략, 재화 관리, 일일 루틴 정리 등 성장을 막히지 않게 하는 핵심 가이드입니다.',
    content: POST_CONTENTS['mobile-rpg-beginner-guide'],
    category: 'guide',
    date: '2026-01-13',
    slug: 'mobile-rpg-beginner-guide',
    views: 2156,
    tags: ['모바일게임', 'RPG', '초보자 가이드', '육성', '팁'],
    readingTime: 6
  },
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
