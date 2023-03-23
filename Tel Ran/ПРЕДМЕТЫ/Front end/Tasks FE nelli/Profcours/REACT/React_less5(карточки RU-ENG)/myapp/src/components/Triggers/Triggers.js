import s from './Triggers.module.css'
function Triggers({cardEng, cardRu}){
    return(
        <div className={s.triggers}>
             <button onClick={cardEng}>ENG</button>
             <button onClick={cardRu}>RUS</button>
        </div>
     
    )
}
export default Triggers