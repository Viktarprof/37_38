//  forEach
 const array1 = [1,2,3,4,5];
 array1.forEach((element) => console.log("Перебрали каждый элемент массива " + element));
// //let i = 0; i < array.length


//=========================================================
// sort  !!!!!!!!!!!!!!!
 const array2 = [1, 5, 0, 10, 15, 2, 20, 99];
 // array.sort(); // сотрирует по алфовитному порядку. [0, 1, 10, 15, 2, 20,  5, 99]
 array2.sort((a, b) => a - b); // сортировка по возрастанию
 array2.sort((a, b) => b - a); // сортировка по уюбыванию

 console.log("сортировка по возрастанию = " + array2);
 console.log("сортировка по уюбыванию = " + array2);




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



//Найти сумму двух наименьших положительных чисел
function sumSmallesNums2(numbers){
    numbers.sort((a,b) => a-b);
    console.log(numbers);
    const newArr = numbers.filter((value) => value > 0);
    console.log(newArr);
    return newArr[0] + newArr[1];
}
console.log(sumSmallesNums2([1, 2, -5, -3, 4, 9]));



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