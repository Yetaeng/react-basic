# 📇 Youtube Clone Project
## 👀 Preview
<p align="center">
  <img width="600" alt="popular" src="https://user-images.githubusercontent.com/56065130/196853117-ddae5525-64a0-46a3-b6ab-7ffd2f43ad16.png">
</p>
<p align="center">
  <img width="600" alt="watch" src="https://user-images.githubusercontent.com/56065130/196853131-5548306a-c22b-4b24-9d7f-2b759a66c3b5.png">
</p>

## 🧸 Description
YouTube Data API를 활용하여 youtube의 인기 동영상, 검색, 동영상 재생 기능들을 구현했습니다.<br /><br />

## 🛠 Stacks
HTML, CSS, PostCSS, React, React Router, Youtube data APIs, axios<br /><br />

## 🎡 Functions
* 인기동영상 10개 가져오기
* 동영상 검색
* 동영상 재생 및 관련 정보 보여주기

>🪂 새로고침이 가능합니다. <br /><br />

## 🖍 I learned
### ✅ useState의 초기값이 null일 때와 []일 때의 차이
관리해야 할 상태값이 하나일 때는 배열을 사용하여 처리할 필요가 없다. 하지만 예를 들어 여러 개의 동영상을 관리해야한다면 배열을 사용해 상태값을 관리해야 한다.

만약 배열로 관리되어야 할 상태값이 null로 초기화가 되어 있고, 이 상태값이 나중에 매핑되는 부분이 있다면 axios 통신을 할 때 에러가 나게 된다. 왜냐하면 리액트 컴포넌트가 서버에 데이터를 요청을 할 때, 기다리지 않고 렌더링을 하는데 이때 null을 초기 값으로 갖고 있다면 `null.map(…)`가 되면서 에러가 발생하게 된다. <br /><br />

### ✅ useState의 지연 초기화를 통해 컴포넌트 속도 향상시키기
``` javascript
const [selectedVideo, setSelectedVideo] = useState(() => 
    JSON.parse(sessionStorage.getItem('selectedVideo')) || null
  );
```
selectedVideo의 상태 초기화 부분에 파싱한 값을 바로 초기값으로 설정해주는 것이 아니라, 함수를 인자로 넘겨 파싱한 값을 반환하도록 한다. 이렇게 직접적인 값 대신 함수를 useState의 인자로 넘기는 것을 '지연 초기화'라고 한다. localStorage에서 값을 읽거나, 배열 .map(), .filter(), .find() 등을 사용할 때 처럼 계산 비용이 큰 경우, 지연 초기화를 사용하면 컴포넌트 성능을 향상시킬 수 있다.