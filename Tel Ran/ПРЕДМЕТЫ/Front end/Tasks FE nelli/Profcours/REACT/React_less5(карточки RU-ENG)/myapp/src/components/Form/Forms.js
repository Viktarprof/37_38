import s from './Form.module.css'

function Forms( {addCard} ){

    const submit_form = event =>{
    event.preventDefault();
    const { rus, eng } = event.target;

    const card = {
        id: Date.now(),
        rus: rus.value,
        eng: eng.value,
        lang: 'rus'
    }
    console.log(card);

    addCard(card);

    rus.value = '',
    eng.value = ''
    
}

    return(
    <form onSubmit = {submit_form} className ={s.form}>
        <input type ="text" placeholder = 'Bведите слово на RU' name = "rus"></input>
        <input type ="text" placeholder = 'Bведите слово на ENG' name = "eng"></input>
        <button>Записать</button>
    </form>
    )
}
export default Forms