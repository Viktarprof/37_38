import s from './User.module.css'


function User({firstname, lastname, age, active}){

const status = active ? 'online' : 'offline';

const cardsStyle = {
    backgroundColor: active ? 'lightgreen' : 'lightgray'

}
    return(
        <div className = {s.cards} style = {cardsStyle}>
            <p>Имя и Фамилия: {`${firstname} ${lastname}`}</p>
            <p>Возраст: {age}</p>
            <p>Статус: {status}</p>
        </div>
    )
}
export default User



// 1. Создать два компонента - User и UsersContainer
// 2. Добавить UsersContainer в App
// 3. Для каждого пользователя создать карточку (User) в UsersContainer - имя + фамилия, возраст, статус. Статус - 'online' (true) или 'offline' (false)

//4. Стилизовать карточки пользователей (border, border-radius, padding). Из контейнера пользователей мделать грид - 4 колонки.
// 5. Если пользователь онлайн покрасить карточку в светло-зеленый цвет. А если оффлайн - то в светло-серый