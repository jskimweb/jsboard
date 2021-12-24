# JS Board

Vue.js와 Node.js 서버를 연결하여 설계한 API를 통해 서버에 요청을 하면  
MongoDB에 저장된 데이터를 CRUD 할 수 있는 게시판 웹사이트입니다.

## 배포 링크

https://jskimweb-jsboard.du.r.appspot.com

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