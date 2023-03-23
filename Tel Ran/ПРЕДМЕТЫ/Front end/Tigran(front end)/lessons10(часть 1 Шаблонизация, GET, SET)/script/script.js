// Задача 1
// 1) Создать класс Object2
// 2) Сделать полную копию метода values() примечание (метод должен быть статичным, метод должен получать объект и возвращать новый массив)
// 3) Допишите еще одно статиечский метод, который полностью повторяет метод entries.

let user = {name: 'name', salary: 100, id: 1}

class Object2 {
    static values(obj){
        let array = []
        for (const key in obj) {
          array.push(obj[key])   
        }
        return  array
    }
    static entries(object){
        let array = []
        for (let key in object) {
            array.push([key, object[key]])   
            }
            return  array
        }
}

console.log(Object.values(user))
console.log(Object2.values(user))
console.log(Object.entries(user))
console.log(Object2.entries(user));



////===========  решение функцией =================
function values(obj){
    let array = []
    for (const key in obj) {
        array.push(obj[key])   
    }
    return array
}
console.log(values(user))
console.log(values(user))

////=============================================
// Пример класса, который использует статическое свойство 
// Задача: написать процесс, который будет считать итоговое количество созданных экземпляров.

// задача написать процесс который будет считать итоговое колличество экземпляров
class Users {
static count = 0
    constructor(name, age){
        this.name = name
        this.age = age
        ++ Users.count
    }
}
 let user1 = new Users('Alex', 30)
 let user2 = new Users('Viktor', 31)
 let user3 = new Users('Helen', 30)
 let user4 = new Users('Anton', 26)
console.log(Users.count);



////=============================================
//// Геттеры и сетеры

// Метод get (Геттер) - это метод, который позволяет прочитать сво-во объекта
// Особенность: 
// 1) обращение к геттеру происходит как к свойству.
// 2) геттер не может получать аргументы
// 3) геттер перезаписать невозможно

// // пример 1
let pet = {
    name: 'Шарик',
    breed: 'Пудель',
    get nameBreed(){

        return `${this.name} - это ${this.breed}` 
    }
}
pet.name = 'Rex' // перезаписали имя
console.log(pet.nameBreed); // Rex - это Пудель
console.log('свойство ' + typeof pet.nameBreed); // свойство string

// // пример 2
let obj = {
        numbers: ['one', 'two', 'three', 'four', 'five'],
        get lastValue(){
            return this.numbers[this.numbers.length-1]
        },
        get length(){
            return this.numbers.length
        }
}
obj.numbers.push('Шесть');

obj.numbers = [1,2,3,45]; // в этом случае мы просто заменили первый numbers
// Getter перезаписать нельзя
obj.numbers = 'Tigran';
console.log(obj.lastValue);
console.log(obj.length);




////=============================================
// Задача:
// задан объект obj. Определите новое сво-во которое будет хранить разницу первого и последнего элемента массива array

let objs = {
    array: [50,40,30,10],
    get difference1(){
        return Math.abs(this.array[0] - this.array[this.array.length-1])
    },
    get difference2(){
        return  Math.abs(this.array[this.array.length-1] - this.array[0])
    }
}
console.log(objs.difference1);
console.log(objs.difference2);
//// Math.abs - из отрицательного числа делает пололжительное




//// МЕТОД set (Setter, Сеттер)
// позволяет переопреялть свой-во объекта
// Почти такая особенность, как у getter, но
// 1) setter явно должен получить только 1 аргумент. Не меньше, не больше
// 2) setter также является свойством, переданный аргумент передается через знак 'равенства'(=)
// 3) setter в теле передает указанное свойство объекта на переданный аргумент

let objq = {
    numbers: ['one', 'two', 'three', 'four', 'five'],
    get lastValue(){
        return this.numbers[this.numbers.length-1]
    },
    set setArray(value){
        this.numbers = value
    }
}
objq.setArray = '1 2 3 4';
objq.numbers = ['one', 'two', 'three', 'four', 'five'];
console.log(objq.lastValue); // 4
console.log(objq.numbers); // [ 1, 2, 3, 4 ]




class User{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    get getAge(){
        return `Год рождения пользователя ${this.name} - ${new Date().getFullYear() - this.age}`
    }
    set setAge(year){
        this.age = new Date().getFullYear() - year
    }
}

let user12 = new User('Alex', 25)

user12.setAge = 1984
console.log(user12.getAge, user12.age)

// -------------------------------
//// Приватное сво-во
//// Приватное сво-во задается через #

class User{
    #string = 'test'
    #checkString(value){
        if (value != this.#string) {
            console.log('не строка')
        } else {
            console.log('строка')
        }
    }
}

let exampl = new User()

console.log(exampl.#string)
console.log(exampl.#checkString('string'))
// //Ошибки, т,к экземпляр не может ссылаться на приватное сво-во

// ------------
//// Однако, доступ к приватным сво-вам может получить getter, а изменить setter

class User{
    #string = 'test'

    get readString(){
        return this.#string
    }

    set setString(value){
        if (typeof value != 'string'){
            throw new Error('Данный тип не поддерживается')
        } else {
            this.#string = value
        }
    }
}


let exampl1 = new User()

// console.log(exampl1.#string)
// console.log(exampl1.#checkString('string'))

console.log(exampl1.readString)
exampl1.setString = 'string'
console.log(exampl1.readString)
// console.log(exampl1.#checkString('string'))