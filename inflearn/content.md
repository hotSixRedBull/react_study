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