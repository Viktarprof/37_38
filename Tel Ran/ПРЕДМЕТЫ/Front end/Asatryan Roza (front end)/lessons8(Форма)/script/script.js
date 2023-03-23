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
const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const sectionProducts = document.querySelector('#products')
const allSum = document.querySelector('button')

let products = [];
let sum = 0;
titleInput.setAttribute('required', 'true')
priceInput.setAttribute('required', 'true')

form.onsubmit = (e) =>{  // onsubmit отменет действие мышки и нажатие кнопки на клавиатуре
    e.preventDefault();
    // alert('Wow!');
    // console.log(titleInput.value, priceInput.value)

products.push({
    title: titleInput.value,
    price: priceInput.value,
    });

// createNode(titleInput.value, priceInput.value);
    newProducts();
    titleInput.value = ''; 
    priceInput.value = '';//обнуление инпутов. что бы небыло зачения после начатии кнопки  Добавить

    console.log(products)
};

function createNode(title, price){
    const div = document.createElement('div');
    div.classList.add('cards');
    const titleP = document.createElement('p');
    const priceP = document.createElement('p');
    titleP.innerText = title;
    priceP.innerText = price ;
    div.append(titleP,priceP);
    sectionProducts.append(div);
    div.addEventListener('dblclick', () => {
        alert(title);
    });
   
}

function newProducts(){
    sectionProducts.innerHTML = (''); // делает пустой section и добавляет новые товары из формы не удаляя предыдущие
    for (let i = 0; i < products.length; i++){
        createNode(products[i].title, products[i].price);
        let sum = products.price;
    }
    allSum.onclick = () => {
        alert(sum)
    }
}







