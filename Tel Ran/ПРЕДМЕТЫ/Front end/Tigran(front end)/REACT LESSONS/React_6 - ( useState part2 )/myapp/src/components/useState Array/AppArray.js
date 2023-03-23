import { useState } from "react"
import UserInfo from "./UserInfo"

function AppArray(){
    const data = [
        {id: 1 , name: 'Alex', salary: 1500},
        {id: 2 , name: 'Steven', salary: 2000},
        {id: 3 , name: 'Neena', salary: 1000},
        {id: 4 , name: 'John', salary: 4500},
        {id: 5 , name: 'King', salary: 400},
    ]

    let [users, setUsers] = useState(data)

    // Правило: если мы хотим учесть в новом массиве старые записи - их необходимо указать в виде нового массива (копии)
    const addEmplHandle = () =>{ // добавляем нового юзера
        let newUsers = {id: Date.now(),
                        name: prompt(),
                        salary: prompt()}
     
        setUsers([newUsers, ...users]) // тут можно помнять начало или конец добавления элементов массив
    }


//====================================
    const remLastEmplHandle = () => {
        let newuser = users.slice() // создал копию
        newuser.pop(); //удалил последний элемент
        console.log(newuser);
        setUsers(newuser) //перезаписали изменный массив
    }




//====================================
    // const add_sallary_lHandle = () => {
    //     let newSalary = [...users];
    //     newSalary.forEach((el) => {el.salary = Math.round(el.salary * 1.1)})
    //     setUsers(newSalary) 
    // }


    const add_sallary_lHandle = () => {
        let newSalary = users.map(el => ({...el, salary: Math.round(el.salary * 1.1)}))
        setUsers(newSalary) 
    }
//====================================

const deleteUserById = (id) => {
    let newUsers = users.filter(el => el.id != id)
    setUsers(newUsers) 
}

//=======================================
// const deleteUserModal = () => {
//     let modalResult = +prompt('Введите ID')
// // так
//     // const usersId = users.map(el => el.id)
//     // if(usersId.includes(modalResult)){
//     //     deleteUserById(modalResult)
//     // } else {
//     //     alert('Пользователь уже удален')
//     // } 
//     // console.log(users);
// // или так
//     const usersId = users.find(el => el.id == modalResult)
//     if(usersId){
//         deleteUserById(modalResult)
//     } else {
//         alert('Пользователь уже удален')
//     } 
//     console.log(users);
   
// }
// //=======================================

    return(
        
       <div>
            <div>
                <button onClick={addEmplHandle}>Add users</button>
                <button onClick={remLastEmplHandle}> Удалить пользователя </button>
                <button onClick={add_sallary_lHandle}> увеичить зарплату на 10% </button>
                {/* <button onClick={deleteUserModal}> Удалить пользователя по ID</button> */}
            </div>

            <div>
                {users.map((el) => <UserInfo key = {el.id} 
                                             name = {el.name} 
                                             salary ={el.salary}
                                             id = {el.id}
                                             deleteUserById = {deleteUserById}/>)}
            </div>
        </div> 
    )
}
export default AppArray












// function AppArray(){
//     const data = [
//         {id: 1 , name: 'Alex', salary: 1500},
//         {id: 2 , name: 'Steven', salary: 2000},
//         {id: 3 , name: 'Neena', salary: 1000},
//         {id: 4 , name: 'John', salary: 4500},
//         {id: 5 , name: 'King', salary: 400},
//     ]

//     let [users, setUsers] = useState(data)

//     const addEmplHandle = () =>{
//         let newUsers = [...users]
     
//         newUsers.push({id: Date.now(), name: prompt(), salary: prompt() })
//         setUsers(newUsers)
//     }
//     return(
        
//        <div>
//             <div>
//                 <button onClick={addEmplHandle}>Add users</button>
//             </div>

//             <div>
//                 {users.map((el) => <UserInfo key = {el.id} name = {el.name} salary ={el.salary}/>)}
                
//             </div>
            
//         </div> 
//     )
// }
// export default AppArray
