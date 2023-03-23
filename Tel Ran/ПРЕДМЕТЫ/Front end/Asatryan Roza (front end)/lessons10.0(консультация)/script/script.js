// //form
// const form = document.querySelector("#form");
// const titleInput = document.querySelector("#title");
// const priceInput = document.querySelector("#price");

// //form 2
// const form2 = document.querySelector("#form2");
// const filterInput = document.querySelector("#filter");

// //section with products
// const sectionProducts = document.querySelector("#products");
// const h2 = document.createElement("h2");
// h2.innerText = "Товаров нет!";
// h2.style.cssText = "font-size: 40px; text-align: center";
// sectionProducts.appendChild(h2);

// //button for sort
// let sortBtn = document.querySelector("#sortPrice");


// let products = [];


// titleInput.setAttribute("required", "true");
// priceInput.setAttribute("required", "true");

// form.onsubmit = (e) => {
//   e.preventDefault();

//   //   console.log(titleInput.value, priceInput.value);
//   const title = titleInput.value.toLowerCase();
//   //                           toUpperCase();
//   products.push({
//     title: title,
//     price: priceInput.value,
//   });

//   newProducts(products);

//   titleInput.value = "";
//   priceInput.value = "";
// };

// function createNode(index, title, price) {
//   let div = document.createElement("div");
//   div.classList.add("products");

//   let titleP = document.createElement("p");
//   let priceP = document.createElement("p");

//   titleP.innerText = title;
//   priceP.innerText = price;

//   let close = closeBtn();
//   close.onclick = () => {
//     close.removeEventListener("dblclick", () => {
//       alert(title);
//     });
//     sectionProducts.removeChild(div);
//     let result = [];
//     if (products.length > 1) {
//       for (let i = 0; i < products.length; i++) {
//         if (i !== index) result.push(products[i]);
//       }
//     }
//     products = result;
//     if (!products.length) {
//       sectionProducts.append(h2);
//     }
//   };

//   div.append(titleP, priceP, close);

//   div.onmouseover = () => {
//     close.style.opacity = "1";
//   };

//   div.onmouseleave = () => {
//     close.style.opacity = "0";
//   };

//   div.ondblclick = () => {
//     alert(title);
//   };
//   sectionProducts.append(div);
// }

// function newProducts(array) {
//   sectionProducts.innerHTML = "";
//   for (let i = 0; i < array.length; i++) {
//     createNode(i, array[i].title, array[i].price);
//   }
// }

// function closeBtn() {
//   let btn = document.createElement("button");
//   btn.innerText = "X";
//   btn.classList.add("close");
//   return btn;
// }

// form2.onsubmit = (e) => {
//   e.preventDefault();
//   let filter = filterInput.value;
//   filter = filter.toLowerCase();
//   alert(filter);
//   // sectionProducts.innerHTML = "";
//   // for (let i = 0; i < products.length; i++) {
//   //   if (products[i].title === filter) {
//   //     createNode(i, products[i].title, products[i].price);
//   //   }
//   // }

//   let filteredArray = [];
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].title === filter) {
//       filteredArray.push(products[i]);
//     }
//   }
//   newProducts(filteredArray);
// };


// sortBtn.onclick = () => {
//   // sort
//   products.sort((a, b) => a.price - b.price);
//   newProducts(products);
// };



let age = 15;
// if (age > 13){
//   alert('yes')
// }else{
//   alert('no')
// }
//----- ternary operator
// alert(age > 13 ? 'yes':'no'); // тернарный опретор

//==============
let btn = document.querySelector('button');
let div = document.querySelector('div');
let h2 = document.querySelector('h2');

// //boolean
// let counter = true;
// btn.onclick = () =>{
// //   if (counter){
// // alert('1');
// //   }else{
// //     alert('2');
// //   }
// //------
// alert(counter ? '1' : '2');
//   counter = counter === true ? false : true;
// };


//===============
let clickTarget = (e) =>{
//-----
// div.onclick=(e)=>{ // 
//   console.log(e.target);
  // alert('event works')
//-----
  e.target.style.display = 'none'// таргет ключ к объекту
}
div.onclick =(e)=> clickTarget(e);

//=============

// let sum = prompt("Add num");

// if (sum == 0) {
//   h2.removeEventListener("click", () => alert(sum));
// } else {
//   h2.onclick = () => {
//     alert(sum);
//   };
// }

// object event and methods
// bubbling / caputuring






// ЗАДАЧА 1) Создайте приветственное сообщение на странице : 
// 1) Получение имени пользователя в поле ввода 
// 2) При нажатии кнопки добавьте событие, которое получит имя пользователя и создаст приветственное сообщение на странице. 
// 3) Добавьте проверку, чтобы убедиться, что длина вводимых данных больше 3 символов.

const userName = document.querySelector('#userName');
const btn1 = document.querySelector('.btn');
const h3 = document.createElement('h3');

btn1.addEventListener('click', () => {
//let text = userName.value;
if (userName.value.length <= 3){
  h3.innerText = 'Длина имени должна составлять более 3 символов';
    h3.style.color = 'red';
  } else {
     h3.innerText = `Добро пожаловать ${userName.value}`; //${text}`
    h3.style.color = 'brown';
 }
});
document.body.append(h3)



// ЗАДАЧА 2)
// создать 2 инпута и кнопку. 
// По нажатию на кнопку во втором инпуте появится квадрат числа из первого инпута. Если введено не число - должна показаться ошибка.(в виде alert). 
// Обратите внимание, что изменять значение во  втором input-е нельзя!
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const btn2 = document.querySelector('.btn2');

        //первый вариант
// btn2.onclick = () => {
//   if (isNaN(+input1.value)){
//     alert('"Введите число"');
//   } else {
//     input2.value = input1.value ** 2;
//   }
// };

        // второй вариант
btn2.onclick = () => {
  let value = +input1.value;
  if (isNaN(input1.value)){
    alert("Введите число");
  } else {
    input2.value = value ** 2;
  }
};


// ЗАДАЧА 3)
// В html добавлены 10 параграфов и одна кнопка.При нажатии на кнопку текст в каждом абзаце поменяется - спереди добавится порядковый номер абзаца.

const p = document.querySelectorAll('p');
const btn3 = document.querySelector('.btn3');

btn3.onclick = () =>{
for (let i = 1; i < p.length; i++){

p[i].innerText = i + '.' + p[i].textContent;
  }
};

