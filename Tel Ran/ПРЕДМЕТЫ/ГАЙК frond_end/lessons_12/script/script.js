// вывести все число от 0 до 20
// for (let i = 0; i <= 20; i++){
//     console.log(i);
// }




//___________________________________________________
// написать цикл, который выводит числа от 20 до 40 с шагом 3
// 20 23 26 29 32 35 ..
// for (let i = 20; i <= 40; i+=3){
//     console.log(i);
// }





//___________________________________________________
// написать цикл, который выводит числа от 40 до 20 с шагом 4
// for (let i = 40; i >= 20; i -=4){
//     console.log(i);
// }





//___________________________________________________
// вывести все значения массива (по одному через цикл)
// const arr = [12, -4, 32, -23, 4, -3, 5, 43];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }





//___________________________________________________
// доработайте цикл таким образом, чтобы он выводил только 
// положительные числа
// const arr = [12, -4, 32, -23, 4, -3, 5, 43];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0) {
//     console.log(arr[i])
//     }
// }






//___________________________________________________
// написать цикл, который все отрицательные значения меняет на 
//положительгные
// до: [12, -4, 32, -23, 4, -3, 5, 43]
// после: [12, 4, 32, 23, 4, 3, 5, 43]

// const arr = [12, -4, 32, -23, 4, -3, 5, 43];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < 0) {
//         arr[i] = -arr[i];
//         //-arr[2, 4, 6] == arr [2, 4, 6]
//     }
// }
// console.log(arr)










//  !!!!!!!!!!!!!!    НОВАЯ ТЕМА     !!!!!!!!!!!!!!!!

//___________________________________________________________
// const user = [`Viktor`, 31, 176];
// console.log(user[0]);
// console.log(user[1]);
// console.log(user[2]);
//___________________________________________________________
// const user = {
//     name: `Viktor`,
//     age: 29,
//     height: 176
// };
// console.log(user[`age`]); //  user[`first age`] взаимодействуем со словарями 
// console.log(user.age); // взаимодействуем с объектами






//___________________________________________________________
// const user = {
//     name: `Viktor`,
//     age: 29,
//     height: 176
// };
// user[`name`] = `Haik`;
// user[`gender`] = `m`;
// // user.name= `Haik`;   //тот же самы ваариант что и выше
// // user.gender= `m`;    //тот же самы ваариант что и выше
// console.log(user)





//___________________________________________________________
// Создать объект с названием и ценой 
// продукта и выведите данные в консоль.
// const product = {
//     title: `tea`,
//     price: 5.85
// };
// console.log(product.title);
// console.log(product.price);





//___________________________________________________
//написали массив []; 
// в массиве есть элементы {};
// каждый элемент имееет свои переменные и значения к переменным.
//обрати внимаение как пишется массив [{} , {} , {}]
// const product = [
//     {
//         id: 1,
//         title: 'bike',
//         price: 45000
//     },
//     {
//         id: 2,
//         title: 'лыжи',
//         price: 25000
//     },
//     {
//         id: 3,
//         title: 'ролики',
//         price: 17000
//     }
// ]
//console.log(product)
// сделали цекл и через цикл вывели значения title 
//for (let i = 0; i < product.length; i++) // УСЛОВВИЕ ПРОГОНА
    //console.log(product[i].title);







//___________________________________________________________
// доработать цикел таким образом, чтобы в консоль 
// выводились строки для каждого продукта
// в следующем формате
// Велосипед (45000)
// const product = [
//     {
//         id: 1,
//         title: 'bike',
//         price: 45000
//     },
//     {
//         id: 2,
//         title: 'auto',
//         price: 25000
//     },
//     {
//         id: 3,
//         title: 'moto',
//         price: 17000
//     }
// ]
// for (let i = 0; i < product.length; i++)
//     //console.log(product[i].title , product[i].price); сделал сам
//     console.log(`${product[i].title} (${product[i].price})`); // вот как надо




//___________________________________________________________
    // доработать цикл таким образом, чтобы 
    // выводимая цена была рассчитана со скидкой
// const product = [
//     {
//         id: 1,
//         title: 'bike',
//         price: 45000,
//         discount: 10
//     },
//     {
//         id: 2,
//         title: 'auto',
//         price: 25000,
//         discount: 20
//     },
//     {
//         id: 3,
//         title: 'moto',
//         price: 17000,
//         discount: 10
//     }
// ];
//for (let i = 0; i < product.length; i++){
    //const real_price = product[i].price - product[i].discount / 100 * product[i].price;
    //console.log(`${product[i].title} (${real_price})`);
    //                           вариант покороче ниже (способ диструктиризация)
    // const {title, price, discount} = product[i]
    // console.log(`${title} (${price - discount / 100 * price})`);







//___________________________________________________________
// написать цикл, который выводит название товаров, дороже 20000

// const product = [
//     {
//         id: 1,
//         title: 'bike',
//         price: 45000,
//         discount: 10
//     },
//     {
//         id: 2,
//         title: 'auto',
//         price: 25000,
//         discount: 20
//     },
//     {
//         id: 3,
//         title: 'moto',
//         price: 17000,
//         discount: 10
//     }
// ];
// for (let i = 0; i <= product.length; i++){
//     const {title, price, discount} = product[i]
//     // if (price > 20000)
//     if (price - discount / 100 * price > 20000){ // решение со скидкой
//     // console.log(`${title} (${price})`);
//     console.log(title)
//     }
// }




//___________________________________________________________
// создать пустой массив result
// написать цикл, который проходится по массиву products и добавляет в массив result
// названия тех товаров, скидка на которые больше 12
// const product = [
//     {
//         id: 1,
//         title: 'Bike',
//         price: 45000,
//         discount: 30
//     },
//     {
//         id: 2,
//         title: 'Auto',
//         price: 25000,
//         discount: 20
//     },
//     {
//         id: 3,
//         title: 'Ship',
//         price: 17000,
//         discount: 10
//     }
//     ];

// const result =[];
// for (let i = 0; i < product.length; i++){
//     const {title, discount} = product[i];
//     if (discount > 12){
//         result.push(title);
//     }
// }
// console.log(result);









//___________________________________________________________

const product = [
    {
        id: 1,
        title: 'Bike',
        price: 45000,
        discount: 30
    },
    {
        id: 2,
        title: 'Auto',
        price: 25000,
        discount: 20
    },
    {
        id: 3,
        title: 'Ship',
        price: 17000,
        discount: 10
    }
    ];

const result =[];
for (let i = 0; i < product.length; i++){
    const {title, discount} = product[i];
    if (discount > 12){
        result.push(title);
    }
}
console.log(result);