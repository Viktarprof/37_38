// ООП, Шаблонизация
// let user1 = {
//         name:'Vktor',
//         age: 31,
//         salary: 5000,
//         sayHi(){
//             console.log(`Пользователь ${user1.name} говорит привет!`);
//         }
// }
// user1.sayHi()

// let user2 = {
//     name:'Helen',
//     age: 30,
//     salary: 5000,
//     sayHi(){
//         console.log(`Пользователь ${user2.name} говорит привет!`);
//     }
// }
// user1.sayHi()




// =======================================
// Шаблонизация через Function declaration
function createUser(name, age, salary){
    return {
        name,
        age,
        salary,
        sayHi(){
            console.log(`Пользователь ${this.name} говорит привет!`)
        }
    }
}
// Конструкция new работать не будет
// let createUser = (name, age) => ({
//     name,
//     age
// })

// let user1 = new createUser('Alex', 20)

// console.log(user1)



// =======================================
function createUser(name, age, salary){
    return{
        name,
        age,
        salary,
        isJob: true,
        sayHi(){
            console.log(`Пользователь ${this.name} говорит привет!`);
        console.log(this); // { name: 'Tigran', age: 31, salary: 1500, isJob: true, sayHi: [Function: sayHi]}
        }
    }
}
let user1 = createUser('Viktor', 31, 1500)
    // console.log(user1);
    // user1.name = 'Tigran'; // this видит эту перезапись
    user1.sayHi()

let user2 = createUser('Helen', 30, 1500)
    // console.log(user2);
    user2.sayHi()





//=========================================
// Шаблонизатор как класс (class)

class User {
    // constructor определяет все сво-ва которые будут доступны экземплярам
    constructor(name, age, salary){
        this.name = name
        this.age = age
        this.salary = salary
        this.isJob = true
    }
    sayHi(){
        console.log(`Пользователь ${this.name} говорит привет!`)
    }
}
let user11 = new User('Alex', 20, 1500)

user1.name = 'Tigran'
user1.sayHi()
console.log(user11)




//=========================================
// Напишите класс MathNum, который будет определять в экземплярах: 
// 1) Свойство number - числовое значение
// 2) Метод quad(), который должен выводить в консоль квадрат сво-ва number
// 3) Метод sqrt(), который должен выводить в консоль корень сво-ва number

class MathNum {
    constructor (num){
        if(typeof num != 'number'){
            console.log("Error, is not a number");
        } else {
            this.number = num
        }
    }
    quad(){
        // console.log(`квадрат сво-ва number ${this.number ** 2}`);
        console.log(`квадрат сво-ва number ${this.number} = ${Math.pow(this.number, 2)}`);
    }
    sqrt(){
        console.log(`корень сво-ва number ${this.number} = ${Math.sqrt(this.number)}`);
    }
}
let number1 = new MathNum(25);
    number1.quad() //квадрат сво-ва number 25 = 625
    number1.sqrt() //корень сво-ва number 25 = 5
    console.log(number1); //MathNum { number: 25 }
 let number2 = new MathNum('string');
    console.log(number2); // Error, is not a number  // MathNum {}




//=========================================
// Статичсекие методы и свойства у классов - это методы и свойства, которые доступны только классу

// let date = new Date()

// console.log(date.now())  -- не работает, поскольку now() - статический метод, доступный только классу Date
// console.log(Date.now())  -- работает

// Известные нам статические методы
// Object.assign()
// Object.entries()
// Object.keys()
// Object.values()
// Date.now()
// Array.isArray()


class Example{
    constructor(prop){
        this.prop = prop
    }
    method(){
        console.log('method!')
    }
    // статический метод
    static staticMethod() {
        console.log('Static method!')
    }
    // статическое свойство
    static staticProp = 'static prop'
}

let ex = new Example('test')

// Вызов обычных методов и сво-йств через экземпляр ex
console.log(ex.prop)
ex.method()

// Вызов статических методов и свойств
// ex.staticMethod() -- не работает

Example.staticMethod()
console.log(Example.staticProp)

// console.log(ex.staticProp)  undefined, поскольку сво-во является статическим. До него можно добраться через класс Example