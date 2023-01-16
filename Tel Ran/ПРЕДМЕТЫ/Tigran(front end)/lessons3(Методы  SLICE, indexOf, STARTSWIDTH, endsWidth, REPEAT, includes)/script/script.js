// Методы строк
// \n - вынос строк для '' и ""
// \t - табуляция

// let a = "При\nвет";

// let b = 'При    вет';
// let c = `${100*5} Приве
// т`; // подставлять какие-то выражения для математических вычислений. Есть возможность  сделать перенос строки.

// let g = b
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(g);

//==================================
// concat() - метод конкатинирующий строки. Процес объединения строк

let a = "Привет";
let b = "друг";

console.log(a.concat(', ', b, ' + ')); // полезен в случаи если работаем с массивом
console.log(a + ', ' + b + ' + ');
console.log(`${a}, ${b} +`); // интерполяция

let f = [1,2,3];
let d = [4,5,6];

console.log(f.concat(d));
console.log([f],[d]); 
console.log(...f,...d); // диструктуризация// ... распаковка
console.log(f * d);


//==================================
// repeat()
// метод repeat() - повторить n-ое кол-во раз строку
let aaa = '_-';
console.log(aaa.repeat(10));



//==================================
// includes(substring)
// метод includes(substring) который определяет, существует ли подстрока substring в строке. Метод учитывает пробелы. Возвращает булевый тип TRUE / FALSE. Учитывает с большой буквы или с маленькой написано слово.

let aaaa = 'Привет мой друг';
console.log(aaaa.includes('Привет'));   // TRUE
console.log(aaaa.includes('мой'));      // TRUE
console.log(aaaa.includes('Друг'));     // FALSE потомучто с дольшой буквы
console.log(aaaa.includes('вет м'));    // TRUE
console.log(aaaa.includes('ой д'));     // TRUE



//==================================
// startsWith(substrin) 
// - метод который проверяет начинается ли строка с переденной в качестве аргумента подстроки
let aaaaa = 'Привет мой друг';

console.log(aaaaa.startsWith('Привет'));  // TRUE
console.log(aaaaa.startsWith('мой'));     // FALSE потомучто не начало строки
console.log(aaaaa.startsWith('друг'));    // FALSE потомучто не начало 



//==================================
// endsWith(substrin) 
// - метод который проверяет начинается ли строка с переденной в качестве аргумента подстроки.  УЧИТЫВАЕТ ПРОБЕЛЫ
let aaaaaa = 'Привет мой друг';

console.log(aaaaaa.endsWith('Привет'));         // FALSE потомучто не конец строки
console.log(aaaaaa.endsWith('мой'));            // FALSE потомучто не конец строкистроки
console.log(aaaaaa.endsWith('друг'));           // TRUE 
console.log(aaaaaa.endsWith('ет мой друг'));    // TRUE 




//==================================
// indexOf(substrin) 
// - возвращает индекс начала подстроки (substrin). т.е покажет индекс первой буквы в каком-то выделенном слове. 
// СЛЕВА НА ПРАВО.
// Если подстроки нету то вернет индекс -1. В поиске второго похожело слова, указывать начала старта.


//lastIndexOf () - делает поиск справа а лево
let a1 ='Привет мой друг мой';
console.log(a1.indexOf('Привет'));      // индекс 0 
console.log(a1.indexOf('мой'));         // индекс 7 
console.log(a1.indexOf('Мой'));         // индекс -1
console.log(a1.indexOf('мой', 8));      // индекс 16
console.log(a1.lastIndexOf('мой'));     // индекс 16




// Задача 1.
// Определить индекс второй подстроки 'date' у переменной string. Код должен работать на 2 тестах
// 1-ый тест // ответ 14 
let string1 = 'date 10.10.10 date 20.20.20 date 30.30.30';

// 2-ой тест // ответ 32
let string2 = '10.10.10.10.10.10 date 20.20.20 date 30.30.30 date 40.40.40 date'   
console.log(string1.indexOf('date', string1.indexOf('date')+1)); // +1 это в качестве 2-ого аргумента формируем не 0, а еденицу
console.log(string2.indexOf('date', string2.indexOf('date')+1));
console.log(string2.indexOf('date', string2.indexOf('date', string2.indexOf('date')+1)+1)); // находим третье слово date в строке // ответ 46




// Задача 2.
// Задан формат даты в переменной dates в виде строки.
// '2022/10/18' - американский
// '2022.10.18' - русский

// Напишите программу, которая определит к какой стране относится формат даты
// В качестве ответа вывести сообщение "Формат даты российский"

// Пример:
// let date = '2020/10/18'

// Результат:
// Формат даты американский


let date = '2022/10/18'; // - американский
if (date.includes('/')){
  console.log('Формат даты американский');
} else if (date.includes('.')){
  console.log("Формат даты российский");
}





// Задача 3.
// Задан массив emails, передающий строковые элементы. Определите, все ли элементы содержат верную почту.
// Критерии правильной почты: наличие "@" и "."
// В качестве ответа необходимо в консоль вывести ответ true/false для каждого элемента.


 let emails = ['top@dot.com', 'abra@gmailcom', 'pot.mail.ru', 'grek@pro.pro']
for (let elem of emails) {
  if(elem.includes('@') && elem.includes('.')){
    console.log('true');
  } else{
    console.log('false');
  }
}

//решение 2
for (let elem of emails){
  console.log(elem.includes('@') && elem.includes('.'))
};
//решение 3
emails.forEach((elem) => console.log(elem.includes('@') && elem.includes('.')))
// Результат:
// true
// false
// false
// true




 //=========================================
 //replace() - заменятяет 1 подстроку на другую подстроку. Метод возвращает новую строку. Учитывает больщ=ший и маленькие букву.

 let a5 = 'Привет мой друг мой';
 console.log(a5.replace('мой','наш')); 
 console.log(a5.replace('мой ','')); // уберет слово и поставит пробел
   
 // replaceAll() - заменит все совпадения
 let a6 = 'Привет мой друг мой';
 console.log(a6.replaceAll('мой','наш')); 





 // ------------------------
// Задача 4
// Задан массив phones, передающий номера телефонов в виде строки.
// Реализуйте очистку данных, сформировав единый вид для все элементов массива.phones

// Пример:
let phones = ['891 11112 233','89111-1122-44','8911-11122-55','89111112266'];

// // первое решение
for (let i in phones) {
phones[i] = phones[i].replaceAll(' ', '').replaceAll('-', '').replaceAll('8', '+7');
}
console.log(phones);

//второе решение
console.log(phones.map((elem) => elem.replaceAll(' ', '').replaceAll('-', '').replaceAll('8', '+7') ));  

// Результат:
// ['+79111112233','+79111112244','+79111112255','+79111112266']






// метод slice -  позволет сформировать подстроку от n индекса до  m индекса.
let a7 = 'Привет мой друг';
console.log(a7.slice(7,10));