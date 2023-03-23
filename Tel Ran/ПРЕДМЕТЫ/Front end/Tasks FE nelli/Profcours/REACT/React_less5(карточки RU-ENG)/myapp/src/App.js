import { useState } from 'react'
import { words } from './data/words'
import s from './App.module.css'
import CardsContainer from "./components/cardsContainer/CardsContainer"
import Forms from "./components/Form/Forms"
import Triggers from './components/Triggers/Triggers'




function App(){

const [cards, setCards] = useState(words)

const addCard = (newCard) => setCards([...cards, newCard]);

const cardEng =()=>{
  setCards(cards.map(el => ({...el, lang: 'eng'}))
)}
const cardRu =()=>{
  setCards(cards.map(el => ({...el, lang: 'rus'}))
)}

const translateCard =(id)=>{
  const newCards = [...cards]
      newCards.forEach((el) => {
            if(el.id === id){
                if(el.lang === 'rus'){
                  el.lang ='eng'
                } else {
                  el.lang ='rus';
                }
            }
      })
  setCards(newCards);
}
 


  return(
    <div className = {s.container}>
      <Forms addCard = {addCard}/>
      <CardsContainer 
                    cards_array = {cards} 
                    translateCard = {translateCard}
                    />

      <Triggers 
              cardRu = {cardRu} 
              cardEng = {cardEng}/>
      
    </div>
  )
}
export default App