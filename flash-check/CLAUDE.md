# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**FlashCheck** - 아이디어의 시장성을 코딩 없이 10분 만에 검증하는 프리토타입 자동화 플랫폼.

현재 상태: **Fake Door 테스트용 랜딩페이지** (이메일 리드 수집)

상세 스펙: `/core/FlashCheck.md` 참조

## Commands

```bash
# 개발 서버 실행 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# ESLint 검사
npm run lint
```

## Architecture

### 디렉토리 구조

```
flashcheck/                    # 모노레포 루트
├── core/
│   └── FlashCheck.md          # 마스터 스펙 문서 (PRD, 기술 스택, 데이터 흐름)
└── flash-check/               # Next.js 14 앱
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx     # 루트 레이아웃 + ToastProvider
    │   │   ├── page.tsx       # 메인 랜딩페이지 (8개 섹션 조합)
    │   │   ├── globals.css    # CSS 변수, 디자인 시스템
    │   │   └── api/leads/     # 이메일 수집 API
    │   ├── components/
    │   │   ├── sections/      # 8개 랜딩페이지 섹션
    │   │   ├── forms/         # EmailForm (재사용)
    │   │   ├── ui/            # Button, Input, Card, Badge, Toast
    │   │   └── layout/        # AnimatedSection
    │   ├── lib/
    │   │   ├── supabase/      # client.ts (브라우저), server.ts (서버)
    │   │   ├── utils.ts       # cn(), isValidEmail(), formatNumber()
    │   │   └── animations.ts  # Framer Motion variants
    │   ├── hooks/
    │   │   └── useUTMParams.ts
    │   ├── providers/
    │   │   └── ToastProvider.tsx
    │   └── types/
    └── vercel.json            # 배포 설정
```

### 랜딩페이지 섹션 순서

1. **HeroSection** - 메인 헤드라인 + EmailForm
2. **ProblemSection** - 문제 정의 (스타트업 실패 원인)
3. **SolutionSection** - XYZ 가설 기반 해결책
4. **TrafficBoosterSection** - 차별점 (시장 수요 검증)
5. **SafetySection** - 법적 안전 프로토콜
6. **PricingSection** - 가격 비교 ⚠️ 가격 미정
7. **FinalCTASection** - 두 번째 EmailForm
8. **FooterSection** - 법적 고지

### Supabase 클라이언트 사용

| Context | Import | 용도 |
|---------|--------|------|
| Client Components | `@/lib/supabase/client` | 브라우저 상호작용 |
| Server Components / API Routes | `@/lib/supabase/server` | SSR, 백엔드 작업 |

### API Response 패턴

```typescript
// 성공
{ success: true, data: {...} }

// 실패
{ success: false, error: { code: 'ERROR_CODE', message: '메시지' } }
```

에러 코드: `VALIDATION_ERROR`, `LEAD_ALREADY_EXISTS`, `DATABASE_ERROR`, `INTERNAL_ERROR`

## Design System

**"Brutalist Precision"** 미학 - 컷 코너, 대비 강한 색상, 노이즈 텍스처

### 색상 (CSS 변수)

```css
--ink: #0D0D0D;          /* 텍스트, 배경 */
--ink-muted: #525252;    /* 보조 텍스트 */
--paper: #FAFAFA;        /* 배경 */
--lime: #C6F135;         /* 액센트, CTA */
--coral: #FF6B5B;        /* 에러 */
--electric: #4F46E5;     /* 보조 액센트 */
```

### 폰트

- **Clash Display** (`font-display`) - 헤드라인
- **Satoshi + Pretendard** (`font-body`) - 본문

### 주요 컴포넌트 클래스

- `.btn-primary` - 컷 코너 버튼 (hover: 오프셋 + 그림자)
- `.card-brutal` - 컷 코너 카드
- `.container-wide` / `.container-narrow` - 레이아웃 컨테이너

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Supabase 미설정 시 placeholder 클라이언트가 생성되며, 실제 작업 시 오류 발생.

## Database Schema (leads 테이블)

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  source TEXT NOT NULL,           -- hero_cta, final_cta 등
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Key Conventions

- **한국어** - 모든 사용자 대면 텍스트
- **Mobile-first** - 360px 기준 반응형
- **Framer Motion** - 섹션 진입 애니메이션 (`whileInView`)
- **Lucide React** - 아이콘 (strokeWidth: 1.5 권장)
