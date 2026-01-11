
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
  { id: '1', name: 'PC 게임', slug: 'pc', description: 'PC 게임 리뷰, 공략, 추천 게임 소개.', count: 52 },
  { id: '2', name: '콘솔 게임', slug: 'console', description: '플레이스테이션, 엑스박스, 닌텐도 스위치 게임 리뷰와 공략.', count: 38 },
  { id: '3', name: '모바일 게임', slug: 'mobile', description: '모바일 게임 리뷰, 추천, 업데이트 소식.', count: 45 },
  { id: '4', name: 'e스포츠', slug: 'esports', description: '프로 게임 리그, 경기 분석, 선수 소식.', count: 29 },
];

export const POSTS: Post[] = [
  {
    id: '1',
    title: '2025년 최고의 PC 게임 TOP 10',
    summary: '2025년 현재 가장 주목받고 있는 PC 게임들을 리뷰하고 추천합니다.',
    content: `
      <h2>2025년 PC 게임 트렌드</h2>
      <p>2025년은 PC 게임 역사상 가장 풍부한 게임 라인업을 선보이는 해입니다. 다양한 장르에서 혁신적인 작품들이 출시되었습니다.</p>
      
      <h3>액션 RPG의 새로운 기준</h3>
      <p>올해 출시된 액션 RPG들은 그래픽과 스토리텔링의 새로운 기준을 제시했습니다. 특히 오픈월드 구조와 몰입감 있는 전투 시스템이 주목받고 있습니다.</p>
      
      <h3>인디 게임의 부상</h3>
      <p>대형 스튜디오의 작품들 못지않게 독창적인 인디 게임들도 큰 인기를 끌고 있습니다. 독특한 아트 스타일과 혁신적인 게임플레이로 플레이어들을 사로잡고 있습니다.</p>
      
      <h2>추천 게임 목록</h2>
      <p>이번 목록에서는 다양한 장르의 게임들을 선별하여 소개합니다. 각 게임의 특징과 플레이 타임, 추천 포인트를 상세히 다룹니다.</p>
    `,
    category: 'pc',
    date: '2025-01-08',
    slug: 'best-pc-games-2025',
    views: 3420
  },
  {
    id: '2',
    title: '플레이스테이션 5 독점 게임 완전 정복 가이드',
    summary: 'PS5 독점 게임들의 공략, 트로피 획득 팁, 숨겨진 요소까지 모든 것을 알아봅니다.',
    content: `
      <h2>PS5 독점 게임의 매력</h2>
      <p>플레이스테이션 5의 독점 게임들은 차세대 콘솔의 성능을 최대한 활용하여 놀라운 경험을 제공합니다.</p>
      
      <h3>주요 독점작 분석</h3>
      <p>각 독점 게임의 스토리, 게임플레이, 그래픽, 사운드 등을 상세히 분석하고 플레이 팁을 제공합니다.</p>
      
      <h3>트로피 가이드</h3>
      <p>플래티넘 트로피를 위한 상세한 가이드와 각 트로피의 난이도, 예상 소요 시간을 안내합니다.</p>
      
      <h3>숨겨진 요소 발견하기</h3>
      <p>게임 속에 숨겨진 이스터에그, 비밀 지역, 숨겨진 무기 등을 찾는 방법을 알려드립니다.</p>
    `,
    category: 'console',
    date: '2025-01-05',
    slug: 'ps5-exclusive-games-guide',
    views: 2890
  },
  {
    id: '3',
    title: '모바일 게임 최적화 설정 가이드',
    summary: '배터리 수명과 성능을 모두 고려한 모바일 게임 최적 설정법을 알아봅니다.',
    content: `
      <h2>모바일 게임 최적화의 중요성</h2>
      <p>스마트폰으로 게임을 즐기면서 배터리를 절약하고 부드러운 플레이를 유지하는 것은 매우 중요합니다.</p>
      
      <h3>그래픽 설정 최적화</h3>
      <p>기기 성능에 맞는 그래픽 설정을 선택하는 방법과 각 설정이 성능과 배터리에 미치는 영향을 설명합니다.</p>
      
      <h3>배터리 절약 팁</h3>
      <p>게임 플레이 중 배터리를 절약하는 다양한 팁과 설정을 안내합니다.</p>
      
      <h3>발열 관리</h3>
      <p>장시간 플레이 시 발생하는 발열 문제를 해결하는 방법을 제시합니다.</p>
    `,
    category: 'mobile',
    date: '2024-12-28',
    slug: 'mobile-game-optimization',
    views: 1560
  },
  {
    id: '4',
    title: 'LCK 2025 스프링 시즌 전망과 팀 분석',
    summary: '2025년 LCK 스프링 시즌을 앞두고 각 팀의 전력과 우승 후보를 분석합니다.',
    content: `
      <h2>2025 LCK 스프링 시즌 개요</h2>
      <p>2025년 LCK 스프링 시즌이 곧 시작됩니다. 각 팀들의 로스터 변화와 전력을 분석해봅니다.</p>
      
      <h3>강팀들의 로스터 분석</h3>
      <p>각 팀의 신규 영입 선수와 기존 선수들의 조합이 어떻게 작용할지 분석합니다.</p>
      
      <h3>우승 후보 예측</h3>
      <p>시즌 전 각 전문가들의 우승 후보 예측과 그 이유를 살펴봅니다.</p>
      
      <h3>주목할 신인 선수들</h3>
      <p>이번 시즌 주목해야 할 신인 선수들과 그들의 플레이 스타일을 소개합니다.</p>
    `,
    category: 'esports',
    date: '2024-12-15',
    slug: 'lck-2025-spring-preview',
    views: 4230
  },
  {
    id: '5',
    title: '게임 개발자를 위한 Unity 초급 가이드',
    summary: 'Unity 엔진을 처음 시작하는 게임 개발자를 위한 기초 튜토리얼과 팁.',
    content: `
      <h2>Unity 입문하기</h2>
      <p>Unity는 가장 인기 있는 게임 개발 엔진 중 하나입니다. 이 가이드에서는 Unity의 기본 개념부터 실제 게임 제작까지 단계별로 안내합니다.</p>
      
      <h3>Unity 설치 및 프로젝트 설정</h3>
      <p>Unity Hub를 통한 Unity 설치 방법과 새 프로젝트 생성 과정을 설명합니다.</p>
      
      <h3>기본 인터페이스 이해하기</h3>
      <p>Unity 에디터의 주요 창들과 각각의 역할을 알아봅니다.</p>
      
      <h3>첫 게임 만들기</h3>
      <p>간단한 2D 게임을 만들어보며 Unity의 기본 워크플로우를 익힙니다.</p>
    `,
    category: 'pc',
    date: '2024-11-30',
    slug: 'unity-beginners-guide',
    views: 2100
  },
  {
    id: '6',
    title: '모바일 게임 마스터하기: 초보자를 위한 완벽 가이드',
    summary: '모바일 게임을 처음 시작하는 초보자를 위한 기본 가이드와 팁 모음.',
    content: `
      <h2>모바일 게임의 세계</h2>
      <p>모바일 게임은 이제 단순한 시간 때우기용 게임을 넘어서 완전한 게임 경험을 제공합니다.</p>
      
      <h3>게임 선택 가이드</h3>
      <p>초보자가 시작하기 좋은 게임들과 각 장르별 추천 게임을 소개합니다.</p>
      
      <h3>기본 조작법 익히기</h3>
      <p>모바일 게임의 터치 조작법과 제스처를 익히는 방법을 안내합니다.</p>
      
      <h3>게임 내 구매 가이드</h3>
      <p>인앱 구매를 현명하게 하는 방법과 주의사항을 알려드립니다.</p>
    `,
    category: 'mobile',
    date: '2024-10-20',
    slug: 'mobile-gaming-guide',
    views: 1780
  }
];
