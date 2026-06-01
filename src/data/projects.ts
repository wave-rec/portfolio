export interface Detail {
  title: string
  items: string[]
}

export interface Trouble {
  title: string
  problem: string
  solution: string
}

export interface Project {
  id: string
  badge: string
  name: string
  tagline: string
  platform: string
  role: string
  period: string
  stack: string[]
  accentColor: string
  gradientFrom: string
  gradientTo: string
  details: Detail[]
  links?: { label: string; href: string }[]
  award?: string
  image?: string
  overview?: string
  troubles?: Trouble[]
  takeaways?: string[]
}

export const projects: Project[] = [
  {
    id: 'moa',
    badge: '▣ AI 금융 추천 플랫폼',
    name: 'MoA',
    tagline: '금융 초보자를 위한 AI 맞춤형 예·적금 비교 추천 플랫폼',
    platform: 'Web',
    role: 'Front-End / Back-End — UI·UX 설계, 추천 알고리즘, 프로젝트 리딩',
    period: '2025.11 ~ 2025.12 (24일)',
    stack: ['Vue.js 3', 'Vite', 'Pinia', 'JavaScript', 'Django', 'Python', 'SQLite', 'OpenAI GPT-4o-mini', 'Kakao Maps API'],
    image: '/MoA-preview.png',
    accentColor: '#0EA5E9',
    gradientFrom: 'rgba(14,165,233,0.92)',
    gradientTo: 'rgba(2,100,180,0.85)',
    award: '🏆 SSAFY 관통 프로젝트 우수상',
    details: [
      {
        title: '핵심 기능',
        items: [
          'GPT-4o-mini 프롬프트 엔지니어링 — 연령대별 금융 상품 AI 분석 및 조언',
          '매칭 스코어 알고리즘 — 사용자 조건(금액·기간)별 맞춤 추천 및 예상 수익 자동 계산',
          'Kakao Maps API 연동 — 은행 지점 위치 검색 및 지도 표시',
        ],
      },
      {
        title: '기술 구현',
        items: [
          'FSS 공공 API 연동으로 실시간 금융 상품 데이터 수집 및 파싱',
          '금·은 시세 차트 — 실시간 가격 추적 및 시각화',
          '유튜브 API 연동 금융 교육 콘텐츠 검색 기능',
        ],
      },
      {
        title: 'UX · 설계',
        items: [
          '금융 초보자 친화적 UI — 복잡한 금융 상품을 직관적으로 비교하는 인터페이스',
          '커뮤니티 게시판 — 금융 정보 공유 및 댓글 기능',
          '전체 UI/UX 디자인 및 프로젝트 아키텍처 리딩',
        ],
      },
    ],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/wave-rec/MoA' },
    ],
    overview: 'MoA는 사회초년생이 자신의 재정 상황과 목적에 맞는 예금·적금 상품을 쉽게 비교하고 추천받을 수 있는 금융 상품 추천 서비스입니다. 금융감독원 예적금 데이터를 기반으로 상품 목록·상세·가입 기능을 제공하고, 사용자의 나이·자산·연봉 등 개인 정보를 바탕으로 맞춤형 상품을 추천해 금융 경험이 적은 사용자도 합리적인 선택을 할 수 있도록 설계했습니다. 커뮤니티, 마이페이지, 가입 상품 관리, 금리 그래프 시각화까지 제공해 사용자가 금융 정보를 탐색하고 비교하는 흐름을 구축했습니다.',
    troubles: [
      {
        title: '금융감독원 API 데이터 정규화',
        problem: '예금·적금 상품과 옵션 데이터가 분리되어 있어 상품명, 은행명, 기간별 금리 정보를 화면에 바로 사용하기 어려웠습니다.',
        solution: '상품 기본 정보와 금리 옵션을 분리한 모델 구조로 설계하고, 고유 상품 코드를 기준으로 중복 저장을 방지해 안정적으로 데이터를 적재했습니다.',
      },
      {
        title: '사용자 맞춤 추천 로직 설계',
        problem: '단순히 금리가 높은 상품만 추천하면 사용자 상황을 반영하지 못해 추천의 설득력이 떨어졌습니다.',
        solution: '사용자 정보와 상품 조건을 함께 고려하는 추천 기준을 정의하고, 추천 결과가 없을 경우 대체 메시지를 제공해 예외 상황에서도 UX가 끊기지 않도록 처리했습니다.',
      },
      {
        title: 'Django REST API와 Vue 화면 간 데이터 흐름 연결',
        problem: '로그인 여부, 가입 상품 상태, 상품 상세 정보 등 프론트에서 필요한 데이터가 여러 API에 분산되어 상태 관리가 복잡했습니다.',
        solution: 'DRF Serializer와 Vue Pinia 상태 관리를 활용해 인증 정보와 상품 데이터를 분리 관리하고, 로그인 사용자에게만 가입 기능이 노출되도록 화면 조건을 정리했습니다.',
      },
    ],
    takeaways: [
      'Django REST Framework와 Vue 3를 활용해 백엔드 API 설계부터 프론트엔드 화면 연동까지 전체 서비스 흐름을 직접 구현했습니다.',
      '금융감독원 API, Chart.js, 인증 기능, 사용자 기반 추천 로직을 적용하며 외부 데이터 기반 서비스 개발 경험을 쌓았습니다.',
      '팀 프로젝트에서 기능 단위로 역할을 분담하고 API 명세, 화면 흐름, DB 구조를 맞춰가며 협업 중심의 개발 프로세스를 경험했습니다.',
      '단순 CRUD 구현을 넘어 추천, 가입 상품 관리, 금리 시각화까지 연결하며 사용자 의사결정을 돕는 서비스 구조를 설계했습니다.',
    ],

  },
  {
    id: 'orbit',
    badge: '▣ AIoT 홈케어 서비스',
    name: 'Orbit',
    tagline: '아이의 궤도를 함께하는 AI 홈 케어 파트너 — 자율주행 로봇이 아이를 따라다니며 교감하고 성장 리포트를 제공하는 홈 AIoT 서비스',
    platform: 'iOS · Android · Web (단일 코드베이스)',
    role: 'Front-End — 화면 구현, SSE 실시간 연동, 리포트 파싱 UI',
    period: '2026.01 ~ 2026.02',
    stack: ['TypeScript', 'React Native', 'Expo SDK 54', 'Zustand', 'AsyncStorage', 'React Navigation', 'SSE', 'react-hook-form', 'yup'],
    image: '/Orbit-preview.jpg',
    accentColor: '#1E3A8A',
    gradientFrom: 'rgba(15,40,100,0.96)',
    gradientTo: 'rgba(8,20,60,0.92)',
    details: [
      {
        title: '기술 챌린지',
        items: [
          'SSE + JWT 생명주기 관리 — 토큰 만료 선제 갱신, 401 시 재연결 처리',
          'AI 리포트 비정형 텍스트 → 정규식 파싱 후 섹션 슬라이더 UI 구현',
          '크로스 플랫폼 폰트 전략 분리 — 네이티브 TTF / 웹 CDN woff + 스플래시 타임아웃',
        ],
      },
      {
        title: '성능 최적화',
        items: [
          'useMemo · useCallback으로 스타일·리포트 파싱 재계산 완화',
          'SSE 타임라인 상한(50건), 날짜별 저장 최대 10건으로 메모리 관리',
          '리포트 중복 fetch 방지 — todayReportFetchedRef + 스토어 재사용',
          '리포트 텍스트·이미지 Promise.allSettled 병렬 요청',
        ],
      },
      {
        title: 'UX 설계 포인트',
        items: [
          '미등록 시 리포트 탭 진입 차단 + 잠금 오버레이로 온보딩 유도',
          '우주·탐사 메타포 브랜딩 — 일기형 카드, 손글씨 폰트, 로켓 CTA',
          '다크/라이트 테마 전환, 실시간 주행 상태 칩, 타임라인 "지금 기준" 갱신',
        ],
      },
    ],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/wave-rec/Orbit' },
    ],
    overview: 'Orbit(오르빗)은 맞벌이 가정에서 하원 후 부모 귀가 전 3~4시간 돌봄 공백을 메우는 AI 홈 케어 서비스입니다. 자율주행 로봇이 아이를 추적·교감하고, STT/TTS·LLM으로 눈높이 대화를 하며, Vision·대화 로그를 바탕으로 일일 성장 리포트를 부모에게 전달합니다. 고정형 홈캠(감시·사각지대)과 단순 장난감 로봇(일방적 반응)의 한계를 넘어, 이동형 시야 + 양방향 소통 + 가공된 인사이트를 한 흐름으로 제공합니다. 보호자용 클라이언트는 React Native(Expo)로 iOS·Android·웹을 단일 코드베이스로 지원하며 실시간 로봇 상태(SSE)·리포트 조회·인증을 담당합니다.',
    troubles: [
      {
        title: 'SSE + JWT 생명주기 불일치',
        problem: 'SSE 스트림은 Bearer 토큰이 필요한데, 토큰 만료·401 발생 시 스트림이 끊겨 타임라인·주행 상태가 갱신되지 않는 문제가 반복됐습니다.',
        solution: '네비게이션에서 만료 60초 전 선제 refresh를 예약하고, SSE는 디바이스 등록 완료 + tokenReady 상태일 때만 연결하도록 게이트를 추가했습니다. 401 발생 시 연결 종료 → 토큰 갱신 → 훅 재연결 흐름으로 끊김 없는 실시간 스트림을 유지했습니다.',
      },
      {
        title: 'AI 리포트 비정형 텍스트 파싱',
        problem: '백엔드 report_text가 [섹션 제목] 형태의 비정형 문자열로 내려와 카드·슬라이드 UI에 바로 사용할 수 없었고, 리포트 생성 실패 시에도 동일 컴포넌트를 쓰면 UX가 어색했습니다.',
        solution: 'parseReportSections 함수로 정규식 기반 섹션 분리를 구현하고, 실패 문구 화이트리스트로 단순 안내 + 재생성 CTA를 분기 처리했습니다. 정상·실패 상황 모두 일관된 컴포넌트 구조를 유지했습니다.',
      },
      {
        title: '웹 환경 커스텀 폰트 OTS 에러',
        problem: '탐사 일지용 손글씨 폰트를 웹에서 로컬 OTF/TTF로 로드하면 OTS 파싱 에러가 발생해 폰트가 깨졌습니다.',
        solution: '네이티브는 로컬 TTF, 웹은 CDN woff + FontFace API로 플랫폼별 로딩을 분리했습니다. 손글씨 패키지는 선택적 require + try/catch로 미설치 환경에서도 앱이 중단되지 않도록 처리했습니다.',
      },
    ],
    takeaways: [
      'Expo React Native로 iOS·Android·웹 단일 코드베이스를 운영하며 Zustand + AsyncStorage로 인증·등록·SSE·타임라인 상태를 설계·연동했습니다.',
      'SSE로 디바이스 주행 상태와 타임라인 이벤트를 실시간 반영하고, JWT refresh 타이밍과 연결 게이트를 맞추는 비동기 흐름 설계를 경험했습니다.',
      'AI 출력 비정형 텍스트 파싱, expo-image 디스크 캐시, 이벤트 상한·리포트 스토어 캐시 등 실제 사용자 경험을 고려한 성능 최적화 패턴을 적용했습니다.',
      '반응형 훅 + 스타일 유틸, 웹 428px 레이아웃, 다크/라이트 테마로 보호자 앱 UX를 플랫폼에 무관하게 일관되게 유지했습니다.',
    ],
  },
  {
    id: 'jeolgam',
    badge: '▣ FinOps 대시보드',
    name: 'JeolgamAI',
    tagline: 'AWS · K8s · Prometheus 비용·인프라를 AI 권고까지 연결하는 클라우드 관리 플랫폼',
    platform: 'Web',
    role: 'Front-End — 대시보드, 인프라맵, Prometheus 차트, 공통 셀',
    period: '2026.03 ~ 2026.04',
    stack: ['TypeScript', 'Next.js 16', 'React 19', 'Tailwind CSS v4', 'Custom SVG', 'Dagre', 'Framer Motion', 'App Router', 'BFF'],
    image: '/jeolgamAI-preview.png',
    accentColor: '#EA580C',
    gradientFrom: 'rgba(234,88,12,0.92)',
    gradientTo: 'rgba(154,52,4,0.88)',
    details: [
      {
        title: '기술 챌린지',
        items: [
          'Prometheus 커스텀 SVG 차트 — 실측·rule-based·AI forecast 밴드 합성, 다운샘플링, 라이브러리 미사용',
          'Dagre 기반 K8s 토폴로지 인프라맵 — Deployment/Service/Pod 노드·엣지 자동 배치 + 리소스 하이라이트',
          '앱 셸 멀티 프로젝트 전환 — JWT 갱신 + 전역 reload, 30초 알림 폴링, 401 리다이렉트',
        ],
      },
      {
        title: '성능 최적화',
        items: [
          'useMemo · useCallback으로 필터·정렬·파생 데이터 캐싱',
          '차트 포인트 다운샘플 — 미래 구간 최대 1/4 수준으로 렌더 부담 경감',
          '모듈 레벨 세션·커버리지 캐시로 사이드바·탑바 중복 요청 완화',
        ],
      },
      {
        title: 'UX 설계 포인트',
        items: [
          '다크모드 FOUC 방지 — beforeInteractive 인라인 스크립트로 html.dark 동기화',
          '미연동 메뉴 게이팅 + "연동 필요 →" 배지로 온보딩 유도',
          'useReducedMotion() 모션 접근성, 리스크 레벨별 색·보더 통일, 브랜드 토큰 시스템',
        ],
      },
    ],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/wave-rec/JeolgamAI' },
    ],
    overview: '멀티 클라우드 인프라 비용을 통합 분석하고, AI 기반 절감 권고와 실행 가이드까지 이어주는 FinOps 플랫폼입니다. AWS·Kubernetes·Prometheus를 한 화면에서 묶어 비용·인프라 상태를 분석하고, 최적화 점수·AI 권고·실행/롤백 가이드·통합 리포트(PDF)까지 제공합니다. 비용·모니터링·권고 도구가 흩어져 "얼마나 쓰는지 → 어디가 낭비인지 → 무엇부터 할지"가 끊기는 문제를 해결하기 위해, 연동 → 분석 실행 → 대시보드 → Prometheus 지표·예측 → AI 채팅·리포트까지 한 워크플로로 연결했습니다.',
    troubles: [
      {
        title: '라이트/다크 전환 시 첫 화면 깜빡임 (FOUC)',
        problem: 'React 하이드레이션 전까지 테마가 정해지지 않아, 저장된 다크 설정인데 잠깐 라이트로 보이거나 반대로 깜빡이는 문제가 발생했습니다.',
        solution: 'layout.tsx에서 beforeInteractive 스크립트로 localStorage 테마를 먼저 html 클래스에 반영하고, ThemeProvider에 suppressHydrationWarning을 적용해 하이드레이션 불일치 없이 초기 테마를 안정적으로 고정했습니다.',
      },
      {
        title: '전역 UI 90% 축소(zoom: 0.9) 후 하단 빈 여백',
        problem: 'html { zoom: 0.9 } 적용 시 100vh/min-h-screen이 실제 뷰포트보다 짧아져 사이드바·메인 배경이 아래까지 채워지지 않는 레이아웃 깨짐이 발생했습니다.',
        solution: 'globals.css에서 calc(100dvh / 0.9)로 html과 .min-h-screen 높이를 보정하고, 원인과 의도를 주석으로 명시해 향후 유지보수 시 의도치 않은 변경을 방지했습니다.',
      },
      {
        title: 'Prometheus 대량 시계열 + 예측 구간 SVG 렌더',
        problem: '실측·rule forecast·AI forecast 밴드를 한 차트에 그리면 포인트가 과다해지고, CSS 변수 var(--brand)가 SVG hexToRgba 처리와 맞지 않아 색상이 깨졌습니다.',
        solution: 'downsampleSeries / downsampleBandSeries로 미래 구간 포인트를 축소하고, 테마별 hex 값을 useTheme으로 분리했습니다. 커스텀 LineChart로 actual/forecast 구간과 호버 툴팁을 직접 처리했습니다.',
      },
      {
        title: '미연동 메뉴 진입 시 빈 화면 혼란',
        problem: 'AWS/K8s/Prometheus 미연동 상태에서도 사이드바 메뉴가 열려 데이터·분석이 비어 보여 사용자가 혼란을 겪었습니다.',
        solution: 'main-sidebar.tsx에서 coverage 기준으로 미연동 메뉴를 비활성화하고 "연동 필요 →" 배지로 연동 페이지를 유도했습니다. coverageEvents로 연동 완료 후 사이드바를 실시간 갱신했습니다.',
      },
    ],
    takeaways: [
      'Kubernetes 환경 내 방치되거나 과할당된 낭비 리소스 약 27%를 식별하고, 리소스 최적화 권고 가이드 적용 시 전체 인프라 비용의 약 8% 절감 효과를 확인했습니다.',
      'Next.js App Router + app/api BFF 패턴으로 { ok, data, error } 응답 계약을 화면 전반에 일관되게 적용하는 방법을 익혔습니다.',
      '외부 차트 라이브러리 없이 SVG 시계열·예측 밴드를 직접 설계하며 스케일·다운샘플·인터랙션 구현 경험을 쌓았고, Dagre로 K8s 토폴로지 인프라맵 UI(약 1,600줄)를 구현했습니다.',
      '가시성 높은 클라우드 비용 데이터 제공으로 정량적 기반의 의사결정을 지원하고, 대시보드·연동·Prometheus·인프라맵·리포트·AI 채팅 등 10+ 라우트를 담당했습니다.',
    ],
  },
  {
    id: 'gifted',
    badge: '▣ 3D 시뮬레이션 게임',
    name: 'GIFTED',
    tagline: '제한 시간 안에 선물을 포장·제출하는 크리스마스 3D 아이소메트릭 시뮬레이션',
    platform: 'PC · Steam Demo',
    role: '맵 디자인 · 레벨 디자인 — 스테이지 레이아웃, 오브젝트 배치, 맵 에셋 제작',
    period: '2026.04 ~ 2026.06',
    stack: ['Unity 6', 'URP', 'C#', 'FBX', 'Prefab', 'Material', 'NavMesh', 'Cinemachine', 'ScriptableObject', 'Baked Lightmap'],
    image: '/gifted-preview.png',
    accentColor: '#DC2626',
    gradientFrom: 'rgba(220,38,38,0.95)',
    gradientTo: 'rgba(153,20,20,0.90)',
    details: [
      {
        title: '레벨 디자인 챌린지',
        items: [
          '모듈형 그리드 바닥 시스템 — Stone_Tile 1유닛 고정 + 정수 좌표 스냅 배치로 대량 타일 정렬 문제 해결',
          '스테이지별 테마 에셋 파이프라인 — 모델 100+, 프리팹 160+, 머티리얼 80+ 제작',
          '게임플레이 연동 배치 — 상호작용 감지 거리 2.5m 기준으로 포장 스테이션·선반·썰매 동선 설계',
        ],
      },
      {
        title: 'UX · 난이도 설계',
        items: [
          '선물→포장→리본→썰매 핵심 루프에 맞춘 공간 배치, 아이소 시야 기준 통로 확보',
          '초반 기본 포장 → 중반 컨베이어·물 → 후반 복합 메커니즘으로 스테이지별 난이도 곡선 설계',
          '컨셉별 오브젝트 네이밍으로 팀원이 스테이지 의도를 즉시 파악 가능하게 구성',
        ],
      },
      {
        title: '성능 · 품질',
        items: [
          'Baked Lightmap으로 런타임 조명 부담 완화, BoxCollider 단순화로 MeshCollider 대체',
          '외부·AI 생성 FBX 머티리얼 불일치 → basecolor 텍스처 수동 연결로 파이프라인 정합',
          '개인 작업 씬에서 빌드용 Stage prefab 통합, LOD·수치는 추가 측정 예정',
        ],
      },
    ],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/gifted-hamyeonham/gifted' },
    ],
    overview: '주문에 맞춰 선물을 포장해 배달하는 크리스마스 3D 시뮬레이션 — 플레이어가 산타가 되어 제한 시간 안에 주문서에 맞는 선물을 골라 포장·썰매에 제출하는 타임어택 게임입니다. 단순 미니게임이 아니라 스테이지마다 다른 맵·동선·오브젝트 배치로 난이도와 학습 곡선을 설계하고, 주문·포장·NPC(엘프)·컨베이어가 맞물리는 "포장 공장 시뮬" 느낌을 내는 것이 핵심입니다. Unity 6·URP 기반 PC 빌드로 제작됐으며 Steam 데모 출시를 목표로 합니다.',
    troubles: [
      {
        title: '맵 교체 후 NavMesh·이동 불가',
        problem: 'Stage1-1·1-2 맵 프리팹을 교체한 뒤 플레이어/엘프 이동 경로가 깨지거나 NavMesh 데이터 GUID가 어긋나 이동 불가 상태가 발생했습니다.',
        solution: '맵 프리팹과 NavMesh Surface가 참조하는 .asset을 함께 갱신하고 Unity에서 NavMesh 재 Bake 후 프리팹·씬에 반영했습니다. 맵 교체 시 이동 데이터까지 한 세트로 버전 관리하도록 워크플로를 정리했습니다.',
      },
      {
        title: '오브젝트 추가 시 콜라이더 충돌·동선 막힘',
        problem: '컨베이어, 박스, 래퍼, 테마 오브젝트를 추가하면 콜라이더 겹침·막힌 통로·축 어긋남으로 플레이어와 NPC 동선이 막히는 문제가 반복됐습니다.',
        solution: '맵 축·바닥 레이어·블로킹 볼륨을 단계적으로 수정하고, 프리팹 단위로 위치·스케일을 맞춘 뒤 스테이지별 맵 프리팹과 씬에 반영했습니다. 배치 후 실제 플레이로 인터랙션·이동을 직접 검증했습니다.',
      },
      {
        title: '다수 스테이지 확장 시 작업량·일관성 관리',
        problem: '스테이지가 늘수록 레이아웃·에셋·커밋 단위가 커져 머지·리뷰가 어렵고 에셋 출처 파악이 힘들어졌습니다.',
        solution: '에셋 추가 → 맵 프리팹 배치 → 씬 반영 순으로 커밋을 나누고, Jira 키·브랜치(feat/Stage1_*, fix/NavMesh-*)로 이슈 단위 관리를 적용해 협업 효율을 높였습니다.',
      },
    ],
    takeaways: [
      'Unity 6 + URP 환경에서 씬–맵 프리팹–NavMesh–콜라이더를 한 흐름으로 다루며, "보이는 맵"과 "플레이 가능한 맵"을 분리해서 작업하는 방법을 익혔습니다.',
      '스테이지 단위 레벨 디자인으로 주문·포장·컨베이어·엘프 NPC 동선과 가독성을 맞추고, 모델 100+·프리팹 160+·머티리얼 80+ 에셋 파이프라인을 운영했습니다.',
      '6인 팀, 챕터1 스테이지 7+ 완성, 동시 주문 3건 처리 구조 등 팀 전체 게임플레이 루프를 완성해 데모 시연을 통과했습니다.',
      'Git LFS·브랜치 전략·커밋 메시지(Jira 연동)로 대용량 Unity 프로젝트를 운영하는 경험을 쌓았고, GitLab → GitHub 이관 시 clone·워크스페이스 분리로 협업 환경을 정리했습니다.',
    ],
  },
]
