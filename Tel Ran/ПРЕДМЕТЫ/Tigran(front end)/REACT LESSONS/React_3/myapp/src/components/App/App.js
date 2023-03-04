// import '../App.css'
import myStyle from'./App_module.css'
import Block from '../Block/Block'

function App(){
    return(
        <div id="card">
            <div 
                className={`${myStyle.item} ${myStyle.yellow}`}>
                123
            </div>
           <Block/>
        </div>
    )
}
export default App