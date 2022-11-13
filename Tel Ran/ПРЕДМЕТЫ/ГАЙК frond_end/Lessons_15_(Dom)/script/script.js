// const user = {
//     id: 1,
//     name: 'Viktar' //свойства  объекта
// };
//  function say_hi(){
//     console.log('привет');
//  }
  
//   user.age = 29;
//   user.hi = say_hi; //присваивание свойству объекту его функцию
//   user.hi();






//_______________________________DOM_________________________________
// const p_elem = document.querySelector('p');// querySelector (запрос)это метод который помогает найти P в html
// console.log(p_elem.innerText); //считываем наш P

// p_elem.innerText = 'привет'; // переопределили внутренний текст в HTML



// const p_list = document.querySelectorAll('p');// querySelectorAll считывает ВСЕ элементы в HTML с Р
// console.log(p_list);
// for(let i = 0; i < p_list.length; i++){
//     console.log(p_list[i].innerText);// innerText ввыводит текст нашего объекта. без него был бы просто обнет из которого нужно достать инф-ю
// }






//_____________________________________________________________
//<!-- вывести текст из параграфа с классом  info_text которы находится в div с классом info-->
// const p_elem = document.querySelector('.info .info_text')
// console.log(p_elem.innerText);
   





//_____________________________________________________________
// написать процесс, который сохраняет тексты из всех параграфов в массив

// const p_list = document.querySelectorAll('p');
// let result = []
// for (let i = 0; i < p_list.length; i++){
//      result.push(p_list[i].innerText);
// }console.log(result);



//_____________________________________________________________
// const info_elem = document.querySelector('.info'); //3. вызываем класс куда нужно добавить новый элемент

// const new_elem = document.createElement('p') //1.создали новый элемент
// new_elem.innerText = 'привет'; // 2. считали наш новый элемент. НО он не выводится
// info_elem.append(new_elem); // 4.добавить 




//_____________________________________________________________
// создать div 
// задать в него произвольный текст 
// добавить его в div с классом info

// const new_div_elem = document.createElement('div');
// new_div_elem.innerText = 'my text in div';
// const info_elem = document.querySelector('.info');
// info_elem.append(new_div_elem);



//_____________________________________________________________
// создать div 
// написать процесс, который для каждого слова из массива  создает параграф и добавляет его в div с идентификатором root
//  const rootElem = document.querySelector('#root');

//  const words = ['велосипед', 'самокат', 'ролики', 'скейт', 'сноуборд'];

//  for (let i = 0; i < words.length; i++){
//     const new_elem = document.createElement('p');
//     new_elem.innerText = words[i];
//     rootElem.append(new_elem);
//   }




//_____________________________________________________________
// преобразовать процесс таким образом, чтобы професс создания 
// параграфа был вынесен в отдельную функцию
// функция должна получать в качестве аргумента слово и возвращать параграф
// const words = ['велосипед', 'самокат', 'ролики', 'скейт', 'сноуборд'];

//  const rootElem = document.querySelector('#root');
//     function addWord(words){
//     const elem = document.createElement('p');
//     elem.innerText = words; // тут задаем какой будет текст наших параграфов
//     return elem
// }
//  for (let i = 0; i < words.length; i++){
//     const new_elem = addWord(words[i]);
//     rootElem.append(new_elem);
//   }






//_____________________________________________________________


// const words = [
//     {
//         title: 'велосипед',
//         price: 45000
//     },
//     {
//         title: 'самокат',
//         price: 45000
//     },
//     {
//         title: 'ролики',
//         price: 45000
//     },
//     {
//         title: 'скейт',
//         price: 45000
//     },
//     {
//         title: 'сноуборд',
//         price: 45000
//     }
// ];
//  const rootElem = document.querySelector('#root');
  
//     function addWord(words){
//     const elem = document.createElement('p');
//     elem.innerText = words; // тут задаем какой будет текст наших параграфов
//     return elem
// }
//  for (let i = 0; i < words.length; i++){
//     const new_elem = addWord(words[i].title); // добавляем название товара из масссива объектов
//     rootElem.append(new_elem);
//}








