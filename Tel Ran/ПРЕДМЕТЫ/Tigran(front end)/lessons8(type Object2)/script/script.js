// --------------------------
// Копирование объектов

// 1)
let obj1 = {name: 'Tigran', age: 50};
let obj2 = {name: 'Tigran', age: 50};
console.log(obj1 == obj2); // false

// 2)
let obj3 = Object.assign({}, obj1);
console.log(obj1 == obj3)  // false

// 3)
let obj4 = {...obj1}
console.log(obj1 == obj4) // false




//======================
// Сравнение объектов
// JSON - JavaScript Object Notation
console.log();
// =================================

let obj5 = {name: 'Tigran', age: 50};
let obj6 = {name: 'Tigran', age: 50};
let obj7 = {age: 50, name: 'Tigran'};

// JSON.stringify() - метод, преобразующий объект в JSON. возвращает строку.
// JSON.parse() - метод, преобразующий JSON в объект. возвращает JSON.


console.log(JSON.stringify(obj5)); // {"name":"Tigran","age":50}
console.log(typeof JSON.stringify(obj5)); // string

console.log(JSON.stringify(obj5) === JSON.stringify(obj6)); // true 
console.log(JSON.stringify(obj5) === JSON.stringify(obj7)); // false !!!!!!!   если порядок ключей  разный или разное название ключей, ТО ПОКАЖЕТ 



// =================================
// Копирование объектов (часть2)
console.log();
// =================================

let obj8 = {name: 'Tigran', age: 50};
let obj8copy1 = Object.assign({}, obj8); // не глубокое копирование
let obj8copy2 = JSON.parse(JSON.stringify(obj8)); // глубокое копирование

    console.log(obj8);
    console.log(obj8copy1);
    console.log(obj8copy2);




// =================================
// Задачи
console.log();
// =================================

// Задача 1
// Заданы три объекта:
// Задача: объедините user_11 и user_12 в один объект 
// и сравните результат с объектом user_2. 
// В качестве ответа необходимо получить булевый тип.

let user_11 = {id: 1}
let user_12 = {username: 'user'}
let user_2 = {
                id: 1,
                username: 'user'
            }

let users_1 = Object.assign({}, user_11, user_12);
console.log(users_1); // { id: 1, username: 'user' }

console.log(JSON.stringify(users_1) === JSON.stringify(user_2)); // true
console.log(users_1 === user_2); // false


// =================================
console.log();
// =================================
// Задача 2: 
// Напишите функцию checkObj(obj), которая проверяет, действительно ли объект obj пустой {}. Функция должна вернуть булевый тип
// Подсказка: можно попробовать преобразовать объект в массив

// решение 1
function checkObj(obj) {
    let new_obj = Object.keys(obj).length;

        if (new_obj == 0) {
            return true
        } else {
            return false
        }
}
    console.log(checkObj({name:'TEST'}))


// решение 2
function checkObj(obj) {
    return Object.keys(obj).length == 0;
}
    console.log(checkObj({name:'TEST'}))


// решение 3
function checkObj(obj) {
    return JSON.stringify(obj) == '{}';
}
    console.log(checkObj({name:'TEST'}))
    


// =================================
console.log();
// =================================
// Задача 3: 
// Напишите функцию checkObjectLength(obj1,obj2), которая принимает в 
// аргументе 2 объекта. Если у 1 и 2 объекта количество
// одинаковое - функция должна вернуть ответ true

// решение 1
function checkObjectLength(obj1,obj2) {
    let new_obj1 = Object.keys(obj1).length;
    let new_obj2 = Object.keys(obj2).length;
    if ( new_obj1 == new_obj2){
        return true
    } else {
        return false
    }  
}
console.log(checkObjectLength({test: 10}, {great: 12})); // Результат: true


// решение 2

function checkObjectLength(obj1, obj2){
    return Object.keys(obj1).length == Object.keys(obj2).length
}
console.log(checkObjectLength({test: 'test', name: 'string'}, {age: 40})) //true
console.log(checkObjectLength({test: 'test'}, {age: 40})) //false



// =================================
console.log();
// =================================
// ========= МЕТОД isArray ============

let array = [1,2,3];
let obj = {name: 'Viktor'};

console.log(Array.isArray(array)); // true
console.log(Array.isArray(obj));   // false



