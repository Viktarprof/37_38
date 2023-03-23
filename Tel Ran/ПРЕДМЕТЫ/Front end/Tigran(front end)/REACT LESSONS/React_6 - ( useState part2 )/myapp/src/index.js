import React from 'react';
import ReactDOM from 'react-dom/client';
// //пример работы useStete с числовым типом
import App from './components/useState Number/App';
// //пример работы useStete со строковым типом
import AppString from './components/useState String/AppString';
//пример работы useStete с Массивом 
import AppArray from './components/useState Array/AppArray';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Работа с App</h1>
    <App/>
    <h1>Работа с AppString</h1>
    <AppString/>
    <h1>Работа с AppArray</h1>
    <AppArray/>
  </div>
  


);

