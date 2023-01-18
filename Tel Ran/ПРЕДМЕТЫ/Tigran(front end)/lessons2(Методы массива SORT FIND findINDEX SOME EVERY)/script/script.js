// //сортировка SORT
// let array = [1, 2, 3, 4, 5, 6, 7, 2, 4, 8, 9, 10];
// const newarray = array.sort((b, c) => { // как сортирует под капотно. 
//   if(b>c) return -1
//   if(b<c) return 1
//   if(b==c) return 0
// })
//console.log(newarray);

// //Отсортируйте массив в рандомном порядке
let array1 = [1, 2, 3, 4, 5, 6, 7, 2, 4, 8, 9, 10];
let a = 0.5; // используем для сравнения
const new1array = array1.sort(() => a - Math.random());
console.log(new1array);
// или вот так 
// const newarray = array.sort(() => Math.random() - Math.random());




// // МЕТОД FIND() - находит какой-то ЭЛЕМЕНТ массива по заданному условию. находит первый попавшийся
// // в случае, если по условию метод find не найдет элемент массива  - он вернет undefined
let users = [
  {id: 1, name: 'Alex', salary: 1000},
  {id: 2, name: 'Steven', salary: 5000},
  {id: 3, name: 'Neena', salary: 450},
  {id: 4, name: 'Wolyam', salary: 10000},
  {id: 5, name: 'Jonh', salary: 799},
  {id: 6, name: 'Clark', salary: 2222},
]
const newusers = users.find((value) => value.salary < 1000 ); // находит первый попавшийся
const newusers1 = users.filter((value) => value.salary < 1000 ); //находит все
console.log(newusers);
console.log(newusers1);





// Пример поиска по индексу
let users1 = [
  {id: 1, name: 'Alex', salary: 1000},
  {id: 2, name: 'Steven', salary: 5000},
  {id: 3, name: 'Neena', salary: 450},
  {id: 4, name: 'Wolyam', salary: 10000},
  {id: 5, name: 'Jonh', salary: 799},
  {id: 6, name: 'Clark', salary: 2222},
]
const new1users = users1.find((value, index) => index > 1 && value.salary < 5000  );
console.log(new1users);




// // МЕТОД FINDINDEX() - находит какой-то ЭЛЕМЕНТ массива по заданному условию. находит первый попавшийся
// // в случае, если по условию метод findIndex не найдет элемент массива  - он вернет -1
let users2 = [
  {id: 1, name: 'Alex', salary: 1000},
  {id: 2, name: 'Steven', salary: 5000},
  {id: 3, name: 'Neena', salary: 450},
  {id: 4, name: 'Wolyam', salary: 10000},
  {id: 5, name: 'Jonh', salary: 799},
  {id: 6, name: 'Clark', salary: 2222},
]
const new2users = users2.findIndex((value) => value.salary > 5000  );
console.log(new2users);



//// ---------------------------------------
//// Задача 1
//// Найдите пользователся, id которого представляется в виде четного числа, а возраст менее 33

let users3 = [
    {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
    {id: 2, name: 'Willyam', lastname: 'Maxwell', age: 33},
    {id: 3, name: 'Steven', lastname: 'Fersters', age: 35},
    {id: 4, name: 'Neena', lastname: 'Maxwell', age: 31},
]
const newusers3 = users3.find((value) =>  value.id % 2 == 0 && value.age < 33);
console.log(newusers3);




//// ---------------------------------------
//// метод some() и every()
//// метод some() -  существует хотябы 1 элемент, который соответствует колбек условию. 
//// ВОЗВРАЩАЕТ БУЛЕВЫЙ ТИП
//// пример

let users4 = [
  {id: 1, name: 'Alex', salary: 1000},
  {id: 2, name: 'Steven', salary: 5000},
  {id: 3, name: 'Neena', salary: 450},
  {id: 4, name: 'Wolyam', salary: 10000},
  {id: 5, name: 'Jonh', salary: 799},
  {id: 6, name: 'Clark', salary: 2222},
]
const new4users = users4.some((value) => value.id == 500  ); // false
// const new4users = users4.some((value) => value.salary > 5000); // true
console.log(new4users);


//// every() - определяет все ли элементы соответствуют колбек условию. 
// ВОЗВРАЩАЕТ БУЛЕВЫЙ ТИП
// пример
let users5 = [
  {id: 1, name: 'Alex', salary: 1000},
  {id: 2, name: 'Steven', salary: 5000},
  {id: 3, name: 'Neena', salary: 450},
  {id: 4, name: 'Wolyam', salary: 10000},
  {id: 5, name: 'Jonh', salary: 799},
  {id: 6, name: 'Clark', salary: 2222},
]
// const new5users = users5.every((value) => value.id > 0); // true
const new5users = users5.every((value) => value.salary == 5000); // false
console.log(new5users);


// задача 2
// Решите следующие задачи: 
// 1) Определите наличие одного элемента, чей квадратный корень цены будет вычисляться без остатка (т.е целове число). Выведите булевый тип
// 2) Определите, у всех ли элементов массива сво-во count отличимо от 0

let data1 = [
    {id : 2, goods: 'Самокат', count: 1, price: 3500},
    {id : 3, goods: 'Ролики', count: 15, price: 6000},
    {id : 5, goods: 'Скейтборд', count: 8, price: 999},
    {id : 4, goods: 'Ракетки', count: 30, price: 100},
    {id : 1, goods: 'Велосипед', count: 5, price: 2000}
]
const new1data = data1.some((value) => Math.sqrt(value.price) % 1 == 0 );
const new2data = data1.every((value) => value.count != 0 );
console.log(new1data);
console.log(new2data);




// Повторить метод some(), сформировав функцию some2(array, callback)
// Функция должна вернуть булевый тип

let data2 = [
  {id : 2, goods: 'Самокат', count: 1, price: 3500},
  {id : 3, goods: 'Ролики', count: 15, price: 6000},
  {id : 5, goods: 'Скейтборд', count: 8, price: 999},
  {id : 4, goods: 'Ракетки', count: 30, price: 100},
  {id : 1, goods: 'Велосипед', count: 5, price: 2000}
]

function some2(array, callback){
  for (let elem of array){
    if( callback(elem)){
      return 'ага'
    }
  }  return 'неа'
}
console.log(some2(data2, (elem) => elem.price > 1000)); // true
console.log(some2(data2, (elem) => elem.id == 10)); // false
