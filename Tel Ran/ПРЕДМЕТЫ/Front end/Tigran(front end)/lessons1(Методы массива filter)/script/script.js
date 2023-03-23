// Методы массива
// метод filter() - это метод, возвращает НОВЫЙ отфильтрованный массив;
// фильтр МОЖЕТ принимать колбэк функцию
// колбэк принимает значение элемента массива с каждой итерации

// function hadler(callback){
//     if (callback()){
//         console.log("первый результат консоли = " + true);
//     } else{
//         console.log("второй результат консоли = " + false)
//     }
//     // return callback();
// }
// hadler(() => 10 > 5) // true
// hadler(() => 10) // false
// console.log("третий результат консоли = " + Boolean(-999))// true
// console.log("четвертый результат консоли = " + Boolean(''))  // false
// console.log("пятый результат консоли = " + Boolean( 0))   // false

// filter
//let array = [1,2,3,4,5,6,7,8,9];
//let result = array.filter((value) => value < 5); // value работает как callback
//console.log(result)

//================================================
// Задача
// Отфильтровать элементы таким образом, чтобы получить новый массив, который содержит только булевый тип данных
// пример:
// let array2 = [true, false, '12',0,true,'string',[1,2,3],{name:'tigran'}];
// // Результат:
// // [true,false,true]
// //решение 1
// let result2 = array2.filter((value) => typeof value === "boolean");
// console.log(result)

// //  решение 2
// let result1 = []
// for (let value of array){
//     // if(!Array.isArray(value)){ // !!!!! вывели ВЕСЬ массив

//      if (typeof value === 'object' && !Array.isArray(value)){ // !!!!!! вывели ключ(name) из объекта
        
//     // if (typeof value === 'object'){//вывели объект
//     result1.push(value)
//      }
// }
// console.log(result1)

//================================================
// Задача 2
// Отфильтровать значения по условию - первая буква строки должна быть "А"
// Пример:
  let array = ['Арбуз', 'Антена','Бор','Арбуз','Сеть','Трон']
// Результат:
// ['Арбуз','Антена','Арбуз']
//
console.log(array.filter((value) => value.startsWith('А')))
let result = array.filter((value) => value.startsWith('А'))
console.log(result)
// индексация
console.log(array.filter((value) => value[0] == ('А')))
// charAt
console.log(array.filter((value) => value.charAt(0) == ('А')))
// слайз
console.log(array.filter((value) => value.slice(0,1) == "А"))

//================================================
//Предложенные аргументы внутри колбеэка (ФИЛЬТР)
//1) значение элемента массива
//2) индекс элемента массива
//3) целый массив

let array1 = ["Один", "два", "три", "четыре"]
// 1)
console.log(array1.filter((value, index) => console.log(value, index)));
// 2)
console.log(array1.filter((value, index) => index % 2 === 0)); // можно вывести четные или не четный индекс
// 3)
console.log(array1.filter((value, index, arr) => console.log(value, index, arr))); 