//_____________________________________________________________
// const words = [
//     {
//         title: 'велосипед',
//         price: 45000
//     },
//     {
//         title: 'самокат',
//         price: 45000
//     },
//     {
//         title: 'ролики',
//         price: 45000
//     },
//     {
//         title: 'скейт',
//         price: 45000
//     },
//     {
//         title: 'сноуборд',
//         price: 45000
//     }
// ];
//  const rootElem = document.querySelector('#root');
  
//     function addWord(words){
//         const container = document.createElement('div');
//         const title = document.createElement ('p');
//         const price = document.createElement ('p');
//         title.innerText = 'название товара';
//         price.innerText = 'цена';
//         container.append(title, price)
//         return container
// }

//  for (let i = 0; i < words.length; i++){
//     const new_elem = addWord(words[i].title); // добавляем название товара из масссива объектов
//     rootElem.append(new_elem);
//  }












// const words = [
//     {
//         title: 'велосипед',
//         price: 45000
//     },
//     {
//         title: 'самокат',
//         price: 55000
//     },
//     {
//         title: 'ролики',
//         price: 75000
//     },
//     {
//         title: 'скейт',
//         price: 25000
//     },
//     {
//         title: 'сноуборд',
//         price: 5000
//     }
// ];
//  const rootElem = document.querySelector('#root');
  
//     function addWord(title_value, price_value){
//         const container = document.createElement('div');// создаем див
//         const title = document.createElement ('p');     //создаем параграф
//         const price = document.createElement ('p');     //создаем параграф
//         title.innerText = title_value;                  // задаем значения
//         price.innerText = price_value;
//         container.append(title, price)                  // добавляем значения в элемент контайнер 
//         return container                                // возвращаем 
// }

//  for (let i = 0; i < words.length; i++){
//     const new_elem = addWord(words[i].title, words[i].price); // добавляем название товара из масссива объектов
//     rootElem.append(new_elem);
//  }












//_____________________________________________________________
/* добавить у товаров значение количества */

// const words = [
//     {
//         title: 'велосипед',
//         price: 45000,
//         count: 4
//     },
//     {
//         title: 'самокат',
//         price: 55000,
//         count: 10
//     },
//     {
//         title: 'ролики',
//         price: 75000,
//         count: 7
//     },
//     {
//         title: 'скейт',
//         price: 25000,
//         count: 2
//     },
//     {
//         title: 'сноуборд',
//         price: 5000,
//         count: 1
//     }
// ];
//  const rootElem = document.querySelector('#root');
  
//     function addWord(title_value, price_value,count_value){
//         const container = document.createElement('div');// создаем див
//         const title = document.createElement ('p');     //создаем параграф
//         const price = document.createElement ('p');     //создаем параграф
//         const count = document.createElement ('p');     //создаем параграф
//         title.innerText = title_value;                  // задаем значения
//         price.innerText = price_value;
//         count.innerText = count_value;
//         container.append(title, price,count)            // добавляем значения в элемент контайнер 
//         return container                                // возвращаем 
// }

//     for (let i = 0; i < words.length; i++){
//     const {title, price, count} = words[i];
//     const new_elem = addWord(title, price, count); // добавляем название товара из масссива объектов
//     rootElem.append(new_elem);

//  }
 











// создать процесс, который создает div и 2 параграфа.
// в параграфы необходимо записать какой-нибудь произвольный текст
// параграфы должны быть записаны в div

/* <div>
    <p>первый пункт</p>
    <p>второй пункт</p>
</div> */

// const rootElem1 = document.querySelector('#root');
// const container = document.createElement('div');
// const new_elem1 = document.createElement('p');
// const new_elem2 = document.createElement('p');

// new_elem1.innerText = 'Hello World';
// new_elem2.innerText = 'Hello World';
// container.append(new_elem1, new_elem2)
// rootElem1.append(container);



