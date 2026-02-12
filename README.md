## 기술 스택

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React

## 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 4. 프로덕션 빌드

```bash
npm run build
npm start
```

## 주요 기능

### ✅ 완성된 기능

- [x] 12개 고품질 게시글 (각 900-1400자 분량)
- [x] 필수 정책 페이지 (About, Contact, Privacy Policy, Terms of Service)
- [x] 완전한 네비게이션 (Header/Footer)
- [x] 카테고리별 분류 (가이드/공략/리뷰)
- [x] 게시글 검색 기능
- [x] 반응형 디자인 (모바일 최적화)
- [x] SEO 최적화 (메타 태그, Open Graph, Twitter Card)
- [x] JSON-LD 구조화 데이터
- [x] Sitemap.xml 자동 생성
- [x] Robots.txt 설정
- [x] 404 페이지 및 에러 처리

## 페이지 구조

```
/                    - 홈페이지 (최신 글, 추천 콘텐츠)
/about              - 사이트 소개
/contact            - 문의하기
/privacy-policy     - 개인정보처리방침
/terms              - 이용약관
/cookies            - 쿠키 정책
/search             - 게시글 검색
/category/[slug]    - 카테고리별 글 목록
/post/[id]          - 게시글 상세
```

## Google AdSense 승인 체크리스트

### 📋 필수 요구사항

#### 1. 콘텐츠 품질 ✅

- [x] 최소 12개 이상의 고품질 게시글
- [x] 각 게시글 900-1400자 분량
- [x] 독창적인 콘텐츠 (복사/표절 없음)
- [x] 정보성 콘텐츠 (실제 가치 제공)
- [x] 자연스러운 한국어 작성

#### 2. 필수 페이지 ✅

- [x] **사이트 소개 (About)**: 운영 목적, 콘텐츠 작성 원칙
- [x] **문의하기 (Contact)**: 이메일 폼, 연락 수단
- [x] **개인정보처리방침 (Privacy)**: 쿠키, AdSense, 제3자 광고, 권리, 문의처
- [x] **이용약관 (Terms)**: 서비스 범위, 면책, 저작권, 금지행위, 분쟁 해결

#### 3. 네비게이션 ✅

- [x] 모든 페이지에서 접근 가능한 상단 메뉴
- [x] 푸터에 필수 페이지 링크
- [x] 명확한 카테고리 구조
- [x] Breadcrumb 네비게이션

#### 4. SEO 및 인덱싱 ✅

- [x] **robots.txt**: 모든 주요 페이지 인덱싱 허용
- [x] **sitemap.xml**: 전체 페이지 URL 포함
- [x] **메타 태그**: title, description, canonical
- [x] **Open Graph**: 소셜 미디어 공유 최적화
- [x] **JSON-LD**: Article/BlogPosting 구조화 데이터
- [x] noindex/차단 메타 없음

#### 5. 사용자 경험 ✅

- [x] 모바일 반응형 디자인
- [x] 빠른 로딩 속도
- [x] 명확한 타이포그래피
- [x] 접근성 (시맨틱 HTML, alt 텍스트)
- [x] 404 페이지 및 에러 처리

#### 6. 기술 요구사항 ✅

- [x] HTTPS 사용 (배포 시)
- [x] 유효한 도메인
- [x] 18세 이상 운영자
- [x] 광고 코드 미삽입 (승인 전)

### ⚠️ 금지 사항

다음 사항을 반드시 피하세요:

- ❌ 타 사이트 콘텐츠 복사
- ❌ 의미 없는 키워드 나열
- ❌ 성인/도박/불법 콘텐츠
- ❌ 저작권 침해 이미지
- ❌ 과도한 광고 유도 문구
- ❌ 자동 생성 콘텐츠

### 🚀 배포 전 최종 점검

#### 배포 직전

1. [ ] 도메인 연결 및 HTTPS 설정
2. [ ] `.env.local`에 실제 도메인 URL 설정
3. [ ] Contact 페이지의 이메일 주소를 실제 주소로 변경
4. [ ] Privacy Policy와 Terms의 연락처 정보 업데이트
5. [ ] 개인정보 보호책임자 정보 실제 정보로 변경
6. [ ] Google Analytics 설치 (선택)
7. [ ] Google Search Console 등록

#### AdSense 신청

1. [ ] 사이트가 최소 6개월 이상 운영되었는지 확인 (권장)
2. [ ] 주간 2-3개 이상 새 글 게시 (꾸준한 업데이트)
3. [ ] 일일 방문자 100명 이상 (권장)
4. [ ] Google AdSense 계정 생성
5. [ ] 사이트 URL 제출
6. [ ] 승인 대기 (일반적으로 1-4주)

#### 승인 후

1. [ ] AdSense 광고 코드 삽입
2. [ ] `ads.txt` 파일 생성 및 배포
3. [ ] 광고 배치 최적화
4. [ ] 수익 모니터링

## 개발 가이드

### 새 게시글 추가

`src/app/data/posts-content.ts` 파일에 콘텐츠를 추가하고  
`src/app/data/mock.ts`의 `POSTS` 배열에 메타데이터를 추가하세요.

### 카테고리 추가

`src/app/data/mock.ts`의 `CATEGORIES` 배열에 새 카테고리를 추가하세요.

### 스타일 커스터마이징

- `src/styles/`: 전역 CSS 파일
- `tailwind.config.ts`: Tailwind 설정
- `src/app/components/ui/`: UI 컴포넌트

## 성능 최적화

- Next.js App Router의 자동 코드 스플리팅
- 이미지 최적화 (Next.js Image 컴포넌트)
- Static Site Generation (SSG) 활용
- 지연 로딩 (Lazy Loading)

## 접근성

- 시맨틱 HTML 태그 사용
- ARIA 레이블 적용
- 키보드 네비게이션 지원
- 색상 대비 WCAG AA 기준 준수

## 라이선스

This project is private and proprietary.

## 문의

- 이메일: contact@plentyer.com
- 웹사이트: https://plentyer.com

---
