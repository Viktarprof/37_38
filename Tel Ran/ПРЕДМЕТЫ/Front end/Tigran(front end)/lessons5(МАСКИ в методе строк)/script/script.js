// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ


// как достать из строки только ЧИСЛО
let array = [
  'qwedd43rfre',
  'cdf53tvfre'
]
for (const elem of array) {
  regs = /\d+/ // маска
  console.log(elem.match(regs)[0]);
}


let string = 'hello world';
let reg1 = /lo/
let result = string.match(reg1)
console.log(result);  // [ нашли 'lo', у него index: 3, в строке input: 'hello world', groups: undefined ]




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



//=============
let string2 = 'hello w_o9r56ld';
let reg2 = /\w\w\w \w\w\w/   //  w покажет столько символов из строки сколько указали 
let result2 = string2.match(reg2)
console.log(result2);  //  [ 'llo w_o', index: 2, input: 'hello w_o9r56ld', groups: undefined ]

//=============
let reg3 = /\d\d/   //  d покажет столько символов из строки сколько указали 
let result3 = string2.match(reg3)
console.log(result3);  // 56   [ '56', index: 11, input: 'hello w_o9r56ld', groups: undefined ]

//=============
let reg4 = /\W/   //  W покажет столько символов из строки сколько указали 
let result4 = string2.match(reg4)
console.log(result4);  // пробел   [ ' ', index: 5, input: 'hello w_o9r56ld', groups: undefined ]


//=============
let string3 = '349589345h3496932';
let reg5 = /\D/   //  D покажет столько символов из строки сколько указали 
let result5 = string3.match(reg5)
console.log(result5);  // [ 'h', index: 9, input: '349589345h3496932', groups: undefined ]

//=============
let string4 = 'tigran';
let reg6 = /[abcABC123]/   //  [а-яА-Я] покажет столько символов из строки сколько указали 
let result6 = string4.match(reg6)
console.log(result6);  //

//=============
let string5 = 'Hello д Д workd';
//let reg7 = /[а-яА-Я]\s[а-яА-Я]/ 
let reg7 = /[а-яА-Я] [а-яА-Я]/   //  [а-яА-Я] покажет столько символов из строки сколько указали 
let result7 = string5.match(reg7)
console.log(result7);  //

//=============
let string6 = 'Hello . workd';
let reg8 = /[.]/   
let result8 = string6.match(reg8)
console.log(result8);  

//=============
let string7 = '!HelMo . world';
let reg9 = /^[!?]\w\w\w\w\w\s[.]\s\w\w\w\w\w$/   
let result9 = string7.match(reg9)
console.log(result9); 

// let string = '?HelMo . world'
// let reg = /^[!?]\w\w\w\w\w\s[.]\s\w\w\w\w\w$/
// let result = string.match(reg)

// if (result != null){
//     console.log(result[0])
// } else {
//     console.log(null)
// }
//=============







// ---------------------------------
// Задача 1
// Задан массив phones. Найдите номера телефонов, которые соответствуют маске
// 'xxx.xxx.xxx'. Поместите эти номера в новый массив newPhones.

let phones = [
    '4235123.123.123',
    '453.567.9857876',
    '23.33.22.34',
    '567.986.423',
    '123456.4533',
    '567.90987.5',
    '12.3323.321',
    '1234.566777',
    '655.432.342'
]
const newPhones = []

// let regs = /^\d\d\d[.]\d\d\d[.]\d\d\d$/;
let regs = /^\d{3}[.]\d{3}[.]\d{3}$/;
// let regs = /^[1-9][1-9][1-9][.][1-9][1-9][1-9][.][1-9][1-9][1-9]$/;
phones.map(el => el.match(regs) == null ? el : newPhones.push(el.match(regs)));
console.log(newPhones);
// решение
// let reg = /^\d\d\d[.]\d\d\d[.]\d\d\d$/
// let newPhoness = []

// for (let elem of phones){
//     if (elem.match(reg) != null){
//         // newPhoness.push(elem)
//         newPhoness.push(elem.match(reg)[0])
//     }
// }

// console.log(newPhoness)






let string1 = 'tigran@mai.com.ru'
// let reg12 = /\w{1,}[@]\w{2,}[.]\w{2,}[.]{0,1}\w{0,}/
let reg12 = /\w+[@]\w{2,}[.]\w{2,}[.]?\w*/
let result1 = string1.match(reg12)

console.log(result1)






// --------------------------
// Деректива break - принудетльная остановка цикла
// while(true){
//     let answer = prompt('2+2=?')
//     if (answer == 4){
//         break
//     }
// }

// '4' == 4         true
// '4' === 4        false


// --------
// for (let elem of array){
//     console.log(elem)
//     if (elem > 6){
//         break
//     }
// }

// Важно! Ответ: 
// 5
// 6
// 7

// -----------------

// for (let elem of array){
//     if (elem > 6){
//         break
//     }
//     console.log(elem)
// }

// Важно! Ответ: 
// 5
// 6

// ----------------
// Деректива continue - принудетльно переходит к следующей итерации

// let array = [5,6,7,8,9,10]

// for (let elem of array){
//     if (elem == 8){
//         continue
//     }
//     console.log(elem)
// }

// for (let elem of array){
//     if (elem != 8){
//         console.log(elem)
//     }
// }