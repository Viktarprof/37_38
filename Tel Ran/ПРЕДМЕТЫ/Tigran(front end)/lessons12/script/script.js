// console.log('==== fetch запрос ===========');
// // // пример запроса
// // fetch('https://jsonplaceholder.typicode.com/todos') // источник данных
// //     .then(response => response.json()) // декодировка ответа
// //     .then(json => console.log(json))   // результат в консоль




// console.log('==== Пример 1===============');
// ////  setTimeout()
// setTimeout(() => {
//     console.log('1-й лог'); // запустится спустя время
// },2000);
// console.log('2-й лог');
// console.log('3-й лог');

// //===== вложенность ========
// setTimeout(() => {
//     console.log('4-й лог'); // запустится спустя время
//     console.log('5-й лог');
    
//     console.log('6-й лог');
// },2000);





// console.log('==== Пример 2 ===============');
// setTimeout(() => {
//     console.log('1-й блок кода');
// }, Math.random() * 30);

// setTimeout(() => {
//     console.log('2-й блок кода');
// }, Math.random() * 30);

// //===== вложенность ========
// setTimeout(() => {
//     console.log('1-й блок кода');

//     setTimeout(() => {
//         console.log('2-й блок кода');
//     }, Math.random() * 30);

// }, Math.random() * 30);




console.log('==== Пример 3 ===============');
// console.log('sent requst...');
// setTimeout(()=>{
//     let data = [1,2,3,4]
//     console.log('data...', data)
//     setTimeout(()=>{
//         handle(data)
//         console.log('handle data...', data);
//     },Math.random() * 30)
// },Math.random() * 30)

// function handle(data){
//     data.push(4)
// }

// Promise - это объект, который позволяет работать с асинхронным кодом

//// Cостояния Promise:
//// 1) resolve -  ответ от сервера (403 или 404)
//// 2) reject - ответа нету

let promies = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let data = [1,2,3]
        console.log(data);
        resolve()
        // reject()
    }, 2000)
})



// Метод THEN -  метод дожидается пока promieы получит функцию resolve  и потом далее исполни свой колбэк.
promies.then((data, string) => {
    data.push(4)
    console.log(data, string);
    console.log('я гарантирую что появлюсь после появления данных')
});
