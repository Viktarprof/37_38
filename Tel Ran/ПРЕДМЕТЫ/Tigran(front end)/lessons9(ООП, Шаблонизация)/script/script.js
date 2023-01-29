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




// =============================
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
// Шаблонизатор как (class)

class User{
    constructor(name,age,salary){
        this.name = name
        this.age = age
        this.salary = salary
        this.isJob = true  
    }
    sayHi(){
        console.log(`Пользователь ${this.name} говорит привет!`) 
    }
}
let user3 = new User('ALEX', 31, 1500)

user3.name = 'Tigran';
user3.sayHi()
console.log(user3);



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