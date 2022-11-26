// "use strict";
// let arr = ["first", "second", "third"];
//            0          1      2

// console.log(arr[1]);

// length
// console.log(arr.length);

//push - добавляет в конец новые элементы
// console.log(arr.push(2,3,4));

// pop - удаляет последний элемент, возвращает последний элемент
// console.log(arr.pop());
// console.log(arr);

// const arr = [1,2,3];
// arr.push(4,5,6);
// arr.push(5,8,5,1);
// console.log(arr.length);
// console.log(arr[arr.length - 1]); => arr[10 - 1] arr[9];

// const arr1 = [1,2,3,4,5];
// const arr2 = [];

// arr2.push(arr1[0] * 2);
// arr2.push(arr1[1] * 2);
// arr2.push(arr1[2] * 2);
// arr2.push(arr1[3] * 2);
// arr2.push(arr1[4] * 2);

// console.log(arr2);
// for(let i = 0; i < arr1.length; i++){
//   arr2.push(arr1[i] * 2);
// }
// console.log(arr2)

// ЦИКЛЫ - for, while, do while

// 0 - 5

// for(let i = 0; i < 6; i++){
//   // 0 1 2 3 4 5 - 6 итераций
//   console.log(i);
// }

// while

// let i = 0;

// while(i < 6) {
//   console.log(i);
//   i++;
// }

// do while

// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while(j < 6);



// let arr = [1, 4, 8, -5, 2, -3, 1];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) console.log(arr[i]);
// }

//for of  - element
//for in  - index

// console.log(5 % 2);

// for (let index in arr) {
//  console.log(index);
//   // if(arr[index] % 2 === 0) console.log(arr[index]);
// }

// console.log("1" === 1);

// for(let num of arr) {
//   console.log(num);
// }

// от 6 - 0;
// for(let i = 6; i >= 0; i--){
//   console.log(i);
// }

// let arr = [1, 4, 8, -5, 2, -3];
// for(let i = arr.length - 1; i >= 0; i--){
//   console.log(arr[i]);
// }

// let eng = ["dog", "cat", "dog", "fish", "fish"];
// let rus = [];

// "dog" - "собака"
// "cat" - "кошка"
// "fish" - "рыба"

// if else
// push
for (let animal of eng){
  if (animal === 'dog'){
  rus.push('собака');
} else if (animal === 'cat'){
  rus.push('кошка')
} else{
  rus.push('рыба')
}
}
console.log(rus)



// for(let animal of eng) {
//   if(animal === "dog"){
//     rus.push("собака");
//   }else if(animal === "cat"){
//     rus.push("кошка")
//   }else {
//     rus.push("рыба");
//   }
// }
// console.log(rus);

// const animal = {
//   dog_name: "Rex",
//   dog_age: 7,
//   "dog color": "black",
// }

// animal.dog_name = "Tsyapa";

// // dote notation
// // console.log(animal.dog color);

// // bracket notation
// console.log(animal["dog color"]);

// // ["New york", ]

// for(let i = 0; i < 2; i++){
//   animal[`dog${i}`] = 3;
// }

// animal.dog_size = "small";

// console.log(animal);

const items = [
  {
    title: "Gucci",
    price: 500,
    type: "bag",
  },
  {
    title: "Adidas",
    price: 100,
    type: "shoe",
  },
  {
    title: "LV",
    price: 600,
    type: "bag",
  },
  {
    title: "Nike",
    price: 200,
    type: "shoe",
  },
];

// Nike's price is 200, type is shoe

// for(let i in items) {
//   console.log(`${items[i].title}'s price is ${items[i].price}, type is ${items[i].type}`);
// }

// let result = 0; // 0 + 100 = 100 + 200
// for(let obj of items) {
//   // result = result + obj.price;
//   result += obj.price;
// }

// items[0].discount = 0.3;
// let priceWithDis =  items[0].price * items[0].discount;

// console.log(result);

// FUNCTION DECLARATION

// parameter (num)
// function square(num){
//   console.log(num * num);
//   // console.log(num ** 2);
// }

// // argument
// square(5);

// function cons(){
//   console.log("Строкса в колсоле");
// }

// cons();
// cons();
// cons();
// cons();

// function testNum(number) {
//   if(number % 2 === 0) {
//     console.log("number is even")
//   }else {
//     console.log("number is odd")
//   }
// }

function testNum(number) {
  if (number % 2 === 0) {
    return "number is even";
  } else {
    return "number is odd";
  }
}

// testNum(5);
// testNum(2);
// testNum(3);

let arr = [1, 5, 8, 7, 4, 1];
for (let num of arr) {
  let result = testNum(num);
  p.innerText = result;
}
