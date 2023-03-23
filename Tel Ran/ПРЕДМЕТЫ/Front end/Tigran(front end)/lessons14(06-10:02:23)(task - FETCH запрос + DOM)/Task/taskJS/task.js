// -_-_ ЗАДАЧA С УРОКА №1 _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


// Создать функцию, которая получает id пользователя и выводит в консоль данные о пользователе. Если такого пользователя нет, необходимо вызвать исключение “Такого пользователя нет". 
// Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>


// let url = 'https://jsonplaceholder.typicode.com/users/'
// fetch(url)
//       .then(res => res.json())
//       .then(data => console.log(data));

// // -_-_ решение 1 -_-_-_-_-_-неверное_-_-_-_-_-_-_-_-_-_-_-_-_
// async function get_ID_users(id){
//     try{
//         let url = `https://jsonplaceholder.typicode.com/users/${id}`
//         let res = await fetch(url)
//         let data = await res.json()
//             console.log(data);
//     } catch {
//         console.log("Такого пользователя нет");
//     }
// }
// get_ID_users(111)



// -_-_- решение 2 _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// const get_user_BYID = (id)=>{
// let url = `https://jsonplaceholder.typicode.com/users/${id}`
// fetch(url)
//     .then(response =>(response.status == 404) ? console.log('Такого пользователя нет') : response.json())
  
//     .then(data  => (data) ? console.log(data): '') // данные которые декодировали
//     .catch(() => console.log('my error'))
// }
// get_user_BYID(1)





// -_-_ ЗАДАЧA С УРОКА №2 _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// Доработать ранее созданную функцию таким образом, чтобы помимо данных о пользователе (имя и почта) выводились все посты пользователя.
// Ссылка: 
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>

// Данные должны быть в виде объекта 

//_-_-_ РЕШЕНИЕ 1 -_-_-_-_-_-_-_-_-_-_-_-
// const get_info = (id)=>{
//     let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`
//     let urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
//     fetch(urlUser)
//         .then(response =>(response.status == 404) ? console.log('Такого пользователя нет') : response.json())
//         .then(data => {
//             if(data){
//                 let urlPosts = {
//                             users: {name: data.name, email: data.email},
//                             posts: [ ]
//                         }
//             fetch(urlPost)
//                 .then(response => response.json())
//                 .then(data => {
//                     urlPosts.posts = [...data]
//                         console.log(urlPosts);
//                 })
//             }
//         })
//     }      
// get_info(1)


//_-_-_-_ РЕШЕНИЕ 2 -_-_-_-_-_-_-_-_-_-_-
async function get_info1(id){
    let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`
    let urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    let resUser = await fetch(urlUser)
        if(resUser.status == 400){
            console.log('Такого пользователя нет')
        return
    }
    let dataUsers = await resUser.json()
    let dataPosts = await fetch(urlPost).then(res => res.json())
    let userPosts = {
        user: {name: dataUsers.name, email: dataUsers.email},
        posts: [...dataPosts]
    }
    render(userPosts)
}




// //_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// const promies = Promise.all(
//     [
//     fetch(`https://jsonplaceholder.typicode.com/users/1`),
//     fetch(`https://jsonplaceholder.typicode.com/users/2`)
//     ]
// )
// promies
//     .then((ress) => Promise.all (ress.map(el => el.json())))
//     .then((a) => console.log(a[0],a[1]))
// //_-_-_-_-_-_-_-_-_-_-_-_-_-_-







// -_-_ ЗАДАЧA С УРОКА №3 _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// Создать функцию (render), которая генерирует div с данными о пользователе и всеми его постами. Возвращаемая карточка должна иметь следующую структуру. 

//<div class="user-container">
//          <div class="user">
//              <p>Имя пользователя</p>
//              <p>Почта пользователя</p>
//          </div>
//          <div class="posts">
//              <div class="item">
//                  <p>Название поста</p>
//                  <p>Текст поста</p>
//              </div>
//              <div class="item">
//                   <p>Название поста</p>
//                  <p>Текст поста</p>
//              </div>
//   ….….
//          </div>
// </div>

function render(obj){
    const root_div = document.querySelector('#root');

     // создание контейнера
 let container_div = document.createElement('div')
     container_div.className = 'user-container'
     root_div.append(container_div)

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
    });    
}
get_info1(1)