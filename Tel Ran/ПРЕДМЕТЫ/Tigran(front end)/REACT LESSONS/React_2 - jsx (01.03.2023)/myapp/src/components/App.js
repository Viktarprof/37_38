// 1) Правило JSX: внутри разметки необходимо указать {} для того, чтобы учесть JS ВЫРАЖЕНИЕ


// 2) Правило: в любом месте можно перейти из JS в HTML и обратно
//      для перехода из HTML в JS необходимо указать {} (1 правило)
//      для перехода из JS в HTML ничего указывать не нужно



//================================================

// function App(){

//     const string = ' Viktor! '
//     let a = 100

//     return(
//         <div className = {(a < 50) ? 'true' : 'false'}>
//               name
//                 {string}
          
//                 <p>{`name is ${string === 'Tigran ' ? true : false + '. Имя Тигран'}`}</p>
            
//         </div>
//     )
// }

// export default App





//================================================
function App(){

    const a  = 100;
    return(
        <div>
            {(a == 100) 
                ? 
                <div>
                    <h2>Тернарный оператов показывает</h2>
                        <p>{<p>{<p>{a}</p>}</p>}</p>
                </div>  
                : <div>
                    <h2>Тернарный оператов показывает</h2>
                    <h1>Заголовок</h1>
                </div>  }

                <div>
                    {a === 100 && <p> a = 100 </p>}
                    {true && <p> a = 100 </p>}
                    {false && <p> a = 100 </p>}
                </div>
        </div>
    )
}

export default App