import { useState } from "react";
import './App.css'

function AppString(){

    let [color, setColor] = useState('red');
    let [size, setSize] = useState('')

    const color_handle = () => {
        setColor('blue')
    }
   
    const size_handle = () => {
        setSize('big')
    }

    return(
        <div>
            <div 
                // стейт size используется как значение className (либо пустой, либо 'big') св-ва
                className={`item ${size}`} 
                // стейт color используется как параметр css св-ва
                style={{backgroundColor: color}}>

            </div>
            <button onClick={color_handle}>Поменять цвет на синий</button>
            <button onClick={size_handle}>Увеличивать размер</button>
        </div>
    )
}

export default AppString







// пример постоянного увеличения через кнопку
// function AppString(){
    // let [manysize, setManysize] = useState({width: 100, heigth: 100})

    // const many_size_handle = () =>{
    //     setManysize({
    //         width: manysize.width + 100,
    //         heigth: manysize.heigth + 100
    //     })
    // }

//     return(
//         <div>
//             <div 
//                 // стейт size используется как значение className (либо пустой, либо 'big') св-ва
//                 className={`item ${size}`} 
//                 // стейт color используется как параметр css св-ва
//                 style={{
//                         width: manysize.width, 
//                         height: manysize.heigth
//                         }}>

//             </div>
            
//             {/* <button onClick={many_size_handle}>Увеличить размер на 100</button> */}

//         </div>
//     )
// }

// export default AppString