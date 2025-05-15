# 🎉 Dongguk Spring Festival Web

동국대학교 봄 축제 웹사이트 프론트엔드 레포입니다.  
React + TypeScript + Zustand + TanStack Query 기반으로 제작되었습니다.

---

## 🏗️ 기술 스택

- **React + TypeScript**
- **Vite**
- **Zustand** – 클라이언트 상태 관리
- **TanStack Query (React Query)** – 서버 상태 관리 및 비동기 처리
- **React Router v6** – 클라이언트 라우팅
- **styled-components** – 스타일링
- **Axios** – API 호출
- **Vercel** – 배포 플랫폼

---

## 📁 폴더 구조

```

src/
├── assets/           # 이미지, 폰트 등 정적 자산
├── components/       # 재사용 가능한 UI 컴포넌트
├── pages/            # 페이지 단위 컴포넌트 (라우팅 기준)
├── routes/           # React Router 정의
├── hooks/            # 커스텀 훅
├── api/              # API 호출 함수 (React Query 연동)
├── stores/           # Zustand 상태 관리
├── types/            # 공통 타입 정의
├── utils/            # 유틸리티 함수
├── styles/           # 전역 스타일 or tailwind 설정
├── App.tsx           # 라우팅 설정 포함 메인 컴포넌트
└── main.tsx          # ReactDOM 렌더링 진입점

````

---

## 🌱 브랜치 전략

- `main`: **운영(Vercel Product URL)** 배포용 브랜치
- `develop`: **프리뷰(Vercel Preview URL)** 배포용 브랜치
- `feature/기능명`: 기능 개발 브랜치
  - 예: `feature/guestbook`, `feature/festival-info`
- `fix/버그설명`: 버그 수정 브랜치
  - 예: `fix/mobile-layout`

---

## 🚀 배포 전략 (Vercel)

| 브랜치 | 환경 | 설명 |
|--------|------|------|
| `develop` | Preview 서버 | PR 테스트 및 내부 확인용 |
| `main` | Production 서버 | 실사용자 대상 운영 서버 |

> Vercel의 Git 연동 기능을 통해 각 브랜치에 맞는 환경으로 자동 배포됩니다.

---

## 📝 이슈 및 PR 작성 규칙

### ✅ 이슈 규칙
- 이슈 제목: 작업 내용을 명확히 작성  
- 번호 형식: `#7`, `#23` 등 숫자만 사용  
- 예시: `[Feature] 방명록 페이지 UI`

### ✅ PR 규칙
- 제목: **이슈 제목과 동일하게 작성**
- 본문: `Closes #이슈번호` 명시 필수
- 예시:
  제목: [Feature] 방명록 페이지 UI
  내용: Closes #7

### ✅ PR 체크리스트 템플릿

## ✨ 변경사항 요약
- 어떤 기능/버그가 수정되었는지 서술

## 📂 관련 이슈
Closes #이슈번호

## ✅ 작업 내용 체크리스트
- [ ] 기능 구현 완료
- [ ] UI 확인
- [ ] ESLint/Prettier 적용
- [ ] 기능 테스트 완료


---

## 🔖 커밋 메시지 컨벤션

| 타입         | 설명         | 예시                           |
| ---------- | ---------- | ---------------------------- |
| `init`     | 초기 세팅      | `init: Vite + React + TS 설정` |
| `feat`     | 새로운 기능     | `feat: 방명록 페이지 UI 추가`        |
| `fix`      | 버그 수정      | `fix: 모바일 뷰 깨짐 수정`           |
| `style`    | 스타일 변경     | `style: tailwind 클래스 정리`     |
| `refactor` | 코드 리팩토링    | `refactor: 상태 관리 로직 정리`      |
| `docs`     | 문서 수정      | `docs: README 업데이트`          |
| `chore`    | 설정 변경 등 기타 | `chore: eslint 설정 추가`        |

---

## 📦 설치 및 실행

```bash
# 패키지 설치
npm install

# 로컬 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰 서버 실행
npm run preview
```

---

## 🙌 PR 방법

1. 이슈 생성 → `#번호` 자동 부여됨
2. `feature/기능명` 브랜치 생성
3. 작업 후 `develop` 브랜치로 PR 생성
4. `main` 머지 시 운영 서버 자동 배포

---
