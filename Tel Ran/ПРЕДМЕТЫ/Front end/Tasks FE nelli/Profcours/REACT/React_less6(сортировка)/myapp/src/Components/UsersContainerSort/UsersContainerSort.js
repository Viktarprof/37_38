
import { users } from '../../data/users'
import User from '../User/User'
import s from './UsersContainerSort.module.css'
import React, { useState } from 'react'


function UsersContainerSort(){

let [ userList, setUserList] = useState(users)
// const sortUsers = () => {
//     setUserList(users.slice().sort((a, b) => a.age - b.age))
// }

const sortUsersAge = () => {
    setUserList([...userList].sort((a, b) => a.age - b.age))
}


const sortUsersName = () => {
    setUserList([...userList].sort((a, b) => a.firstname.localeCompare(b.firstname)))
}


    return(
        <div>
            <div className = {s.containerCards}>
                {userList.map(el => <User key = {el.id} {...el}/>)}
            </div>
                <button onClick={sortUsersAge}> Sort by age </button>
                <button onClick={sortUsersName}> Sort by name </button>
        </div>
    )
}
export default UsersContainerSort





// ДЗ
// Добавить кнопку, при клике на которую карточки сортируются по имени в алфавитном порядке