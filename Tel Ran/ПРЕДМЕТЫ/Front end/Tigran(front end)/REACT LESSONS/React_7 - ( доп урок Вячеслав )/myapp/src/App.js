import './App.css'
import Content from "./components/content/Content"
import { offers, rent } from "./components/data/data"

function App(){
  return(
    <div className="App">
      <Content obj = {offers}/>
      <Content obj = {rent}/>
    </div>
  )
}
export default App