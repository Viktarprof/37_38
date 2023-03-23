// let newP = document.createElement('p');
// newP.innerText = 'some text';
// newP.innerHTML = '1243some text';
// newP.textContent = 'nvreknvsome text';

// newP.setAttribute('id', 'new');

// let div = document.createElement('div');
// div.appendChild(newP);
// let getP = document.querySelector('#new')

// let body = document.querySelector('body');
// body.appendChild(div)
//================================
// let divs =document.querySelector('div');
// let p1 = document.createElement('p');
// let p2 = document.createElement('p');
// let p3 = document.createElement('p');

// p1.innerText = '<p>some 1231text</p>';
// p2.innerHTML = '<p>some dsfververtext</p>';
// p3.textContent = '<p>some       text</p>';
// divs.appendChild(p1);
// divs.appendChild(p2);
// divs.appendChild(p3);

// body.appendChild(divs)

//================================
// 1) создать див +
// 2) создать параграф +
// 3)добавить текст внутри параграфа +
// 4) добавить наш параграф внутри дива

// let div = document.createElement("div");
// // let newP = document.createElement("p");

// newP.innerText = "some text";

// let strings = ["first", "second", "third", "fourth"];

// console.log(strings[0])

// for (let i = 0; i < strings.length; i++) {
//   let newP = document.createElement("p");
//   newP.innerText = strings[i];
//   div.appendChild(newP);
// }


// div.appendChild(newP);


//================================


// 1) Вот документ с таблицей и формой.
//     Как найти?…
//     1.	Таблицу с id="age-table".
let table1 = document.querySelector('age-table'); 
let table2 = document.getElementById('age-table');
let table3 = document.querySelector('table');
let table4 = document.getElementsByTagName('table')[0];
// console.log(table1)
// console.log(table2)
// console.log(table3)
// console.log(table4)


//     2.	Все элементы label внутри этой таблицы (их три).
let label1 = document.querySelectorAll('#age-lable lable')
//let label2 = table1.getElementsByTagName('lable');
//console.log(label1);
//console.log(label2);

//     3.	Первый td (со словом «Age»).
let td1 = document.querySelector('td');
//let td2 = table1.getElementsByName('td')[0];
//console.log(td1);
//console.log(td2);


//     4.	Форму с class="search".
let name1 = document.getElementsByClassName('search')[0];
let name3 = document.querySelector('table')
// console.log(name1);
// console.log(name3);

//     5.	Первый input в этой форме.
let input = document.querySelector('input');
let input1= document.getElementsByTagName('input')[0];
// console.log(input);
// console.log(input1);


//     6.	Последний input в этом документе
let lastList = document.querySelectorAll('input')
let lastinput = lastList[lastList.length -1];
// console.log(lastinput);


// 2) Совет от жизни!
//     Создайте div.
//     Внутри заголовок с вашим ФИ. (h3)
//     А так же добавьте чистосердечный совет в виде параграфа.
// let body = document.querySelector('body');
// let divs = document.createElement('div');
// let name_surname = document.createElement('h3');
// let p = document.createElement('p');
// name_surname.innerText = 'Мое имя и фамилия';
// p.innerText = 'мой совет учи JS';

// divs.appendChild(name_surname);
// divs.appendChild(p);
// body.appendChild(divs);



// 3) Напишите интерфейс для создания списка.
//     Для пункта:
//     1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
//     2. Создавайте элемент <li> и добавляйте его к <ul>.
//     Сделайте с помощью цикла 5 пунктов.
// let ul = document.createElement('ol')
// for (let i = 0; i < 5; i++){
// let p = prompt('Введите ваш запрос');
// let newp = document.createElement('li');
// newp.innerText = p;
// ul.appendChild(newp)
// document.body.appendChild(ul)
// }


// 4) Дан массив из объектов, в котором хранятся породы собак и их возраст:

// Напишите цикл, который создаст для каждого объекта параграфы(Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.

    let dogs = [
        {
          breed: "golden retriever",
          age: 7,
        },
        {
          breed: "labrador retriever",
          age: 4,
        },
        {
          breed: "french bulldog",
          age: 12,
        },
        {
          breed: "beagle",
          age: 6,
        },
        {
          breed: "german shepherd dog",
          age: 2,
        },
        {
          breed: "poodle",
          age: 3,
        },
        {
          breed: "bulldog",
          age: 4,
        },
    ];
for (let i = 0; i < dogs.length; i++){
  let p = document.createElement('p');
  p.innerText = 'This dog - ' + dogs[i].breed + '; age is - ' + dogs[i].age;
  //удаляем элемент
  p.setAttribute('id', `k${i}`);
  document.body.appendChild(p)
} 
let beagle = document.querySelector('#k3')
beagle.remove()