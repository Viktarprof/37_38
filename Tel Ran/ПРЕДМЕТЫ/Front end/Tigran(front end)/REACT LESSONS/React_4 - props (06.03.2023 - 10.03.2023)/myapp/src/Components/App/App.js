import Block from "../Block/Block"
import Content from "../Content/Content"


// первый урок 06/03/2023
// 1) передать параметр как отрибут внутри компонента
// 2) Их правильно получить

// function App(){
//     return(
//         <div >
//             <Block title = {'Title 1'} name = {'Viktor 1'} color = {'yellow'} size ={'l'} isRead= {false}/>
//             <Block title = {'Title 2'} name = {'Viktor 2'} color = {'rgba(0, 255, 42, 0.614)'} size ={'m'} isRead={false}/>
//             <Block title = {'Title 3'} name = {'Viktor 3'} color = {'tomato'} size ={'xl'} isRead={true}/>
//             <Block title = {'Ураа'} name = {'Тест'} />
//             <Content/>

//         </div>
//     )
// }
// export default App


// Для каждого выводимого компонента Block сформировать новый проп, который будет ссылаться на текст поста






// второй урок 10/03/2023
function App(){
    return(
        <div>
        <Content color={'green'} discount_price={1000} price={1500}/>
        <Content color={'blue'} discount_price={2000} price={2200}/>
        <Content color={'yellow'} discount_price={400} price={900}/>
    </div>
    )
}
export default App