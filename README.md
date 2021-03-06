# JS Board

Vue.js와 Node.js 서버를 연결하여 설계한 API를 통해 서버에 요청을 하면  
MongoDB에 저장된 데이터를 CRUD 할 수 있는 게시판 웹사이트입니다.

## 구현 기능

<ul>
  <li>게시글 추가</li>
  <li>게시글 읽기</li>
  <li>게시글 수정</li>
  <li>게시글 삭제</li>
  <li>게시글 검색</li>
</ul>

## 기술 스택

<ul>
  <li>Vue.js</li>
  <li>Bootstrap</li>
  <li>Node.js</li>
  <li>MongoDB</li>
</ul>

## API 설계

| CRUD | Method | Route |
| --- | --- | --- |
| 게시글들의 목록 표시 | GET | /posts |
| 게시글 하나의 내용 표시 | GET | /posts/:id |
| 게시글을 생성 | POST | /posts |
| 게시글을 수정 | PUT | /posts/:id |
| 게시글을 삭제 | DELETE | /posts/:id |
| 게시글을 검색 | POST | /search |

## 개발 일지

2021-12-08 ----- 프로젝트 생성 및 서버 연결  
2021-12-09 ----- MongoDB 연결  
2021-12-11 ----- 게시글 읽기, 추가, 삭제 기능 구현  
2021-12-13 ----- 게시글 수정 기능 구현  
2021-12-14 ----- 게시글 수정 시 입력란에 기존값이 나타나도록 구현, 서버 환경변수 추가  

2021-12-16 ----- 일부 API 모듈화  
2021-12-19 ----- 게시글 검색 기능 구현 (검색어와 완벽하게 같은 제목의 게시글만 검색)  
2021-12-20 ----- 게시글 검색 기능 수정 (검색어가 포함되는 제목의 게시글 모두 검색)  
2021-12-22 ----- 게시글 작성일 및 시퀀스 아이디 추가, 게시글 내림차순 정렬, 스피너 추가  
2021-12-23 ----- 게시글 공백 입력 및 공백 검색시 예외 처리, 페이징 기능 구현  

2021-12-24 ----- 게시글 삭제시 페이지 자동 전환 구현, 게시글 삭제 모달창 추가  
2021-12-27 ----- 페이지 컴포넌트 간소화, 1페이지에서 게시글 삭제시 오류 수정  
2021-12-28 ----- Day.js 라이브러리를 이용한 게시글 작성일 포맷팅  
2021-12-29 ----- 게시글 내용 개행 표시, UI 수정  
2021-12-30 ----- 페이지 이동시 작성일이 변경되지 않는 오류 수정, 게시글 제목 한 줄 처리  

2022-01-10 ----- API 경로명 수정 (post → posts)
