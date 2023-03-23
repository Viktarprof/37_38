// let div = document.querySelector('div');
// div.innerText = '<p>My text text</p>'
  //div.innerHTML = '<p>My tex html</p>'

  //=========================================

  // сщздать элемент (тэг)
  // createElement

  // const root = document.createElement('div');
  // root.setAttribute('id', 'root');

  // // 2 способа добавления элемента
  // // 1) append (текст и элемент и даже целое множество )
  // // 2) appendChild(только элемент)

  // const body = document.querySelector('body');
  // body.appendChild(root);
  // root.innerText = 'This is my root div';


//______________________________________
  //0-19
// создать р
// добавить текст
// добавить этот Р в body
  
  // for (let i = 0; i <= 19; i++){
  //   let par = document.createElement('p')
  //   par.innerText = `${i}`; // это интерполяция
  //   body.appendChild(par);
  //  }



//______________________________________

//создаем див с ид "test";
//цикл - создаем параграфы ,в котором будет текст "цифра" + "this is new p"
// 0 this is new p
// 1 this is new p

      // for (let i = 0; i <= 20; i++){
      //   const newDIV = document.querySelector('#test');
      //   let par = document.createElement('p');
      //   par.innerText = (`${i} + 'this is new p`)
      // newDIV.append(par);
      // }

          
//const body = document.querySelector('body');
// let test = document.createElement('div'); // создали див
// test.setAttribute('id', 'test');          // дали ему айди и название

// for (let i = 0; i <= 20; i++){
//   let createP = document.createElement('p');
//   createP.innerText = `${i}  this is new p`;
//   test.appendChild(createP);
// }
//   body.appendChild(test);


//______________________________________

//Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в #root.
// const strings = [
//   "createElement - создаёт элемент c тем тегом, что указан в аргументе",
//   "appendChild - обавляет узел в конец списка дочерних элементов указанного родительского узла.",
//   "Циклы - for(for in , for of), while, do while",
//   "Функции являются основными «строительными блоками» программы.",
// ];
//первый вариант решения
      // let test1 = document.createElement('div'); // создали див
      // test1.setAttribute('id', 'root'); 
      // for(let i = 0; i < strings.length; i++){ // for
      //   const paragrapf = document.createElement('p');
      //   paragrapf.innerText = strings[i];
      //   test1.appendChild(paragrapf);
      // }
      // body.appendChild(test1);


// второй вариант решения
// for (let strForP of strings){
//   let paragrapf = document.createElement( 'p');
//   paragrapf.innerText = strForP;
//   root.appendChild(paragrapf);
// }





//______________________________________

// const body = document.querySelector('body');
//   let userImg = prompt ('Add image`s link');
//   let userImglink = prompt ('Add image`s link for imeg');
//   let userPost = prompt ('Add your`s post`s link');

// const image = document.createElement('img');
// image.setAttribute('src', userImg);


//   const post = document.createElement('a'); // создали тег а
//   post.innerText = 'My post`s text'; // тут мы считываем текст с нашей ссылки В ВИДЕ КНОПКИ
//   post.setAttribute('href', userPost);
//   post.setAttribute('target', '_blank'); // откроет в новом окне

//   body.append(image, post);






//______________________________________

// Запрашиваем у пользователя ссылки на картинку и пост. 
// Создаем картинку со ссылкой на этот пост.
// const body = document.querySelector('body');

//   let userImg = prompt ('Add image`s link');
//   let userImglink = prompt ('Add image`s link for imeg');
//   let userPost = prompt ('Add your`s post`s link');

// const image = document.createElement('img');
// image.setAttribute('src', userImg);

//   const post = document.createElement('a'); // создали тег а
//   post.innerText = 'My post`s text'; // тут мы считываем текст с нашей ссылки В ВИДЕ КНОПКИ
//   post.setAttribute('href', userPost);
//   post.setAttribute('target', '_blank');

//   post.appendChild(image);
//   body.append(post);







//______________________________________
// `Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в #root.

let links = [
  {
    title: "Google",
    link: "https://www.google.com/",
  },
  {
    title: "Baidu",
    link: "http://www.baidu.com/",
  },
  {
    title: "Bing",
    link: "https://www.bing.com/",
  },
  {
    title: "Yahoo!",
    link: "https://www.yahoo.com/",
  },
  {
    title: "Yandex(dzen)",
    link: "https://www.dzen.ru/",
  },
];
const body = document.querySelector('body');
const inDiV = document.createElement('div');
root.setAttribute('id', 'root');
body.appendChild(root)

for (let search of links){

  let linkTo = document.createElement('a');
  linkTo.innerText = search.title;
  linkTo.setAttribute('href', search.link);


//let br = document.createElement('br')
//root.append(linkTo, br)

inDiV.append(linkTo)
}
body.appendChild(root)