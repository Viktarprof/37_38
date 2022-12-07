// //window.getComputedStyle

// const div = document.createElement('div');
// div.style.width = '90%';
// document.body.append(div);
// console.log(window.getComputedStyle(div). width);


// //getPropertyValue

// console.log(window.getComputedStyle(div,'::after'));


//области видимости
//scope
//1) global scope (не входит не в какие фигурные скобки)
//2) function scope 
// function name () {
// let dog = 'Rex';
//     console.log(dog);
// }
// name()

//3) block scope {}
// if (true) {
//let //const
//     let num = 30;
// }
// console.log(num)




//1)Даны картинки в виде массива. Напишите цикл, который создает картинки на основе этого массива. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.\
const img = [
    "https://www.gorilladoctors.org/wp-content/uploads/2014/10/empowering2-300x300.jpg",
    "https://i.pinimg.com/originals/7f/a1/0f/7fa10fdd13baa44a73f0a77ed32e8566.jpg",
    "https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg",
    "https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-03.jpg",
  ];
  for (let imges of img) {
    const picture = document.createElement('img');
    picture.setAttribute('src', imges);
    picture.onclick  = () =>{
        alert (imges)
    }
    document.body.append(picture)
  }
 



// 2) Даны числа в виде массива.Напишите функцию ,которая создает параграфы на основе этого массива. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.

let num1 = [2, 3, 4, 5, 6];
for (const paragrapf of num1) {
    const p1 = document.createElement('p');
    p1.style.fontSize = '40px';
    p1.innerText = paragrapf;
    p1.onclick = () =>{
        p1.innerText *= paragrapf;
    }
    document.body.append(p1)
}

// // //=====================
let num2 = [10, 20, 30, 40, 50];
function createP1(array){
    for (let num2 of array) {
        const p2 = document.createElement('p');
        p2.style.fontSize = '20px';
        p2.innerText = num2;
        document.body.append(p2);
        p2.onclick = () =>{
            p2.innerText *= num2;
        }
    }
} 
createP1(num2);


// 3) Доработайте предыдущий скрипт. Добавьте к каждому абзацу 2 кнопки. Одна кнопка при клике уменьшает число на единицу, а другая кнопка увеличивает на единицу.
let nums = [7, 8, 9, 10, 11];
const divs = document.createElement('div');
divs.setAttribute('class', 'test');

function createP(array){
    for (let nums of array) {
        const p = document.createElement('p');
        p.setAttribute('class', 'par');
        p.innerText = nums;
        let btn_plus = document.createElement('button');
        btn_plus.setAttribute('class', 'btnPlus');
            btn_plus.innerText = '+';
            btn_plus.onclick = () => {
            p.innerText = +p.innerText +1;
        }
                                                    // btn_plus.onmousemove = () => {
                                                    //     btn_plus.style.background = '#ffeaa7'
                                                    // }
                                                    // btn_plus.onmouseout = () => {
                                                    //     btn_plus.style.fontSize= '50px';
                                                    // }
        
        let btn_minus = document.createElement('button');
        btn_minus.setAttribute('class', 'btnMinus');
            btn_minus.innerText = '-';
            btn_minus.onclick = () => {
            p.innerText = p.innerText -1;
        }   
    divs.append(btn_plus, p , btn_minus);
    document.body.append(divs)
        p.onclick = () =>{
            p.innerText *= nums;
            }
        }
} 
createP(nums);
// 4) Застилизуйте так, чтобы параграф и его кнопки были на одной строке.







//================================================
// 5) У нас есть кнопка в html документе. С помощью скриптов сделайте след. логику:
// 1)добавьте 3 event listener-а на кнопку, которые выводят на экран 1,2,3. (первая функция выводит цифру 1, вторая - 2, и последняя 3),
// 2) Пусть при первом клике на кнопку сработают все 3 функции и при этом func1 и func2 отвяжутся от элемента. И при следующих кликах будет срабатывать только функция func3, которую мы не отвязываем.
const bt_n = document.createElement("button");
bt_n.innerText = "Click me!";

document.body.append(bt_n);

bt_n.addEventListener("click", func1);
bt_n.addEventListener("click", func2);
bt_n.addEventListener("click", func3);

// hosting

function func1() {
  alert("1");
  //bt_n.removeEventListener("click", func1);
}
function func2() {
  alert("2");
  //bt_n.removeEventListener("click", func2);
}
function func3() {
  alert("3");
}


//=============== КУРСОР С КООРДИНАТАМИ ============================
let container =document.createElement('div');
let btn1 =document.createElement('button');
btn1.innerText ='Start'
let btn2 =document.createElement('button');
btn2.innerText ='End'

let p3 =document.createElement('p');
container.append(btn1, btn2, p3)
document.body.append(container)

btn1.addEventListener('click', () =>{
    document.addEventListener('mousemove', move);
});

btn2.addEventListener('click', () =>{
    document.removeEventListener('mousemove', move);
});

function move (event){
    p3.innerText= `X:${event.pageX} Y:${event.pageY}`
//console.log(event);
}
