// Задача 1
async function getUserById(id){
    let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`
    let urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`

    let resUser = await fetch(urlUser)
    if (resUser.status == 404){
        getErrorMessage('Такого пользователя нет')
        return
    }
    let dataUser = await resUser.json()
    let dataPosts = await fetch(urlPost).then(res => res.json())
    let userPosts = {
        user: {name: dataUser.name, email: dataUser.email},
        posts: [...dataPosts]
    }
    render(userPosts)
}



// Задача 2 (продолжение)
function render(obj){
    // Подготовка user-container (div)
    container_div.innerHTML = ''

    // создание div с user
    let user_div = document.createElement('div')
    user_div.className = 'user'
    container_div.append(user_div)

    // заполнение div с данными user
    Object.values(obj.user).forEach(elem => {
        let p_elem = document.createElement('p')
        p_elem.innerText = elem
        user_div.append(p_elem)
    })

    // создание div с posts
    let div_posts = document.createElement('div')    
    div_posts.className = 'posts'
    container_div.append(div_posts)

    // Заполнение posts
    obj.posts.forEach(elem => {
        let div_item = document.createElement('div')
        div_item.className = 'item'
        div_posts.append(div_item)

        let h3_elem_title = document.createElement('h3')
        let p_elem_text = document.createElement('p')

        h3_elem_title.innerText = elem.title
        p_elem_text.innerText = elem.body

        div_item.append(h3_elem_title, p_elem_text)
    })
}


// Задача 3 
// Задание: Напишите фунцию getErrorMessage(), которая построит внутри container_div элемент с текстовым значеием ошибки 
// 'Пользователь не найден.' 
// Можно использовать класс user

function getErrorMessage(text){
    // Подготовка user-container (div)
    container_div.innerHTML = ''

    // создание div с user
    let user_div = document.createElement('div')
    user_div.className = 'user'
    container_div.append(user_div)

    // Текст с ошибкой
    let p_elem = document.createElement('p')
    p_elem.innerText = text
    user_div.append(p_elem)
}


// Задача 2 (начало)
//-----------------------------------------
let root_div = document.querySelector('#root')

// создание контейнера

let container_div = document.createElement('div')
container_div.className = 'user-container'
root_div.append(container_div)

// getUserById(4)


//-----------------------------------------
// Задача 4
// Написать функционал, который позволит по кнопкам (<- и ->) 
// инкрементероивать и декрементировать аргумент функции getUserById

// Функцию getUserById так же необходимо адаптировать под этот функционал

// Доп-задание: 
// Между кнопками отобразите информацию текущего пользователя (его id)
//-----------------------------------------

let queue = 1

let [buttonDecr, buttonIncr] = document.querySelectorAll('button')

function handle(type){
    if (type == 'decr'){
        getUserById(--queue)
    } else if (type == 'incr') {
        getUserById(++queue)
    }   
    // Код с 4 задания (доп задача)
    let b_elem = document.querySelector('b')
    b_elem.innerText = queue
}

// Решение1 
buttonDecr.onclick = () => handle('decr')
buttonIncr.onclick = () => handle('incr')

// Решение 2
// buttonDecr.addEventListener('click', () => getUserById(--queue))
// buttonIncr.addEventListener('click', () => getUserById(++queue))

getUserById(queue)





