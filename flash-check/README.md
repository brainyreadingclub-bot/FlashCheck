# FlashCheck Landing Page

FlashCheck 프리토타입 랜딩페이지 - 시장 수요 검증을 위한 Fake Door 테스트 페이지

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase (leads 테이블)

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Supabase 프로젝트

### Installation

```bash
# 패키지 설치
npm install

# 환경변수 설정
cp .env.local.example .env.local
# .env.local 파일에 Supabase 정보 입력
```

### Supabase Setup

`supabase/schema.sql` 파일의 SQL을 Supabase SQL Editor에서 실행하여 leads 테이블을 생성하세요.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── api/leads/route.ts    # 이메일 수집 API
│   ├── layout.tsx            # 루트 레이아웃
│   ├── page.tsx              # 랜딩페이지
│   └── globals.css           # 전역 스타일
├── components/
│   ├── sections/             # 8개 랜딩페이지 섹션
│   ├── forms/EmailForm.tsx   # 이메일 폼
│   ├── ui/                   # UI 컴포넌트
│   └── layout/               # 레이아웃 컴포넌트
├── lib/
│   ├── supabase/             # Supabase 클라이언트
│   ├── animations.ts         # Framer Motion variants
│   └── utils.ts              # 유틸리티 함수
├── hooks/                    # Custom hooks
├── providers/                # Context providers
└── types/                    # TypeScript types
```

## Sections

1. **Hero** - 메인 헤드라인 + 이메일 폼
2. **Problem** - 문제 제기 (3개 카드)
3. **Solution** - XYZ 프레임워크 (3단계)
4. **Traffic Booster** - 차별점
5. **Safety** - 신뢰/법적 안전
6. **Pricing** - 가격 비교 테이블
7. **Final CTA** - 두 번째 이메일 폼
8. **Footer** - 법적 고지

## Environment Variables

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

Private - All rights reserved
