# lodics-homepage-renewal
기존 Flash 홈페이지를 React+Next.js 기반으로 홈페이지 리뉴얼
- 개발 기간: 2020.01 ~ 2020.02
- 개발 환경: React, Next.js, Ant Design, Styled Components

## 프로젝트 세팅 Node 버전
```
v16.14.2
```

## 프로젝트 설치 명령어
```
yarn install
```

### 개발 서버 가동 명령어
```
yarn dev
```

### 프로젝트 배포용 파일 생성 명령어
```
yarn build
```

## 디렉토리
```bash
📦lodics-homepage-renewal
 ┣ 📂components                      # 어플리케이션 기능에 사용되는 폴더
 ┃ ┣ 📂AppLayout                       # 모든 페이지에서 공통적으로 사용하는 레이아웃 폴더
 ┃ ┃ ┣ 📜index.js                        # 레이아웃 기능 파일
 ┃ ┃ ┗ 📜styles.js                       # 레이아웃 스타일 파일
 ┃ ┣ 📂Business                        # 비즈니스 그룹에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┣ 📂GoalsVisions                    # 목표 및 비전 페이지에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┃ ┣ 📜index.js                        # 목표 및 비전 기능
 ┃ ┃ ┃ ┗ 📜styles.js                       # 목표 및 비전 스타일
 ┃ ┃ ┗ 📂KeyBusiness                     # 주요 사업 페이지에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┃ ┣ 📜index.js                        # 주요 사업 기능
 ┃ ┃ ┃ ┗ 📜styles.js                       # 주요 사업 스타일
 ┃ ┣ 📂Card                            # 메인 페이지에서 사용하는 카드 컴포넌트 폴더
 ┃ ┃ ┣ 📜index.js                        # 카드 기능
 ┃ ┃ ┗ 📜styles.js                       # 카드 스타일
 ┃ ┣ 📂Company                         # 회사 그룹에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┣ 📂CeoGreeting                     # 인사말 페이지에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┃ ┣ 📜index.js                        # 인사말 기능
 ┃ ┃ ┃ ┗ 📜styles.js                       # 인사말 스타일
 ┃ ┃ ┣ 📂Certification                   # 인증 정보 페이지에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┃ ┣ 📜Card.js                         # 인증 정보의 card 기능 파일
 ┃ ┃ ┃ ┣ 📜index.js                        # 인증 정보 기능
 ┃ ┃ ┃ ┗ 📜styles.js                       # 인증 정보 스타일
 ┃ ┃ ┣ 📂History                         # 이력 페이지에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┃ ┣ 📜HistoryList.js                  # 이력 목록 기능
 ┃ ┃ ┃ ┣ 📜index.js                        # 이력 기능
 ┃ ┃ ┃ ┗ 📜styles.js                       # 이력 스타일
 ┃ ┃ ┗ 📂Location                        # 회사 위치
 ┃ ┃ ┃ ┣ 📜index.js                        # 회사 위치 기능
 ┃ ┃ ┃ ┗ 📜styles.js                       # 회사 위치 스타일
 ┃ ┣ 📂Footer                          # footer 영역 공통 컴포넌트 폴더
 ┃ ┃ ┣ 📜index.js                        # footer 기능
 ┃ ┃ ┗ 📜styles.js                       # footer 스타일
 ┃ ┣ 📂Header                          # header 영역 공통 컴포넌트 폴더
 ┃ ┃ ┣ 📜index.js                        # header 기능
 ┃ ┃ ┗ 📜styles.js                       # header 스타일
 ┃ ┣ 📂IntroText                       # 회사 소개 페이지에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┣ 📜index.js                        # 회사 소개 기능
 ┃ ┃ ┗ 📜styles.js                       # 회사 소개 스타일
 ┃ ┣ 📂PageSemiTitle                   # 페이지 소제목 공통 컴포넌트 폴더
 ┃ ┃ ┣ 📜index.js                        # 페이지 소제목 기능
 ┃ ┃ ┗ 📜styles.js                       # 페이지 소제목 스타일
 ┃ ┣ 📂PageTitle                       # 페이지 제목 공통 컴포넌트 폴더
 ┃ ┃ ┣ 📜index.js                        # 페이지 제목 기능
 ┃ ┃ ┗ 📜styles.js                       # 페이지 제목 스타일
 ┃ ┣ 📂ProductsServices                # 제품 서비스 그룹에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┣ 📂DevelopmentPerformance          # 개발 성과 페이지에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┃ ┣ 📜index.js                        # 개발 성과 기능
 ┃ ┃ ┃ ┗ 📜styles.js                       # 개발 성과 스타일
 ┃ ┃ ┣ 📂EGovernment                     # 전자 정부 페이지에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┃ ┣ 📜index.js                        # 전자 정부 기능
 ┃ ┃ ┃ ┗ 📜styles.js                       # 전자 정부 스타일
 ┃ ┃ ┗ 📂KeyTechnology                   # 주요 기술 페이지에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┃ ┣ 📜index.js                        # 주요 기술 기능
 ┃ ┃ ┃ ┗ 📜styles.js                       # 주요 기술 스타일
 ┃ ┣ 📂Recruitment                     # 채용 페이지에서 사용하는 컴포넌트 폴더
 ┃ ┃ ┣ 📂Content                         # 본문 내용 관련 폴더
 ┃ ┃ ┃ ┣ 📜Benefit.js                      # 복지 내용 파일
 ┃ ┃ ┃ ┣ 📜Policy.js                       # 정책 내용 파일
 ┃ ┃ ┃ ┣ 📜Process.js                      # 채용 프로세스 내용 파일
 ┃ ┃ ┃ ┣ 📜RecruitField.js                 # 채용 분야 내용 파일
 ┃ ┃ ┃ ┗ 📜RecruitmentCard.js              # 채용 제도 내용 파일
 ┃ ┃ ┣ 📜index.js                        # 채용 기능 파일
 ┃ ┃ ┗ 📜styles.js                       # 채용 스타일 파일
 ┃ ┣ 📂ScrollToTop                     # 맨 위로 버튼 공통 컴포넌트 폴더
 ┃ ┃ ┣ 📜index.js                        # 본문 맨 위로 이동 기능 파일
 ┃ ┃ ┗ 📜styles.js                       # 버튼 스타일 파일
 ┃ ┣ 📂SubMenu                         # 서브 메뉴 공통 컴포넌트 폴더
 ┃ ┃ ┣ 📜index.js                        # 서브 메뉴 기능 파일
 ┃ ┃ ┣ 📜Select.js                       # 서브 메뉴의 select menu 기능 파일
 ┃ ┃ ┗ 📜styles.js                       # 서브 메뉴 스타일 파일
 ┃ ┗ 📜index.js                        # 컴포넌트 import용 파일
 ┣ 📂context                         # 전역 상태 관리 폴더
 ┃ ┣ 📜globalState.js                  # 전역 상태 파일
 ┃ ┣ 📜globalStateContext.js           # 전역 상태 컨텍스트 파일
 ┃ ┗ 📜index.js                        # 컨텍스트 import용 파일
 ┣ 📂data                            # json 형태의 데이터가 들어가는 폴더
 ┃ ┣ 📜certification.js                # 인증 현황 json 파일
 ┃ ┣ 📜DevelopmentPerformance.js       # 개발 성능 json 파일
 ┃ ┣ 📜eGovernmentModelDevelopment.js  # 모델 개발 json 파일
 ┃ ┗ 📜history.js                      # 히스토리 json 파일
 ┣ 📂pages                           # 페이지를 담당하는 컴포넌트 폴더 (폴더구조로 url 결정)
 ┃ ┣ 📜business.js                     # 비즈니스 페이지 파일
 ┃ ┣ 📜company.js                      # 회사소개 페이지 파일
 ┃ ┣ 📜home.js                         # 메인 페이지 파일
 ┃ ┣ 📜index.js                        # 초기 호출 화면 설정 파일
 ┃ ┣ 📜productsServices.js             # 제품 서비스 페이지 파일
 ┃ ┣ 📜recruitment.js                  # 채용 페이지 파일
 ┃ ┣ 📜_app.js                         # 각 페이지별 공통 부분 리펙토링하는 파일
 ┃ ┗ 📜_documents.js                   # 전체 페이지 구조 설정 파일
 ┣ 📂public                          # 프로젝트 정적 자산 데이터가 들어가는 폴더
 ┃ ┣ 📂img                             # 이미지 파일 모음 폴더
 ┃ ┃ ┣ 📂business                        # 비즈니스 그룹 화면에서 사용하는 이미지 폴더
 ┃ ┃ ┣ 📂certification                   # 인증 현황 그룹 화면에서 사용하는 이미지 폴더
 ┃ ┃ ┣ 📂productsServices                # 제품 서비스 그룹 화면에서 사용하는 이미지 폴더
 ┃ ┃ ┣ 📂recruitment                     # 채용 그룹 화면에서 사용하는 이미지 폴더
 ┃ ┗ 📜favicon.ico                     # 홈페이지 파비콘 아이콘 파일
 ┣ 📂styles                          # 전역 스타일 모음 폴더
 ┃ ┣ 📜color.js                        # 색상 관련 변수 css 파일
 ┃ ┗ 📜globals.css                     # 전역 css 파일
 ┣ 📜.babelrc                        # 특정 플러그인에 대한 babel 설정 파일
 ┣ 📜.eslintrc.json                  # eslint 설정 파일
 ┣ 📜.gitignore                      # git 버전 관리 제외 파일 목록 설정 파일
 ┣ 📜.prettierrc                     # 코드 포맷팅 설정 파일
 ┣ 📜jsconfig.json                   # 컴파일 옵션 설정 파일
 ┣ 📜next.config.js                  # next 세팅 설정 파일
 ┣ 📜package.json                    # 패키지 모듈 세팅 설정 파일
 ┗ 📜README.md                       # readme 파일
```