//React 필수 구동 모듈들
import React from 'react';
import ReactDOM from 'react-dom';
//초기 화면을 구성하는 사용자 코드
import App from './App';

//react엔진이 화면을 출력하는 코드
//id가 root인 엘리먼트에 컴포넌트를 출력함
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

