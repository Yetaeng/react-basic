# 📇 Business Card Maker
## 👀 Preview
### 로그인 화면
<p align="center">
  <img width="600" height="350" alt="login" src="https://user-images.githubusercontent.com/56065130/195014671-279a7882-9c57-4a8b-8a33-d3ca7f1d2bdc.png">
</p>

### 메인 화면
<p align="center">
  <img width="600" height="350" alt="add" src="https://user-images.githubusercontent.com/56065130/195014685-5c9a2b75-aeca-4715-85d4-a7941de21975.png">
</p>

### 반응형 화면
<p align="center">
  <img width="350" height="400" alt="responsive" src="https://user-images.githubusercontent.com/56065130/195015445-9ef6afa7-3186-4383-991f-17cb820b386c.png">
</p>
<br /><br />

## 🧸 Description
React를 이용한 명함 제작 웹 어플리케이션입니다. Firebase를 이용하여 로그인/로그아웃 기능을 구현하였고, 실시간 데이터베이스를 사용하여 카드의 CRUD가 가능하도록 만들었습니다. 또한 추가한 프로필 사진은 Cloudinary 서비스를 이용하여 업로드를 하고 다른 유저나 브라우저에서도 자신의 데이터를 확인할 수 있도록 하였습니다.

ps. 본 프로젝트는 드림코딩 아카데미 리액트 강좌의 실전 프로젝트입니다. 스스로 구현을 해본 후, 강의를 듣고나서 코드를 개선하였습니다. <br /><br />

## 🛠 Stacks
HTML CSS JavaScript React PostCSS Firebase Cloudinary <br /><br />

## 🎡 Functions
* 로그인 / 로그아웃
* 명함 CRUD 기능
* 실시간 데이터베이스
* Cloudinary 이미지 업로드 <br /><br />

## 🖍 I learned
### ✅ 오브젝트 형태로 state를 관리할 때의 장점
➡ 업데이트 할 때 들어오는 데이터의 양이 많고 그 데이터의 집합이 배열로 되어 있다면, 맵핑하는데 시간이 오래걸리고 성능이 저하될 수 있다. 이럴때는 state를 object형태로 관리해주는 것이 좋다.

예를 들어 object의 key를 card.id로 설정하고, value에는 card 자체를 설정해준다. `{ 1: {id: 1, name: dream}, 2: {id: 2, name: happy} }`. 이는 관리할 cards가 많아져도 cards[key]를 이용해 원하는 데이터를 찾으면 되기 때문에 데이터 길이만큼 끝까지 탐색할 필요가 없어진다.
``` javascript
const [cards, setCards] = useState({});
const createOrUpdateCard = card => {
        const updated = { ...cards };
        updated[card.id] = card;
        setCards(updated);
    }
```
 <br /><br />

### ☑️ state를 동기적으로 안전하게 업데이트 하는 방법
➡ state 업데이트 시, 이전 상태의 것을 기반으로 무언가 값을 변경하고 state를 업데이트할 때는 그 시점에 사용하는 state가 오래된 것 일 수도 있다. 그래서 동기적으로 업데이트가 되지 않는 경우가 있다. 이를 방지하려면 컴포넌트 안에 있는 것에 의존하는 것이 아니라, 그 값을 받아 함수 안에서 새로 업데이트를 하면 된다.

예를 들어 setCards 함수안에서 card의 상태를 복사해온 후, id를 이용해 업데이트를 해주는 것이다. 이는 setStateAction 타입으로 이전의 상태 값을 받아서 새로운 값을 만드는 콜백함수로도 이용이 가능함을 말한다.
``` javascript
const handleUpdate = card => {
        setCards(card => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    }
```
 <br /><br />

### ☑️ Dependency Injection
➡ 기존에는 uploader 서비스를 직접 App 컴포넌트에 전달하였다. 하지만 이 서비스가 ImageInput이라는 컴포넌트에 전달되고, 해당 컴포넌트 또한 사용되는 곳이 많아지면서 만일 추후 서비스가 추가된다면, 그때마다 수정해야할 파일들이 많아지는 번거로움이 발생할 것이다. 이것을 개선하고자 ImageInput 컴포넌트를 외부에서 새로 만들어 전달해주면 의존성 주입을 향상시킬 수 있다.

예를 들면 기본적으로 uploader 서비스를 전달하고, 확장성을 위해 사용자가 전달하고자 하는 props들을 그대로 전달하는 FileInput 이라는 새로운 컴포넌트를 만들어 App 컴포넌트에 전달하는 것이다. 이렇게 함으로써 불필요하게 많은 서비스를 전달하지 않아도 되고, 수정이 용이하며, 간단하게 dependency injection을 할 수 있다.
``` javascript
// ...
const auth = new Auth();
const cardRepository = new CardRepository();
const uploader = new Uploader();
const FileInput = props => (
  <ImageInput {...props} uploader={uploader} />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App auth={auth} FileInput={FileInput} cardRepository={cardRepository}/>
    </BrowserRouter>
  </React.StrictMode>
);
```
 <br /><br />

### ☑️ Firebase Realtime Database Sync (v9)
➡ 새로고침 시, 기존 데이터를 불러오기 위해 firebase에 저장되어 있는 데이터와 동기화를 시켜주어야 한다. 주의할 점은 리스너 분리인데, off()를 호출하면서 삭제하고싶은 리스너를 매개변수로 전달해주어야 한다.
``` javascript
syncCards(userId, onUpdate) {
    const db = getDatabase();
    onValue(ref(db, `${userId}/cards`), (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value)
    });
    return () => ref.off(ref(db, `${userId}/cards`));
  }
```
 <br /><br />

### ☑️ memo, useCallback으로 성능 개선 시 주의 할 점
➡ memo나 useCallback을 남발하는 것은 좋지 않다. 처음 구현을 할 때 최대한 사용하지 말고, 나중에 필요한 부분에만 추가해주는 것이 좋다. 즉, 일찍 최적화를 하지 말자는 것이다. 그리고 만일 memo로 감쌌는데도 리렌더링이 발생한다면, useCallback 사용을 고려해봐야 한다.

예를 들면 Header 컴포넌트에 memo를 사용해줬는데도 계속 리렌더링이 발생했었다. 그 이유는 Main 컴포넌트 안의 logout 함수는 지역변수로 선언되어 있는데, Main 컴포넌트가 변경이 될 때마다 계속해서 logout 함수가 새로 만들어진 것이다. 때문에 Main 컴포넌트의 하위 컴포넌트인 Header에 새로운 logout 함수가 계속해서 전달되어 memo를 사용해도 리렌더링이 일어났던 것이다.

이러한 경우 logout 함수에 useCallback을 사용하여 리렌더링을 방지할 수 있다. 주의할 점은 logout 함수 안에서는 auth를 사용하고 있는데, 이는 처음 함수가 만들어졌을 때 저장된 auth를 계속 사용한다는 말이다. 그래서 이럴때는 auth가 변경이 될 때마다 새로운 콜백함수를 만들 수 있도록 dependency list에 auth를 전달해주어야한다.

