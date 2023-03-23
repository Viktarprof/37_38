import { useState } from 'react'
import ContentFilter from "./ContentFilter"
import ContentList from "./ContentList"


function Content(){

    const data = [
        {id: 1, name: 'Iphone X', price: 1000, check: true},
        {id: 2, name: 'Sumsung S21', price: 250, check: false},
        {id: 3, name: 'Monopod', price: 350, check: true},
        {id: 4, name: 'Samokat', price: 1600, check: false},
        {id: 5, name: 'ReadMe', price: 10000, check: false},
    ]


    const[card, setCards] = useState(data)
// 1 задание
    // В компоненте ContentFilter создайте кнопку, которая будет вызывать модальное окно, которое будет
    // ссылаться на id элемента массива, который необходимо будет удалить
    const deleteCardById = () => {
        let prompt_result = +prompt('Bведите ID')
        let newCards = card.filter(el => el.id != prompt_result)
        setCards(newCards)
    }

    // 2 задание
    // В компоненте ContentFilter создайте кнопку, которая будет вызывать модальное окно, которая будет
    // ссылаться на id элемента массива. Функция должна изменить сво-во check с true на false (или с false на true)
    const changeCheckById = () => {
        let prompt_result = +prompt('Bведите ID')
        let newCards = [...card]
            newCards.forEach((el) => { 
                if (el.id == prompt_result){
                    el.check = !el.check}
                })
        setCards(newCards)
    }

    return(
        <div>
          
            <ContentFilter 
                        deleteCardById = {deleteCardById} 
                        changeCheckById = {changeCheckById}/>
            <ContentList card = {card}/>
        </div>
    )
}
export default Content





    