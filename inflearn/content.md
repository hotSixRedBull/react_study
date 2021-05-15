## 4
### JSX 문법
class 대신 calssName을 사용한다.
- className을 쓰는 이유는, class는 html 예약어이기 때문.
CSS는 camel case로 사용한다.
- javascript에서 하이픈('-')은 이항연산자이기 때문.

### 바벨
- @babel/core(핵심기능), @babel/cli, @babel/preset-react(리액트를 위한 플러그인)
- 플러그인
  - 하나의 변환하는 기능
- 프리셋
  - 여러개의 플러그인을 모아놓은 것

babel의 `--watch` 옵션은, 파일이 변경될 때 마다 변경해준다.
npx: node_modules/.bin 폴더에 있는 바이너리를 실행할 수 있다.
  - 만약 babel이 없었다면, `npx babel`시 babel을 설치하며 실행한다.

```
npm init -y
npm install @babel/core @babel/cli @babel/preset-react
npx babel --watch src --out-dir . --presets @babel/preset-react
```

### 웹팩
- 자바스크립트 압축
- js에서 Text, CSS 등 파일 가져와서 다루기
- 사용되지 않는 코드 제거
- 환경변수 주입
- 파일 이름에 해시값 추가 => 브라우저 캐싱의 효율적 이용
- 번들링을 통해 cdn의 라이브러리 이상으로 인한 오동작 등을 예방할 수 있다.

?ESM?
?commonJS?
`npx serve`: 정적 웹 서비스

```
npm install webpack webpack-cli react react-dom
```

`npx webpack`: 기본 동작으로 dist 폴더에 main.js를 생성한다.


### create-react-app
react 개발환경을 구성하는 공식 툴
직접 구축하려면 webpack, babel, jest, eslint, polyfill, HMR, CSS 후처리(sass, 오래된 css 라이브러리의 벤더 접두사 처리 등) 등이 필요함
- HMR: Hot module replacement, 개발 시 코드를 수정하면 화면에 바로 적용되는 기능.

create-react-app은 위 구성을 모두 지원함. Next.js를 사용할 수도 있음. 
둘의 가장 큰 차이는, 서버사이드 렌더링의 지원 여부이며 Next.js가 지원함.
create-react-app의 단점 중 하나는, eslint 등의 설정을 거의 변경할 수 없다는 것.
?백오피스?의 구성에는 create-react-app이 낫다.

- 설치는 `npx create-react-app cra-test`
  - 뒤에 인자가 만들 폴더 이름임..;;
src 폴더 내부의 js 파일을 주로 수정함.
package.json의 react-scripts의 버전만 올리면 대부분 대응이 되며,
eslint등의 설정을 바꾸고 싶을 때에도 react-scripts를 fork해서 수정 후 사용하면 됨
`browserslist`: 어떤 브라우저 대상으로 프로젝트를 만드는지 정의되어 있음.
HMR 기능이 있어서 수정 후 저장하면 브라우저가 바로바로 바뀐다.

- 테스트시에는 `npm start`
- 위 명령어는 최적화가 되어있지않기 때문에 배포 시에는 빌드 명령어를 사용해야 한다.

