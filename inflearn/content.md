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
- test
  - `npm test`
- eject
  - `npm run eject`

