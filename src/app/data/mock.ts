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
  { id: '1', name: '가이드', slug: 'guide', description: '초보자용 설정, 입문, 장르별 시작 방법을 정리한 가이드.', count: 13 },
  { id: '2', name: '공략', slug: 'strategy', description: '랭크, 운영, 라인전, 자원 관리 등 실전형 공략 모음.', count: 7 },
  { id: '3', name: '리뷰', slug: 'review', description: '입문자 관점의 비교, 구매 기준, 취향별 선택 리뷰.', count: 6 },
];

import { POST_CONTENTS } from './posts-content';

export const POSTS: Post[] = [
  {
    id: '35',
    title: 'FPS 판단 속도 느린 이유 | 에임보다 먼저 고쳐야 할 교전 체크 순서',
    summary: 'FPS에서 에임은 괜찮은데 교전 승률이 낮다면 판단 속도 문제가 먼저일 수 있습니다. FPS 판단 속도 느린 이유와 교전 전에 확인해야 할 우선순위를 초보자 기준으로 정리합니다.',
    content: POST_CONTENTS['fps-decision-speed-truth'],
    category: 'guide',
    date: '2026-02-05',
    slug: 'fps-decision-speed-truth',
    views: 0,
    tags: ['FPS 판단 속도', 'FPS 교전 판단', '에임보다 중요한 것', 'FPS 초보 팁', '랭크 승률'],
    readingTime: 6
  },
  {
    id: '34',
    title: 'FPS 실력 안 느는 이유 | 오래 해도 늘지 않는 사람들의 공통 습관',
    summary: 'FPS를 오래 했는데도 실력이 안 느는 이유는 재능 부족보다 반복 습관에 있는 경우가 많습니다. FPS 실력 안 느는 이유와 성장 막는 플레이 습관을 체크리스트 형태로 정리합니다.',
    content: POST_CONTENTS['fps-no-growth-common-habits'],
    category: 'guide',
    date: '2026-02-04',
    slug: 'fps-no-growth-common-habits',
    views: 0,
    tags: ['FPS 실력 안 느는 이유', 'FPS 성장 정체', 'FPS 습관', '게임 실력 향상', 'FPS 초보'],
    readingTime: 6
  },
  {
    id: '33',
    title: 'FPS 정체기 극복법 | 실력 안 늘 때 절대 하면 안 되는 행동',
    summary: 'FPS 정체기가 길어질수록 무리한 연습과 감정적인 연속 큐가 늘어납니다. FPS 정체기 극복법과 실력 안 늘 때 끊어야 할 행동을 단계별로 정리합니다.',
    content: POST_CONTENTS['fps-skill-plateau-mistakes'],
    category: 'guide',
    date: '2026-02-03',
    slug: 'fps-skill-plateau-mistakes',
    views: 0,
    tags: ['FPS 정체기 극복법', '실력 안 늘 때', 'FPS 연습법', '랭크 정체', 'FPS 멘탈'],
    readingTime: 6
  },
  {
    id: '32',
    title: 'FPS 잘하는 사람 특징 | 킬보다 먼저 보이는 안정적인 플레이 습관',
    summary: 'FPS에서 잘하는 사람은 무작정 킬을 많이 먹는 유저보다 실수가 적고 안정적인 흐름을 만듭니다. FPS 잘하는 사람 특징과 팀에서 신뢰받는 플레이 습관을 정리합니다.',
    content: POST_CONTENTS['fps-look-good-player-truth'],
    category: 'guide',
    date: '2026-02-02',
    slug: 'fps-look-good-player-truth',
    views: 0,
    tags: ['FPS 잘하는 사람 특징', 'FPS 안정적 플레이', '팀에서 잘하는 사람', 'FPS 습관', '랭크 팁'],
    readingTime: 6
  },
  {
    id: '31',
    title: 'FPS 연패 탈출 방법 | 멘탈 무너질 때 바로 끊어야 할 루틴',
    summary: 'FPS 연패가 길어지는 이유는 에임보다 멘탈과 판단 순서가 함께 무너지기 때문입니다. FPS 연패 탈출 방법과 연패 중 바로 적용할 루틴을 실전 기준으로 정리합니다.',
    content: POST_CONTENTS['fps-losing-streak-reset-guide'],
    category: 'strategy',
    date: '2026-02-01',
    slug: 'fps-losing-streak-reset-guide',
    views: 0,
    tags: ['FPS 연패 탈출', 'FPS 멘탈 관리', '랭크 연패', '틸트 방지', '실전 루틴'],
    readingTime: 6
  },
  {
    id: '21',
    title: '게이밍 키보드 마우스 뭐부터 바꿔야 하나 | 체감 큰 순서 구매 가이드',
    summary: '게이밍 장비를 바꾸고 싶은데 무엇부터 사야 할지 고민이라면 체감 순서부터 정해야 합니다. 게이밍 키보드 마우스 뭐부터 바꿔야 하나 고민하는 초보자를 위해 우선순위를 정리합니다.',
    content: POST_CONTENTS['gaming-hardware-buying-review'],
    category: 'review',
    date: '2026-01-21',
    slug: 'gaming-hardware-buying-review',
    views: 7892,
    tags: ['게이밍 키보드 마우스', '장비 뭐부터', '게이밍 장비 추천', '입문 장비', '체감 순서'],
    readingTime: 7
  },
  {
    id: '20',
    title: '콘솔 PC 뭐가 좋을까 | 처음 게임용으로 고를 때 비교 기준',
    summary: '콘솔과 PC 중 무엇이 더 좋은지는 성능보다 플레이 환경에 따라 달라집니다. 콘솔 PC 뭐가 좋을까 고민하는 입문자를 위해 비용, 편의성, 장르 기준을 비교합니다.',
    content: POST_CONTENTS['console-vs-pc-gaming-review'],
    category: 'review',
    date: '2026-01-20',
    slug: 'console-vs-pc-gaming-review',
    views: 6789,
    tags: ['콘솔 PC 비교', '콘솔 PC 뭐가 좋을까', '게임 입문', '플랫폼 선택', '플레이 환경'],
    readingTime: 7
  },
  {
    id: '19',
    title: '인디게임 입문 추천 기준 | 대작 말고 뭘 해볼지 고르는 법',
    summary: '인디게임이 궁금하지만 무엇부터 해야 할지 막막하다면 취향 기준부터 나누는 것이 좋습니다. 인디게임 입문 추천 기준과 실패 확률 줄이는 선택법을 정리합니다.',
    content: POST_CONTENTS['indie-game-review'],
    category: 'review',
    date: '2026-01-19',
    slug: 'indie-game-review',
    views: 5234,
    tags: ['인디게임 입문', '인디게임 추천 기준', '대작 말고 할 게임', '스팀 인디게임', '취향별 추천'],
    readingTime: 6
  },
  {
    id: '18',
    title: '랭크 멘탈 관리 방법 | 경쟁 게임에서 흔들리지 않는 생각 정리',
    summary: '랭크 게임에서 실력보다 먼저 무너지는 것은 멘탈과 사고 정리입니다. 랭크 멘탈 관리 방법과 경쟁 게임에서 흔들리지 않는 생각 기준을 정리합니다.',
    content: POST_CONTENTS['competitive-gaming-mindset-strategy'],
    category: 'strategy',
    date: '2026-01-18',
    slug: 'competitive-gaming-mindset-strategy',
    views: 4156,
    tags: ['랭크 멘탈 관리', '경쟁 게임 멘탈', '틸트 방지', '랭크 마인드셋', '게임 습관'],
    readingTime: 7
  },
  {
    id: '17',
    title: '전략게임 초반 운영법 | 자원 막히지 않게 굴리는 기본 순서',
    summary: '전략게임에서 자원 관리가 꼬이면 이후 운영도 함께 흔들립니다. 전략게임 초반 운영법과 자원 막히지 않게 굴리는 기본 순서를 초보자 기준으로 정리합니다.',
    content: POST_CONTENTS['strategy-game-resource-management-guide'],
    category: 'strategy',
    date: '2026-01-17',
    slug: 'strategy-game-resource-management-guide',
    views: 3421,
    tags: ['전략게임 초반 운영', '자원 관리', 'RTS 초보', '운영 순서', '전략게임 팁'],
    readingTime: 7
  },
  {
    id: '16',
    title: '롤 라인전 잘하는 법 | 초반 주도권 잡는 웨이브 관리 기초',
    summary: '롤 라인전에서 이득을 보는 핵심은 딜교보다 웨이브와 위치 관리에 있습니다. 롤 라인전 잘하는 법과 초반 주도권을 잡는 기본 원칙을 정리합니다.',
    content: POST_CONTENTS['moba-laning-phase-strategy'],
    category: 'strategy',
    date: '2026-01-16',
    slug: 'moba-laning-phase-strategy',
    views: 3892,
    tags: ['롤 라인전 잘하는 법', '웨이브 관리', '라인전 기초', '초반 주도권', 'MOBA 공략'],
    readingTime: 7
  },
  {
    id: '15',
    title: '트위치 유튜브 게임방송 시작 방법 | 초보 장비와 OBS 설정 기초',
    summary: '게임방송을 처음 시작할 때는 비싼 장비보다 최소 구성과 OBS 설정 이해가 중요합니다. 트위치 유튜브 게임방송 시작 방법을 초보자 기준으로 정리합니다.',
    content: POST_CONTENTS['game-streaming-beginner-guide'],
    category: 'guide',
    date: '2026-01-15',
    slug: 'game-streaming-beginner-guide',
    views: 2876,
    tags: ['게임방송 시작', '트위치 시작 방법', '유튜브 게임방송', 'OBS 설정', '방송 장비'],
    readingTime: 6
  },
  {
    id: '14',
    title: '오픈월드 게임 초보 팁 | 길 잃지 않고 진행하는 우선순위 정리',
    summary: '오픈월드 게임은 자유도가 높아 초보자일수록 무엇부터 해야 할지 막막할 수 있습니다. 오픈월드 게임 초보 팁과 진행 우선순위를 정리합니다.',
    content: POST_CONTENTS['open-world-beginner-guide'],
    category: 'guide',
    date: '2026-01-14',
    slug: 'open-world-beginner-guide',
    views: 3124,
    tags: ['오픈월드 게임 초보', '오픈월드 팁', '길 안 잃는 법', '탐험 우선순위', 'RPG 초보'],
    readingTime: 6
  },
  {
    id: '13',
    title: '모바일 RPG 초반 육성 순서 | 무과금 초보가 먼저 해야 할 것',
    summary: '모바일 RPG는 초반 자원 사용 순서를 잘못 잡으면 성장 정체가 빨리 옵니다. 모바일 RPG 초반 육성 순서와 무과금 초보가 먼저 해야 할 것을 정리합니다.',
    content: POST_CONTENTS['mobile-rpg-beginner-guide'],
    category: 'guide',
    date: '2026-01-13',
    slug: 'mobile-rpg-beginner-guide',
    views: 2156,
    tags: ['모바일 RPG 초반 육성', '무과금 초보', '재화 관리', '캐릭터 육성', '모바일게임 팁'],
    readingTime: 6
  },
  {
    id: '1',
    title: 'FPS 초보 설정 추천 | 감도 크로스헤어 먼저 맞추는 입문 가이드',
    summary: 'FPS를 처음 시작하면 에임 연습보다 감도와 크로스헤어 같은 기본 설정부터 맞추는 것이 중요합니다. FPS 초보 설정 추천과 입문자가 먼저 익혀야 할 기본기를 정리합니다.',
    content: POST_CONTENTS['fps-beginner-guide-2026'],
    category: 'guide',
    date: '2026-01-12',
    slug: 'fps-beginner-guide-2026',
    views: 2847,
    tags: ['FPS 초보 설정', '감도 추천', '크로스헤어', 'FPS 입문', '에임 기초'],
    readingTime: 6
  },
  {
    id: '2',
    title: 'MOBA 라인전 초보 팁 | CS 웨이브 딜교 순서 쉽게 이해하기',
    summary: 'MOBA 라인전은 한 번에 모든 것을 잘하려 하면 더 어렵습니다. MOBA 라인전 초보 팁과 CS, 웨이브, 딜교 순서를 쉽게 이해할 수 있게 정리합니다.',
    content: POST_CONTENTS['moba-laning-phase-guide'],
    category: 'strategy',
    date: '2026-01-11',
    slug: 'moba-laning-phase-guide',
    views: 3201,
    tags: ['MOBA 라인전 초보', 'CS 연습', '웨이브 관리', '딜교 타이밍', '라인전 팁'],
    readingTime: 7
  },
  {
    id: '3',
    title: '모바일 RPG 성장 막힘 해결 | 전투력 안 오를 때 보는 육성 우선순위',
    summary: '모바일 RPG에서 전투력이 안 오르는 이유는 캐릭터 수보다 육성 우선순위가 흐린 경우가 많습니다. 모바일 RPG 성장 막힘 해결 방법을 정리합니다.',
    content: POST_CONTENTS['mobile-rpg-progression-system'],
    category: 'guide',
    date: '2026-01-10',
    slug: 'mobile-rpg-progression-system',
    views: 1856,
    tags: ['모바일 RPG 성장 막힘', '전투력 안 오를 때', '육성 우선순위', '재화 부족', '모바일게임 공략'],
    readingTime: 6
  },
  {
    id: '4',
    title: 'RTS 자원관리 초보 공략 | 초반 빌드 꼬이지 않게 운영하는 법',
    summary: 'RTS에서 자원 관리가 흔들리면 생산과 방어 타이밍도 같이 꼬입니다. RTS 자원관리 초보 공략과 초반 빌드 운영법을 쉽게 정리합니다.',
    content: POST_CONTENTS['strategy-game-resource-management'],
    category: 'strategy',
    date: '2026-01-09',
    slug: 'strategy-game-resource-management',
    views: 2134,
    tags: ['RTS 자원관리', '초반 빌드', '전략게임 초보', '운영법', '생산 관리'],
    readingTime: 7
  },
  {
    id: '5',
    title: '오픈월드 맵 탐험 팁 | 숨겨진 요소보다 먼저 챙길 진행 동선',
    summary: '오픈월드 맵 탐험은 무작정 돌아다니면 금방 피로해질 수 있습니다. 오픈월드 맵 탐험 팁과 진행 동선 짜는 법을 정리합니다.',
    content: POST_CONTENTS['open-world-exploration-tips'],
    category: 'guide',
    date: '2026-01-08',
    slug: 'open-world-exploration-tips',
    views: 2945,
    tags: ['오픈월드 맵 탐험', '진행 동선', '탐험 팁', '수집 피로 줄이기', '오픈월드 공략'],
    readingTime: 6
  },
  {
    id: '6',
    title: '게임 멘탈 잡는 법 | 경쟁전에서 화 안 나게 생각 정리하는 방법',
    summary: '경쟁전에서 화가 나면 실수 복구보다 실수 확대가 빨라집니다. 게임 멘탈 잡는 법과 경쟁전에서 감정적으로 무너지지 않는 생각 정리법을 설명합니다.',
    content: POST_CONTENTS['competitive-gaming-mindset'],
    category: 'strategy',
    date: '2026-01-07',
    slug: 'competitive-gaming-mindset',
    views: 3567,
    tags: ['게임 멘탈 잡는 법', '경쟁전 멘탈', '화 안 나는 법', '틸트 관리', '랭크 마인드'],
    readingTime: 7
  },
  {
    id: '7',
    title: '스팀 인디게임 추천 | 유명작 말고 숨은 명작 찾는 기준',
    summary: '스팀에서 인디게임을 고를 때는 유명세보다 플레이 구조와 취향 기준이 더 중요합니다. 스팀 인디게임 추천을 찾는 입문자를 위해 고르는 기준을 정리합니다.',
    content: POST_CONTENTS['indie-game-hidden-gems-2026'],
    category: 'review',
    date: '2026-01-06',
    slug: 'indie-game-hidden-gems-2026',
    views: 2678,
    tags: ['스팀 인디게임 추천', '숨은 명작', '인디게임 찾는 법', '스팀 게임 추천', '취향별 게임'],
    readingTime: 6
  },
  {
    id: '8',
    title: '게임기 살까 PC 맞출까 | 2026 입문자용 선택 기준 정리',
    summary: '게임기 구매와 PC 맞춤 사이에서 고민할 때는 성능보다 예산과 플레이 습관을 먼저 봐야 합니다. 게임기 살까 PC 맞출까 고민하는 입문자용 기준을 정리합니다.',
    content: POST_CONTENTS['console-vs-pc-gaming-2026'],
    category: 'review',
    date: '2026-01-05',
    slug: 'console-vs-pc-gaming-2026',
    views: 4123,
    tags: ['게임기 살까 PC 맞출까', '콘솔 vs PC', '입문자 선택', '예산 비교', '게임 환경'],
    readingTime: 7
  },
  {
    id: '9',
    title: 'OBS 방송 세팅 초보 가이드 | 게임화면 송출 기본 설정 순서',
    summary: 'OBS를 처음 만질 때는 메뉴가 많아 보여도 핵심 설정은 몇 가지로 압축됩니다. OBS 방송 세팅 초보 가이드와 게임화면 송출 기본 설정 순서를 정리합니다.',
    content: POST_CONTENTS['game-streaming-setup-guide'],
    category: 'guide',
    date: '2026-01-04',
    slug: 'game-streaming-setup-guide',
    views: 3421,
    tags: ['OBS 방송 세팅', '게임화면 송출', 'OBS 초보', '방송 설정', '입문 가이드'],
    readingTime: 7
  },
  {
    id: '10',
    title: '프로게이머 되는 법 현실편 | 준비 과정과 진로 고민 체크리스트',
    summary: '프로게이머를 꿈꾼다면 실력만큼 중요한 것은 현실적인 준비 과정과 진로 기준입니다. 프로게이머 되는 법 현실편으로 입단 준비와 이후 진로를 정리합니다.',
    content: POST_CONTENTS['esports-career-guide'],
    category: 'guide',
    date: '2026-01-03',
    slug: 'esports-career-guide',
    views: 5234,
    tags: ['프로게이머 되는 법', 'e스포츠 진로', '프로게이머 현실', '입단 준비', '게임 직업'],
    readingTime: 7
  },
  {
    id: '11',
    title: '가성비 게이밍 PC 맞추기 | 2026 초보자 예산별 부품 선택법',
    summary: '가성비 게이밍 PC를 맞추려면 최신 부품보다 예산 안에서 병목 없는 구성을 만드는 것이 중요합니다. 2026 초보자 예산별 부품 선택법을 정리합니다.',
    content: POST_CONTENTS['gaming-hardware-buying-guide-2026'],
    category: 'review',
    date: '2026-01-02',
    slug: 'gaming-hardware-buying-guide-2026',
    views: 4567,
    tags: ['가성비 게이밍 PC', '예산별 PC', '부품 선택법', '게이밍 PC 초보', '2026 PC 조립'],
    readingTime: 8
  },
  {
    id: '12',
    title: '게임 오래 해도 건강 지키는 법 | 과몰입 줄이는 생활 습관 정리',
    summary: '게임을 좋아해도 수면과 생활 균형이 무너지면 만족도도 같이 떨어질 수 있습니다. 게임 오래 해도 건강 지키는 법과 과몰입 줄이는 생활 습관을 정리합니다.',
    content: POST_CONTENTS['game-addiction-prevention'],
    category: 'guide',
    date: '2026-01-01',
    slug: 'game-addiction-prevention',
    views: 2890,
    tags: ['게임 오래 해도 건강', '과몰입 예방', '게임 습관', '수면 관리', '생활 균형'],
    readingTime: 7
  }
];
