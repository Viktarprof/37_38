function ContentItem(props){

    const { name, price, check } = props
    const card_style = {margin:25, 
                        border: '1px solid black', 
                        width: 250, 
                        textAlign: 'center'}



    return(
        <div style={ card_style }>
           <h2>{name}</h2>
           <p>Цена: {price}</p>
           <p>Статус: {check ? <p>Просмотрен</p> : "-"}</p>
        </div>
    )
}
export default ContentItem

// Компонент ContentItem должен получить также проп check, который взависиомсти от булевого типа
    // должен сформировать (в конце div) тег <p></p> с значением 'Просмотрен'. 
    // Если значение пропа check будет false - этот тег появится не должен