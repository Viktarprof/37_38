// НАСЛЕДОВАННИЕ КЛАССОВ
class Drive{
    constructor(model){
        this.model = model
        this.speed = 0
    }
    driving(speed){ // это метод
    this.speed = speed
    console.log(`${ this.model} едет со скоростью ${ this.speed} km/ч`);
    }
    parking(){
        this.speed = 0
        console.log(`${ this.model} припарковался`)
    }
}

console.log('======== car1 ===================')
let car1 = new Drive('Tesla')
car1.driving(60);
car1.parking();
console.log(car1);



// extends -  это оператор который позволяет указать имя наследуемого класса.!!!! ОБЯЗАТЕЛНОЕ ТРЕБОВАНИЕ!!!!
// наследование (extends Drive) ссылаемся на класс Drive и его копируем



class Car extends Drive{
    constructor(model){
        super()  // super - позволяет унаследовать сво-ва родительского класса (наследуемого класса) скопирует все свойства справа
        this.model = model,
        this.lights = false
    }
    setlights(){ // это метод
        this.lights = !this.lights
        console.log(`${this.model} ${this.lights ? 'включил' : "выключил"} фары `);
    }
}
console.log('====== car2 =====================')
let car2 = new Car('Opel')
car2.driving(100)
car2.parking()
car2.setlights()
car2.setlights()
console.log(car2);

console.log('====== car3 =====================')
let car3 = new Car('BMW')
car3.parking()
console.log(car3);





console.log('================================');
a = NaN
console.log(isNaN(a)); // true
console.log(NaN == NaN); // false
if(!isNaN(a)){   
}





console.log('================================');
let obj2 = {
    name: 'Viktor',
    get readName(){
        return 'Пользователь: ' + this.name
    }
}
let obj1 = {
    readName: obj2.readName, // как работает подкапотно, процесс присваивания => 'Пользователь: Viktor'
    age: 10
}

Object.assign(obj1, obj2)
obj1.name = 'Anton'

// После копирования getter пересл=атл быть getterom (стал обычным свойством)
console.log(obj1);




console.log('================================');
// ФЛАГИ (ДЕСКРИПОРЫ) СВО-ВА ОБЪЕКТА

let obj = {
    name: 'Tigran',
    salary: 1000,
    age: 30,
    job_id: 'it_prog',
    get readName(){
        return 'Пользователь: ' + this.name
    }
}

// Метод Object.getOwnPropertyDescriptor(obj,'name') позволяет получить состояние всех флагов дескрипторов для указанного свойства

console.log(Object.getOwnPropertyDescriptor(obj,'name'))
// получили {
//     value: 'Tigran',
//     writable: true,
//     enumerable: true,
//     configurable: true
//  }

// writable   -  это право на изменение значения сойства
// enumerable   - право на итерацию в цикле (спрятать сво-во)
// configurable - это право на удаление и изменение этого же флага дескриптора в дальнейшем.

console.log(Object.getOwnPropertyDescriptor(obj,'readName'))
// получили {
//     get: [Function: get readName],
//     set: undefined,
//     enumerable: true,
//     configurable: true
// }
  

console.log('============================');
// метод Object.defineProperty(obj, 'name',{}) позволяет изменить флаги дескрипторов

Object.defineProperty(obj, 'name', {configurable: false});
Object.defineProperty(obj, 'name', {writable: false}); // 
Object.defineProperty(obj, 'name', {enumerable: false}); // скрыли имя

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// obj.name = 'TEST' //  переписали имя
console.log(obj);