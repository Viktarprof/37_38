// Тип данных Объект

// let obj = new Object({name: 'Tigran', age: 30})

let array = [5,6,7,8]

let obj = {
    name: 'Tigran',
    age: 50,
    isJob: false,
    test1: array.map(elem => elem ** 2),
    test2: {
        string: 'somestring'
    },
    test3: () => console.log(123),
    test4: function(){
        console.log(123)
    }
}

console.log(obj)

// -------------------------
let obj1 = {
    first_name: 'Tigran',
    age: 30
}

console.log(obj1['first_name'] + 2000)


// ----------------------------
// Взаимодейсвтие с объектом

let obj3 = {
    name: 'Alex',
    age: 30,
}

// Добавление нового сво-во / перезаписать существующее сво-во

obj3.salary = 10000       // добавление нового сво-ва
obj3.name = 'Tigran'      // измененеи уже сущетвующего сво-ва

// Удаление сво-ва (оператор delete)

delete obj3.age           // удаление сво-ва объекта 

// ----------
// Особенности delete у массива
let array1 = [1,2,3,4]
delete array1[1]
console.log(array1) // [ 1, <1 empty item>, 3, 4 ]
// Удаляет значение, оставляя индекс


// ---------------------
// Циклы по объектам

let obj4 = {
    name: 'Alex',
    age: 30,
    salary: 4000
}

for (let key in obj4){        
    console.log(key, obj4[key]) 
}

// name Alex
// age 30
// salary 4000

// key         - значение ключей
// obj[key]    - значение сво-ств

//==================
console.log();
//==================
// Задача 1 
// Используя цикл, выведите все значения объекта с числовым набором данных.
// Результат:
// 1
// 3
// 1

// Пример:
let obj5 = {
    char1 : 1,
    char2 : 'string',
    char3 : 3,
    char4 : true,
    char5 : 'false',
    char6 : 1,
};
for (let key in obj5) {
    if (typeof obj5[key] == 'number'){
    console.log(obj5[key]); 
    } 
}


//==================
console.log();
//==================
// Задача 2.
// Используя цикл, выведите значения сво-св, у которых  значение ключа завершатся на четное число. 
// Результат:
// string
// true
// 1

// Пример:
let obj6 = {
    char1 : 1,
    char2 : 'string',
    char3 : 3,
    char4 : true,
    char5 : 'false',
    char6 : 1
}
for (let key in obj6) {
    if( key[key.length-1] % 2 == 0){
    console.log(obj6[key]);
    }
}





// --------------------------------
// методы класса Object

let obj7 = {
    name: 'Alex',
    age: 30,
    salary: 2000
}

// Преобразование объекта в массив
console.log(Object.values(obj7)) // - метод класса Object, который возвращает массив с значениями сво-ств объекта
// [ 'Alex', 30, 2000 ]

console.log(Object.keys(obj7)); // - метод класса Object, который возвращает массив с ключами объекта
//[ 'name', 'age', 'salary' ]

console.log(Object.entries(obj7)); // - метод класса Object, который возвращает массив с ключами и значениями объекта (вложенный массив)
// [ 
//     [ 'name', 'Alex' ], 
//     [ 'age', 30 ], 
//     [ 'salary', 2000 ] 
// ]


// ------------------------------
// Object.assign() - метод, позволяющий из 2 объектов сделать 1 объект

let user = {
    name: 'Alex',
    age: 30
}

let job = {
    job_id: 'IT',
    salary: 5000
}

console.log(Object.assign(user, job))
// { name: 'Alex', age: 30, job_id: 'IT', salary: 5000 }

// Метод не создает новый объект, а меняет первый аргумент

console.log(user)
// { name: 'Alex', age: 30, job_id: 'IT', salary: 5000 }

console.log(job)
// { job_id: 'IT', salary: 5000 }













//==================
console.log();
//==================
let obj11= {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
}
console.log(obj11[3]) // по индексу


//==================
console.log();
//==================
let obj2= {
    10: 1,
    '0': 2,
    20: 3,
    '3': 4,
    4: 5,
}
console.log(obj2) // по индексу


//==================
console.log();
//==================
let obj3= {
    name1 : 'Viktar',
    name1 : 'Anton',
    first_name3 : 'Lena',
    age: 30
}
console.log(obj3.name1); // перезапись ключа

obj3.test = 0; // добавление объекта
console.log(obj3);

delete obj3.age  //  удаление свойства объекта DELETE УДАЛЯЕТ ТОЛЬКО ЗНАЧЕНИЕ, оставляет индекс 
console.log(obj3);


//==================
console.log();
//==================
// циклы по объектам
let obj12 = {
    name : 'Viktar',
    age: 30,
    salary: 4000
}
for (const key in obj12) {
    console.log(key, obj12[key]);       // вывели ключ-значение из объекта
}
// key       - значение ключей
// obj4[key] - значение свойства









