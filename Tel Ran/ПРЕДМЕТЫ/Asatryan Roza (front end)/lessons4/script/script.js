// const arr = [1, 2, 3, 4, 5, 6];
// arr.push(11, 10 , 8, 7, 6);
// console.log(arr);
// console.log(arr[arr.length -1]) //последний элемент массива
//======================================

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [];
// arr2.push(arr1[0] * 2)
// arr2.push(arr1[1] * 2)
// arr2.push(arr1[2] * 2)
// arr2.push(arr1[3] * 2)
// arr2.push(arr1[4] * 2)
// console.log(arr2)

// for(let i = 0; i < arr1.length; i++){
//   arr2.push(arr1[i] * 2);
// }
// console.log(arr2)


//======================================
// ЦИКЛЫ - for, while, do while

// //for
// for (let i = 0; i <= 5; i++){
// console.log('цикл for ' + i);
// }

//  //while
// let i = 0;
// while(i < 6){
//   console.log('цикл while ' + i)
//   i++
// }

// // do while
// let j = -1;
// do { console.log('цикл do while ' + j);
// j++
// } while (j < 6)


//======================================
 
// const arr1 = [1, 4, 8, -5, 2, -3, 1];
// const arr2 = [];
// for (let i = 0; i <= arr1.length; i++){
//   arr2.push(arr1[i] * 2);
// }
// console.log(arr2);



//for of  - element
//for in  - index


// const arr1 = [1, -2, 8, -4, 15, 0, 33, -10];
// for (let i = 0; i < arr1.length; i++){
//   if (arr1[i] > 0) // то что больше нуля
//   if (arr1[i] < 0) // то что меньше нуля
//   console.log(arr1[i]);
// }
//======================================


// const arr1 = [1, -2, 8, -4, 15, 0];
// for (let index in arr1){ // in для индексов в массиве
// //   if (arr1[index] < 0) 
  
//     console.log(arr1[index]);

//  if (arr1[index] % 2 == 0)
//   console.log('even %2 = ' + arr1[index])
// }
//======================================


// const arr1 = [1, -2, 8, -4, 15, 0, 7, -15];
// for (let num of arr1){ // of для элементов в массиве (что в массиве)
//   console.log(num)
// }

//======================================
// //от 6 - 0;
// for(let i = 6; i >= 0; i--){
//   console.log(i);
// }


// const arr1 = [1, -2, 8, -4, 15, 0, 7, 15];
// for(let i = arr1.length -1; i >=0 ; i--){ // arr1.length -1 начать от последнего элемента массива 
//   console.log(arr1[i])
// }

//======================================
//// "dog" - "собака"
//// "cat" - "кошка"
//// "fish" - "рыба"

// let eng = ["dog", "cat", "dog", "fish", "fish"];
// let rus = [];
//// первый  вариант
// for (let i = 0; i < eng.length; i++){
//   if (eng[i] === 'dog'){
//   rus.push('это собака');
// } else if (eng[i] === 'cat') {
//   rus.push('это кошка');
// } else {
//    rus.push('это рыба');
//  }
// }
// console.log(rus)


//// второй вариант
// for (let animal of eng){
//   if (animal === 'dog'){
//   rus.push('собака');
// } else if (animal === 'cat'){
//   rus.push('кошка')
// } else{
//   rus.push('рыба')
// }
// }
// console.log(rus)
//======================================


// const animal = {
//   dog_name: 'Rex',
//   dog_age: 7,
//   dog_type: 'small',
//   "dog color": "black"
// }
// // animal.dog_name = "Tsyapa";

// //// dote notaition
// console.log(animal.dog_name);
// //// bracket natation
//  console.log(animal["dog color"]);
// console.log(animal['dog_name']); // в том случае если в нашем dog name ест пробел; или изменить значение нашего dog_name
// for(let i = 0; i < 2; i++){
//   animal[`dog${i}`] = 3;
// }

// animal.dog_size = "small";

// console.log(animal);



//======================================


// const items = [
//   {
//     title: "Gucci",
//     price: 500,
//     type: "bag"
//   },
//   {
//     title: "Adidas",
//     price: 100,
//     type: "shoes"
//   },
//   {
//     title: "Nike",
//     price: 1000,
//     type: "phone"
//   },
//   {
//     title: "LV",
//     price: 200,
//     type: "bag"
//   }
// ];

// for (let i in items){
// console.log(`${items[i].title}'s price is ${items[i].price}, type is ${items[i].type}`);
// }
// for (let i = 0; i < items.length; i++){
//   console.log('Title is ' + items[i].title + ' price is = ' + items[i].price + ' type is - ' + items[i].type)
// }
// let result = 0;
// for (let obj of items){
//   //result = result + obj.price
//   result += obj.price
//   console.log('я покажу каждое сложение ' + result)
//  }
//  console.log('я покажу сложение = ' + result)

// items[0].discont =  30;
// let priceWhithDiscount = items[0].price * items[0].discont;
// console.log(priceWhithDiscount);

//============================================================


// function square(num){
//   console.log(num * num);
//    console.log('результат в степени ' + num ** 3);

// }
//  square (2)



// function cons(){
// console.log('строка в консоли')
// }
// cons()
// cons()
// cons()
// cons()



// function testNum(number){
//   if (number % 2 === 0){
//     console.log('number is evev')
//   } else{
//     console.log('number is odd')
//   }
// }
// // testNum(1)
// // testNum(4)
// // testNum(10)
// // testNum(17)



// let arr = [ 2, 5, 8, 9, 4, 1]
// for (let num of arr){
//   testNum(num)
// }

//++++++++++++++++++++++++++++++++++++++

// function testNum(number){
//    if (number % 2 === 0){
//   return 'number is even = ';
//   }else{
//   return 'number is odd = ';
//   }
// }
//   let arr = [2, 5, 8, 9, 4, 1]
// for( let num of arr){
//   let result = testNum(num);
//   console.log(result + num)
// }
//++++++++++++++++++++++++++++++++++++++
