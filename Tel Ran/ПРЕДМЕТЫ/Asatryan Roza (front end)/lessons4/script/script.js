// const arr = [1, 2, 3, 4, 5, 6];
// arr.push(7, 8 ,9, 10, 11);
// console.log(arr.length);
// console.log(arr[arr.length -1]) //последний элемент массива

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [];
// arr2.push[arr1[0]*2]
// arr2.push[arr1[1]*2]
// arr2.push[arr1[2]*2]
// arr2.push[arr1[3]*2]
// arr2.push[arr1[4]*2]
// console.log(arr2)

//======================================

// //for
// for (let i = 0; i <= 5; i++){
// console.log('цикл for ' + i);
// }

// //while
// let i = 0;
// while(i < 6){
//   console.log('цикл while ' + i)
//   i++
// }

// // do while
// let j = 0
// do { console.log('цикл do while ' + j);
// j++
// } while (j < 6)
//======================================
 
// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [];
// for (let i = 0; i <= arr1.length; i++){
//   arr2.push(arr1[i] * 2);
// }
// console.log(arr2);

// const arr1 = [1, 2, 8, -4, 15, 0];
// for (let i = 0; i <arr1.length; i++){
//   if (arr1[i] < 0) 
//   console.log(arr1[i]);
// }
//======================================


// const arr1 = [1, -2, 8, -4, 15, 0];
// for (let index in arr1){ // in для индексов в массиве
// //   if (arr1[index] < 0) 
  
//     console.log(arr1[index]);

//  if(arr1[index] %2 == 0)
//   console.log('%2 = ' + arr1[index])
// }
//======================================


// const arr1 = [1, -2, 8, -4, 15, 0, 7, 15];
// for (let num of arr1){ // of для элементов в массиве (что в массиве)
//   console.log(num)
// }
//======================================


// const arr1 = [1, -2, 8, -4, 15, 0, 7, 15];
// for(let i = arr1.length -1; i >=0 ; i--){ // arr1.length -1 начать от последнего элемента массива 
//   console.log(arr1[i])
// }

//======================================
// let arr = ['dog', 'cat', 'dog', 'fish'];
// let arr2 = [];

// for (let i = 0; i < arr.length; i++){
//   if (arr.length === 'dog'){
//   arr2.push('это собака');
// } else if (arr.length === 'cat') {
//   arr2.push('это кошка');
// } else (arr.length === 'fish')
//   arr2.push('это рыба');

// } 
// console.log(arr2)


// for (let animal of arr){
//   if (animal === 'dog'){
//   arr2.push('собака');
// } else if (animal === 'cat'){
//   arr2.push('кошка')
// } else{
//   arr2.push('рыба')
// }
// }
// console.log(arr2)
//======================================


// const animal = {
//   dog_name: 'Rex',
//   dog_age: 7,
//   dog_color: 'black'

// }
// // dote notaition
// console.log(animal.dog_name);
// // bracket natation
// console.log(animal['dog_name']); // в том случае если в нашем dog name ест пробел; или изменить значение нашего dog_name

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

// }
// items[0].discont =  0.3;
// let priceWhithDiscount = items[0].price * items[0].discont;
// console.log(priceWhithDiscount);
// console.log('Конечный результат = ' + result);
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
//   if (number %2 ===0){
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
// for( let num of arr){
//   testNum(num)
// }
//++++++++++++++++++++++++++++++++++++++
function testNum(number){
   if (number % 2 === 0){
  return 'number is even = ';
  }else{
  return 'number is odd = ';
  }
}
  let arr = [2, 5, 8, 9, 4, 1]
for( let num of arr){
  let result = testNum(num);
  console.log(result + num)
}
//++++++++++++++++++++++++++++++++++++++

