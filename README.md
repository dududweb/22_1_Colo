# 🚢 콜로세움 풀필먼트 
# Team5 응급코딩과 🚑

## 프로젝트 소개

![collo](https://user-images.githubusercontent.com/91524565/154792617-4bb0bf83-8fbf-44c9-8652-c17bb5431690.gif)


### 물류 데이터 처리 시스템 화면설계

#### 기존 문제점

- 기존 그리드 테이블 타이틀 부분이 한 줄로 길게 표시되어 스크롤을 해야지만 보이는 문제점과 어떤 항목(ex: 상품명)을 보고 있는지 놓치는 문제가 있었다.

#### 해결 방안

- 기존 필터검색 기능이 상단에 위치하여 많은 행 데이터를 한번에 볼 수 없는 것 같아 좌측에 배치하여 한 눈에 많은 행 데이터를 나타내었습니다.
- 테이블 타이틀 부분을 두 줄로 표현하여 좁은 화면에서 많은 데이터를 담을 수 있도록 하였고 기능구현은 못하였지만 테이블 타이틀 두 줄은 고정시켜 스크롤을 내리더라도 내비게이터 역할을 해주도록 하였다.

### 📝 기능 구현

- [x] 두 가지 셀렉터
- [x] filter된 데이터 검색기능

## 배포 링크

<a href="http://wantedteam5colo.s3-website.ap-northeast-2.amazonaws.com/">배포 링크</a>

## 개발 인원 및 기간

### 개발기간: 2022/2/17~2022/2/19

### 개발 인원: 프론트 2명

- <a href="https://github.com/dnjstd">원소연</a>
- <a href="https://github.com/dududweb">황주영</a>
  <br/><br/>

## 적용 기술 및 협업 툴

### 적용 기술

- Front-End: React.js, React Router, Styled-Component, Recoil, MUI
- Common: AWS S3

### 협업 툴

- Git, Github, Slack, Discord, <a href="https://olive-trapezoid-dec.notion.site/4-Swit-e7c4a7f8bf2e4cf09ea9c1267f0c5d02">Notion</a>

<br/><br/>

## 프로젝트 회고

- [`원소연`]

  - 과제에 주어진 이슈 해결 방안에 대해 팀원과 다양한 아이디어를 내고 소통하면서 즐겁게 풀어낼 수 있었던 과제였습니다. Recoil을 사용해서 전역 상태 관리를 해보았는데, 기존에 사용해봤던 Redux보다 간결한 상태구조와 어렵지 않은 사용법으로 이번 프로젝트에 수월하게 적용하면서 편리함을 느낄 수 있었습니다.

- [`황주영`]

  - 어떤 상황에 유저에게 UI, UX를 어떠한 방식으로 전달하여야 효과적인지 생각해 볼 수 있던 과제였습니다. 이번 과제는 주어진 데이터가 아닌 데이터 형태도 스스로 만들어 보면서 어떠한 패턴으로 코드를 설계해야하는지 정말 많은 수정과 고민을 가졌던 것 같습니다. 시간이 부족하여 반응형을 제대로 구현하지 못한 것이 아쉬웠지만 팀원끼리 서로 어려운 기능, 생각을 공유 하면서 같이 문제를 해결해가는 과정에서 어떤식으로 상대에게 전달하여야 효과적으로 전달 할 수 있는지 알게 되었고(화면공유, 정확한파일명, 변수명 호칭 등) 팀원 간에 협업으로 문제를 해결해가는 과정을 느끼며 다시 한번 협업의 중요성과 힘에 대해 알게 되었습니다.

<br/><br/>

## 설치 및 시작하는 법

- 파일 클론 받기
- git clone https://github.com/dududweb/22_1_Colo.git
- yarn
- yarn start
  </br>
