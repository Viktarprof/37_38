//  //forEach
// //callback (element, index, array) - аргументы колбэка

// //пример
 const array1 = [1,2,3,4,5];
 array1.forEach((element) => console.log("Элемент массива = " + element));
// //let i = 0; i < array.length - фор ич работает как обычный цикл

// //пример
const arr3 = ['a','d','c','d','e'];
arr3.forEach((element) => console.log(element)) // элементы из массива
arr3.forEach((element, index) => console.log(`index: ${index},  element: ${element}`)) // индекс и элементы из массива

// //задача
const arr4 =[
  {id: 1, name: 'Jone'},
  {id: 2, name: 'Smith'}
]
arr4.forEach((element) => console.log(`id ${element.id}, name ${element.name}`));

const ul = document.querySelector('ul');

arr4.forEach((element) =>{
  let li = document.createElement('li');
  li.innerText = (`id: ${element.id}, name: ${element.name}`);
  ul.append(li);
}); 







//=========================================================
// sort  !!!!!!!!!!!!!!!
 const array2 = [1, 5, 0, 10, 15, 2, 20, 99];
// array.sort(); // сотрирует по алфавитному порядку. [0, 1, 10, 15, 2, 20,  5, 99] //сортирует сначала первые а потом вторые цифры.

        // a - b); // сортировка по возрастанию
        // b - a); // сортировка по уюбыванию
        // < 0 сортируются по возрастанию
        // = 0  если числа равны друг другу, то сортировки не будет
        // > 0 сортируется по убыванию

 ////------------------------------------------------
 array2.sort((a, b) => a - b);
 array2.sort((a, b) => b - a);
 console.log("сортировка по возрастанию = " + array2);
 console.log("сортировка по уюбыванию = " + array2);
 

 ////------------------------------------------------
 // случайная сортировка
 const newArr = [14, 6, 'George', 'Jone', 56];
 newArr.sort(() => 0.5 - Math.random()); // 0.5 используем для сравнения 
 console.log('случайная сортировка ' + newArr)


 ////------- по возрасту ---------------------------------
 const people = [
  {name: 'George', age: 30},
  {name: 'Sara', age: 15},
  {name: 'Anna', age: 23},
  {name: 'Edward', age: 45},
  {name: 'anna', age: 65}
 ];
 people.sort((a,b) => a.age - b.age);
 console.log(people)


 ////--------- по имени ---- тут решается ПОДРУГОМУ. условие пишем сами--------------------------
 const people1 =[
  {name: 'George', age: 30},
  {name: 'Sara', age: 15},
  {name: 'Anna', age: 23},
  {name: 'Edward', age: 45},
  {name: 'anna', age: 65}
 ];
 people1.sort((a, b) => {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  if (nameA < nameB) {
    return -1; // по возрастанию
  } else if (nameA > nameB) {
    return 1; // по убыванию
  } else {
    return 0;
  }
});
console.log(people1)


 ////--------- пример как первый элемет по индексу и последний ------------------------------
  const arr5 = [1,2,3,4,5];
  arr5.sort((a,b) => a - b);
  let min =  arr5[0];
  let max =  arr5.length-1;



//=======================================================
 const products = [
    { id: 4, title: "лыжи", price: 22000 },
    { id: 2, title: "самокат", price: 15000 },
    { id: 1, title: "велосипед", price: 45000 },
    { id: 3, title: "сноуборд", price: 20000 },
  ];
    //  отсортировали по возрастанию
  products.sort((a, b) => a.id - b.id);
    //  остсортировали по убыванию
  products.sort((a, b) => b.id - a.id);
  console.log(products);




//=================================
// сумма наименьших положительных чисел
  function sumSmallesNums1(numbers){
    numbers.sort((a,b) => a - b);
    console.log(numbers);
    const newArr = numbers.filter((value) => value < 0);
    console.log(newArr)
    return numbers[0] + numbers [1]  //суммма двух элементов под индексами 1 и 2
}
console.log(sumSmallesNums1([7, 6, 9, 1, 1, 5]))




//=========================================================
//Найти сумму двух больших положительных чисел
function sumSmallesNums3(numbers){
    numbers.sort((a,b) => b - a);
    const newArr = numbers.filter((value) => value > 0);
    console.log(newArr)
    return newArr[0] + newArr[1] 
}
console.log(sumSmallesNums3([1, 2, -5, -3, 4, 9]));





//=================================================
// cлучай если нет положительных чисел
function sumSmallesNums4(numbers1){
    numbers1.sort((a,b) => b - a);
    const newArr = numbers1.filter((value) =>  value > 0);
    console.log(newArr)
    //if (newArr.Length === 0)
    if (!newArr.length){ // восклицательный знак говорит если НЕ равен нолю
        return "Нет положительных чисел.";
    } else if ( newArr.length === 1){
        return[0];
    }
    // return newArr.length ? 0 : newArr[0] + newArr[1] 
    return newArr[0] + newArr[1] 
}
console.log(sumSmallesNums4([-1, -2, -5, -6])); 




// запись одной строкой
function sumSmallesNums5(numbers1){
    numbers1.sort((a,b) => b - a);
    const newArr = numbers1.filter((value) =>  value > 0);
    console.log(newArr)
     return newArr.length = newArr.length === newArr[0] + newArr[1] ? 'нет положительных чисел' : newArr[0] + newArr[1] 
}
console.log(sumSmallesNums5([-1, -2, -5, -6, 1, 2, 7])); 









