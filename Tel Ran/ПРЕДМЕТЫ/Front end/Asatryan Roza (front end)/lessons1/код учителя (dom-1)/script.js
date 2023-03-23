//DOM - Document Object Model

// 1) id !!!!!!!!!!!
// 2) class
// 3) tag
// 4) selector h2.mn





//============================================

//1) ID - getElementById !!!!!!!!!!!!

// let, const, var - переменные 
// document = {
//};


let head = document.getElementById("heading"); // дотягивают до нужного узла. через  ID
head.innerText = "Я уже знаком(а) с DOM"; //считываем текст который мы только что задали и перепесали
// поменяли текст

// innerText vs innerHtml





//============================================

// 2) class

// let i = [1,2,3];
// i[0];

// let obj = {
// name: "Name"
//}

// obj.name // dote notation
// obj[name] // bracket notation

let hello = document.getElementsByClassName("hello"); // через CLASS
//  console.log(hello);
//     // получили HTMLcollections

// for, while, do while
//for in - index
//for of - element

for (let i = 0; i < hello.length; i++) { // СТАРЫЙ СПОСОБ ЦИКЛА ФОР
  //0, 1, 2
  hello[i].innerText = "Привет!";
}

for (let p of hello) { // НОВЫЙ СПОСОБ ЦИКЛА ФОР (ОБРАЩАЕМСЯ К ЭЛЕМЕНТАМ МАССИВА)
  p.innerText = "Привет!!!"; 
}

for (let p of hello) { // НОВЫЙ СПОСОБ ЦИКЛА ФОР (ОБРАЩАЕМСЯ К ЭЛЕМЕНТАМ МАССИВА)
  for (let index in hello) { // НОВЫЙ СПОСОБ ЦИКЛА ФОР (ОБРАЩАЕМСЯ К ИНДЕКСАМ МАССИВА)
  hello[index].innerText = `${index}` + "Hello!";
}
}


//_____________________________________________
let arr = [];

for (let element of hello) {
          // element.innerText = 'Test';
  arr.push(element.textContent); // return new length of array
}

  //pop() удаляет самый последний элемент массива
  let single = arr.pop();
  console.log(arr); 



//________________________________________________________________
// dote notation(.) / bracket notation [];

let obj = {
    name: "My Name IS",
  };
  
  for (let i = 0; i < hello.length; i++) {
  obj[i] = hello[i].textContent;
}
console.log(obj.name);

    obj.age = 23;    //дописываю значение своему объекту
    let num = 3;     // указал вмассиве како-то индекс (элемент)
    delete obj[num]; // удалил из объекта массива этот индекс
console.log(obj);    // и вывел его в консоль 




// shift - удаляет в начале
// unshift - добавляет в начале
arr.shift();
console.log(arr);
arr.unshift("New 1", "New 2");
console.log(arr);







//=======================================================
// 3) тег !!!!!!!!!!

//конкатенация/ интерполяция

let lis = document.getElementsByTagName("li");
for (let li in lis) {
  // lis[li].innerText = li + " text"; // пронумеровали дал текст 
    lis[li].innerText = `${li} text`;  // пронумеровали дал текст 
}


//dote natation(.) / bracket natation [];
    let obj = {
        name: "NAME",
    };
    for (let i = 0; i < hello.length; i++) {
        obj[i] = hello[i].textContent;
    }

    // delete obj.name; // так удаляем какое-то описание объекта
    // delete obj[5]; // так элемент из массива указа его индекс

    //console.log(obj);






//=======================================================

//4) selector !!!!!!!!!!!!
//_____________________________________
// CSS selector - id, class, tag
// querySelector() -
// querySelectorAll();

let items = document.querySelectorAll("li");
for (let item in items) {
  items[item].innerText = `New ${item} text`;
}


//_______________________________________
//element.textContent

// camal case - specialItems
// snake case - special_items

let special_items = document.querySelectorAll("li.special");
//HTMLCollection
for (let index in special_items) {
  special_items[index].innerText = `This is ${index} special item`;
}

let first_li = document.querySelector("li.special");
first_li.innerText = "I am first li";

//_________________________________________


// let array = ["a","b","c","d"];
// for(let index of array) {
//     console.log(index);
// }
//____________________________________________



//setAttribute (crs/href......)
//     //всем картинкам

//     let images = document.querySelectorAll('img');
//     for (let single_img of images) {
//         single_img.setAttribute("src", "https://naturecanada.ca/wp-content/uploads/2018/10/bow-valley_shutterstock_1933103-1-300x300.jpg");

//         single_img.setAttribute('alt', 'nature');
//     }


//     //одной картинке
//     let images1 = document.querySelector('img.second'); // перед этим нужно прописать класс
//     images1.setAttribute('src', 'https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg');
// }
