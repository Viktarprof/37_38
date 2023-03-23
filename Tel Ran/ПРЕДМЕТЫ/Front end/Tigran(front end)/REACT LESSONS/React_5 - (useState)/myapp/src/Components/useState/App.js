import {useState} from 'react'


function App(){

// const [state, setState] = useState()
// state  - это состояние, которое может передавать абсолютно любые данные
// setState - это функция , которая перезаписывает State и заставляет компонент обновиться

    let [count, setCount] = useState(0);
   
    // функция handle вызывает setState setCount, который перезаписывает значение стейта count и обновляет 
    const handle = () => {
        console.log(count);
        setCount(++count)

    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handle}>Клик!</button>
        </div>
    )
}
export default App