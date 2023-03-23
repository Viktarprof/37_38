// function declaration
// function expression
// arrow function
//____________________________________________________________________________


// !!!!!!!!     function declaration        !!!!!!!!!!! 
// поднимает функцю на самый верх и ее можно объявить из любого места (это хостинг)
// hi()
// function hi (){
//     console.log('Hello! declaration')
// };
//____________________________________________________________________________



// !!!!!!!!!!!!     function expression     !!!!!!!!!!!!!!!
// newhi(); расположение обявление функции в этом месте не сработает, только в конце.
// const newhi = function(){ . // через переменную
//     console.log('Hello expression')
// };
// newhi()
//____________________________________________________________________________



// !!!!!!!!!!!!     arrow function      !!!!!!!!!!!!
// let arrow = () => {
//     console.log('This is arrow function');
// };
// arrow();


// // два варианта написания стрелочной функции
//1
    let arrow1 = () => {
        return'Arrow`s return1';
    };
// 2
let shortArrow = () => 'Arrow`s return2';

console.log(arrow1());
console.log(shortArrow());

//     // пример
    let sum = (num1 , num2) => num1 + num2;
    console.log(sum(5,6))



//==========================================
// "use strict"; // ВКЛЮЧИ И ВЫКЛЮЧИ это строгий режим, добавляет ограничения в работе

const a = 5;
if (a > 1){ // это область видимости
    function test(){
        console.log('test1');
    } 
} test(); // при включенном "use strict" эта функция не сработает 


let newHI; 
if (a > 1){
    newHI = function(){
        console.log('test2');
    };
}
newHI()



//==========================================
// Callback function

const function1 = function(){
    console.log('This is function1');
}
const function3 = function(){
    console.log('This is function3');
}
const function4 = function(){
    console.log('This is function4');
}

const function2 = function(callback){
 console.log('This is function2');
    callback();
}
function2(function4);



// ПРИМЕР

let arr = [1, 2, 3, 4, 5];
let arr1 = ['My ', 'name ', 'is' ];
        function text (arr1){ // поработали с текстом
            let sum = '';
            for (let i = 0; i < arr1.length; i++){
                sum += arr1[i];
            }
            return sum
        }

function sumArray(arr){ // складываем 
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum
}
        function arrayWithOdd(arr){ // ищем нечетные 
            let result = [];
            for (let i = 0; i < arr.length; i++){
            if (arr[i] %2  !== 0)
            result.push(arr[i]);
            }
            return result
        }
let workWithArray = function (array, callback){ // функция callback
    return callback(array);
};


console.log('сложили все слова = ' + workWithArray(arr1, text)); // обращаемся к let arr1 а затем обращаемся к функции text
console.log('сложили все цифры = ' + workWithArray(arr, sumArray)); // обращаемся к let arr а затем обращаемся к функции складывания
console.log('нашли не четные все цифры = ' + workWithArray(arr, arrayWithOdd)); // обращаемся к let arr а затем обращаемся к функции поиска четных



//==========================================
        // обработчик событий
        // event listener
// addEventListener

// // 1 задача
// const btn = document.createElement('button');
// btn.innerHTML = 'Нажми на меня!';
// document.body.append(btn);

// btn.onclick = function(){
//     console.log('Жмяк!'); // в консоль
//     alert('Жмяк') 
// };

////2 задача
const decrement  = document.createElement('button');
decrement.innerText = '+'; 
const increment = document.createElement('button');
increment.innerText = '-';
const p = document.createElement('p');
p.innerText = 0;
p.style.fontSize = '25px';

 //console.log(typeof p.textContent); // прверили какого типа наши данные (тут строка)

let numOfP = +p.textContent;
decrement.onclick = function(){
//     numOfP +=1;
//     p.innerText = numOfP
p.innerText = +p.textContent +1; // сокращенный вариант
}

// decrement.addEventListener("click", (event) => {
//     p.innerText =+ p.textContent +1;
// });

increment.onclick = function(){
    p.innerText = +p.textContent -2; // сокращенный вариант
 };
document.body.append(decrement, p, increment);



//____________________________________________________________________________
let plus = document.createElement('button');
plus.innerText = '+';
let minus = document.createElement('button');
minus.innerText = '-';
let p1 = document.createElement('p');
p1.innerText = 1;

plus.onclick = function(){
    p1.innerText = +p1.textContent * 2;
}
minus.onclick = function(){
    p1.innerText = + p1.textContent / 2;
}

//второй вариант 
// plus.addEventListener("click", (event) => {
//     p1.innerText =+p1.textContent *2;
// });
// minus.addEventListener("click", (event) => {
//     p1.innerText =+p1.textContent /2;
// });

document.body.append(plus, p1, minus)



//__________________________________________-
//// event (объект)  хранится вся информация в котором что-то произошло. 
const p2 = document.createElement('p');
addEventListener("keyup", (event) => {
    console.log(event) //информация в консоли
   p2.innerText = p2.textContent + event.key
});
document.body.append(p2)


//__________________________________________-

