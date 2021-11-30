

# 프로젝트팀명:HeavySmoker 


## 👜👢🧢('HeavySmoker') - 특정 동호회 소셜 커뮤니티
## 프로젝트 시작일 :2021-11-05

## 👜👢🧢[**데모 서비스로 이동**](http://gangstertalk.herokuapp.com/)


--  
<img width="700" alt="스크린샷 2021-10-15 오후 3 51 02" src="https://i.esdrop.com/d/cl3pewp2aooj/G6lV8sxt2F.jpg">

---   

Member. 



이동녘:[깃허브](https://github.com/dongnycklee)  
이성현:[깃허브](https://github.com/coolmarvel)  
전진영:[깃허브](https://github.com/jeonjinoung)  
김현호:[깃허브](https://github.com/alsrhkd101)  



  
  

# 목차
[1.개요](#개요)

[2.목적](#목적)

- 기존 서비스와의 차별점

[3.전체 소스 코드](#전체-소스-코드-click)

[4.사용한 기술](#사용한-기술)

[5.주요 기능](#주요-기능)

[6.발생한 이슈 & 해결 방법](#발생한-이슈--해결-방법)

[7.상세 설명](#상세-설명)

 - DB 구조 (ERD)

 - 전체 흐름도
 
 - 프로젝트 설명 PPT

[8.시연 영상](#시연-영상)

[9.참여인원](#참여-인원-4명)

***

### 개요

특정 커뮤니티 활성화를 위한 동호회SNS 구성

### 목적

>  특정 커뮤니티 활성화를 위한 동호회SNS 구성
> 
> 1. 커뮤니티 활성화
> 2. 프로젝트 경험
> 3. React 구현 숙달
> 

- **기존 서비스와의 차별점**

   - 소켓 I.O 를 활용한 실시간 채팅
   - 커뮤니티 서비스 제공
   

### 전체 소스 코드 [소스](https://github.com/dongnycklee/heavysmoker/tree/sns/sns/smoker_talk)


### 사용한 기술

--  
<img width="700" alt="스크린샷 2021-10-15 오후 3 51 02" src="https://i.esdrop.com/d/cl3pewp2aooj/veY18Ev41Q.png">

---   

- 웹 화면 구성 : `HTML5` `CSS3` `bootstrap` `JavaScript` `Scss` `React`
- 검색 결과 데이터 요청 및 출력 : `jQuery` `Ajax` `JSON` `axios`
- DB 액션 처리 : `MongoDB`
- DBMS : `MongoDB`
- 개발 Tool :`Cloudinary` `Visual Studio Code` `Docker`
- Heroku 배포 : `GitHub` `MongoDB` `Heroku`
- 로그인 Api : `MongoDB`
- 채팅  : `WebRTC`
- 프레임워크 : `NodeJs`
- 프로젝트 관리 Tool : `Google Drive` `GitHub`
- 사용 모듈(v) : 
-   Server: ` "bcrypt": "^5.0.0",
    "concurrently": "^6.0.0",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.11.13",
    "peer": "^0.6.1",
    "socket.io": "^3.1.2"`
    
    Back: `"@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.3",
    "@testing-library/user-event": "^12.6.2",
    "axios": "^0.21.1",
    "moment": "^2.29.1",
    "peerjs": "^1.3.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "react-share": "^4.3.1",
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.8",
    "redux-thunk": "^2.3.0",
    "socket.io-client": "^3.1.2",
    "web-vitals": "^0.2.4"`
### 주요 기능

- 로그인 : 일반 로그인, `MongoDB`
- 회원가입 : `MongoDB`
- 회원정보변경 :`MongoDB`
- 마이페이지 : `MongoDB`
- 실시간채팅:`socket.io, WebRTC, Peer.js`





- Socket.io 의 WebRTC 문제

[상황] WebRTC의 문제

[문제] WebRTC가 Web에서는 작동이 되지만 Mobile에서는 음성 및 영상 채팅이 불가능했던 문제

[해결] 못함.


### "NodeJs ,Socket.IO, WebRTC를 통해 실시간 통신을 구현"

- 실시간 채팅 구현

[상황] 사용자들끼리 실시간 소통을 하기위한 채팅

[문제] Peer서버를 어플리케이션으로 만들 때 adapter.js 같은 라이브러디 미사용시 에러 발생

[해결] 시간 문제상 미해결


** socket.io & WebRTC **

Socket.io란 실시간으로 상호작용하는 웹 서비스를 만드는 기술인 웹소켓을 쉽게 사용할 수 있게 해주는 모듈로 이를 활용해 클라이언트가 실시간 채팅을 할 수 있는 웹을 구현.
PeerJS는 브라우저의 WebRTC 구현을 래핑하여 완전하고 구성 가능하며 사용하기 쉬운 P2P 연결 API를 제공합니다. 
ID만 있으면 피어는 원격 피어에 대한 P2P 데이터 또는 미디어 스트림 연결을 만들 수 있습니다.
크게 이 2개의 모듈을 사용하여 작업을 진행하였으며, 세부적인 설명 들어가겠습니다.

server단과 client단을 나누어 설명하겠습니다.

<img width="400" alt="41" src="https://user-images.githubusercontent.com/89625961/143272229-502f4260-556e-4ef7-a083-6dd1895bc5af.png">

채팅 내용을 저장하기 위해 데이터 베이스도 연결하였으며 사용한 DB는 MONGODB입니다.

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143272514-c70eaa9a-2e5e-4eac-940b-7fa71227d543.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143272629-0cc0b02d-38e0-4cd2-a960-f1fbd824fcbb.png">

DB에 모델링은 위와 같이 하였습니다

socketServer.js는 콜백함수로 .emit 로 보내고 .on으로 받습니다. User.id 값을 include로 받아 똑같이 콜백함수로 보내고 받습니다.

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143272841-d039cd55-639d-42a2-9ba4-0c97c2f8e030.png">

첫 번째로 클라이언트가 접속할 때와 접속을 끊었을 때 구별하는 셋팅과 좋아요 셋팅입니다.

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143272845-02f7ca38-f8bd-49d8-9171-aa0aefc74024.png">

두 번째로 댓글, 팔로우, 알림, 메시지 셋팅입니다.

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143272848-cc5fa022-4b7c-47ed-8595-e5dd506a9b6e.png">

세 번째로 유저 온오프 확인, WebRTc의 전화 셋팅입니다.

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143273657-0460aa0b-9914-4ac6-9cb3-fe624d2fc4d4.png">

라우팅

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143273944-4f14c59f-0b44-41d3-a710-d5b3e72eb463.png">

class로 APIfeatures 생성자와 페이징 셋팅 및 메시지 생성 및 대화 받는 function

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143273949-4c83ab36-8db4-48ce-bb1a-76d932fb54d4.png">

메시지 받기, 메시지 삭제, 대화 삭제 function 셋팅

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143274393-1ba73600-d535-4adc-8118-da89a2abd501.png">

App.jsx에서 Peer를 설정하고 보낼 데이터(payload)를 socket으로 지정

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143274992-b371c291-e6de-4d1a-b7bd-04cc393c0238.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143274999-9ac0746f-226a-40ba-b62a-cd7c1de77b3a.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143275001-8a48bd76-5e93-48fc-852d-ee67d0f82d5c.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143275005-fd8b4383-506e-46d9-84ee-ebf63e55f6a6.png">

socketServer에서 .emit한 User.id, likes, follow, comments, Notification, Message 등을 .on으로 socketclient에서 받는걸 보임

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

이 밑 부분부터는 React에서 각 Component를 아까 Server단에서 셋팅한 socket.io를 어떻게 활용했는지 코드와 데모를 보여드리겠습니다.

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143276066-cc86fd8b-0181-4a8a-9038-47f8de4f70e9.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143277445-b3fd636d-49ae-45be-b90d-10d2c4e08d4f.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143277434-9c604d97-d942-4936-ad02-f25d3d35063b.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143277437-fb108bcc-3482-4797-bfb5-1f5faf6a9341.png">

기본적으로 스페이스바를 누르고 검색 시 모든 유저를 검색할 수 있으며, 사용자의 닉네임으로 따로 연락하고 싶은 사람과 연락을 할 수 있습니다.
해당 유저가 접속해 있는지 알 수 있는 유저 옆에 동그라미에 초록불이 들어오게끔 확인할 수 있으며 유저가 많으면 더보기를 통해 더 볼 수 있게끔 하였습니다.

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143276087-bda9f6b9-b12e-4172-b92f-01b5a448fd41.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143276097-ec533a6f-f6e2-43eb-a19a-ff0718b7c4de.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143277938-4a50cf34-60c0-49af-a215-a0057afd66dc.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143277947-fb34995f-3369-4134-bf00-e7a13b5ad9fb.png">

상대와 실시간으로 대화할 수 있으며 대화 내용, 보낸 시각이 DB에 저장이 되고, 대화 내용 화면이 고정되지 않고 자동 스크롤 됩니다.

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143276110-27b41540-d519-474c-8c7a-c74afd58ab5d.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143276118-309ab07b-a63d-4c30-aa67-ce853a407f11.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143278517-03f96371-623d-4e21-b096-940ac0db3aaa.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143278523-8a328365-fd4b-4c38-b6b6-aedee81aeff8.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143278526-774d70ff-0a79-4924-864a-7e284c5973ce.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143278529-f25ce36d-1bf8-49fb-964d-36a6cc8a1a69.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143278531-8e43401f-ab4c-4283-a420-04c2b1382c6f.png">

WebRTC의 video, call, stream 기능을 활용하였으며 socket 서버를 통하지 않고 Peer.js의 P2P 기능을 활용하였기에 속도부분에서 빠르게 이용할 수 있게 하였지만,
단점으로 구글에서 오픈소스로 제공한 것이라 크롬에서는 작동이 잘 되지만 adapter.js 같은 라이브러리가 없이는 다양한 브라우저(사파리, 익스플로러 등) 에서 호환이 되지 않아 아쉬움이 있습니다.

<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143276162-a2d13e4c-ec18-4d3d-b861-71b8bae5dd38.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143279048-71eb9c98-a7d4-42f8-bcb4-1cd2bfdcef2e.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143279055-759c0be3-9e5a-4ccb-a749-d5528cad44f3.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143279059-3184b1e3-42a0-4d3d-800c-2848d0696bc3.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143279060-8ba902e9-0601-4dd8-bd0e-ae4a3822f6b6.png">

채팅 부분에서 이모지, 사진전송, 위에 나왔던 음성, 영상 전화 버튼 기능을 추가하였습니다.
이미지 전송시 사진은 최대 1024*1024로 고정되며 파일크기는 5mb 이상을 보낼 수 없게 하였습니다.





/////////////////////////////////////////////////////////////////////////////////////////////////////////////

데이터베이스 서버 연결


<img width="400" alt="41" src="https://user-images.githubusercontent.com/89625961/143173043-3685bb86-4e7f-4c08-9732-5fb8b5049e2e.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89625961/143173040-82c9f691-4bef-48e6-96e8-8490380668d2.png">

데이터베이스 MongoDB Atlas 서버 연결

MongoDB Atlas로 데이터베이스를 공유하여 협업하여 프로젝트를 진행하였고
HerokuApp을 활용하여 배포를 하였습니다

컴퓨터를 종료하여도 서버가 계속 돌아가게 유지했습니다


---------------------------------

일단 서버단 코드구성은 아래 이미지와 같다.

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143200197-1ee58e04-893b-4486-a10b-315c1ecc17c8.png">

아래의 기능에 공통적으로 설명이 들어가는것은 Controllers models routes server가 들어갈것이다.
Controllers

Controllers -> auth.js = login 부분

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143200795-4107aa05-a85d-4e47-9e7c-efa0fe27729a.png">

models

models -> user.js

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143201022-1e4bb97a-abc0-40f2-bcb3-95054eba831c.png">
                               
routes
     
routes -> authRouter.js부분

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143201141-ad0ab66b-800f-4068-8efc-37e7e3a98dcd.png">

server

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143201601-2f8f2f61-d13d-4bba-a37e-661dffbf32eb.png">

이렇게 서버 및 백단을 구성을 해놓고 client에서 각 라우터를 api형식으로 불어와준다.
일단 로그인과 로그아웃 회원정보변경등의 값을 불러오려면 client의 프론트단을 구별을 먼저해줘야한다.                     

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

**Client front**

로그인 페이지 [Login]

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143202567-a90e13e9-e44e-4d4c-bc2c-312c1199f281.png">

Client -> pages -> Login.jsx
                                                                                                                 
<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143202961-08cae5ad-431f-4cf0-92ad-aa2dda25fafe.png">
◈로그인 페이지 입니다. 텍스트 안에 값을 넣어주고 그값이 맞으면 홈페이지 화면으로 넘어가도록 하였습니다.


회원가입 페이지 [Register]

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143237166-98f384d2-dd8b-4a95-a1eb-7e3d9ee7d208.png">

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143237642-2ba87dc4-37c2-4d30-9101-bcc190d8f684.png">

◈회원가입 페이지 입니다. 텍스트 안에 값을 넣어주고 그값이 맞는지 유효성검사를 통해 조건문을 달아주었고 그값이 맞다면 다음 홈페이지 화면으로 넘어가도록 하였습니다.
                         
로그아웃 [Logout]

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143204698-deb3c7eb-6e5c-41cc-97d2-51b8febd0b0a.png">
                                                                                                             Client -> component -> header -> Menu
                                                                                                                 
<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143204991-1a45ca39-834e-48ba-9d18-5f60751152f4.png">

◈로그아웃 기능 입니다. 메뉴에있는 로그아웃을 클릭을하면 onclick이벤트로인해 버튼을 눌렀을시 아이디값을 추적하고 그값을 공란 빈칸으로 만들어주고 그리고 페이지는 홈페이지인 로그인페이지로 넘어가도록 해두었다.


회원정보변경 [EditProfileEdit]
                                                                                                                
client -> component -> profile -> info[Editprofile]

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143238277-fba1a632-e714-4823-bcea-ddf1cb22bc69.png">

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143238414-352f34a1-7759-463a-aaad-83360e50368c.png">

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143238564-904bcf57-5957-422c-aa15-a54209779aac.png">

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143238632-a8ed4caf-27ab-4c11-8605-83a6ce915761.png">

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143223226-96fff0fa-5061-49b4-8991-ef44a3101943.png">

◈프로필수정 기능 입니다. 메뉴에있는 프로필 클릭을하면 onclick이벤트로인해 버튼을 눌렀을시 아이디값을 추적하고 아이디값에 맞는 프로필의 페이지로 이동한다 이렇게 되면 info페이지로 넘어오게된다 거기에서 EditProfile 계정수정버튼을 누르면
아이지 계정의 값이 수정되는것을 알 수 있다.


알람기능

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143239565-bc4abf2d-fd79-44cc-86b7-dec43ec10361.png">

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143239761-876fa4b5-d2c5-4558-89fe-057b3843ab67.png">

Client -> components -> Menu -> nav-item dropdown

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143240572-15609069-9e8a-4355-a6a1-1efe6d36567d.png">

◈알림 기능 입니다. 헤더메뉴에있는 알림 클릭을하면 onclick이벤트로인해 버튼을 눌렀을시 auth값을 추적하고 auth값에 맞는 프로필의 알림이 서치된다. 그러면 위의 내용과 같이 누가 나의 포스트의 댓글을 달았는지 누가 메세지를 하였는지 누가 나를 팔로우했는지에 대해서 알림을 확인할 수 있다.


포스트와 스테이터스 [posts, status]

포스트는 내가공유한글과 상대방이공유한그를 보는 부분이고

스테이터스는 내가 공유한부분을 보여주는 부분입니다.



Client -> Component -> Status.jsx 공유하는부분!

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143227661-47537eeb-599b-4db0-9afd-acda9e2fc20e.png">

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143256848-56c0a06f-2afc-4ae5-8386-875f6eadec4e.png">

공유한 부분을 보여주는 부분 [Post.jsx]

Client -> Component -> posts.jsx -> CardBody, CardFooter, CardHeader로 나눔

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143227849-692ba1ac-9cc2-47d8-ae01-83937c5d926e.png">

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143256740-04e2b21b-e79f-4564-a61f-ca9c69c3dac7.png">

◈ Status 기능 입니다. 헤더메뉴에있는 공유하는 input을 클릭하면 onclick이벤트로인해 버튼을 눌렀을시 auth값을 추적하고 status 텍스트에 맞는 이미지와 그리고 글을 값을 저장해주고 그값을 posts에 넘긴다. 그리고 posts.jsx에서 그값을 받고 postcard header,body,footer부분으로 부위를 나뉘어 표현해주었다.이로써 우리는 여러사람의 생각과 글을 볼수도 있었고 나의 글과 사진을 공유하기도 가능했다.

팔로우

client -> component -> RightSideBar[보여지는페이지]

RightSideBar에서 클릭하면 redux/action에서의 함수정의한것을 Follow버튼 컴포넌트를 실행시켜주어서 UserCard의 정보를 컴포넌트를 가져와서 그값을 저장해준다. 그렇게되면 서로 팔로우 했는지 안했는지 알 수 있다.

FollowBtn.jsx
<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143259066-442ec6c6-2e18-4971-ac65-e4d2cd799a0d.png">

UserCard.jsx
<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143259169-17cde38d-85fb-400a-94c6-0e038586be3f.png">

follow 전

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143228000-48ae2891-351c-4113-847f-c1083e9dbc0a.png">
                                                                                                     follow 후

<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143228089-34e993a6-5969-4a85-a68f-efc277a879e6.png">
<img width="400" alt="44" src="https://user-images.githubusercontent.com/89626182/143228141-52b06736-029c-4e81-a4e6-e0a53b3cc6c2.png">



## Post
<img width="400" alt="hh" src="https://user-images.githubusercontent.com/43943231/143334609-3fcc548d-01da-48a6-8e1f-042e986094f2.png">
<img width="400" alt="hh" src="https://user-images.githubusercontent.com/43943231/143334634-0cf77c9f-f8a5-415f-9656-50f17e3cb2da.png">

CardHeader: ![image](https://user-images.githubusercontent.com/43943231/143365263-6d0ba52e-7347-4638-b967-e1eac94a4a03.png)
클릭 시 수정, 삭제, 링크 복사 기능

CardBody: Post의 내용 및 이미지

CardFooter: 좋아요, 댓글, 공유, 관심 게시글 버튼

<img width="400" alt="hh" src="https://user-images.githubusercontent.com/43943231/143334691-24e76001-431c-4f73-8503-7eb470d541a5.png">

StatusModal : Modal창을 활용한 Post생성 화면

<img width="400" alt="hh" src="https://user-images.githubusercontent.com/43943231/143334726-03fb5be0-2a9a-469a-90f8-300c68049164.png">

Post의 CRUD는 gangstertalk >> controllers >> postCtrl.js에서 확인

## Comment, InputComment

<img width="400" alt="hh" src="https://user-images.githubusercontent.com/43943231/143334747-3a1049f4-0d53-4972-8a2d-b795e82f41a9.png">

댓글

<img width="400" alt="hh" src="https://user-images.githubusercontent.com/43943231/143334763-bb8a4d24-e393-4247-8d0d-852e33bbe134.png">
<img width="400" alt="hh" src="https://user-images.githubusercontent.com/43943231/143334772-4cfabd1d-3eb0-4849-9f21-cd2f8c30a6ab.png">

CommentCard: 댓글 frame 구성. 수정 및 답글 입력 시 리렌더링

CommentMenu:  ![image](https://user-images.githubusercontent.com/43943231/143365294-141e8d56-b09d-46aa-a471-02db592182a9.png)
클릭 시 수정, 지우기 기능

CommentDisplay: CommentCard, CommentMenu 컴포넌트를 브라우저에 보여준다
  
답글
  
<img width="400" alt="hh" src="https://user-images.githubusercontent.com/43943231/143334809-f09723e9-73bb-499e-b3bb-10c4c6c5cf64.png">
  
InputComment : CommentCard 컴포넌트에서 onReply 값에 따라 답글 입력창 활성화
  
(Comment의 CRUD는 gangstertalk >> controllers >> commentCtrl.js에서 확인)

## Heroku
프로젝트 배포를 하기 위해 Heroku에 회원가입을 하고, Heroku CLI를 다운로드 한다.
  
회원가입과 다운로드를 하고 heroku.com에 접속해 로그인하면 아래와 같은 화면이 나타난다.
  
Heroku CLI를 설치하면서 만들어 놓은 저장소(gangstertalk)를 클릭한다.
  
<img width="400" alt="hh" src="https://user-images.githubusercontent.com/43943231/143334867-1bf89e44-17ad-46bf-a2bf-4f56cc2b16c7.png">

Deploy 클릭
 
<img width="400" alt="hh" src="https://user-images.githubusercontent.com/43943231/143334883-7a5102b7-d553-4fbe-86d8-3c2eec333aa7.png">
  
VSCode에서 프로젝트 폴더를 열고 터미널을 실행한 뒤 표시된 명령어를 순서대로 입력한다.
  
<img width="400" alt="hh" src="https://user-images.githubusercontent.com/43943231/143334905-68d9c7ed-3991-4c16-ab3f-e3580c94367e.png">
  
배포가 완료되면 저장소_이름.herokuapp.com에 접속해 사이트를 볼 수 있다.
