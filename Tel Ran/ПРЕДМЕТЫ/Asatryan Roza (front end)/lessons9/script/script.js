// //preventDefault() - отмена действий.

// const btn = document.querySelector('button');
// const name = document.querySelector('#first-name');


// // btn.onclick = (event) =>{
// //     event.preventDefault(); // отменили действие кнопки отправление данных из формы
// //     alert('Welcome!');      // дали новое действие кноки.

// // };


// btn.onclick = (e) =>{
//     e.preventDefault(); // отменили действие кнопки отправление данных из формы
//     alert(name.value);      // дали новое действие кноки показать что введено в стоке имя 
//};

//==================================================
//form
const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
//form2
const form2 = document.querySelector('#form2');
const filterInput = document.querySelector('#filter');

//section with products
const sectionProducts = document.querySelector('#products')
let h2 = document.createElement('h2');
h2.innerText='ТОВАРОВ НЕТУ';
sectionProducts.append(h2);
h2.style.cssText = 'font-size: 40px; text-align: center';

//button for sort
let sortBtn= document.querySelector('#sortPrice')

let products = [];

titleInput.setAttribute('required', 'true')
priceInput.setAttribute('required', 'true')


form.onsubmit = (e) =>{ 
    e.preventDefault();

const title = titleInput.value.toLowerCase()

products.push({
    title: title,
    price: priceInput.value,
    });
 
    newProducts(products);

titleInput.value = ''; 
priceInput.value = '';

    console.log(products)
};

function createNode(index, title, price){
    const div = document.createElement('div');
    div.classList.add('cards');
    const titleP = document.createElement('p');
    const priceP = document.createElement('p');
    titleP.innerText = title;
    priceP.innerText = price ;

    let close = closeBtn();
    close.onclick=()=>{ //удаление из документа вообще
    close.removeEventListener('dblclick', ()=>{
        alert(title);
    });

    sectionProducts.removeChild(div);
    let result =[];
    if (products.length > 1) {
        for (let i = 0; i < products.length; i++) {
          if (i !== index) result.push(products[i]);
        }
      }
    products = result;
    if(!products.length){
        sectionProducts.append(h2);// Добавление Н2 при удалении всех товаров
    }
    };

    div.append(titleP,priceP,close);

    div.onmousemove = () => {
        close.style.opacity = '1';
    };
    div.onmouseleave = () =>{
       close.style.opacity = '0';
    };

    sectionProducts.append(div);
    div.addEventListener('dblclick', () => {
        alert(title);
    });
   
}

function newProducts(array){
    sectionProducts.innerHTML = (''); 
    for (let i = 0; i < array.length; i++){
        createNode(i, array[i].title, array[i].price);
    }
}

//================ НОВЫЙ УРОК ===========================================================

// удаление карточек

function closeBtn(){
    let btn = document.createElement('button');
    btn.innerText = 'X';
    btn.classList.add('close');
    return btn;
}


//Реализовать такой скрипт, который получает из input-а строку и при submit-е формы выводит в alert.

form2.onsubmit = (event) =>{
    event.preventDefault();
// alert(filterInput.value)
let filter = filterInput.value;
filter = filter.toLowerCase()//  чтобы искало по верхнему и нижнему регистру
//alert(filter);

let filteredArray = [];
for (let i = 0; i< products.length; i++){
    if(products[i].title === filter){
        filteredArray.push(products[i]);
        }
    }
    newProducts(filteredArray)
}

// альтернативный вариант
//sectionProducts.innerHTML = '';
// for(let i = 0; i< products.length; i++){
//     if (products[i].title === filter){
//     createNode(i, products[i].title, products[i].price);
//         }
//     }


sortBtn.onclick =()=>{
    //sotr
    products.sort((a,b) => a.price - b.price);// сотрировка по возрастанию
    newProducts(products);
}