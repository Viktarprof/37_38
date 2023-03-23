import style from './Card.module.css'

function Card({id, rus, eng, lang, translateCard}){

    // console.log(translateCard);
    let words = lang === 'eng' ? eng : rus;
    
    const card_style = {
        color: lang === 'rus' ? 'rgb(41,128,185)' : 'white',
        backgroundColor: lang === 'rus' ? 'white' : 'rgb(41,128,185)'
    }

    return(
    
        <div className = {style.wordCard} 
             style={card_style}
             onClick = {()=> translateCard(id)}>
            <p>{words}</p>
        </div>
    )
}
export default Card