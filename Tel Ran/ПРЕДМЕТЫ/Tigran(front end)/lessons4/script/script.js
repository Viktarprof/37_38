// МЕТОДЫ СРТРОК (продолжение)

// метод slice(n,m) -  позволет сформировать подстроку от n индекса до  m индекса. 
// ВТОРОЙ АГРУМЕНТ НЕ ВКЛЮЧИТЕЛЬНО
// возвращает новую строку

// let a = 'Привет мой друг';
let a = 'Привет мой друг мой'; 

console.log(a.slice(0,6));    // Привет
console.log(a.slice(7,10));   // мой
console.log(a.slice(11,15));  // друг
console.log(a.slice(11));     // друг
console.log(a.slice(-3));     // мой
console.log(a.slice(a.indexOf('друг'), a.indexOf('друг') + 'друг'.length+1));    // друг АВТОМАТИЗИРОВАННОЕ РЕШЕНИЕ



// ЗАДАЧА 1
// Задана почта в переменной email. 
// 1)Выведите в консоль только логин почты.
// Пример:
let email = 'thegreat@mail.com'
let email1 = 'tigran@rambler.net'
let email2 = 'tig.ran@rambler.net'
console.log(email.slice(0,email.indexOf('@')))  
console.log(email1.slice(0,email1.indexOf('@')))  // вывести от индекса 0 до индекса где есть "@"

// 2) Выведите в консоль только логин домена (mail, rambler)
console.log(email.slice(email.indexOf('@')+1, email.indexOf('.')))  
console.log(email1.slice(email1.indexOf('@')+1, email1.indexOf('.')))
// вывести от индекса где есть @ до индекса где есть . 


// 3) Выведите в консоль только доменную зону (com, net)
console.log(email.slice(email.indexOf('.')+1)) 
console.log(email1.slice(email1.indexOf('.')+1)) 
console.log(email2.slice(email2.lastIndexOf('.')+1)) // если точек в строке больше

let email3 = 'tig.ran@rambler.poland.net'
console.log(email3.slice(email3.indexOf('.', email3.indexOf('.')+1)))




// Задача 2. 
// Задача строка string. Сформируйте новую подстроку по следующему правилу: 
// если строка начинается на "date:"" в этом случае оставьте только дату
// если в строка не начинает на date - оставить строку в исходном виде

// Пример:
// 1) 
// let string = 'date: 2022.10.10'
// 2) 
let string = '2010.06.06'
// решение 1
if (string.startsWith('date:')){
  console.log(string.slice(string.indexOf(":")+2));
} else {
  console.log(string);
}
// решение 2
console.log(string.replace('date:', ''));



// Задача 3. 
// Задан массив phones
// Сформируйте новый массив newPhones. 
// Если телефон начинается на +7 - он должен оказаться в новом массиве

let phones = ['+7975644911','8975644944','+7975644999','+7975644945']
const new_phones1 = phones.filter((el) => el.startsWith('+7'));
const new_phones2 = phones.filter((el) => el.includes('+7'));
console.log(new_phones1);
console.log(new_phones2);




// МЕТОДЫ МАССИВА, КОТОРЫЕ ИСПОЛЬЗУЮТСЯ ДЛЯ СТРОК В ТОМ ЧИСЛЕ

// метод slice() - возвращает новый массив  указанным диапазоном элементов.
let aa = [1,2,3,4,5,6,7,8,9];
console.log(aa.slice(0,4)); // [ 1, 2, 3, 4 ]
console.log(aa.slice(5));   // [ 6, 7, 8, 9 ]
console.log(aa.slice(-2));  //[ 8, 9 ]

//-------
// метод indexOf() - индекс найденного элемента массива.
// в качестве аргумента передает ЗНАЧЕНИЕ искомого элемента массива

let aaa = ['one', 'two', 'three', 'four'];
console.log(aaa.indexOf('three'));  // индекс 2
console.log(aaa.indexOf('fo'));  // индекс -1



// Почему indecOf() возвращает -1 с аргументом ['четыре']

function indexOf(string){
    for (let elem in array){
        // elem = ['четыре']
        // ['четыре'] == ['четыре'] false
        if (array[elem] == string){
            return elem
        }
    }
    return -1
}

// --------
// let a = [1,2,3]
// let b = [1,2,3]

// console.log(a == b) 
// Результат работы будет false т.к. переменные хранят путь в область ячейки памяти.

// --------
// let a = [1,2,3]
// let b = a

// console.log(a == b)  
// // true 
// // переменные а и b ссылаются на один и тот же массив

// b.push(4)



// // Выше указанные изменения унаследуются для выражения a и b одновременно,
// //  посльку они ссылаются на один массив

// console.log(a)
// console.log(b)

// ---------------------
// Пример, когда метод indexOf() может вернуть индекс вложенного массива
// let b = ['fore'];
// let arr = ['one', 'two', 'three', b];

// console.log(arr.indexOf(b));

// ------------------
// Метод includes() - возвращает булевый тип и проверяет, 
// существует ли заданное значение среди всех элементов массива

// let a = ['раз', "два","три",['четыре']]

// console.log(a.includes('раз'))       true
// console.log(a.includes(['четыре']))  false

// ------------------
// Задание: создать копию массива

// let a = [1,2,3]

// let b = a.slice(0)
// let b = a.map(elem => elem)
// let b = a.filter(() => true)

// Оптимальный способ (короткий)
// let b = [...a]

// console.log(a,b , a==b)