// =================================
console.log();
// =================================
// Задание: сформируйте из массива array два новых массива usersArray и usersObjs,
// элементы которых будут содержать вложенный массив и объект соответственно
let arr = [
    {id : 1, name: 'Tigran'},
    [2, 'Alex'],
    {id: 3, name: 'Neena'},
    [3, 'Steven']
]
// решение 1
let usersArray = arr.filter(el => Array.isArray(el));
let usersObjs = arr.filter(el => !Array.isArray(el));

console.log(usersArray);
console.log(usersObjs);


// решение 2
function someHand(arr){
    let usersArray = arr.filter(el => Array.isArray(el));
    let usersObjs = arr.filter(el => !Array.isArray(el));
    // return {usersArray, usersObjs} // вернем объект
    return [usersArray, usersObjs] // вернем массив
}
console.log(someHand(arr));






// =================================
// ============ ДЕСТРУКТУРИЗАЦИЯ ================
    console.log();
// =================================

// ДЕСТРУКТУРИЗАЦИЯ - это процесс создания новых переменных (больше 1) одной строкой

// (Для массива)
let [b,a,c] = [10,40,30]
//Порядок переменных и чисел после знака равенство строго зависимы

console.log(a,b,c)  //40 10 30

//(Для объекта)
let objq = {a: 10, b: 20, c:30}

//Пример 1
let {aa,ba,ca} = objq
console.log(aa,ba,ca) //10 20 30

// Пример 2
let {dq,cq,fq} = obj
console.log(dq,fq,cq) //undefined undefined 30

// Важное условие деструктуризации объектов:
// имена новых переменных в деструктуризации должно полностью соотвествовать значниям ключей у объекта

// Пример 3
let {cqq} = obj
console.log(cqq)  
         30

// -----------------
let arrayq = [10,40,30]

//Пример 1
let [ar,br,cr,dr,fr,gr] = arrayq
console.log(ar,br,cr,dr,fr,gr) //10 40 30 undefined undefined undefined

// Пример 2
let [aw,bw] = array
console.log(aw,bw)//10 40












// =================================
// ============ РАСПАКОВКА МАССИВА ================
    console.log();
// =================================
let arrayz = [5,6,7,8,9]

console.log(...arrayz)
console.log(5,6,7,8,9)

// // ...array = 5,6,7,8,9

console.log(arrayz)
console.log([5,6,7,8,9])

// -------
// Не глубокое копирование массива
let arrayCopy1 = [...arrayz] 
console.log(arrayCopy1)
// ------
// Копирование и добавление нового элемента 
let arrayzz = [5,6,7,8,9]

// Пример 1
let arrayCopy2 = [...arrayzz, 10] 
console.log(arrayCopy2)
//          [ 5, 6, 7, 8, 9, 10 ]

// Пример 2
let arrayCopy = [30,40, ...array, 10]
console.log(arrayCopy) //[30, 40, 5, 6, 7, 8, 9, 10]

// распаковал и добавил новые элементы
let arraysCopy = ['NY', ...array, 4, 6] // не глубокое копирование // ['NY', 5, 6, 7, 8, 9, 4, 6]
console.log(arraysCopy);









// оператор Spread - используетя для разделения массива/объекта на отдельные элементы
// оператор Rest - используетя для соеденения массива/объекта в массив

// оператор Spread - используется для разделения массива/объекта на отдельные элементы
// оператор Rest - используется для соединения отдельных элементов в массив

// // Здесь ...array - это Rest-оператор

function log(...array){
//              здесь - Spread-оператор
    console.log(...array)
}

log(1,2,3)
//      1 2 3

log(1,2,3,4,5)
//      1 2 3 4 5

// // Пример 2
function handle(n1,n2,...array){
    console.log(n1, n2, array)
}

// // Данная структура очень сильно похожа на реализацию метода splice()

handle(1,2,3,4,5)
        // 1 2 [ 3, 4, 5 ]

let arrayer = ["Раз","Два","Три","Четыре"]
arrayer.splice(2,1,3,4,5,6)
console.log(arrayer)





let arr1 = ["раз", "два", "три", "четыре"]
arr1.splice(2,1, 3,4,5,'удаил с третьего элемента один элемент и добавил новые')
console.log(arr1);