# Google AdSense 승인 체크리스트

이 문서는 Plentyer 블로그가 Google AdSense 승인을 받기 위해 완료해야 할 모든 항목을 정리한 것입니다.

## ✅ 완료된 항목

### 1. 콘텐츠 (Content)
- [x] **12개 고품질 게시글 작성** (각 900-1400자)
  - FPS 게임 입문자 가이드
  - MOBA 게임 라인전 마스터
  - 모바일 RPG 육성 시스템
  - 전략 게임 자원 관리
  - 오픈월드 게임 탐험 가이드
  - 경쟁 게임 마인드셋
  - 2026년 인디 게임
  - 콘솔 vs PC 게이밍 비교
  - 게임 스트리밍 세팅
  - 프로게이머 커리어 가이드
  - 게이밍 하드웨어 구매 가이드
  - 게임 과몰입 예방법

- [x] **독창적 콘텐츠**: 모든 글은 완전히 새로 작성됨 (복사/표절 없음)
- [x] **정보성 콘텐츠**: 실제 가치를 제공하는 가이드, 팁, 분석
- [x] **카테고리 분류**: 가이드, 공략, 리뷰로 명확히 분류

### 2. 필수 페이지 (Required Pages)
- [x] **About 페이지** (`/about`)
  - 사이트 미션과 비전
  - 제공하는 콘텐츠 설명
  - 콘텐츠 작성 원칙 (정확성, 독창성, 사용자 중심, 지속적 업데이트, 접근성)
  - 팀 소개
  - 핵심 가치
  - 면책사항

- [x] **Contact 페이지** (`/contact`)
  - 문의 폼 (이름, 이메일, 제목, 내용)
  - 이메일 주소 공개 (contact@plentyer.com, privacy@plentyer.com, partner@plentyer.com)
  - 문의 유형 안내
  - 운영 시간 정보
  - 자주 묻는 질문

- [x] **Privacy Policy** (`/privacy-policy`)
  - 개인정보 처리 목적
  - 보유 기간
  - 처리하는 개인정보 항목
  - 제3자 제공 정책
  - 위탁 업체 정보
  - **쿠키 및 자동 수집 정보**
  - **Google AdSense 관련 정보**
  - **제3자 광고 서비스 안내**
  - **웹 로그 분석**
  - 정보주체 권리
  - 개인정보 파기 절차
  - 보호책임자 정보
  - 아동 개인정보 보호
  - 변경 고지

- [x] **Terms of Service** (`/terms`)
  - 목적 및 정의
  - 약관 게시와 개정
  - 회원가입 절차
  - 서비스 제공 및 변경
  - 서비스 중단 조건
  - 회원 의무
  - 개인정보 보호
  - 면책 조항
  - **저작권 귀속 및 이용제한**
  - **콘텐츠 및 광고 정책 (AdSense 명시)**
  - **금지 행위**
  - **게시물 관리**
  - 준거법 및 관할법원
  - 부칙

- [x] **Cookies Policy** (`/cookies`)

### 3. 네비게이션 (Navigation)
- [x] **상단 메뉴**: 카테고리, 소개, 문의 링크
- [x] **푸터**: 필수 페이지 링크 (사이트, 법적 고지)
- [x] **Breadcrumb**: 모든 페이지에 경로 표시
- [x] **카테고리 페이지**: 각 카테고리별 글 목록
- [x] **게시글 상세**: 관련글 3개 추천

### 4. SEO 최적화 (SEO Optimization)
- [x] **robots.txt**: 모든 페이지 인덱싱 허용
  ```
  User-agent: *
  Allow: /
  Disallow: /api/
  Disallow: /admin/
  ```

- [x] **sitemap.xml**: 전체 페이지 자동 생성
  - 홈페이지 (priority: 1.0)
  - About, Contact (priority: 0.9, 0.8)
  - 정책 페이지 (priority: 0.5)
  - 카테고리 페이지 (priority: 0.8)
  - 모든 게시글 (priority: 0.7)

- [x] **메타 태그**: 모든 페이지에 적용
  - `<title>`: 고유한 페이지 제목
  - `<meta name="description">`: 페이지 설명 (150-160자)
  - `<link rel="canonical">`: 정식 URL
  - Open Graph 태그 (og:title, og:description, og:url, og:type, og:image)
  - Twitter Card 태그

- [x] **JSON-LD 구조화 데이터**: 게시글 상세 페이지
  ```json
  {
    "@type": "BlogPosting",
    "headline": "...",
    "description": "...",
    "author": {...},
    "publisher": {...},
    "datePublished": "...",
    "mainEntityOfPage": "..."
  }
  ```

- [x] **noindex 차단 없음**: 모든 주요 페이지 인덱싱 가능

### 5. 사용자 경험 (User Experience)
- [x] **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- [x] **접근성**: 
  - 시맨틱 HTML (header, nav, main, footer, article, section)
  - 이미지 alt 텍스트
  - ARIA 레이블
  - 키보드 네비게이션 지원
- [x] **가독성**: 
  - 적절한 폰트 크기 (18px base)
  - 충분한 줄 간격 (line-height: 1.75)
  - 제한된 콘텐츠 너비 (740px)
