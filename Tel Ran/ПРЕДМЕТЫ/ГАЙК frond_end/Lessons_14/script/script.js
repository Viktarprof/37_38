//Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.
// function range (value_1, value_2){
//     let start, end;

//     if (value_1 > value_2){
//         start = value_2;
//         end = value_1;
//     }else{
//         start = value_1;
//         end = value_2;
//     } 
//     const result = [];
//     for(let i = start; i <= end; i++){
//         result.push(i);
//     }
//     return result
// }
// const a = range(2,10);
// const b = range(100,2);
// console.log(a);
// console.log(b);









//Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего  числа к меньшему.
// function range (value_1, value_2){
//     let start, end;

//     if (value_1 > value_2){
//         start = value_1;
//         end = value_2;
//     }else{
//         start = value_2;
//         end = value_1;
//     } 
//     const result = [];
//     for(let i = start; i >= end; i--){
//         result.push(i);
//     }
//     return result
// }

// const a = range(2,10);
// const b = range(15,5);
// console.log(a);
// console.log(b);








//В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.
// const list = [12, 4, 32, 5, 43];
// let sum = 0;
// for (let i = 0; i < list.length; i++){
//     sum += list[i]
    
// } 
// console.log(sum)








//В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.
// const list = [12, -4, 32, -5, 43, 4, -32, 1, 54, 2];
// let result = 0;
// for(let i = 0; i < list.length; i++){
//     if (list[i] > 0){ // вот тут была моя проблема LIST [I]
//         result +=list[i]
//     }
// }
// console.log(result)





//В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
// const list = [12, 4, 32, 5, 43, 4, 32, 1, 54, 2];
// let even = 0;
// let odd = 0;
// for (let i =0; i < list.length; i++){
//     if (list[i] % 2 === 0){
//         even +=list[i]
//     }else{
//         odd +=list[i];
//     }
// }
// console.log(even - odd)





// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.
// const list = [12, 4, 32, 5, 43, 4, 32, 1, 54, 2];
// function object(list){
//     let max = list[0]; // или так найти MAX  let max = 0;
//     let min = list[0];
//     let sum = 0;

//     for (let i = 1; i < list.length; i++){
//                 // или так найти MAX for (let i = 0; i < list.length; i++){ 
//         if (max < list[i]){ //спрашиваем является ЛИ MAX большим в list
//             max = list[i];
//         }else if (min > list[i]) {  // спрашиваем является ЛИ MIN меньшим в list
//             min = list[i];
//         } 
//         sum += list[i];  // считаем сумму всех чисел массива
//     }
//     return {
//         max: max,
//         min: min,
//         avg: sum / list.length // выводим сумму чисел массива и находим среднее делим на длинну массива
//     }
// }
// console.log(object(list));

  
    
 

//вывести в консоль только название товара
// const products = [
//     {
//         id: 1,
//         title: "велосипед",
//         price: 45000,
//         discount: 10
//     },
//     {
//         id: 2,
//         title: "ролики",
//         price: 15000,
//         discount: 5
//     },
//     {
//         id: 3,
//         title: "самокат",
//         price: 10000,
//         discount: 30
//     },
//     {
//         id: 4,
//         title: "лыжи",
//         price: 25000,
//         discount: 20
//     },
//     {
//         id: 5,
//         title: "скейт",
//         price: 10000,
//         discount: 0
//     }
// ]
// for (let i = 0; i < products.length; i++)
// console.log(products[i].title)



//Написать цикл, который выводит для каждого товара стоку по маске “<название> (<цена>)”
// const products = [
//     {
//         id: 1,
//         title: "велосипед",
//         price: 45000,
//         discount: 10
//     },
//     {
//         id: 2,
//         title: "ролики",
//         price: 15000,
//         discount: 5
//     },
//     {
//         id: 3,
//         title: "самокат",
//         price: 10000,
//         discount: 30
//     },
//     {
//         id: 4,
//         title: "лыжи",
//         price: 25000,
//         discount: 20
//     },
//     {
//         id: 5,
//         title: "скейт",
//         price: 10000,
//         discount: 0
//     }
// ]
// for( let i = 0; i < products.length; i++){
// const {title, price} = products[i]
// console.log(`${title} - (${price})`) // или так можно решить

// }
// console.log(`${products[i].title} - (${products[i].price})`) // или так можно решить









//Написать цикл, который выводит для каждого товара стоку по маске “<название> (<цена со скидкой>)”
//  const products = [
//     {
//         id: 1,
//         title: "велосипед",
//         price: 45000,
//         discount: 10
//     },
//     {
//         id: 2,
//         title: "ролики",
//         price: 15000,
//         discount: 5
//     },
//     {
//         id: 3,
//         title: "самокат",
//         price: 10000,
//         discount: 30
//     },
//     {
//         id: 4,
//         title: "лыжи",
//         price: 25000,
//         discount: 20
//     },
//     {
//         id: 5,
//         title: "скейт",
//         price: 10000,
//         discount: 0
//     }
// ]
// for( let i = 0; i < products.length; i++){
// const {title, price, discount} = products[i]
// console.log(`${title} ${(price - discount / 100 * price)}`)
// }






// написать цикл, которвый считает общую сумму price
// в конце выведите ее
const products = [
        {
            id: 1,
            title: "велосипед",
            price: 45000,
            discount: 10
        },
        {
            id: 2,
            title: "ролики",
            price: 15000,
            discount: 5
        },
        {
            id: 3,
            title: "самокат",
            price: 10000,
            discount: 30
        },
        {
            id: 4,
            title: "лыжи",
            price: 25000,
            discount: 20
        },
        {
            id: 5,
            title: "скейт",
            price: 10000,
            discount: 0
        }
    ]
    let sum_price = 0;
for (let i = 0; i < products.length; i++){
    sum_price += products[i].price;
}
console.log(sum_price)