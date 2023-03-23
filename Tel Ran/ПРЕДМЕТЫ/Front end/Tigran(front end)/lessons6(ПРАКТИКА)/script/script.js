
//   поиск по группе символов
//   \w   - маска для поиска латиских букв и диапазон чисел от 0 до 9. НАХОДИТ ОДИН СИМВОЛ
//   \d   - маска которая ссылается только на цифры
//   \s   - только ко пробелы
//    \W  - НЕ ЛАТИНСКИЕ БУКВУ И ДИАПАЗОН ОТ 0 до 9
//    \D  - ВСЕ КРОМЕ ЦИФР (НЕ диапазон чисел от 0 до 9)
//    \S  - НЕ ПРОБЕЛ
//   [abcABC123]  -  пользовательсктй набор символов / ОДНИ КВАДРАТНЫЕ СКОБКИ ОДИН СИМВОЛ
//   .    - любой символ
//  [.] или \.   - экранирование спец символов
//   ^ (циркумфлекс)   -  начало строки
//   $    - конец строки

// КВАНТИФИКАТОРЫ
//    {n}  - n-ое количество подряд идущих групп символов
//   {n,m} - или n  подряд идущих символов ИЛИ m подруд идущих символов
//   {n,}  - или n  подряд идущих символов ИЛИ после запятой МНОГО (бесконечно)
// диапазон {0,}  ноль или мноо
//    +    - Означает «один или более». То же самое, что и {n,}. Например, \d+ находит числа (из одной или более цифр).
//    *    - означает {0,}

let string = 'tigran@mai.com.ru'
let reg = /\w+[@]\w{2,}[.]\w{2,}[.]?\w*/
let result = string.match(reg);

console.log(result);




let string1 = 'test1test7test9test20'
let reg1 = /\d+/
let result1 = string1.split(reg1);

console.log(result1);






// Работа с датой. Экземпляр класса Date.

// Инициализация даты (3 подхода)
// 1-ый 
let date1 = new Date('2023-01-20 9:30:00') // или ('2023-01-20 9:30:00 GMT')

// 2-ой
// Если указать месяц в виде числа, тогда январь будет 0, а декабрь - 11
let date2 = new Date(2023,0,20,9,30)

// 3-ий
// Отсчет с 1970 года 1 месяца 1 числа в 00:00
let date3 = new Date(0)     // 1970-01-01T00:00:00.000Z

let date4 = new Date(1000 * 60 * 6)   // 1970-01-01T00:06:00.000Z

let date5 = new Date((1000 * 60 * 60 * 24 * 365 * 30) + (1000 * 60 * 60 * 24 * 7))       // 2000-01-01T00:00:00.000Z



// ----------------
// Текущий момент времени
let date6 = new Date()  //  - возвращает ДАТУ текущего момента времени
let num = Date.now()    //  - возвращает количество пройденных милесекунд с 1970 года до момента вызова



// ----------------
// Методы даты (компоненты даты)
// --------
// Методы, которые позволяет получить в виде числа любой компонент даты
let date7 = new Date('2023-01-20 9:30:00')


console.log(date7.getFullYear())          // - год даты (в виде числа)
console.log(date7.getMonth())             // - месяц даты (начиная с 0)
console.log(date7.getDate())              // - день месяца

console.log(date7.getHours())             // - часы
console.log(date7.getMinutes())           // - минуты
console.log(date7.getSeconds())           // - секунды
console.log(date7.getMilliseconds())      // - милисекунды


// -------
// День недели

 console.log(date7.getDay())
// 0    - воскресенье
// 1    - понедельник
// 2    - вторник
// 3    - среда
// 4    - четверг
// 5    - пятница
// 6    - суббота



// --------
// Методы, которые позволяет именить дату указав отдельные компоненты
 let date8= new Date('2023-01-20 9:30:00')

// Методы, помимо того, что меняют значение даты, еще возвращают количество
// пройденных миллесекунд с 1970 года до значения измененной даты

date8.setFullYear(2030)       
date8.setMonth(11)             
date8.setDate(30)              
date8.setHours(20)             
date8.setMinutes(0)           
date8.setSeconds(0)           
date8.setMilliseconds(0)  

console.log(date8)

// -------------------------
// Задача 1. 
// Напишите функцию getWeekDay(), которая в зависимости от даты 
// (текущего момента времени) в консоль выводит день недели согласно результату

// Пример:
// getWeekDay()

// Результат:
// 'Сегодня вторник'

// Большое решение 

function getWeekDay(){
    let date = new Date()
    let day = date.getDay()

    if (day == 0){
        console.log('Сегодня воскресенье')
    } else if (day == 1){
        console.log('Сегодня понедельник')
    } else if (day == 2){
        console.log('Сегодня вторник')
    } else if (day == 3){
        console.log('Сегодня среда')
    } else if (day == 4){
        console.log('Сегодня четверг')
    } else if (day == 5){
        console.log('Сегодня пятница')
    } else if (day == 6){
        console.log('Сегодня суббота')
    }
}
getWeekDay()

// ---------------
// Более короткое решение

function getWeekDay(){
    let day = new Date().getDay()
    console.log(day);
    let array = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
    console.log(`Сегодня ${array[day]}`)
    }
getWeekDay()

// ---------------
// Более короткое решение
function getWeekDay() {
    const day = new Date().toLocaleString('ru-ru', { weekday: 'long' });
    let resultStr = `Сегодня ${day}`;
    console.log(resultStr);
    }
getWeekDay();


// -----------------------------
// Из даты в количество милисекунд 
// getTime()
let date9 = new Date ('2023-5-10 10:00:00')
console.log(date9.getTime())  // 1683698400000

// -------------------------
// Сравнение дат 

let date10 = new Date ('2023-5-10 10:00:00')
let date11 = new Date ('2023-5-10 10:00:00')
console.log(date10 == date11)    // сравниваются объектыб поэтому результат false

console.log(date10.getTime() == date11.getTime())  //   true


// ---------------------------
// Из даты в строку
let date12 = new Date ('2023-5-10 20:00:00')

console.log(date12.toLocaleDateString())     // 5/10/2023
console.log(date12.toLocaleTimeString())     // 10:00:00 AM
console.log(date12.toLocaleString())         // 5/10/2023, 10:00:00 AM


console.log(date12.toLocaleString('ru-RU')) //  10.05.2023, 10:00:00       ('it-IT' Локализация по коду страны)

console.log(date12.toLocaleString('it-IT',{month: 'long', hour: '2-digit'}));

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date12.toLocaleString('de-DE', options));





//  fetch ЗАПРОС
// fetch("http://51.250.8.198:8000/api/posts/")
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))



// post = {
//     titile: 'Консультация',
//     text: 'На консультации отвалился бэк',
//     topic: 1
// }

// fetch("http://51.250.8.198:8000/api/posts", {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(post)
// })
