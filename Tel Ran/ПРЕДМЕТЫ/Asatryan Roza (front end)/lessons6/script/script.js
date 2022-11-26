

// // object style
// let p = document.createElement('p');
// p.innerText = 'Style with js';

// p.style.color = 'red';
// p.style.fontWeight = 'bold';
// p.style.fontSize = '25px';

// p.style.cssText = 'color:blue; font-weight:400'// данный способ написаныи перезаписывает то что было выше в стилях

// document.body.append(p);



//__________________________________________-


// let div = document.createElement('div');
// div.style.border = '2px solid black';
// div.style.background = 'yellow';
// div.style.width = '100px';
// div.style.height = '100px';

// //onmouseover  //наводим мышку на объект
// //onmouseout    //убираем мышку с объеекта
// div.onmousemove = function() {
//         div.style.backgroundColor = 'salmon'
// };
// div.onmouseout = function() {
//         div.style.backgroundColor = 'red'
// };


// document.body.append(div);



//__________________________________________-



//Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.

// for(let i = 0; i <= 255 ; i+=5){
// let div = document.createElement('div');
// div.style.border = '2px solid black';
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.display = 'inline-block'
// div.style.margin = '5px'


// document.body.append(div);

// div.onmouseover = function (){
// div.style.backgroundColor ="rgb(128,128, " + i +")" // или так`rgb(128, 128, ${i})`;

// }

// div.onmouseout = () => {
// div.style.backgroundColor = 'white';
// };
// }
//__________________________________________-



//classList

//classList.add('') // добавление класса к нашему элементу
//classList.remove('') // удаление класса к нашему элементу
//classList.replace('', '') // задаем два аргумента и заменяем класс нашему элементу

// let div = document.createElement('div');
// div.setAttribute('class','newclass');
// document.body.append(div);
// console.log(div.classList);





///==============================================





// for(let i = 0; i <= 9; i++){
//         let div = document.createElement('div');
//         div.innerText = i;
//         document.body.append(div)
// div.onclick = () => {
        // if(div.classList[0] == 'active'){
        // div.classList.remove('active');
        // } else{
        // div.classList.add('active');

        // второй вариант 
        // if(div.classList.contains ('active')){
        // div.classList.remove('active');
        // } else{
        // div.classList.add('active');
               
        // третий вариант 
        //div.classList.toggle('active')
// };
        
// }


// const cards = [
//         {
//           en: "door",
//           ru: "дверь",
//         },
//         {
//           en: "sofa",
//           ru: "диван",
//         },
//         {
//           en: "chair",
//           ru: "стул",
//         },
//         {
//           en: "stove",
//           ru: "плита",
//         },
//         {
//           en: "bag",
//           ru: "сумка",
//         },
// ];
// for(let i = 0; i < cards.length; i++){
// const div = document.createElement('div');
// const p = document.createElement('p');
// div.append(p);
// document.body.append(div);

// p.innerText=cards[i].en;
// div.onclick = () =>{
// if(p.textContent === cards[i].en){
//         p.innerText=cards[i].ru;
//         } else{
//             p.innerText=cards[i].en;
//               }
//         }
// }



//===================================
// for(let i = 0; i < cards.length; i++){
//         const div = document.createElement('div');
//         const en = document.createElement('p');
//         const ru = document.createElement('p');

//         en.innerText=cards[i].en;
//         ru.innerText=cards[i].ru;
        
//         div.append(en, ru);
//         document.body.append(div);
 
//         en.classList.add('show');
//         ru.classList.add('hide');

//         div.onclick = () =>{
//         if(en.classList.contains('show')){
//         en.classList.replace('show', 'hide');
//         ru.classList.replace('hide', 'show');
//         }else{
//         en.classList.replace('hide', 'show');
//         ru.classList.replace('show', 'hide');
//         }

//         }
// }



//В документе есть tag button. С помощью скриптов выведите в консоль количество классов этого тега.
// const btn = document.querySelector('button');
// console.log(btn.classList.length)