- [x] **404 페이지**: 커스텀 에러 페이지
- [x] **로딩 상태**: Skeleton 컴포넌트

### 6. 추가 기능 (Additional Features)
- [x] **검색 기능**: 제목, 내용, 태그로 검색
- [x] **태그 시스템**: 각 게시글에 관련 태그
- [x] **읽기 시간**: 예상 읽기 시간 표시
- [x] **조회수**: 게시글 조회수 표시
- [x] **공유 버튼**: 소셜 미디어 공유
- [x] **문의 링크**: 게시글 하단에 문의 안내

### 7. 기술 요구사항 (Technical Requirements)
- [x] **Next.js 16**: 최신 프레임워크 사용
- [x] **TypeScript**: 타입 안정성
- [x] **SSG**: Static Site Generation으로 빠른 로딩
- [x] **이미지 최적화**: Next.js Image 컴포넌트 준비
- [x] **광고 코드 미삽입**: AdSense 승인 전 광고 코드 주석 처리

## ⏳ 배포 전 필수 작업

### 1. 환경 설정
- [ ] 실제 도메인 구매 및 연결
- [ ] HTTPS 설정 (SSL 인증서)
- [ ] `.env.local`에 실제 도메인 URL 설정
  ```
  NEXT_PUBLIC_SITE_URL=https://yourdomain.com
  ```

### 2. 정보 업데이트
- [ ] Contact 페이지 이메일 주소 실제 주소로 변경
- [ ] Privacy Policy 개인정보 보호책임자 정보 업데이트
- [ ] Privacy Policy 연락처 (전화번호, 주소) 실제 정보로 변경
- [ ] About 페이지 팀 정보 실제 정보로 업데이트
- [ ] Footer 저작권 연도 확인

### 3. 콘텐츠 점검
- [ ] 모든 게시글 오탈자 확인
- [ ] 외부 링크 작동 확인
- [ ] 이미지 저작권 확인 (필요시 실제 이미지로 교체)
- [ ] 임시 placeholder 텍스트 제거

### 4. SEO 설정
- [ ] Google Search Console 등록
- [ ] Google Analytics 설치 (선택)
- [ ] 실제 OG 이미지 생성 및 업로드
- [ ] 파비콘 확인

### 5. 성능 최적화
- [ ] Lighthouse 점검 (Performance, Accessibility, SEO 90+ 목표)
- [ ] 이미지 압축 및 최적화
- [ ] 불필요한 코드 제거
- [ ] 빌드 오류 확인

## 📅 AdSense 신청 전 권장 사항

### 1. 운영 기간
- [ ] **최소 6개월 이상 운영** (권장)
- [ ] 주 2-3개 새 글 게시 (꾸준한 업데이트)
- [ ] 기존 글 업데이트 및 관리

### 2. 트래픽
- [ ] 일일 방문자 100명 이상 (권장)
- [ ] Google Analytics로 트래픽 모니터링
- [ ] 다양한 유입 경로 (검색, 소셜, 직접)

### 3. 품질
- [ ] 문법 및 맞춤법 검사
- [ ] 정보 정확성 재확인
- [ ] 사용자 피드백 반영
- [ ] 전문성 강화

## 🚀 AdSense 신청 절차

1. [ ] [Google AdSense](https://www.google.com/adsense) 계정 생성
2. [ ] 사이트 URL 제출
3. [ ] AdSense 코드를 `<head>` 태그에 삽입
4. [ ] 사이트 검토 요청
5. [ ] 승인 대기 (일반적으로 1-4주)
6. [ ] 승인 이메일 수신

## ✅ 승인 후 작업

1. [ ] `public/ads.txt` 파일 생성 및 배포
   ```
   google.com, pub-XXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```
2. [ ] 광고 코드 주석 해제
3. [ ] 광고 단위 생성 및 배치
4. [ ] 광고 성과 모니터링
5. [ ] 광고 위치 최적화

## ⚠️ 주의사항

### 금지 사항
- ❌ 타 사이트 콘텐츠 복사
- ❌ AI 자동 생성 콘텐츠만으로 구성
- ❌ 의미 없는 키워드 나열
- ❌ 클릭 유도 문구 ("여기를 클릭하세요" 등)
- ❌ 성인/도박/불법 콘텐츠
- ❌ 저작권 침해 이미지/동영상
- ❌ 광고와 콘텐츠 구분 불명확

### 승인 거부 시 대처
1. 거부 이유 확인
2. 해당 문제 수정
3. 1개월 후 재신청
4. 콘텐츠 추가 및 품질 개선

## 📚 참고 자료

- [AdSense 프로그램 정책](https://support.google.com/adsense/answer/48182)
- [AdSense 승인 가이드](https://support.google.com/adsense/answer/9724)
- [웹마스터 품질 가이드라인](https://developers.google.com/search/docs/essentials)
- [Google 검색 센터](https://developers.google.com/search)

---

**최종 업데이트**: 2026년 1월 12일  
**프로젝트 상태**: ✅ AdSense 신청 준비 완료 (배포 대기)
