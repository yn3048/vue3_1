# vue3-board 실습

Vue3 게시판 실습 프로젝트

- Node Version: 20.x
- Framework: VueJS 3

## Recommended IDE Setup

- VSCode

## Project Setup

```sh
npm install
```

### json-server 설치

```sh
npm install -D json-server@0.17.4
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### 프로젝트 실행

Npm

```sh
npm run dev
npm run db
```

## 디렉토리 구성

- src/assets/css - 스타일 파일(.css, .scss...)
- src/api - API 호출 관련 디렉토리
- src/components/layouts - 레이아웃에서 사용되는 컴포넌트
- src/components/\* - 특정 View에서 사용되는 컴포넌트
- src/composables - 상태 저장 비즈니스 로직 캡슐화, 재사용
- src/directives - 커스텀 디렉티브 (ex-input 태그 focus)
- src/hooks
- src/plugins - 확장 기능
- src/router - Vue Router
- src/stores - Pinia 상태 관리
- src/views - 대분류로 나누어진 화면
- src/App.vue - 가장 최상위 컴포넌트
- src/main.js - 서버 실행시 가장 먼저 실행되는 js파일, Vue 인스턴스 생성

## 사용 라이브러리

- Vue 3 (^3.4.29) - VueJS
- Vue-Router 4 (^4.0.13) - Route 기능 추가 라이브러리
- Pinia (^2.1.7) - Vue 상태 관리 라이브러리
- Axios (^1.7.2) - HTTP 통신 라이브러리
- Bootstrap5 - UI 프레임워크
- Bootstrap Icons - 부트스트랩 UI 아이콘 모듈
