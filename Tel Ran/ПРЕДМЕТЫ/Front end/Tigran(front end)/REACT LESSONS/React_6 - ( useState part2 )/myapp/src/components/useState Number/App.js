// задание 1
// Реализовать кнопку декремент, которая будет декрементировать значение состония count

// задание 2
// Реализовать 2 кнопки которые бут увеличивать и уменьшать актуальное состояние на 100

// задание 3
// а) Создать кнопку которая обнулить состояние count
// б) Создать еще две кнопки которые будут увеличивать и уменьшить значение count. Значение должно подтягиваться с модального окна.

// Задание 4.
// Для последних двух кнопок реализовать фнукции, которые будут осуществлять проверку. 
// Если итоговый результат модального окна будет выисляться как NaN - setCount вызываться не должен

import { useState } from "react"

function App(){
   
    let [count, setCount] = useState(0)
    
    const Heandel_inc = () => {
        let answer = +prompt()
        if( !isNaN(answer) ){
            setCount(count + answer)
        }
    }

    const Heandel_dec = () => {
        let answer = +prompt()
        if( !isNaN(answer) ){
            setCount(count - answer)
        }
    }

    const handle = (sign) => {
        let answer = +prompt()
        if (!isNaN(answer)){
            if (sign == '+'){
                setCount(count + answer)
            } else if (sign == '-'){
                setCount(count - answer)
            }
        }
    }

    return(
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => setCount(--count)}>Декремент</button>
                <button onClick={() => setCount(++count)}>Инкремент</button>   
            </div>

            <div>
                <button onClick={() => setCount(count - 100)}>Отнять 100</button>
                <button onClick={() => setCount(count + 100)}>Добавить 100</button>
            </div>

            <div>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>

            <div>
                <button onClick = {() => setCount(count -  Number(prompt()))}>Отнять n</button>
                <button onClick = {() => setCount(count + +prompt())}>Добавить n</button>
            </div>

            <div>
                <button onClick = {Heandel_dec}>Отнять n через функцию</button>
                <button onClick = {Heandel_inc}>Добавить n через функцию</button>
            </div>
            <div>
                <p> не работют кнопки</p>
                <button onClick = {handle}>Отнять n через одну функцию</button>
                <button onClick = {handle}>Добавить n через одну функцию</button>
            </div>
                
        </div>
    )
}
export default App