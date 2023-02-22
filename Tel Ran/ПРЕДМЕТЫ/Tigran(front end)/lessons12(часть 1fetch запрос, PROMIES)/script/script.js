// console.log('==== fetch запрос ===========');
// // // пример запроса
// // fetch('https://jsonplaceholder.typicode.com/todos') // источник данных
// //     .then(response => response.json()) // декодировка ответа
// //     .then(json => console.log(json))   // результат в консоль




// Введение в асинхронный код

// Асинхронный код - это код, на выполнения которого требяется n-ое количество времени

// Функция setTimeout() - позволяет сформировать задержку перед исполнением функции колбека



// console.log('==== Пример 1===============');
////  setTimeout()
setTimeout(() => {
    console.log('1-й лог'); // запустится спустя время
},2000);
console.log('2-й лог');
console.log('3-й лог');

// //===== вложенность ========
setTimeout(() => {
    console.log('4-й лог'); // запустится спустя время
    console.log('5-й лог');
    
    console.log('6-й лог');
},2000);





// console.log('==== Пример 2 ===============');
setTimeout(() => {
    console.log('1-й блок кода');
}, Math.random() * 30);

setTimeout(() => {
    console.log('2-й блок кода');
}, Math.random() * 30);

// //===== вложенность ========
setTimeout(() => {
    console.log('1-й блок кода');

    setTimeout(() => {
        console.log('2-й блок кода');
    }, Math.random() * 30);

}, Math.random() * 30);




console.log('==== Пример 3 ===============');
console.log('sent requst...');
setTimeout(()=>{
    let data = [1,2,3,4]
    console.log('data...', data)
    setTimeout(()=>{
        handle(data)
        console.log('handle data...', data);
    },Math.random() * 30)
},Math.random() * 30)

function handle(data){
    data.push(4)
}

// Promise - это объект, который позволяет работать с асинхронным кодом

//// Cостояния Promise:
//// 1) resolve -  ответ от сервера (403 или 404)
//// 2) reject - ответа нету

let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
            let data = [1,2,3]
            console.log(data)
            resolve(data)
      }, 2000)
})



// Метод then дожидается пока promise получит функцию resolve и потом далее исполнит свой колбэк
// То, что мы получаем в методе then - это содержимое параметра функции resolve()

promise
      .then((data) => {
            data.push(4)
            console.log(data)
            return data
      })
      .then((data) => {
            return new Promise((resolve, reject) => {
                  setTimeout(() => {
                        data.shift()
                        console.log( data, 'Последний')
                        resolve(data)
                  }, 10)
            })
      })
      .then(data => {
            data[0] = 'Alex'
            console.log(data)
      })

// Чтобы выполнить цепочку действий методов then - они должны возвращать данные через ключевое слово return

// -------

let promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
            let data = [1,2,3]
            console.log(data)
            // resolve(data)
            reject('Failed to fetch')
      }, 2000)
})



// Метод catch дожидается пока promise получит функцию reject и потом далее исполнит свой колбэк
// То, что мы получаем в методе catch - это содержимое параметра функции reject()

// finally - это метод, который исполнит свой код в любом случае (resolve или reject)

promise
      .then(data => console.log(data, 'then'))
      .catch(error => console.error(error))
      .finally(() => console.log('finally'))




// ------------------------------
// Fetch

let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))


// --------------------------
// async, await

// 1) Синтаксический сахар, который позволяет избежать метод then 
// 2) Применяется строго к функциям. Перед функцией должен указываться оператор async
// 3) Чтобы сохранить результат работы промиса, перед присвоением к переменной необходимо указать оператор await
// 4) Код внутри функции будет линейно дожидаться выоплнения каждого await
// 5) Избегает метод then, но не catch (см конструкцию try... catch)

async function fetchUsers(){
      let url = 'https://jsonplaceholder.typicode.com/users'
      let res = await fetch(url)
      let data = await res.json()
      console.log(data)
}


// ----------------------------
// GET, POST запросы


// ------------
// GET
let url = 'http://51.250.8.198:8000/api/get_all/'
fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))


// -------------
// POST 
let url = 'http://51.250.8.198:8000/api/create/'

let data = {
      title: 'telran',
      text: 'Урок 37-38'
}

fetch(url, {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json;charset=utf-8' 
      },
      body: JSON.stringify(data)
})