import React from 'react';
import ReactDOM from 'react-dom/client';
import App_Tasks from './components/App_Tasks';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App_Tasks/>
  // <Posts/>
  //<App/>
);


//============================
// function Posts(){
//   return(
//     <div>
//       <h1>ПОСТЫ</h1>
//       <Title_post/>
//       <Title_post/>
//       <Title_post/>
//       <Title_post/>
//     </div>
   
//   )
// }

// function Title_post(){
// return(
//     <div class = "title_post">
//       <h3>Заголовок поста</h3>
//       <p>Тестим разметку для реакт</p>
//       <Buttons/>
//     </div>
//   )
// }
// // СТРЕЛОЧНАЯ ФУНКЦИЯ
// const Buttons = () => {
//   return(
//     <button>Отправить</button>
//   )
// }

//============================
// function App(){
//   return (
//     <div>
//       <h1>HELLO WORLD!</h1>
//       <p>Some text</p>
//       <Content/>
//       <Content/>
//       <Content/>
//     </div>
//   )
// }


// function Content(){
//   return (
//     <div className='content'>
//       <p>Content!</p>
//       <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//       </ul>
//     </div>
//   )
// }