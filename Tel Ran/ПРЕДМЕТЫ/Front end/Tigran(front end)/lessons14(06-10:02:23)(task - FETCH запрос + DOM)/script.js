// POST можем добавлять, удалять, изменять данные на сервер(-е)
// GET запрос что там есть


// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// GET
let url = 'http://51.250.8.198:8000/api/get_all/'
fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))





// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// POST 
const createPosts = (title, text)=>{
let url = 'http://51.250.8.198:8000/api/create/'

// let data = {
//       title: 'Today is 06/02/23',
//       text: 'Урок FE group 37-38'
      let data = {
            title,
            text
}
fetch(url, {
      method: 'POST', // GET, PUT, PATCH, DELETE, HEAD, OPTIONS
      headers: {
            'Content-Type': 'application/json;charset=utf-8' 
      },
      body: JSON.stringify(data)
})
}
createPosts('test','test') // тут задаем свой текст



// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// DELETE
const deleteDyId = (id)=>{
let url = `http://51.250.8.198:8000/api/drop/${id}` // можно указать номер id объекта

fetch(url, {
      method: 'DELETE',// DELETE писать большими буквами
      headers: {
             'Content-Type': 'application/json;charset=utf-8' 
      }
})
}
deleteDyId(74)
deleteDyId()






// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// async, await

// 1) Синтаксический сахар, который позволяет избежать метод then 
// 2) Применяется строго к функциям. Перед функцией должен указываться оператор async
// 3) Чтобы сохранить результат работы промиса, перед присвоением к переменной необходимо указать оператор await
// 4) Код внутри функции будет линейно дожидаться выоплнения каждого await
// 5) Избегает метод then, но не catch (см конструкцию try... catch)

// async function fetchUsers(){
//       let url = 'https://jsonplaceholder.typicode.com/users'
//       let res = await fetch(url)
//       let data = await res.json()
//       console.log(data)
// }
// fetchUsers()



// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// Обработчик ошибок try ... catch

// Назначение: обработка возможных ошибок

// 1) В блоке TRY помещается проблемный фрагмент кода (который может вызвать ошибку)
// 2) CATCH указывает на код, который будет исполнен в случае если TRY зафиксирует ошибку

try{
      let a = 10 + b; //  Ошибка. Переменной b не существует
      //let a = 10 + 10; // ошибки нету
} catch{
      console.log('Обработали ошибку'); // Вместо ошибки мы получим в консоль данное сообщение 
}
// После обработки скрипт далее исполнит весь код
console.log('log 2');



// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// если ошибка на стороне сервера, то результат будет 'например страниц не найдена'. сервер вернет какой-то резельтат (пустой ответ)
// если ошибка на стороне клиента, то покажет где ошибка и какая ошибка ('Не удается получить доступ к сайту')

// Обработка ошибок на стороне запроса (как внутри домена, так и внутри доступа к route)

async function fetchUsers(){
      try {
            let url = 'https://jsonplaceholder.typicode.com/user345s'
            let res = await fetch(url)
            if (res.status >= 400){
                  console.log('ID пользователя не существует или ссылка не верная')
            } else {
                  let data = await res.json()
                  console.log(data, res)
            }
      } catch(e) {
            console.log('Сервер не найден')
      }
}
fetchUsers()


//// Обработка на стороне метода PROMIES (результат работы fetch)

// Обработка на стороне метода promise (результат работы fetch)
let url1 = 'https://jsonplaceholder.typicode.com/userwers'
fetch(url1)
      .then(res => {
            if (res.status >= 400){
                  console.log('ID пользователя не существует или ссылка не верная')
            } else {
                  return res.json()
            }
      })
      .then(data => (data) ? console.log(data) : '')
      .catch(() => console.log('Сервер не найден'))




// -_-_-_-_ смотри файл taskJS ЗАДАЧИ С УРОКА  -_-_-_-_-_-_-_-_-_-_-