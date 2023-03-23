import User from "../User/User"
import UsersContainerSort from "../UsersContainerSort/UsersContainerSort"
import { users } from '../../data/users'
import s from './UsersContainer.module.css'



function UsersContainer(){

 

    return(
        <div>
            <div className = {s.containerCards}> 
                {users
                .filter(el => el.age >= 18 && el.active)
                .map(el => <User key = {el.id} {...el}/>)}
            </div>
        </div>
    )
}
export default UsersContainer



// 4. Стилизовать карточки пользователей (border, border-radius, padding). Из контейнера пользователей мделать грид - 4 колонки.
// 5. Если пользователь онлайн покрасить карточку в светло-зеленый цвет. А если оффлайн - то в светло-серый

// 6. Выводить на экран карточки только тех пользователей, которые онлайн и старше 18 лет