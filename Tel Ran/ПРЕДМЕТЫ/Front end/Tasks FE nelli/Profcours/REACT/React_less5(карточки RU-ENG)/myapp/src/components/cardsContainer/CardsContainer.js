import Card from '../card/Card'
import style from './cardsContainer.module.css'

function CardsContainer({ cards_array, translateCard }){
    return(
        <div className = {style.cardsContainer}>
            { cards_array.map((el) =>  (<Card key = {el.id} {...el} translateCard = {translateCard}/>))}
        </div>
    );
};
export default CardsContainer