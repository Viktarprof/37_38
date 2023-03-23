import React,{useState} from 'react'
function Counter(){
  // [состояние, функция которая отслеживание изменение состояния]
  let [likes, setLikes] = useState(0)
  
  let decrement = () =>{
    setLikes(--likes)
    console.log(likes);
  }

  let increment = () =>{
    setLikes(++likes)
    console.log(likes);
  }


  return(
    <div>
      <button onClick={decrement}>-</button>
      <p>{likes}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}
export default Counter