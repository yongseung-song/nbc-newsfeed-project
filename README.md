# console.lo9
내일배움캠프 리액트 숙련주차 팀 프로젝트 과제로 제작한 뉴스피드 앱입니다.

## Description
### Concepts
저희 팀은 개발자 커뮤니티 컨셉으로 이 앱을 기획했고 그에 맞춰 앱의 이름을 console-lo9로 지었습니다. 현업 개발자들이나 예비 개발자들이 서로의 노하우 또는 겪고있는 문제점을 기탄없이 공유할 수 있는 뉴스피드 앱을 생각했습니다. 또한 개발자로서 한단계 성장하기 위해 필수적인 사이드 프로젝트에 인원이 부족할 때엔 사람을 구하는 글을 올려 마침 사이드 프로젝트를 하고싶던 개발자와 함께할 수 있도록 하는 뉴스피드 앱을 만들고자 했습니다. 

### Usage
`git clone` 후 `yarn` 또는 `npm install` 로 의존성 설치 후 `yarn start`, `npm run start` 로 실행

### Features
뉴스피드 앱인 만큼 실시간으로 업데이트 되도록 개발했습니다. 이하는 사용 가능한 기능입니다.

- 게시물 CRUD Operations
- 작성자 본인으로 로그인시 본인이 작성한 게시물 삭제 및 수정 
- 프로필 사진 업로드 및 수정
- 게시물에 태그 등록(구현) 및 태그별로 모아보기

이하는 미진한 기능입니다.

- 프로필 사진 업로드시 마이페이지 화면에서 즉각적으로 확인할 수 없음
- 프로필 사진 업로드시 기존에 작성한 게시물에는 이전 프로필 사진이 설정되어있음
- tag를 이용한 연관 게시물 표현 UI가 보기에 좋지 않음
- 새로고침 시 로그인 풀림
- Redux를 이용한 상태관리(Context API로 대채)
- git 관리 : 너무 잦은 브랜치 변경이 예상되어서 브랜치를 잘게 쪼개지 않고 `features/overall` 브랜치로 관리하였음, 이는 옳지 않은 방식임

### Dependencies

```
  "dayjs": "^1.11.10",
  "firebase": "^10.6.0",
  "firebase-tools": "^12.9.1",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-modal": "^3.16.1",
  "react-router-dom": "^6.19.0",
  "react-scripts": "5.0.1",
  "styled-components": "^6.1.1",
  "styled-reset": "^4.5.1",
  "web-vitals": "^2.1.0"
```

### File tree
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜console.lo9.png
 ┃ ┣ 📜darkButton.png
 ┃ ┣ 📜free-icon-down-arrows-2268472.png
 ┃ ┣ 📜github-logo-icon.png
 ┃ ┣ 📜google-logo-icon.png
 ┃ ┣ 📜idcard.png
 ┃ ┣ 📜lightButton.png
 ┃ ┣ 📜logo.svg
 ┃ ┣ 📜logo_alt.svg
 ┃ ┣ 📜profile.png
 ┃ ┗ 📜x_icon.png
 ┣ 📂components
 ┃ ┣ 📂Button
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂footer
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┣ 📂header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Header.style.jsx
 ┃ ┃ ┣ 📜HeaderAuthMenu.jsx
 ┃ ┃ ┣ 📜HeaderAuthModal.jsx
 ┃ ┃ ┣ 📜HeaderAuthModalSignIn.jsx
 ┃ ┃ ┣ 📜HeaderAuthModalSignIn.style.jsx
 ┃ ┃ ┣ 📜HeaderAuthModalSignUp.jsx
 ┃ ┃ ┣ 📜HeaderAuthModalSignUp.style.jsx
 ┃ ┃ ┗ 📜HeaderDropDown.jsx
 ┃ ┣ 📂inputBox
 ┃ ┃ ┗ 📜InputBox.jsx
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┗ 📜Main.style.jsx
 ┃ ┣ 📂modal
 ┃ ┃ ┣ 📜ModalBasic.jsx
 ┃ ┃ ┗ 📜ModalBasic.style.jsx
 ┃ ┣ 📂post
 ┃ ┃ ┣ 📜Post.jsx
 ┃ ┃ ┣ 📜Post.style.jsx
 ┃ ┃ ┗ 📜PostModal.jsx
 ┃ ┣ 📂posts
 ┃ ┃ ┗ 📜Posts.jsx
 ┃ ┣ 📂postsSummary
 ┃ ┃ ┗ 📜PostsSummary.jsx
 ┃ ┣ 📂profile
 ┃ ┃ ┗ 📜Profile.jsx
 ┃ ┣ 📂sidebar
 ┃ ┃ ┗ 📜Sidebar.jsx
 ┃ ┗ 📂tag
 ┃   ┗ 📜Tag.jsx
 ┣ 📂context
 ┃ ┣ 📜AuthContext.js
 ┃ ┣ 📜ModalContext.js
 ┃ ┗ 📜PostContext.js
 ┣ 📂layout
 ┃ ┗ 📜Layout.jsx
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜MyPage.jsx
 ┃ ┣ 📜SignIn.style.jsx
 ┃ ┣ 📜SignUp.jsx
 ┃ ┗ 📜Update.jsx
 ┣ 📂shared
 ┃ ┣ 📂button
 ┃ ┃ ┗ 📜Button.jsx
 ┃ ┗ 📜Router.jsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalColors.jsx
 ┃ ┣ 📜GlobalFonts.jsx
 ┃ ┗ 📜GlobalStyles.jsx
 ┣ 📜.DS_Store
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜firebase.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```