serviceWorker.unregister();를 register();로 바꾸면, [PWA](https://bit.ly/CRA-PWA)를 사용할 수 있다.
`<React.StrictMode>`: 개발환경에서 동작, 리액트에서 잘못 사용한 것에 대해서 잡아내는 역할
import(...).then(...) 으로, 데이터 파일을 필요할 때(이벤트)에 로드하여 사용하는 예제 확인.

- 후기
  - 설치 시간이 꽤 걸린다..


### create-react-app2
4가지 명령어
- start
  - `HTTPS=true npm start`를 이용하여 https 상태로도 시작할 수 있다.
  - 윈도우에서는 `HTTPS=true && npm start`
- build
  - `npm run build` 정적 파일이 생성된다.
  - `npx serve -s build`를 통해 서비스 가능.
  - 이미지가 작으면 js에 내장하게 된다.
- test
  - `npm test`
  - `*.test.js` 형태의 파일들은 모두 TC로써 테스트된다.
  - `__test__` 폴더를 만들면, 해당 폴더 내의 모든 파일은 테스트가 된다.
- eject
  - `npm run eject`
  - react-scripts를 사용하지 않고, 모든 설정 파일을 추출하는 명령어.
  - 직접 개발환경을 구성하고 싶을 경우 사용한다.

Polyfill
- `core-js`에서 하위호환을 지원하며, 바벨도 core-js를 사용한다.
- create-react-app도 core-js를 사용하기 때문에, import 후 사용하면 된다.
  - `import 'core-js/features/string/pad-start'`

환경변수
- `process.env.{변수 이름}`형태로 접근 가능하다.
- process.env.NODE_ENV: npm start시 development, npm test시 test, npm run build시 production이라는 값을 가진다.
- REACT_APP_*로 시작하는 변수도 가져올 수 있다.
  - `REACT_APP_API_URL=api.myapp.com npm start`로 실행을 하면, console.log(process.env.REACT_APP_API_URL)에 api.myapp.com이 출력된다.
  - 윈도우에선 `set "REACT_APP_URL=api.myapp.com" && npm start`
- 환경변수가 많아지면 `.env.{NODE_ENV}` 파일로 관리하는 게 좋다.

### CSS
- CSS 파일
  - 이름 충돌이 발생된 경우, 아래쪽에 선언된 것이 적용된다.
- css-module
  - 클래스 이름에 해시값이 붙어 이름 충돌이 해결된다.
  - js파일에서 import ... from '{파일명}.module.css'로 import
  - 적용은 {import한 이름}.{스타일 이름}
    - E.g., Style.Button
  - `npm install classnames`
    - 사용법은 `import cn from 'classnames'`로 가져와서
    - `cn(Style.Button, Style.big)` === 이전의 {\`${Style.Button} ${Style.big}\`}와 동일한 표현
    - 클래스 명에 대한 조건부 분기 사용이 가능하다.
      - className={cn(Style.Button, {\[Style.big\]: isBig, \[Style.small\]: !isBig})}
      - ^ isBig이 true면 Style.big을, isBig이 false면 Style.small을 사용.
- Sass
  - `npm install node-sass`
  - `.scss`의 확장자를 가진다.
  - `$변수명: 값`의 형태로 정의 가능.
  - @import otherfile.scss로 서로 참조도 가능하다.
- css-in-js
  - 자바스크립트에서 스타일을 정의하여, 재사용성을 높이는 경우.
  - `npm install styled-components`: 다양한 css-in-js 컴포넌트 중 하나
  - `import styled from 'styled-components';`
    ```
    const BoxCommon = styled.button`
      width: ${props => (props.isBig ? 100: 50)}px;
      height: 30px;
      background-color: red;
    `;

    export default function Box({ size }) {
      const isBig = size === 'big';
      const label = isBig ? '큰 버튼' : '작은 버튼';
      return <BoxCommon isBig={isBig}>{label}</BoxCommon>;
    }
    ```
### SPA
- MPA는 page reload를 통한 전환이었으나, SPA는 자바스크립트에서 브라우저로 페이지 전환 요청.
  - 뒤로가기도 SPA의 경우에는 서버로 요청을 보내지 않기 위한 기능을 가지고 있어야 한다.
  - 이러한 조건을 만족시키는 브라우저 API
    - pushState
    - replaceState
    - popstate(이벤트)
  - `react-router-dom`
    - SPA의 단점인 초기 페이지 로딩 속도를 높이기 위한 모듈
    - 페이지를 분할하여 필요할 때 로드한다.

### Concepts in React1
- react를 사용하지 않는 To-Do list 예제
  - `document.querySelector(.todo .desc)`: todo class 요소 하위의 desc class를 가져온다.
  - `document.createElement('li')`: li 요소를 만든다.
  - `document.querySelector(.todo .desc).appendChild({다른 element})`: li type의 경우에 이렇게 child를 추가할 수 있는건가?
  - `document.createElement('li').innerHTML`: 생성하려는 요소의 innerHTML에 접근, 수정 가능. (document.createElement('li')를 변수에 할당했다면.)
- react를 사용하여 To-Do list 생성
  - `useState([])`
    - 컴포넌트에 상태값을 추가할 수 있다.
    - 매개 변수는 상태값의 초기값, 따라서 `[]`는 빈 상태가 기본.
    - 반환하는 값은 상태 `배열`.
      - 첫 번째 아이템은 상태값
      - 두 번째 아이템은 상태값 변경 함수
        - 상태값 변경 함수를 통해 상태값이 변경되면, React는 UI를 변경시킨다.
  - jsx에서 list element에는 `key`를 입력해줘야 react에서 효율적으로 업데이트 할 수 있다.
  - 비구조화 연산자(destructuring)
    ```
      let arr = ['mike', 12];
      let [name, age] = arr;
      name, age에 각각 'mike', 12가 들어간다.
    ```
  - 전개 연산자(spread)
    ```
      let todoList = [1, 2, 3];
      let newTodoList = [...todoList, 4]; // 1,2,3,4
    ```