//=================================
// reduse!!!!!!!!!!!!!!!!!
// принимает два агрумента: 1)callback fulction и 2)начальное значение (начальный аккуимулятор)
// reduse(callback, начальное значение)


const array  = [1,2,3,4]; // ответ 10
const sumOfArray = array.reduce(
    (accumulator,  currentvalue) => accumulator + currentvalue, 4); // добавили 4 и 4 считается начальным элементом
//accumulator - 1
//currentvalue - 2

//accumulator - 3
//currentvalue - 3
//sumOfArray - 6
console.log(sumOfArray)


const arr = [1,-2,-3,4,5,-6];
let result = arr.reduce((sum, elem) => {
    if (elem > 0){
    return sum + elem;
    } else {
       return sum;
    }
} ,0);
console.log(result);

//Задача 1. Используя метод reduce найти сумму четных чисел массива.
const arr1 = [1, 2, -3, 4, 5, -6];
let result1 = arr1.reduce((sum, elem) => {
    if (elem > 0 && elem % 2 === 0){
    return sum + elem;
    } else {
       return sum;
    }
}, 0);
console.log(result1);

// function eventsum (arr2)
// const arr2 = [1, 2, -3, 4, 5, -6];
// let result2 = arr2.reduce((sum, elem) => {
//     if (elem > 0 && elem % 2 === 0){
//     return sum + elem;
//     } else {
//        return sum;
//     }
// }, 0);
// console.log(result2);


//Задача 2. Используя метод reduce найти наибольшее число массива.
const arr2 = [1, 2, -3, 4, 5, -6];
let result2 = arr2.reduce((sum, elem) => {

    // if (elem > 0 && elem > sum){
    // return elem;
    // } else {
    //    return sum;
    // }
 });

console.log(result2);

//==========
function maxValue (arrays){
    let results = arrays.reduce((acc, current) => (acc > current ? acc : current))
    return results
}
console.log(maxValue([5,1,3,6,7,9,0]));




//Используя метод reduce найти объект товара с самой высокой ценой.
const array4= [
    { id: 1, price: 45000 },
    { id: 2, price: 50000 },
    { id: 3, price: 11000 },
    { id: 4, price: 5000 },
  ];
  let results1 = array4.reduce((accumulator, currentvalue) => (accumulator.price > currentvalue.price ? accumulator : currentvalue));
console.log(results1);


//------------------
const number =[1,2,3,4,5,6]
//foreach
let results = 0;
number.forEach((elem) => (results+=elem));
console.log(results)

let result4 = number.reduce((acc, carrvel) => acc + carrvel, 0);
console.log(result4)
// reduceRight  -  работает справа на левo










//forEach 
//Задача 5. Преобразовать массив из объектов, чтобы в итоге массив состоял из объектов со свойствами id, title, price, max_mark.
const product = [
    { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5, 10] },
    { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
    { id: 3, title: "сноуборд", price: 20000, marks: [3, 3, 2, 3] },
    { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
  ];

  product.forEach((element) => {
    element.sum_mark = element.marks.reduce((acc, curr) => acc + curr);
    element.max_mark = element.marks.reduce((acc, curr) => acc > curr ? acc : curr);
    // delete element.marks // если нужно удалить ключ
  });
  console.log(product)









  // метод MAP
  // callback function  => element, index, array
  const people2 =[
    {name: 'George', age: 30},
    {name: 'Sara', age: 15},
    {name: 'Anna', age: 23},
    {name: 'Edward', age: 45},
    {name: 'anna', age: 65}
   ];
   const names = people2.map((element) => element.name);
   console.log(names);



  //  Создадим массив, каждый элемент получается так - берем элемент из оригинального массива и умножаем на его порядковый номер(индекс)
  const nums = [1,2,5,6,7]
  const newNums = nums.map((element, index) => element * index);
  console.log(newNums) //[0, 2, 10, 18, 28]


  const celsius = [-15, -5, 0, 1, 3, 15];
  const fahrengete = celsius.map((element) => element * 1.8 + 32)
  console.log('фаренгейт ' + fahrengete);


const negative = [-15, -3, -2, -4, -5];
const positive = negative.map((element) => element * -1)
console.log('положительные числа ' + positive);







//// filter
//// callback function
//// возвращает новый массив
const num = [10, 50, 1, 800, 250, 1000, 300]
const bigNum = num.filter((elem) => elem > 100)
console.log('числа больше ста ' + bigNum);

const names1 = ['Joe', 'Viktar', 'Anna', 'Lucy', 'Ivan']
const shortNames = names1.filter((element) => element.length <= 4 && typeof element == 'string')
console.log('имена больше четырех букв  ' + shortNames);




// 1)оставить только положительные числа
// 2)создать массив, состоящий из квадратов этих чисел
const arr6 = [1,-2,3,0,4,-5,6,-11];
const newArr6 = arr6.filter((el) => {
  if(el > 0){
    console.log(newArr6)
  } else {
    return 'отрицательное число'
  }
})






// https://www.codewars.com/ (есть уровни) 
// https://leetcode.com/
// https://app.codesignal.com/