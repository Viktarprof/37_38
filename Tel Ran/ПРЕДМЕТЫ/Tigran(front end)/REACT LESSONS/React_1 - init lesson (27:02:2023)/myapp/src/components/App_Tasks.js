import Card_complited from "./Card_complited"
import Card_not_complited from "./Card_not_complited"

function App_Tasks(){
    return(
      <div>
        <h1>СПИСОК ЗАДАЧ</h1>
        <Card_complited/>
        <Card_complited/>
        <Card_not_complited/>
        <Card_complited/>
      </div>
    )
  }
  export default App_Tasks