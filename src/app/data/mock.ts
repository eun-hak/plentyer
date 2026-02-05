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
  {
    id: "1",
    name: "가이드",
    slug: "guide",
    description: "초보자를 위한 게임 시작 가이드와 기본 팁.",
    count: 15,
  },
  {
    id: "2",
    name: "공략",
    slug: "strategy",
    description: "게임 공략, 전략, 고급 팁과 메타 분석.",
    count: 6,
  },
  {
    id: "3",
    name: "리뷰",
    slug: "review",
    description: "최신 게임부터 클래식까지 심도있는 리뷰.",
    count: 6,
  },
];

import { POST_CONTENTS } from "./posts-content";

export const POSTS: Post[] = [
  {
    id: "28",
    title: "FPS 감도, 언제 바꾸고 언제 절대 고정해야 하나",
    summary:
      "FPS에서 감도를 계속 바꾸게 되는 진짜 이유와, 바꿔야 할 때와 절대 고정해야 할 시점을 구분하는 기준을 정리한다. 감도에 흔들리는 플레이어를 위한 현실적인 조언.",
    content: POST_CONTENTS["fps-sensitivity-guide"],
    category: "guide",
    date: "2026-01-29",
    slug: "fps-sensitivity-guide",
    views: 0,
    tags: ["FPS", "감도", "에임", "연습", "멘탈", "가이드"],
    readingTime: 6,
  },
  {
    id: "27",
    title: "FPS 티어별 교전 기준 정리: 왜 나는 여기서 막히는가",
    summary:
      "FPS에서 티어가 오르지 않는 이유는 에임보다 교전 기준이 현재 티어에 맞지 않기 때문이다. 브론즈부터 다이아까지, 각 구간에서 반드시 달라져야 하는 교전 판단 기준을 정리한다.",
    content: POST_CONTENTS["fps-tier-engagement-guide"],
    category: "guide",
    date: "2026-01-28",
    slug: "fps-tier-engagement-guide",
    views: 0,
    tags: ["FPS", "티어", "교전", "랭크", "실력정체", "가이드"],
    readingTime: 6,
  },
  {
    id: "26",
    title: "FPS 포지셔닝 실수 TOP 10: 에임이 좋아도 계속 지는 이유",
    summary:
      "FPS에서 실력이 늘지 않는 가장 큰 원인 중 하나는 잘못된 포지셔닝이다. 랭크 게임에서 가장 자주 반복되는 포지션 실수 10가지를 정리하고, 바로 고칠 수 있는 기준을 제시한다.",
    content: POST_CONTENTS["fps-positioning-mistakes-top10"],
    category: "guide",
    date: "2026-01-27",
    slug: "fps-positioning-mistakes-top10",
    views: 0,
    tags: ["FPS", "포지셔닝", "교전", "데스", "랭크", "가이드"],
    readingTime: 7,
  },
  {
    id: "25",
    title: "FPS 교전에서 죽는 진짜 이유 TOP 7: 에임 말고 먼저 고쳐야 할 것들",
    summary:
      "FPS에서 반복적으로 죽는 원인은 에임보다 교전 판단과 위치 선택에 있는 경우가 많다. 실제 랭크에서 가장 흔하게 발생하는 데스 원인 7가지를 정리하고, 바로 고칠 수 있는 기준을 제시한다.",
    content: POST_CONTENTS["fps-death-reasons-top7"],
    category: "guide",
    date: "2026-01-26",
    slug: "fps-death-reasons-top7",
    views: 0,
    tags: ["FPS", "교전", "데스원인", "포지셔닝", "랭크", "가이드"],
    readingTime: 6,
  },
  {
    id: "24",
    title: "FPS 전용 연습 루틴 가이드: 에임보다 중요한 교전 구조 만들기",
    summary:
      "FPS 게임 실력을 안정적으로 끌어올리기 위한 전용 연습 루틴 가이드. 워밍업, 에임 연습 비중, 교전 판단, 포지셔닝, 즉시 복기까지 랭크 승률로 이어지는 실전 중심 구조를 정리합니다.",
    content: POST_CONTENTS["fps-practice-routine-guide"],
    category: "guide",
    date: "2026-01-25",
    slug: "fps-practice-routine-guide",
    views: 0,
    tags: ["FPS", "연습루틴", "에임연습", "교전", "포지셔닝", "랭크", "가이드"],
    readingTime: 7,
  },
  {
    id: "23",
    title:
      "게임 실력 향상을 위한 연습 루틴 가이드: 많이 하는 것보다 중요한 구조",
    summary:
      "무작정 플레이하는 연습에서 벗어나 워밍업, 핵심 연습, 실전 적용, 복기로 이어지는 게임 연습 루틴을 정리한 가이드. FPS·MOBA·경쟁 게임 전반에 적용 가능한 실력 향상 구조를 제시합니다.",
    content: POST_CONTENTS["gaming-practice-routine-guide"],
    category: "guide",
    date: "2026-01-24",
    slug: "gaming-practice-routine-guide",
    views: 0,
    tags: ["연습루틴", "실력향상", "워밍업", "복기", "경쟁게임", "가이드"],
    readingTime: 7,
  },
  {
    id: "22",
    title:
      "게임 실력에 직접 영향 주는 PC 환경 세팅 가이드: 돈 안 쓰고 체감 올리기",
    summary:
      "해상도·주사율, 윈도우 마우스 가속, 인풋렉 줄이는 옵션, 사운드 방향 인식, 네트워크 체크까지. 장비 구매 없이 설정만으로 체감 성능과 조작 안정성을 끌어올리는 초보자용 PC 게임 환경 세팅 가이드.",
    content: POST_CONTENTS["pc-gaming-settings-guide"],
    category: "guide",
    date: "2026-01-23",
    slug: "pc-gaming-settings-guide",
    views: 0,
    tags: [
      "PC세팅",
      "인풋렉",
      "주사율",
      "마우스 설정",
      "그래픽 옵션",
      "FPS",
      "가이드",
    ],
    readingTime: 7,
  },
  {
    id: "29",
    title: "게임 실력 향상 습관 가이드: 반복의 품질로 성장하는 방법",
    summary:
      "플레이 시간이 늘어도 실력이 정체될 때 점검해야 할 행동 습관을 정리한 가이드. 성과 지표 확인, 무의식적 반복 플레이 경고 신호, 효율적인 복기 방법, 실력 향상 루틴 등 당장 바꿀 수 있는 실용적 방법을 제시합니다.",
    content: POST_CONTENTS["game-improvement-habits-guide"],
    category: "guide",
    date: "2026-01-22",
    slug: "game-improvement-habits-guide",
    views: 2341,
    tags: ["게임 실력", "습관", "성장", "가이드", "연습법", "실력 향상"],
    readingTime: 6,
  },
  {
    id: "21",
    title: "게이밍 하드웨어 구매 리뷰: 체감 성능을 기준으로 한 합리적 선택법",
    summary:
      "게이밍 하드웨어를 CPU/GPU, 메모리/저장장치, 모니터, 입력 장치 등 구성 요소별로 분석한 구매 리뷰. 스펙이 아닌 체감 성능과 사용 목적에 맞는 합리적 선택 기준을 제시합니다.",
    content: POST_CONTENTS["gaming-hardware-buying-review"],
    category: "review",
    date: "2026-01-21",
    slug: "gaming-hardware-buying-review",
    views: 7892,
    tags: ["하드웨어", "PC", "구매가이드", "리뷰", "CPU", "GPU", "모니터"],
    readingTime: 7,
  },
  {
    id: "20",
    title: "콘솔 vs PC 게이밍 리뷰: 플레이 환경에 따른 선택 기준 정리",
    summary:
      "콘솔과 PC 게이밍을 접근성, 성능, 조작 방식, 게임 라이브러리, 비용 등 객관적 기준으로 비교 분석한 리뷰. 사용자의 플레이 성향과 환경에 맞는 선택 기준을 제시합니다.",
    content: POST_CONTENTS["console-vs-pc-gaming-review"],
    category: "review",
    date: "2026-01-20",
    slug: "console-vs-pc-gaming-review",
    views: 6789,
    tags: [
      "콘솔",
      "PC",
      "비교",
      "리뷰",
      "구매가이드",
      "플레이스테이션",
      "Xbox",
    ],
    readingTime: 7,
  },
  {
    id: "19",
    title: "인디 게임 리뷰: 대작과 다른 재미를 만드는 이유",
    summary:
      "인디 게임의 장점과 한계를 객관적으로 분석한 리뷰. 명확한 방향성, 그래픽 스타일, 플레이 타임 특징, 한계 요소, 추천 유저 타입 등 인디 게임의 본질을 정리합니다.",
    content: POST_CONTENTS["indie-game-review"],
    category: "review",
    date: "2026-01-19",
    slug: "indie-game-review",
    views: 5234,
    tags: ["인디게임", "리뷰", "Celeste", "Stardew Valley", "Hades"],
    readingTime: 6,
  },
  {
    id: "18",
    title: "경쟁 게임 마인드셋 공략: 랭크에서 흔들리지 않는 사고방식",
    summary:
      "발로란트, 오버워치, 리그 오브 레전드 등 경쟁 게임에서 안정적인 랭크 플레이를 위한 마인드셋 공략. 통제 가능한 요소 집중, 틸트 인지, 손실 최소화, 커뮤니케이션, 복기 습관 등 판단 구조 안정화 방법을 정리합니다.",
    content: POST_CONTENTS["competitive-gaming-mindset-strategy"],
    category: "strategy",
    date: "2026-01-18",
    slug: "competitive-gaming-mindset-strategy",
    views: 4156,
    tags: ["경쟁게임", "랭크", "마인드셋", "멘탈", "공략", "틸트"],
    readingTime: 7,
  },
  {
    id: "17",
    title: "전략 게임 자원 관리 공략: 패배를 막는 운영의 핵심 원칙",
    summary:
      "RTS와 턴제 전략 게임에서 승패를 좌우하는 자원 관리 공략. 자원 구분, 초반 경제 안정화, 생산 대기열 관리, 확장 타이밍, 전투와 경제의 균형 등 운영 핵심을 정리합니다.",
    content: POST_CONTENTS["strategy-game-resource-management-guide"],
    category: "strategy",
    date: "2026-01-17",
    slug: "strategy-game-resource-management-guide",
    views: 3421,
    tags: ["전략게임", "RTS", "자원관리", "공략", "경제 운영"],
    readingTime: 7,
  },
  {
    id: "16",
    title: "MOBA 라인전 공략: 초반 주도권을 잡는 실전 운영 핵심",
    summary:
      "리그 오브 레전드, 도타 2 등 MOBA 게임의 라인전에서 초반 주도권을 잡기 위한 목표 설정, 파밍 안정화, 웨이브 관리, 견제 타이밍, 시야 장악 등 실전 운영 핵심을 정리합니다.",
    content: POST_CONTENTS["moba-laning-phase-strategy"],
    category: "strategy",
    date: "2026-01-16",
    slug: "moba-laning-phase-strategy",
    views: 3892,
    tags: ["MOBA", "LOL", "도타2", "라인전", "공략", "웨이브 관리"],
    readingTime: 7,
  },
  {
    id: "15",
    title: "게임 스트리밍 시작 가이드: 처음부터 무리 없이 준비하는 방법",
    summary:
      "게임 스트리밍을 처음 시작하려는 유저를 위한 목적 설정, 필수 장비 기준, OBS 기본 설정, 플랫폼 선택, 초반 태도 등 안정적인 방송을 위한 핵심 가이드입니다.",
    content: POST_CONTENTS["game-streaming-beginner-guide"],
    category: "guide",
    date: "2026-01-15",
    slug: "game-streaming-beginner-guide",
    views: 2876,
    tags: ["스트리밍", "방송", "OBS", "초보자 가이드", "게임 팁"],
    readingTime: 6,
  },
  {
    id: "14",
    title: "오픈월드 게임 초보자 가이드: 길 잃지 않고 즐기는 탐험의 기본",
    summary:
      "오픈월드 게임 초보자를 위한 메인 퀘스트 활용법, 맵 해금 전략, 전투 준비 요소, 탐험 보상 판단 기준 등 방향 상실 없이 즐기는 핵심 가이드입니다.",
    content: POST_CONTENTS["open-world-beginner-guide"],
    category: "guide",
    date: "2026-01-14",
    slug: "open-world-beginner-guide",
    views: 3124,
    tags: ["오픈월드", "초보자 가이드", "탐험", "게임 팁", "RPG"],
    readingTime: 6,
  },
  {
    id: "13",
    title: "모바일 RPG 초보자 가이드: 성장 막히지 않게 시작하는 핵심 정리",
    summary:
      "모바일 RPG 초보자를 위한 초반 목표 설정, 캐릭터 육성 전략, 재화 관리, 일일 루틴 정리 등 성장을 막히지 않게 하는 핵심 가이드입니다.",
    content: POST_CONTENTS["mobile-rpg-beginner-guide"],
    category: "guide",
    date: "2026-01-13",
    slug: "mobile-rpg-beginner-guide",
    views: 2156,
    tags: ["모바일게임", "RPG", "초보자 가이드", "육성", "팁"],
    readingTime: 6,
  },
  {
    id: "1",
    title: "FPS 게임 입문자를 위한 완벽 가이드",
    summary:
      "FPS 게임을 처음 시작하는 분들을 위한 마우스 감도 설정, 크로스헤어 배치, 반동 제어 등 핵심 기술을 상세히 설명합니다.",
    content: POST_CONTENTS["fps-beginner-guide-2026"],
    category: "guide",
    date: "2026-01-12",
    slug: "fps-beginner-guide-2026",
    views: 2847,
    tags: ["FPS", "초보자 가이드", "조준", "게임 팁"],
    readingTime: 6,
  },
  {
    id: "2",
    title: "MOBA 게임 라인전 완벽 마스터하기",
    summary:
      "리그 오브 레전드, 도타2 등 MOBA 게임의 라인전 단계에서 우위를 점하는 CS 관리, 웨이브 컨트롤, 교환 타이밍을 알려드립니다.",
    content: POST_CONTENTS["moba-laning-phase-guide"],
    category: "strategy",
    date: "2026-01-11",
    slug: "moba-laning-phase-guide",
    views: 3201,
    tags: ["MOBA", "LOL", "공략", "라인전"],
    readingTime: 7,
  },
  {
    id: "3",
    title: "모바일 RPG 육성 시스템 완벽 이해",
    summary:
      "복잡한 모바일 RPG의 육성 시스템을 효율적으로 활용하는 방법과 자원 관리 전략을 초보자도 쉽게 따라할 수 있게 설명합니다.",
    content: POST_CONTENTS["mobile-rpg-progression-system"],
    category: "guide",
    date: "2026-01-10",
    slug: "mobile-rpg-progression-system",
    views: 1856,
    tags: ["모바일게임", "RPG", "육성", "팁"],
    readingTime: 6,
  },
  {
    id: "4",
    title: "전략 게임 자원 관리의 기술",
    summary:
      "RTS와 턴제 전략 게임에서 승리로 이끄는 자원 관리, 빌드 오더, 확장 타이밍, 유닛 조합 전략을 상세히 다룹니다.",
    content: POST_CONTENTS["strategy-game-resource-management"],
    category: "strategy",
    date: "2026-01-09",
    slug: "strategy-game-resource-management",
    views: 2134,
    tags: ["전략게임", "RTS", "자원관리", "공략"],
    readingTime: 7,
  },
  {
    id: "5",
    title: "오픈월드 게임 탐험 완벽 가이드",
    summary:
      "젤다, 엘든 링 같은 오픈월드 게임에서 숨겨진 요소를 찾고, 효율적으로 탐험하며, 전투와 생존을 마스터하는 방법을 소개합니다.",
    content: POST_CONTENTS["open-world-exploration-tips"],
    category: "guide",
    date: "2026-01-08",
    slug: "open-world-exploration-tips",
    views: 2945,
    tags: ["오픈월드", "탐험", "게임 팁", "RPG"],
    readingTime: 6,
  },
  {
    id: "6",
    title: "경쟁 게임에서 승리하는 마인드셋",
    summary:
      "랭크 게임과 토너먼트에서 최고의 퍼포먼스를 내는 정신적 전략, 패배 극복법, 팀 소통 기술을 프로게이머의 관점에서 설명합니다.",
    content: POST_CONTENTS["competitive-gaming-mindset"],
    category: "strategy",
    date: "2026-01-07",
    slug: "competitive-gaming-mindset",
    views: 3567,
    tags: ["e스포츠", "멘탈", "경쟁", "프로게이머"],
    readingTime: 7,
  },
  {
    id: "7",
    title: "2026년 꼭 해봐야 할 인디 게임",
    summary:
      "대형 게임사가 시도하지 않는 독창적인 게임플레이와 예술성을 가진 2026년 최고의 인디 게임들을 엄선하여 소개합니다.",
    content: POST_CONTENTS["indie-game-hidden-gems-2026"],
    category: "review",
    date: "2026-01-06",
    slug: "indie-game-hidden-gems-2026",
    views: 2678,
    tags: ["인디게임", "리뷰", "추천", "2026"],
    readingTime: 6,
  },
  {
    id: "8",
    title: "콘솔 vs PC 게이밍: 2026년 완벽 비교",
    summary:
      "PS5, Xbox, 게이밍 PC의 장단점을 비용, 성능, 게임 라이브러리, 편의성 측면에서 객관적으로 비교 분석합니다.",
    content: POST_CONTENTS["console-vs-pc-gaming-2026"],
    category: "review",
    date: "2026-01-05",
    slug: "console-vs-pc-gaming-2026",
    views: 4123,
    tags: ["콘솔", "PC", "비교", "구매가이드"],
    readingTime: 7,
  },
  {
    id: "9",
    title: "게임 스트리밍 시작하기 완벽 가이드",
    summary:
      "트위치, 유튜브에서 게임 방송을 시작하려는 분들을 위한 하드웨어 구성, OBS 설정, 방송 품질 향상 노하우를 공유합니다.",
    content: POST_CONTENTS["game-streaming-setup-guide"],
    category: "guide",
    date: "2026-01-04",
    slug: "game-streaming-setup-guide",
    views: 3421,
    tags: ["스트리밍", "트위치", "유튜브", "방송"],
    readingTime: 7,
  },
  {
    id: "10",
    title: "프로게이머가 되는 길: e스포츠 커리어 가이드",
    summary:
      "e스포츠 프로게이머를 꿈꾸는 분들을 위한 현실적인 조언과 입단 과정, 프로 생활의 진실, 은퇴 후 진로까지 솔직하게 다룹니다.",
    content: POST_CONTENTS["esports-career-guide"],
    category: "guide",
    date: "2026-01-03",
    slug: "esports-career-guide",
    views: 5234,
    tags: ["e스포츠", "프로게이머", "커리어", "진로"],
    readingTime: 7,
  },
  {
    id: "11",
    title: "2026년 게이밍 하드웨어 구매 가이드",
    summary:
      "예산대별 최적의 게이밍 PC 구성과 CPU, GPU, 주변기기 선택 기준, 구매 시기 팁까지 하드웨어 전문가의 조언을 담았습니다.",
    content: POST_CONTENTS["gaming-hardware-buying-guide-2026"],
    category: "review",
    date: "2026-01-02",
    slug: "gaming-hardware-buying-guide-2026",
    views: 4567,
    tags: ["하드웨어", "PC", "구매가이드", "2026"],
    readingTime: 8,
  },
  {
    id: "12",
    title: "건강한 게임 습관: 게임 과몰입 예방법",
    summary:
      "게임을 즐기면서도 학업, 건강, 인간관계의 균형을 유지하는 방법과 게임 과몰입의 신호를 인식하고 대처하는 실용적 가이드입니다.",
    content: POST_CONTENTS["game-addiction-prevention"],
    category: "guide",
    date: "2026-01-01",
    slug: "game-addiction-prevention",
    views: 2890,
    tags: ["건강", "게임 습관", "과몰입 예방", "멘탈 케어"],
    readingTime: 7,
  },
];
